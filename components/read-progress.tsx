"use client";

import { useEffect } from "react";

export function ReadProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>("[data-progress]");
    if (!bar) return;

    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
      bar!.style.transform = `scaleX(${p})`;
    }

    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-track">
      <span className="progress-bar" data-progress />
    </div>
  );
}
