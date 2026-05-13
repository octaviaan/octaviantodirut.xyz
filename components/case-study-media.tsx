import Image from "next/image";

import type { CaseStudyMedia as CaseStudyMediaItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type CaseStudyMediaProps = {
  media: CaseStudyMediaItem;
  className?: string;
};

const aspectRatioClassName = {
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function CaseStudyMedia({ media, className }: CaseStudyMediaProps) {
  const aspectClassName =
    media.type === "video"
      ? "aspect-video"
      : aspectRatioClassName[media.aspectRatio ?? "landscape"];

  return (
    <figure className={cn("space-y-3", className)}>
      <div
        className={cn(
          "media-frame relative overflow-hidden rounded-md",
          aspectClassName,
        )}
      >
        {media.type === "image" ? (
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            fill
            sizes="(min-width: 1280px) 46vw, (min-width: 768px) 80vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={media.poster}
          >
            <source src={media.src} />
          </video>
        )}
      </div>

      {media.caption ? (
        <figcaption className="text-sm leading-7 text-(--muted)">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
