"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="bar">
        <Link className="brand" href="/" aria-label="Octavian home">
          <span className="ot-mark">O</span>
          <span className="who">Octavian</span>
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => {
            const active =
              item.href !== "/" &&
              !item.href.includes("#") &&
              pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
    </header>
  );
}
