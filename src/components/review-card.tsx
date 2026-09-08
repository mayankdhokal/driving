import type { ReviewQuote } from "content/types";
import { GoogleMark } from "@/components/google-mark";
import { StarRating } from "@/components/star-rating";
import { formatReviewPosted } from "@/lib/format";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

const PREVIEW_CHARS = 140;

export function ReviewCard({ item, locale }: { item: ReviewQuote; locale: Locale }) {
  const text = pick(item.quote, locale);
  const long = text.length > PREVIEW_CHARS;

  return (
    <article className="flex h-full flex-col border border-line bg-white p-5">
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
          style={{ backgroundColor: item.color }}
          aria-hidden
        >
          {item.initial}
        </span>
        <p className="font-bold leading-tight">{item.name}</p>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <StarRating
          value={item.rating}
          size="sm"
          label={`${item.rating}/5 ${pick(ui.starRating, locale)}`}
        />
        <p className="text-sm text-muted">{formatReviewPosted(item.postedAt, locale)}</p>
      </div>
      {long ? (
        <details className="group mt-4 flex-1">
          <summary className="cursor-pointer list-none text-[0.95rem] leading-relaxed text-ink">
            <span className="group-open:hidden">
              {`${text.slice(0, PREVIEW_CHARS).trimEnd()}… `}
              <span className="font-medium text-[#1a73e8]">{pick(ui.readMore, locale)}</span>
            </span>
            <span className="hidden group-open:inline">
              {text}{" "}
              <span className="font-medium text-[#1a73e8]">{pick(ui.readLess, locale)}</span>
            </span>
          </summary>
        </details>
      ) : (
        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink">{text}</p>
      )}
      <p className="mt-5 flex items-center gap-2 text-sm font-medium text-[#1a73e8]">
        <GoogleMark />
        {pick(ui.postedOnGoogle, locale)}
      </p>
    </article>
  );
}
