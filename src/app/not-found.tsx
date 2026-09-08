import { LocaleLink } from "@/components/locale-link";
import { pick } from "@/lib/locale";
import { ui } from "@/i18n/ui";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body className="bg-paper text-ink">
        <main className="mx-auto max-w-xl px-4 py-32">
          <h1 className="display text-5xl font-bold">{pick(ui.notFoundTitle, "en")}</h1>
          <div className="mt-8 flex gap-3">
            <LocaleLink href="/" locale="en" className="btn btn-dark">
              EN
            </LocaleLink>
            <LocaleLink href="/" locale="pl" className="btn btn-primary">
              PL
            </LocaleLink>
          </div>
        </main>
      </body>
    </html>
  );
}
