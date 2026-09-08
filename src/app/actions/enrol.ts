"use server";

import { headers } from "next/headers";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import { school } from "content/school";
import { courseByCode } from "content/courses";
import { intakes } from "content/intakes";
import {
  enrolValues,
  localeFromForm,
  parseEnrolForm,
  type EnrolState,
} from "@/lib/enrol-schema";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { formatIntakeWhen, formatPln } from "@/lib/format";
import { pick } from "@/lib/locale";
import { formCopy, ui } from "@/i18n/ui";

export async function submitEnrol(
  _prev: EnrolState,
  formData: FormData,
): Promise<EnrolState> {
  const locale = localeFromForm(formData);
  const t = (key: keyof typeof formCopy) => pick(formCopy[key], locale);
  const headerList = await headers();
  const ip = clientIp(headerList);

  if (!rateLimit(ip)) {
    return {
      status: "error",
      fields: { form: `${t("errRate")} ${school.phone.office}.` },
      message: `${t("errRate")} ${school.phone.office}.`,
    };
  }

  const parsed = parseEnrolForm(formData);
  if (parsed.status === "error") return parsed;

  const values = enrolValues(formData);
  if (!values) {
    return { status: "error", fields: { form: t("errRead") }, message: t("errRead") };
  }

  if (values.website) {
    return { status: "success", name: values.name };
  }

  const course = courseByCode(values.category);
  const intake = intakes.find((item) => item.id === values.intakeId);
  const intakeLabel = intake
    ? formatIntakeWhen(intake.startsAt, locale)
    : pick(formCopy.firstSeat, locale);
  const courseName = course ? pick(course.name, locale) : values.category;
  const langLabel = values.language === "en" ? pick(ui.english, locale) : pick(ui.polish, locale);

  const body = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Category: ${courseName}${course ? ` (${formatPln(course.priceGross)})` : ""}`,
    `Language: ${langLabel}`,
    `Preferred intake: ${intakeLabel}`,
    `UI locale: ${locale}`,
    "",
    values.message || "(no message)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENROL_FROM_EMAIL ?? "DriveWay Szkoła jazdy <onboarding@resend.dev>";

  try {
    if (!apiKey) {
      const dir = path.join(process.cwd(), ".data");
      await mkdir(dir, { recursive: true });
      await appendFile(
        path.join(dir, "enrolments.jsonl"),
        `${JSON.stringify({ at: new Date().toISOString(), ip, ...values })}\n`,
      );
      if (process.env.NODE_ENV === "production") {
        throw new Error("RESEND_API_KEY is not configured");
      }
      return { status: "success", name: values.name };
    }

    const resend = new Resend(apiKey);
    const toSchool = await resend.emails.send({
      from,
      to: school.email,
      replyTo: values.email,
      subject: `Enrolment: ${values.name} · ${values.category}`,
      text: body,
    });
    if (toSchool.error) throw new Error(toSchool.error.message);

    const reply = await resend.emails.send({
      from,
      to: values.email,
      subject: `${pick(formCopy.received, locale)} ${school.name}`,
      text: [
        `${values.name},`,
        "",
        `${courseName} (${langLabel}). ${intakeLabel}.`,
        "",
        school.phone.office,
        school.phone.mobile,
        "",
        school.name,
        `${school.address.street}, ${school.address.postcode} ${school.address.city}`,
      ].join("\n"),
    });
    if (reply.error) throw new Error(reply.error.message);

    return { status: "success", name: values.name };
  } catch {
    return {
      status: "error",
      fields: {},
      message: `${t("errSend")} ${school.phone.office} / ${school.phone.mobile}. ${t("errAssume")}`,
    };
  }
}
