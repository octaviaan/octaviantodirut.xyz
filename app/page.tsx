import Link from "next/link";

import { HeroPortrait } from "@/components/hero-portrait";
import { IntroVideoButton } from "@/components/intro-video-button";
import { profile } from "@/lib/content";

const productPortfolioPdfUrl = "/octa-product-portfolio.pdf";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* HERO */}
      <section id="about" className="section wrap wide hero">
        <div className="hero-grid">
          <div className="reveal hero-lead">
            <h1 className="display">
              I move between product logic,{" "}
              <span className="mark">visual systems</span>, and the small
              details.
            </h1>
            <p className="body hero-about">
              Senior Product and Visual Designer with 15+ years of experience of
              which 6+ years in Web3 and beyond, leading end-to-end product
              design across identity and governance. I love simple and elegant
              solutions to complex problems. I bring a unique blend of attention
              for the user, simplicity and love for the visual craft now with AI
              tools as the brush that blends the two, some tools built by me.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/case-studies">
                View case studies
              </Link>
              <IntroVideoButton className="btn btn-secondary" />
            </div>
          </div>

          <HeroPortrait />

          <div className="contact-links hero-socials">
            <a
              className="text-link-external"
              href="https://www.figma.com/proto/JLrOm2x3UF791cQKeZxupW/octa-product-portfolio?node-id=688-6030&p=f&t=wF4Pmwt57Rukxo1v-0&scaling=contain&content-scaling=fixed&starting-point-node-id=688%3A6030&page-id=0%3A1"
              target="_blank"
              rel="noopener"
            >
              Figma Prototype
            </a>
            <a
              className="text-link-external"
              href={productPortfolioPdfUrl}
              target="_blank"
              rel="noopener"
            >
              PDF Portfolio
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={profile.x} target="_blank" rel="noopener">
              X
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </section>

    </div>
  );
}
