"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="bar">
        <Link className="brand" href="/" aria-label="Octavian Todirut — home">
          <span className="ot-mark">OT</span>
          <span className="who">Octavian&nbsp;Todirut</span>
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
        </nav>

        <div className="header-cta">
          <Link className="btn btn-ghost btn-sm" href="/#contact">
            Let&apos;s&nbsp;talk
          </Link>
        </div>
      </div>
    </header>
  );
}
