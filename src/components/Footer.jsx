import Link from "next/link";
import { NAV, SITE } from "@/data/site";
import { SERVICES } from "@/data/services";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand-col">
            <p className="site-footer__brand">
              Techless<span className="site-footer__dot">.</span>
            </p>
            <p className="site-footer__blurb">
              {SITE.tagline} Network, systems, cloud and security teams that run your IT end to
              end — one partner, one SLA.
            </p>
            <a className="site-footer__email" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Services">
            <p className="site-footer__h">The directory</p>
            <ul className="site-footer__links">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`}>
                    <span className="site-footer__num">{s.num}</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site">
            <p className="site-footer__h">Site</p>
            <ul className="site-footer__links">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact/">Book a free assessment</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Techless</span>
          <span>{SITE.descriptor}</span>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </div>
      </div>
    </footer>
  );
}
