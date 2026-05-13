import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DetailAccordion } from "@/components/detail-accordion";
import { ExperimentPreview } from "@/components/experiment-preview";
import { FadeIn } from "@/components/fade-in";
import { UiButton } from "@/components/ui-button";
import { experiments } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return experiments.map((experiment) => ({
    slug: experiment.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = experiments.find((item) => item.slug === slug);

  if (!experiment) {
    return {
      title: "Experiments",
    };
  }

  return {
    title: experiment.title,
    description: experiment.description,
  };
}

export default async function ExperimentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const experiment = experiments.find((item) => item.slug === slug);

  if (!experiment) {
    notFound();
  }

  return (
    <article className="space-y-16 pb-10 sm:space-y-20">
      <FadeIn className="space-y-8">
        <Link href="/experiments" className="text-sm text-(--muted) transition hover:text-(--text)">
          Back to Experiments
        </Link>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-(--muted)">
            <span>{experiment.year}</span>
            <span className="h-1 w-1 rounded-full bg-(--border-strong)" />
            <span>{experiment.format}</span>
          </div>
          <h1 className="font-display max-w-5xl text-5xl leading-[0.96] text-(--text) sm:text-6xl lg:text-7xl">
            {experiment.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-(--muted)">{experiment.description}</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="feature-wash rounded-lg p-5 sm:p-6">
          <ExperimentPreview
            experiment={experiment}
            variant="hero"
            className="h-88 border-none bg-(--surface-inset-strong) p-0 shadow-none sm:h-112"
          />
        </div>
      </FadeIn>

      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <FadeIn>
          <aside className="panel rounded-lg p-6">
            <p className="text-xs uppercase text-(--accent)">Links</p>
            <div className="mt-6 flex flex-col gap-3">
              <UiButton
                href={experiment.href}
                target="_blank"
                variant="primary"
                className="w-full"
              >
                {experiment.cta}
              </UiButton>
              <UiButton
                href={experiment.repo}
                target="_blank"
                variant="secondary"
                className="w-full"
              >
                View GitHub repo
              </UiButton>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-xs uppercase text-(--accent)">Stack</p>
              <div className="flex flex-wrap gap-2">
                {experiment.stack.map((item) => (
                  <span
                    key={item}
                    className="chip rounded-sm px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={0.04}>
            <DetailAccordion
              defaultValue={["overview"]}
              items={[
                {
                  value: "overview",
                  label: "Overview",
                  eyebrow: "Summary",
                  content: (
                    <p className="text-base leading-8 text-(--muted) sm:text-lg">
                      {experiment.overview}
                    </p>
                  ),
                },
                {
                  value: "details",
                  label: "Details",
                  eyebrow: "Notes",
                  content: (
                    <div className="grid gap-4">
                      {experiment.notes.map((note, index) => (
                        <div
                          key={note}
                          className="chip rounded-md p-5"
                        >
                          <p className="text-xs uppercase text-(--muted)">Note 0{index + 1}</p>
                          <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                            {note}
                          </p>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
