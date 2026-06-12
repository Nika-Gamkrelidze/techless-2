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
    title: "Tell us what you’re shipping",
    body: "We map your domain, pick the stack and design the system — with a delivery plan built around real dates.",
  },
  {
    title: "We build in weekly increments",
    body: "Senior engineers ship reviewed, tested work every week — design system first, then features behind flags.",
  },
  {
    title: "We launch it and run it",
    body: "Deployment, monitoring, analytics and support — then we keep iterating while you watch the product grow.",
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
            <h2 className="display welcome__title">Your tech department.</h2>
            <p className="welcome__tagline">All of the technology, none of the headcount.</p>
            <p className="lead welcome__body">
              We are an outsourced engineering studio. Choose us and you never hire a tech
              employee again — our four departments become yours: they build, ship and support
              your product end to end.
            </p>
            <ul className="ticks welcome__ticks">
              <li>Web · Mobile · Hardware · Support</li>
              <li>One partner, one invoice, zero hiring</li>
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
            <h2 className="display">Four departments. One invoice.</h2>
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
            <h2 className="display">From first call to running product.</h2>
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
