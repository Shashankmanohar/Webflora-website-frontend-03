import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function LocationHero({ 
  badge, 
  title, 
  gradientTitle, 
  description, 
  stats = [],
  techStack = [],
  primaryCtaText = "Start Project",
  secondaryCtaText = "Free Consultation"
}) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20 px-6 border-b border-white/5">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 5)", "--duration": "8s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 10)", "--duration": "12s", "--delay": "1.5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 16)", "--duration": "9s", "--delay": "3.5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 22)", "--duration": "14s", "--delay": "0.5s" }} />
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-10 w-[300px] h-[300px] rounded-full bg-[#FF3B00]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md w-fit">
              <span className="text-orange-500 text-xs">⭐</span>
              <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
                {badge}
              </span>
            </div>
          )}

          <h1 className="font-display font-black tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl uppercase text-white">
            {title}
            {gradientTitle && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                  {gradientTitle}
                </span>
              </>
            )}
          </h1>

          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
            {description}
          </p>

          {/* Quick value bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-gray-300 text-sm font-light pt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
              <span>Full Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
              <span>95+ Lighthouse Speed Target</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
              <span>Google Search Essentials Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#FF3B00] rounded-full" />
              <span>Remote Delivery, Patna Headquarters</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-orange-500/20 rounded-full uppercase"
            >
              {primaryCtaText}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 rounded-full uppercase"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>

        {/* Dashboard/Visuals Area */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative">
          {techStack.length > 0 && (
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl space-y-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-bold">Tech Ecosystem</p>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF3B00]/30 transition-all duration-300">
                    <Icon icon={tech.icon || "solar:code-linear"} width={28} className="mb-2 text-white" />
                    <span className="text-[9px] font-mono text-gray-400 uppercase text-center tracking-wider truncate w-full">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {stats.length > 0 && (
            <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className={idx === stats.length - 1 && stats.length % 2 !== 0 ? "col-span-2 text-center" : ""}>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
