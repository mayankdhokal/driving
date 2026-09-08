"use client";

import { usePathname } from "next/navigation";
import { LocaleLink } from "@/components/locale-link";
import { localeFromPathname, pick } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export default function NotFound() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);

  return (
    <main id="main" className="flex-1 bg-paper px-4 py-32">
      <div className="mx-auto max-w-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-deep">404</p>
        <h1 className="display mt-3 text-5xl font-bold">{pick(ui.notFoundTitle, locale)}</h1>
        <p className="mt-4 text-muted">{pick(ui.notFoundLead, locale)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LocaleLink href="/" locale={locale} className="btn btn-dark">
            {pick(ui.backHome, locale)}
          </LocaleLink>
          <LocaleLink href="/enrol" locale={locale} className="btn btn-primary">
            {pick(ui.enrol, locale)}
          </LocaleLink>
        </div>
      </div>
    </main>
  );
}
