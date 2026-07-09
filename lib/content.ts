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
  github: "https://github.com/octaviaan",
  print: "https://cargocollective.com/octaviaan",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About me" },
  { href: "/#work", label: "Case Studies" },
  { href: "/#experiments", label: "AI Experiments" },
  { href: "/#contact", label: "Contact" },
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
      "A privacy-first identity hub for proving humanity through Web2 and Web3 stamps, designed for Sybil resistance without exposing sensitive personal data.",
    href: "https://app.passport.xyz/",
    heroImageSrc: "/images/passport.png",
    heroImageAlt:
      "Passport interface artwork showing identity verification and scoring.",
    tags: ["UI/UX", "Identity", "Sybil Resistance"],
    year: "2025",
    featured: true,
    heroLabel:
      "Empowering decentralized identity and Sybil resistance through a user-controlled proof-of-humanity system.",
    challenge:
      "Identity in Web3 was scattered across wallets, platforms, and communities. Bad actors and bots made fair funding and governance harder, while many proof-of-personhood approaches created uncomfortable privacy tradeoffs. As Product Designer for Gitcoin Passport, I worked on a product that could bring identity and proof of humanity into one understandable place while keeping users in control of what they shared.",
    process: [
      {
        title: "Premise",
        description:
          "Gitcoin Passport, now Human Passport, needed to balance robust Sybil resistance with user privacy. The product had to help people prove humanity without asking them to expose a single sensitive identity source, and it had to make that tradeoff clear enough for everyday crypto users.",
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
          "Trust signals were fragmented across onchain history, social accounts, professional platforms, and verification providers. For funding rounds and governance systems, that fragmentation made it difficult to separate real participants from coordinated Sybil behavior without pushing users toward invasive identity checks.",
      },
      {
        title: "Solution: Stamps as User Choice",
        description:
          "I structured Passport around stamps: discrete proofs that users could choose and verify across Web2 and Web3. Instead of one mandatory identity path, people could build a passport from signals that matched their comfort level, turning scattered identity markers into one coherent trust profile.",
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
        title: "Humanity Score",
        description:
          "The interface centered on a humanity score so users could understand progress at a glance. Getting to a passing score became a clear product goal: verify enough stamps across categories to unlock stronger credibility for funding, governance, eligibility, and ecosystem participation.",
      },
      {
        title: "Stamp Details and Verification States",
        description:
          "Stamp details opened in a sidebar, keeping the user in context while exposing the practical information they needed: what the stamp checks, how many points it can add, what work is required, and whether it is verified, expired, or ready to update.",
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
        title: "Minting Passport Onchain",
        description:
          "Once a user reached a passing score, the product introduced a minting moment: a way to turn reputation into an onchain passport. This created a stronger finish to the journey while preserving the larger idea that the passport is assembled by the user, not imposed on them.",
        media: [
          {
            type: "image",
            src: "/case_studies/03_stamp_credentials.png",
            alt: "Passport credential details and stamp progress interface.",
            caption:
              "Credential details, progress states, and the passing-score threshold made the proof model easier to understand at a glance.",
            aspectRatio: "landscape",
          },
        ],
      },
    ],
    outcome:
      "The result was a privacy-first verification product that unified identity signals into a user-controlled dashboard, made trust and status easier to understand, and helped lay the foundation for Gitcoin Passport's evolution into Human Passport.",
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
      "Launch design for Gitcoin's GTC rollout and Quadratic Lands campaign, turning a token drop into an entry point for governance and public-goods ownership.",
    href: "https://www.quadraticlands.com/",
    heroImageSrc: "/images/gtc.png",
    heroImageAlt: "Gitcoin token launch artwork for the GTC campaign.",
    tags: ["Launch", "Governance", "Web3"],
    year: "2021",
    featured: true,
    heroLabel:
      "The 01 case study: campaign storytelling, governance onboarding, and launch surfaces for Gitcoin's shift toward community ownership.",
    challenge:
      "Gitcoin needed to launch GTC without reducing the story to token speculation. The experience had to explain why governance mattered, connect the drop to Gitcoin's public-goods mission, and help eligible users understand their role in the ecosystem's next chapter.",
    process: [
      {
        title: "Launch Context",
        description:
          "The token launch marked Gitcoin's move toward DAO governance. The design challenge was to make that shift feel like an invitation into stewardship, not just a claim mechanic or market event.",
      },
      {
        title: "Quadratic Lands Narrative",
        description:
          "Built the launch narrative around Quadratic Lands, a campaign world that tied GTC back to Gitcoin's core belief in funding digital public goods. The visuals gave the launch a memorable identity while keeping the story rooted in coordination, community ownership, and public value.",
        media: [
          {
            type: "image",
            src: "/images/gtc.png",
            alt: "Gitcoin Token Launch and Quadratic Lands campaign artwork.",
            caption:
              "The campaign artwork framed GTC as a governance and public-goods story, not only a token claim.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Governance Onboarding",
        description:
          "Translated governance concepts into clearer campaign messaging and onboarding moments. The goal was to help users understand what GTC unlocked: participation, delegation, treasury stewardship, and a larger say in how Gitcoin funds open-source and public-goods work.",
      },
      {
        title: "Claim and Campaign Surfaces",
        description:
          "Designed launch surfaces that balanced excitement with explanation, so eligible users could move from announcement to claim to governance context with less friction. Each surface had to carry the same campaign logic: this is not only a token, it is a role in the network.",
        media: [
          {
            type: "image",
            src: "/images/gitcoin-3.jpg",
            alt: "Gitcoin ecosystem artwork used as supporting campaign imagery.",
            caption:
              "Supporting surfaces kept the launch connected to Gitcoin's wider public-goods ecosystem.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Community Ownership",
        description:
          "Framed the post-claim state around participation rather than completion. The launch needed to point users toward the DAO, make governance feel active, and reinforce that GTC was a coordination layer for the people funding and building public goods.",
      },
    ],
    outcome:
      "The launch gave GTC a clearer public-facing story: not just an airdrop, but a transition into governance, community ownership, and shared responsibility for Gitcoin's public-goods ecosystem.",
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
