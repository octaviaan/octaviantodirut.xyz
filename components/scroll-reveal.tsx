"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup: Array<() => void> = [];

    const setup = setTimeout(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
      if (!els.length) return;

      function showInView() {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        for (const el of els) {
          if (el.classList.contains("in")) continue;
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
        }
      }

      showInView();
      window.addEventListener("scroll", showInView, { passive: true });
      window.addEventListener("resize", showInView);

      const safety = setTimeout(() => {
        els.forEach((el) => el.classList.add("in"));
      }, 2200);

      cleanup = [
        () => window.removeEventListener("scroll", showInView),
        () => window.removeEventListener("resize", showInView),
        () => clearTimeout(safety),
      ];
    }, 60);

    return () => {
      clearTimeout(setup);
      cleanup.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
