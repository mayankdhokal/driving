import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { school } from "content/school";
import { EnrolForm } from "@/components/enrol-form";
import { PageShell } from "@/components/page-shell";
import { telHref } from "@/lib/format";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/enrol", "enrolTitle", "enrolDesc");
}

export default async function EnrolPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.enrolTitle, locale)}
      title={pick(pages.enrolH1, locale)}
      lead={`${pick(pages.enrolLead, locale)} ${school.email}.`}
    >
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <EnrolForm locale={locale} />
        <aside className="h-fit border border-line bg-white p-6 text-sm text-muted">
          <p className="font-semibold text-ink">{pick(pages.preferTalk, locale)}</p>
          <p className="mt-2">
            <a className="underline" href={telHref(school.phone.office)}>
              {school.phone.office}
            </a>
            <br />
            <a className="underline" href={telHref(school.phone.mobile)}>
              {school.phone.mobile}
            </a>
          </p>
          <p className="mt-4">{pick(pages.enrolAside, locale)}</p>
        </aside>
      </div>
    </PageShell>
  );
}
