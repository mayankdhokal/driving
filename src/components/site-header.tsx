"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { school } from "content/school";
import { nav } from "@/lib/site";
import { LocaleLink } from "@/components/locale-link";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = !isHome || scrolled || open;
  const copy = (key: keyof typeof ui) => pick(ui[key], locale);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        solid ? "bg-black text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:py-3">
        <LocaleLink
          href="/"
          locale={locale}
          className="display min-w-0 truncate text-base font-bold tracking-tight sm:text-lg"
          aria-label={school.name}
        >
          <span className="min-[480px]:hidden">DriveWay</span>
          <span className="hidden min-[480px]:inline">{school.name}</span>
        </LocaleLink>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              locale={locale}
              className={pathname.endsWith(item.href) ? "text-accent" : "hover:text-accent"}
            >
              {copy(item.label)}
            </LocaleLink>
          ))}
          <LocaleLink href="/enrol" locale={locale} className="btn btn-primary">
            {copy("enrol")}
          </LocaleLink>
        </nav>
        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <LocaleLink href="/enrol" locale={locale} className="btn btn-primary px-3 text-sm">
            {copy("enrol")}
          </LocaleLink>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-white/45 text-sm font-bold hover:border-accent hover:text-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy("close") : copy("menu")}
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="grid max-h-[calc(100svh-3.5rem)] gap-1 overflow-y-auto px-4 pb-4 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <LocaleLink
              key={item.href}
              href={item.href}
              locale={locale}
              className="flex min-h-11 items-center text-base"
            >
              {copy(item.label)}
            </LocaleLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
