import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { instructors } from "content/instructors";
import { CtaRow } from "@/components/cta-row";
import { InstructorCard } from "@/components/instructor-card";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/instructors", "instructorsTitle", "instructorsDesc");
}

export default async function InstructorsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.instructorsTitle, locale)}
      title={pick(pages.instructorsH1, locale)}
      lead={pick(pages.instructorsLead, locale)}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {instructors.map((person, index) => (
          <InstructorCard
            key={person.id}
            person={person}
            locale={locale}
            tone="light"
            priority={index < 2}
          />
        ))}
      </div>
      <div className="mt-10">
        <CtaRow locale={locale} />
      </div>
    </PageShell>
  );
}
