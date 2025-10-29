"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start bg-black px-8 md:px-20">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hey, I'm <span className="text-blue-500">Shreyas</span>
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
        Tech-Savy Developer & Computer Science Student
      </h2>
      <div className="mt-8">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-all"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;