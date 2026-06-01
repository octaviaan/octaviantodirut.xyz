import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ChladniCanvas } from "@/components/chladni-canvas";

export const metadata: Metadata = {
  title: "Experiments",
  description: "Selected generators and image tools from the public experiment archive.",
};

export default function ExperimentsPage() {
  return (
    <section className="section wrap wide">
      <div className="reveal ex-intro">
        <p className="eyebrow">Experiments — Public Archive</p>
        <h1 className="display balance">
          Generators and tools worth <em>opening</em>.
        </h1>
        <p className="lede balance" style={{ maxWidth: "52ch" }}>
          Small browser-native studies that sit in the overlap between utility software and visual experimentation. Each one is live, and most ship with source.
        </p>
      </div>

      <div className="ex-grid">
        <article className="reveal ex-card">
          <div className="ex-top">
            <span>Generative Art</span>
            <span>2026</span>
          </div>
          <h2 className="h3 serif">Chladni Particles</h2>
          <p className="body">
            A particle simulation of Chladni figures where motion reacts to an energy field and resolves into resonant patterns — scientific at a glance, poetic when left running.
          </p>
          <div className="ex-art frame">
            <Image
              src="/images/chladni.png"
              alt="Chladni particles artwork"
              width={800}
              height={500}
            />
          </div>
          <div className="ex-stack">
            <span className="chip">JavaScript</span>
            <span className="chip">Three.js</span>
            <span className="chip">Generative Systems</span>
          </div>
          <div className="ex-actions">
            <a
              className="btn btn-primary btn-sm"
              href="https://octaviaan.github.io/Chladni-Particles/"
              target="_blank"
              rel="noopener"
            >
              Open live <span className="arr">↗</span>
            </a>
            <a
              className="btn btn-ghost btn-sm"
              href="https://github.com/octaviaan/Chladni-Particles"
              target="_blank"
              rel="noopener"
            >
              GitHub repo
            </a>
          </div>
        </article>

        <article className="reveal ex-card" style={{ transitionDelay: ".06s" }}>
          <div className="ex-top">
            <span>Image Tool</span>
            <span>2025</span>
          </div>
          <h2 className="h3 serif">Dithering Effect SVG</h2>
          <p className="body">
            An image uploader that applies multiple dithering algorithms and exports the result as both PNG and crisp SVG — upload, tune, compare, export.
          </p>
          <div className="ex-art frame">
            <Image
              src="/images/dithering.jpg"
              alt="Dithered wildlife artwork"
              width={800}
              height={500}
            />
          </div>
          <div className="ex-stack">
            <span className="chip">JavaScript</span>
            <span className="chip">SVG Export</span>
            <span className="chip">Image Processing</span>
          </div>
          <div className="ex-actions">
            <a
              className="btn btn-primary btn-sm"
              href="https://octaviaan.github.io/dithering-effect-svg/"
              target="_blank"
              rel="noopener"
            >
              Try it <span className="arr">↗</span>
            </a>
            <a
              className="btn btn-ghost btn-sm"
              href="https://github.com/octaviaan/dithering-effect-svg"
              target="_blank"
              rel="noopener"
            >
              GitHub repo
            </a>
          </div>
        </article>

        <article className="reveal ex-card" style={{ transitionDelay: ".12s" }}>
          <div className="ex-top">
            <span>Image Tool</span>
            <span>2025</span>
          </div>
          <h2 className="h3 serif">ASCII Art Gen</h2>
          <p className="body">
            A browser-based ASCII generator that turns uploaded images into text-driven compositions — somewhere between code, poster design, and compression artifact.
          </p>
          <div className="ex-art-canvas">
            <ChladniCanvas variant="card" noWrapper />
          </div>
          <div className="ex-stack">
            <span className="chip">JavaScript</span>
            <span className="chip">Typography</span>
            <span className="chip">Image Processing</span>
          </div>
          <div className="ex-actions">
            <a
              className="btn btn-primary btn-sm"
              href="https://octaviaan.github.io/ascii-art-gen/"
              target="_blank"
              rel="noopener"
            >
              Generate <span className="arr">↗</span>
            </a>
            <a
              className="btn btn-ghost btn-sm"
              href="https://github.com/octaviaan/ascii-art-gen"
              target="_blank"
              rel="noopener"
            >
              GitHub repo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
