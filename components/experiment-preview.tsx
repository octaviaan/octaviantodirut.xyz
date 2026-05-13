import Image from "next/image";

import { ChladniCanvas } from "@/components/chladni-canvas";
import { HeroArt } from "@/components/hero-art";
import type { ExperimentItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type ExperimentPreviewProps = {
  experiment: ExperimentItem;
  variant?: "card" | "hero";
  className?: string;
};

export function ExperimentPreview({
  experiment,
  variant = "card",
  className,
}: ExperimentPreviewProps) {
  if (experiment.previewImageSrc) {
    return (
      <div
        className={cn(
          "media-frame relative overflow-hidden rounded-lg",
          variant === "hero" ? "h-[22rem] sm:h-[28rem]" : "h-44",
          className,
        )}
      >
        <Image
          src={experiment.previewImageSrc}
          alt={experiment.previewImageAlt ?? experiment.title}
          fill
          priority={variant === "hero"}
          sizes={variant === "hero" ? "100vw" : "(min-width: 1024px) 40vw, 100vw"}
          className="object-cover object-center"
        />
      </div>
    );
  }

  if (experiment.slug === "chladni-particles") {
    return (
      <ChladniCanvas
        variant={variant === "hero" ? "hero" : "card"}
        className={cn(variant === "hero" ? "h-[22rem] sm:h-[28rem]" : "h-44", className)}
      />
    );
  }

  return (
    <HeroArt
      label={experiment.heroLabel}
      compact={variant === "card"}
      className={cn("border-(--border-soft) bg-(--surface-inset-strong) p-4 shadow-none", className)}
    />
  );
}
