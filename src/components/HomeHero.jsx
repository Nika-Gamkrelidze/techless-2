"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, STATS } from "@/data/site";
import { SERVICES } from "@/data/services";
import DotField from "@/components/fx/DotField";
import Magnetic from "@/components/fx/Magnetic";
import Counter from "@/components/fx/Counter";
import Marquee from "@/components/fx/Marquee";

const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// masked line reveal for the headline
const line = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const STACK_MARQUEE = [
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "PostgreSQL",
  "AWS",
  "Swift",
  "Kotlin",
  "React Native",
  "Flutter",
  "Firebase",
  "KiCad",
  "Altium",
  "C/C++",
  "Rust",
  "ESP32",
  "Twilio",
  "Genesys",
  "HubSpot",
  "Salesforce",
];

export default function HomeHero() {
  return (
    <section className="hero blueprint" id="reception">
      <DotField />
      <motion.div
        className="container hero__layout"
        variants={parent}
        initial="hidden"
        animate="show"
      >
        <div className="hero__copy">
          <motion.p variants={item} className="eyebrow">
            {SITE.descriptor}
          </motion.p>
          <h1 className="display hero__title">
            <span className="h-mask">
              <motion.span variants={line} className="h-line">
                We handle the tech.
              </motion.span>
            </span>
            <span className="h-mask">
              <motion.span variants={line} className="h-line">
                You feel <em className="grad-text">none of it.</em>
              </motion.span>
            </span>
          </h1>
          <motion.p variants={item} className="lead hero__lead">
            Choose us and you never hire a tech employee again — our four departments become
            yours: they build, ship and support your product end to end.
          </motion.p>
          <motion.div variants={item} className="hero__ctas">
            <Magnetic>
              <Link href="/contact/" className="btn btn--primary">
                Start a project
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/services/" className="btn btn--ghost">
                Meet the departments
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.aside variants={item} className="elevator" aria-label="Department directory">
          <p className="elevator__title">Floor directory</p>
          <div className="elevator__list">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="elevator__btn"
                style={{ "--hue": s.hue }}
              >
                <span className="elevator__num">{s.num}</span>
                <span className="elevator__txt">
                  <span className="elevator__name">{s.name}</span>
                  <span className="elevator__tag">{s.tagline}</span>
                </span>
                <span className="elevator__arrow" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
          <p className="elevator__caption">Take the elevator — pick a department.</p>
        </motion.aside>

        <motion.ul variants={item} className="hero__stats">
          {STATS.map((st) => (
            <li key={st.label} className="stat">
              <Counter value={st.value} className="stat__value" />
              <span className="stat__label">{st.label}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
      <Marquee items={STACK_MARQUEE} />
    </section>
  );
}
