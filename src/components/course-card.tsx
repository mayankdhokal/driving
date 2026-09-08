import type { Course } from "content/types";
import { showPublicPrices } from "content/flags";
import { LocaleLink } from "@/components/locale-link";
import { formatPln } from "@/lib/format";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function CourseCard({ course, locale }: { course: Course; locale: Locale }) {
  return (
    <article className="flex h-full flex-col border border-line bg-white p-6">
      <p className="text-xs font-bold uppercase tracking-wide text-accent-deep">
        {pick(course.englishAvailable ? ui.englishTheory : ui.polishTheory, locale)}
        {course.popular ? ` · ${pick(ui.mostRequested, locale)}` : ""}
      </p>
      <h3 className="display mt-2 text-2xl font-bold">
        <LocaleLink href={`/courses/${course.slug}`} locale={locale} className="hover:text-accent-deep">
          {pick(course.name, locale)}
        </LocaleLink>
      </h3>
      <p className="mt-3 flex-1 text-muted">{pick(course.summary, locale)}</p>
      {showPublicPrices ? (
        <p className="mt-6 display text-3xl font-bold">{formatPln(course.priceGross)}</p>
      ) : null}
      <p className="text-sm text-muted">
        {course.theoryHours}h {pick(ui.hoursTheory, locale)} · {course.practicalHours}h{" "}
        {pick(ui.hoursPractical, locale)}
      </p>
      <LocaleLink href={`/courses/${course.slug}`} locale={locale} className="btn btn-dark mt-6 w-full sm:w-auto">
        {pick(ui.courseDetails, locale)}
      </LocaleLink>
    </article>
  );
}
