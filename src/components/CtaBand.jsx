import Link from "next/link";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/fx/Magnetic";
import { SITE } from "@/data/site";

// Closing call-to-action panel, shared by most pages. Copy ported from the
// 3D site's outro ("End of the hall").
export default function CtaBand({ id }) {
  return (
    <section className="section" id={id}>
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
            <Magnetic>
              <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
                Start a project
              </a>
            </Magnetic>
            <Magnetic>
              <Link className="btn btn--ghost" href="/contact/">
                Contact details
              </Link>
            </Magnetic>
          </div>
          <p className="cta-band__email">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
