import Link from "next/link";

import { navItems, profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-(--border-soft)">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-md space-y-3">
          <p className="font-display text-xl text-(--text)">{profile.name}</p>
          <p className="text-sm leading-6 text-(--muted)">
            Product and visual design for teams that want clarity, confidence,
            and a premium digital feel.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:min-w-md">
          <nav className="flex flex-wrap gap-4 text-sm text-(--muted)">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-(--text)"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="text-sm text-(--text) transition hover:text-(--accent)"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
