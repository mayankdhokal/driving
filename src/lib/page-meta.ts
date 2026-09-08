import type { Metadata } from "next";
import { school } from "content/school";
import { locales, ogLocale, withLocale, type Locale } from "@/lib/locale";
import { pick } from "@/lib/locale";
import { pages, ui } from "@/i18n/ui";
import { siteUrl } from "@/lib/site";

export function localeParams() {
  return locales.map((locale) => ({ locale }));
}

export function pageMeta(
  locale: Locale,
  path: string,
  title: keyof typeof pages | keyof typeof ui,
  description: keyof typeof pages | keyof typeof ui,
): Metadata {
  const titleBag = title in pages ? pages[title as keyof typeof pages] : ui[title as keyof typeof ui];
  const descBag =
    description in pages ? pages[description as keyof typeof pages] : ui[description as keyof typeof ui];
  const titleText = pick(titleBag, locale);
  const descText = pick(descBag, locale);
  const url = `${siteUrl}${withLocale(locale, path)}`;

  return {
    title: titleText,
    description: descText,
    alternates: {
      canonical: url,
      languages: {
        pl: `${siteUrl}${withLocale("pl", path)}`,
      },
    },
    openGraph: {
      title: titleText,
      description: descText,
      url,
      locale: ogLocale[locale],
      siteName: school.name,
      images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    },
  };
}
