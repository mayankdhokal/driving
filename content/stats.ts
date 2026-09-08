import { school } from "./school";
import type { Stat } from "./types";

export const stats: readonly Stat[] = [
  { value: 3146, label: { en: "Students trained", pl: "Przeszkolonych kursantów" }, suffix: "+" },
  { value: new Date().getFullYear() - school.founded, label: { en: "Years in Kęty", pl: "Lat w Kętach" } },
  { value: 2456, label: { en: "State exams sat with us", pl: "Egzaminów państwowych z nami" }, suffix: "+" },
];
