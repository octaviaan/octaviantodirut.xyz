"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { UiButton } from "@/components/ui-button";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const headerNavItems = navItems.filter((item) => item.href !== "/contact");

  return (
    <header className="header-glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="flex h-9 w-9 items-center justify-center border border-(--border-strong) bg-(--surface-strong)">
            <span className="font-display text-sm leading-none text-(--text)">
              OT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 p-1 md:flex">
          {headerNavItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-4 py-2 text-md transition-colors",
                  active
                    ? "bg-(--surface-strong) text-(--text)"
                    : "text-(--muted) hover:text-(--text)",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <UiButton href="/contact" variant="secondary" size="sm">
            Let&apos;s talk
          </UiButton>
        </div>
      </div>
    </header>
  );
}
