import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { school } from "content/school";
import { CtaRow } from "@/components/cta-row";
import { PageShell } from "@/components/page-shell";
import { SchoolMap } from "@/components/school-map";
import { formatHours, telHref, waHref } from "@/lib/format";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages, ui } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/contact", "contact", "contactDesc");
}

export default async function ContactPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(ui.contact, locale)}
      title={pick(pages.contactH1, locale)}
      lead={pick(pages.contactLead, locale)}
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 text-lg">
          <p>
            {school.address.street}
            <br />
            {school.address.postcode} {school.address.city}
            <br />
            {pick(school.address.region, locale)}
          </p>
          <p>
            <a className="hover:underline" href={telHref(school.phone.office)}>
              {pick(ui.office, locale)} {school.phone.office}
            </a>
            <br />
            <a className="hover:underline" href={telHref(school.phone.mobile)}>
              {pick(ui.mobile, locale)} {school.phone.mobile}
            </a>
            <br />
            <a className="hover:underline" href={waHref(school.phone.whatsapp)}>
              {pick(pages.whatsapp, locale)} {school.phone.whatsapp}
            </a>
          </p>
          {school.extraPhones.map((phone) => (
            <p key={phone.number}>
              <a className="hover:underline" href={telHref(phone.number)}>
                {pick(phone.label, locale)} {phone.number}
              </a>
            </p>
          ))}
          <p>
            <a className="hover:underline" href={`mailto:${school.email}`}>
              {school.email}
            </a>
          </p>
          <ul>
            {school.hours.map((row) => (
              <li key={row.days.en}>{formatHours(row, locale)}</li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            {pick(pages.transfers, locale)}: {school.bank.name} {school.bank.iban}
          </p>
          <CtaRow locale={locale} />
        </div>
        <SchoolMap locale={locale} />
      </div>
    </PageShell>
  );
}
