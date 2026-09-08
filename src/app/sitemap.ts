import type { MetadataRoute } from "next";
import { courses } from "content/courses";
import { withLocale } from "@/lib/locale";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/courses",
    "/pricing",
    "/how-to-start",
    "/instructors",
    "/fleet",
    "/faq",
    "/contact",
    "/enrol",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${withLocale("pl", path)}`,
      lastModified: now,
    })),
    ...courses.map((course) => ({
      url: `${siteUrl}${withLocale("pl", `/courses/${course.slug}`)}`,
      lastModified: now,
    })),
  ];
}
