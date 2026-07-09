import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyArt } from "@/components/case-study-art";
import { CaseStudyMedia } from "@/components/case-study-media";
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
    <article className="section wrap wide case-detail">
      <FadeIn className="case-detail-hero">
        <div className="case-detail-copy">
          <Link href="/#work" className="link-arrow">
            <span className="arr">←</span> Case Studies
          </Link>

          <div className="case-detail-title">
            <div className="cl-meta">
              <span>{study.year}</span>
              <span>{study.tags.join(" / ")}</span>
            </div>
            <h1 className="display balance">{study.title}</h1>
            <p className="lede">{study.description}</p>
          </div>

          {study.links?.length ? (
            <div className="case-detail-actions">
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
            <div className="case-detail-actions">
              <UiButton href={study.href} target="_blank" variant="primary">
                Visit live project
              </UiButton>
            </div>
          ) : null}
        </div>

        <CaseStudyArt study={study} className="case-detail-art" />
      </FadeIn>

      <FadeIn delay={0.04}>
        <section className="case-impact">
          <p className="eyebrow">Impact</p>
          <div className="case-impact-grid">
            {study.metrics.map((metric) => (
              <div key={metric.label} className="case-metric">
                <p className="case-metric-label">{metric.label}</p>
                <p className="case-metric-value">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <div className="case-sections">
        <FadeIn>
          <section className="case-text-section">
            <div>
              <p className="eyebrow">Challenge</p>
              <h2 className="h2">Problem</h2>
            </div>
            <p className="lede">{study.challenge}</p>
          </section>
        </FadeIn>

        <section className="case-process">
          <FadeIn className="case-process-head">
            <p className="eyebrow">Approach</p>
            <h2 className="h2">Process</h2>
          </FadeIn>

          {study.process.map((step, index) => (
            <FadeIn
              key={`${step.title ?? "step"}-${index}`}
              delay={0.04}
              className="case-process-step"
            >
              <div className="case-step-copy">
                <span className="cs-num">Step 0{index + 1}</span>
                {step.title ? <h3 className="h3">{step.title}</h3> : null}
                <p className="body">{step.description}</p>
              </div>
              {step.media?.length ? (
                <div className="case-step-media">
                  {step.media.map((media) => (
                    <CaseStudyMedia
                      key={`${media.src}-${media.caption ?? "media"}`}
                      media={media}
                    />
                  ))}
                </div>
              ) : null}
            </FadeIn>
          ))}
        </section>

        <FadeIn>
          <section className="case-text-section">
            <div>
              <p className="eyebrow">Impact</p>
              <h2 className="h2">Outcome</h2>
            </div>
            <p className="lede">{study.outcome}</p>
          </section>
        </FadeIn>
      </div>
    </article>
  );
}
