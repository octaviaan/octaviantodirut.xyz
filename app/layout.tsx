import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";

import "./globals.css";

import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/content";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Product and visual designer crafting digital products with cinematic clarity and sharp commercial focus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Reveal gating — runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('js-reveal');})();`,
          }}
        />
      </head>
      <body className={`${newsreader.variable} ${geist.variable} ${geistMono.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
