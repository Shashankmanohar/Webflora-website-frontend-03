"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-grid h-screen pb-12 sm:pb-16 lg:pb-20">
      {/* Glow Background — animated but same visuals */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/5" />
          <motion.div
            animate={{ y: [-30, 30, -30], x: [-20, 20, -20], scale: [1, 1.05, 1] }}
            transition={{ duration: 39, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/4 top-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[150px] opacity-60 will-change-transform"
          />
          <motion.div
            animate={{ y: [30, -30, 30], x: [20, -20, 20], scale: [1.05, 1, 1.05] }}
            transition={{ duration: 39, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 w-[320px] h-[320px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[150px] opacity-40 will-change-transform"
          />
        </div>
      </div>

      {/* Floating Icons — premium float animation */}
      <motion.div
        animate={{ y: [-25, 25, -25], rotate: [-4, 4, -4] }}
        transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] hidden lg:block opacity-30 will-change-transform"
      >
        <span className="text-brand-red text-[120px]">{"</>"}</span>
      </motion.div>

      <motion.div
        animate={{ y: [25, -25, 25], rotate: [4, -4, 4] }}
        transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] bottom-[20%] hidden lg:block opacity-30 will-change-transform"
      >
        <span className="text-white text-[100px]">{"{}"}</span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-xs tracking-widest text-gray-300 font-mono">
            FUTURE READY SOLUTIONS
          </span>
        </div>

        {/* Heading — elegant reveal */}
        <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl lg:text-8xl mb-6 will-change-transform">
          ANYTHING THAT <br />
          <span className="text-gradient inline-block">CAN BE BUILT,</span>
          <br />
          <span className="text-brand text-glow inline-block">WE BUILD.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          SOFTWARE <span className="text-white">•</span> WEB <span className="text-white">•</span> MOBILE <span className="text-white">•</span> AI SOLUTIONS
        </p>

        {/* Actions — premium hover micro-interactions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-primary px-10 py-4 w-full sm:w-auto cursor-pointer flex items-center justify-center"
          >
            Start Your Project
          </Link>

          <div className="inline-block relative">
            <div className="absolute z-1 -top-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -top-[3px] -right-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -bottom-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -bottom-1 -right-1 w-1.5 h-1.5 bg-white"></div>

            <Link
              href="#work"
              className="relative px-10 py-4 bg-transparent border-1 border-orange-600 text-white text-lg font-light tracking-wide hover:bg-orange-800 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
