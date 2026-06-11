import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/data/services";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Services",
  description:
    "Four departments, one invoice: web development, mobile apps, hardware design and contact-center support — complete teams that build, ship and run your product.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The directory</p>
            <h1 className="display section-head__title">
              Four departments. <em className="grad-text">One invoice.</em>
            </h1>
            <p className="lead">
              Each floor of Techless is a complete team. Walk into the room you need — they
              build, ship and support your product end to end.
            </p>
          </Reveal>

          {/* Lobby directory board */}
          <Reveal className="dir-board blueprint">
            <div className="dir-board__row dir-board__row--ground" aria-hidden>
              <span className="dir-board__num dir-board__num--ground">G</span>
              <span className="dir-board__txt">
                <span className="dir-board__name">Reception</span>
                <span className="dir-board__tag">You are here</span>
              </span>
            </div>
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="dir-board__row"
                style={{ "--hue": s.hue }}
              >
                <span className="dir-board__num">{s.num}</span>
                <span className="dir-board__txt">
                  <span className="dir-board__name">{s.name}</span>
                  <span className="dir-board__tag">{s.tagline}</span>
                </span>
                <span className="dir-board__stat">
                  <span className="dir-board__stat-value">{s.stat.value}</span>
                  <span className="dir-board__stat-label">{s.stat.label}</span>
                </span>
                <span className="dir-board__arrow" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
