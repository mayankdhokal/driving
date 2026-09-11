import type { FaqItem } from "./types";

export const faqs: readonly FaqItem[] = [
  {
    q: {
      en: "Can I do Category B with theory in English?",
      pl: "Czy instruktor odbiera kursanta spod domu/szkoły?",
    },
    a: {
      en: "Yes. Lectures, classroom tests, and office paperwork can be in English. Practical lessons are taught in English in a dual-control Hyundai. The state theory exam is available in English. The practical state exam is in Polish. We drill the examiner commands so you are not guessing on the day.",
      pl: "Tak! Nie musisz dojeżdżać do nas. Możemy rozpocząć jazdę spod Twojego domu, szkoły lub innego ustalonego miejsca.",
    },
    category: "language",
  },
  {
    q: {
      en: "I live near Oświęcim. Do I need Polish for the course?",
      pl: "Jak zapisać się na kurs?",
    },
    a: {
      en: "Not for Category B if you join an English group. You will need a passport or residence card for the candidate-driver profile, and you will hear Polish on the road. We are in Kęty, a short drive from Oświęcim.",
      pl: "To proste! Skontaktuj się z nami telefonicznie, przez formularz kontaktowy lub wiadomość. Ustalimy dogodny termin rozpoczęcia kursu i pomożemy Ci przejść przez wszystkie formalności.",
    },
    category: "foreigner",
  },
  {
    q: {
      en: "What is a PKK, and can you get it for me?",
      pl: "Czy można zacząć jazdy praktyczne przed zdaniem teorii?",
    },
    a: {
      en: "PKK is the Polish name for your candidate-driver profile. The municipal office issues it after a medical. We cannot apply in your name, but we walk you through the form, the address, and the documents. Without a PKK the school is not allowed to log your hours.",
      pl: "Nie. Najpierw należy zdać egzamin teoretyczny, a dopiero później rozpocząć część praktyczną kursu.",
    },
    category: "admin",
  },
  {
    q: {
      en: "What does 3,600 zł actually include?",
      pl: "Jak wygląda teoria?",
    },
    a: {
      en: "Thirty hours of theory, thirty hours of practical, internal exams, and help with the candidate-driver application. It does not include the medical (200 zł here), state exam fees (paid to the exam centre), or extra lessons beyond the syllabus.",
      pl: "Otrzymujesz od nas materiały do nauki online, dzięki którym możesz przygotować się do egzaminu teoretycznego we własnym tempie. Gdy będziesz gotowy, pomagamy Ci z zapisem na egzamin teoretyczny w WORD.",
    },
    category: "price",
  },
  {
    q: {
      en: "Can I start before I turn 18?",
      pl: "Czy można płacić w ratach?",
    },
    a: {
      en: "Yes, at 17 years and 9 months for Category B. You cannot sit the practical state exam until you are 18. We time the hours so you are not sitting in a holding pattern.",
      pl: "Tak! Koszt kursu możesz rozłożyć na 3 raty, dzięki czemu nie musisz płacić całej kwoty jednorazowo.",
    },
    category: "age",
  },
  {
    q: {
      en: "What is WORD?",
      pl: "Co to jest WORD?",
    },
    a: {
      en: "WORD is the Polish name for the state exam centre. After the course you sit theory and practical tests there, usually in Oświęcim. Theory can be in English. The practical test is in Polish; we drill the examiner commands. Fees are paid to the centre, not to us.",
      pl: "WORD, czyli Wojewódzki Ośrodek Ruchu Drogowego, to miejsce, w którym odbywają się państwowe egzaminy na prawo jazdy, zarówno teoretyczne, jak i praktyczne.",
    },
    category: "admin",
  },
  {
    q: {
      en: "Do you take instalments?",
      pl: "Czy egzamin będę zdawał tym samym autem, którym uczyłem się jeździć?",
    },
    a: {
      en: "Talk to the office. Many students pay a deposit to hold a seat and the rest before practical hours start. We do not add interest. Bring ID when you sign the contract.",
      pl: "Tak! Egzamin praktyczny zdajesz tym samym modelem samochodu, którym odbywałeś jazdy w naszej szkole. Dzięki temu w dniu egzaminu nie musisz przyzwyczajać się do nowego auta.",
    },
    category: "price",
  },
];

export const homeFaqs = faqs.slice(0, 4);
