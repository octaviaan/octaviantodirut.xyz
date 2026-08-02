export type Metric = {
  label: string;
  value: string;
};

export type CaseStudyMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  poster?: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  fit?: "cover" | "contain";
  presentation?: "default" | "transparent";
  size?: "default" | "small";
};

export type CaseStudyStep = {
  label?: string;
  title?: string;
  description: string;
  details?: string[];
  media?: CaseStudyMedia[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  href?: string;
  links?: {
    label: string;
    href: string;
  }[];
  heroImageSrc?: string;
  heroImageAlt?: string;
  tags: string[];
  year: string;
  featured: boolean;
  heroLabel: string;
  challenge: string;
  process: CaseStudyStep[];
  outcome: string;
  metrics: Metric[];
};

export type ExperimentItem = {
  slug: string;
  title: string;
  year: string;
  format: string;
  description: string;
  heroLabel: string;
  previewImageSrc?: string;
  previewImageAlt?: string;
  href: string;
  repo: string;
  cta: string;
  stack: string[];
  overview: string;
  notes: string[];
};

export const profile = {
  name: "Octavian Todirut",
  title: "Senior Product Designer",
  tagline:
    "I design digital products with cinematic clarity and sharp commercial focus.",
  intro:
    "Independent designer crafting interfaces, systems, and brand moments for ambitious teams across product, Web3, and culture.",
  email: "octaviantodirut@gmail.com",
  linkedin: "https://www.linkedin.com/in/octanaiv/",
  x: "https://x.com/b1rdf1sh",
  github: "https://github.com/octaviaan",
  print: "https://cargocollective.com/octaviaan",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Case Studies" },
  { href: "/#selected-works", label: "Selected Works" },
  { href: "/#experiments", label: "AI Experiments" },
];

const sortCaseStudies = (studies: CaseStudy[]) => {
  const order = ["passport", "gitcoin-3-rebrand"];
  return studies.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
};

export const caseStudies = sortCaseStudies([
  {
    slug: "gitcoin-3-rebrand",
    title: "Gitcoin 3.0 Rebrand",
    description:
      "A designed-and-coded case study for Gitcoin's 3.0 rebrand: a return to lunar-punk roots, database-first product architecture, and generative visuals for funding intelligence.",
    href: "https://gitcoin.co/",
    links: [
      {
        label: "View coded case study",
        href: "https://octaviaan.github.io/impact/case-study.html",
      },
      { label: "Visit Gitcoin", href: "https://gitcoin.co/" },
      { label: "View generator", href: "https://gitcoin.co/generator" },
    ],
    heroImageSrc: "/images/gitcoin-3.jpg",
    heroImageAlt: "Gitcoin 3.0 brand artwork with Fund What Matters messaging.",
    tags: ["Brand", "Product", "Front-end"],
    year: "2026",
    featured: true,
    heroLabel:
      "A designed and coded Gitcoin 3.0 case study: funding intelligence, contributor navigation, and generative brand assets.",
    challenge:
      "Gitcoin had drifted upmarket into a more institutional SaaS expression, which weakened the grassroots credibility that made it matter to Ethereum public goods communities. The rebrand needed to return to Gitcoin's lunar-punk roots while moving the product forward as a database of everything funding: a place to browse mechanisms, compare programs, study outcomes, and contribute to the funding landscape.",
    process: [
      {
        title: "Returning to the Plot",
        description:
          "Reframed Gitcoin around its public-goods roots and the line Fund What Matters, shifting the expression away from institutional polish and toward a sharper contributor-led identity. The coded case study presents that strategic return as both a brand move and a product architecture move.",
      },
      {
        title: "Database-First Product Architecture",
        description:
          "Structured the new site like a funding database: campaigns, research, apps, mechanisms, and case studies organized as browsable, searchable, editable knowledge. The system uses a persistent header, breadcrumbs, reading-time cues, and a file-tree sidebar so visitors always understand where they are.",
        media: [
          {
            type: "image",
            src: "/case_studies/gitcoin-search-cmdk.png",
            alt: "Gitcoin global search overlay with suggestions.",
            caption:
              "Global search and Command-K shortcuts make the funding database feel fast and product-native.",
            aspectRatio: "landscape",
          },
          {
            type: "image",
            src: "/case_studies/gitcoin-breadcrumbs.png",
            alt: "Gitcoin article header with top navigation and breadcrumbs.",
            caption:
              "Breadcrumbs, stable navigation, and reading-time details help long-form funding content stay legible.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Contributor Surfaces",
        description:
          "Added product patterns that make Gitcoin feel open-source at the interaction level: an AI assistant grounded in the database, a GitHub edit path for every article, and a tree sidebar that mirrors the repository structure.",
        media: [
          {
            type: "image",
            src: "/case_studies/gitcoin-ai-assistant.png",
            alt: "Gitcoin AI assistant side panel with suggested questions.",
            caption:
              "The assistant gives visitors a conversational way into the funding knowledge base.",
            aspectRatio: "portrait",
          },
          {
            type: "image",
            src: "/case_studies/gitcoin-sidebar-tree.png",
            alt: "Gitcoin sidebar tree with funding categories and expanded pages.",
            caption:
              "The left rail borrows from file explorers so contributors can browse Gitcoin like a codebase.",
            aspectRatio: "portrait",
          },
          {
            type: "image",
            src: "/case_studies/gitcoin-edit-github.png",
            alt: "Gitcoin article footer with an Edit on GitHub button.",
            caption:
              "The Edit on GitHub action turns static articles into contribution paths.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Generative Asset System",
        description:
          "Coded a Three.js Chladni generator to create seeded hero art and Open Graph imagery for articles. The system turns the rebrand into a production tool: mathematically consistent, visually alive, and flexible enough for fast-moving research, campaign, and ecosystem pages.",
        media: [
          {
            type: "image",
            src: "/case_studies/gitcoin-asset-generator.png",
            alt: "Gitcoin Chladni asset generator interface with particle pattern artwork.",
            caption:
              "One generator powers hero art and social images, giving each page a unique but recognizable Gitcoin visual.",
            aspectRatio: "landscape",
          },
        ],
      },
    ],
    outcome:
      "The result is a designed and coded case study that positions Gitcoin 3.0 as a funding reference layer for Ethereum: lunar-punk in tone, database-first in structure, and practical for community contribution through search, GitHub editing, AI assistance, and generative brand tooling.",
    metrics: [
      { label: "Funding Routed", value: "$63M+" },
      { label: "Projects Funded", value: "3,700+" },
      { label: "Founded", value: "2017" },
      { label: "Role", value: "Design + Code" },
      { label: "Stack", value: "Next.js + Three.js" },
    ],
  },
  {
    slug: "passport",
    title: "Passport",
    description:
      "A digital identity aggregator for proving humanity through user-controlled Web2, Web3, and physical stamps.",
    href: "https://app.passport.xyz/",
    heroImageSrc: "/images/passport.png",
    heroImageAlt:
      "Passport interface artwork showing identity verification and scoring.",
    tags: ["UI/UX", "Identity", "Sybil Resistance"],
    year: "2025",
    featured: true,
    heroLabel:
      "Digital identity aggregation for privacy-first proof of humanity, Sybil resistance, and partner verification.",
    challenge:
      "Identity in Web3 was scattered across platforms, while bad actors and bots made fair funding, participation, and governance harder. Existing verification methods each provided only part of the picture: some prioritized privacy, others accuracy, and others convenience. The core question was how to prove someone is human on the internet without revealing important personal information.",
    process: [
      {
        title: "Setup",
        description:
          "I led the design of a privacy-first identity aggregator over 13 months. The team included four engineers, two data scientists, a product manager, a product lead, and me. I owned the design system, visual language, UX architecture, research, prototyping, and interface design.",
        details: [
          "The work laid the foundation for the product's evolution, and later acquisition, from Gitcoin Passport to Human Passport. The core functionality remained the same while the product was reskinned.",
        ],
        media: [
          {
            type: "video",
            src: "/case_studies/01_start_passport.mov",
            caption:
              "The Passport entry flow introduces the idea of assembling proof through modular stamps.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Problem",
        description:
          "Scattered identity across platforms increased the number of bad actors and bots, making fair funding, participation, and governance harder. Existing verification methods each provided only part of the picture, so the product needed to combine multiple independent signals into a single identity model.",
      },
      {
        title: "Solution",
        description:
          "For users, Passport aggregated digital identity into a single score. The user decided how to show they were human by verifying stamps that together formed a passport, ranging from ID verification and social platforms to blockchain activity.",
        details: [
          "For partners, Passport helped determine whether an account represented a real, trustworthy participant. It kept bots out of communities and helped partners create more trustworthy experiences.",
        ],
        media: [
          {
            type: "image",
            src: "/case_studies/web2.png",
            alt: "Passport stamp selection for Web2 identity sources.",
            caption:
              "Web2 and platform-based stamps expanded the trust model beyond wallet activity.",
            aspectRatio: "landscape",
          },
          {
            type: "image",
            src: "/case_studies/web3.png",
            alt: "Passport stamp selection for Web3 and blockchain credentials.",
            caption:
              "Blockchain-native stamps translated wallet history and ecosystem participation into scoreable signals.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Why a Score?",
        description:
          "Why not a pass/reject or yes/no model? Because you can never say with 100% confidence that someone is or is not human on the internet. Digital identity is probabilistic rather than absolute, and no single verification can clearly prove humanity.",
        details: [
          "We designed Passport around a cumulative Humanity Score, allowing multiple independent signals to contribute toward an overall confidence level. This gave users multiple paths to qualify while allowing partners to choose thresholds appropriate for their own risk tolerance.",
        ],
        media: [
          {
            type: "image",
            src: "/case_studies/why-score.png",
            alt: "Passport Unique Humanity Score cards showing score updates.",
            caption:
              "The Humanity Score gave users a visible, cumulative trust signal instead of a binary pass or fail state.",
            aspectRatio: "portrait",
            presentation: "transparent",
            size: "small",
          },
        ],
      },
      {
        title: "Stamps",
        description:
          "Stamp categories covered social media, blockchain, and government verification so the product could support most needs and use cases without overwhelming users. The information architecture grouped stamps instead of presenting every option in one long list.",
        details: [
          "Every stamp visibly communicated one of three states: verified, expired, or needs update. Rather than hiding expiration dates in details, the UI made trust state and maintenance visible.",
          "Stamp details opened in a sidebar with clear data on cost, time requirements, points gained, points left, expiration timing, and credential breakdowns.",
        ],
        media: [
          {
            type: "video",
            src: "/case_studies/eth_stamp.mov",
            caption:
              "The ETH stamp flow shows how individual credential details and verification states are handled without leaving the main product surface.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Passport Embed",
        description:
          "Clients wanted to verify users without redirecting them away from their own products. The embedded flow needed to preserve Passport's trust model while feeling native to each partner interface.",
        details: [
          "I designed an embeddable verification flow that eliminated context switching, so partners could run trust checks inside their own product surfaces.",
        ],
        media: [
          {
            type: "image",
            src: "/case_studies/embed.png",
            alt: "Passport embed verification cards over a geometric cube pattern.",
            caption:
              "The embedded verification flow let partners run Passport checks inside their own product surfaces.",
            aspectRatio: "square",
            fit: "contain",
            presentation: "transparent",
          },
        ],
      },
      {
        title: "Privacy & Security",
        description:
          "Passport used privacy-first verification patterns, including one-way hashed data, zero-knowledge proofs, and threshold cryptography with keys split between multiple parties.",
        details: [
          "Security was designed to evolve. The model constantly adapted by comparing transaction history against known bot behavior.",
          "Because users were asked to trust a privacy-preserving identity system, we exposed the stored passport as downloadable JSON rather than hiding implementation details. That improved transparency without requiring users to understand cryptography.",
        ],
      },
    ],
    outcome:
      "The result was a privacy-first identity aggregator that unified trust signals into a user-controlled dashboard, gave partners a flexible verification layer, and helped lay the foundation for Gitcoin Passport's evolution into Human Passport.",
    metrics: [
      { label: "Human Passports", value: "2M+" },
      { label: "Ecosystem Partners", value: "120+" },
      { label: "Credentials", value: "43M+" },
      { label: "Secured Public Goods Matching Pools", value: "$25M+" },
      { label: "In Airdrops Secured Against Sybils", value: "$512M+" },
    ],
  },
]);

export const experiments: ExperimentItem[] = [
  {
    slug: "chladni-particles",
    title: "Gitcoin Brand Asset Generator",
    year: "2026",
    format: "Generative Art",
    description:
      "A particle-based simulation of Chladni figures where motion reacts to an energy field and resolves into resonant patterns.",
    previewImageSrc: "/images/chladni.png",
    previewImageAlt: "Gitcoin brand asset generator artwork.",
    heroLabel:
      "Three.js particles drifting toward resonance fields to mimic Chladni plate behavior.",
    href: "https://octaviaan.github.io/Chladni-Particles/",
    repo: "https://github.com/octaviaan/Chladni-Particles",
    cta: "Open live experiment",
    stack: ["JavaScript", "Three.js", "Generative Systems"],
    overview:
      "This experiment translates physical resonance patterns into a browser-native particle simulation. The goal was to build something that feels scientific at first glance but remains visually poetic when left running.",
    notes: [
      "Particles react to an energy field instead of following a fixed path, which gives the output more tension and unpredictability.",
      "The visual structure is sparse on purpose so the motion carries the experience rather than decorative UI.",
      "It works as both a technical study and a visual texture generator for future motion references.",
    ],
  },
  {
    slug: "dithering-effect-svg",
    title: "Dithering Effect to SVG",
    year: "2025",
    format: "Image Tool",
    description:
      "An image uploader that applies multiple dithering algorithms and exports the result as both PNG and SVG.",
    previewImageSrc: "/images/dithering.jpg",
    previewImageAlt:
      "Dithered wildlife artwork rendered in a warm orange palette.",
    heroLabel:
      "Raster-to-vector image processing with export-ready dithered outputs.",
    href: "https://octaviaan.github.io/dithering-effect-svg/",
    repo: "https://github.com/octaviaan/dithering-effect-svg",
    cta: "Try the converter",
    stack: ["JavaScript", "SVG Export", "Image Processing"],
    overview:
      "Built as a compact image-processing tool for turning flat source images into stylized outputs. It focuses on keeping the controls simple while still exposing multiple dithering behaviors and export formats.",
    notes: [
      "The interesting part is not just the effect itself but the ability to export a crisp SVG version for print or motion workflows.",
      "The interface keeps the transformation tight and fast: upload, tune, compare, export.",
      "It sits in the overlap between utility software and visual experimentation.",
    ],
  },
  {
    slug: "ascii-art-gen",
    title: "ASCII Art Gen",
    year: "2025",
    format: "Image Tool",
    description:
      "A browser-based ASCII generator that turns uploaded images into text-driven compositions.",
    previewImageSrc: "/images/ascii-art.png",
    previewImageAlt:
      "A floral image transformed into a soft, colorful ASCII composition.",
    heroLabel:
      "Uploaded imagery translated into text-density compositions inside the browser.",
    href: "https://octaviaan.github.io/ascii-art-gen/",
    repo: "https://github.com/octaviaan/ascii-art-gen",
    cta: "Generate ASCII",
    stack: ["JavaScript", "Typography", "Image Processing"],
    overview:
      "This project explores how far image reduction can go before it becomes its own design language. The tool converts uploaded images into text-based compositions that feel somewhere between code, poster design, and compression artifact.",
    notes: [
      "The output is intentionally graphic rather than purely faithful to the source image.",
      "Character density becomes the core control surface, which makes typography do the rendering work.",
      "It is useful both as a playful generator and as a reference for editorial-style visual systems.",
    ],
  },
];
