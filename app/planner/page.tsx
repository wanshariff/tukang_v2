import React, { Suspense } from "react";
import type { Metadata } from "next";
import PlannerClient from "./PlannerClient";

export const metadata: Metadata = {
  title: "Project Scope Planner | TADAL STUDIO",
  description:
    "Pick a package and add-ons to see a starting estimate for your website, then get the full estimate by email.",
  openGraph: {
    title: "Project Scope Planner | TADAL STUDIO",
    description:
      "Pick a package and add-ons to see a starting estimate for your website.",
    url: "/planner",
    type: "website",
    images: [{ url: "/tadal-social-share.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Scope Planner | TADAL STUDIO",
    description:
      "Pick a package and add-ons to see a starting estimate for your website.",
    images: ["/tadal-social-share.jpg"],
  },
  alternates: { canonical: "/planner" },
};

export default function ProjectScopePlannerPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-6 text-gray-400">Loading planner…</div>}>
      <PlannerClient />
    </Suspense>
  );
}
