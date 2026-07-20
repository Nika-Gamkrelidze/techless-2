// The four Techless departments ("rooms" in the 3D site's office building).
// Copy is ported verbatim from the 3D experience (src/config/journey.js there).
export const SERVICES = [
  {
    slug: "network-infrastructure",
    num: "01",
    eyebrow: "Service 01 — Connect",
    name: "Network Infrastructure",
    titleLines: ["Network", "Infrastructure"],
    hue: "#2f7bff",
    tagline: "The fabric every other system rides on — designed, built, watched.",
    shortBody:
      "We design, build and operate enterprise networks — from the campus core to the branch edge, watched 24/7 from our NOC.",
    list: [
      "Network design & audit",
      "Routing & switching",
      "SD-WAN & site-to-site VPN",
      "Enterprise Wi-Fi",
      "24/7 NOC monitoring",
    ],
    stat: { value: "99.99%", label: "network uptime, trailing 12 months" },
    intro:
      "This room is your network team: architects and engineers who design, deploy and babysit the links your whole business runs on.",
    points: [
      {
        title: "Audit & design",
        body: "We map what you actually have, find the single points of failure and design the target — topology, addressing, redundancy and a migration plan with real dates.",
      },
      {
        title: "Build & migrate",
        body: "Switching, routing, firewalls, SD-WAN and Wi-Fi deployed site by site — cutovers scheduled out of hours, so nobody notices the surgery.",
      },
      {
        title: "Monitor & respond",
        body: "Every link and device streams into our 24/7 NOC: proactive alerting, capacity planning and an engineer on it before your users feel it.",
      },
    ],
    deliverables: [
      "Campus & branch networks",
      "SD-WAN fabrics",
      "Enterprise Wi-Fi",
      "Firewall clusters",
      "Structured cabling",
      "NOC runbooks",
    ],
    stack: "Cisco · Juniper · Fortinet · Ubiquiti · MikroTik · Zabbix / PRTG",
    metaDescription:
      "Network infrastructure by Techless: enterprise network design, routing and switching, SD-WAN, enterprise Wi-Fi and firewalls — built site by site and watched 24/7 from our NOC.",
  },
  {
    slug: "system-administration",
    num: "02",
    eyebrow: "Service 02 — Operate",
    name: "System Administration",
    titleLines: ["System", "Administration"],
    hue: "#3fb9ff",
    tagline: "Servers, identity and endpoints — run like clockwork.",
    shortBody:
      "Your servers, directories and devices, managed end to end: patched, backed up, monitored and supported around the clock.",
    list: [
      "Windows & Linux servers",
      "Microsoft 365 & Entra ID",
      "Virtualization & storage",
      "Patching, backup & DR",
      "24/7 service desk",
    ],
    stat: { value: "<15 min", label: "critical incident response" },
    intro:
      "A full ops team on retainer: sysadmins who keep servers patched, identities clean, backups tested and users unblocked — day and night.",
    points: [
      {
        title: "Audit & stabilize",
        body: "We inventory every server, service and account, close the scary gaps first, and put monitoring and tested backups under all of it.",
      },
      {
        title: "Standardize & automate",
        body: "Golden images, configuration as code and self-healing checks — Ansible playbooks replace tribal knowledge and 2 a.m. heroics.",
      },
      {
        title: "Support & evolve",
        body: "A 24/7 service desk with real SLAs, quarterly capacity reviews and upgrade paths planned before end-of-life dates surprise you.",
      },
    ],
    deliverables: [
      "Managed servers",
      "Identity & M365",
      "Virtualization",
      "Backup & DR drills",
      "Endpoint management",
      "Service desk",
    ],
    stack: "Windows Server · RHEL / Debian · VMware · Proxmox · Ansible · Veeam",
    metaDescription:
      "System administration by Techless: managed Windows and Linux servers, Microsoft 365 and Entra ID, virtualization, patching, backup and DR — with a 24/7 service desk on real SLAs.",
  },
  {
    slug: "cloud-devops",
    num: "03",
    eyebrow: "Service 03 — Scale",
    name: "Cloud & DevOps",
    titleLines: ["Cloud &", "DevOps"],
    hue: "#6c8cff",
    tagline: "From server room to cloud — without the drama.",
    shortBody:
      "Migrations, landing zones and pipelines: we move workloads to the cloud and run them with infrastructure-as-code discipline.",
    list: [
      "Cloud migrations",
      "AWS · Azure · GCP",
      "Kubernetes & containers",
      "Infrastructure as Code",
      "FinOps & cost control",
    ],
    stat: { value: "−38%", label: "average cloud bill after FinOps" },
    intro:
      "Your cloud practice: architects and platform engineers who migrate the workloads, build the pipelines and keep the bill honest.",
    points: [
      {
        title: "Assess & plan",
        body: "Every workload gets a verdict — rehost, replatform or retire — and a landing zone with accounts, networking and guardrails ready first.",
      },
      {
        title: "Migrate & modernize",
        body: "Lift-and-shift where it makes sense, containers where they pay off: staged cutovers with rollback plans, never big-bang weekends.",
      },
      {
        title: "Operate & optimize",
        body: "GitOps pipelines, golden paths for your developers, observability wired in — and a monthly FinOps pass that pays for itself.",
      },
    ],
    deliverables: [
      "Landing zones",
      "Cloud migrations",
      "Kubernetes platforms",
      "CI/CD pipelines",
      "Observability",
      "FinOps reviews",
    ],
    stack: "AWS · Azure · GCP · Terraform · ArgoCD · Prometheus / Grafana",
    metaDescription:
      "Cloud and DevOps by Techless: cloud migrations to AWS, Azure and GCP, Kubernetes platforms, infrastructure as code, CI/CD pipelines, observability and FinOps cost control.",
  },
  {
    slug: "cybersecurity",
    num: "04",
    eyebrow: "Service 04 — Protect",
    name: "Cybersecurity",
    titleLines: ["Cybersecurity"],
    hue: "#36d2e6",
    tagline: "We find the holes before someone else does.",
    shortBody:
      "A security operations team on your side: hardening, 24/7 detection and response, and the paperwork auditors actually accept.",
    list: [
      "24/7 SOC & MDR",
      "Penetration testing",
      "Zero-trust & identity security",
      "ISO 27001 / SOC 2 readiness",
      "Incident response",
    ],
    stat: { value: "<10 min", label: "mean time to respond" },
    intro:
      "Your security department: analysts watching the estate around the clock, pentesters attacking it on schedule, advisors keeping auditors happy.",
    points: [
      {
        title: "Harden the estate",
        body: "Baseline audit, then the fixes that matter: MFA everywhere, least privilege, segmented networks, encrypted backups, patched edges.",
      },
      {
        title: "Detect & respond",
        body: "Endpoints and logs stream into our SOC: 24/7 triage, threat hunting and a rehearsed incident response plan for when minutes count.",
      },
      {
        title: "Prove it",
        body: "Scheduled pentests, phishing drills and audit-ready evidence for ISO 27001, SOC 2 and GDPR — compliance as a byproduct, not a scramble.",
      },
    ],
    deliverables: [
      "SOC monitoring",
      "Pentest reports",
      "Incident response",
      "Zero-trust rollout",
      "Compliance packs",
      "Security training",
    ],
    stack: "CrowdStrike · Wazuh · Splunk · Okta · Nessus · Burp Suite",
    metaDescription:
      "Cybersecurity by Techless: 24/7 SOC and MDR, penetration testing, zero-trust and identity security, incident response, and ISO 27001 / SOC 2 compliance readiness.",
  },
];

export function getService(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
