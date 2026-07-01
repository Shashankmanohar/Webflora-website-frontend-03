"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  // Cursor tracking for interactive ambient glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      // Position relative to viewport, offset by half of glow width (300px)
      mouseX.set(clientX - 300);
      mouseY.set(clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-12">

      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />

        {/* Interactive Spotlight / Glow following mouse */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[80px] bg-gradient-to-r from-orange-500 to-red-600 pointer-events-none hidden md:block"
          style={{
            x: glowX,
            y: glowY,
          }}
        />

        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 3)", "--duration": "9s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 8)", "--duration": "12s", "--delay": "3s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 13)", "--duration": "8s", "--delay": "1s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 18)", "--duration": "14s", "--delay": "5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 23)", "--duration": "10s", "--delay": "2s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 28)", "--duration": "11s", "--delay": "4s" }} />

        {/* Centered glowing orb behind content */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <div
          className="absolute left-1/3 top-1/3 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 70%)" }}
        />
      </div>

      {/* Floating abstract code decorations (Desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="absolute right-[10%] top-[22%] hidden xl:block animate-float-1 pointer-events-none text-white text-[64px] font-mono select-none leading-none"
        aria-hidden="true"
      >
        {"</>"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="absolute left-[10%] bottom-[22%] hidden xl:block opacity-10 animate-float-2 pointer-events-none text-white text-[54px] font-mono select-none leading-none"
        aria-hidden="true"
      >
        {"{}"}
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center space-y-4 md:space-y-5">

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md animate-hero-text">
          <span className="text-orange-500 text-xs">⭐</span>
          <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
            Trusted Software Company in Patna
          </span>
        </div>

        {/* H1 Main Heading */}
        <h1 className="font-display font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl text-white animate-hero-text-delay-1">
          Software <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-black drop-shadow-[0_0_20px_rgba(249,115,22,0.15)] animate-pulse duration-3000">
            Company
          </span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-white">in Patna, Bihar</span>
        </h1>

        {/* Subtext description */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-3xl animate-hero-text-delay-2">
          We are a full-service software company in Patna, Bihar, offering custom website development, mobile app development, performance digital marketing, and custom AI automation solutions that scale business growth across India.
        </p>

        {/* Core Services inline bullet points */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-300 font-mono animate-hero-text-delay-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Software Development
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Web Development
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Mobile Apps
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Digital Marketing
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> AI Automation
          </span>
        </div>


        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-1"
        >
          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-3 w-full sm:w-auto block cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Start Your Project
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="/contact?consultation=true"
              className="px-8 py-3 w-full sm:w-auto block cursor-pointer bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="w-full sm:w-auto flex justify-center">
            <Link
              href="#work"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors py-2 flex items-center gap-1"
            >
              View Work <span className="text-orange-500 font-bold">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl pt-6 border-t border-white/10"
        >
          {[
            { value: "200+", label: "Projects Delivered", accent: false },
            { value: "150+", label: "Clients Served", accent: false },
            { value: "5+", label: "Years Experience", accent: false },
            { value: "99%", label: "Satisfaction", accent: true }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, borderColor: "rgba(249, 115, 22, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-3 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm transition-colors duration-300"
            >
              <p className={`text-xl md:text-2xl font-bold tracking-tight ${stat.accent ? "text-[#FF3B00]" : "text-white"}`}>
                {stat.value}
              </p>
              <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-hero-text {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-hero-text-delay-1 {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.08s forwards;
          opacity: 0;
        }
        .animate-hero-text-delay-2 {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
          opacity: 0;
        }
        .animate-hero-text-delay-3 {
          animation: heroFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.22s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
