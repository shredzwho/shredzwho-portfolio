"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const quoteRef = useRef<HTMLHeadingElement | null>(null);
  const targetSection = useRef<HTMLDivElement | null>(null);
  const [willChange, setWillChange] = useState(false);

  const initAboutAnimation = (): ScrollTrigger | undefined => {
    if (!quoteRef.current || !targetSection.current) return;

    const about1 = quoteRef.current.querySelector(".about-1");
    const about2 = quoteRef.current.querySelector(".about-2");
    const about3 = quoteRef.current.querySelector(".about-3");

    const timeline = gsap.timeline({ defaults: { ease: "none", duration: 0.1 } });

    [about1, about2, about3].forEach((el, index) => {
      if (el) {
        timeline.fromTo(el, { opacity: 0.2 }, { opacity: 1, duration: 0.8 });
        if (index < 2) timeline.to(el, { opacity: 0.2, delay: 0.8 });
      }
    });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top 90%",
      end: "bottom 60%",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setWillChange(self.isActive),
    });

    return scrollTriggerInstance;
  };

  useEffect(() => {
    const instance = initAboutAnimation();
    return () => instance?.kill();
  }, []);

  return (
    <section
      id="about"
      ref={targetSection}
      className="min-h-screen flex items-center justify-center bg-black text-white relative z-10 pt-20 pb-16"
    >
      <h1
        ref={quoteRef}
                className="font-semibold text-3xl sm:text-4xl md:text-6xl text-center leading-relaxed max-w-7xl"
      >
        <span className={`about-1 ${willChange ? "will-change-opacity" : ""}`}>
          I am a passionate Developer pursuing B.Tech in CSE at Jain University.{" "}
        </span>
        <span className={`about-2 ${willChange ? "will-change-opacity" : ""}`}>
          I love developing projects, building things, and contributing to open-source repositories.{" "}
        </span>
        <span className={`about-3 ${willChange ? "will-change-opacity" : ""}`}>
          I grow by learning new things every day — as they say, “Learning never stops.”
        </span>
      </h1>
    </section>
  );
};

export default AboutSection;