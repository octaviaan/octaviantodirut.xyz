"use client";

import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type IntroVideoButtonProps = {
  className?: string;
};

const introVideoSrc = "/intro.mp4?v=2026-08-29";

export function IntroVideoButton({ className }: IntroVideoButtonProps) {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isIntroOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsIntroOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isIntroOpen]);

  return (
    <>
      <button
        type="button"
        className={className ?? "btn btn-secondary"}
        onClick={() => setIsIntroOpen(true)}
      >
        <Play aria-hidden="true" size={15} strokeWidth={1.8} />
        Play Intro
      </button>

      {isMounted && isIntroOpen
        ? createPortal(
            <div
              className="intro-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Intro video"
            >
              <button
                type="button"
                className="intro-modal-backdrop"
                aria-label="Close intro video"
                onClick={() => setIsIntroOpen(false)}
              />
              <div className="intro-modal-panel">
                <button
                  type="button"
                  className="intro-modal-close"
                  aria-label="Close intro video"
                  onClick={() => setIsIntroOpen(false)}
                >
                  <X aria-hidden="true" size={18} strokeWidth={1.8} />
                </button>
                <video
                  className="intro-video"
                  src={introVideoSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
