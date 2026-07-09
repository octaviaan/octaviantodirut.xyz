import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ReadProgress } from "@/components/read-progress";

export const metadata: Metadata = {
  title: "Gitcoin 3.0 — Case Study",
  description:
    "A rebrand that walks Gitcoin back to its lunar-punk roots — and forward into the database of everything funding on Ethereum.",
};

export default function GitcoinCaseStudyPage() {
  return (
    <>
      <ReadProgress />

      {/* HERO */}
      <section className="cs-hero">
        <Image
          src="/images/chladni-feature.png"
          alt="Gitcoin 3.0 brand artwork with Fund What Matters messaging"
          fill
          priority
          sizes="100vw"
          className="cs-hero-art cs-hero-image"
        />
        <div className="cs-hero-veil" />
        <div className="wrap cs-hero-inner">
          <Link className="cs-back link-arrow" href="/#work">
            <span className="arr">←</span> Case Studies
          </Link>
          <p className="eyebrow">Gitcoin · Case Study</p>
          <h1 className="display balance">
            The rebrand that<br /><em>returned home</em>.
          </h1>
          <p className="lede balance cs-hero-lede">
            A rebrand that walks Gitcoin <em className="serif">back</em> to its lunar-punk roots — and forward into something new:{" "}
            <em className="serif">the database of everything funding</em> on Ethereum.
          </p>
          <div className="case-detail-actions">
            <a className="btn btn-primary" href="https://gitcoin.co/" target="_blank" rel="noopener">
              Visit website <span className="arr">↗</span>
            </a>
          </div>
          <div className="cs-facts">
            <div className="cs-fact">
              <span className="eyebrow muted">Year</span>
              <span className="cs-fact-v">2026</span>
            </div>
            <div className="cs-fact">
              <span className="eyebrow muted">Role</span>
              <span className="cs-fact-v">Brand · Product</span>
            </div>
            <div className="cs-fact">
              <span className="eyebrow muted">Stack</span>
              <span className="cs-fact-v">Next.js · Three.js</span>
            </div>
            <div className="cs-fact">
              <span className="eyebrow muted">Read</span>
              <span className="cs-fact-v">~6 min</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS GITCOIN */}
      <section className="section wrap">
        <div className="cs-split">
          <div className="reveal">
            <p className="eyebrow">What is Gitcoin?</p>
            <h2 className="h2">Funding the <em>open</em> internet.</h2>
          </div>
          <div className="reveal stack" style={{ transitionDelay: ".06s" }}>
            <p className="lede">
              Gitcoin is a <strong>decentralized platform</strong> on Ethereum that helps fund open-source software and digital public goods, connecting developers with creators and community donors through hackathons, bounties, and grants.
            </p>
            <p className="body">
              It has done so <strong style={{ color: "var(--ink)" }}>since 2017</strong> — helping kickstart projects like ENS, Uniswap, 1inch, and yearn.finance, routing over{" "}
              <strong style={{ color: "var(--ink)" }}>$63 million</strong> to more than{" "}
              <strong style={{ color: "var(--ink)" }}>3,700</strong> open-source and decentralized projects.
            </p>
          </div>
        </div>

        <div className="cs-stats reveal">
          <div className="cs-stat">
            <span className="cs-stat-n serif">$63<em>M</em></span>
            <span className="cs-stat-l">Routed to public goods</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-n serif">3,700<em>+</em></span>
            <span className="cs-stat-l">Open-source projects funded</span>
          </div>
          <div className="cs-stat">
            <span className="cs-stat-n serif">2017<em>→</em></span>
            <span className="cs-stat-l">Years supporting OSS</span>
          </div>
        </div>
      </section>

      <hr className="divider wrap-line cs-line" />

      {/* THE BRIEF */}
      <section className="section wrap">
        <div className="reveal cs-sec-head">
          <p className="eyebrow">The brief, as I saw it</p>
          <h2 className="h2 balance">Lost the <em>plot</em>.<br />Time to find it.</h2>
          <p className="body" style={{ maxWidth: "54ch" }}>
            Gitcoin had drifted upmarket. The brand polished itself into something too institutional for the community that built it — and lost credibility with both.
          </p>
        </div>

        <div className="cs-rx">
          <article className="reveal cs-card">
            <div className="cs-card-top">01 — Diagnosis</div>
            <h3 className="h3 serif">The Problem.</h3>
            <p className="body">
              Gitcoin <strong style={{ color: "var(--ink)" }}>became too institutional</strong> — losing the grassroots energy and the credibility of the community that originally built it. The brand looked like an enterprise SaaS company, not a public-goods funder.
            </p>
          </article>
          <article className="reveal cs-card" style={{ transitionDelay: ".06s" }}>
            <div className="cs-card-top">02 — Prescription</div>
            <h3 className="h3 serif">The Solution.</h3>
            <p className="body">
              Return to the <strong style={{ color: "var(--ink)" }}>lunar-punk</strong> look and movement. Turn Gitcoin into a{" "}
              <strong style={{ color: "var(--ink)" }}>database of everything funding</strong> — the premier place where Ethereum funds solutions to its most important problems, with the team curating the funding landscape.
            </p>
          </article>
        </div>
      </section>

      <hr className="divider wrap-line cs-line" />

      {/* PRINCIPLES */}
      <section className="section wrap">
        <div className="reveal cs-sec-head">
          <p className="eyebrow">Achieving the database feel</p>
          <h2 className="h2 balance">Browse, search, edit, <em>contribute</em>.</h2>
          <p className="body" style={{ maxWidth: "58ch" }}>
            If Gitcoin is becoming a database, it should feel like one — fast, navigable, and editable by anyone. It has to{" "}
            <strong style={{ color: "var(--ink)" }}>look like documentation and feel like a product</strong>. Six principles guided every UI decision.
          </p>
        </div>

        <div className="cs-principles">
          <div className="reveal cs-pr">
            <h4>Browsable + searchable</h4>
            <p className="body">Search is front and center. ⌘K from anywhere. Ask AI inline.</p>
          </div>
          <div className="reveal cs-pr" style={{ transitionDelay: ".04s" }}>
            <h4>Tree-explorer sidebar</h4>
            <p className="body">A file-tree on the left. Always know where you are in the database.</p>
          </div>
          <div className="reveal cs-pr" style={{ transitionDelay: ".08s" }}>
            <h4>Breadcrumbs everywhere</h4>
            <p className="body">Every article shows its lineage. Easy back-out, easy lateral moves.</p>
          </div>
          <div className="reveal cs-pr" style={{ transitionDelay: ".04s" }}>
            <h4>Time-to-read on every page</h4>
            <p className="body">Set expectations before the reader starts.</p>
          </div>
          <div className="reveal cs-pr" style={{ transitionDelay: ".08s" }}>
            <h4>Edit on GitHub</h4>
            <p className="body">Every article is a PR away from being improved. Transparent, OSS.</p>
          </div>
          <div className="reveal cs-pr" style={{ transitionDelay: ".12s" }}>
            <h4>Generative asset system</h4>
            <p className="body">Three.js generator for hero art + OG images. Consistent at scale.</p>
          </div>
        </div>
      </section>

      {/* SURFACES */}
      <section className="section wrap">
        <div className="reveal cs-sec-head center">
          <p className="eyebrow">The work, on screen</p>
        </div>

        {/* F/01 Search */}
        <div className="cs-surface reveal">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Search</p>
            <h3 className="h3 serif">Search, <em>front and center</em>.</h3>
            <p className="body">
              The header search bar lives next to the primary nav — visible on every page. A <kbd>⌘K</kbd> shortcut summons a global overlay that floats above the page.{" "}
              <strong style={{ color: "var(--ink)" }}>Ask AI</strong> is one tab away, for when the answer isn't an article title.
            </p>
          </div>
          <figure className="cs-shot">
            <Image
              src="/case_studies/gitcoin-search-cmdk.png"
              alt="Command-K global search overlay with suggestions"
              width={1200}
              height={800}
            />
            <figcaption>Search · ⌘K</figcaption>
          </figure>
        </div>

        {/* F/02 Breadcrumbs */}
        <div className="cs-surface reveal reverse">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Breadcrumbs &amp; Header</p>
            <h3 className="h3 serif">You are <em>here</em>. Always.</h3>
            <p className="body">
              Every article carries its full lineage —{" "}
              <span className="mono" style={{ color: "var(--ink)" }}>Home → Mechanisms → Aqueduct</span> — so readers never feel lost. The header keeps the wordmark, nav, search box, and the Partner CTA in the same place on every page. Time-to-read sits directly under the lede.
            </p>
          </div>
          <figure className="cs-shot">
            <Image
              src="/case_studies/gitcoin-breadcrumbs.png"
              alt="Gitcoin top nav and breadcrumb leading to an article"
              width={1200}
              height={800}
            />
            <figcaption>Header · Breadcrumbs</figcaption>
          </figure>
        </div>

        {/* F/03 Ask AI */}
        <div className="cs-surface reveal">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Ask AI</p>
            <h3 className="h3 serif">An assistant that <em>actually</em> reads the docs.</h3>
            <p className="body">
              A right-side panel grounded in the database itself, pre-seeded with first-visit questions —{" "}
              <em className="serif">"What is quadratic funding?"</em>,{" "}
              <em className="serif">"Show me active campaigns"</em>,{" "}
              <em className="serif">"How does retroactive funding work?"</em> Opens with <kbd>⌘I</kbd>, closes the same way.
            </p>
          </div>
          <figure className="cs-shot">
            <Image
              src="/case_studies/gitcoin-ai-assistant.png"
              alt="AI Assistant side panel with suggested questions"
              width={1200}
              height={800}
            />
            <figcaption>AI Assistant · ⌘I</figcaption>
          </figure>
        </div>

        {/* F/04 Edit on GitHub — the one glow */}
        <div className="cs-surface reveal reverse cs-glow-scope">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Edit on GitHub</p>
            <h3 className="h3 serif">Every article is <em>a PR away</em>.</h3>
            <p className="body">
              At the bottom of every page sits a single luminous button:{" "}
              <strong style={{ color: "var(--glow)" }}>Edit on GitHub</strong>. It opens an issue or PR against the page's source — turning the whole site into a contributable repository. The glow is the only place the lunar-punk language allows itself to <em className="serif">actually</em> glow, saved for the one moment that signals participation.
            </p>
          </div>
          <figure className="cs-shot cs-frame-glow">
            <Image
              src="/case_studies/gitcoin-edit-github.png"
              alt="Edit on GitHub button with a soft purple glow"
              width={1200}
              height={800}
            />
            <figcaption style={{ color: "var(--glow)" }}>Edit · GitHub</figcaption>
          </figure>
        </div>

        {/* F/05 Tree sidebar */}
        <div className="cs-surface reveal">
          <div className="cs-surface-text">
            <p className="eyebrow muted">Tree Sidebar</p>
            <h3 className="h3 serif">The whole database, in the <em>left rail</em>.</h3>
            <p className="body">
              A file-explorer sidebar mirrors the repo.{" "}
              <span className="mono" style={{ color: "var(--ink)" }}>Campaigns · Research · Apps · Mechanisms · Case Studies</span> — each folder opens to its children, with the current page highlighted. Contributors orient immediately; first-time visitors browse the funding landscape the way they'd browse a codebase.
            </p>
          </div>
          <figure className="cs-shot cs-shot-tall">
            <Image
              src="/case_studies/gitcoin-sidebar-tree.png"
              alt="Gitcoin sidebar showing Campaigns folder expanded"
              width={800}
              height={1200}
            />
            <figcaption>Sidebar · Tree</figcaption>
          </figure>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="section wrap">
        <div className="reveal cs-next">
          <Link className="cs-next-card" href="/case-studies/passport">
            <span className="cs-next-k">← Previous</span>
            <h4 className="serif">Passport</h4>
            <p className="body">A privacy-first identity hub for proving humanity and resisting Sybil attacks.</p>
          </Link>
          <Link className="cs-next-card" href="/case-studies/gitcoin-token-launch">
            <span className="cs-next-k">Next →</span>
            <h4 className="serif">Gitcoin Token Launch</h4>
            <p className="body">GTC rollout and the Quadratic Lands campaign toward DAO governance.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
