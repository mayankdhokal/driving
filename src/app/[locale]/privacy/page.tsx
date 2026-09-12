import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { privacyPolicy, type PrivacyListItem } from "content/privacy-policy";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick, type Locale } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/privacy", "privacyTitle", "privacyLead");
}

function PolicyList({ items, locale }: { items: readonly PrivacyListItem[]; locale: Locale }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => {
        const label = pick(item.text, locale);
        return (
          <li key={`${item.href ?? ""}${label}`}>
            {item.href ? (
              <a href={item.href} className="underline hover:text-ink" rel="noreferrer" target="_blank">
                {label}
              </a>
            ) : (
              label
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell eyebrow={pick(pages.privacyTitle, locale)} title={pick(pages.privacyH1, locale)}>
      <div className="max-w-3xl space-y-10 text-muted">
        {privacyPolicy.map((section) => (
          <section key={section.title.pl} className="space-y-3">
            <h2 className="display text-2xl font-bold text-ink">{pick(section.title, locale)}</h2>
            {section.blocks.map((block, index) =>
              block.type === "ul" ? (
                <PolicyList key={`${section.title.pl}-ul-${index}`} items={block.items} locale={locale} />
              ) : (
                <p key={`${section.title.pl}-p-${index}`}>{pick(block.text, locale)}</p>
              ),
            )}
          </section>
        ))}
      </div>
    </PageShell>
  );
}
