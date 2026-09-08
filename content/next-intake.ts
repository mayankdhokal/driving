import { intakes } from "./intakes";
import type { Intake, IntakeLanguage } from "./types";

export function nextIntake(
  lang: IntakeLanguage,
  now: Date,
): Intake | null {
  const timestamp = now.getTime();

  const upcoming = intakes
    .filter((intake) => intake.language === lang)
    .filter((intake) => intake.status !== "full")
    .filter((intake) => Date.parse(intake.startsAt) > timestamp)
    .slice()
    .sort(
      (left, right) => Date.parse(left.startsAt) - Date.parse(right.startsAt),
    );

  return upcoming[0] ?? null;
}

export function openEnglishIntakeBeyond(
  now: Date,
  minimumDaysOut: number,
): Intake | null {
  const cutoff = now.getTime() + minimumDaysOut * 24 * 60 * 60 * 1000;

  const match = intakes
    .filter((intake) => intake.language === "en")
    .filter((intake) => intake.status === "open")
    .filter((intake) => Date.parse(intake.startsAt) > cutoff)
    .slice()
    .sort(
      (left, right) => Date.parse(left.startsAt) - Date.parse(right.startsAt),
    );

  return match[0] ?? null;
}
