import type { ReactNode } from "react";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { school } from "content/school";
import { AnalyticsGate } from "@/components/analytics-gate";
import { CookieBanner } from "@/components/cookie-banner";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { drivingSchoolJsonLd } from "@/lib/json-ld";
import {
  htmlLang,
  isLocale,
  ogLocale,
  pick,
  withLocale,
  type Locale,
} from "@/lib/locale";
import { localeParams } from "@/lib/page-meta";
import { pages, ui } from "@/i18n/ui";
import { siteUrl } from "@/lib/site";

const display = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: "700",
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export function generateStaticParams() {
  return localeParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const title = pick(pages.homeOgTitle, locale);
  const description = pick(ui.homeDescription, locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${school.name}: ${title}`,
      template: `%s · ${school.name}`,
    },
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${withLocale(locale, "/")}`,
      siteName: school.name,
      images: [
        {
          url: "/images/og.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: ogLocale[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <html lang={htmlLang[locale]} className={`${display.variable} h-full`}>
      <body className="min-h-full bg-paper text-ink antialiased">
        <a className="skip-link" href="#main">
          {pick(ui.skip, locale)}
        </a>
        <SiteHeader locale={locale} />
        <div className="flex min-h-full flex-col">
          {children}
          <SiteFooter locale={locale} />
        </div>
        <CookieBanner locale={locale} />
        <AnalyticsGate />
        <JsonLd data={drivingSchoolJsonLd(locale)} />
      </body>
    </html>
  );
}
