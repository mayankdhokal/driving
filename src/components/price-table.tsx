import { extras, wordFees } from "content/extras";
import { courses } from "content/courses";
import { showPublicPrices } from "content/flags";
import { LocaleLink } from "@/components/locale-link";
import { formatPln } from "@/lib/format";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function PriceTable({ locale }: { locale: Locale }) {
  if (!showPublicPrices) {
    return <p className="text-muted">{pick(ui.callForPrice, locale)}</p>;
  }

  return (
    <div>
      <div className="grid gap-4 md:hidden">
        {courses.map((course) => (
          <article key={course.code} className="border border-line bg-white p-4">
            <p className="font-semibold">
              <LocaleLink href={`/courses/${course.slug}`} locale={locale} className="hover:text-accent-deep">
                {pick(course.name, locale)}
              </LocaleLink>
            </p>
            <p className="mt-2 text-sm text-muted">
              {course.theoryHours}h {pick(ui.hoursTheory, locale)} · {course.practicalHours}h{" "}
              {pick(ui.hoursPractical, locale)}
            </p>
            <p className="mt-2 display text-2xl font-bold">{formatPln(course.priceGross)}</p>
            <p className="mt-1 text-sm text-muted">
              {course.englishAvailable ? pick(ui.yes, locale) : pick(ui.polishTheory, locale)}
            </p>
          </article>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">{pick(ui.pricesCaption, locale)}</caption>
          <thead>
            <tr className="border-b border-line text-sm uppercase tracking-wide text-muted">
              <th className="py-3 pr-4 font-medium">{pick(ui.tableCategory, locale)}</th>
              <th className="py-3 pr-4 font-medium">{pick(ui.tableHours, locale)}</th>
              <th className="py-3 pr-4 font-medium">{pick(ui.tablePrice, locale)}</th>
              <th className="py-3 font-medium">{pick(ui.tableLang, locale)}</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.code} className="border-b border-line">
                <td className="py-4 pr-4 font-semibold">
                  <LocaleLink href={`/courses/${course.slug}`} locale={locale} className="hover:text-accent-deep">
                    {pick(course.name, locale)}
                  </LocaleLink>
                </td>
                <td className="py-4 pr-4 text-muted">
                  {course.theoryHours}h {pick(ui.hoursTheory, locale)} · {course.practicalHours}h{" "}
                  {pick(ui.hoursPractical, locale)}
                </td>
                <td className="py-4 pr-4 font-bold">{formatPln(course.priceGross)}</td>
                <td className="py-4">
                  {course.englishAvailable ? pick(ui.yes, locale) : pick(ui.polishTheory, locale)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="mt-10 display text-2xl font-bold">{pick(ui.extrasTitle, locale)}</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {extras.map((extra) => (
          <li key={extra.label.en} className="flex flex-wrap justify-between gap-2 py-3">
            <span>
              {pick(extra.label, locale)}
              {extra.note ? <span className="block text-sm text-muted">{pick(extra.note, locale)}</span> : null}
            </span>
            <strong>
              {formatPln(extra.price)}
              {extra.unit === "per-hour" ? "/h" : ""}
            </strong>
          </li>
        ))}
        {wordFees.map((fee) => (
          <li key={fee.label.en} className="flex flex-wrap justify-between gap-2 py-3">
            <span>
              {pick(fee.label, locale)}
              <span className="block text-sm text-muted">{pick(fee.note, locale)}</span>
            </span>
            <strong>~{formatPln(fee.indicative)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
