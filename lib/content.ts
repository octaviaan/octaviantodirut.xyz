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
  email: "hello@octaviantodirut.com",
  linkedin: "https://www.linkedin.com/in/octaviantodirut",
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
      "A full brand and web refresh for Gitcoin's move from a grants platform into a broader funding network, paired with a generative asset tool for consistent campaign visuals.",
    href: "https://gitcoin.co/",
    links: [
      { label: "Visit Gitcoin", href: "https://gitcoin.co/" },
      { label: "Open asset generator", href: "https://gitcoin.co/generator" },
    ],
    heroImageSrc: "/images/gitcoin-3.jpg",
    heroImageAlt: "Gitcoin 3.0 brand artwork with Fund What Matters messaging.",
    tags: ["Brand", "Website", "Generative Tool"],
    year: "2026",
    featured: true,
    heroLabel:
      "A sharper public identity for Gitcoin 3.0: funding intelligence, mechanism pluralism, and generative brand assets.",
    challenge:
      "Gitcoin was evolving beyond a single grants product into a network for Ethereum public goods funding: a place to discover mechanisms, compare programs, study outcomes, and coordinate capital. The brand needed to explain that shift without losing Gitcoin's public goods roots, while the day-to-day content engine needed a faster way to create visuals that still felt unmistakably Gitcoin.",
    process: [
      {
        title: "Reframing the Public Story",
        description:
          "Repositioned the site around the line Fund What Matters and a clearer editorial architecture: campaigns, research, apps, mechanisms, and case studies. The goal was to make Gitcoin feel less like a product landing page and more like the trusted reference layer for Ethereum funding.",
      },
      {
        title: "A System for Funding Intelligence",
        description:
          "Structured the visual language around dense, searchable knowledge surfaces, restrained dark UI, high-contrast teal accents, and a stronger typographic hierarchy. This gave the brand enough authority for reports and case studies while keeping enough energy for campaigns and community moments.",
        media: [
          {
            type: "image",
            src: "/case_studies/gitcoin-chladni-1.png",
            alt: "Cellular Gitcoin brand background generated from the new asset system.",
            caption:
              "The rebrand introduced generative textures that could flex across editorial, campaign, and social formats.",
            aspectRatio: "landscape",
          },
          {
            type: "image",
            src: "/case_studies/gitcoin-chladni-2.png",
            alt: "Circular Gitcoin brand background generated from the new asset system.",
            caption:
              "A family of Chladni-inspired backgrounds gave the system recognizable variation without relying on one static key visual.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Brand Asset Generator",
        description:
          "Built a Three.js Chladni plate generator so the team could create Gitcoin-aligned visuals in seconds. Instead of treating the brand system as a fixed asset folder, the generator turned the visual language into a reusable production tool.",
        media: [
          {
            type: "image",
            src: "/case_studies/gitcoin-chladni-3.png",
            alt: "Organic Gitcoin brand background generated from the asset generator.",
            caption:
              "The generator made brand consistency practical for fast-moving grants, research, and ecosystem communications.",
            aspectRatio: "landscape",
          },
        ],
      },
      {
        title: "Connecting Brand to Gitcoin 3.0",
        description:
          "Aligned the identity with the Gitcoin 3.0 transition: plural funding mechanisms, community-operated rounds, and a broader grants network. The brand system had to support both institutional credibility and experimental mechanism design.",
      },
    ],
    outcome:
      "The rebrand gave Gitcoin a more mature public face for its 3.0 era, turning the website into a funding reference library and the asset generator into a practical tool for producing consistent campaign, research, and ecosystem visuals.",
    metrics: [
      { label: "Funding Distributed", value: "$60M+" },
      { label: "Funding Rounds", value: "230+" },
      { label: "Unique Donations", value: "5M+" },
      { label: "Projects Funded", value: "3,715" },
      { label: "Brand Tool", value: "1 generator" },
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
