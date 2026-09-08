import type { L } from "./types";

export const legal = {
  privacyWho: { en: "Who we are", pl: "Kim jesteśmy" },
  privacyWhoBody: {
    en: "Controller identity, addresses, email and phone are listed on this page.",
    pl: "Administrator, adresy, e-mail i telefon są na tej stronie.",
  },
  privacyForm: { en: "Enrolment form", pl: "Formularz zapisu" },
  privacyForm1: {
    en: "If you submit the form we process your name, phone, email, chosen category, preferred intake, language, and optional message. The purpose is to contact you about a driving course. The legal basis is Article 6(1)(a) GDPR (consent), which you give with the unticked checkbox on the form. You can withdraw it by emailing us.",
    pl: "Po wysłaniu formularza przetwarzamy imię, telefon, e-mail, kategorię, preferowany nabór, język i ewentualną wiadomość. Cel: kontakt w sprawie kursu. Podstawa: art. 6 ust. 1 lit. a RODO (zgoda) z niezaznaczonego checkboxa. Cofniesz ją mailem.",
  },
  privacyForm2: {
    en: "If you join a course we also process the data needed to run it. That sits on contract (Article 6(1)(b)) and on legal duties for driving-school records (Article 6(1)(c)).",
    pl: "Po zapisaniu na kurs przetwarzamy dane potrzebne do szkolenia. Umowa (art. 6 ust. 1 lit. b) i obowiązki prawne ośrodka (art. 6 ust. 1 lit. c).",
  },
  privacyForm3: {
    en: "Enrolment enquiries are kept for 24 months, or until you ask us to delete them if we have no legal duty to keep them. Course records are kept for the periods Polish education and tax law require.",
    pl: "Zgłoszenia trzymamy 24 miesiące albo skracamy na żądanie, jeśli nie musimy ich trzymać. Akta kursu: tak długo, jak wymagają przepisy oświatowe i podatkowe.",
  },
  privacyForm4: {
    en: "Recipients: our office staff, and the email provider used to deliver the form (Resend, if configured). We do not sell this data. The exam centre and the municipal office receive only what a driving course legally requires, after you enrol.",
    pl: "Odbiorcy: biuro oraz dostawca poczty (Resend, jeśli włączony). Danych nie sprzedajemy. WORD i urząd dostają tylko to, czego wymaga kurs, po zapisie.",
  },
  privacyCookies: { en: "Cookies and analytics", pl: "Ciasteczka i analityka" },
  privacyCookies1: {
    en: "The site stores your cookie choice in the browser (localStorage). That is not used for advertising. If you accept analytics we load Vercel Analytics, and Plausible if it is configured. Both count page views. They are not used to build a marketing profile. You can refuse analytics and still send an enrolment request.",
    pl: "Wybór zgody trzymamy w przeglądarce (localStorage). Bez reklam. Po zgodzie włączamy Vercel Analytics i ewentualnie Plausible. Liczą odsłony, nie budują profilu marketingowego. Możesz odmówić i i tak wysłać zapis.",
  },
  privacyCookies2: {
    en: "The host may keep technical logs (IP address, browser) to keep the site up and to rate-limit spam on the form.",
    pl: "Host może trzymać logi techniczne (IP, przeglądarka), żeby utrzymać stronę i ograniczyć spam na formularzu.",
  },
  privacyRights: { en: "Your rights", pl: "Twoje prawa" },
  privacyRightsBody: {
    en: "You may access, rectify, erase, restrict, or object, and you may lodge a complaint with the President of the Personal Data Protection Office (UODO) in Warsaw. We do not use form data for automated decision-making.",
    pl: "Masz prawo dostępu, sprostowania, usunięcia, ograniczenia i sprzeciwu oraz skargi do Prezesa UODO. Danych z formularza nie używamy do zautomatyzowanych decyzji.",
  },
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
