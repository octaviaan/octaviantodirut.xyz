import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <section id="work" className="section wrap wide section-screen">
      <div className="reveal sec-head case-studies-head">
        <h1 className="h2 balance">
          Case studies built to show the{" "}
          <span className="mark">thinking</span> , not just the finish.
        </h1>
      </div>

      <div className="work-feature-stack">
        <Link className="reveal feat" href="/case-studies/passport">
          <div className="feat-art">
            <Image
              src="/images/passport.png"
              alt="Passport identity interface"
              fill
              sizes="(min-width: 1180px) 42vw, (min-width: 760px) 88vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="feat-body">
            <h2 className="h2 serif">Passport</h2>
            <p className="body" style={{ maxWidth: "54ch" }}>
              A privacy-first identity hub for proving humanity through Web2
              and Web3 stamps — unifying scattered identity signals into one
              user-controlled trust profile.
            </p>
            <span className="text-link">
              Read the case study <span className="arr">→</span>
            </span>
          </div>
        </Link>

        <Link
          className="reveal feat"
          href="/case-studies/gitcoin-3-rebrand"
          style={{ transitionDelay: ".06s" }}
        >
          <div className="feat-art">
            <Image
              src="/images/chladni-feature.png"
              alt="Chladni generative pattern from the asset generator"
              fill
              sizes="(min-width: 1180px) 42vw, (min-width: 760px) 88vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="feat-body">
            <h2 className="h2 serif">Gitcoin 3.0</h2>
            <p className="body" style={{ maxWidth: "54ch" }}>
              Product strategy & platform repositioning for a decentralized
              funding platform.
            </p>
            <span className="text-link">
              Read the case study <span className="arr">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
