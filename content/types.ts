export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];
export type L = Record<Locale, string>;

export type CategoryCode =
  | "AM"
  | "A1"
  | "A2"
  | "A"
  | "B"
  | "BE"
  | "C"
  | "CE"
  | "D";

export type IntakeFormat = "evening" | "weekend" | "intensive";
export type IntakeLanguage = "pl" | "en";
export type IntakeStatus = "open" | "few-seats" | "full";
export type ExtraUnit = "flat" | "per-hour";
export type StepWho = "you" | "us";

export interface OpeningHours {
  days: L;
  open: string;
  close: string;
}

export interface SchoolAddress {
  street: string;
  postcode: string;
  city: string;
  region: L;
  lat: number;
  lng: number;
  mapsUrl: string;
}

export interface School {
  name: string;
  legalName: string;
  nip: string;
  regon: string;
  founded: number;
  phone: {
    office: string;
    mobile: string;
    whatsapp: string;
  };
  extraPhones: readonly { label: L; number: string }[];
  email: string;
  bank: {
    name: string;
    iban: string;
  };
  address: SchoolAddress;
  registeredAddress: {
    street: string;
    postcode: string;
    city: string;
  };
  hours: readonly OpeningHours[];
  social: {
    facebook: string;
    instagram: string;
  };
}

export interface Course {
  code: CategoryCode;
  slug: string;
  name: L;
  summary: L;
  minAge: L;
  theoryHours: number;
  practicalHours: number;
  priceGross: number;
  instalments?: { count: number; amount: number };
  includes: L[];
  excludes: L[];
  vehicles: L[];
  englishAvailable: boolean;
  popular?: boolean;
}

export interface Intake {
  id: string;
  startsAt: string;
  category: CategoryCode;
  format: IntakeFormat;
  language: IntakeLanguage;
  status: IntakeStatus;
  seatsLeft: number;
}

export interface Instructor {
  id: string;
  name: string;
  role: L;
  categories: CategoryCode[];
  languages: readonly IntakeLanguage[];
  since?: number;
  photo: string;
  studentNote?: L;
}

export interface ReviewQuote {
  name: string;
  initial: string;
  color: string;
  rating: number;
  postedAt: string;
  quote: L;
}

export interface Skill {
  n: string;
  title: L;
  body: L;
}

export interface Extra {
  label: L;
  price: number;
  unit: ExtraUnit;
  note?: L;
}

export interface Step {
  n: number;
  title: L;
  body: L;
  who: StepWho;
}

export interface FaqItem {
  q: L;
  a: L;
  category?: string;
}

export interface Stat {
  value: number;
  label: L;
  suffix?: string;
}

export interface FleetItem {
  src: string;
  width: number;
  height: number;
  alt: L;
  kind: "car" | "motorcycle" | "yard" | "classroom";
}
