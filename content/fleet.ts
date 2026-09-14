import type { FleetItem } from "./types";

export const fleet: readonly FleetItem[] = [
  {
    src: "/images/gallery-01-yaris.webp",
    width: 576,
    height: 432,
    alt: {
      en: "White Toyota training car with an L-plate on the yard",
      pl: "Biała Toyota szkolna z tablicą L na placu",
    },
    kind: "car",
  },
  {
    src: "/images/gallery-02-yard.webp",
    width: 768,
    height: 498,
    alt: {
      en: "Training car practising manoeuvres between cones",
      pl: "Samochód szkolny na placu manewrowym między pachołkami",
    },
    kind: "yard",
  },
  {
    src: "/images/gallery-03-pair.webp",
    width: 1024,
    height: 640,
    alt: {
      en: "Two white Toyota training cars with L-plates",
      pl: "Dwie białe Toyoty szkolne z tablicami L",
    },
    kind: "car",
  },
  {
    src: "/images/gallery-04-lot.webp",
    width: 1024,
    height: 576,
    alt: {
      en: "Driving-school cars parked together",
      pl: "Samochody szkoły jazdy zaparkowane razem",
    },
    kind: "car",
  },
  {
    src: "/images/gallery-05-views.webp",
    width: 940,
    height: 370,
    alt: {
      en: "Front and rear view of a white Toyota training car",
      pl: "Przód i tył białej Toyoty szkolnej",
    },
    kind: "car",
  },
];
