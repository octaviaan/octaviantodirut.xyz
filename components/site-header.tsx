"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const scrollHomeToTop = () => {
    if (pathname !== "/") {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="bar">
        <Link className="brand" href="/" aria-label="Octavian home" onClick={scrollHomeToTop}>
          <span className="ot-mark">O</span>
          <span className="who">Octavian</span>
        </Link>

        <button
          type="button"
          className="nav-menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={18} strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden="true" size={18} strokeWidth={1.8} />
          )}
          Menu
        </button>

        <nav className="site-nav" id="site-navigation" data-open={isMenuOpen}>
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/graphic-design" onClick={closeMenu}
            className={pathname === "/graphic-design" ? "active" : undefined}>
            Graphic design portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
