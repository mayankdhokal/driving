import type { Locale } from "@/lib/locale";
import { dateLocale } from "@/lib/locale";

type StatCounterProps = {
  value: number;
  label: string;
  suffix?: string;
  locale: Locale;
};

export function StatCounter({ value, label, suffix = "", locale }: StatCounterProps) {
  return (
    <div>
      <p className="display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        {`${value.toLocaleString(dateLocale[locale])}${suffix}`}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wide text-white/70">{label}</p>
    </div>
  );
}
