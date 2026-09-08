"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, pick, switchLocalePath, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center" aria-label={pick(ui.language, locale)}>
      {locales.map((item) => (
        <Link
          key={item}
          href={switchLocalePath(pathname, item)}
          hrefLang={item}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-bold ${
            item === locale ? "text-accent" : "text-white/80 hover:text-accent"
          }`}
        >
          {item === "en" ? "EN" : "PL"}
        </Link>
      ))}
    </nav>
  );
}
