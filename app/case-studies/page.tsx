import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Product and visual design case studies with context, process, and business impact.",
};

export default function CaseStudiesPage() {
  return (
    <section className="section wrap wide">
      {/* INTRO */}
      <div className="reveal cs-intro">
        <p className="eyebrow">Selected Work — 2021 → 2026</p>
        <h1 className="display balance">
          Case studies built to show the <em className="mark">thinking</em>.
        </h1>
        <p className="lede balance" style={{ maxWidth: "50ch" }}>
          A focused set of product and visual design projects, each with concise context, process, and the business impact behind the work.
        </p>
      </div>

      {/* FEATURED */}
      <Link className="reveal feat" href="/case-studies/gitcoin-3-rebrand">
        <div className="feat-art">
          <Image
            src="/images/chladni-feature.png"
            alt="Chladni generative pattern from the asset generator"
            fill
            style={{ objectFit: "cover" }}
          />
          <span className="feat-badge">01 — Featured</span>
        </div>
        <div className="feat-body">
          <div className="feat-meta">
            <span>2026</span>
            <span>Brand · Product · Three.js</span>
          </div>
          <h2 className="h2 serif">
            Gitcoin 3.0 — <em>the rebrand that returned home</em>
          </h2>
          <p className="body" style={{ maxWidth: "54ch" }}>
            A rebrand that walks Gitcoin back to its lunar-punk roots and forward into the database of everything funding on Ethereum — paired with a generative Three.js asset tool for consistent visuals at scale.
          </p>
          <div className="feat-tags">
            <span className="chip">Brand</span>
            <span className="chip">Website</span>
            <span className="chip">Generative Tool</span>
          </div>
          <span className="link-arrow">Read the case study <span className="arr">→</span></span>
        </div>
      </Link>

      {/* LIST */}
      <div className="cl-list">
        <article className="reveal cl-row">
          <Link
            className="cl-row-link"
            href="/case-studies/passport"
            aria-label="Read the Passport case study"
          />
          <div className="cl-art frame">
            <Image
              src="/images/passport.png"
              alt="Passport identity interface"
              width={800}
              height={600}
            />
          </div>
          <div className="cl-info">
            <div className="cl-meta">
              <span>2025</span>
              <span>Product · Identity · Sybil Resistance</span>
            </div>
            <h3 className="h2 serif" style={{ fontSize: "clamp(1.7rem,3.2vw,2.6rem)" }}>
              Passport
            </h3>
            <p className="body" style={{ maxWidth: "58ch" }}>
              A privacy-first identity hub for proving humanity through Web2 and Web3 stamps — unifying scattered identity signals into one user-controlled trust profile.
            </p>
            <div className="cl-row-foot">
              <div className="cl-mini">
                <span>
                  <span className="cl-n">2M+</span>
                  <span className="cl-l">Human Passports</span>
                </span>
                <span>
                  <span className="cl-n">43M+</span>
                  <span className="cl-l">Credentials</span>
                </span>
                <span>
                  <span className="cl-n">$512M+</span>
                  <span className="cl-l">Secured vs. Sybils</span>
                </span>
              </div>
              <a
                className="btn btn-ghost btn-sm"
                href="https://app.passport.xyz/"
                target="_blank"
                rel="noopener"
              >
                Visit project <span className="arr">↗</span>
              </a>
            </div>
            <span className="link-arrow">Read the case study <span className="arr">→</span></span>
          </div>
        </article>

        <hr className="divider" />

        <article className="reveal cl-row">
          <Link
            className="cl-row-link"
            href="/case-studies/gitcoin-token-launch"
            aria-label="Read the Gitcoin Token Launch case study"
          />
          <div className="cl-art frame">
            <Image
              src="/images/gtc.png"
              alt="Gitcoin token launch artwork"
              width={800}
              height={600}
            />
          </div>
          <div className="cl-info">
            <div className="cl-meta">
              <span>2021</span>
              <span>Launch · Governance · Web3</span>
            </div>
            <h3 className="h2 serif" style={{ fontSize: "clamp(1.7rem,3.2vw,2.6rem)" }}>
              Gitcoin Token Launch
            </h3>
            <p className="body" style={{ maxWidth: "58ch" }}>
              Launch design for the GTC rollout and Quadratic Lands campaign — turning a token drop into an entry point for governance, public-goods funding, and community ownership.
            </p>
            <div className="cl-row-foot">
              <div className="cl-mini">
                <span>
                  <span className="cl-n">25,500</span>
                  <span className="cl-l">Eligible users</span>
                </span>
                <span>
                  <span className="cl-n">15M</span>
                  <span className="cl-l">GTC airdrop</span>
                </span>
                <span>
                  <span className="cl-n">50M</span>
                  <span className="cl-l">GTC DAO treasury</span>
                </span>
              </div>
              <a
                className="btn btn-ghost btn-sm"
                href="https://www.quadraticlands.com/"
                target="_blank"
                rel="noopener"
              >
                Visit project <span className="arr">↗</span>
              </a>
            </div>
            <span className="link-arrow">Read the case study <span className="arr">→</span></span>
          </div>
        </article>
      </div>

      {/* CTA */}
      <div className="reveal cta-strip panel" style={{ marginTop: "clamp(3rem,6vw,5rem)" }}>
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2 className="h2">Let&apos;s build something with <em>clarity</em>.</h2>
        </div>
        <Link className="btn btn-primary" href="/contact">
          Start a conversation <span className="arr">↗</span>
        </Link>
      </div>
    </section>
  );
}
