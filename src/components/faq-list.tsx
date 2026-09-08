import type { FaqItem } from "content/types";
import { pick, type Locale } from "@/lib/locale";

export function FaqList({ items, locale }: { items: readonly FaqItem[]; locale: Locale }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q.en} className="group py-4">
          <summary className="min-h-11 cursor-pointer list-none py-1 font-semibold marker:content-none">
            <span className="flex items-start justify-between gap-4">
              {pick(item.q, locale)}
              <span aria-hidden className="text-accent-deep group-open:rotate-45">
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-muted">{pick(item.a, locale)}</p>
        </details>
      ))}
    </div>
  );
}
