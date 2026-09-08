import { LocaleLink } from "@/components/locale-link";
import { pick, type Locale } from "@/lib/locale";
import { ui } from "@/i18n/ui";

type CtaRowProps = {
  locale: Locale;
  enrolLabel?: string;
  variant?: "primary" | "dark";
};

export function CtaRow({ locale, enrolLabel, variant = "primary" }: CtaRowProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <LocaleLink
        href="/enrol"
        locale={locale}
        className={variant === "dark" ? "btn btn-dark w-full sm:w-auto" : "btn btn-primary w-full sm:w-auto"}
      >
        {enrolLabel ?? pick(ui.enrol, locale)}
      </LocaleLink>
    </div>
  );
}
