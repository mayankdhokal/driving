import type { FaqItem } from "./types";

export const faqs: readonly FaqItem[] = [
  {
    q: {
      en: "Can I do Category B with theory in English?",
      pl: "Czy teorię kat. B można robić po angielsku?",
    },
    a: {
      en: "Yes. Lectures, classroom tests, and office paperwork can be in English. Practical lessons are taught in English in a dual-control Hyundai. The state theory exam is available in English. The practical state exam is in Polish. We drill the examiner commands so you are not guessing on the day.",
      pl: "Tak. Wykłady, testy na sali i biuro mogą być po angielsku. Jazdy też prowadzimy po angielsku na Hyundaiu z podwójnymi pedałami. Egzamin teoretyczny WORD jest po angielsku. Egzamin praktyczny jest po polsku. Ćwiczymy komendy egzaminatora.",
    },
    category: "language",
  },
  {
    q: {
      en: "I live near Oświęcim. Do I need Polish for the course?",
      pl: "Mieszkam koło Oświęcimia. Czy na kurs trzeba znać polski?",
    },
    a: {
      en: "Not for Category B if you join an English group. You will need a passport or residence card for the candidate-driver profile, and you will hear Polish on the road. We are in Kęty, a short drive from Oświęcim.",
      pl: "Na kat. B w grupie angielskiej nie. Do PKK potrzebny jest paszport albo karta pobytu. Na drodze i tak usłyszysz polski. Jesteśmy w Kętach, blisko Oświęcimia.",
    },
    category: "foreigner",
  },
  {
    q: {
      en: "What is a PKK, and can you get it for me?",
      pl: "Co to jest PKK i czy załatwicie to za mnie?",
    },
    a: {
      en: "PKK is the Polish name for your candidate-driver profile. The municipal office issues it after a medical. We cannot apply in your name, but we walk you through the form, the address, and the documents. Without a PKK the school is not allowed to log your hours.",
      pl: "PKK to Profil Kandydata na Kierowcę, wydawany przez urząd po badaniach. Nie złożymy wniosku za Ciebie, ale powiemy, który formularz i który pokój. Bez PKK nie wolno nam wpisywać godzin.",
    },
    category: "admin",
  },
  {
    q: {
      en: "What does 3,600 zł actually include?",
      pl: "Co wchodzi w 3600 zł?",
    },
    a: {
      en: "Thirty hours of theory, thirty hours of practical, internal exams, and help with the candidate-driver application. It does not include the medical (200 zł here), state exam fees (paid to the exam centre), or extra lessons beyond the syllabus.",
      pl: "30 godzin teorii, 30 godzin praktyki, egzaminy wewnętrzne i pomoc przy PKK. Nie obejmuje badań (200 zł u nas), opłat WORD (płacisz państwu) ani jazd dodatkowych poza programem.",
    },
    category: "price",
  },
  {
    q: {
      en: "Can I start before I turn 18?",
      pl: "Czy mogę zacząć przed 18. urodzinami?",
    },
    a: {
      en: "Yes, at 17 years and 9 months for Category B. You cannot sit the practical state exam until you are 18. We time the hours so you are not sitting in a holding pattern.",
      pl: "Tak, od 17 lat i 9 miesięcy na kat. B. Egzamin praktyczny WORD dopiero po 18. latach. Układamy godziny tak, żeby nie czekać w próżni.",
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
      pl: "WORD to wojewódzki ośrodek, w którym zdajesz egzamin państwowy. Po kursie teoria i praktyka, zwykle w Oświęcimiu. Teoria może być po angielsku. Praktyka jest po polsku; ćwiczymy komendy. Opłaty płacisz do WORD, nie nam.",
    },
    category: "admin",
  },
  {
    q: {
      en: "Do you take instalments?",
      pl: "Czy można płacić w ratach?",
    },
    a: {
      en: "Talk to the office. Many students pay a deposit to hold a seat and the rest before practical hours start. We do not add interest. Bring ID when you sign the contract.",
      pl: "Ustal to w biurze. Często zadatek na miejsce, reszta przed jazdami. Bez odsetek. Na umowę weź dokument tożsamości.",
    },
    category: "price",
  },
];

export const homeFaqs = faqs.slice(0, 4);
