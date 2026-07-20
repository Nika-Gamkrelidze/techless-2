"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__bar">
          <Link href="/" className="site-header__brand">
            Techless<span className="site-header__dot">.</span>
          </Link>

          <nav className="site-header__nav" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header__link${isActive(item.href) ? " is-active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact/" className="btn btn--primary site-header__cta">
            Book a free assessment
          </Link>

          <button
            type="button"
            className={`site-header__burger${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

        {open && (
          <nav id="site-menu" className="site-header__menu" aria-label="Primary, mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-header__menu-link${isActive(item.href) ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn btn--primary site-header__menu-cta">
              Book a free assessment
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
