import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Book a free assessment with Techless. Tell us what you run — network, systems, cloud or security — and we'll take it from there. Write to hello@techless.io.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero blueprint">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Book a free assessment</p>
            <h1 className="display contact-hero__title">
              Let’s keep you <em className="grad-text">always on.</em>
            </h1>
            <p className="lead">
              Four practices, one SLA, zero firefighting. Tell us what you run — we’ll watch it
              like it’s ours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <p className="eyebrow">Email us</p>
            <h2 className="display contact-card__h">One address. The whole company.</h2>
            <p className="contact-card__body">
              Every engagement starts with a short note. We read everything that lands here and
              route it to the right department.
            </p>
            <a className="btn btn--primary contact-card__btn" href={`mailto:${SITE.email}`}>
              Write to us
            </a>
            <a className="contact-card__email grad-text" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </Reveal>

          <Reveal delay={0.12} className="contact-card">
            <p className="eyebrow">What to tell us</p>
            <h2 className="display contact-card__h">Three lines is enough.</h2>
            <ul className="ticks contact-card__ticks">
              <li>What you run — sites, servers, users, clouds</li>
              <li>Where it hurts — network, systems, cloud, security, or all four</li>
              <li>When you need us — even a rough timeline helps</li>
            </ul>
            <p className="contact-card__body">
              No forms, no qualification calls with three account managers. You write, an
              engineer answers.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
