import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { SITE } from "@/data/site";
import { SERVICES, getService } from "@/data/services";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  return pageMeta({
    title: s.name,
    description: s.metaDescription,
    path: `/services/${s.slug}/`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const s = getService(slug);
  const index = SERVICES.findIndex((x) => x.slug === s.slug);
  const prev = SERVICES[(index + SERVICES.length - 1) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    serviceType: s.name,
    url: `${SITE.url}/services/${s.slug}/`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
    },
  };

  return (
    <article style={{ "--hue": s.hue }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Room hero */}
      <header className="svc-hero blueprint">
        <div className="container">
          <Reveal>
            <p className="svc-hero__crumb">
              <Link href="/services/">The directory</Link>
              <span aria-hidden> / </span>
              Room {s.num}
            </p>
            <p className="eyebrow svc-hero__eyebrow">{s.eyebrow}</p>
            <h1 className="display svc-hero__title">
              {/* one-word titles (Cybersecurity) render as a single line */}
              {s.titleLines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
            <p className="svc-hero__tagline">{s.tagline}</p>
            <div className="svc-hero__meta">
              <span className="svc-hero__stat">
                <span className="svc-hero__stat-value">{s.stat.value}</span>
                <span className="svc-hero__stat-label">{s.stat.label}</span>
              </span>
              <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
                Book a free assessment
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* What the room does */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="lead svc-intro">{s.intro}</p>
          </Reveal>
          <div className="svc-points">
            {s.points.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.1} className="svc-point">
                <span className="svc-point__num">{i + 1}</span>
                <h2 className="display svc-point__title">{point.title}</h2>
                <p className="svc-point__body">{point.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="svc-block">
            <h2 className="display svc-block__h">What you get</h2>
            <ul className="chip-row">
              {s.deliverables.map((d) => (
                <li key={d} className="chip">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="svc-block">
            <h2 className="display svc-block__h">Stack</h2>
            <p className="svc-stack">{s.stack}</p>
          </Reveal>

          {/* Walk to the neighbouring rooms */}
          <Reveal className="svc-nav">
            <Link href={`/services/${prev.slug}/`} className="svc-nav__card" style={{ "--hue": prev.hue }}>
              <span className="svc-nav__dir">← Previous room</span>
              <span className="display svc-nav__name">
                {prev.num} — {prev.name}
              </span>
            </Link>
            <Link href={`/services/${next.slug}/`} className="svc-nav__card svc-nav__card--next" style={{ "--hue": next.hue }}>
              <span className="svc-nav__dir">Next room →</span>
              <span className="display svc-nav__name">
                {next.num} — {next.name}
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </article>
  );
}
