import { school } from "content/school";
import { footerNav, nav } from "@/lib/site";
import { LocaleLink } from "@/components/locale-link";
import { formatHours, telHref } from "@/lib/format";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = (key: keyof typeof ui) => pick(ui[key], locale);

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="display text-2xl font-bold">{school.name}</p>
          <p className="mt-3 max-w-sm text-sm text-white/80">{copy("footerBlurb")}</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent">{copy("visit")}</p>
          <p className="mt-2">
            {school.address.street}
            <br />
            {school.address.postcode} {school.address.city}
          </p>
          <ul className="mt-3 space-y-1 text-sm text-white/85">
            {school.hours.map((row) => (
              <li key={row.days.en}>{formatHours(row, locale)}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent">{copy("call")}</p>
          <p className="mt-2">
            <a className="hover:text-accent" href={telHref(school.phone.office)}>
              {school.phone.office}
            </a>
            <br />
            <a className="hover:text-accent" href={telHref(school.phone.mobile)}>
              {school.phone.mobile}
            </a>
          </p>
          <a className="mt-2 block hover:text-accent" href={`mailto:${school.email}`}>
            {school.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <p className="break-words">
            © {new Date().getFullYear()} {school.legalName}. NIP {school.nip}.
          </p>
          <ul className="flex flex-wrap gap-4">
            {[...nav, ...footerNav].map((item) => (
              <li key={item.href}>
                <LocaleLink href={item.href} locale={locale} className="hover:text-white">
                  {copy(item.label)}
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
