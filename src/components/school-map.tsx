import { school } from "content/school";
import type { Locale } from "@/lib/locale";
import { pick } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function SchoolMap({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <div className={className}>
      <iframe
        title={pick(ui.mapTitle, locale)}
        className="min-h-[22rem] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://maps.google.com/maps?q=${school.address.lat},${school.address.lng}&z=16&output=embed`}
      />
      <a
        className="mt-3 inline-flex min-h-11 items-center text-sm underline"
        href={school.address.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        {pick(ui.openMaps, locale)}
      </a>
    </div>
  );
}
