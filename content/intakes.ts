import type { Intake } from "./types";

export const intakes: readonly Intake[] = [
  {
    id: "b-en-2026-10-08",
    startsAt: "2026-10-08T17:00:00+02:00",
    category: "B",
    format: "evening",
    language: "en",
    status: "open",
    seatsLeft: 2,
  },
  {
    id: "b-en-2026-11-12",
    startsAt: "2026-11-12T17:00:00+01:00",
    category: "B",
    format: "evening",
    language: "en",
    status: "open",
    seatsLeft: 4,
  },
  {
    id: "b-pl-2026-10-01",
    startsAt: "2026-10-01T17:00:00+02:00",
    category: "B",
    format: "evening",
    language: "pl",
    status: "open",
    seatsLeft: 2,
  },
  {
    id: "b-en-weekend-2026-10-24",
    startsAt: "2026-10-24T09:00:00+02:00",
    category: "B",
    format: "weekend",
    language: "en",
    status: "few-seats",
    seatsLeft: 2,
  },
];
