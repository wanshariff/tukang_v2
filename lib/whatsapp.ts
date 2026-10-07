export const WA_NUMBER_INTL = "60194176182"; // +60 19 417 6182

const PAGE_NAMES: Record<string, string> = {
  "": "Home",
  services: "Packages",
  packages: "Packages",
  planner: "Planner",
  "schedule-discovery": "Schedule Discovery",
};

// Human-readable page name from a pathname, e.g. "/packages" -> "Packages".
export function pageNameFromPath(pathname: string | null): string {
  const segment = (pathname || "/").split("/")[1] || "";
  if (segment in PAGE_NAMES) return PAGE_NAMES[segment];
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function whatsAppPageLink(pathname: string | null): string {
  const text = `Hi Tadal Studio! I'm on the ${pageNameFromPath(
    pathname
  )} page and have a question.`;
  return `https://wa.me/${WA_NUMBER_INTL}?text=${encodeURIComponent(text)}`;
}
