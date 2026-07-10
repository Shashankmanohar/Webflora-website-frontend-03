"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { industriesData } from "./data";
import TrustSignals from "../Components/TrustSignals";

const sectors = Object.entries(industriesData);

const allIndustriesFaqs = [
  {
    question: "How does Webflora build solutions tailored to my specific industry?",
    answer: "We don't believe in one-size-fits-all software. We start with a comprehensive audit of your operations, design custom database schemas, optimize specific workflows (such as HIPAA-inspired medical encryption or B2B distributor portal access levels), and construct high-performance frontend interfaces with Next.js."
  },
  {
    question: "Do you handle regulatory compliance and data security?",
    answer: "Absolutely. Security is central to all our products. We implement role-based access control (RBAC), end-to-end SSL/TLS protocols, and secure database backups on private cloud VPCs. For healthcare, we design with HIPAA compliance guidelines in mind; for retail, we integrate secure, certified payment systems."
  },
  {
    question: "Can you integrate our custom software with existing third-party APIs?",
    answer: "Yes, we design robust REST and GraphQL API integrations to connect your custom ERP, clinic portal, or school website with inventory barcode scanners, specialized medical equipment, ERP tools, and local shipping/payment gateways (like Razorpay, Shiprocket, or Delhivery)."
  },
  {
    question: "How long does it take to deploy a custom industry-focused system?",
    answer: "A standard informational website or light portal is typically delivered in 2 to 4 weeks. Complex enterprise-grade software, such as custom manufacturing ERPs or full Learning Management Systems (LMS), spans 6 to 12 weeks from planning to final cloud deployment."
  },
  {
    question: "Do you offer post-deployment technical support?",
    answer: "Yes, we provide ongoing support contracts that cover server management, security patch deployment, regular database backups, SEO health checks, and feature updates to make sure your digital systems scale smoothly."
  }
];

export default function AllIndustriesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#030303] text-white min-h-screen pt-24 pb-16 font-sans">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#FF3B00]/5 rounded-full blur-3xl" />
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 4)", "--duration": "9s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 12)", "--duration": "11s", "--delay": "2s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 20)", "--duration": "13s", "--delay": "4s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 28)", "--duration": "10s", "--delay": "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Section */}
        <div className="max-w-3xl mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00]" />
            Enterprise Digital Transformation
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none">
            Digital Architecture Built for <span className="text-[#FF3B00]">Your Industry</span>
          </h1>
          
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            At Webflora Technologies, we combine modern full-stack development, database security, and custom automation to build high-performance systems for critical sectors. Explore our industry-specific solutions starting from ₹30,000.
          </p>
        </div>

        <div className="mb-20">
          <TrustSignals />
        </div>

        {/* Sectors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 mb-24"
        >
          {sectors.map(([slug, data], index) => {
            const isEven = index % 2 === 0;
            const keyMetric = data.benefits?.[0];

            return (
              <motion.div
                key={slug}
                variants={itemVariants}
                className="group relative bg-zinc-950 border border-zinc-800/80 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 hover:border-[#FF3B00]/25 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Visual Accent Backdrops */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF3B00]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Content Side */}
                <div className="flex-1 space-y-6 z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      Sector 0{index + 1}
                    </span>
                    {keyMetric && (
                      <span className="text-[10px] font-black uppercase bg-[#FF3B00]/10 border border-[#FF3B00]/15 text-[#FF3B00] px-2.5 py-0.5 rounded-full">
                        {keyMetric.stat} {keyMetric.metric}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#FF3B00] transition-colors duration-300">
                    {data.title}
                  </h2>

                  <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
                    {data.subtext}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
                    <div className="space-y-2.5">
                      <div className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
                        Operational Challenges
                      </div>
                      {data.problems.slice(0, 3).map((prob, pi) => (
                        <div key={pi} className="flex items-start gap-2 text-xs text-zinc-400">
                          <Icon icon="solar:close-circle-bold-duotone" className="text-zinc-600 mt-0.5 flex-shrink-0" width={14} />
                          <span>{prob}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-[10px] font-black tracking-widest text-[#FF3B00] uppercase">
                        Our Engineered Solutions
                      </div>
                      {data.solutions.slice(0, 3).map((sol, si) => (
                        <div key={si} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Icon icon="solar:check-circle-bold-duotone" className="text-[#FF3B00]/80 mt-0.5 flex-shrink-0" width={14} />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call-to-action block on the right */}
                <div className="lg:w-[280px] flex flex-col justify-between items-start lg:items-end p-6 bg-zinc-900/40 border border-zinc-900 rounded-2xl z-10">
                  <div className="space-y-4">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                      Core Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.techStack?.map((tech, ti) => (
                        <div key={ti} className="flex items-center gap-1 px-2.5 py-1 bg-black/60 border border-zinc-800 rounded-lg text-xs font-medium text-zinc-300">
                          <Icon icon={tech.icon} width={12} height={12} />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/industries/${slug}`}
                    className="mt-8 lg:mt-0 w-full px-5 py-3 bg-[#FF3B00] hover:bg-[#ff4e1a] text-white text-xs font-black uppercase tracking-wider rounded-xl text-center shadow-[0_8px_20px_rgba(255,59,0,0.2)] hover:shadow-[0_12px_25px_rgba(255,59,0,0.35)] transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.01]"
                  >
                    <span>View Case Study</span>
                    <Icon icon="solar:arrow-right-linear" width={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* General AEO FAQ Accordion */}
        <div className="border-t border-zinc-900 pt-24 mb-16">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tight">
                Frequently Asked <span className="text-[#FF3B00]">Questions</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">
                Got questions about how we custom-tailor our technology systems for different industry sectors? Find answers below.
              </p>
            </div>

            <div className="space-y-3">
              {allIndustriesFaqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-zinc-800/80 rounded-2xl bg-zinc-950/60 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <h2 className="text-sm font-bold text-white pr-4 leading-snug">
                        {faq.question}
                      </h2>
                      <div className={`w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#FF3B00] text-white" : ""}`}>
                        <Icon icon="solar:alt-arrow-down-linear" width={14} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-5 text-xs md:text-sm text-zinc-400 leading-relaxed font-light border-t border-zinc-900/50 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* SEO Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Webflora Technologies Industry Solutions",
            "serviceType": "Custom Software, ERP, and LMS Solutions",
            "provider": {
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": "India",
            "description": "Webflora Technologies builds high-performance digital systems, custom ERPs, and secure web portals tailored for Healthcare, Education, Real Estate, Manufacturing, and Retail."
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Industries",
                "item": "https://webfloratechnologies.com/industries"
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allIndustriesFaqs.map(faq => ({
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
    </div>
  );
}
