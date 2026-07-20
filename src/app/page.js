import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import CtaBand from "@/components/CtaBand";
import ElevatorSpine from "@/components/ElevatorSpine";
import Counter from "@/components/fx/Counter";
import { SITE, STATS } from "@/data/site";
import { SERVICES } from "@/data/services";
import { pageMeta } from "@/lib/meta";

const SPINE_STOPS = [
  { id: "reception", label: "G — Reception" },
  { id: "lobby", label: "Lobby" },
  { id: "directory", label: "The directory" },
  { id: "process", label: "How it works" },
  { id: "end", label: "End of the hall" },
];

export const metadata = pageMeta({
  description: SITE.description,
  path: "/",
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  slogan: SITE.tagline,
};

const steps = [
  {
    title: "Tell us what you run",
    body: "We audit the estate — every server, link, account and cloud bill — and hand you a map of what's solid, what's fragile and what it costs.",
  },
  {
    title: "We stabilize and standardize",
    body: "Monitoring and tested backups go under everything first, then automation replaces tribal knowledge — playbooks, golden images, guardrails.",
  },
  {
    title: "We run it around the clock",
    body: "NOC and SOC watching 24/7, a service desk on real SLAs, quarterly reviews — you feel none of it, which is the whole point.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <HomeHero />
      <ElevatorSpine stops={SPINE_STOPS} />

      {/* Welcome / reception — copy from the 3D lobby intro */}
      <section className="section" id="lobby">
        <div className="container welcome__grid">
          <Reveal>
            <p className="eyebrow">Welcome to Techless</p>
            <h2 className="display welcome__title">Your IT department.</h2>
            <p className="welcome__tagline">All of the infrastructure, none of the headcount.</p>
            <p className="lead welcome__body">
              We are a managed IT and infrastructure partner. Choose us and you never build an
              ops team again — our four departments become yours: they connect, operate, scale
              and protect your business end to end.
            </p>
            <ul className="ticks welcome__ticks">
              <li>Network · Systems · Cloud · Security</li>
              <li>One partner, one SLA, zero firefighting</li>
              <li>Four departments under one roof</li>
            </ul>
          </Reveal>
          <Reveal delay={0.12} className="welcome__statcard blueprint">
            <Counter value={STATS[0].value} className="welcome__statvalue grad-text" />
            <span className="welcome__statlabel">{STATS[0].label}</span>
          </Reveal>
        </div>
      </section>

      {/* The directory — four department cards */}
      <section className="section section--flush-top" id="directory">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The directory</p>
            <h2 className="display">Four departments. One SLA.</h2>
            <p className="lead">
              Every room is a complete team you can walk into today — pick one, or take the
              whole floor.
            </p>
          </Reveal>
          <div className="directory__grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.1}>
                <RoomCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How an engagement runs */}
      <section className="section section--flush-top" id="process">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 className="display">From first audit to always on.</h2>
          </Reveal>
          <div className="steps__grid">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} className="step">
                <span className="step__num">{i + 1}</span>
                <h3 className="display step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="steps__cta">
            <Link href="/services/" className="btn btn--ghost">
              Explore all services
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand id="end" />
    </>
  );
}
