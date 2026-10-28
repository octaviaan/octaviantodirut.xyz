import Image from "next/image";
import { experiments } from "@/lib/content";

const featuredExperiments = experiments.filter(
  ({ slug }) => !["dithering-effect-svg", "ascii-art-gen"].includes(slug),
);

export const metadata = { title: "Generative Design Tools" };

export default function ExperimentsPage() {
  return (
    <section id="experiments" className="section wrap wide section-screen">
      <div className="reveal sec-head row-head">
        <div className="stack-sm">
          <h1 className="h2">
            Asset generation <span className="mark">tools</span>
          </h1>
          <p className="body" style={{ maxWidth: "64ch" }}>
            I am interested in creating visual systems and asset generation
            tools that output consistent images and graphics. It all started
            with me wanting to replicate a certain look and be able to quickly
            generate multiple assets to use.
          </p>
        </div>
      </div>

      <div className="exp-grid exp-grid-three">
        {featuredExperiments.map((experiment, index) => (
          <article
            key={experiment.slug}
            className="reveal exp-card"
            style={{ transitionDelay: `${index * 0.06}s` }}
          >
            <h2 className="h3 serif">
              {experiment.slug === "chladni-particles" ? (
                <>
                  Gitcoin Brand <br />
                  Asset Generator
                </>
              ) : experiment.slug === "disc-graphics" ? (
                <>
                  Disk <br />
                  Graphics
                </>
              ) : experiment.slug === "bezier-swarms" ? (
                <>
                  Bezier <br />
                  Swarms
                </>
              ) : (
                experiment.title
              )}
            </h2>
            <p className="body">
              {experiment.description}
            </p>
            {experiment.previewImageSrc ? (
              <div className="exp-art frame">
                <Image
                  src={experiment.previewImageSrc}
                  alt={experiment.previewImageAlt ?? experiment.title}
                  width={800}
                  height={450}
                />
              </div>
            ) : null}
            <div className="exp-actions">
              <a
                className="btn btn-secondary"
                href={experiment.repo}
                target="_blank"
                rel="noopener"
              >
                Repo
              </a>
              <a
                className="btn btn-primary"
                href={experiment.href}
                target="_blank"
                rel="noopener"
              >
                Try me
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
