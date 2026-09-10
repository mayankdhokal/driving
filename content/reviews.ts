import type { ReviewQuote } from "./types";

export const reviews = {
  googleRating: 4.6,
  googleCount: 39,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ośrodek+Szkolenia+Kierowców+Mado+Kęty",
  quotes: [
    {
      name: "Adam P.",
      initial: "A",
      color: "#1a73e8",
      rating: 5,
      postedAt: "2026-09-03",
      quote: {
        en: "Best training centre. Instructors at a serious level.",
        pl: "Najlepszy ośrodek szkoleniowy. Instruktorzy poziom VIP.",
      },
    },
    {
      name: "Karolina M.",
      initial: "K",
      color: "#e8710a",
      rating: 5,
      postedAt: "2026-08-22",
      quote: {
        en: "I failed Category A elsewhere, did one extra hour here, and passed the second time. The instructor spotted what I was doing wrong and told me how to fix it.",
        pl: "Kurs na kat. A robiłam w innym ośrodku, niestety nie zdałam za pierwszym razem. Jedna godzina doszkalająca w DriveWay i zdałam za drugim razem.",
      },
    },
    {
      name: "Magdalena L.",
      initial: "M",
      color: "#188038",
      rating: 5,
      postedAt: "2026-08-09",
      quote: {
        en: "Calm lectures, decent kit, they treat you as a person. I would send anyone here.",
        pl: "Wykładowca super, instruktorzy również, fajna atmosfera, indywidualne podejście do kursantów, Z chęcią polecę każdemu ten ośrodek.",
      },
    },
    {
      name: "Paweł T.",
      initial: "P",
      color: "#9334e6",
      rating: 5,
      postedAt: "2026-07-28",
      quote: {
        en: "Huge patience, no unnecessary stress. Not only the exam: real driving that you use later. Theory and practical passed first time.",
        pl: "Ogrom cierpliwości, bez niepotrzebnej spiny. Nie tylko pod egzamin, ale uczy rzeczy, które potem przydają się na co dzień. Teoria i praktyka zdane za pierwszym razem.",
      },
    },
    {
      name: "Natalia B.",
      initial: "N",
      color: "#c5221f",
      rating: 5,
      postedAt: "2026-07-11",
      quote: {
        en: "Very good contact with the office. The instructor was patient, explained everything, and the atmosphere on lessons was calm.",
        pl: "Bardzo dobry kontakt z biurem. Świetne podejście instruktora, mnóstwo cierpliwości. Na jazdach bezstresowa atmosfera.",
      },
    },
  ] satisfies readonly ReviewQuote[],
} as const;
