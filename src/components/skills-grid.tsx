import { skills } from "content/skills";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export function SkillsGrid({ locale }: { locale: Locale }) {
  return (
    <section className="bg-paper px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-deep">
          {pick(ui.skillsEyebrow, locale)}
        </p>
        <h2 className="display mt-3 max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {pick(ui.skillsTitle, locale)}
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skills.map((skill) => (
            <article key={skill.n} className="border-t border-line pt-5">
              <p className="display text-sm font-bold text-accent-deep">{skill.n}</p>
              <h3 className="display mt-3 text-2xl font-bold">{pick(skill.title, locale)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pick(skill.body, locale)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
