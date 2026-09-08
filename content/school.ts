import type { School } from "./types";

export const school = {
  name: "DriveWay Szkoła jazdy",
  legalName: 'Andrzej Ostafin Ośrodek Szkolenia Kierowców F.H.-U. "MADO"',
  nip: "5491113873",
  regon: "851766105",
  founded: 2003,
  phone: {
    office: "+48 33 845 08 38",
    mobile: "+48 516 154 888",
    whatsapp: "+48 516 154 888",
  },
  extraPhones: [
    { label: { en: "Manager", pl: "Kierownik" }, number: "+48 603 931 507" },
    { label: { en: "Tomasz", pl: "Tomasz" }, number: "+48 739 293 314" },
  ],
  email: "ostafin@onet.eu",
  bank: {
    name: "ING",
    iban: "PL66 1050 1113 1000 0090 7368 3360",
  },
  address: {
    street: "ul. Świętokrzyska 22",
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
