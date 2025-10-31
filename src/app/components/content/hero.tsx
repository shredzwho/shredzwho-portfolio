"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Typed from "typed.js";
import Image from "next/image";
import HeroImage from "./heroimage";

const HERO_CONSTANTS = {
  NAME: "Shreyas",
  INTRO: "Hello 👋🏻",
  ROLE_STRINGS: ["Tech Enthusiast", "Developer", "Problem Solver"],
  SOCIAL_LINKS: {
    github: "https://github.com/shredzwho",
    linkedin: "https://linkedin.com/in/shreyas",
    instagram: "https://instagram.com/shredzwho",
  },
};

const STYLES = {
  SECTION:
    "relative w-full min-h-screen flex flex-col md:flex-row justify-center items-center overflow-hidden bg-[#050505] px-6 md:px-20",
  LEFT:
    "z-10 flex flex-col justify-center items-start w-full md:w-1/2 pt-28 md:pt-0 select-none",
  TYPED:
    "text-xl sm:text-2xl md:text-4xl text-gray-300 font-light tracking-wide",
  SOCIAL_LINK:
    "hover:opacity-80 duration-300 md:mr-4 mr-2 transition-all hover:scale-110",
};

const Hero = React.memo(() => {
  const typedRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const typed = new Typed(typedRef.current, {
        strings: HERO_CONSTANTS.ROLE_STRINGS,
        typeSpeed: 45,
        backSpeed: 40,
        backDelay: 2500,
        loop: true,
        showCursor: false,
      });
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40, transform: "translateZ(0)" },
      { opacity: 1, y: 0, duration: 1.2 }
    )
      .from(".seq", { opacity: 0, y: 20, duration: 0.6, stagger: 0.25 }, "+=0.2")
      .from(".hero-img", { opacity: 0, scale: 0.95, duration: 1 }, "+=0.2");
  }, []);

  const renderSocialLinks = () =>
    Object.keys(HERO_CONSTANTS.SOCIAL_LINKS).map((key) => (
      <a
        key={key}
        href={HERO_CONSTANTS.SOCIAL_LINKS[key as keyof typeof HERO_CONSTANTS.SOCIAL_LINKS]}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={`/social/${key}.svg`}
          alt={key}
          width={40}
          height={40}
          className={STYLES.SOCIAL_LINK}
        />
      </a>
    ));

  return (
    <section ref={sectionRef} className={STYLES.SECTION}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#050505]/90 to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent_70%)] blur-xl pointer-events-none" />
      <div className="absolute md:right-20 right-10 top-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/15 to-purple-600/15 blur-xl" />

      <div className={STYLES.LEFT}>
        <div className="seq mb-2">
          <h2 className="text-4xl md:text-5xl text-white font-semibold">
            {HERO_CONSTANTS.INTRO}
          </h2>
        </div>
        <div className="seq mb-4">
          <h1 className="text-3xl md:text-6xl text-white font-extrabold tracking-tight">
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              {HERO_CONSTANTS.NAME}
            </span>
          </h1>
        </div>
        <p className="seq mb-6">
          <span ref={typedRef} className={STYLES.TYPED}></span>
        </p>
        <div className="seq flex mb-6">{renderSocialLinks()}</div>

        <div className="seq flex gap-4">
          <a
            href="/Shreyas_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="border border-blue-500 text-blue-400 px-6 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
          <a
            href="mailto:shreyas@example.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      <div className="hero-img relative z-10 w-full md:w-3/4 flex justify-center items-center mt-10 md:mt-0">
        <div className="scale-125 md:scale-150 transition-transform duration-500">
          <HeroImage />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "HeroSection";
export default Hero;
