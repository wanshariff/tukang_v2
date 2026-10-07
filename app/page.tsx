// Enhanced Homepage with Custom Design System
/** بِسْمِ الله — build good things that serve people **/
import React from "react";
import type { Metadata } from "next";
import PortfolioPreview from "./components/portfolio-preview";
import HomePageClient from "./components/homepage-client";

export const metadata: Metadata = {
  title: "End-to-End Web Design & Development | TADAL STUDIO",
  description:
    "Websites for Malaysian businesses. Strategy, design and code in one team, with the price and launch date agreed before you pay.",
  openGraph: {
    title: "End-to-End Web Design & Development | TADAL STUDIO",
    description:
      "Websites for Malaysian businesses. Strategy, design and code in one team, with the price and launch date agreed before you pay.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/tadal-social-share.jpg",
        width: 1200,
        height: 630,
        alt: "TADAL STUDIO – End-to-End Web Design & Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "End-to-End Web Design & Development | TADAL STUDIO",
    description:
      "Websites for Malaysian businesses. Strategy, design and code in one team, with the price and launch date agreed before you pay.",
    images: ["/tadal-social-share.jpg"],
  },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <HomePageClient>
      <PortfolioPreview />
    </HomePageClient>
  );
}
