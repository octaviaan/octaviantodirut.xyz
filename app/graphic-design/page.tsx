import { ExternalLink } from "lucide-react";

const graphicPortfolioUrl =
  "https://www.figma.com/proto/SQmTkWyYG5RaxF1FQ2Tw63/octa-graphic-portfolio?node-id=4012-2741&viewport=119%2C196%2C0.35&t=jvqUS1TZTpb6Wewq-1&scaling=contain&content-scaling=fixed&starting-point-node-id=4012%3A2741&page-id=0%3A1";
const graphicPortfolioPdfUrl = "/octa-graphic-portfolio.pdf";

export const metadata = { title: "Graphic Design Portfolio" };

export default function GraphicDesignPage() {
  return (
    <section className="section wrap wide section-screen final-portfolio-cta">
      <div className="reveal final-portfolio-inner">
        <h1 className="h2 balance">
          Check my <span className="mark">graphic design</span> portfolio
        </h1>
        <div className="final-portfolio-actions">
          <a
            className="btn btn-primary"
            href={graphicPortfolioUrl}
            target="_blank"
            rel="noopener"
          >
            Figma prototype
            <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
          </a>
          <a
            className="btn btn-secondary"
            href={graphicPortfolioPdfUrl}
            target="_blank"
            rel="noopener"
          >
            PDF portfolio
            <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
