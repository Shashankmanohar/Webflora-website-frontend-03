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
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-medium tracking-wide uppercase">
            ⭐ Leading Tech Partner in Bihar
          </div>
          <h2 id="leading-software-company-patna" className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight uppercase font-display">
            Leading Software Company <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-extrabold drop-shadow-[0_0_30px_rgba(251,146,60,0.15)]">
              in Patna Bihar
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            Webflora Technologies is the leading <Link href="/services/software-development-company-in-patna" className="text-orange-500 hover:underline font-medium">Software Company in Patna, Bihar</Link>. We assist businesses with <Link href="/services/software-development-company-in-patna" className="text-orange-500 hover:underline font-medium">custom software development</Link>, <Link href="/services/website-development-company-in-patna" className="text-orange-500 hover:underline font-medium">website development</Link>, <Link href="/services/mobile-app-development-company-in-patna" className="text-orange-500 hover:underline font-medium">mobile apps</Link>, and <Link href="/services/ai-automation-company-in-patna" className="text-orange-500 hover:underline font-medium">AI automation</Link> setups.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            We build fast, secure, and custom digital tools. These help local startups and enterprises save time, run better, and scale growth.
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
                <h2 id="why-businesses-need-custom-software" className="text-2xl font-bold text-white uppercase tracking-wider font-display">Why Businesses Need Custom Software</h2>
                <div className="space-y-4 text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  <p>
                    Generic software tools often fail to support your specific workflows, scaling plans, or unique operational rules.
                  </p>
                  <p>
                    Custom applications are built for your exact workflows. They allow you to automate tasks, boost performance, reduce expenses, and maintain full control.
                  </p>
                  <p>
                    Unlike subscription software, custom systems offer long-term flexibility, independence, and full ownership without licensing fees.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-red-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:cup-first-bold-duotone" className="text-4xl text-red-500" />
                <h3 id="key-benefits" className="text-2xl font-bold text-white uppercase tracking-wider">Key Benefits</h3>
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
                <h3 id="security-and-privacy" className="text-2xl font-bold text-white uppercase tracking-wider">Security & Privacy</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  We prioritize enterprise-grade security across all builds. Our engineers leverage static site generation (SSG) to render frontend elements serverless, protecting against standard injection attacks. Databases are encrypted using AES-256 standards, endpoints are secured via strict SSL protocols, and access levels are managed using secure Role-Based Access Controls (RBAC) to ensure complete data integrity.
                </p>
              </div>

              <div className="lg:col-span-7 p-8 md:p-12 rounded-none bg-zinc-950/40 border border-white/5 hover:border-orange-500/20 transition-all duration-500 flex flex-col justify-center space-y-6 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <Icon icon="solar:widget-3-bold-duotone" className="text-4xl text-orange-500" />
                <h3 id="our-core-frameworks" className="text-2xl font-bold text-white uppercase tracking-wider">Our Core Frameworks</h3>
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
                <h3 id="the-integration-process" className="text-2xl font-bold text-white uppercase tracking-wider">The Integration Process</h3>
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
                <h3 id="flat-rate-costs" className="text-2xl font-bold text-white uppercase tracking-wider">Flat-Rate Costs</h3>
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

        {/* Comparison Table */}
        <div className="mt-28 border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-4">
              ⚔️ Architecture Battle
            </div>
            <h3 id="custom-vs-off-the-shelf-software" className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
              Custom vs. Off-The-Shelf
            </h3>
            <p className="text-gray-500 text-sm mt-3 font-light">
              See why custom engineered software consistently delivers higher ROI and longevity compared to generic SaaS tools.
            </p>
          </div>

          <div className="w-full bg-neutral-950/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 md:p-0">
            {/* Mobile Stacked View */}
            <div className="block md:hidden space-y-6 divide-y divide-white/5">
              {[
                {
                  feature: "Pricing Model",
                  custom: "Flat-rate fee, lifetime ownership, no monthly user licensing costs.",
                  saas: "Recurring monthly subscription fees per user that scale up indefinitely."
                },
                {
                  feature: "Scalability",
                  custom: "Infinite customizable expansion aligned perfectly with business growth.",
                  saas: "Rigid platform limits, locked features, and expensive tier upgrades."
                },
                {
                  feature: "Integration",
                  custom: "Seamless custom API mapping to connect internal legacy and external systems.",
                  saas: "Restricted predefined connectors, fragile middleware requirements."
                },
                {
                  feature: "Security & Control",
                  custom: "Complete source code ownership with custom closed network encryption.",
                  saas: "Shared multi-tenant database servers, zero direct protocol control."
                }
              ].map((row, i) => (
                <div key={i} className={`pt-6 ${i === 0 ? 'pt-0' : ''} space-y-3`}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">{row.feature}</h4>
                  
                  <div className="p-4 rounded-xl bg-[#ff3b00]/5 border border-[#ff3b00]/20">
                    <span className="text-[10px] font-bold text-[#ff3b00] uppercase tracking-widest block mb-1">★ Webflora Custom</span>
                    <p className="text-xs sm:text-sm text-white font-medium flex items-start gap-2">
                      <Icon icon="solar:check-circle-bold" className="text-emerald-400 text-base shrink-0 mt-0.5" />
                      {row.custom}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">Off-The-Shelf SaaS</span>
                    <p className="text-xs text-neutral-400">
                      {row.saas}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left text-sm text-neutral-400 border-collapse">
                <thead>
                  <tr className="border-b border-white/10 font-bold font-mono">
                    <th className="p-5 bg-white/[0.02] text-neutral-300 font-bold text-xs uppercase tracking-widest w-1/4">Feature</th>
                    <th className="p-5 bg-[#ff3b00]/10 border-x border-[#ff3b00]/20 text-white font-black text-xs uppercase tracking-widest text-center w-2/5">
                      <div className="flex items-center justify-center gap-2">
                        <Icon icon="solar:shield-star-bold" className="text-orange-500 text-base" />
                        Custom Software (Webflora)
                      </div>
                    </th>
                    <th className="p-5 bg-white/[0.01] text-neutral-500 font-bold text-xs uppercase tracking-widest text-center w-1/3">Off-The-Shelf SaaS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="p-5 font-semibold text-white font-mono text-xs uppercase tracking-wider">Pricing Model</td>
                    <td className="p-5 border-x border-[#ff3b00]/10 bg-[#ff3b00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <Icon icon="solar:check-circle-bold" /> Flat-rate fee, lifetime ownership, no monthly user licensing costs.
                      </span>
                    </td>
                    <td className="p-5 text-neutral-500 text-center text-xs">
                      Recurring monthly subscription fees per user that scale up indefinitely.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="p-5 font-semibold text-white font-mono text-xs uppercase tracking-wider">Scalability</td>
                    <td className="p-5 border-x border-[#ff3b00]/10 bg-[#ff3b00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <Icon icon="solar:check-circle-bold" /> Infinite customizable expansion aligned perfectly with business growth.
                      </span>
                    </td>
                    <td className="p-5 text-neutral-500 text-center text-xs">
                      Rigid platform limits, locked features, and expensive tier upgrades.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="p-5 font-semibold text-white font-mono text-xs uppercase tracking-wider">Integration</td>
                    <td className="p-5 border-x border-[#ff3b00]/10 bg-[#ff3b00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <Icon icon="solar:check-circle-bold" /> Seamless custom API mapping to connect internal legacy and external systems.
                      </span>
                    </td>
                    <td className="p-5 text-neutral-500 text-center text-xs">
                      Restricted predefined connectors, fragile middleware requirements.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="p-5 font-semibold text-white font-mono text-xs uppercase tracking-wider">Security & Control</td>
                    <td className="p-5 border-x border-[#ff3b00]/10 bg-[#ff3b00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <Icon icon="solar:check-circle-bold" /> Complete source code ownership with custom closed network encryption.
                      </span>
                    </td>
                    <td className="p-5 text-neutral-500 text-center text-xs">
                      Shared multi-tenant database servers, zero direct protocol control.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Definition List (Glossary) */}
        <div className="mt-28 border-t border-white/5 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-4">
              📚 Terminology Glossary
            </div>
            <h3 id="software-terminology-glossary" className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
              Digital Transformation Glossary
            </h3>
            <p className="text-gray-500 text-sm mt-3 font-light">
              Demystifying key technical terms that power modern high-performance enterprise automation.
            </p>
          </div>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#ff3b00]/30 hover:bg-[#ff3b00]/5 transition-all duration-500 flex flex-col justify-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                <Icon icon="solar:code-square-bold-duotone" className="text-xl" />
              </div>
              <dt className="text-white font-bold text-lg tracking-tight mb-2">Custom Software Development</dt>
              <dd className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                The process of designing, building, and deploying software applications tailored specifically to meet the unique requirements of a particular organization or user group.
              </dd>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#ff3b00]/30 hover:bg-[#ff3b00]/5 transition-all duration-500 flex flex-col justify-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                <Icon icon="solar:database-bold-duotone" className="text-xl" />
              </div>
              <dt className="text-white font-bold text-lg tracking-tight mb-2">Enterprise Resource Planning (ERP)</dt>
              <dd className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                An integrated system designed to manage and automate core business operations such as supply chain, customer service, inventory, finance, and human resources.
              </dd>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-[#ff3b00]/30 hover:bg-[#ff3b00]/5 transition-all duration-500 flex flex-col justify-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                <Icon icon="solar:cpu-bolt-bold-duotone" className="text-xl" />
              </div>
              <dt className="text-white font-bold text-lg tracking-tight mb-2">AI Workflow Automation</dt>
              <dd className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                The integration of artificial intelligence and machine learning pipelines into standard workflows to eliminate operational bottlenecks, reduce manual work, and operate systems 24/7.
              </dd>
            </div>
          </dl>
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

