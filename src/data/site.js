// Site-wide constants shared by pages, metadata, sitemap and robots.
// SITE.url: replace with the final production domain before going live.
export const SITE = {
  name: "Techless",
  url: "https://techless.io",
  email: "hello@techless.io",
  descriptor: "IT Infrastructure & Managed Services",
  tagline: "We handle the tech. You feel none of it.",
  description:
    "Techless is a managed IT & infrastructure services company. Network infrastructure, system administration, cloud & DevOps, and cybersecurity — run for you, around the clock. One partner, one SLA.",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export const STATS = [
  { value: "140+", label: "estates under management" },
  { value: "99.99%", label: "network uptime" },
  { value: "<15 min", label: "critical incident response" },
  { value: "<10 min", label: "security time to respond" },
];
