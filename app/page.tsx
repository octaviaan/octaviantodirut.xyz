import Link from "next/link";

import { CaseStudyArt } from "@/components/case-study-art";
import { ExperimentPreview } from "@/components/experiment-preview";
import { FadeIn } from "@/components/fade-in";
import { HoverPanel } from "@/components/hover-panel";
import { SectionHeading } from "@/components/section-heading";
import { UiButton } from "@/components/ui-button";
import { caseStudies, experiments, profile } from "@/lib/content";

const featuredStudies = caseStudies.filter((study) => study.featured);
const featuredExperiments = experiments.slice(0, 2);
const featuredHeroStudy = featuredStudies[0];

export default function HomePage() {
  return (
    <div className="space-y-24 pb-10 sm:space-y-28">
      <section className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <FadeIn className="space-y-8">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase text-(--accent)">
              Product & Visual Designer
            </p>
            <h1 className="font-display max-w-4xl text-3xl leading-[0.94] text-(--text) sm:text-3xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-balance text-lg leading-8 text-(--muted) sm:text-xl">
              {profile.tagline}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Focus", value: "Product clarity" },
              { label: "Work style", value: "Systems + storytelling" },
              { label: "Based in", value: "Remote / Europe" },
            ].map((item) => (
              <div key={item.label} className="panel rounded-md p-5">
                <p className="text-xs uppercase text-(--muted)">{item.label}</p>
                <p className="mt-3 font-display text-xl text-(--text)">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <UiButton href="/case-studies" variant="primary">
              View case studies
            </UiButton>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Link href={`/case-studies/${featuredHeroStudy.slug}`}>
            <HoverPanel className="group panel rounded-lg p-4 sm:p-5">
              <CaseStudyArt
                study={featuredHeroStudy}
                sizes="(min-width: 1024px) 704px, (min-width: 640px) calc(100vw - 88px), calc(100vw - 64px)"
                className="aspect-[1.56/1] min-h-0 w-full max-w-[44rem] border-none p-0 shadow-none sm:mx-auto"
              />

              <div className="space-y-4 px-1 pt-5">
                <div>
                  <h2 className="font-display text-3xl text-(--text) sm:text-4xl">
                    {featuredHeroStudy.title}
                  </h2>
                </div>

                <p className="max-w-xl text-sm leading-7 text-(--muted) sm:text-base">
                  {featuredHeroStudy.description}
                </p>
              </div>
            </HoverPanel>
          </Link>
        </FadeIn>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Selected Work"
            title="Case studies built to show the thinking, not just the finish."
            description="A focused set of product and visual design projects with concise context, process, and business impact."
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={0.06 * index}>
              <HoverPanel className="group panel relative h-full rounded-lg p-5 sm:p-6">
                <Link
                  href={`/case-studies/${study.slug}`}
                  aria-label={`Open case study: ${study.title}`}
                  className="absolute inset-0 z-10 rounded-lg"
                />
                <div className="mb-6">
                  <CaseStudyArt
                    study={study}
                    compact
                    className="min-h-full shadow-none"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl text-(--text)">
                      {study.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-(--muted)">
                    {study.description}
                  </p>

                  <div className="relative z-20 pt-2">
                    <UiButton
                      href={`/case-studies/${study.slug}`}
                      variant="secondary"
                      size="sm"
                    >
                      Explore
                    </UiButton>
                  </div>
                </div>
              </HoverPanel>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <FadeIn>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Experiments"
              title="A couple of experiments worth opening."
              description="Selected generators and image tools pulled from the public experiment archive."
            />

            <UiButton href="/experiments" variant="secondary" className="w-fit">
              View all Experiments
            </UiButton>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredExperiments.map((experiment, index) => (
            <FadeIn key={experiment.slug} delay={0.05 * index} className="h-full">
              <HoverPanel className="panel group flex h-full flex-col rounded-lg p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase text-(--muted)">{experiment.format}</p>
                  <p className="text-xs uppercase text-(--muted)">{experiment.year}</p>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="font-display text-3xl text-(--text)">{experiment.title}</h3>
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
      </section>

    </div>
  );
}
