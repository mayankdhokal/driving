import type { Instructor } from "./types";

const lecturer: Instructor["role"] = {
  en: "Lecturer, instructor",
  pl: "Wykładowca, instruktor",
};

export const instructors: readonly Instructor[] = [
  {
    id: "andrzej-kowalski",
    name: "Andrzej Kowalski",
    role: {
      en: "Owner, lecturer, instructor",
      pl: "Właściciel, wykładowca, instruktor",
    },
    categories: ["AM", "A1", "A2", "A", "B"],
    languages: ["en", "pl"],
    since: 2003,
    photo: "/images/instructors/andrzej-ostafin.webp",
    studentNote: {
      en: "Best training centre. Instructors at a serious level.",
      pl: "Najlepszy ośrodek. Instruktorzy poziom VIP.",
    },
  },
  {
    id: "stanislaw-Nowak",
    name: "Stanisław Nowak",
    role: lecturer,
    categories: ["B"],
    languages: ["pl"],
    photo: "/images/instructors/stanislaw-gawlik.webp",
  },
  {
    id: "jozef-woźniak",
    name: "Józef Woźniak",
    role: lecturer,
    categories: ["B"],
    languages: ["pl"],
    photo: "/images/instructors/jozef-kala.webp",
    studentNote: {
      en: "Kind, and he teaches well. I passed first time.",
      pl: "Bardzo miły i dobrze naucza. Dzięki niemu poszło za pierwszym.",
    },
  },
  {
    id: "tomasz-procner",
    name: "Tomasz Procner",
    role: lecturer,
    categories: ["A1", "A2", "A", "B"],
    languages: ["en", "pl"],
    photo: "/images/instructors/tomasz-procner.webp",
  },
  {
    id: "marzena-ostafin",
    name: "Marzena Ostafin",
    role: { en: "Customer service", pl: "Obsługa klienta" },
    categories: ["B"],
    languages: ["en", "pl"],
    photo: "/images/instructors/marzena-ostafin.webp",
    studentNote: {
      en: "The office actually picks up. They talk you through the messy bits.",
      pl: "Bardzo dobry kontakt z biurem. Pomagają ogarnąć teorię.",
    },
  },
];
