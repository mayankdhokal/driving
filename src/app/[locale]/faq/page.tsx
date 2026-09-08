import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faqs } from "content/faqs";
import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick, withLocale } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages, ui } from "@/i18n/ui";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/faq", "faq", "faqDesc");
}

export default async function FaqPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(ui.faq, locale)}
      title={pick(pages.faqH1, locale)}
      lead={pick(pages.faqLead, locale)}
    >
      <FaqList items={faqs} locale={locale} />
      <div className="mt-10">
        <CtaRow locale={locale} />
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: pick(item.q, locale),
            acceptedAnswer: { "@type": "Answer", text: pick(item.a, locale) },
          })),
          url: `${siteUrl}${withLocale(locale, "/faq")}`,
        }}
      />
    </PageShell>
  );
}
