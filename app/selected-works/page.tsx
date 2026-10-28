import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Selected Works" };

export default function SelectedWorksPage() {
  return (
    <section id="selected-works" className="section wrap wide section-screen">
      <div className="reveal sec-head">
        <h1 className="h2 balance">
          Additional work across <span className="mark">product</span>, visual
          and brand.
        </h1>
      </div>

      <div className="selected-work-grid">
        <Link
          className="reveal selected-work-card"
          href="/selected-works/schelling-point"
        >
          <div className="selected-work-art">
            <Image
              src="/images/schelling-cover.jpg"
              alt="Schelling Point brand and product artwork"
              fill
              sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="selected-work-body">
            <h2 className="h3 serif">Schelling Point</h2>
            <p className="body">
              A series of conferences revolving around human coordination.
            </p>
            <span className="text-link">
              Read more <span className="arr">→</span>
            </span>
          </div>
        </Link>

        <a
          className="reveal selected-work-card"
          href="https://quadraticlands.com/"
          target="_blank"
          rel="noopener"
          style={{ transitionDelay: ".06s" }}
        >
          <div className="selected-work-art">
            <Image
              src="/images/gtc.png"
              alt="Gitcoin DAO and GTC Quadratic Lands campaign artwork"
              fill
              sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="selected-work-body">
            <h2 className="h3 serif">Gitcoin DAO / GTC</h2>
            <p className="body">
              Campaign and launch work for Gitcoin's DAO transition, GTC, and
              the Quadratic Lands experience.
            </p>
            <span className="text-link text-link-external">
              Visit work{" "}
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
            </span>
          </div>
        </a>

        <a
          className="reveal selected-work-card"
          href="https://cristinalare.github.io/pluriverse.wtf/"
          target="_blank"
          rel="noopener"
          style={{ transitionDelay: ".12s" }}
        >
          <div className="selected-work-art">
            <Image
              src="/images/pluri.jpg"
              alt="Pluriverse website artwork"
              fill
              sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="selected-work-body">
            <h2 className="h3 serif">Pluriverse</h2>
            <p className="body">
              Website and visual direction for a series of comic books.
              Created a pdf guide for the comic book universe.
            </p>
            <span className="text-link text-link-external">
              Visit work{" "}
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
            </span>
          </div>
        </a>

        <a
          className="reveal selected-work-card"
          href="https://www.aligneth.xyz/"
          target="_blank"
          rel="noopener"
          style={{ transitionDelay: ".18s" }}
        >
          <div className="selected-work-art">
            <Image
              src="/images/aligneth-preview.png"
              alt="AlignETH website artwork about solving alignment with Ethereum"
              fill
              sizes="(min-width: 1180px) 28vw, (min-width: 760px) 44vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="selected-work-body">
            <h2 className="h3 serif">AlignETH</h2>
            <p className="body">
              Website and visual system exploring how Ethereum can help solve
              alignment problems and multipolar traps.
            </p>
            <span className="text-link text-link-external">
              Visit work{" "}
              <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
