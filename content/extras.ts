import type { Extra, L } from "./types";

export const extras: readonly Extra[] = [
  {
    label: { en: "Medical certificate, on site", pl: "Badania lekarskie na miejscu" },
    price: 200,
    unit: "flat",
    note: {
      en: "Required before you can apply for a candidate-driver profile. Done in our office.",
      pl: "Wymagane przed PKK. Robimy je w ośrodku.",
    },
  },
  {
    label: { en: "Extra Category B lesson (MADO students)", pl: "Jazda doszkalająca kat. B (kursanci MADO)" },
    price: 125,
    unit: "per-hour",
  },
  {
    label: {
      en: "Extra Category B lesson (from another school)",
      pl: "Jazda doszkalająca kat. B (spoza MADO)",
    },
    price: 150,
    unit: "per-hour",
  },
  {
    label: { en: "Extra Category A lesson, yard", pl: "Jazda doszkalająca kat. A, plac" },
    price: 120,
    unit: "per-hour",
  },
  {
    label: { en: "Extra Category A lesson, city", pl: "Jazda doszkalająca kat. A, miasto" },
    price: 150,
    unit: "per-hour",
  },
];

export const wordFees: readonly { label: L; note: L; indicative: number }[] = [
  {
    label: { en: "State theory exam", pl: "Egzamin teoretyczny WORD" },
    note: {
      en: "Paid to the exam centre, not to us. Available in English.",
      pl: "Płacisz do WORD, nie nam. Dostępny po angielsku.",
    },
    indicative: 50,
  },
  {
    label: { en: "State practical exam, Category B", pl: "Egzamin praktyczny WORD, kat. B" },
    note: {
      en: "Paid to the exam centre, not to us. Conducted in Polish. We drill the commands.",
      pl: "Płacisz do WORD, nie nam. Egzamin po polsku. Ćwiczymy komendy.",
    },
    indicative: 200,
  },
];
