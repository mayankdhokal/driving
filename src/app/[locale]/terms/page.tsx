import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { featuredCourse } from "content/courses";
import { legal } from "content/legal";
import { PageShell } from "@/components/page-shell";
import { formatPln } from "@/lib/format";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/terms", "termsTitle", "termsLead");
}

export default async function TermsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.termsTitle, locale)}
      title={pick(pages.termsH1, locale)}
      lead={pick(pages.termsLead, locale)}
    >
      <div className="max-w-3xl space-y-6 text-muted">
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.termsEnrol, locale)}</h2>
        <p>
          {pick(legal.termsEnrolBody, locale)} {formatPln(featuredCourse.priceGross)}.
        </p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.termsNotCover, locale)}</h2>
        <p>{pick(legal.termsNotCoverBody, locale)}</p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.termsPkk, locale)}</h2>
        <p>{pick(legal.termsPkk1, locale)}</p>
        <p>{pick(legal.termsPkk2, locale)}</p>
        <h2 className="display text-2xl font-bold text-ink">{pick(legal.termsLaw, locale)}</h2>
        <p>{pick(legal.termsLawBody, locale)}</p>
      </div>
    </PageShell>
  );
}
