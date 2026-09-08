"use client";

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { readConsent } from "@/lib/consent";

export function AnalyticsGate() {
  const [allowed, setAllowed] = useState(false);
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  useEffect(() => {
    const sync = () => setAllowed(readConsent() === "all");
    sync();
    window.addEventListener("mado-consent", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("mado-consent", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    if (!allowed || !domain) return;
    if (document.querySelector("script[data-mado-plausible]")) return;
    const script = document.createElement("script");
    script.defer = true;
    script.dataset.domain = domain;
    script.dataset.madoPlausible = "true";
    script.src = "https://plausible.io/js/script.js";
    document.body.appendChild(script);
  }, [allowed, domain]);

  if (!allowed) return null;
  return <Analytics />;
}
