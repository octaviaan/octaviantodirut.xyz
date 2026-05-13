import Image from "next/image";

import { HeroArt } from "@/components/hero-art";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

type CaseStudyArtProps = {
  study: CaseStudy;
  compact?: boolean;
  sizes?: string;
  className?: string;
};

export function CaseStudyArt({
  study,
  compact = false,
  sizes,
  className,
}: CaseStudyArtProps) {
  if (!study.heroImageSrc) {
    return (
      <HeroArt
        label={study.heroLabel}
        compact={compact}
        className={className}
      />
    );
  }

  return (
    <div
      className={cn(
        "media-frame relative overflow-hidden rounded-lg",
        compact ? "aspect-[1.56/1] min-h-0 w-full" : "min-h-[280px] sm:min-h-[360px]",
        className,
      )}
    >
      <Image
        src={study.heroImageSrc}
        alt={study.heroImageAlt ?? study.title}
        fill
        priority={study.featured}
        sizes={
          sizes ??
          (compact
            ? "(min-width: 1280px) 370px, (min-width: 1024px) 28vw, (min-width: 640px) calc(100vw - 96px), calc(100vw - 72px)"
            : "(min-width: 1280px) 1184px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)")
        }
        className="object-cover object-center"
      />
    </div>
  );
}
