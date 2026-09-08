import type { Course, L } from "./types";

const sharedIncludes: L[] = [
  {
    en: "Help applying for your candidate-driver profile",
    pl: "Pomoc przy wniosku o PKK",
  },
  {
    en: "Internal theory exam in the state-exam format",
    pl: "Egzamin wewnętrzny teoretyczny w formule WORD",
  },
  {
    en: "Internal practical exam",
    pl: "Egzamin wewnętrzny praktyczny",
  },
];

const sharedExcludes: L[] = [
  {
    en: "State exam fees (theory and practical)",
    pl: "Opłaty za egzamin państwowy WORD (teoria i praktyka)",
  },
  {
    en: "Medical certificate (available here, billed separately)",
    pl: "Badania lekarskie (na miejscu, płatne osobno)",
  },
  {
    en: "Licence card issued by the office after you pass",
    pl: "Karta prawa jazdy wydawana przez urząd po zdaniu",
  },
];

export const courses: readonly Course[] = [
  {
    code: "AM",
    slug: "category-am",
    name: { en: "Category AM: Moped", pl: "Kategoria AM: motorower" },
    summary: {
      en: "Mopeds and light quadricycles. Theory is in Polish. Ask the office if you need extra support on the yard.",
      pl: "Motorowery i lekkie czterokołowce. Teoria po polsku. Biuro podpowie, jak wygląda plac.",
    },
    minAge: {
      en: "14 years (start at 13 years 9 months)",
      pl: "14 lat (start od 13 lat i 9 miesięcy)",
    },
    theoryHours: 25,
    practicalHours: 5,
    priceGross: 1000,
    includes: [...sharedIncludes],
    excludes: [...sharedExcludes],
    vehicles: [{ en: "School mopeds on an exam-spec yard", pl: "Motorowery szkolne, plac jak na WORD" }],
    englishAvailable: false,
  },
  {
    code: "A1",
    slug: "category-a1",
    name: { en: "Category A1: Light motorcycle", pl: "Kategoria A1: motocykl lekki" },
    summary: {
      en: "Motorcycles up to 125 cc. Practical training on machines close to what the exam centre uses in Małopolska.",
      pl: "Motocykle do 125 cm³. Szkolenie na sprzęcie zbliżonym do WORD w Małopolsce.",
    },
    minAge: {
      en: "16 years (start at 15 years 9 months)",
      pl: "16 lat (start od 15 lat i 9 miesięcy)",
    },
    theoryHours: 30,
    practicalHours: 20,
    priceGross: 2800,
    includes: [...sharedIncludes],
    excludes: [...sharedExcludes],
    vehicles: [{ en: "Light motorcycles, exam-spec yard", pl: "Motocykle lekkie, plac jak na WORD" }],
    englishAvailable: false,
  },
  {
    code: "A2",
    slug: "category-a2",
    name: { en: "Category A2: Motorcycle", pl: "Kategoria A2: motocykl" },
    summary: {
      en: "Restricted motorcycles. Same classroom and yard as Category A, with hours matched to the Polish syllabus.",
      pl: "Motocykle z ograniczeniem mocy. Ta sama sala i plac co kat. A, godziny zgodne z programem.",
    },
    minAge: {
      en: "18 years (start at 17 years 9 months)",
      pl: "18 lat (start od 17 lat i 9 miesięcy)",
    },
    theoryHours: 30,
    practicalHours: 20,
    priceGross: 3000,
    includes: [...sharedIncludes],
    excludes: [...sharedExcludes],
    vehicles: [{ en: "A2 motorcycles, exam-spec yard", pl: "Motocykle A2, plac jak na WORD" }],
    englishAvailable: false,
  },
  {
    code: "A",
    slug: "category-a",
    name: { en: "Category A: Motorcycle", pl: "Kategoria A: motocykl" },
    summary: {
      en: "Unrestricted motorcycles. Combine with A2 if you are building up through the staged motorcycle path.",
      pl: "Motocykle bez ograniczeń. Można łączyć z A2, jeśli idziesz ścieżką stopniową.",
    },
    minAge: {
      en: "24 years, or 20 with two years on A2",
      pl: "24 lata, albo 20 lat po dwóch latach na A2",
    },
    theoryHours: 30,
    practicalHours: 20,
    priceGross: 3000,
    includes: [...sharedIncludes],
    excludes: [...sharedExcludes],
    vehicles: [{ en: "Category A motorcycles, exam-spec yard", pl: "Motocykle kat. A, plac jak na WORD" }],
    englishAvailable: false,
  },
  {
    code: "B",
    slug: "category-b",
    name: { en: "Category B: Car", pl: "Kategoria B: samochód" },
    summary: {
      en: "The car licence. Thirty hours of theory (also in English), thirty hours in a dual-control Hyundai of the kind the exam centre uses.",
      pl: "Prawo jazdy na samochód. 30 godzin teorii (także po angielsku) i 30 godzin na Hyundaiu z podwójnymi pedałami, jak na WORD.",
    },
    minAge: {
      en: "18 years (start at 17 years 9 months)",
      pl: "18 lat (start od 17 lat i 9 miesięcy)",
    },
    theoryHours: 30,
    practicalHours: 30,
    priceGross: 3600,
    includes: [
      ...sharedIncludes,
      { en: "Theory lectures in English on request", pl: "Wykłady teoretyczne po angielsku na życzenie" },
      {
        en: "Examiner-command drill for the Polish practical test",
        pl: "Ćwiczenie komend egzaminatora na egzamin praktyczny",
      },
    ],
    excludes: [...sharedExcludes],
    vehicles: [{ en: "Hyundai dual-control cars (exam-spec)", pl: "Hyundai z podwójnymi pedałami (jak na WORD)" }],
    englishAvailable: true,
    popular: true,
  },
];

export function courseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function courseByCode(code: Course["code"]): Course | undefined {
  return courses.find((course) => course.code === code);
}

export const categoryB = courses.find((course) => course.code === "B");

if (!categoryB) {
  throw new Error("Category B is required content");
}

export const featuredCourse: Course = categoryB;
