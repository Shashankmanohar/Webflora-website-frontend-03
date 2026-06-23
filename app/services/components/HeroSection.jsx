"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        .animate-float-card-1 {
          animation: float-slow 7s ease-in-out infinite;
        }
        .animate-float-card-2 {
          animation: float-medium 6s ease-in-out infinite 1s;
        }
        .animate-float-card-3 {
          animation: float-slow 8s ease-in-out infinite 2s;
        }
        .orb-pulse {
          animation: pulse-soft 4s ease-in-out infinite;
        }
      `}</style>

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20 px-6 border-b border-white/5">
        
        {/* Background Grids & Orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#FF3B00]/10 blur-[120px] orb-pulse" />
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[100px] orb-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Wording & CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-ping" />
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-bold">
                Our Capabilities
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.05]">
              Digital Architecture <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
                Built For Value.
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl">
              We design and engineer bespoke software systems, high-converting Next.js websites, cross-platform mobile apps, and automated workflows optimized for Patna, Bihar, and global businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-lg shadow-orange-500/20 rounded-full"
              >
                Schedule Architecture Call
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 rounded-full"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Capabilities Dashboard */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[400px]">
            <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent rounded-full blur-3xl opacity-50" />

            <div className="relative w-full max-w-[500px] flex flex-col gap-6">
              
              {/* Card 1: Web Tech */}
              <div 
                className="animate-float-card-1 p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-orange-500/30 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredPanel(1)}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Icon icon="lucide:globe" width={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Next.js & React Hub</h3>
                    <p className="text-xs text-gray-500 font-mono">Performance & SEO-optimized static webs</p>
                  </div>
                  <div className="ml-auto text-xs text-gray-600 font-mono">₹25K+</div>
                </div>
              </div>

              {/* Card 2: Enterprise Software */}
              <div 
                className="animate-float-card-2 p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-blue-500/30 hover:scale-[1.02] ml-4 sm:ml-8"
                onMouseEnter={() => setHoveredPanel(2)}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Icon icon="lucide:server" width={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Custom SaaS & ERP</h3>
                    <p className="text-xs text-gray-500 font-mono">Scalable cloud business software</p>
                  </div>
                  <div className="ml-auto text-xs text-gray-600 font-mono">₹1.0L+</div>
                </div>
              </div>

              {/* Card 3: AI & Workflow Automations */}
              <div 
                className="animate-float-card-3 p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-red-500/30 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredPanel(3)}
                onMouseLeave={() => setHoveredPanel(null)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                    <Icon icon="lucide:cpu" width={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">AI Workflow Automation</h3>
                    <p className="text-xs text-gray-500 font-mono">n8n chatbots & WhatsApp integrations</p>
                  </div>
                  <div className="ml-auto text-xs text-gray-600 font-mono">₹35K+</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}