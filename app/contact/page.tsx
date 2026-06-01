import type { Metadata } from "next";
import Link from "next/link";

import { profile } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's talk. Product and visual design for ambitious teams.",
};

export default function ContactPage() {
  return (
    <section className="section wrap wide">
      <div className="ct-grid">
        <div className="reveal ct-lead">
          <p className="eyebrow">Open to select work — Remote / Europe</p>
          <h1 className="display balance">
            Let&apos;s build something with <em>clarity</em>.
          </h1>
          <p className="lede balance" style={{ maxWidth: "46ch" }}>
            Tell me about the product, the team, and the timeline. I take on a small number of engagements where design can move the business — brand, product, and the systems that hold them together.
          </p>

          <div className="ct-contacts">
            <a className="ct-link" href={`mailto:${profile.email}`}>
              <span className="eyebrow muted">Email</span>
              <span className="ct-v serif">{profile.email}</span>
            </a>
            <a
              className="ct-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener"
            >
              <span className="eyebrow muted">LinkedIn</span>
              <span className="ct-v serif">
                in/octanaiv <span className="arr mono">↗</span>
              </span>
            </a>
            <a
              className="ct-link"
              href={profile.x}
              target="_blank"
              rel="noopener"
            >
              <span className="eyebrow muted">X</span>
              <span className="ct-v serif">
                @b1rdf1sh <span className="arr mono">↗</span>
              </span>
            </a>
          </div>
        </div>

        <aside className="reveal ct-side panel" style={{ transitionDelay: ".06s" }}>
          <p className="eyebrow">How I can help</p>
          <ul className="ct-list">
            <li>
              <span className="ct-i">01</span>
              <div>
                <h3 className="serif">Product design</h3>
                <p className="body">End-to-end interface design for complex products — flows, systems, and the details that make them feel inevitable.</p>
              </div>
            </li>
            <li>
              <span className="ct-i">02</span>
              <div>
                <h3 className="serif">Brand &amp; identity</h3>
                <p className="body">Voice, mark, palette, and the cinematic moments that give a product a point of view.</p>
              </div>
            </li>
            <li>
              <span className="ct-i">03</span>
              <div>
                <h3 className="serif">Design systems</h3>
                <p className="body">Tokens, components, and generative tooling so teams ship consistent work at speed.</p>
              </div>
            </li>
          </ul>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Start a conversation <span className="arr">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
