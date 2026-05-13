import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/lib/content";

const junicode = localFont({
  src: [
    {
      path: "../public/fonts/junicode/Junicode.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/junicode/Junicode-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "A modern portfolio for a product and visual designer featuring case studies, experimental work, and contact details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geist.variable} ${junicode.variable} text-(--text) antialiased`}>
        <div className="relative min-h-screen">
          <SiteHeader />
          <main className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
            <PageTransition>{children}</PageTransition>
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
