"use client";

import { ArrowRight } from "lucide-react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] w-full overflow-hidden bg-slate-900 
      flex flex-col items-center justify-center"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 
      [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      {/* Animated Background Boxes */}
      <Boxes />

      {/* Content Section */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold mb-6 text-white transition-transform",
            "hover:scale-105 hover:text-blue-300"
          )}
        >
          Innovate. Transform. Succeed.
        </h1>

        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto animate-pulse">
          Empowering businesses through advanced technology and strategic innovation
        </p>

        <div className="flex justify-center">
          <a
            href="/contact"
            className={cn(
              "flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full",
              "font-semibold hover:bg-blue-50 transition transform hover:scale-110 hover:shadow-lg",
              "group relative z-30"
            )}
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
