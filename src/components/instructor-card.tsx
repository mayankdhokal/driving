import type { Instructor } from "content/types";
import { InstructorPhoto } from "@/components/instructor-photo";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

type InstructorCardProps = {
  person: Instructor;
  locale: Locale;
  tone: "light" | "dark";
  priority?: boolean;
  heading?: "h2" | "h3";
  sizes?: string;
};

export function InstructorCard({
  person,
  locale,
  tone,
  priority,
  heading: Heading = "h2",
  sizes,
}: InstructorCardProps) {
  const dark = tone === "dark";
  const badge = languageBadge(person, locale);

  return (
    <article className={dark ? "border border-white/15" : "border border-line bg-white"}>
      <InstructorPhoto person={person} size="card" priority={priority} sizes={sizes} />
      <div className="p-6">
        <Heading className={`display font-bold ${dark ? "text-xl" : "text-2xl"}`}>{person.name}</Heading>
        <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>{pick(person.role, locale)}</p>
        {person.studentNote ? (
          <blockquote className={`mt-4 text-base leading-snug ${dark ? "text-white/90" : "text-ink"}`}>
            <p className={`text-xs font-bold uppercase tracking-wide ${dark ? "text-accent" : "text-accent-deep"}`}>
              {pick(ui.studentSaid, locale)}
            </p>
            <p className="mt-1">
              <span className={dark ? "text-white/50" : "text-muted"}>“</span>
              {pick(person.studentNote, locale)}
              <span className={dark ? "text-white/50" : "text-muted"}>”</span>
            </p>
          </blockquote>
        ) : null}
        <p
          className={`mt-4 inline-flex text-xs font-bold uppercase tracking-wide ${
            dark ? "bg-accent px-2 py-1 text-black" : "bg-black px-2 py-1 text-accent"
          }`}
        >
          {badge}
        </p>
        {person.since ? (
          <p className={`mt-3 text-sm ${dark ? "text-white/70" : "text-muted"}`}>
            {pick(ui.teachingSince, locale)} {person.since}
          </p>
        ) : null}
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={pick(ui.categoriesLabel, locale)}>
          {person.categories.map((code) => (
            <li
              key={code}
              className={`px-2 py-0.5 text-xs font-bold ${
                dark ? "border border-white/25 text-white/85" : "border border-line text-muted"
              }`}
            >
              {code}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function languageBadge(person: Instructor, locale: Locale): string {
  if (!person.languages.includes("en")) {
    return pick(ui.lessonsInPolish, locale);
  }
  if (person.id === "marzena-ostafin") {
    return pick(ui.englishInOffice, locale);
  }
  return pick(ui.teachesEnglish, locale);
}
