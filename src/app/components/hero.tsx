"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { opacity: 0, duration: 1.5, ease: "power2.out" });
      gsap.from(titleRef.current, { y: 80, opacity: 0, duration: 1.2, delay: 0.3, ease: "power3.out" });
      gsap.from(subtitleRef.current, { y: 60, opacity: 0, duration: 1.2, delay: 0.6, ease: "power3.out" });
      gsap.from(buttonRef.current, { y: 40, opacity: 0, duration: 1.2, delay: 0.9, ease: "power3.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-start bg-linear-to-b from-black via-neutral-900 to-black px-8 md:px-20 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,255,0.1),transparent_70%)] pointer-events-none" />

      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight"
      >
        Hey, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600">Shreyas</span>
      </h1>

      <h2
        ref={subtitleRef}
        className="text-2xl md:text-3xl text-gray-400 mb-8 font-light"
      >
        Tech-Savvy Developer & Computer Science Student
      </h2>

      <div ref={buttonRef}>
        <a
          href="#projects"
          className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
