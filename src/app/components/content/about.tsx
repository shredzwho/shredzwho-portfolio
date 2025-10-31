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

    const timeline = gsap.timeline({
      defaults: { ease: "none", duration: 0.1 },
    });

    if (about1) {
      timeline.fromTo(about1, { opacity: 0.2 }, { opacity: 1 });
      timeline.to(about1, { opacity: 0.2, delay: 0.5 });
    }

    if (about2) {
      timeline.fromTo(about2, { opacity: 0.2 }, { opacity: 1 }, "<");
      timeline.to(about2, { opacity: 0.2, delay: 1 });
    }

    if (about3) {
      timeline.fromTo(about3, { opacity: 0.2 }, { opacity: 1 }, "<");
      timeline.to(about3, { opacity: 0.2, delay: 1 });
    }

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
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

  const renderQuotes = (): React.ReactNode => (
    <h1 ref={quoteRef} className="font-semibold text-4xl sm:text-5xl md:text-7xl text-center leading-relaxed">
      <span
        className={`about-1 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I am a passionate Developer pursuing Btech in CSE at Jain university.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I love involving myself in developing projects, building things and contributing repos.{" "}
      </span>
      <span
        className={`about-3 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I climb by learning new things everyday, as they quote "Learning never stops".
      </span>
    </h1>
  );

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
      ref={targetSection}
    >
      {renderQuotes()}
    </section>
  );
};

export default AboutSection;