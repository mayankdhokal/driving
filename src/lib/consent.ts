export const CONSENT_KEY = "mado-cookie-consent";

export type ConsentChoice = "essential" | "all";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === "essential" || value === "all") return value;
  return null;
}

export function writeConsent(choice: ConsentChoice): void {
  window.localStorage.setItem(CONSENT_KEY, choice);
  window.dispatchEvent(new Event("mado-consent"));
}
