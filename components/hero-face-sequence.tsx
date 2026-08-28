"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const centerFrame = {
  src: "/images/hero-face-sequence/face-center.png",
  alt: "Octavian Todirut portrait looking forward",
};

const directionFrames = [
  { src: "/images/hero-face-sequence/face-right.png", angle: 0 },
  { src: "/images/hero-face-sequence/face-down-right.png", angle: 45 },
  { src: "/images/hero-face-sequence/face-down.png", angle: 90 },
  { src: "/images/hero-face-sequence/face-down-left.png", angle: 135 },
  { src: "/images/hero-face-sequence/face-left.png", angle: 180 },
  { src: "/images/hero-face-sequence/face-up-left.png", angle: -150 },
  { src: "/images/hero-face-sequence/face-far-up-left.png", angle: -120 },
  { src: "/images/hero-face-sequence/face-up.png", angle: -90 },
  { src: "/images/hero-face-sequence/face-up-right.png", angle: -45 },
];

const frames = [
  centerFrame,
  ...directionFrames.map(({ src }) => ({ src, alt: "" })),
];

function angularDistance(a: number, b: number) {
  return Math.abs(((a - b + 540) % 360) - 180);
}

function getFrameIndex(pointerX: number, pointerY: number, rect: DOMRect) {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height * 0.42;
  const dx = (pointerX - centerX) / rect.width;
  const dy = (pointerY - centerY) / rect.height;
  const distance = Math.hypot(dx, dy);

  if (distance < 0.12) {
    return 0;
  }

  const pointerAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
  const nearest = directionFrames.reduce(
    (best, frame, index) => {
      const distanceToFrame = angularDistance(pointerAngle, frame.angle);

      if (distanceToFrame < best.distance) {
        return { index, distance: distanceToFrame };
      }

      return best;
    },
    { index: 0, distance: Infinity },
  );

  return nearest.index + 1;
}

export function HeroFaceSequence() {
  const frameRef = useRef<HTMLDivElement>(null);
  const activeFrameRef = useRef(0);
  const [activeFrame, setActiveFrame] = useState(0);

  const updateFrameFromPoint = (pointerX: number, pointerY: number) => {
    if (!frameRef.current) {
      return;
    }

    const nextFrame = getFrameIndex(
      pointerX,
      pointerY,
      frameRef.current.getBoundingClientRect(),
    );

    if (nextFrame === activeFrameRef.current) {
      return;
    }

    activeFrameRef.current = nextFrame;
    setActiveFrame(nextFrame);
  };

  useEffect(() => {
    const updateFrame = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      updateFrameFromPoint(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", updateFrame, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateFrame);
    };
  }, []);

  return (
    <div className="hero-face-wrap">
      <div
        className="hero-face"
        ref={frameRef}
        aria-hidden="true"
        onPointerDown={(event) => {
          if (event.pointerType !== "touch") {
            return;
          }

          event.currentTarget.setPointerCapture(event.pointerId);
          updateFrameFromPoint(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => {
          if (event.pointerType !== "touch") {
            return;
          }

          updateFrameFromPoint(event.clientX, event.clientY);
        }}
      >
        {frames.map((frame, index) => (
          <Image
            key={frame.src}
            src={frame.src}
            alt={index === 0 ? frame.alt : ""}
            fill
            priority
            sizes="(min-width: 1180px) 38vw, (min-width: 760px) 42vw, 78vw"
            className="hero-face-frame"
            data-active={activeFrame === index}
          />
        ))}
      </div>
    </div>
  );
}
