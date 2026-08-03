import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ReadProgress } from "@/components/read-progress";

export const metadata: Metadata = {
  title: "Gitcoin 3.0 — Case Study",
  description: "Product strategy & platform repositioning for a decentralized funding platform.",
};

export default function GitcoinCaseStudyPage() {
  return (
    <>
      <ReadProgress />

      {/* HERO */}
      <section className="section wrap wide gitcoin-hero">
        <div className="case-detail-hero">
          <div className="case-detail-copy">
            <Link className="link-arrow" href="/#work">
              <span className="arr">←</span> Case Studies
            </Link>
            <div className="case-detail-title">
              <h1 className="display balance">
                Gitcoin 3.0
              </h1>
              <p className="lede balance">
                Product strategy & platform repositioning for a decentralized funding platform.
              </p>
            </div>
            <div className="case-detail-actions cs-hero-actions">
              <a
                className="btn btn-primary"
                href="https://gitcoin.co/"
                target="_blank"
                rel="noopener"
              >
                Visit website <span className="arr">↗</span>
              </a>
              <a
                className="btn btn-ghost"
                href="https://gitcoin.co/generator"
                target="_blank"
                rel="noopener"
              >
                View generator <span className="arr">↗</span>
              </a>
            </div>
          </div>

          <div className="case-detail-art gitcoin-hero-art">
            <Image
              src="/images/chladni-feature.png"
              alt="Gitcoin 3.0 brand artwork with Fund What Matters messaging"
              fill
              priority
              sizes="(min-width: 1280px) 46vw, (min-width: 768px) 80vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* WHAT IS GITCOIN */}
      <section className="section wrap">
        <div className="cs-split">
          <div className="reveal">
            <p className="eyebrow">What is Gitcoin?</p>
            <h2 className="h2">
              Funding the <em>open</em> internet.
            </h2>
          </div>
          <div className="reveal stack" style={{ transitionDelay: ".06s" }}>
            <p className="lede">
              Gitcoin is a <strong>decentralized platform</strong> that helps fund open-source software and digital public goods,
              connecting developers with creators and community donors through
              hackathons, bounties, and grants.
            </p>
            <p className="body">
              It has done so{" "}
              <strong style={{ color: "var(--ink)" }}>since 2017</strong> —
              helping kickstart projects like ENS, Uniswap, 1inch, and
              yearn.finance, routing over{" "}
              <strong style={{ color: "var(--ink)" }}>$63 million</strong> to
              more than <strong style={{ color: "var(--ink)" }}>3,700</strong>{" "}
              open-source and decentralized projects.
            </p>
          </div>
        </div>

        <div className="cs-stats reveal">
          <div className="cs-stat">
            <span className="cs-stat-n serif">
              $63<em>M</em>
            </span>
            <span className="cs-stat-l">Routed to public goods</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-n serif">
              3,700<em>+</em>
            </span>
            <span className="cs-stat-l">Open-source projects funded</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-n serif">
              2017<em>→</em>
            </span>
            <span className="cs-stat-l">Years supporting OSS</span>
          </div>
        </div>
      </section>

      <hr className="divider wrap-line cs-line" />

      {/* CHALLENGE */}
      <section className="section wrap">
        <div className="reveal cs-sec-head">
          <p className="eyebrow">The Challenge</p>
          <h2 className="h2 balance">
            Lost the <em>plot</em>.<br />
            Time to find it.
          </h2>
          <p className="body" style={{ maxWidth: "54ch" }}>
            Gitcoin became too institutional and lost a lot of the startup and
            grassroots vibe, as well as credibility with the community that
            originally built it. The brand looked like an enterprise SaaS
            company, not a public-goods funder.
          </p>
        </div>
      </section>

      <hr className="divider wrap-line cs-line" />

      {/* SOLUTION */}
      <section className="section wrap">
        <div className="reveal cs-sec-head">
          <p className="eyebrow">The Solution</p>
          <h2 className="h2 balance">
            A database of <em>everything funding</em>.
          </h2>
          <p className="body" style={{ maxWidth: "58ch" }}>
            Turn Gitcoin into the knowledge layer: the premier place where
            Ethereum funds solutions to its most important problems, and where
            the team curates the funding landscape.
          </p>
        </div>
      </section>

      {/* SURFACES */}
      <section className="section wrap">
        <div className="reveal cs-sec-head center">
          <p className="eyebrow">The work, on screen</p>
        </div>

        {/* 05 - Solution 1 */}
        <div className="cs-surface reveal">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Search</p>
            <h3 className="h3 serif">
              Search, <em>front and center</em>.
            </h3>
            <p className="body">
              The header search bar lives next to the primary nav — visible on
              every page. A <kbd>⌘K</kbd> shortcut summons a global overlay that
              floats above the page.{" "}
              <strong style={{ color: "var(--ink)" }}>Ask AI</strong> is one tab
              away, for when the answer isn't an article title.
            </p>
          </div>
          <figure className="cs-shot">
            <a
              href="/case_studies/gitcoin-principle-1.png"
              target="_blank"
              rel="noopener"
              aria-label="Open image full size"
            >
              <Image
                src="/case_studies/gitcoin-principle-1.png"
                alt="Gitcoin search overlay and AI assistant panel."
                width={1105}
                height={640}
              />
            </a>
          </figure>
        </div>

        {/* 06 - Solution 2 */}
        <div className="cs-surface reveal reverse">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Tree Sidebar</p>
            <h3 className="h3 serif">
              The whole database, in the <em>left rail</em>.
            </h3>
            <p className="body">
              A file-explorer sidebar mirrors the repo.{" "}
              <span className="mono" style={{ color: "var(--ink)" }}>
                Campaigns · Research · Apps · Mechanisms · Case Studies
              </span>{" "}
              — each folder opens to its children, with the current page
              highlighted. Contributors orient immediately; first-time visitors
              browse the funding landscape the way they'd browse a codebase.
            </p>
          </div>
          <figure className="cs-shot">
            <a
              href="/case_studies/gitcoin-tree-sidebar.png"
              target="_blank"
              rel="noopener"
              aria-label="Open image full size"
            >
              <Image
                src="/case_studies/gitcoin-tree-sidebar.png"
                alt="Gitcoin article page with tree sidebar navigation."
                width={1173}
                height={821}
              />
            </a>
          </figure>
        </div>

        {/* 07 - Solution 3/4 */}
        <div className="cs-surface reveal">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Breadcrumbs &amp; Header</p>
            <h3 className="h3 serif">
              You are <em>here</em>. Always.
            </h3>
            <p className="body">
              Every article carries its full lineage —{" "}
              <span className="mono" style={{ color: "var(--ink)" }}>
                Home → Mechanisms → Aqueduct
              </span>{" "}
              — so readers never feel lost. The header keeps the wordmark, nav,
              search box, and the Partner CTA in the same place on every page.
              Time-to-read sits directly under the lede.
            </p>
          </div>
          <figure className="cs-shot">
            <a
              href="/case_studies/gitcoin-breadcrumbs.png"
              target="_blank"
              rel="noopener"
              aria-label="Open image full size"
            >
              <Image
                src="/case_studies/gitcoin-breadcrumbs.png"
                alt="Gitcoin top nav and breadcrumb leading to an article"
                width={1200}
                height={800}
              />
            </a>
          </figure>
        </div>

        {/* 08 - Solution 5 */}
        <div className="cs-surface reveal cs-glow-scope">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Edit on GitHub</p>
            <h3 className="h3 serif">
              Every article is <em>a PR away</em>.
            </h3>
            <p className="body">
              At the bottom of every page sits a single luminous button:{" "}
              <strong style={{ color: "var(--glow)" }}>Edit on GitHub</strong>.
              It opens an issue or PR against the page's source — turning the
              whole site into a contributable repository. The glow is the only
              place the lunar-punk language allows itself to{" "}
              <em className="serif">actually</em> glow, saved for the one moment
              that signals participation.
            </p>
          </div>
          <figure className="cs-shot cs-frame-glow">
            <a
              href="/case_studies/gitcoin-edit-github.png"
              target="_blank"
              rel="noopener"
              aria-label="Open image full size"
            >
              <Image
                src="/case_studies/gitcoin-edit-github.png"
                alt="Edit on GitHub button with a soft purple glow"
                width={1200}
                height={800}
              />
            </a>
          </figure>
        </div>

        {/* 09 - Solution 6 */}
        <div className="cs-surface reveal reverse">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Generative asset system</p>
            <h3 className="h3 serif">
              Generative asset system <em>(using Claude in VS Code)</em>.
            </h3>
            <p className="body">
              I have created a generator for hero art + Open Graph images using
              Three.js, a JavaScript library for 3D.
            </p>
            <p className="body">
              Consistent at scale. Reduces and democratizes asset production
              time, in the spirit of open source software.
            </p>
            <p className="body">
              It's packed with features and very customizable. If you just want
              a quick image, hit "randomize all" and you get an image.
              Instructions and shortcuts are also built into the generator.
            </p>
            <a
              className="link-arrow"
              href="https://gitcoin.co/generator"
              target="_blank"
              rel="noopener"
            >
              Open generator <span className="arr">↗</span>
            </a>
          </div>
          <figure className="cs-shot">
            <a
              href="/case_studies/gitcoin-generator-system.png"
              target="_blank"
              rel="noopener"
              aria-label="Open image full size"
            >
              <Image
                src="/case_studies/gitcoin-generator-system.png"
                alt="Gitcoin generative asset system controls over Chladni particle artwork."
                width={921}
                height={881}
              />
            </a>
          </figure>
        </div>
      </section>

      <hr className="divider wrap-line cs-line" />

      {/* OUTCOME */}
      <section className="section wrap">
        <div className="reveal cs-sec-head">
          <p className="eyebrow">Outcome</p>
          <h2 className="h2 balance">
            Relaunch traction, <em>measured</em>.
          </h2>
          <p className="body" style={{ maxWidth: "58ch" }}>
            By the end of April, the repositioned Gitcoin experience showed
            clear movement across primary and secondary acquisition signals
            compared with the start of March after relaunch.
          </p>
        </div>

        <div className="cs-rx">
          <article className="reveal cs-card">
            <div className="cs-card-top">Primary KPIs</div>
            <h3 className="h3 serif">Core traffic lifted.</h3>
            <p className="body">
              Active users reached{" "}
              <strong style={{ color: "var(--ink)" }}>11,038</strong>, up{" "}
              <strong style={{ color: "var(--ink)" }}>+138% WoW</strong> and
              +41% versus the Q1 2025 average. Sessions reached{" "}
              <strong style={{ color: "var(--ink)" }}>11,772</strong>, up{" "}
              <strong style={{ color: "var(--ink)" }}>+145% WoW</strong> and
              +24% versus the Q1 2025 average.
            </p>
            <p className="body">
              Organic social reached 518, up +1,892% WoW. Organic search reached
              1,227, up +376% WoW.
            </p>
          </article>
          <article
            className="reveal cs-card"
            style={{ transitionDelay: ".06s" }}
          >
            <div className="cs-card-top">Secondary KPIs</div>
            <h3 className="h3 serif">Contribution paths started working.</h3>
            <p className="body">
              Returning users reached{" "}
              <strong style={{ color: "var(--ink)" }}>408</strong>, up +232%
              WoW. AI referral traffic reached{" "}
              <strong style={{ color: "var(--ink)" }}>118</strong>, up +462%
              WoW, and GitHub referral traffic reached{" "}
              <strong style={{ color: "var(--ink)" }}>38</strong>, up +533% WoW.
            </p>
          </article>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="section wrap">
        <div className="reveal cs-next">
          <Link className="cs-next-card" href="/case-studies/passport">
            <span className="cs-next-k">← Previous</span>
            <h4 className="serif">Passport</h4>
            <p className="body">
              A privacy-first identity hub for proving humanity and resisting
              Sybil attacks.
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
