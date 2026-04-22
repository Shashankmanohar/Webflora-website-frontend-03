"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-grid h-screen pb-12 sm:pb-16 lg:pb-20">
      {/* Glow Background — animated but same visuals */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/5" />

          <motion.div
            className="absolute left-1/4 top-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[150px]"
            animate={{
              x: [-40, 40, -40],
              y: [-30, 30, -30],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 w-[320px] h-[320px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[150px]"
            animate={{
              x: [30, -30, 30],
              y: [40, -40, 40],
              scale: [1.05, 0.95, 1.05],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Floating Icons — premium float animation */}
      <motion.div
        className="absolute right-[10%] top-[20%] hidden lg:block opacity-30"
        animate={{ y: [0, -35, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-brand-red text-[120px]">{"</>"}</span>
      </motion.div>

      <motion.div
        className="absolute left-[10%] bottom-[20%] hidden lg:block opacity-30"
        animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white text-[100px]">{"{}"}</span>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-brand-red"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="text-xs tracking-widest text-gray-300 font-mono">
            FUTURE READY SOLUTIONS
          </span>
        </motion.div>

        {/* Heading — elegant reveal */}
        <motion.h1
          className="font-display font-bold tracking-tighter leading-[0.95] text-5xl md:text-7xl lg:text-8xl mb-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.1 }}
        >
          ANYTHING THAT <br />
          <motion.span
            className="text-gradient inline-block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            CAN BE BUILT,
          </motion.span>
          <br />
          <motion.span
            className="text-brand text-glow inline-block"
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            WE BUILD.
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          SOFTWARE <span className="text-white">•</span> WEB <span className="text-white">•</span> MOBILE <span className="text-white">•</span> AI SOLUTIONS
        </motion.p>

        {/* Actions — premium hover micro-interactions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <motion.a
            href="#contact"
            whileTap={{ scale: 0.96 }}
            className="btn-primary px-10 py-4 w-full sm:w-auto cursor-pointer flex items-center justify-center"
          >
            Start Your Project
          </motion.a>

          <div className="inline-block relative">
            <div className="absolute z-1 -top-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -top-[3px] -right-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -bottom-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-1 -bottom-1 -right-1 w-1.5 h-1.5 bg-white"></div>

            <motion.a
              href="#work"
              whileTap={{ scale: 0.96 }}
              className="relative px-10 py-4 bg-transparent border-1 border-orange-600 text-white text-lg font-light tracking-wide hover:bg-orange-800 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
