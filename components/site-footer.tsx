import Link from "next/link";

import { navItems, profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="stack-sm" style={{ maxWidth: "34ch" }}>
          <p className="serif" style={{ fontSize: "1.4rem" }}>{profile.name}</p>
          <p className="body" style={{ fontSize: ".9rem" }}>
            Senior product design for teams that want clarity, confidence,
            and a premium digital feel.
          </p>
        </div>

        <div className="stack" style={{ textAlign: "right" }}>
          <nav className="fnav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="link-arrow"
            href={`mailto:${profile.email}`}
            style={{ justifyContent: "flex-end" }}
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
