import { z } from "zod";
import { courses } from "content/courses";
import { parseLocale, pick, type Locale } from "@/lib/locale";
import { formCopy } from "@/i18n/ui";

const categoryCodes = courses.map((course) => course.code) as [
  (typeof courses)[number]["code"],
  ...(typeof courses)[number]["code"][],
];

export function enrolSchema(locale: Locale) {
  const t = (key: keyof typeof formCopy) => pick(formCopy[key], locale);
  return z.object({
    name: z.string().trim().min(2, t("errName")).max(120),
    phone: z
      .string()
      .trim()
      .min(7, t("errPhone"))
      .max(40)
      .regex(/^[+\d][\d\s()-]{6,}$/u, t("errPhoneInvalid")),
    email: z.string().trim().email(t("errEmail")),
    category: z.enum(categoryCodes, { message: t("errCategory") }),
    message: z.string().trim().max(2000).optional().default(""),
    website: z.string().optional().default(""),
    startedAt: z.string().trim(),
    uiLocale: z.string().optional(),
  });
}

export type EnrolInput = z.infer<ReturnType<typeof enrolSchema>>;

export type EnrolFieldErrors = Partial<Record<keyof EnrolInput | "form", string>>;

export type EnrolState =
  | { status: "idle" }
  | { status: "success"; name: string }
  | { status: "error"; fields: EnrolFieldErrors; message: string };

function rawFrom(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    email: String(formData.get("email") ?? ""),
    category: String(formData.get("category") ?? ""),
    message: String(formData.get("message") ?? ""),
    website: String(formData.get("website") ?? ""),
    startedAt: String(formData.get("startedAt") ?? ""),
    uiLocale: String(formData.get("uiLocale") ?? ""),
  };
}

export function localeFromForm(formData: FormData): Locale {
  return parseLocale(String(formData.get("uiLocale") ?? ""));
}

export function parseEnrolForm(formData: FormData): EnrolState {
  const locale = localeFromForm(formData);
  const t = (key: keyof typeof formCopy) => pick(formCopy[key], locale);
  const parsed = enrolSchema(locale).safeParse(rawFrom(formData));
  if (!parsed.success) {
    const fields: EnrolFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form") as keyof EnrolFieldErrors;
      if (!fields[key]) fields[key] = issue.message;
    }
    return { status: "error", fields, message: t("errFix") };
  }

  if (parsed.data.website) {
    return { status: "success", name: parsed.data.name };
  }

  const started = Number(parsed.data.startedAt);
  if (!Number.isFinite(started) || Date.now() - started < 3000) {
    return { status: "error", fields: { form: t("errSlow") }, message: t("errSlow") };
  }

  return { status: "success", name: parsed.data.name };
}

export function enrolValues(formData: FormData): EnrolInput | null {
  const parsed = enrolSchema(localeFromForm(formData)).safeParse(rawFrom(formData));
  return parsed.success ? parsed.data : null;
}
