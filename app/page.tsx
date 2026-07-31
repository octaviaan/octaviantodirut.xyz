import Image from "next/image";
import Link from "next/link";

import { profile } from "@/lib/content";

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

            <div className="stat-row">
              <div className="stat">
                <span className="eyebrow muted">Focus</span>
                <span className="stat-v">Product clarity</span>
              </div>
              <div className="stat">
                <span className="eyebrow muted">Work&nbsp;style</span>
                <span className="stat-v">Systems + storytelling</span>
              </div>
              <div className="stat">
                <span className="eyebrow muted">Based&nbsp;in</span>
                <span className="stat-v">Remote / Europe</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/#work">
                View case studies
              </Link>
              <a
                className="btn btn-ghost"
                href="https://www.figma.com/proto/JLrOm2x3UF791cQKeZxupW/octa-product-portfolio?node-id=688-6030&p=f&t=wF4Pmwt57Rukxo1v-0&scaling=contain&content-scaling=fixed&starting-point-node-id=688%3A6030&page-id=0%3A1"
                target="_blank"
                rel="noopener"
              >
                Visit prototype
              </a>
            </div>
          </div>

          <div
            className="reveal feature-card portrait-card"
            style={{ transitionDelay: ".08s" }}
          >
            <div className="feature-art portrait-art">
              <Image
                src="/images/octavian-profile.jpg"
                alt="Portrait of Octavian Todirut"
                fill
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, calc(100vw - 40px)"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="feature-body">
              <div className="feature-meta">Senior Product Designer</div>
              <h2 className="h3 serif">About me</h2>
              <p className="body" style={{ fontSize: ".95rem" }}>
                Senior Product and Visual Designer with 15+ years of experience
                of which 6+ years in Web3 and beyond, leading end-to-end product
                design across identity and governance. I love simple and elegant
                solutions to complex problems. I combine product thinking,
                systems design, and visual direction to ship high-impact
                products in fast-moving, remote teams.
              </p>
            </div>
          </div>

          <div className="contact-links hero-socials">
            <a href={profile.x} target="_blank" rel="noopener">
              X
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={profile.print} target="_blank" rel="noopener">
              Print
            </a>
          </div>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* SELECTED WORK */}
      <section id="work" className="section wrap wide">
        <div className="reveal sec-head">
          <p className="eyebrow">Case Studies</p>
          <h2 className="h2 balance">
            Case studies built to show the <em className="mark">thinking</em>,
            <br />
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
              <span className="link-arrow">
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
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">02 — Case Study</span>
            </div>
            <div className="feat-body">
              <div className="feat-meta">
                <span>2026</span>
                <span>Brand · Product · Three.js</span>
              </div>
              <h3 className="h2 serif">
                Gitcoin 3.0 — <em>the rebrand that returned home</em>
              </h3>
              <p className="body" style={{ maxWidth: "54ch" }}>
                A rebrand that walks Gitcoin back to its lunar-punk roots and
                forward into the database of everything funding on Ethereum —
                paired with a generative Three.js asset tool for consistent
                visuals at scale.
              </p>
              <span className="link-arrow">
                Read the case study <span className="arr">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* EXPERIMENTS */}
      <section id="experiments" className="section wrap wide">
        <div className="reveal sec-head row-head">
          <div className="stack-sm">
            <p className="eyebrow">AI Experiments</p>
            <h2 className="h2">
              <span className="mark">Asset generation</span> tools
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
            href="/experiments/ascii-art-gen"
            style={{ transitionDelay: ".12s" }}
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

      {/* CTA STRIP */}
      <section id="contact" className="section wrap wide">
        <div className="reveal cta-strip panel">
          <div>
            <h2 className="h2">
              Let&apos;s <span className="mark"> build</span> something.
            </h2>
            <div className="contact-links">
              <a href={profile.x} target="_blank" rel="noopener">
                X
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener">
                GitHub
              </a>
              <a href={profile.print} target="_blank" rel="noopener">
                Print
              </a>
            </div>
          </div>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Start a conversation <span className="arr">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
