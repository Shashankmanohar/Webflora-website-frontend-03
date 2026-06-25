"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const techCategories = [
  { id: "all", label: "All Tech", icon: "solar:layers-bold" },
  { id: "frontend", label: "Frontend", icon: "solar:window-frame-bold" },
  { id: "backend", label: "Backend", icon: "solar:server-square-bold" },
  { id: "mobile", label: "Mobile Apps", icon: "solar:smartphone-bold" },
  { id: "cloud", label: "Cloud & Data", icon: "solar:database-bold" },
  { id: "ai", label: "AI & Workflow", icon: "solar:cpu-bold" },
];

const technologies = [
  // Frontend
  {
    name: "Next.js",
    category: "frontend",
    icon: "logos:nextjs-icon",
    desc: "Server-side rendering & static generation for 99+ Lighthouse speed scores.",
    color: "#ffffff",
    invert: true
  },
  {
    name: "React",
    category: "frontend",
    icon: "logos:react",
    desc: "Component-driven user interfaces with fluid dynamic states.",
    color: "#61daf4"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "logos:tailwindcss-icon",
    desc: "Utility-first responsive layouts with streamlined CSS payloads.",
    color: "#38bdf8"
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "logos:typescript-icon",
    desc: "Static typing for secure, bug-free, and scalable codebases.",
    color: "#3178c6"
  },
  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "logos:nodejs-icon",
    desc: "Asynchronous runtime for fast, scalable, and secure backend APIs.",
    color: "#339933"
  },
  {
    name: "Python",
    category: "backend",
    icon: "logos:python",
    desc: "Perfect for data pipelines, AI models, and heavy backend computation.",
    color: "#3776ab"
  },
  {
    name: "FastAPI",
    category: "backend",
    icon: "logos:fastapi-icon",
    desc: "High-performance framework for automated OpenAPI documentation.",
    color: "#059669"
  },
  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    icon: "logos:flutter",
    desc: "Native performance iOS and Android builds from a single codebase.",
    color: "#02569b"
  },
  {
    name: "React Native",
    category: "mobile",
    icon: "logos:react",
    desc: "Cross-platform mobile apps leveraging reusable React modules.",
    color: "#61daf4"
  },
  {
    name: "Swift",
    category: "mobile",
    icon: "logos:swift",
    desc: "Native iOS app development for deep system integrations.",
    color: "#f05138"
  },
  // Cloud
  {
    name: "PostgreSQL",
    category: "cloud",
    icon: "logos:postgresql",
    desc: "Robust relational database with strict validation constraints.",
    color: "#4169e1"
  },
  {
    name: "MongoDB",
    category: "cloud",
    icon: "logos:mongodb-icon",
    desc: "Flexible Document-store database for high-throughput app data.",
    color: "#47a248"
  },
  {
    name: "AWS",
    category: "cloud",
    icon: "logos:aws",
    desc: "Secure enterprise hosting on ECS, VPCs, and S3 CDN buckets.",
    color: "#ff9900",
    invert: true
  },
  {
    name: "Docker",
    category: "cloud",
    icon: "logos:docker-icon",
    desc: "Containerized application packaging to guarantee staging-production parity.",
    color: "#2496ed"
  },
  // AI & Automation
  {
    name: "OpenAI",
    category: "ai",
    icon: "logos:openai-icon",
    desc: "Custom GPT pipelines, prompt engineering, and semantic vectors.",
    color: "#10a37f",
    invert: true
  },
  {
    name: "n8n Automation",
    category: "ai",
    icon: "logos:n8n-icon",
    desc: "Autonomous workflow pipelines to connect legacy tools and CRM data.",
    color: "#ff6d5a"
  }
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredTech = activeCategory === "all"
    ? (showAll ? technologies : technologies.slice(0, 8))
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section className="relative py-28 bg-[#030303] border-y border-white/5 overflow-hidden w-full">

      {/* Background grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg opacity-30" />
        <div className="creative-grid-dots opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-medium tracking-wide uppercase">
            ⚡ Engineered For Scale
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight uppercase">
            Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-extrabold">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
            We build with cutting-edge languages and cloud frameworks to deliver fast, secure, and search-optimized digital architectures.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 max-w-3xl mx-auto">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === category.id
                  ? "bg-white text-black border-white shadow-lg shadow-white/5"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:text-white hover:bg-white/10"
                }`}
            >
              <Icon icon={category.icon} className="text-sm md:text-base" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={tech.name}
                whileHover={{ y: -6 }}
                style={{
                  "--glow-color": tech.color,
                }}
                className="group relative p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[var(--glow-color)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_var(--glow-color)]/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Icon
                      icon={tech.icon}
                      width={28}
                      className={`transition-all duration-300 ${tech.invert ? "brightness-100 group-hover:brightness-125" : ""
                        }`}
                    />
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-600 bg-neutral-900/50 px-2.5 py-1 rounded-md">
                    {tech.category}
                  </span>
                </div>

                <h3 className="font-bold text-white text-lg mb-2 flex items-center gap-1.5">
                  {tech.name}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {tech.desc}
                </p>

                {/* Subtle bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-t-full transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {activeCategory === "all" && technologies.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2.5 px-8 py-3 rounded-full border border-orange-500/30 bg-orange-500/5 hover:bg-orange-500 hover:text-black font-bold uppercase tracking-wider text-xs transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/10"
            >
              {showAll ? "Show Less Tech" : "Show All Tech"}
              <Icon icon={showAll ? "solar:arrow-up-linear" : "solar:arrow-down-linear"} width={16} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
