import { useEffect } from "react";
import { SITE_NAME } from "@/lib/site";

const DEFAULT_DESCRIPTION =
  "Continuum Creative Agency designs and builds custom web and mobile apps around how your business actually works, from auction platforms and building-supply ordering to pharmacy price comparison and league management.";

// Sets the browser tab title and the page description as the visitor moves around.
export function useSeo({ title, description } = {}) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
