import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyArt } from "@/components/case-study-art";
import { CaseStudyMedia } from "@/components/case-study-media";
import { DetailAccordion } from "@/components/detail-accordion";
import { FadeIn } from "@/components/fade-in";
import { UiButton } from "@/components/ui-button";
import { caseStudies } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {
      title: "Case Study",
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="space-y-16 pb-10 sm:space-y-20">
      <FadeIn className="space-y-8">
        <Link href="/case-studies" className="text-sm text-(--muted) transition hover:text-(--text)">
          Back to case studies
        </Link>

        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase text-(--muted)">
            <span>{study.year}</span>
            <span className="h-1 w-1 rounded-full bg-(--border-strong)" />
            <span>{study.tags.join(" / ")}</span>
          </div>
          <h1 className="font-display max-w-5xl text-5xl leading-[0.96] text-(--text) sm:text-6xl lg:text-7xl">
            {study.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-(--muted)">{study.description}</p>
        </div>

        {study.links?.length ? (
          <div className="flex flex-wrap gap-3">
            {study.links.map((link, index) => (
              <UiButton
                key={link.href}
                href={link.href}
                target="_blank"
                variant={index === 0 ? "primary" : "secondary"}
              >
                {link.label}
              </UiButton>
            ))}
          </div>
        ) : study.href ? (
          <div className="flex flex-wrap gap-3">
            <UiButton href={study.href} target="_blank" variant="primary">
              Visit live project
            </UiButton>
          </div>
        ) : null}
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="feature-wash rounded-lg p-5 sm:p-6">
          <CaseStudyArt
            study={study}
            className="border-none bg-(--surface-inset-strong) p-0 shadow-none"
          />
        </div>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn>
          <section className="panel rounded-lg p-6 sm:p-8">
            <p className="text-xs uppercase text-(--accent)">Impact</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="chip rounded-sm p-4">
                  <p className="text-xs uppercase text-(--muted)">{metric.label}</p>
                  <p className="mt-2 font-display text-3xl text-(--text)">{metric.value}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.04}>
          <DetailAccordion
            defaultValue={["problem", "process", "outcome"]}
            items={[
              {
                value: "problem",
                label: "Problem",
                eyebrow: "Challenge",
                content: (
                  <p className="text-base leading-8 text-(--muted) sm:text-lg">{study.challenge}</p>
                ),
              },
              {
                value: "process",
                label: "Process",
                eyebrow: "Approach",
                content: (
                  <div className="grid gap-4">
                    {study.process.map((step, index) => (
                      <div
                        key={`${step.title ?? "step"}-${index}`}
                        className="chip rounded-md p-5"
                      >
                        <p className="text-xs uppercase text-(--muted)">Step 0{index + 1}</p>
                        {step.title ? (
                          <h3 className="mt-3 font-display text-2xl text-(--text)">
                            {step.title}
                          </h3>
                        ) : null}
                        <p className="mt-3 text-sm leading-7 text-(--muted) sm:text-base">
                          {step.description}
                        </p>
                        {step.media?.length ? (
                          <div className="mt-6 grid gap-4 lg:grid-cols-2">
                            {step.media.map((media) => (
                              <CaseStudyMedia
                                key={`${media.src}-${media.caption ?? "media"}`}
                                media={media}
                                className={media.type === "video" ? "lg:col-span-2" : undefined}
                              />
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                value: "outcome",
                label: "Outcome",
                eyebrow: "Impact",
                content: (
                  <p className="text-base leading-8 text-(--muted) sm:text-lg">{study.outcome}</p>
                ),
              },
            ]}
          />
        </FadeIn>
      </div>
    </article>
  );
}
