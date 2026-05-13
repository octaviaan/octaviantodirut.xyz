import type { Metadata } from "next";

import { ExperimentPreview } from "@/components/experiment-preview";
import { FadeIn } from "@/components/fade-in";
import { HoverPanel } from "@/components/hover-panel";
import { SectionHeading } from "@/components/section-heading";
import { UiButton } from "@/components/ui-button";
import { experiments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Live experiments, generative tools, and exploratory builds pulled from GitHub.",
};

export default function ExperimentsPage() {
  return (
    <div className="space-y-16 pb-10 sm:space-y-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Experiments"
          title="Live experiments, generators, and weird little tools worth opening."
          description="A compact archive of public experiments pulled from GitHub, spanning generative visuals, image processing, and lightweight creative tooling."
        />
      </FadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {experiments.map((experiment, index) => (
          <FadeIn
            key={experiment.title}
            delay={0.05 * index}
            className="h-full"
          >
            <HoverPanel className="panel group flex h-full flex-col rounded-lg p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase text-(--muted)">
                  {experiment.format}
                </p>
                <p className="text-xs uppercase text-(--muted)">
                  {experiment.year}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h2 className="font-display text-3xl text-(--text)">
                  {experiment.title}
                </h2>
                <p className="max-w-md text-sm leading-7 text-(--muted)">
                  {experiment.description}
                </p>
              </div>

              <div className="mt-8">
                <ExperimentPreview experiment={experiment} className="h-44" />
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experiment.stack.map((item) => (
                  <span
                    key={item}
                    className="chip rounded-sm px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <UiButton href={`/experiments/${experiment.slug}`} variant="primary" size="sm">
                  View details
                </UiButton>
                <UiButton
                  href={experiment.repo}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                >
                  GitHub repo
                </UiButton>
              </div>
            </HoverPanel>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
