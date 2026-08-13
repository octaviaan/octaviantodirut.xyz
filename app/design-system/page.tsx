import type { Metadata } from "next";

import { ChladniCanvas } from "@/components/chladni-canvas";
import { DetailAccordion } from "@/components/detail-accordion";
import { ExperimentPreview } from "@/components/experiment-preview";
import { FadeIn } from "@/components/fade-in";
import { HeroArt } from "@/components/hero-art";
import { PageTransition } from "@/components/page-transition";
import { HoverPanel } from "@/components/hover-panel";
import { SectionHeading } from "@/components/section-heading";
import { UiButton } from "@/components/ui-button";
import { experiments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Design System",
  description: "A live index of the portfolio's classes and reusable components.",
};

type ShowcaseRowProps = {
  name: string;
  kind: "Primitive" | "Class" | "Component";
  description: string;
  preview: React.ReactNode;
};

function ShowcaseRow({ name, kind, description, preview }: ShowcaseRowProps) {
  return (
    <div className="grid gap-5 rounded-lg border border-(--border-soft) bg-(--surface-soft) p-5 lg:grid-cols-[17rem_1fr] lg:items-start lg:p-6">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">{kind}</p>
        <div className="space-y-2">
          <p className="font-display text-2xl text-(--text)">{name}</p>
          <p className="text-sm leading-7 text-(--muted)">{description}</p>
        </div>
      </div>

      <div className="rounded-md border border-(--border-soft) bg-(--surface-inset) p-4 sm:p-5">
        {preview}
      </div>
    </div>
  );
}

type PrimitiveTileProps = {
  label: string;
  value: string;
  preview: React.ReactNode;
};

function PrimitiveTile({ label, value, preview }: PrimitiveTileProps) {
  return (
    <div className="rounded-md border border-(--border-soft) bg-(--surface-soft) p-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-(--accent)">{label}</p>
        <p className="font-mono text-xs text-(--muted)">{value}</p>
      </div>
      <div className="mt-4">{preview}</div>
    </div>
  );
}

