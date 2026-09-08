"use client";

import { useEffect, useState } from "react";
import { readConsent, writeConsent, type ConsentChoice } from "@/lib/consent";
import { withLocale, pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function CookieBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
  }, []);

  function choose(choice: ConsentChoice) {
    writeConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/20 bg-black px-4 py-4 text-white pb-[max(1rem,env(safe-area-inset-bottom))]"
      role="dialog"
      aria-label={pick(ui.cookieAria, locale)}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm text-white/85">
          {pick(ui.cookieBody, locale)}{" "}
          <a className="underline hover:text-accent" href={withLocale(locale, "/privacy")}>
            {pick(ui.privacy, locale)}
          </a>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            className="inline-flex min-h-11 items-center justify-center px-3 text-sm text-white/85 underline-offset-2 hover:text-accent hover:underline"
            onClick={() => choose("essential")}
          >
            {pick(ui.cookieEssential, locale)}
          </button>
          <button type="button" className="btn btn-primary w-full sm:w-auto" onClick={() => choose("all")}>
            {pick(ui.cookieAccept, locale)}
          </button>
        </div>
      </div>
    </div>
  );
}
