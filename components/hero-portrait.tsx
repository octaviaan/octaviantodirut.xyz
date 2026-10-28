"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createHalftoneRenderer } from "@/lib/halftone/halftone";
import { portraitSettings } from "@/lib/halftone/portrait-settings";

const DURATION_MS = 1400;

export function HeroPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (!canvas || !button) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const render = createHalftoneRenderer();
    const source = document.createElement("canvas");
    source.width = 400;
    source.height = 500;
    const image = new window.Image();
    let disposed = false;
    let loaded = false;
    let visible = true;
    let hovered = false;
    let focused = false;
    let held = false;
    let progress = 0;
    let target = 0;
    let frame = 0;
    let previousTime = 0;

    const draw = () => {
      render(
        canvas,
        source,
        400,
        500,
        {
          ...portraitSettings,
          mixRatio: progress * 100,
        },
        Math.min(window.devicePixelRatio || 1, 2),
      );
    };

    const tick = (time: number) => {
      frame = 0;
      const step = Math.min(time - previousTime, 50) / DURATION_MS;
      previousTime = time;
      progress =
        target > progress
          ? Math.min(target, progress + step)
          : Math.max(target, progress - step);
      draw();
      if (progress !== target) frame = requestAnimationFrame(tick);
    };

    const update = () => {
      target = reducedMotion.matches ? 0 : Number(hovered || focused || held);
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (!loaded || !visible || document.hidden) return;
      if (reducedMotion.matches) {
        progress = 0;
        draw();
      } else if (progress !== target) {
        previousTime = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    const enter = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      hovered = true;
      update();
    };
    const leave = () => {
      hovered = false;
      update();
    };
    const focus = () => {
      focused = button.matches(":focus-visible");
      update();
    };
    const blur = () => {
      focused = false;
      held = false;
      update();
    };
    const down = (event: PointerEvent) => {
      if (event.pointerType !== "touch") return;
      button.setPointerCapture(event.pointerId);
      held = true;
      update();
    };
    const release = () => {
      held = false;
      update();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(button);
    button.addEventListener("pointerenter", enter);
    button.addEventListener("pointerleave", leave);
    button.addEventListener("pointerdown", down);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
    button.addEventListener("focus", focus);
    button.addEventListener("blur", blur);
    reducedMotion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);

    image.onload = () => {
      if (disposed) return;
      const context = source.getContext("2d");
      if (!context) return;
      context.drawImage(image, 0, 0, 400, 500);
      // The available portrait has a grayscale face. Recreate the warm ink
      // separation visible in the GIF while keeping its lavender shirt.
      const pixels = context.getImageData(0, 0, 400, 500);
      for (let i = 0; i < pixels.data.length; i += 4) {
        const r = pixels.data[i],
          g = pixels.data[i + 1],
          b = pixels.data[i + 2];
        if (
          Math.max(r, g, b) < 245 &&
          Math.max(r, g, b) - Math.min(r, g, b) < 12
        ) {
          pixels.data[i] = Math.min(255, r * 1.21);
          pixels.data[i + 1] = Math.min(255, g * 1.03);
          pixels.data[i + 2] = b * 0.3;
        }
      }
      context.putImageData(pixels, 0, 0);
      loaded = true;
      draw();
      setReady(true);
      update();
    };
    image.src = "/images/hero-face-sequence/face-center.jpg";

    return () => {
      disposed = true;
      image.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      button.removeEventListener("pointerenter", enter);
      button.removeEventListener("pointerleave", leave);
      button.removeEventListener("pointerdown", down);
      button.removeEventListener("pointerup", release);
      button.removeEventListener("pointercancel", release);
      button.removeEventListener("lostpointercapture", release);
      button.removeEventListener("focus", focus);
      button.removeEventListener("blur", blur);
      reducedMotion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div className="hero-face-wrap">
      <button
        ref={buttonRef}
        type="button"
        className="hero-face hero-face-interactive"
        aria-label="Animate portrait of Octavian Todirut. Hover, focus, or touch and hold."
      >
        <span className="hero-portrait hero-portrait-stage">
          <Image
            src="/images/hero-halftone-rest.webp"
            alt=""
            width={400}
            height={500}
            priority
            className="hero-portrait-fallback"
          />
          <canvas
            ref={canvasRef}
            width={400}
            height={500}
            aria-hidden="true"
            className="hero-portrait-canvas"
            style={{ opacity: ready ? 1 : 0 }}
          />
        </span>
      </button>
    </div>
  );
}
