import type { Metadata } from "next";

import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for design work and collaboration.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-10 sm:space-y-16">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Open for product design, visual systems, and selected collaborations."
          description="If you are building something ambitious and need clarity at the product or visual layer, send a note."
        />
      </FadeIn>

      <FadeIn delay={0.06}>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel rounded-lg p-6 sm:p-8">
            <p className="font-display text-3xl text-(--text) sm:text-4xl">
              Let&apos;s make the work feel sharper.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-(--muted) sm:text-lg">
              Available for end-to-end product design, visual direction, design systems, and design-led prototyping.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="panel rounded-md p-5 transition hover:border-(--accent) hover:bg-(--surface-chip)"
            >
              <p className="text-xs uppercase text-(--muted)">Email</p>
              <p className="mt-3 font-display text-2xl text-(--text)">{profile.email}</p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="panel rounded-md p-5 transition hover:border-(--accent) hover:bg-(--surface-chip)"
            >
              <p className="text-xs uppercase text-(--muted)">LinkedIn</p>
              <p className="mt-3 font-display text-2xl text-(--text)">linkedin.com/in/octaviantodirut</p>
            </a>

            <div className="panel-muted rounded-md p-5">
              <p className="text-xs uppercase text-(--muted)">Message</p>
              <p className="mt-3 text-sm leading-7 text-(--muted)">
                Short briefs, early product questions, or collaborative opportunities are all welcome.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
