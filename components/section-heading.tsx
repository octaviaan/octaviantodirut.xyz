import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-medium uppercase text-(--accent)">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl text-(--text) sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-2xl text-base leading-7 text-(--muted) sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
