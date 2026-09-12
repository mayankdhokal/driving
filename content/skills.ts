import type { Skill } from "./types";

export const skills: readonly Skill[] = [
  {
    n: "01",
    title: { en: "Theory", pl: "Numer PKK" },
    body: {
      en: "Thirty hours of Category B lectures. English group if you need it. You sit the internal test before the state exam.",
      pl: "Orzeczenie lekarskie, zdjęcie, dowód i wniosek",
    },
  },
  {
    n: "02",
    title: { en: "The car", pl: "Egzamin teoretyczny" },
    body: {
      en: "Dual-control Hyundais of the same family the exam centre uses. Clutch and bite point until they are boring.",
      pl: "30 godzin wykładów lub przygotuj się z naszym kursem online we własnym tempie",
    },
  },
  {
    n: "03",
    title: { en: "The yard", pl: "Jazdy praktyczne" },
    body: {
      en: "Bay park, slalom, stopping line. The lot is marked like the Oświęcim exam centre, not like a supermarket car park.",
      pl: "30 godzin jazd z instruktorem po placu manewrowym oraz po mieście",
    },
  },
  {
    n: "04",
    title: { en: "The town", pl: "Egzamin praktyczny" },
    body: {
      en: "Independent driving in Kęty and on the road to Oświęcim. Exam nerves included, not skipped.",
      pl: "Przygotujemy cię krok po kroku.",
    },
  },
];
