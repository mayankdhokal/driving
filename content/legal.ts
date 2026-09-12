import type { L } from "./types";

export const legal = {
  termsEnrol: { en: "Enrolment", pl: "Zapis" },
  termsEnrolBody: {
    en: "The office confirms availability, you sign a training contract, and you pay according to that contract.",
    pl: "Biuro potwierdza wolne miejsce, podpisujesz umowę szkolenia i płacisz według umowy.",
  },
  termsNotCover: { en: "What the price does not cover", pl: "Czego cena nie obejmuje" },
  termsNotCoverBody: {
    en: "The course price does not include the medical certificate, state exam fees, extra hours beyond the syllabus, or the licence card. Those are listed on the pricing page.",
    pl: "Cena kursu nie obejmuje badań, opłat WORD, jazd poza programem ani karty prawa jazdy. To jest w cenniku.",
  },
  termsPkk: { en: "Candidate profile and hours", pl: "PKK i godziny" },
  termsPkk1: {
    en: "You must obtain a candidate-driver profile (PKK) before we can log theory or practical hours. Hours are 45-minute lesson units as under Polish driving-school rules.",
    pl: "Bez PKK nie wpisujemy teorii ani jazd. Godzina lekcyjna to 45 minut, zgodnie z przepisami.",
  },
  termsPkk2: {
    en: "Cancelled practical lessons with less than 24 hours notice may be counted as used. Details are in the paper contract.",
    pl: "Odwołanie jazdy na mniej niż 24 godziny wcześniej może być liczone jako wykorzystane. Szczegóły w umowie papierowej.",
  },
  termsLaw: { en: "Law", pl: "Prawo" },
  termsLawBody: {
    en: "Governing law: Poland. Training takes place in Kęty.",
    pl: "Prawo polskie. Szkolenie odbywa się w Kętach.",
  },
} as const satisfies Record<string, L>;
