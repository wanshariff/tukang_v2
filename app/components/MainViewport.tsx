"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MainViewport({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";
  const isPlanner = pathname.startsWith("/planner");

  // Scroll to top smoothly on route changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  // Use full-screen min height for most pages, but let planner fit content; apply fade animation.
  // Mobile bottom padding = WhatsApp FAB height (56px) + 16px so the FAB never covers content.
  const cls = `${isPlanner ? "" : "min-h-screen"} pb-[72px] md:pb-0 page-fade`;
  return <main className={cls}>{children}</main>;
}
