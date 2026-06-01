import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section wrap wide hero">
        <div className="hero-grid">
          <div className="reveal hero-lead">
            <p className="eyebrow">Product &amp; Visual Designer</p>
            <h1 className="display">Octavian<br />Todirut</h1>
            <p className="lede balance" style={{ maxWidth: "30ch" }}>
              I design digital products with <em className="serif mark">cinematic clarity</em> and sharp commercial focus.
            </p>

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
              <Link className="btn btn-primary" href="/case-studies">
                View case studies <span className="arr">↗</span>
              </Link>
              <Link className="link-arrow" href="/contact">
                Start a project <span className="arr">→</span>
              </Link>
            </div>
          </div>

          <Link
            className="reveal feature-card"
            href="/case-studies/gitcoin-3-rebrand"
            style={{ transitionDelay: ".08s" }}
          >
            <div className="feature-art">
              <Image
                src="/images/chladni-feature.png"
                alt="Chladni generative pattern from the Gitcoin 3.0 rebrand asset generator"
                fill
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, calc(100vw - 40px)"
                style={{ objectFit: "cover" }}
              />
              <span className="feature-tag">Selected — 01</span>
            </div>
            <div className="feature-body">
              <div className="feature-meta">2026 · Brand / Product / Three.js</div>
              <h2 className="h3 serif">
                Gitcoin 3.0 — <em>the rebrand that returned home</em>
              </h2>
              <p className="body" style={{ fontSize: ".95rem" }}>
                Walking Gitcoin back to its lunar-punk roots, and forward into the database of everything funding on Ethereum.
              </p>
              <span className="link-arrow">Read the case study <span className="arr">→</span></span>
            </div>
          </Link>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* SELECTED WORK */}
      <section className="section wrap wide">
        <div className="reveal sec-head">
          <p className="eyebrow">Selected Work</p>
          <h2 className="h2 balance">
            Case studies built to show the <em>thinking</em>,<br />not just the finish.
          </h2>
          <p className="body" style={{ maxWidth: "52ch" }}>
            A focused set of product and visual design projects with concise context, process, and the business impact behind each one.
          </p>
        </div>

        <div className="work-grid">
          <Link className="reveal work-card" href="/case-studies/gitcoin-3-rebrand">
            <div className="work-art frame">
              <Image
                src="/case_studies/gitcoin-asset-generator.png"
                alt="Chladni-generated Gitcoin brand artwork"
                width={800}
                height={600}
              />
            </div>
            <div className="work-info">
              <div className="work-row">
                <span className="chip">2026</span>
                <span className="work-tags">Brand · Product</span>
              </div>
              <h3 className="h3 serif">Gitcoin 3.0 Rebrand</h3>
              <p className="body">A full brand and web refresh paired with a generative Three.js asset tool — turning the site into the reference layer for Ethereum funding.</p>
              <span className="link-arrow">Explore <span className="arr">→</span></span>
            </div>
          </Link>

          <Link
            className="reveal work-card"
            href="/case-studies/passport"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="work-art frame">
              <Image
                src="/images/passport.png"
                alt="Passport XYZ identity interface"
                width={800}
                height={600}
              />
            </div>
            <div className="work-info">
              <div className="work-row">
                <span className="chip">2025</span>
                <span className="work-tags">Product · Identity</span>
              </div>
              <h3 className="h3 serif">Passport XYZ</h3>
              <p className="body">A privacy-first identity hub helping people prove their humanity and resist Sybil attacks without exposing sensitive personal data.</p>
              <span className="link-arrow">Explore <span className="arr">→</span></span>
            </div>
          </Link>

          <Link
            className="reveal work-card"
            href="/case-studies/gitcoin-token-launch"
            style={{ transitionDelay: ".12s" }}
          >
            <div className="work-art frame">
              <Image
                src="/images/gtc.png"
                alt="Gitcoin token launch artwork"
                width={800}
                height={600}
              />
            </div>
            <div className="work-info">
              <div className="work-row">
                <span className="chip">2021</span>
                <span className="work-tags">Launch · Governance</span>
              </div>
              <h3 className="h3 serif">Gitcoin Token Launch</h3>
              <p className="body">Launch design for the GTC rollout and the Quadratic Lands campaign that framed Gitcoin's move toward DAO governance.</p>
              <span className="link-arrow">Explore <span className="arr">→</span></span>
            </div>
          </Link>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* EXPERIMENTS */}
      <section className="section wrap wide">
        <div className="reveal sec-head row-head">
          <div className="stack-sm">
            <p className="eyebrow">Experiments</p>
            <h2 className="h2">A couple of experiments<br />worth <em>opening</em>.</h2>
          </div>
          <Link className="btn btn-ghost btn-sm" href="/experiments">
            View all experiments <span className="arr">↗</span>
          </Link>
        </div>

        <div className="exp-grid">
          <Link className="reveal exp-card" href="/experiments/chladni-particles">
            <div className="exp-top">
              <span>Generative Art</span>
              <span>2026</span>
            </div>
            <h3 className="h3 serif">Chladni Particles</h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              A particle simulation of Chladni figures where motion reacts to an energy field and resolves into resonant patterns.
            </p>
            <div className="exp-art frame">
              <Image
                src="/images/chladni.png"
                alt="Chladni particles artwork"
                width={800}
                height={450}
              />
            </div>
            <div className="exp-stack">
              <span className="chip">JavaScript</span>
              <span className="chip">Three.js</span>
              <span className="chip">Generative</span>
            </div>
          </Link>

          <Link
            className="reveal exp-card"
            href="/experiments/dithering-effect-svg"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="exp-top">
              <span>Image Tool</span>
              <span>2025</span>
            </div>
            <h3 className="h3 serif">Dithering Effect SVG</h3>
            <p className="body" style={{ fontSize: ".95rem" }}>
              An image uploader that applies multiple dithering algorithms and exports the result as both PNG and crisp SVG.
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
              <span className="chip">JavaScript</span>
              <span className="chip">SVG Export</span>
              <span className="chip">Imaging</span>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section wrap wide">
        <div className="reveal cta-strip panel">
          <div>
            <p className="eyebrow">Open to select work</p>
            <h2 className="h2">Let&apos;s build something with <em>clarity</em>.</h2>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Start a conversation <span className="arr">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
