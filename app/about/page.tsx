import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Octavian Todirut, a product and visual designer working across product logic, brand systems, motion, and code-adjacent design.",
};

export default function AboutPage() {
  return (
    <article className="section wrap wide about-page">
      <section className="about-page-hero">
        <div className="reveal about-page-copy">
          <Link href="/" className="link-arrow">
            <span className="arr">←</span> Home
          </Link>
          <div className="stack">
            <p className="eyebrow">About me</p>
            <h1 className="display balance">Octavian Todirut</h1>
            <p className="lede">
              I&apos;m a product and visual designer with roots in print,
              advertising, and art direction, now working across product
              interfaces, brand systems, Web3 tools, motion, and code-adjacent
              design.
            </p>
          </div>
        </div>

        <div className="reveal about-page-image" style={{ transitionDelay: ".08s" }}>
          <Image
            src="/images/octavian-profile.jpg"
            alt="Portrait of Octavian Todirut"
            fill
            priority
            sizes="(min-width: 1280px) 460px, (min-width: 768px) 40vw, calc(100vw - 40px)"
          />
        </div>
      </section>

      <section className="about-page-grid">
        <div className="reveal stack">
          <p className="eyebrow">How I work</p>
          <h2 className="h2 balance">
            I care about structure, atmosphere, and whether the thing can
            actually ship.
          </h2>
        </div>
        <div className="reveal about-page-body" style={{ transitionDelay: ".06s" }}>
          <p className="body">
            My strongest work sits where structure and feeling meet: interfaces
            that explain complex ideas, visual identities that can stretch
            across a product, and systems that make teams faster without
            flattening the personality out of the work.
          </p>
          <p className="body">
            I like getting close to the material. Sometimes that means mapping a
            product flow until the logic is obvious. Sometimes it means building
            a visual language around motion, 3D, or generative tools. Sometimes
            it means learning enough of the code path to make better design
            decisions.
          </p>
          <p className="body">
            I&apos;m especially interested in projects where the interface has to
            make something technical feel usable: funding systems, identity,
            governance, tools for creative work, and products that need both
            clarity and character.
          </p>
        </div>
      </section>

      <section className="about-page-facts">
        <div className="reveal about-fact">
          <span className="eyebrow muted">Started with</span>
          <span className="about-fact-v">Print, advertising, art direction</span>
        </div>
        <div className="reveal about-fact" style={{ transitionDelay: ".04s" }}>
          <span className="eyebrow muted">Now focused on</span>
          <span className="about-fact-v">Product, brand, systems</span>
        </div>
        <div className="reveal about-fact" style={{ transitionDelay: ".08s" }}>
          <span className="eyebrow muted">Comfort zone</span>
          <span className="about-fact-v">Ambiguous, technical, visual</span>
        </div>
        <div className="reveal about-fact" style={{ transitionDelay: ".12s" }}>
          <span className="eyebrow muted">Tools I enjoy</span>
          <span className="about-fact-v">Figma, motion, 3D, code</span>
        </div>
      </section>

      <section className="reveal cta-strip panel">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="h2">Case studies show the thinking.</h2>
        </div>
        <Link className="btn btn-primary" href="/case-studies">
          View case studies <span className="arr">↗</span>
        </Link>
      </section>
    </article>
  );
}
