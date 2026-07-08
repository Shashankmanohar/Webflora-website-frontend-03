"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import FaqSection from "../components/FaqSection";
import { ServiceComparisonWrapper } from "../components/ServiceTemplate";
import { Zap, Users, Clock, Shield, Play, Code, Globe, Cpu, Smartphone } from "lucide-react";
import ClientMarquee from "../../../Components/ClientMarquee";

// ===============================
// PREMIUM SUB-COMPONENTS
// ===============================

const FloatingElement = ({ children, duration = 6, delay = 0, className = "" }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const MetricBadge = ({ label, value, icon: IconComponent }) => (
  <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-2xl hover:border-[#FF3B00]/40 transition-all group">
    <div className="w-10 h-10 rounded-xl bg-[#FF3B00]/10 flex items-center justify-center text-[#FF3B00] group-hover:bg-[#FF3B00] group-hover:text-white transition-colors">
      <IconComponent size={20} />
    </div>
    <div>
      <div className="text-xs text-neutral-500 font-bold tracking-wider uppercase">{label}</div>
      <div className="text-xl font-black text-white">{value}</div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 group hover:from-[#FF3B00]/30 hover:to-transparent transition-all duration-500 shadow-2xl"
    >
      <div className="bg-[#080808] p-8 md:p-10 rounded-[2rem] h-full flex flex-col items-start gap-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B00]/5 blur-[50px] rounded-full transition-all duration-500 group-hover:bg-[#FF3B00]/10" />
        
        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 group-hover:bg-[#FF3B00] group-hover:text-white transition-all duration-500">
          <Icon icon={icon} width={28} />
        </div>
        
        <h3 id={`feature-card-${index}`} className="text-2xl font-black tracking-tight text-white group-hover:text-[#FF3B00] transition-colors">{title}</h3>
        <p className="text-neutral-400 text-base font-light leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
};

// Interactive Mockup For "How it works"
const IntegrationVisual = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { icon: "solar:upload-bold", label: "Input Data", desc: "Upload PDF or Link" },
    { icon: "solar:cpu-bold", label: "Processing", desc: "Vectorizing data..." },
    { icon: "solar:chat-round-bold", label: "Live Agent", desc: "Ready to converse" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#050505] rounded-3xl border border-white/10 p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] font-mono text-neutral-500 uppercase">Pipeline Monitoring</div>
      </div>
      
      <div className="flex items-center justify-between gap-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 flex-1">
            <motion.div 
              animate={activeStep === i ? { scale: 1.1, borderColor: "#FF3B00" } : { scale: 1, borderColor: "rgba(255,255,255,0.1)" }}
              className={`w-12 h-12 rounded-full border flex items-center justify-center bg-black text-xl transition-all duration-500 ${activeStep === i ? "text-[#FF3B00] shadow-[0_0_15px_rgba(255,59,0,0.3)]" : "text-neutral-600"}`}
            >
              <Icon icon={step.icon} />
            </motion.div>
            <div className={`text-xs font-bold uppercase tracking-wider ${activeStep === i ? "text-white" : "text-neutral-600"}`}>{step.label}</div>
          </div>
        ))}
      </div>
      
      <div className="h-24 bg-black/50 rounded-xl border border-white/5 p-4 font-mono text-xs overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-[#FF3B00]/80"
          >
            {activeStep === 0 && "> Locating training materials... Found 14 documents."}
            {activeStep === 1 && "> Chunking tokens and indexing to Postgres vector pool..."}
            {activeStep === 2 && "> Deployment SUCCEEDED. AI Chatbot now active via widget."}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

// ===============================
// MAIN PAGE EXPORT
// ===============================

export default function AIChatbotCompanyPage() {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className="relative min-h-screen bg-black text-white selection:bg-[#FF3B00]">
      
      {/* Global Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-[radial-gradient(circle_at_center,_rgba(255,59,0,0.12)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FF3B00]/5 rounded-full blur-[120px] animate-pulse" />
        </div>
      </div>

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        
        <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-full px-5 py-2 backdrop-blur-md mb-12 shadow-2xl hover:border-[#FF3B00]/30 transition-all group cursor-pointer">
          <div className="flex -space-x-1.5">
             <div className="w-6 h-6 rounded-full border border-black bg-[#FF3B00]" />
             <div className="w-6 h-6 rounded-full border border-black bg-white flex items-center justify-center text-[10px] text-black font-bold">AI</div>
          </div>
          <span className="text-xs font-black tracking-[0.15em] uppercase text-neutral-300 group-hover:text-white">Version 2.0 Production Ready</span>
        </div>

        <div className="text-center relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-20 bg-[#FF3B00]/40 blur-[100px] rounded-full opacity-30" />
          
          <h1 id="hero-title" className="text-5xl sm:text-7xl md:text-[6.5rem] font-black font-display leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-4">
            AI CHATBOT
          </h1>
          
          <h2 id="hero-subtitle" className="text-3xl sm:text-5xl md:text-[4.5rem] font-black tracking-tighter text-[#FF3B00] relative">
            COMPANY IN PATNA
            <span className="absolute -top-4 -right-6 text-xs font-mono font-medium tracking-widest text-white bg-[#FF3B00] px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_20px_#FF3B00]">
              BIHAR <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </span>
          </h2>
        </div>

        <p className="mt-8 text-base md:text-xl text-neutral-400 max-w-3xl text-center font-light leading-relaxed">
          Partner with the leading <strong className="text-[#FF3B00]">AI Chatbot Company in Patna, Bihar</strong>. We design, train, and deploy advanced, custom intelligent conversational NLP chatbots like <strong className="text-white font-medium">Vegavan AI</strong> to automate customer interactions.
        </p>

        {/* CTA Cluster */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-16 relative z-20">
          <Link href="/contact" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3B00] via-orange-500 to-yellow-500 rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
            <button className="relative bg-[#FF3B00] text-white px-12 py-6 rounded-2xl font-black text-lg flex items-center gap-4 overflow-hidden shadow-2xl transition-transform group-hover:-translate-y-1">
              Deploy Agent Now
              <Zap size={20} className="animate-pulse" />
            </button>
          </Link>
          <button className="px-10 py-6 rounded-2xl border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur font-bold text-white transition-all flex items-center gap-2">
            <Play size={24} className="text-[#FF3B00]" />
            View Ecosystem Demo
          </button>
        </div>

      </section>

      <ClientMarquee />

      {/* SECTION 2: REAL-TIME METRICS MESH */}
      <div className="relative z-10 border-y border-white/[0.05] bg-[#050505]/80 backdrop-blur-2xl py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          <MetricBadge label="Response Latency" value="< 180ms" icon={Zap} />
          <MetricBadge label="Lead Extraction" value="92% Auto" icon={Users} />
          <MetricBadge label="Availability" value="24/7/365" icon={Clock} />
          <MetricBadge label="Human Effort Saved" value="~40 Hrs/Wk" icon={Shield} />
        </div>
      </div>

      {/* SECTION 3: COMPREHENSIVE INFORMATION ARCHITECTURE */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-28">
        
        {/* Info Panel 1: The Problem & Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-5">
            <h3 id="intelligence-engine-label" className="text-[#FF3B00] font-mono font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[#FF3B00]" />
              The Intelligence Engine
            </h3>
            <h2 id="intelligence-engine-heading" className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-8 text-white">
              Don't let inquiries fade into the night.
            </h2>
            <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
              Static forms kill conversion momentum. Webflora's AI chatbot development services in Patna, Bihar turn cold, static website presence into a proactive closing and sales engine by answering customer concerns the exact moment they occur.
            </p>
            <ul className="space-y-4 text-neutral-300">
              {[
                "Identifies visitor buying signals automatically",
                "Escalates complex quotes to specialized email alerts",
                "Reduces general customer support queries by up to 85%"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full bg-[#FF3B00]/20 flex items-center justify-center text-[#FF3B00]">
                    <Icon icon="solar:check-read-bold" width={12} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          {/* VISUAL BLOCK */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-[#FF3B00]/10 blur-[100px] rounded-full pointer-events-none" />
            <FloatingElement>
              <IntegrationVisual />
            </FloatingElement>
            
            {/* Floating Stats Overlays */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-6 md:-left-12 bg-[#111] border border-white/10 p-5 rounded-2xl shadow-2xl flex flex-col gap-1"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-neutral-400 uppercase font-bold">Lead Acquired</span>
              </div>
              <div className="text-sm text-white font-mono">sarah.j@client.com</div>
              <div className="text-[9px] text-[#FF3B00]">Intent Scored: High (0.94)</div>
            </motion.div>
          </div>
        </div>

        {/* Info Panel 2: The Detailed Advantage Matrix */}
        <div className="text-center mb-24">
          <h2 id="master-conversations-heading" className="text-3xl md:text-5xl font-black tracking-tighter text-white">Master Your Conversations.</h2>
          <p className="text-neutral-500 mt-4 max-w-2xl mx-auto font-light text-lg">Deep technical utility, distilled for operational dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon="solar:magic-stick-bold-duotone" 
            title="Train Easily On Your Data" 
            text="Plug and play documentation sync. Upload standard PDFs, .docx, or scrape external URLs. The agent absorbs it all instantly." 
            index={0} 
          />
          <FeatureCard 
            icon="solar:user-plus-bold-duotone" 
            title="Automated Lead Capture" 
            text="Intelligently requests emails, names, and phone numbers at peak conversational engagement points and pushes them directly to CRM." 
            index={1} 
          />
          <FeatureCard 
            icon="solar:earth-bold-duotone" 
            title="80+ Global Languages" 
            text="Native translation layer. A French visitor will get answers in French, while an English one gets English. Break all geographical barriers." 
            index={2} 
          />
          <FeatureCard 
            icon="solar:code-square-bold-duotone" 
            title="Single-Script Install" 
            text="Deploy in 60 seconds. Works natively on WordPress, Next.js, React, Shopify, Webflow, or hardcoded HTML dashboards." 
            index={3} 
          />
          <FeatureCard 
            icon="solar:chart-square-bold-duotone" 
            title="Insight Visualization" 
            text="Dashboard displaying customer pain points, popular queries, and real-time interaction heatmaps to adapt your products." 
            index={4} 
          />
          <FeatureCard 
            icon="solar:shield-warning-bold-duotone" 
            title="Military Tier Security" 
            text="Full transit layer encryption with strict privacy safeguards. Data resides in air-gapped containers with full admin overrides." 
            index={5} 
          />
        </div>
      </section>

      {/* SECTION 3.5: ONE CLICK INSTALLATION DEMO */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#080808] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            
            {/* Content Left */}
            <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5">
              <div className="flex items-center gap-2 text-[#FF3B00] text-xs font-mono font-black tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF3B00] animate-pulse" />
                Developer Core
              </div>
              <h3 id="deploy-intelligence-heading" className="text-3xl font-black tracking-tight text-white mb-6">Deploy Instant Intelligence.</h3>
              
              <ul className="space-y-4 mb-8">
                {[
                  { i: "solar:plug-circle-bold", t: "100% Zero-Config Setup" },
                  { i: "solar:users-group-two-rounded-bold", t: "Autonomous 24/7 Lead Capturing" },
                  { i: "solar:smartphone-2-bold", t: "Fully Responsive Mobile Ready" }
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Icon icon={benefit.i} className="text-[#FF3B00] flex-shrink-0" width={18} />
                    {benefit.t}
                  </li>
                ))}
              </ul>

              <p className="text-neutral-500 text-sm font-light leading-relaxed">
                Embed in your main templates and instantly receive notifications when the agent secures a qualified sales lead.
              </p>
            </div>
            
            {/* The Code Area */}
            <div className="md:col-span-7 bg-black p-8 md:p-12 flex items-center">
              <div className="w-full flex flex-col font-mono text-[11px] md:text-sm leading-relaxed">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="text-neutral-500">index.html</div>
                  <div className="flex items-center gap-2 text-[10px] text-[#FF3B00] bg-[#FF3B00]/10 px-3 py-1 rounded-full cursor-pointer hover:bg-[#FF3B00]/20 transition-all">
                    <Icon icon="solar:copy-bold-duotone" />
                    Copy Link
                  </div>
                </div>
                <pre className="overflow-x-auto hide-scrollbar">
                  <code>
                    <span className="text-neutral-600">{"<!-- Load Vegavan Engine -->\n"}</span>
                    <span className="text-blue-400">{"<script"}</span><br />
                    <span className="pl-4 text-orange-300">src</span>=<span className="text-green-400">"https://vegavan-backend.vercel.app/chatbot.js"</span><br />
                    <span className="pl-4 text-orange-300">data-user-id</span>=<span className="text-green-400">"69fc5bbe69d61b8cd4efd91a"</span><br />
                    <span className="text-blue-400">{"></script>"}</span>
                  </code>
                </pre>
              </div>
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* SECTION 3.7: PLATFORM COMPATIBILITY INTEGRATIONS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Universal Compatibility
          </span>
          <h2 id="compatibility-heading" className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            Deploy Across Your Entire Stack
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light max-w-xl mx-auto">
            Our intelligent AI chatbot integrates natively into all major frameworks, CMS platforms, mobile systems, and custom software architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Next.js & React",
              icon: Code,
              desc: "Deploy as a React Component or wrapper inside server-side or client-side rendered Next.js apps with minimal hydration footprint."
            },
            {
              title: "WordPress & Shopify",
              icon: Globe,
              desc: "Paste our single-script loader directly into your theme header or Shopify custom liquid tags to launch on your storefront instantly."
            },
            {
              title: "Mobile Apps & Flutter",
              icon: Smartphone,
              desc: "Embed via webviews or direct API endpoints within native iOS & Android applications built on React Native or Flutter."
            },
            {
              title: "SaaS & ERP Software",
              icon: Cpu,
              desc: "Sync conversations directly inside internal admin dashboards, enterprise ERP portals, and custom SaaS software platforms."
            }
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-[#080808] border border-white/5 p-8 rounded-3xl flex flex-col gap-4 hover:border-[#FF3B00]/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#FF3B00]">
                  <IconComp size={22} />
                </div>
                <h3 id={`compatibility-card-${idx}`} className="text-lg font-black text-white">{item.title}</h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: ULTIMATE CTA */}
      <section className="relative z-10 py-24 px-6 overflow-hidden text-center flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3B00]/5 to-transparent pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full relative"
        >
          {/* Decorative Orbit Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#FF3B00]/20 animate-[spin_30s_linear_infinite] pointer-events-none">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF3B00] rounded-full shadow-[0_0_20px_#FF3B00]" />
          </div>

          <div className="bg-black border border-white/10 p-12 md:p-24 rounded-[3rem] shadow-2xl relative z-10 overflow-hidden backdrop-blur-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
            
            <h2 id="ready-for-autonomy-heading" className="text-3xl md:text-5xl font-black tracking-tighter mb-8 relative z-10">Ready for autonomy?</h2>
            <p className="text-neutral-400 text-lg md:text-xl font-light max-w-xl mx-auto mb-12 relative z-10">
              Unlock the future of engagement. Add our conversational system to your workforce today and accelerate every operational metric you track.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <button className="bg-[#FF3B00] hover:bg-orange-600 text-white font-black text-xl px-14 py-6 rounded-2xl transition-all shadow-[0_20px_60px_-10px_rgba(255,59,0,0.6)] hover:-translate-y-1 active:scale-95">
                  Request Access
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <ServiceComparisonWrapper data={{ title: "chatbot" }} />

      {/* SEO rich text content block */}
      <section className="relative z-10 py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
              SEO Optimization Hub
            </span>
            <h2 id="seo-hub-heading" className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              AI Chatbot Development Company in Patna, Bihar
            </h2>
            <p className="text-gray-500 text-sm mt-3 font-light">
              Elevating digital user experiences with context-aware, 24/7 autonomous support engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-neutral-400 text-sm font-light leading-relaxed">
            <div className="space-y-6">
              <h3 id="why-choose-patna-chatbot" className="text-white font-bold text-lg">Why Choose a Patna-based AI Chatbot Developer?</h3>
              <p>
                In today's fast-paced digital economy, businesses in Patna, Muzaffarpur, Gaya, and Bhagalpur require smart automation to handle customer queries instantly. As the premier <strong className="text-white">AI chatbot company in Patna, Bihar</strong>, Webflora Technologies designs intelligent conversational workflows that allow you to capture high-intent leads and resolve support tickets 24/7 without growing your support team overhead.
              </p>
              <p>
                Whether you run an educational institute, healthcare clinic, real estate office, or ecommerce store, our custom chatbots act as virtual assistants, speaking directly to your audience in their native language and guiding them through complex workflows.
              </p>
            </div>

            <div className="space-y-6">
              <h3 id="omnichannel-capabilities" className="text-white font-bold text-lg">Omnichannel Capabilities: Web, Mobile, and WhatsApp Integration</h3>
              <p>
                We do not build generic button-based responders. We build advanced NLP systems backed by technologies like RAG (Retrieval-Augmented Generation) and custom LLM interfaces. This allows your virtual agent to absorb your training documents and respond with accurate answers.
              </p>
              <p>
                Additionally, we specialize in <strong className="text-white">WhatsApp Business API integration in Patna</strong>, mapping chatbot pipelines to your WhatsApp numbers so users can query catalogs, track orders, or book appointments directly inside their favorite messaging app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10">
        <FaqSection 
          title="AI Chatbot Development" 
          faqs={vegavanFaqs} 
        />
      </section>

      {/* FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": vegavanFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "AI Chatbot Development Services",
            "image": "https://webfloratechnologies.com/webflora-logo.svg",
            "description": "Custom-engineered autonomous conversational AI chatbot design, development, and integration services in Patna, Bihar by Webflora Technologies.",
            "brand": {
              "@type": "Brand",
              "name": "Webflora Technologies"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "4999",
              "highPrice": "19999",
              "offerCount": "3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "18"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Albert Newwel"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "We had an amazing experience working with Webflora Technologies. They built a highly scalable digital portal and automated systems, exactly the way we envisioned. Excellent service."
              }
            ]
          })
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://webfloratechnologies.com/it-company-in-patna/ai-chatbot-company-in-patna#webpage",
            "url": "https://webfloratechnologies.com/it-company-in-patna/ai-chatbot-company-in-patna",
            "name": "AI Chatbot Company in Patna | AI Chatbot Development in Bihar",
            "headline": "AI Chatbot Company in Patna | AI Chatbot Development in Bihar",
            "description": "Webflora Technologies is the leading AI chatbot company in Patna, Bihar. We design and deploy custom intelligent NLP chatbots to automate customer support 24/7.",
            "datePublished": "2026-01-01T00:00:00+05:30",
            "dateModified": "2026-07-02T00:00:00+05:30",
            "publisher": {
              "@type": "Organization",
              "name": "Webflora Technologies",
              "url": "https://webfloratechnologies.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://webfloratechnologies.com/title-logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Shashank Manohar",
              "url": "https://webfloratechnologies.com/#founder-shashank",
              "sameAs": [
                "https://www.linkedin.com/in/shashank-manohar-patna/"
              ]
            }
          })
        }}
      />
    </main>
  );
}

const vegavanFaqs = [
  {
    question: "Who is the best AI Chatbot development company in Patna, Bihar?",
    answer: "Webflora Technologies is the leading AI Chatbot development company in Patna, Bihar. We design, train, and deploy advanced, custom intelligent conversational AI chatbots (powered by our proprietary Vegavan AI engine) to help local and global businesses automate 90% of customer support and sales queries.",
    icon: "lucide:bot"
  },
  {
    question: "How can an AI Chatbot help businesses in Patna and Bihar?",
    answer: "Our AI chatbots work 24/7/365 to handle customer queries, capture high-intent leads, book appointments, and support multilingual chats in 80+ languages. They allow schools, clinics, coaching centers, and ecommerce brands in Bihar to save over 40 hours of manual labor per week.",
    icon: "lucide:clock"
  },
  {
    question: "Is data privacy secured by your AI Chatbot company?",
    answer: "Absolutely. Data security is our primary focus. All chat histories, customer details, and business training materials are handled over SSL-encrypted transit channels and reside in secure database environments, meeting all compliance standards.",
    icon: "lucide:shield-check"
  },
  {
    question: "Can the chatbot integrate with my existing website and CRM?",
    answer: "Yes. Our AI chatbots are designed to install in under 60 seconds using a single script tag. They work seamlessly on Next.js, React, WordPress, Shopify, Webflow, and custom HTML dashboards, automatically syncing captured leads directly to your email or CRM.",
    icon: "lucide:users"
  }
];
