import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

// Closing call-to-action panel, shared by most pages. Copy ported from the
// 3D site's outro ("End of the hall").
export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-band blueprint">
          <p className="eyebrow">End of the hall</p>
          <h2 className="display cta-band__title">
            Let’s build <em className="grad-text">something real.</em>
          </h2>
          <p className="lead cta-band__lead">
            Four practices, one team, zero friction. Tell us what you’re shipping and we’ll
            handle the rest.
          </p>
          <div className="cta-band__actions">
            <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
              Start a project
            </a>
            <Link className="btn btn--ghost" href="/contact/">
              Contact details
            </Link>
          </div>
          <p className="cta-band__email">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
