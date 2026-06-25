"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const websiteSteps = [
  {
    title: "Discovery",
    desc: "We deep dive into your business model, understand your pain points, and define clear objectives.",
    icon: "solar:compass-linear",
  },
  {
    title: "UI/UX Design",
    desc: "Crafting intuitive, high-fidelity prototypes that visualize the solution before a single line of code is written.",
    icon: "solar:pallete-2-linear",
  },
  {
    title: "Development",
    desc: "Agile development using scalable architecture and clean code, with regular updates and feedback loops.",
    icon: "solar:code-circle-linear",
  },
  {
    title: "SEO Setup",
    desc: "Structuring semantic HTML5 markup, optimizing metadata, and adding schema tags to boost Google rankings.",
    icon: "solar:graph-linear",
  },
  {
    title: "Testing",
    desc: "Rigorous quality check, speed optimization, and cross-device testing to ensure bug-free operation.",
    icon: "solar:shield-check-linear",
  },
  {
    title: "Launch",
    desc: "Secure deployment to production cloud infrastructure with continuous delivery setups.",
    icon: "solar:rocket-linear",
  },
  {
    title: "Maintenance",
    desc: "Continuous post-launch system monitoring, package updates, patches, and feature additions.",
    icon: "solar:settings-linear",
  },
];

const softwareSteps = [
  {
    title: "Discovery & Consultation",
    desc: "We analyze your business workflow, gather system specifications, and define custom solution requirements.",
    icon: "solar:compass-linear",
  },
  {
    title: "Planning & Architecture",
    desc: "Structuring the database schemas, API maps, and cloud infrastructure pipelines to guarantee scalability.",
    icon: "solar:settings-linear",
  },
  {
    title: "UI/UX Design",
    desc: "Crafting modern, interactive dashboard mockups and mobile screen wireframes with conversion-focused UX.",
    icon: "solar:pallete-2-linear",
  },
  {
    title: "Development",
    desc: "Writing clean, type-safe code using Next.js, Node.js, and scalable cloud databases with agile feedback runs.",
    icon: "solar:code-circle-linear",
  },
  {
    title: "Quality Assurance",
    desc: "Rigorous automation testing, vulnerability scans, speed checks, and validation parameters prior to shipping.",
    icon: "solar:shield-check-linear",
  },
  {
    title: "Deployment",
    desc: "Staging sandbox evaluation, DNS mapping, and smooth deployment to secure production cloud nodes (AWS/Vercel).",
    icon: "solar:rocket-linear",
  },
  {
    title: "Maintenance & Support",
    desc: "Continuous SLA support, database backups, security patches, library upgrades, and minor feature integrations.",
    icon: "solar:headphones-round-sound-linear",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState("website");
  const steps = activeTab === "website" ? websiteSteps : softwareSteps;

  return (
    <section id="process" className="py-24 bg-neutral-950 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Switcher Tab Bar */}
        <div className="flex justify-center gap-3 mb-12 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab("website")}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activeTab === "website"
                ? "bg-white text-black border-white"
                : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
            }`}
          >
            Website Process
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`flex-1 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
              activeTab === "software"
                ? "bg-white text-black border-white"
                : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
            }`}
          >
            Software Process
          </button>
        </div>

        {/* Dynamic Title */}
        <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tighter text-center mb-16 uppercase">
          {activeTab === "website" ? (
            <>Website <span className="text-orange-600">Development Process</span></>
          ) : (
            <>Our <span className="text-orange-600">Software Development Process</span></>
          )}
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-12 relative"
            >
              {steps.map((step, i) => {
                const isEven = i % 2 === 1;

                return (
                  <motion.div
                    key={step.title}
                    variants={item}
                    className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
                  >
                    {/* Left */}
                    <div
                      className={`flex-1 ${isEven
                        ? "md:text-right md:pr-12 opacity-50 hidden md:block"
                        : "md:text-right md:pr-12"
                        }`}
                    >
                      {!isEven && (
                        <>
                          <h3 className="font-display font-bold text-2xl text-orange-600">
                            {step.title}
                          </h3>
                          <p className="text-gray-200 mt-2 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-12 h-12 rounded-full bg-black border border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,60,0,0.3)] shrink-0"
                    >
                      <Icon
                        icon={step.icon}
                        className="text-primary"
                        width={24}
                      />
                    </motion.div>

                    {/* Right */}
                    <div
                      className={`flex-1 ${isEven
                        ? "md:pl-12"
                        : "md:pl-12 opacity-50 hidden md:block"
                        }`}
                    >
                      {isEven && (
                        <>
                          <h3 className="font-display font-bold text-2xl text-orange-600">
                            {step.title}
                          </h3>
                          <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
