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
              <Link className="btn btn-ghost" href="/about">
                About me <span className="arr">→</span>
              </Link>
              <Link className="link-arrow" href="/contact">
                Start a project <span className="arr">→</span>
              </Link>
            </div>
          </div>

          <div className="reveal feature-card portrait-card" style={{ transitionDelay: ".08s" }}>
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
              <h2 className="h3 serif">Based in Europe, working with teams anywhere.</h2>
              <p className="body" style={{ fontSize: ".95rem" }}>
                I shape product stories, interfaces, and systems for teams building complex digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider wrap-line" />

      {/* ABOUT */}
      <section id="about" className="section wrap wide about-section">
        <div className="reveal about-copy">
          <p className="eyebrow">About</p>
          <h2 className="h2 balance">
            I move between <em>product logic</em>, visual systems, and the small details that make digital work feel considered.
          </h2>
          <div className="about-body">
            <p className="lede">
              I&apos;m Octavian Todirut, a product and visual designer with a background that started in print, advertising, and art direction before moving into interactive work, brand systems, and Web3 products.
            </p>
            <p className="body">
              My strongest work sits where structure and atmosphere meet: interfaces that explain complex ideas, visual identities that can scale across a product, and design systems that make teams faster without sanding away character.
            </p>
            <p className="body">
              I like working close to the material. That can mean shaping a product flow in Figma, building a visual language around motion and generative tools, or getting close enough to code to understand how the thing will actually ship.
            </p>
          </div>
        </div>

        <div className="reveal about-facts" style={{ transitionDelay: ".08s" }}>
          <div className="about-fact">
            <span className="eyebrow muted">Started with</span>
            <span className="about-fact-v">Print, advertising, art direction</span>
          </div>
          <div className="about-fact">
            <span className="eyebrow muted">Now focused on</span>
            <span className="about-fact-v">Product, brand, systems</span>
          </div>
          <div className="about-fact">
            <span className="eyebrow muted">Comfort zone</span>
            <span className="about-fact-v">Ambiguous, technical, visual</span>
          </div>
          <div className="about-fact">
            <span className="eyebrow muted">Tools I enjoy</span>
            <span className="about-fact-v">Figma, motion, 3D, code</span>
          </div>
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
                alt="Passport identity interface"
                width={800}
                height={600}
              />
            </div>
            <div className="work-info">
              <div className="work-row">
                <span className="chip">2025</span>
                <span className="work-tags">Product · Identity</span>
              </div>
              <h3 className="h3 serif">Passport</h3>
              <p className="body">A privacy-first identity hub for proving humanity through user-chosen Web2 and Web3 stamps.</p>
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
              <p className="body">Launch design for the GTC rollout and Quadratic Lands campaign, turning a token drop into an entry point for governance.</p>
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
