import type { L } from "content/types";
import type { Locale } from "@/lib/locale";
import { dateLocale, pick } from "@/lib/locale";

export function formatPln(amount: number): string {
  const grouped = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  return `${grouped} zł`;
}

export function formatIntakeWhen(iso: string, locale: Locale = "en"): string {
  return new Intl.DateTimeFormat(dateLocale[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Europe/Warsaw",
  }).format(new Date(iso));
}

export function formatIntakeDay(iso: string, locale: Locale = "en"): string {
  return new Intl.DateTimeFormat(dateLocale[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw",
  }).format(new Date(iso));
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function waHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

export function formatHours(
  hours: { days: L; open: string; close: string },
  locale: Locale,
): string {
  const connector = locale === "pl" ? " do " : " to ";
  return `${pick(hours.days, locale)} ${hours.open}${connector}${hours.close}`;
}

export function formatReviewPosted(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(dateLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Warsaw",
  }).format(new Date(`${iso}T12:00:00+02:00`));
}