export default function DesignSystemPage() {
  const previewExperiment = experiments[1];

  return (
    <div className="space-y-16 pb-10 sm:space-y-20">
      <FadeIn>
        <SectionHeading
          eyebrow="Design System"
          title="A live inventory of the classes and components used across the portfolio."
          description="Each row shows the actual building block on the right and its name on the left, so the page works as both reference and visual audit."
        />
      </FadeIn>

      <section className="space-y-6">
        <FadeIn delay={0.04}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
              Primitives
            </p>
            <h2 className="font-display text-4xl text-(--text)">Visual foundations</h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn delay={0.06}>
            <ShowcaseRow
              name="Color tokens"
              kind="Primitive"
              description="Core colors used for text, surfaces, borders, and accent moments across the portfolio."
              preview={
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <PrimitiveTile
                    label="Background"
                    value="--background"
                    preview={
                      <div
                        className="h-20 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--background)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Surface"
                    value="--surface"
                    preview={
                      <div
                        className="h-20 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--surface)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Text"
                    value="--text"
                    preview={
                      <div className="rounded-sm border border-(--border-soft) bg-(--surface-inset) p-4 text-xl text-(--text)">
                        Aa
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Muted"
                    value="--muted"
                    preview={
                      <div className="rounded-sm border border-(--border-soft) bg-(--surface-inset) p-4 text-xl text-(--muted)">
                        Aa
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Accent"
                    value="--accent"
                    preview={
                      <div
                        className="h-20 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--accent)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Accent Soft"
                    value="--accent-soft"
                    preview={
                      <div
                        className="h-20 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--accent-soft)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Border"
                    value="--border"
                    preview={
                      <div className="rounded-sm border border-(--border) bg-(--surface-inset) p-4 text-sm text-(--muted)">
                        1px semantic border
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Surface Strong"
                    value="--surface-strong"
                    preview={
                      <div
                        className="h-20 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--surface-strong)" }}
                      />
                    }
                  />
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <ShowcaseRow
              name="Flat surfaces"
              kind="Primitive"
              description="The page uses a quiet paper background, solid surfaces, and primary-color accents without decorative background effects."
              preview={
                <div className="grid gap-4 lg:grid-cols-3">
                  <PrimitiveTile
                    label="Body background"
                    value="--background"
                    preview={
                      <div
                        className="h-28 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--background)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Panel surface"
                    value="--surface"
                    preview={
                      <div
                        className="h-28 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--surface)" }}
                      />
                    }
                  />
                  <PrimitiveTile
                    label="Inset surface"
                    value="--surface-inset"
                    preview={
                      <div
                        className="h-28 rounded-sm border border-(--border-soft)"
                        style={{ background: "var(--surface-inset)" }}
                      />
                    }
                  />
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <ShowcaseRow
              name="Typography"
              kind="Primitive"
              description="The system uses a sans body face for interface copy and a serif display face for headlines and emphasis."
              preview={
                <div className="grid gap-4 lg:grid-cols-2">
                  <PrimitiveTile
                    label="Body font"
                    value="--font-body"
                    preview={
                      <div className="rounded-sm border border-(--border-soft) bg-(--surface-inset) p-4">
                        <p className="text-sm uppercase tracking-[0.18em] text-(--accent)">Geist</p>
                        <p className="mt-3 text-base leading-7 text-(--text)">
                          Interface copy, buttons, labels, and long-form supporting text use the body font stack.
                        </p>
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Display font"
                    value="--font-display"
                    preview={
                      <div className="rounded-sm border border-(--border-soft) bg-(--surface-inset) p-4">
                        <p className="font-display text-4xl leading-none text-(--text)">
                          Junicode
                        </p>
                        <p className="mt-3 text-sm leading-7 text-(--muted)">
                          Used for hero headlines, section titles, and larger editorial moments.
                        </p>
                      </div>
                    }
                  />
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.12}>
            <ShowcaseRow
              name="Borders & radius"
              kind="Primitive"
              description="Corners stay tight and borders are explicit, with no shadow-based elevation."
              preview={
                <div className="grid gap-4 lg:grid-cols-3">
                  <PrimitiveTile
                    label="Radius scale"
                    value="2px / 0.25rem / 0.375rem / 0.5rem"
                    preview={
                      <div className="flex flex-wrap items-end gap-4">
                        <div className="h-12 w-12 rounded-sm border border-(--border-soft) bg-(--surface-chip)" />
                        <div className="h-12 w-16 rounded-md border border-(--border-soft) bg-(--surface-chip)" />
                        <div className="h-12 w-20 rounded-md border border-(--border-soft) bg-(--surface-chip)" />
                        <div className="h-12 w-24 rounded-lg border border-(--border-soft) bg-(--surface-chip)" />
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Elevation"
                    value="--shadow"
                    preview={
                      <div
                        className="rounded-md border border-(--border-soft) bg-(--surface-soft) p-5"
                        style={{ boxShadow: "var(--shadow)" }}
                      >
                        <p className="text-sm text-(--muted)">Flat depth preset</p>
                      </div>
                    }
                  />
                  <PrimitiveTile
                    label="Inset surface"
                    value="--surface-inset"
                    preview={
                      <div className="rounded-md border border-(--border-soft) bg-(--surface-inset) p-5">
                        <p className="text-sm text-(--muted)">Flat supporting surface</p>
                      </div>
                    }
                  />
                </div>
              }
            />
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn delay={0.14}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
              Classes
            </p>
            <h2 className="font-display text-4xl text-(--text)">Global utility classes</h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn delay={0.16}>
            <ShowcaseRow
              name=".panel"
              kind="Class"
              description="Primary flat container used for cards, detail panels, and feature blocks."
              preview={
                <div className="panel rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">Panel</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    Flat surface with a visible border and no shadow.
                  </p>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.18}>
            <ShowcaseRow
              name=".panel-muted"
              kind="Class"
              description="Lower-contrast container used for secondary navigation and supporting blocks."
              preview={
                <div className="panel-muted rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">Muted panel</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    Softer fill and border for quieter interface moments.
                  </p>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <ShowcaseRow
              name=".accent-ring"
              kind="Class"
              description="Accent-led border treatment used to mark focal surfaces."
              preview={
                <div className="panel accent-ring rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">Accent ring</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    Adds restrained geometric emphasis around highlighted elements.
                  </p>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.22}>
            <ShowcaseRow
              name=".font-display"
              kind="Class"
              description="Display serif used for section titles, hero headlines, and large emphasis copy."
              preview={
                <p className="font-display text-4xl leading-none text-(--text) sm:text-5xl">
                  Junicode display styling for headlines
                </p>
              }
            />
          </FadeIn>

          <FadeIn delay={0.24}>
            <ShowcaseRow
              name=".text-balance"
              kind="Class"
              description="Improves wrapping on multi-line copy blocks where balance matters more than strict line fill."
              preview={
                <p className="text-balance max-w-xl text-lg leading-8 text-(--muted)">
                  This line is intentionally long enough to show how balanced wrapping keeps a block of text feeling more composed.
                </p>
              }
            />
          </FadeIn>

          <FadeIn delay={0.26}>
            <ShowcaseRow
              name=".btn-*"
              kind="Class"
              description="Primary and secondary button classes shared by raw links and the UiButton component."
              preview={
                <div className="flex flex-wrap gap-3">
                  <UiButton href="/design-system" variant="primary" size="md">
                    .btn-primary
                  </UiButton>
                  <UiButton href="/design-system" variant="secondary" size="md">
                    .btn-secondary
                  </UiButton>
                  <UiButton href="/design-system" variant="secondary" size="sm">
                    .btn-sm
                  </UiButton>
                </div>
              }
            />
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn delay={0.18}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
              Components
            </p>
            <h2 className="font-display text-4xl text-(--text)">Reusable UI components</h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn delay={0.2}>
            <ShowcaseRow
              name="UiButton"
              kind="Component"
              description="Link-aware button wrapper with primary and secondary variants."
              preview={
                <div className="flex flex-wrap gap-3">
                  <UiButton href="/case-studies" variant="primary">
                    Primary action
                  </UiButton>
                  <UiButton href="/experiments" variant="secondary">
                    Secondary action
                  </UiButton>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.22}>
            <ShowcaseRow
              name="SectionHeading"
              kind="Component"
              description="Standardized page and section intro used across the site."
              preview={
                <SectionHeading
                  eyebrow="Component"
                  title="SectionHeading preview"
                  description="Pairs an eyebrow, a display headline, and optional supporting copy."
                />
              }
            />
          </FadeIn>

          <FadeIn delay={0.24}>
            <ShowcaseRow
              name="HoverPanel"
              kind="Component"
              description="Motion wrapper that adds lift and scale feedback to cards."
              preview={
                <HoverPanel className="panel rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">HoverPanel</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    Hover this card to inspect the motion behavior.
                  </p>
                </HoverPanel>
              }
            />
          </FadeIn>

          <FadeIn delay={0.26}>
            <ShowcaseRow
              name="HeroArt"
              kind="Component"
              description="Generative surface used in hero and case-study previews."
              preview={
                <HeroArt
                  label="HeroArt compresses the visual language of the portfolio into a reusable branded surface."
                  compact
                />
              }
            />
          </FadeIn>

          <FadeIn delay={0.28}>
            <ShowcaseRow
              name="DetailAccordion"
              kind="Component"
              description="Expandable narrative block used on detail pages for challenge, process, and outcome content."
              preview={
                <DetailAccordion
                  defaultValue={["problem"]}
                  items={[
                    {
                      value: "problem",
                      label: "Problem",
                      eyebrow: "Structure",
                      content: (
                        <p className="text-base leading-8 text-(--muted)">
                          Designed for structured long-form content without abandoning the visual tone of the portfolio.
                        </p>
                      ),
                    },
                    {
                      value: "process",
                      label: "Process",
                      eyebrow: "Behavior",
                      content: (
                        <p className="text-base leading-8 text-(--muted)">
                          Keeps narrative sections collapsed by default so dense case-study content remains easier to scan.
                        </p>
                      ),
                    },
                  ]}
                />
              }
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <ShowcaseRow
              name="ExperimentPreview"
              kind="Component"
              description="Adaptive preview shell that renders either a HeroArt block or the Chladni simulation depending on the experiment."
              preview={<ExperimentPreview experiment={previewExperiment} className="h-52" />}
            />
          </FadeIn>

          <FadeIn delay={0.32}>
            <ShowcaseRow
              name="ChladniCanvas"
              kind="Component"
              description="Generative particle field used as the custom live preview for the Chladni experiment."
              preview={<ChladniCanvas className="h-56 rounded-md border border-(--border-soft)" />}
            />
          </FadeIn>

          <FadeIn delay={0.34}>
            <ShowcaseRow
              name="FadeIn"
              kind="Component"
              description="Viewport-triggered reveal wrapper used throughout the site for staggered section entrances."
              preview={
                <FadeIn className="panel rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">FadeIn</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    This preview is wrapped in the same reveal component used on the page itself.
                  </p>
                </FadeIn>
              }
            />
          </FadeIn>
        </div>
      </section>

      <section className="space-y-6">
        <FadeIn delay={0.36}>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-(--accent)">
              App Shell
            </p>
            <h2 className="font-display text-4xl text-(--text)">Layout-level components</h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <FadeIn delay={0.38}>
            <ShowcaseRow
              name="SiteHeader"
              kind="Component"
              description="Global navigation shell that reads from the shared nav items and stays pinned at the top of every page."
              preview={
                <div className="panel rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">Live globally</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    The actual SiteHeader is already mounted above this page as part of the app shell.
                  </p>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <ShowcaseRow
              name="SiteFooter"
              kind="Component"
              description="Global footer that mirrors primary navigation and contact information."
              preview={
                <div className="panel rounded-md p-5">
                  <p className="text-xs uppercase text-(--accent)">Live globally</p>
                  <p className="mt-3 text-sm leading-7 text-(--muted)">
                    The actual SiteFooter is already mounted below this page and updates automatically with shared nav content.
                  </p>
                </div>
              }
            />
          </FadeIn>

          <FadeIn delay={0.42}>
            <ShowcaseRow
              name="PageTransition"
              kind="Component"
              description="Route-level transition wrapper applied by the root layout when pages enter or exit."
              preview={
                <PageTransition>
                  <div className="panel rounded-md p-5">
                    <p className="text-xs uppercase text-(--accent)">PageTransition</p>
                    <p className="mt-3 text-sm leading-7 text-(--muted)">
                      This preview sits inside the same route-transition wrapper used by the app shell.
                    </p>
                  </div>
                </PageTransition>
              }
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
