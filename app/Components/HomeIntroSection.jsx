"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function HomeIntroSection() {
  const [activeTab, setActiveTab] = useState("core");

  const tabs = [
    { id: "core", label: "Strategic Value", icon: "solar:lightbulb-bold" },
    { id: "arsenal", label: "Tech & Security", icon: "solar:shield-keyhole-bold" },
    { id: "journey", label: "Process & Cost", icon: "solar:route-bold" }
  ];

  return (
    <section className="py-28 bg-[#030303] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -right-20 top-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(255,59,0,0.2) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <div
          className="absolute -left-20 bottom-1/4 w-[500px] h-[500px] rounded-full opacity-5 blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-medium tracking-wide uppercase">
            ⭐ Leading Tech Partner in Bihar
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight uppercase">
            Top-Rated <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-extrabold drop-shadow-[0_0_30px_rgba(251,146,60,0.15)]">
              Engineering Scalable Solutions
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Webflora Technologies (Udyam: UDYAM-BR-26-0183379) is the leading software company in Patna, Bihar, offering custom software development, website development, mobile application builds, digital marketing, and bespoke AI automation solutions in India.
          </p>
        </div>

        {/* Dynamic Tab Switcher */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mb-16 max-w-xl mx-auto border-b border-white/5 pb-4 w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 md:px-6 md:py-3 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                  ? "bg-white text-black shadow-lg shadow-white/5 scale-105"
                  : "bg-transparent text-neutral-500 hover:text-white"
                }`}
            >
              <Icon icon={tab.icon} className="text-sm md:text-lg" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="min-h-[450px] transition-all duration-500">

          {/* TAB 1: CORE VALUE */}
          {activeTab === "core" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
              <div className="lg:col-span-7 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:chart-square-bold-duotone" className="text-4xl text-orange-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Why Businesses Need Custom Software</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  Off-the-shelf software packages often lock you into rigid templates and expensive monthly subscription costs. Custom software allows you to build digital tools tailored precisely to your company's business goals. By automating manual processes, removing duplicate entries, and connecting databases, custom systems lower your overhead costs, prevent errors, and scale your throughput without adding extra staff.
                </p>
              </div>

              <div className="lg:col-span-5 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-red-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:cup-first-bold-duotone" className="text-4xl text-red-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Key Benefits</h3>
                <ul className="space-y-4 text-gray-400 font-light text-sm md:text-base">
                  <li className="flex items-center gap-3">
                    <Icon icon="solar:check-circle-bold" className="text-orange-500 text-lg shrink-0" />
                    <span>Sub-second page loading speeds</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon icon="solar:check-circle-bold" className="text-orange-500 text-lg shrink-0" />
                    <span>Built-in local SEO to dominate rankings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon icon="solar:check-circle-bold" className="text-orange-500 text-lg shrink-0" />
                    <span>100% source code ownership</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon icon="solar:check-circle-bold" className="text-orange-500 text-lg shrink-0" />
                    <span>Zero expensive licensing markup fees</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: TECH & SECURITY */}
          {activeTab === "arsenal" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
              <div className="lg:col-span-5 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:safe-square-bold-duotone" className="text-4xl text-blue-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Security & Privacy</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  We prioritize enterprise-grade security across all builds. Our engineers leverage static site generation (SSG) to render frontend elements serverless, protecting against standard injection attacks. Databases are encrypted using AES-256 standards, endpoints are secured via strict SSL protocols, and access levels are managed using secure Role-Based Access Controls (RBAC) to ensure complete data integrity.
                </p>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:widget-3-bold-duotone" className="text-4xl text-orange-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Our Core Frameworks</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-400 font-light text-sm md:text-base">
                  <div className="p-4 rounded-none bg-white/[0.01] border border-white/5 flex items-center gap-3">
                    <Icon icon="logos:nextjs-icon" className="text-xl" />
                    <span>Next.js & React</span>
                  </div>
                  <div className="p-4 rounded-none bg-white/[0.01] border border-white/5 flex items-center gap-3">
                    <Icon icon="logos:flutter" className="text-xl" />
                    <span>Flutter & Native</span>
                  </div>
                  <div className="p-4 rounded-none bg-white/[0.01] border border-white/5 flex items-center gap-3">
                    <Icon icon="logos:nodejs-icon" className="text-xl" />
                    <span>Node.js Backend</span>
                  </div>
                  <div className="p-4 rounded-none bg-white/[0.01] border border-white/5 flex items-center gap-3">
                    <Icon icon="logos:postgresql" className="text-xl" />
                    <span>Secure SQL</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROCESS & COST */}
          {activeTab === "journey" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-fade-in">
              <div className="lg:col-span-7 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:route-bold-duotone" className="text-4xl text-orange-500" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">The Integration Process</h3>
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  <div className="flex-1 space-y-1">
                    <span className="text-[#FF3B00] font-bold text-xs uppercase tracking-widest block">Phase 01</span>
                    <h4 className="text-white font-bold text-sm">Figma Design</h4>
                    <p className="text-neutral-500 text-xs font-light">Custom interactive wireframes.</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="text-[#FF3B00] font-bold text-xs uppercase tracking-widest block">Phase 02</span>
                    <h4 className="text-white font-bold text-sm">Sprint Coding</h4>
                    <p className="text-neutral-500 text-xs font-light">Agile component building loops.</p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <span className="text-[#FF3B00] font-bold text-xs uppercase tracking-widest block">Phase 03</span>
                    <h4 className="text-white font-bold text-sm">Cloud Launch</h4>
                    <p className="text-neutral-500 text-xs font-light">Secure static CDN deployment.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-12 rounded-none bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <Icon icon="solar:wallet-money-bold-duotone" className="text-4xl text-orange-400" />
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Flat-Rate Costs</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  No monthly per-user subscription fees. Pay a flat milestone rate starting at:
                </p>
                <div className="flex justify-between border-t border-white/10 pt-4 text-sm font-mono text-gray-400">
                  <span>Websites</span>
                  <span className="text-white font-bold">₹25,000+</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-sm font-mono text-gray-400">
                  <span>Mobile Apps</span>
                  <span className="text-white font-bold">₹80,000+</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 text-sm font-mono text-gray-400">
                  <span>Custom ERP</span>
                  <span className="text-white font-bold">₹1,00,000+</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Quick Links */}
        <div className="pt-16 flex flex-wrap gap-3 justify-center">
          <Link
            href="/services/website-development-company-in-patna"
            className="text-xs px-4 py-2 rounded-none bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all font-mono uppercase tracking-wider"
          >
            Web Development Patna
          </Link>
          <Link
            href="/services/mobile-app-development-company-in-patna"
            className="text-xs px-4 py-2 rounded-none bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all font-mono uppercase tracking-wider"
          >
            Mobile Apps Patna
          </Link>
          <Link
            href="/services/software-development-company-in-patna"
            className="text-xs px-4 py-2 rounded-none bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all font-mono uppercase tracking-wider"
          >
            Software Solutions Patna
          </Link>
          <Link
            href="/services/ai-automation-company-in-patna"
            className="text-xs px-4 py-2 rounded-none bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all font-mono uppercase tracking-wider"
          >
            AI & Automation Bihar
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

