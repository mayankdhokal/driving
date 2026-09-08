import Link from "next/link";
import type { ComponentProps } from "react";
import type { Locale } from "@/lib/locale";
import { withLocale } from "@/lib/locale";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  locale: Locale;
};

export function LocaleLink({ href, locale, ...props }: LocaleLinkProps) {
  return <Link href={withLocale(locale, href)} {...props} />;
}
