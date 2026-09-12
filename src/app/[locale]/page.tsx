import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { courses } from "content/courses";
import { showPublicPrices } from "content/flags";
import { homeFaqs } from "content/faqs";
import { fleet } from "content/fleet";
import { instructors } from "content/instructors";
import { nextIntake } from "content/next-intake";
import { school } from "content/school";
import { stats } from "content/stats";
import { CourseCard } from "@/components/course-card";
import { CtaRow } from "@/components/cta-row";
import { FaqList } from "@/components/faq-list";
import { GoogleReviews } from "@/components/google-reviews";
import { InstructorCard } from "@/components/instructor-card";
import { JsonLd } from "@/components/json-ld";
import { LocaleLink } from "@/components/locale-link";
import { PriceTable } from "@/components/price-table";
import { SchoolMap } from "@/components/school-map";
import { SkillsGrid } from "@/components/skills-grid";
import { StatCounter } from "@/components/stat-counter";
import { formatIntakeDay } from "@/lib/format";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages, ui } from "@/i18n/ui";
import { siteUrl } from "@/lib/site";

const EnrolForm = dynamic(
  () => import("@/components/enrol-form").then((mod) => mod.EnrolForm),
  {
    loading: () => <div className="min-h-[28rem] border border-line bg-white" aria-hidden />,
  },
);

type HomeProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/", "homeOgTitle", "homeLead");
}

export default async function HomePage({ params }: HomeProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = (key: keyof typeof ui) => pick(ui[key], locale);
  const intake = nextIntake(locale === "pl" ? "pl" : "en", new Date());
  const featuredInstructors = instructors.slice(0, 3);

  preload("/images/hero.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    imageSrcSet:
      "/images/hero-800.avif 800w, /images/hero-1200.avif 1200w, /images/hero.avif 1600w",
    imageSizes: "100vw",
  });

  return (
    <main id="main">
      <section className="diag relative min-h-[100svh] bg-black text-white">
        <picture>
          <source
            type="image/avif"
            srcSet="/images/hero-800.avif 800w, /images/hero-1200.avif 1200w, /images/hero.avif 1600w"
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet="/images/hero-800.webp 800w, /images/hero-1200.webp 1200w, /images/hero.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/images/hero.webp"
            alt={t("homeTitle")}
            width={1600}
            height={1068}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-24 sm:pb-28 sm:pt-32">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            {t("homeKicker")} {school.founded}
          </p>
          <h1 className="display mt-4 max-w-4xl text-[2.15rem] font-bold leading-[1.08] sm:text-4xl md:text-7xl">
            {t("homeTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">{t("homeLead")}</p>
          <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">{t("homeCategories")}</p>
          <p className="mt-6 text-xl font-semibold">
            {intake
              ? `${t("nextEnglish")} ${formatIntakeDay(intake.startsAt, locale)} · ${t("seatsLeft")} ${intake.seatsLeft}`
              : t("callForDate")}
          </p>
          <div className="mt-8">
            <CtaRow locale={locale} />
          </div>
        </div>
      </section>

      <SkillsGrid locale={locale} />

      <section className="defer-paint bg-black px-4 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label.en}
              value={stat.value}
              label={pick(stat.label, locale)}
              suffix={stat.suffix}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section className="defer-paint mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display text-3xl font-bold sm:text-4xl">{t("fleetTitle")}</h2>
          </div>
          <LocaleLink href="/fleet" locale={locale} className="btn btn-dark w-full sm:w-auto">
            {t("fleet")}
          </LocaleLink>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.slice(0, 4).map((item) => (
            <figure key={item.src} className="bg-white">
              <Image
                src={item.src}
                alt={pick(item.alt, locale)}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={70}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <div className="defer-paint">
        <GoogleReviews locale={locale} />
      </div>

      <section className="defer-paint mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="display text-3xl font-bold sm:text-4xl">{pick(pages.coursesTitle, locale)}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} locale={locale} />
          ))}
        </div>
      </section>

      <section className="defer-paint bg-black py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="display text-3xl font-bold sm:text-4xl">{t("instructorsTitle")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredInstructors.map((person) => (
              <InstructorCard
                key={person.id}
                person={person}
                locale={locale}
                tone="dark"
                heading="h3"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
          <LocaleLink href="/instructors" locale={locale} className="btn btn-ghost mt-8 w-full sm:w-auto">
            {t("allInstructors")}
          </LocaleLink>
        </div>
      </section>

      {showPublicPrices ? (
        <section className="defer-paint mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="display text-3xl font-bold sm:text-4xl">{t("pricesTitle")}</h2>
          <div className="mt-10">
            <PriceTable locale={locale} />
          </div>
        </section>
      ) : null}

      <section className="defer-paint bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="display text-3xl font-bold sm:text-4xl">{t("faqTitle")}</h2>
          <div className="mt-8">
            <FaqList items={homeFaqs} locale={locale} />
          </div>
          <LocaleLink href="/faq" locale={locale} className="btn btn-dark mt-8 w-full sm:w-auto">
            {t("moreQuestions")}
          </LocaleLink>
        </div>
      </section>

      <section className="defer-paint mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="display text-3xl font-bold sm:text-4xl">{t("formTitle")}</h2>
        <p className="mt-3 max-w-2xl text-muted">{t("formLead")}</p>
        <div className="mt-10">
          <EnrolForm locale={locale} />
        </div>
      </section>

      <section className="defer-paint bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
          <div className="px-4 py-16">
            <h2 className="display text-3xl font-bold sm:text-4xl">{t("contactTitle")}</h2>
            <p className="mt-4 text-white/85">
              {school.address.street}, {school.address.postcode} {school.address.city}
              <br />
              {t("contactLead")}
            </p>
            <p className="mt-6 text-white/90">
              {t("office")} {school.phone.office}
              <span className="text-white/60"> · </span>
              {t("mobile")} {school.phone.mobile}
            </p>
            <div className="mt-8">
              <CtaRow locale={locale} />
            </div>
            <p className="mt-8 text-sm text-white/80">{t("otherCats")}</p>
          </div>
          <SchoolMap locale={locale} className="bg-white p-4 text-ink" />
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((item) => ({
            "@type": "Question",
            name: pick(item.q, locale),
            acceptedAnswer: { "@type": "Answer", text: pick(item.a, locale) },
          })),
          url: `${siteUrl}/${locale}`,
        }}
      />
    </main>
  );
}
