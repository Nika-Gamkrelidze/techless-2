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
            Let’s keep you <em className="grad-text">always on.</em>
          </h2>
          <p className="lead cta-band__lead">
            Four practices, one SLA, zero firefighting. Tell us what you run — we’ll watch it
            like it’s ours.
          </p>
          <div className="cta-band__actions">
            <Magnetic>
              <a className="btn btn--primary" href={`mailto:${SITE.email}`}>
                Book a free assessment
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
