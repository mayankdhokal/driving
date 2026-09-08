import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaRow } from "@/components/cta-row";
import { PageShell } from "@/components/page-shell";
import { PriceTable } from "@/components/price-table";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/pricing", "pricingTitle", "pricingDesc");
}

export default async function PricingPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.pricingTitle, locale)}
      title={pick(pages.pricingH1, locale)}
      lead={pick(pages.pricingLead, locale)}
    >
      <PriceTable locale={locale} />
      <div className="mt-10">
        <CtaRow locale={locale} />
      </div>
    </PageShell>
  );
}
