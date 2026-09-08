import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { fleet } from "content/fleet";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/fleet", "fleetPageTitle", "fleetDesc");
}

export default async function FleetPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.fleetPageTitle, locale)}
      title={pick(pages.fleetH1, locale)}
      lead={pick(pages.fleetLead, locale)}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fleet.map((item) => (
          <figure key={item.src} className="bg-white">
            <Image
              src={item.src}
              alt={pick(item.alt, locale)}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, 50vw"
              quality={70}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-sm text-muted">{pick(item.caption, locale)}</figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
