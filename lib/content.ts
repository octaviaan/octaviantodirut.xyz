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
};

export type CaseStudyStep = {
  label?: string;
  title?: string;
  description: string;
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
  title: "Product & Visual Designer",
  tagline:
    "I design digital products with cinematic clarity and sharp commercial focus.",
  intro:
    "Independent designer crafting interfaces, systems, and brand moments for ambitious teams across product, Web3, and culture.",
  email: "octaviantodirut@gmail.com",
  linkedin: "https://www.linkedin.com/in/octanaiv/",
  x: "https://x.com/b1rdf1sh",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/experiments", label: "Experiments" },
  { href: "/design-system", label: "Design System" },
  { href: "/contact", label: "Contact" },
];

export const caseStudies: CaseStudy[] = [
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
      { label: "Open asset generator", href: "https://gitcoin.co/generator" },
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
    title: "Passport XYZ",
    description:
      "A privacy-first identity hub designed to help people prove their humanity and resist Sybil attacks without exposing sensitive personal data.",
    href: "https://app.passport.xyz/",
    heroImageSrc: "/images/passport.png",
    heroImageAlt:
      "Passport XYZ interface artwork showing identity verification and scoring.",
    tags: ["Product", "Identity", "Sybil Resistance"],
    year: "2025",
    featured: true,
    heroLabel:
      "A modular trust layer for proving humanity across Web2 and Web3 signals.",
    challenge:
      "In Web3, trust was fragmented across wallets, platforms, and communities, which made it difficult to distinguish real participants from bots and coordinated Sybil behavior. The challenge was to design a product that could aggregate proof of humanity into one clear system while staying privacy-first and understandable for everyday users.",
    process: [
      {
        title: "A Modular Trust Layer",
        description:
          "Designed a modular dashboard where users choose how they show they are human by collecting and verifying individual Stamps, turning scattered identity markers into one coherent trust profile.",
        media: [
          {
            type: "video",
            src: "/case_studies/01_start_passport.mov",
            caption:
              "Entry into the Passport experience, where users begin assembling proof through modular Stamps.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "The Unique Humanity Score",
        description:
          "Structured the experience around a central Unique Humanity Score built from four stamp categories: Blockchain & Crypto Networks, Government IDs, Social & Professional Platforms, and Biometric Verification. This gave users a clearer mental model for how different proofs contributed to their score and credibility.",
        media: [
          {
            type: "image",
            src: "/case_studies/web2.png",
            alt: "Passport stamp selection for Web2 identity sources.",
            caption:
              "Web2 and platform-based credentials expanded the trust model beyond onchain activity alone.",
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
        title: "Transparent Verification Details",
        description:
          "Used a sidebar-driven information architecture to make each verification step legible, with clear guidance on time, effort, cost, points gained, and whether a Stamp was verified, expired, or needed an update.",
        media: [
          {
            type: "video",
            src: "/case_studies/eth_stamp.mov",
            caption:
              "The ETH stamp flow showed how individual credential details and verification states were surfaced inside the product.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Thresholds, Titles, and Minting",
        description:
          "Added stronger incentive loops through score thresholds, program eligibility, activity-based titles like ETH Enthusiast and ETH Pioneer, and a final minting flow that turns reputation into an onchain asset.",
      },
    ],
    outcome:
      "The result was a privacy-first verification product that unified identity signals into a user-controlled dashboard, made trust and status easier to understand, and helped lay the foundation for Passport XYZ's evolution into Human Passport.",
    metrics: [
      { label: "Human Passports", value: "2M+" },
      { label: "Ecosystem Partners", value: "120+" },
      { label: "Credentials", value: "43M+" },
      { label: "Secured Public Goods Matching Pools", value: "$25M+" },
      { label: "In Airdrops Secured Against Sybils", value: "$512M+" },
    ],
  },
  {
    slug: "gitcoin-token-launch",
    title: "Gitcoin Token Launch",
    description:
      "Launch design for Gitcoin's GTC rollout and the Quadratic Lands campaign that framed its move toward DAO governance.",
    href: "https://www.quadraticlands.com/",
    heroImageSrc: "/images/gtc.png",
    heroImageAlt: "Gitcoin token launch artwork for the GTC campaign.",
    tags: ["Launch", "Governance", "Web3"],
    year: "2021",
    featured: true,
    heroLabel:
      "Token launch storytelling, governance onboarding, and campaign surfaces for the Quadratic Lands rollout.",
    challenge:
      "Gitcoin needed a launch experience that could explain GTC, signal the shift toward community governance, and help thousands of eligible users understand why the token mattered beyond speculation.",
    process: [
      {
        description:
          "Built the launch narrative around Quadratic Lands, connecting the token drop to Gitcoin's broader mission of funding digital public goods.",
      },
      {
        description:
          "Translated governance concepts into clearer campaign messaging, onboarding moments, and visual structures that made decentralization feel participatory rather than abstract.",
      },
      {
        description:
          "Designed supporting surfaces that balanced hype with explanation so users could move from announcement to claim and governance context with less friction.",
      },
    ],
    outcome:
      "The launch gave Gitcoin a sharper public-facing story for GTC and helped frame the token as an entry point into governance, community ownership, and the next chapter of the ecosystem.",
    metrics: [
      { label: "Eligible users", value: "25,500" },
      { label: "Airdrop allocation", value: "15M GTC" },
      { label: "DAO treasury", value: "50M GTC" },
    ],
  },
];

export const experiments: ExperimentItem[] = [
  {
    slug: "chladni-particles",
    title: "Chladni Particles",
    year: "2026",
    format: "Generative Art",
    description:
      "A particle-based simulation of Chladni figures where motion reacts to an energy field and resolves into resonant patterns.",
    previewImageSrc: "/images/chladni.png",
    previewImageAlt: "Chladni Particles artwork.",
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
    title: "Dithering Effect SVG",
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
