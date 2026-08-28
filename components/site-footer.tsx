import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="inner">
        <div className="stack-sm" style={{ maxWidth: "34ch" }}>
          <Link className="brand" href="/" aria-label="Octavian home">
            <span className="ot-mark">O</span>
            <span className="who">Octavian</span>
          </Link>
        </div>

        <div className="stack" style={{ textAlign: "right" }}>
          <nav className="fnav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a
              className="nav-external"
              href="https://www.figma.com/proto/SQmTkWyYG5RaxF1FQ2Tw63/octa-graphic-portfolio?node-id=4012-2741&viewport=119%2C196%2C0.35&t=jvqUS1TZTpb6Wewq-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4012%3A2741&page-id=0%3A1"
              target="_blank"
              rel="noopener"
            >
              Graphic design portfolio
              <ExternalLink aria-hidden="true" size={14} strokeWidth={1.8} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
