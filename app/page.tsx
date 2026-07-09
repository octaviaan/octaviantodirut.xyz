import Image from "next/image";
import Link from "next/link";

import { profile } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="section wrap wide hero">
        <div className="hero-grid">
          <div className="reveal hero-lead">
            <p className="eyebrow">Product &amp; Visual Designer</p>
            <h1 className="display">
              Octavian
              <br />
              Todirut
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
              <Link className="btn btn-ghost" href="/#about">
                About me
              </Link>
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
              <div className="feature-meta">Product &amp; Visual Designer</div>
              <h2 className="h3 serif">
                Based in Europe, working with teams anywhere.
              </h2>
              <p className="body" style={{ fontSize: ".95rem" }}>
                I shape product stories, interfaces, and systems for teams
                building complex digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* ABOUT */}
      <section id="about" className="section wrap wide about-section">
        <div className="reveal about-copy">
          <p className="eyebrow">About me</p>
          <h2 className="h2 balance">
            I move between product logic,{" "}
            <span className="mark">visual systems</span>, and the small details.
          </h2>
          <div className="about-body">
            <p className="lede">
              I'm a product and visual designer with a background that started
              in print, advertising, and art direction before moving into
              interactive work, brand systems, and later Web3 products.
            </p>
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
          <p className="body" style={{ maxWidth: "52ch" }}>
            A focused set of product and visual design projects with concise
            context, process, and the business impact behind each one.
          </p>
        </div>

        <div className="work-feature-stack">
          <Link className="reveal feat" href="/case-studies/gitcoin-3-rebrand">
            <div className="feat-art">
              <Image
                src="/images/chladni-feature.png"
                alt="Chladni generative pattern from the asset generator"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">01 — Case Study</span>
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
              <div className="feat-tags">
                <span className="chip">Brand</span>
                <span className="chip">Website</span>
                <span className="chip">Generative Tool</span>
              </div>
              <span className="link-arrow">
                Read the case study <span className="arr">→</span>
              </span>
            </div>
          </Link>

          <Link
            className="reveal feat"
            href="/case-studies/passport"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="feat-art">
              <Image
                src="/images/passport.png"
                alt="Passport identity interface"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">02 — Case Study</span>
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
              <div className="feat-tags">
                <span className="chip">Product</span>
                <span className="chip">Identity</span>
                <span className="chip">Sybil Resistance</span>
              </div>
              <span className="link-arrow">
                Read the case study <span className="arr">→</span>
              </span>
            </div>
          </Link>

          <Link
            className="reveal feat"
            href="/case-studies/gitcoin-token-launch"
            style={{ transitionDelay: ".12s" }}
          >
            <div className="feat-art">
              <Image
                src="/images/gtc.png"
                alt="Gitcoin token launch artwork"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="feat-badge">03 — Case Study</span>
            </div>
            <div className="feat-body">
              <div className="feat-meta">
                <span>2021</span>
                <span>Launch · Governance · Web3</span>
              </div>
              <h3 className="h2 serif">Gitcoin Token Launch</h3>
              <p className="body" style={{ maxWidth: "54ch" }}>
                Launch design for the GTC rollout and Quadratic Lands campaign —
                turning a token drop into an entry point for governance,
                public-goods funding, and community ownership.
              </p>
              <div className="feat-tags">
                <span className="chip">Launch</span>
                <span className="chip">Governance</span>
                <span className="chip">Web3</span>
              </div>
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
