"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function useScrollSmooth() {
  useGSAP(() => {
    // Ensure this only runs client-side
    if (typeof window === "undefined") return;

    // Register plugins safely
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Kill previous instance (avoid duplicates during hot reload)
    const existing = ScrollSmoother.get();
    if (existing) existing.kill();

    // Wait for DOM to fully render before creating smoother
    setTimeout(() => {
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });

      // Recalculate scroll positions
      ScrollTrigger.refresh();

      // Cleanup on unmount
      return () => {
        smoother?.kill();
        ScrollTrigger.killAll();
      };
    }, 200);
  }, []); // Run only once
}