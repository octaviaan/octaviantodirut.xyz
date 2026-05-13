import { cn } from "@/lib/utils";

type HeroArtProps = {
  label: string;
  className?: string;
  compact?: boolean;
};

export function HeroArt({ label, className, compact = false }: HeroArtProps) {
  return (
    <div
      className={cn(
        "media-frame relative overflow-hidden rounded-lg bg-(--surface-soft) p-6",
        className,
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-(--hero-line)" />

      <div
        className={cn(
          "relative flex flex-col justify-between",
          compact ? "min-h-[200px] sm:min-h-[220px]" : "min-h-[280px] sm:min-h-[360px]",
        )}
      >
        <div className="flex items-start justify-between gap-6">
          <span className="rounded-sm border border-(--border-soft) bg-(--surface-inset) px-3 py-1 text-[11px] uppercase text-(--text-dim)">
            Featured Surface
          </span>
          <span
            className="hidden h-3 w-3 bg-(--accent) sm:block"
          />
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-20 bg-(--hero-line) sm:w-28" />
            <div className="h-px flex-1 bg-(--accent)" />
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <div className="h-3 w-3/4 bg-(--border)" />
              <div className="h-3 w-full bg-(--border-soft)" />
              <div className="h-3 w-4/5 bg-(--border-soft)" />
            </div>

            <div className="rounded-sm border border-(--border-soft) bg-(--surface-inset) p-4">
              <p className="text-sm leading-6 text-(--text-dim)">{label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
