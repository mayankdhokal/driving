import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legal } from "content/legal";
import { school } from "content/school";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/privacy", "privacyTitle", "privacyLead");
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.privacyTitle, locale)}
      title={pick(pages.privacyH1, locale)}
      lead={pick(pages.privacyLead, locale)}
    >
      <div className="max-w-3xl space-y-6 text-muted">
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.privacyWho, locale)}</h2>
        <p>
          {school.legalName}, NIP {school.nip}, REGON {school.regon}. {school.address.street},{" "}
          {school.address.postcode} {school.address.city}. {school.registeredAddress.street},{" "}
          {school.registeredAddress.postcode} {school.registeredAddress.city}. {school.email}.{" "}
          {school.phone.office}.
        </p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.privacyForm, locale)}</h2>
        <p>{pick(legal.privacyForm1, locale)}</p>
        <p>{pick(legal.privacyForm2, locale)}</p>
        <p>{pick(legal.privacyForm3, locale)}</p>
        <p>{pick(legal.privacyForm4, locale)}</p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.privacyCookies, locale)}</h2>
        <p>{pick(legal.privacyCookies1, locale)}</p>
        <p>{pick(legal.privacyCookies2, locale)}</p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.privacyRights, locale)}</h2>
        <p>{pick(legal.privacyRightsBody, locale)}</p>
      </div>
    </PageShell>
  );
}
