import { reviews } from "content/reviews";
import { GoogleWordmark } from "@/components/google-mark";
import { ReviewCard } from "@/components/review-card";
import { ReviewsTrack } from "@/components/reviews-track";
import { StarRating } from "@/components/star-rating";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function GoogleReviews({ locale }: { locale: Locale }) {
  const t = (key: keyof typeof ui) => pick(ui[key], locale);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="text-center">
          <h2 className="display text-3xl font-bold sm:text-4xl md:text-5xl">{t("reviewsTitle")}</h2>
          <p className="mt-3 text-lg font-bold">{t("reviewsKicker")}</p>
        </header>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold">
              <GoogleWordmark />
              <span className="text-muted">{t("googleRatingLabel")}</span>
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p className="display text-5xl font-bold leading-none">{reviews.googleRating.toFixed(1)}</p>
              <div>
                <StarRating
                  value={reviews.googleRating}
                  label={`${reviews.googleRating}/5 ${t("starRating")}`}
                />
                <p className="text-sm text-muted">
                  {reviews.googleCount} {t("reviewsCount")}
                </p>
              </div>
            </div>
          </div>
          <a
            href={reviews.mapsUrl}
            className="inline-flex min-h-11 w-full items-center justify-center bg-[#1a73e8] px-5 text-sm font-bold text-white hover:bg-[#1558b0] sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            {t("writeGoogleReview")}
          </a>
        </div>

        <ReviewsTrack prevLabel={t("prevReviews")} nextLabel={t("nextReviews")}>
          {reviews.quotes.map((item) => (
            <div
              key={`${item.name}-${item.postedAt}`}
              className="w-[min(100%,20.5rem)] shrink-0 snap-start md:w-[calc((100%-3rem)/3)]"
            >
              <ReviewCard item={item} locale={locale} />
            </div>
          ))}
        </ReviewsTrack>
      </div>
    </section>
  );
}
