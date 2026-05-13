import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyArt } from "@/components/case-study-art";
import { FadeIn } from "@/components/fade-in";
import { HoverPanel } from "@/components/hover-panel";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "A collection of product and visual design case studies.",
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-10 sm:space-y-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Case Studies"
          title="Clear narratives, real constraints, measurable outcomes."
          description="Each project is structured around the problem, the design process, and the business or user impact that followed."
        />
      </FadeIn>

      <div className="grid gap-6">
        {caseStudies.map((study, index) => (
          <FadeIn key={study.slug} delay={0.05 * index}>
            <Link href={`/case-studies/${study.slug}`}>
              <HoverPanel className="panel grid gap-6 rounded-lg p-5 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <CaseStudyArt
                    study={study}
                    compact
                    className="shadow-none"
                  />
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h2 className="font-display text-3xl text-(--text) sm:text-4xl">
                      {study.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-(--muted)">{study.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="chip rounded-sm p-4">
                        <p className="text-xs uppercase text-(--muted)">{metric.label}</p>
                        <p className="mt-2 font-display text-2xl text-(--text)">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </HoverPanel>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
