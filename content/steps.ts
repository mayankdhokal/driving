import type { Step } from "./types";

export const steps: readonly Step[] = [
  {
    n: 1,
    title: { en: "Medical certificate", pl: "Badania lekarskie" },
    body: {
      en: "A doctor confirms you can drive. We run the exam in our office for 200 zł, so you do not have to hunt for a clinic first.",
      pl: "Lekarz potwierdza, że możesz prowadzić. Badanie robimy w ośrodku za 200 zł.",
    },
    who: "you",
  },
  {
    n: 2,
    title: { en: "Get your candidate profile", pl: "PKK" },
    body: {
      en: "Take the medical certificate and your ID to the municipal office and apply for a candidate-driver profile (PKK). We tell you which desk and which form. You cannot start theory without this number.",
      pl: "Z badaniami i dokumentem idziesz do urzędu po Profil Kandydata na Kierowcę. Powiemy, które okienko. Bez numeru PKK nie zaczynamy teorii.",
    },
    who: "you",
  },
  {
    n: 3,
    title: { en: "Theory", pl: "Teoria" },
    body: {
      en: "Thirty lesson hours in our classroom in Kęty. Lectures, question-bank practice, and the same test format the exam centre uses. English group available for Category B.",
      pl: "30 godzin lekcyjnych na sali w Kętach. Wykłady, baza pytań, format jak na WORD. Na kat. B jest też grupa angielska.",
    },
    who: "us",
  },
  {
    n: 4,
    title: { en: "Practical hours", pl: "Jazdy" },
    body: {
      en: "Thirty hours in a dual-control Hyundai of the kind the exam centre puts on the test. Yard, town, and the Oświęcim-area routes examiners actually use.",
      pl: "30 godzin na Hyundaiu z podwójnymi pedałami, jak na egzaminie. Plac, miasto i trasy z okolic Oświęcimia.",
    },
    who: "us",
  },
  {
    n: 5,
    title: { en: "Internal exam, then the state test", pl: "Egzamin wewnętrzny, potem WORD" },
    body: {
      en: "You sit our internal theory and practical exams (included). Then you book the state exam. Extra hours are billed only if you want them.",
      pl: "Najpierw nasze egzaminy wewnętrzne (w cenie), potem państwowy. Dodatkowe godziny tylko jeśli ich chcesz.",
    },
    who: "us",
  },
];
