import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { HeroFaceSequence } from "@/components/hero-face-sequence";
import { IntroVideoButton } from "@/components/intro-video-button";
import { profile } from "@/lib/content";

const graphicPortfolioUrl =
  "https://www.figma.com/proto/SQmTkWyYG5RaxF1FQ2Tw63/octa-graphic-portfolio?node-id=4012-2741&viewport=119%2C196%2C0.35&t=jvqUS1TZTpb6Wewq-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4012%3A2741&page-id=0%3A1";
const graphicPortfolioPdfUrl = "/octa-graphic-portfolio.pdf";
const productPortfolioPdfUrl = "/octa-product-portfolio.pdf";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section id="about" className="section wrap wide hero">
        <div className="hero-grid">
          <div className="reveal hero-lead">
            <p className="eyebrow">Senior Product Designer</p>
            <h1 className="display">
              I move between product logic,{" "}
              <span className="mark">visual systems</span>, and the small
              details.
            </h1>
            <p className="body hero-about">
              Senior Product and Visual Designer with 15+ years of experience of
              which 6+ years in Web3 and beyond, leading end-to-end product
              design across identity and governance. I love simple and elegant
              solutions to complex problems. I combine product thinking, systems
              design, and visual direction to ship high-impact products in
              fast-moving, remote teams.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/#work">
                View case studies
              </Link>
              <IntroVideoButton className="btn btn-secondary" />
            </div>
          </div>

          <HeroFaceSequence />

          <div className="contact-links hero-socials">
            <a
              className="text-link-external"
              href="https://www.figma.com/proto/JLrOm2x3UF791cQKeZxupW/octa-product-portfolio?node-id=688-6030&p=f&t=wF4Pmwt57Rukxo1v-0&scaling=contain&content-scaling=fixed&starting-point-node-id=688%3A6030&page-id=0%3A1"
              target="_blank"
              rel="noopener"
            >
              Figma Prototype
            </a>
            <a
              className="text-link-external"
              href={productPortfolioPdfUrl}
              target="_blank"
              rel="noopener"
            >
              PDF Portfolio
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section wrap wide">
        <div className="reveal sec-head case-studies-head">
          <p className="eyebrow">Case Studies</p>
          <h2 className="h2 balance">
            Case studies built to show the <span className="mark">thinking</span> ,
            not just the finish.
          </h2>
        </div>

        <div className="work-feature-stack">
          <Link className="reveal feat" href="/case-studies/passport">
            <div className="feat-art">
              <Image
                src="/images/passport.png"
                alt="Passport identity interface"
                fill
                sizes="(min-width: 1180px) 42vw, (min-width: 760px) 88vw, 100vw"
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">01 — Case Study</span>
            </div>
            <div className="feat-body">
              <div className="feat-meta">
                <span>2025</span>
                <span>Product · Identity · Sybil Resistance</span>
              </div>
              <h3 className="h2 serif">Passport</h3>
              <p className="body" style={{ maxWidth: "54ch" }}>
                A privacy-first identity hub for proving humanity through Web2
                and Web3 stamps — unifying scattered identity signals into one
                user-controlled trust profile.
              </p>
              <span className="text-link">
                Read the case study <span className="arr">→</span>
              </span>
            </div>
          </Link>

          <Link
            className="reveal feat"
            href="/case-studies/gitcoin-3-rebrand"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="feat-art">
              <Image
                src="/images/chladni-feature.png"
                alt="Chladni generative pattern from the asset generator"
                fill
                sizes="(min-width: 1180px) 42vw, (min-width: 760px) 88vw, 100vw"
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">02 — Case Study</span>
            </div>
            <div className="feat-body">
              <div className="feat-meta">
                <span>2026</span>
                <span>Brand · Product · Three.js</span>
              </div>
              <h3 className="h2 serif">Gitcoin 3.0</h3>
              <p className="body" style={{ maxWidth: "54ch" }}>
                Product strategy & platform repositioning for a decentralized
                funding platform.
              </p>
              <span className="text-link">
                Read the case study <span className="arr">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section id="selected-works" className="section wrap wide">
        <div className="reveal sec-head">
          <p className="eyebrow">Selected Works</p>
          <h2 className="h2 balance">
            Additional work across <span className="mark">product</span>, visual
            and brand.
          </h2>
        </div>

        <div className="selected-work-grid">
          <Link
            className="reveal selected-work-card"
            href="/selected-works/schelling-point"
          >
            <div className="selected-work-art">
              <Image
                src="/images/schelling-cover.jpg"
                alt="Schelling Point brand and product artwork"
                fill
                sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="selected-work-body">
              <div className="feat-meta">
                <span>Brand · Product · Visuals</span>
              </div>
              <h3 className="h3 serif">Schelling Point</h3>
              <p className="body">
                A series of conferences revolving around human coordination.
              </p>
              <span className="text-link">
                Read work <span className="arr">→</span>
              </span>
            </div>
          </Link>

          <a
            className="reveal selected-work-card"
            href="https://quadraticlands.com/"
            target="_blank"
            rel="noopener"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="selected-work-art">
              <Image
                src="/images/gtc.png"
                alt="Gitcoin DAO and GTC Quadratic Lands campaign artwork"
                fill
                sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="selected-work-body">
              <div className="feat-meta">
                <span>Brand · Product · Visuals</span>
              </div>
              <h3 className="h3 serif">Gitcoin DAO / GTC</h3>
              <p className="body">
                Campaign and launch work for Gitcoin's DAO transition, GTC, and
                the Quadratic Lands experience.
              </p>
              <span className="text-link text-link-external">
                Visit work{" "}
                <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
              </span>
            </div>
          </a>

          <a
            className="reveal selected-work-card"
            href="https://cristinalare.github.io/pluriverse.wtf/"
            target="_blank"
            rel="noopener"
            style={{ transitionDelay: ".12s" }}
          >
            <div className="selected-work-art">
              <Image
                src="/images/pluri.jpg"
                alt="Pluriverse website artwork"
                fill
                sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="selected-work-body">
              <div className="feat-meta">
                <span>Product · Visuals · Branding</span>
              </div>
              <h3 className="h3 serif">Pluriverse</h3>
              <p className="body">
                Website and visual direction for a series of comic books.
                Created a pdf guide for the comic book universe.
              </p>
              <span className="text-link text-link-external">
                Visit work{" "}
                <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
              </span>
            </div>
          </a>

          <a
            className="reveal selected-work-card"
            href="https://www.aligneth.xyz/"
            target="_blank"
            rel="noopener"
            style={{ transitionDelay: ".18s" }}
          >
            <div className="selected-work-art">
              <Image
                src="/images/aligneth-preview.png"
                alt="AlignETH website artwork about solving alignment with Ethereum"
                fill
                sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="selected-work-body">
              <div className="feat-meta">
                <span>Product · Visuals · Ethereum</span>
              </div>
              <h3 className="h3 serif">AlignETH</h3>
              <p className="body">
                Website and visual system exploring how Ethereum can help solve
                alignment problems and multipolar traps.
              </p>
              <span className="text-link text-link-external">
                Visit work{" "}
                <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section id="experiments" className="section wrap wide">
        <div className="reveal sec-head row-head">
          <div className="stack-sm">
            <p className="eyebrow">AI Experiments</p>
            <h2 className="h2">
              Asset generation <span className="mark">tools</span>
            </h2>
          </div>
        </div>

        <div className="exp-grid exp-grid-three">
          <Link
            className="reveal exp-card"
            href="/experiments/chladni-particles"
          >
            <h3 className="h3 serif">Gitcoin Brand Asset Generator</h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              A particle simulation of Chladni figures where motion reacts to an
              energy field and resolves into resonant patterns.
            </p>
            <div className="exp-art frame">
              <Image
                src="/images/chladni.png"
                alt="Gitcoin brand asset generator artwork"
                width={800}
                height={450}
              />
            </div>
            <div className="exp-stack">
              <span className="chip">JavaScript</span>
              <span className="chip">Three.js</span>
            </div>
          </Link>

          <Link
            className="reveal exp-card"
            href="/experiments/dithering-effect-svg"
            style={{ transitionDelay: ".06s" }}
          >
            <h3 className="h3 serif">Dithering Effect to SVG</h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              An image uploader that applies multiple dithering algorithms and
              exports the result as both PNG and crisp SVG.
            </p>
            <div className="exp-art frame">
              <Image
                src="/images/dithering.jpg"
                alt="Dithered wildlife artwork"
                width={800}
                height={450}
              />
            </div>
            <div className="exp-stack">
              <span className="chip">SVG Export</span>
            </div>
          </Link>

          <Link
            className="reveal exp-card"
            href="/experiments/bezier-swarms"
            style={{ transitionDelay: ".12s" }}
          >
            <h3 className="h3 serif">
              Bezier <br />
              Swarms
            </h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              A particle drawing tool that sends swarms through Bezier paths to
              create dense, layered motion sketches.
            </p>
            <div className="exp-art frame">
              <Image
                src="/images/bezier-swarms.png"
                alt="Layered particle trails generated from Bezier swarm paths"
                width={800}
                height={450}
              />
            </div>
            <div className="exp-stack">
              <span className="chip">JavaScript</span>
              <span className="chip">Canvas</span>
            </div>
          </Link>

          <Link
            className="reveal exp-card"
            href="/experiments/ascii-art-gen"
            style={{ transitionDelay: ".18s" }}
          >
            <h3 className="h3 serif">
              ASCII Art <br />
              Generator
            </h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              A browser-based ASCII generator that turns uploaded images into
              text-driven compositions.
            </p>
            <div className="exp-art frame">
              <Image
                src="/images/ascii-art.png"
                alt="Colorful ASCII artwork generated from an uploaded image"
                width={800}
                height={450}
              />
            </div>
            <div className="exp-stack">
              <span className="chip">SVG Export</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="section wrap wide final-portfolio-cta">
        <div className="reveal final-portfolio-inner">
          <h2 className="h2 balance">
            Check my <span className="mark">graphic design</span> portfolio
          </h2>
          <div className="final-portfolio-actions">
            <a
              className="btn btn-primary"
              href={graphicPortfolioUrl}
              target="_blank"
              rel="noopener"
            >
              Figma prototype
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
            <a
              className="btn btn-secondary"
              href={graphicPortfolioPdfUrl}
              target="_blank"
              rel="noopener"
            >
              PDF portfolio
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
