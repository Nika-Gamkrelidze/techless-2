// Site-wide constants shared by pages, metadata, sitemap and robots.
// SITE.url: replace with the final production domain before going live.
export const SITE = {
  name: "Techless",
  url: "https://techless.studio",
  email: "hello@techless.studio",
  descriptor: "Outsourced Engineering Studio",
  tagline: "We handle the tech. You feel none of it.",
  description:
    "Techless is an outsourced engineering studio. Web, mobile, hardware and contact-center teams that build, ship and support your product end to end — one partner, one invoice, zero hiring.",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/contact/", label: "Contact" },
];

export const STATS = [
  { value: "98%", label: "client retention" },
  { value: "300+", label: "web products shipped" },
  { value: "4.8★", label: "average store rating" },
  { value: "<30s", label: "average response time" },
];
