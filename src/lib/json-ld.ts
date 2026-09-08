import { school } from "content/school";
import { reviews } from "content/reviews";
import { pick, type Locale } from "@/lib/locale";
import { siteUrl } from "@/lib/site";

export function drivingSchoolJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: school.name,
    legalName: school.legalName,
    url: `${siteUrl}/${locale}`,
    inLanguage: locale === "pl" ? "pl" : "en-GB",
    telephone: school.phone.office,
    email: school.email,
    taxID: school.nip,
    foundingDate: String(school.founded),
    image: `${siteUrl}/images/og.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: school.address.street,
      postalCode: school.address.postcode,
      addressLocality: school.address.city,
      addressRegion: pick(school.address.region, locale),
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: school.address.lat,
      longitude: school.address.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.googleRating,
      reviewCount: reviews.googleCount,
    },
    openingHoursSpecification: school.hours.map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.days.en.includes("Fri")
        ? ["Friday"]
        : ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: row.open,
      closes: row.close,
    })),
  };
}
