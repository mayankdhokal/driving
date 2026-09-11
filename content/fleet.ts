import type { FleetItem } from "./types";

export const fleet: readonly FleetItem[] = [
  {
    src: "/images/fleet-hyundai.webp",
    width: 800,
    height: 533,
    alt: {
      en: "Dual-control Hyundai used for Category B lessons",
      pl: "Hyundai z podwójnymi pedałami do jazd kat. B",
    },
    kind: "car",
    caption: {
      en: "Exam-spec Hyundai, dual control",
      pl: "Hyundai jak na egzaminie w WORD",
    },
  },
  {
    src: "/images/fleet-yard.webp",
    width: 800,
    height: 533,
    alt: {
      en: "Manoeuvring yard marked for driving tests",
      pl: "Plac manewrowy jak na egzaminie",
    },
    kind: "yard",
    caption: {
      en: "Yard laid out like the exam centre",
      pl: "Plac ustawiony jak w WORD",
    },
  },
  {
    src: "/images/fleet-moto.webp",
    width: 800,
    height: 533,
    alt: {
      en: "Training motorcycle on the school yard",
      pl: "Motocykl szkolny na placu",
    },
    kind: "motorcycle",
    caption: {
      en: "Motorcycle categories AM to A",
      pl: "Motocykle kategorii AM do A",
    },
  },
  {
    src: "/images/fleet-classroom.webp",
    width: 800,
    height: 533,
    alt: {
      en: "Classroom set up for theory lectures",
      pl: "Sala wykładowa do teorii",
    },
    kind: "classroom",
    caption: {
      en: "Classroom for theory",
      pl: "Sala do teorii",
    },
  },
  {
    src: "/images/fleet-cars.webp",
    width: 800,
    height: 450,
    alt: {
      en: "Driving-school cars parked on the lot",
      pl: "Samochody szkoły jazdy zaparkowane na placu",
    },
    kind: "car",
    caption: {
      en: "Our cars on the lot",
      pl: "Nasze auta na placu",
    },
  },
];
