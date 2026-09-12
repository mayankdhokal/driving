import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseBySlug, courses } from "content/courses";
import { showPublicPrices } from "content/flags";
import { CtaRow } from "@/components/cta-row";
import { JsonLd } from "@/components/json-ld";
import { PageShell } from "@/components/page-shell";
import { formatPln } from "@/lib/format";
import { isLocale, pick, withLocale } from "@/lib/locale";
import { pages, ui } from "@/i18n/ui";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const course = courseBySlug(slug);
  if (!course) return { title: pick(pages.courseFallback, raw) };
  return {
    title: pick(course.name, raw),
    description: `${pick(course.summary, raw)} ${formatPln(course.priceGross)}.`,
  };
}

export default async function CoursePage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const course = courseBySlug(slug);
  if (!course) notFound();

  return (
    <PageShell
      title={pick(course.name, locale)}
      lead={pick(course.summary, locale)}
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          {showPublicPrices ? (
            <p className="display text-5xl font-bold">{formatPln(course.priceGross)}</p>
          ) : null}
          <p className="mt-2 text-muted">
            {course.theoryHours} {pick(pages.hoursWord, locale)} {pick(ui.hoursTheory, locale)} ·{" "}
            {course.practicalHours} {pick(pages.hoursWord, locale)} {pick(ui.hoursPractical, locale)} ·{" "}
            {pick(pages.minAge, locale)} {pick(course.minAge, locale)}
          </p>
          <div className="mt-8">
            <CtaRow locale={locale} enrolLabel={`${pick(ui.enrol, locale)} ${course.code}`} />
          </div>
          <h2 className="display mt-12 text-2xl font-bold">{pick(pages.included, locale)}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {course.includes.map((item) => (
              <li key={item.en}>{pick(item, locale)}</li>
            ))}
          </ul>
          <h2 className="display mt-10 text-2xl font-bold">{pick(pages.notIncluded, locale)}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {course.excludes.map((item) => (
              <li key={item.en}>{pick(item, locale)}</li>
            ))}
          </ul>
          <h2 className="display mt-10 text-2xl font-bold">{pick(pages.vehicles, locale)}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {course.vehicles.map((item) => (
              <li key={item.en}>{pick(item, locale)}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit border border-line bg-white p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-deep">
            {pick(pages.honestTotal, locale)}
          </p>
          <p className="mt-3 text-muted">
            {showPublicPrices
              ? `${formatPln(course.priceGross)}. ${formatPln(200)} ${pick(pages.honestTotalNote, locale)}`
              : pick(ui.callForPrice, locale)}
          </p>
        </aside>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: pick(course.name, locale),
          description: pick(course.summary, locale),
          inLanguage: locale === "pl" ? "pl" : "en",
          provider: { "@type": "DrivingSchool", name: "DriveWay Szkoła jazdy" },
          url: `${siteUrl}${withLocale(locale, `/courses/${course.slug}`)}`,
          offers: {
            "@type": "Offer",
            price: course.priceGross,
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
        }}
      />
    </PageShell>
  );
}
