import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { steps } from "content/steps";
import { CtaRow } from "@/components/cta-row";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages, ui } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/how-to-start", "startTitle", "startDesc");
}

export default async function HowToStartPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.startTitle, locale)}
      title={pick(pages.startH1, locale)}
      lead={pick(pages.startLead, locale)}
    >
      <ol className="space-y-8">
        {steps.map((step) => (
          <li key={step.n} className="grid gap-4 border-l-2 border-accent pl-6 md:grid-cols-[8rem_1fr]">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-deep">
              {pick(pages.step, locale)} {step.n}
              <span className="mt-1 block text-ink">
                {pick(step.who === "you" ? ui.you : ui.schoolRole, locale)}
              </span>
            </p>
            <div>
              <h2 className="display text-3xl font-bold">{pick(step.title, locale)}</h2>
              <p className="mt-3 max-w-2xl text-muted">{pick(step.body, locale)}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-12">
        <CtaRow locale={locale} />
      </div>
    </PageShell>
  );
}
