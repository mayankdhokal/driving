"use client";

import { useActionState, useLayoutEffect, useRef } from "react";
import { courses } from "content/courses";
import { school } from "content/school";
import { submitEnrol } from "@/app/actions/enrol";
import { telHref } from "@/lib/format";
import type { EnrolState } from "@/lib/enrol-schema";
import { pick, type Locale } from "@/lib/locale";
import { formCopy } from "@/i18n/ui";
import { LocaleLink } from "@/components/locale-link";

const initial: EnrolState = { status: "idle" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="error">
      {message}
    </p>
  );
}

export function EnrolForm({ locale }: { locale: Locale }) {
  const [state, action, pending] = useActionState(submitEnrol, initial);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const t = (key: keyof typeof formCopy) => pick(formCopy[key], locale);

  useLayoutEffect(() => {
    if (startedAtRef.current && !startedAtRef.current.value) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  if (state.status === "success") {
    return (
      <div className="border border-line bg-white p-8" role="status">
        <h2 className="display text-3xl font-bold">
          {t("received")} {state.name}.
        </h2>
        <p className="mt-3 text-muted">
          {t("receivedBody")}{" "}
          <a className="underline" href={telHref(school.phone.office)}>
            {school.phone.office}
          </a>
          .
        </p>
      </div>
    );
  }

  const fields = state.status === "error" ? state.fields : {};

  return (
    <form action={action} className="grid gap-5 border border-line bg-white p-6 md:p-8" noValidate>
      <input type="hidden" name="uiLocale" value={locale} />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      {state.status === "error" && state.message ? (
        <p className="border border-danger bg-red-50 p-4 text-danger" role="alert">
          {state.message}{" "}
          {/call|zadzwoń/i.test(state.message) ? null : (
            <>
              {t("keepHappening")}{" "}
              <a className="underline" href={telHref(school.phone.office)}>
                {school.phone.office}
              </a>
              .
            </>
          )}
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="name">{t("name")}</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          aria-invalid={Boolean(fields.name)}
          aria-describedby={fields.name ? "name-error" : undefined}
        />
        <FieldError id="name-error" message={fields.name} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="field">
          <label htmlFor="phone">{t("phone")}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(fields.phone)}
            aria-describedby={fields.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={fields.phone} />
        </div>
        <div className="field">
          <label htmlFor="email">{t("email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(fields.email)}
            aria-describedby={fields.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={fields.email} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="category">{t("category")}</label>
        <select
          id="category"
          name="category"
          defaultValue="B"
          required
          aria-invalid={Boolean(fields.category)}
          aria-describedby={fields.category ? "category-error" : undefined}
        >
          {courses.map((course) => (
            <option key={course.code} value={course.code}>
              {pick(course.name, locale)}
            </option>
          ))}
        </select>
        <FieldError id="category-error" message={fields.category} />
      </div>
      <div className="field">
        <label htmlFor="message">{t("notes")}</label>
        <textarea id="message" name="message" maxLength={2000} />
      </div>
      <p className="text-sm text-muted">
        {t("privacyNotice")}
        <LocaleLink href="/privacy" locale={locale} className="underline hover:text-ink">
          {t("privacyNoticeLink")}
        </LocaleLink>
        .
      </p>
      <button type="submit" className="btn btn-primary w-fit" disabled={pending}>
        {pending ? t("sending") : t("send")}
      </button>
    </form>
  );
}
