"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutWebflora from "../Components/AboutWebflora";
import FounderStorySection from "../Components/FounderStorySection";
import MissionVisionSection from "../Components/MIssion&Vission";
import AboutService from "../Components/AboutService";
import AboutMissionandVision from "../Components/AboutMissionandVision";
import TeamSection from "../Components/TeamSection";
import ContactSection from "../Components/ContactSection";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function UltraAnimatedHero() {
  return (
    <>
      {/* About Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-pattern relative overflow-hidden pt-20 px-6"
      >
        {/* Animated Spotlight */}
        <motion.svg
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] -top-40 left-0 md:-top-20 md:left-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              />
            </filter>
          </defs>
        </motion.svg>

        {/* Radial Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

        {/* Floating ambient glow */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -z-10 top-1/3 left-1/3 w-[500px] h-[500px] bg-[#ff3c00]/20 blur-[140px] rounded-full"
        />

        {/* Hero Content */}
        <motion.div
          variants={container}
          className="max-w-6xl w-full text-center space-y-8 z-10 relative mt-12 md:mt-0"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-[#ff3c00] mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#ff3c00]"
            />
            Spotlight on Engineering
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.9] text-white drop-shadow-2xl"
          >
            Technology That Moves <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-[#ff3c00]">
              Your Business Forward
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Engineering scalable digital systems that drive measurable growth.
            We build the architecture for your future success using precision
            and modern standards.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-[#ff3c00] text-black font-semibold text-sm uppercase tracking-wider overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-2 text">
                  Explore Vision
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="text-lg"
                  >
                    →
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
              </motion.button>
            </Link>

            <div className="flex gap-6 text-xs text-neutral-400 font-medium uppercase tracking-widest mt-8 md:mt-0">
              {["Scalable", "Efficient", "Secure"].map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="flex items-center gap-1"
                >
                  <span className="text-[#ff3c00]">✔</span> {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* About Section of webflora Technologies -  */}
      <AboutWebflora />

      {/* Origin Story */}
      <FounderStorySection />

      {/* Mission and Vision */}
      <MissionVisionSection />

      {/* About Service  */}
      <AboutService />

      {/* About Mission and Vision */}
      <AboutMissionandVision />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
