function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  if (process.env.NODE_ENV === "production") {
    return "https://road-to-license.vercel.app";
  }
  return "http://127.0.0.1:4477";
}

export const siteUrl = resolveSiteUrl();

export const nav = [
  { href: "/courses", label: "courses" },
  { href: "/pricing", label: "pricing" },
  { href: "/how-to-start", label: "howToStart" },
  { href: "/instructors", label: "instructors" },
  { href: "/contact", label: "contact" },
] as const;

export const footerNav = [
  { href: "/fleet", label: "fleet" },
  { href: "/faq", label: "faq" },
  { href: "/enrol", label: "enrol" },
  { href: "/privacy", label: "privacy" },
  { href: "/terms", label: "terms" },
] as const;
