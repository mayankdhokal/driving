import type { Skill } from "./types";

export const skills: readonly Skill[] = [
  {
    n: "01",
    title: { en: "Theory", pl: "Teoria" },
    body: {
      en: "Thirty hours of Category B lectures. English group if you need it. You sit the internal test before the state exam.",
      pl: "30 godzin wykładów kat. B. Grupa angielska, jeśli trzeba. Najpierw test wewnętrzny, potem WORD.",
    },
  },
  {
    n: "02",
    title: { en: "The car", pl: "Auto" },
    body: {
      en: "Dual-control Hyundais of the same family the exam centre uses. Clutch and bite point until they are boring.",
      pl: "Hyundaie z podwójnymi pedałami, z tej samej rodziny co na egzaminie. Sprzęgło i półsprzęgło, aż będą nudne.",
    },
  },
  {
    n: "03",
    title: { en: "The yard", pl: "Plac" },
    body: {
      en: "Bay park, slalom, stopping line. The lot is marked like the Oświęcim exam centre, not like a supermarket car park.",
      pl: "Parkowanie, slalom, linia zatrzymania. Plac jak na WORD w Oświęcimiu, nie jak przy Lidlu.",
    },
  },
  {
    n: "04",
    title: { en: "The town", pl: "Miasto" },
    body: {
      en: "Independent driving in Kęty and on the road to Oświęcim. Exam nerves included, not skipped.",
      pl: "Jazda samodzielna w Kętach i na drodze do Oświęcimia. Stres egzaminu wliczony, nie omijany.",
    },
  },
];
