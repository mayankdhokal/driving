import { locales, type L, type Locale } from "content/types";

export { locales, type Locale, type L } from "content/types";

export const defaultLocale: Locale = "pl";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function parseLocale(value: string | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function withLocale(locale: Locale, href: string): string {
  const path = href.startsWith("/") ? href : `/${href}`;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function switchLocalePath(pathname: string, next: Locale): string {
  const parts = pathname.split("/");
  if (parts[1] && isLocale(parts[1])) {
    parts[1] = next;
    const joined = parts.join("/");
    return joined.startsWith("/") ? joined : `/${joined}`;
  }
  return withLocale(next, pathname || "/");
}

export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return parseLocale(first);
}

export function pick(value: L, locale: Locale): string {
  return value[locale];
}

export const htmlLang: Record<Locale, string> = {
  en: "en-GB",
  pl: "pl",
};

export const ogLocale: Record<Locale, string> = {
  en: "en_GB",
  pl: "pl_PL",
};

export const dateLocale: Record<Locale, string> = {
  en: "en-GB",
  pl: "pl-PL",
};
