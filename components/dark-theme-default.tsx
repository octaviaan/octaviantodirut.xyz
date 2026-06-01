"use client";

import { useEffect } from "react";

export function DarkThemeDefault() {
  useEffect(() => {
    const stored = localStorage.getItem("ot-theme");
    if (!stored) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    return () => {
      if (!localStorage.getItem("ot-theme")) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    };
  }, []);

  return null;
}
