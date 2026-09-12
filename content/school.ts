import type { School } from "./types";

export const school = {
  name: "DriveWay Szkoła jazdy",
  legalName: 'Kowalski Andrzej Ośrodek Szkolenia Kierowców F.H.-U. "DriveWay"',
  nip: "5743907432",
  regon: "851766105",
  founded: 2003,
  phone: {
    office: "+48 67 432 08 21",
    mobile: "+48 432 654 423",
    whatsapp: "+48 897 531 785",
  },
  extraPhones: [
    { label: { en: "Manager", pl: "Kierownik" }, number: "+48 643 234 645" },
    { label: { en: "Tomasz", pl: "Tomasz" }, number: "+48 329 976 585" },
  ],
  email: "AndrzejKowalski@onet.eu",
  bank: {
    name: "ING",
    iban: "PL66 1093 1211 1000 5234 7368 2431",
  },
  address: {
    street: "ul. Kopernika 21",
    postcode: "32-650",
    city: "Kęty",
    region: {
      en: "Lesser Poland, Oświęcim County",
      pl: "Małopolska, powiat oświęcimski",
    },
    lat: 49.883777,
    lng: 19.219086,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ośrodek+Szkolenia+Kierowców+Mado+Kęty",
  },
  registeredAddress: {
    street: "ul. Stawowa 57",
    postcode: "32-651",
    city: "Malec",
  },
  hours: [
    { days: { en: "Mon to Thu", pl: "Pon. do czw." }, open: "08:00", close: "16:00" },
    { days: { en: "Fri", pl: "Pt." }, open: "08:00", close: "14:00" },
  ],
  social: {
    facebook: "",
    instagram: "",
  },
} satisfies School;
