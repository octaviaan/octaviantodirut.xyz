import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const schellingLinks = [
  {
    label: "Bogota",
    href: "https://cristinalare.github.io/schelling-point-bogota/",
  },
  {
    label: "Amsterdam",
    href: "https://cristinalare.github.io/schelling-point-amsterdam/",
  },
  {
    label: "Denver",
    href: "https://cristinalare.github.io/schelling_point_denver2/",
  },
];

export default function SchellingPointPage() {
  return (
    <article className="selected-detail">
      <section className="section wrap wide selected-detail-hero">
        <div className="selected-detail-copy reveal">
          <Link className="text-link" href="/#selected-works">
            <span className="arr">←</span> Selected Works
          </Link>
          <p className="eyebrow">Selected Work</p>
          <h1 className="display balance">Schelling Point</h1>
          <p className="lede">
            Led brand and visual design for a series of conferences revolving
            around human coordination. Check the links below to explore them.
          </p>
          <div className="selected-detail-actions">
            {schellingLinks.map((link) => (
              <a
                key={link.href}
                className="btn btn-secondary"
                href={link.href}
                target="_blank"
                rel="noopener"
              >
                {link.label}
                <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap wide">
        <figure className="selected-detail-image reveal">
          <a
            href="/case_studies/schelling-point-system.png"
            target="_blank"
            rel="noopener"
            aria-label="Open Schelling Point image full size"
          >
            <Image
              src="/case_studies/schelling-point-system.png"
              alt="Schelling Point visual design system with palette, 3D forms, and generative graphics."
              width={1920}
              height={1080}
              priority
            />
          </a>
        </figure>
      </section>
    </article>
  );
}
