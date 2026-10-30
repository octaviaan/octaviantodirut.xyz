"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createHalftoneRenderer } from "@/lib/halftone/halftone";
import { portraitLineColorSettings, portraitLineSettings, portraitSettings } from "@/lib/halftone/portrait-settings";

const DURATION_MS = 600;

export function HeroPortrait({ effect = "lines" }: { effect?: "halftone" | "lines" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const portrait = portraitRef.current;
    if (!canvas || !portrait) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const render = createHalftoneRenderer();
    const source = document.createElement("canvas");
    source.width = 384;
    source.height = 512;
    const image = new window.Image();
    let disposed = false;
    let loaded = false;
    let visible = true;
    let portraitHovered = false;
    let pointerProgress = 0;
    let progress = 0;
    let target = 0;
    let frame = 0;
    let previousTime = 0;
    const actions = Array.from(
      portrait.closest(".hero")?.querySelectorAll<HTMLElement>(".hero-actions .btn") ?? [],
    );
    const hoveredActions = new Set<EventTarget>();
    const focusedActions = new Set<EventTarget>();

    const draw = () => {
      render(
        canvas,
        source,
        384,
        512,
        effect === "lines" ? {
          ...portraitLineSettings,
          minAngle: 0,
          maxAngle: progress * 360,
          mixRatio: progress * 100,
          secondShape: {
            ...portraitLineColorSettings,
            minAngle: 0,
            maxAngle: progress * 360,
          },
        } : {
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
      progress = portraitHovered ? target :
        target > progress
          ? Math.min(target, progress + step)
          : Math.max(target, progress - step);
      draw();
      if (progress !== target) frame = requestAnimationFrame(tick);
    };

    const update = () => {
      const actionActive = hoveredActions.size > 0 || focusedActions.size > 0;
      target = reducedMotion.matches ? 0 : portraitHovered ? pointerProgress : Number(actionActive);
      if (!loaded || !visible || document.hidden || reducedMotion.matches) {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        if (loaded && reducedMotion.matches) {
          progress = 0;
          draw();
        }
        return;
      }
      // Keep the running frame: pointer events must not reset its clock.
      if (progress !== target && !frame) {
        previousTime = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    const portraitMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      portraitHovered = true;
      const bounds = canvas.getBoundingClientRect();
      if (bounds.width <= 0) return;
      pointerProgress = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      update();
    };
    const portraitLeave = () => {
      portraitHovered = false;
      update();
    };
    portrait.addEventListener("pointerenter", portraitMove);
    portrait.addEventListener("pointermove", portraitMove);
    portrait.addEventListener("pointerleave", portraitLeave);

    const actionEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch" || !event.currentTarget) return;
      hoveredActions.add(event.currentTarget);
      update();
    };
    const actionLeave = (event: PointerEvent) => {
      if (event.currentTarget) hoveredActions.delete(event.currentTarget);
      update();
    };
    const actionFocus = (event: FocusEvent) => {
      if (event.currentTarget) {
        focusedActions.add(event.currentTarget);
      }
      update();
    };
    const actionBlur = (event: FocusEvent) => {
      if (event.currentTarget) focusedActions.delete(event.currentTarget);
      update();
    };
    actions.forEach((action) => {
      action.addEventListener("pointerenter", actionEnter);
      action.addEventListener("pointerleave", actionLeave);
      action.addEventListener("focus", actionFocus);
      action.addEventListener("blur", actionBlur);
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(portrait);
    reducedMotion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);

    image.onload = () => {
      if (disposed) return;
      const context = source.getContext("2d");
      if (!context) return;
      context.drawImage(image, 0, 0, 384, 512);
      // The available portrait has a grayscale face. Recreate the warm ink
      // separation visible in the GIF while keeping its lavender shirt.
      const pixels = context.getImageData(0, 0, 384, 512);
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
    image.src = "/images/portrait.jpg";

    return () => {
      disposed = true;
      image.onload = null;
      cancelAnimationFrame(frame);
      observer.disconnect();
      portrait.removeEventListener("pointerenter", portraitMove);
      portrait.removeEventListener("pointermove", portraitMove);
      portrait.removeEventListener("pointerleave", portraitLeave);
      actions.forEach((action) => {
        action.removeEventListener("pointerenter", actionEnter);
        action.removeEventListener("pointerleave", actionLeave);
        action.removeEventListener("focus", actionFocus);
        action.removeEventListener("blur", actionBlur);
      });
      reducedMotion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [effect]);

  return (
    <div className="hero-face-wrap">
      <div
        ref={portraitRef}
        className="hero-face"
        role="img"
        aria-label="Portrait of Octavian Todirut"
      >
        <span className="hero-portrait hero-portrait-stage">
          <Image
            src={effect === "lines" ? "/images/portrait-lines-rest.webp" : "/images/portrait-halftone-rest.webp"}
            alt=""
            width={384}
            height={512}
            priority
            className="hero-portrait-fallback"
          />
          <canvas
            ref={canvasRef}
            width={384}
            height={512}
            aria-hidden="true"
            className="hero-portrait-canvas"
            style={{ opacity: ready ? 1 : 0 }}
          />
        </span>
      </div>
    </div>
  );
}
