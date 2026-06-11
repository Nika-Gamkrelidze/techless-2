import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Start a project with Techless. Tell us what you're shipping — web, mobile, hardware or support — and we'll handle the rest. Write to hello@techless.studio.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero blueprint">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Start a project</p>
            <h1 className="display contact-hero__title">
              Let’s build <em className="grad-text">something real.</em>
            </h1>
            <p className="lead">
              Four practices, one team, zero friction. Tell us what you’re shipping and we’ll
              handle the rest.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal className="contact-card">
            <p className="eyebrow">Email us</p>
            <h2 className="display contact-card__h">One address. The whole studio.</h2>
            <p className="contact-card__body">
              Every project starts with a short note. We read everything that lands here and
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
              <li>What you’re shipping — the product or the idea</li>
              <li>Where it lives — web, mobile, hardware, support, or all four</li>
              <li>When you need it — even a rough timeline helps</li>
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
