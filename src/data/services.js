// The four Techless departments ("rooms" in the 3D site's office building).
// Copy is ported verbatim from the 3D experience (src/config/journey.js there).
export const SERVICES = [
  {
    slug: "web-development",
    num: "01",
    eyebrow: "Service 01 — Build",
    name: "Web Development",
    titleLines: ["Web", "Development"],
    hue: "#2f7bff",
    tagline: "Products that live in the browser and feel native.",
    shortBody:
      "We design and engineer web platforms end to end — from the data layer to the last pixel of motion.",
    list: [
      "Full-stack engineering",
      "React · Next.js · Node",
      "Design systems & UI",
      "Commerce & platforms",
      "Realtime APIs & data",
    ],
    stat: { value: "300+", label: "web products shipped" },
    intro:
      "This room is a full product team: strategy, design, engineering and operations for everything that runs in a browser.",
    points: [
      {
        title: "Discover & architect",
        body: "We map your domain, pick the stack and design the system — data model, APIs, infrastructure and a delivery plan with real dates.",
      },
      {
        title: "Design & build",
        body: "Senior engineers ship in weekly increments: design system first, then features behind flags, reviewed and tested end to end.",
      },
      {
        title: "Launch & run",
        body: "We deploy to your cloud, wire CI/CD, monitoring and analytics — then keep iterating with A/B tests and performance budgets.",
      },
    ],
    deliverables: [
      "Next.js / React apps",
      "Design systems",
      "REST & GraphQL APIs",
      "E-commerce",
      "Dashboards",
      "CI/CD pipelines",
    ],
    stack: "TypeScript · React · Next.js · Node · PostgreSQL · AWS / Vercel",
    metaDescription:
      "Web development by Techless: full-stack engineering of web platforms end to end — React, Next.js, Node, design systems, e-commerce, realtime APIs and CI/CD.",
  },
  {
    slug: "mobile-apps",
    num: "02",
    eyebrow: "Service 02 — Mobile",
    name: "Mobile Apps",
    titleLines: ["Mobile", "Apps"],
    hue: "#3fb9ff",
    tagline: "Native iOS and Android, one fluid product.",
    shortBody:
      "One team, both platforms. We ship store-ready apps with native performance and offline-first reliability.",
    list: [
      "Native iOS — Swift",
      "Native Android — Kotlin",
      "React Native & Flutter",
      "App Store & Play delivery",
      "Offline-first sync",
    ],
    stat: { value: "4.8★", label: "average store rating" },
    intro:
      "A store-ready app team for iOS and Android: one codebase or fully native, from first wireframe to the review queue.",
    points: [
      {
        title: "Prototype & validate",
        body: "Clickable prototypes in days — we test the flows with real users before a single line of production code.",
      },
      {
        title: "Build native-quality",
        body: "Swift & Kotlin or React Native / Flutter: offline-first storage, push, deep links, biometrics and payments done right.",
      },
      {
        title: "Ship & grow",
        body: "App Store and Play submission, phased rollouts, crash analytics, OTA updates and release trains you can set a watch by.",
      },
    ],
    deliverables: [
      "iOS & Android apps",
      "Store delivery",
      "Push & deep links",
      "Offline sync",
      "In-app payments",
      "Crash analytics",
    ],
    stack: "Swift · Kotlin · React Native · Flutter · Firebase",
    metaDescription:
      "Mobile app development by Techless: native iOS (Swift) and Android (Kotlin), React Native and Flutter — store-ready apps with offline-first sync, push and payments.",
  },
  {
    slug: "hardware-design",
    num: "03",
    eyebrow: "Service 03 — Silicon",
    name: "Hardware Design",
    titleLines: ["Hardware", "Design"],
    hue: "#6c8cff",
    tagline: "From schematic to fabricated board.",
    shortBody:
      "Our electronics team takes ideas through schematic capture, PCB layout, firmware and prototyping.",
    list: [
      "PCB & motherboard design",
      "Embedded firmware",
      "IoT & edge devices",
      "Sensor integration",
      "DFM & prototyping",
    ],
    stat: { value: "12-layer", label: "boards routed in-house" },
    intro:
      "An electronics lab as a service: we take a device from napkin sketch through schematic, layout, firmware and a factory-ready design.",
    points: [
      {
        title: "Schematic & layout",
        body: "Component selection with sourcing in mind, schematic capture and multi-layer PCB layout with signal-integrity care.",
      },
      {
        title: "Firmware & bring-up",
        body: "Embedded C/C++ and Rust on ARM and ESP32 — RTOS or bare metal, board bring-up, drivers, OTA and power budgets.",
      },
      {
        title: "Prototype & DFM",
        body: "Printed enclosures, small-batch prototype runs, test jigs, certification prep and a clean design-for-manufacturing handoff.",
      },
    ],
    deliverables: [
      "Schematics & PCBs",
      "Embedded firmware",
      "IoT connectivity",
      "Enclosures",
      "Test jigs",
      "DFM packages",
    ],
    stack: "KiCad / Altium · C/C++ · Rust · ARM · ESP32 · BLE / LoRa",
    metaDescription:
      "Hardware design by Techless: schematic capture, multi-layer PCB layout, embedded firmware on ARM and ESP32, IoT connectivity, prototyping and DFM handoff.",
  },
  {
    slug: "contact-center",
    num: "04",
    eyebrow: "Service 04 — Support",
    name: "Contact Center",
    titleLines: ["Contact", "Center"],
    hue: "#36d2e6",
    tagline: "Always-on support — human and AI.",
    shortBody:
      "We run the front line for your product: omnichannel desks, AI agents and the analytics behind them.",
    list: [
      "24/7 omnichannel desk",
      "AI voice & chat agents",
      "CRM & telephony",
      "QA & conversation analytics",
      "Multilingual teams",
    ],
    stat: { value: "<30s", label: "average response time" },
    intro:
      "Your customer front line, staffed and automated: human agents and AI working one queue in your brand voice.",
    points: [
      {
        title: "Stand up the desk",
        body: "Omnichannel routing — voice, chat, email, socials — wired into your CRM with SLAs, escalation paths and QA scorecards.",
      },
      {
        title: "Automate the routine",
        body: "AI agents resolve the repetitive majority: trained on your docs, guard-railed, with warm handoff to humans.",
      },
      {
        title: "Measure & improve",
        body: "Conversation analytics, CSAT and NPS tracking, and weekly insight reports that feed straight into product decisions.",
      },
    ],
    deliverables: [
      "24/7 staffed desk",
      "AI voice & chat",
      "CRM integration",
      "QA scorecards",
      "Analytics",
      "Multilingual cover",
    ],
    stack: "Twilio / Genesys · LLM agents · HubSpot / Salesforce",
    metaDescription:
      "Contact center services by Techless: 24/7 omnichannel support desks, AI voice and chat agents, CRM integration, QA scorecards and conversation analytics.",
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
