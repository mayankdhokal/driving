import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses } from "content/courses";
import { CourseCard } from "@/components/course-card";
import { PageShell } from "@/components/page-shell";
import { isLocale, pick } from "@/lib/locale";
import { pageMeta } from "@/lib/page-meta";
import { pages } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMeta(locale, "/courses", "coursesTitle", "coursesDesc");
}

export default async function CoursesPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <PageShell
      eyebrow={pick(pages.coursesTitle, locale)}
      title={pick(pages.coursesH1, locale)}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} locale={locale} />
        ))}
      </div>
    </PageShell>
  );
}
