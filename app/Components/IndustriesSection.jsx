"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { industriesData } from "../industries/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Map industries to icons and custom glow gradients for the homepage section
const industryMeta = {
  healthcare: {
    icon: "solar:heart-pulse-bold-duotone",
    glow: "bg-red-600/10",
    border: "group-hover:border-red-500/30",
    accent: "text-red-500",
  },
  education: {
    icon: "solar:case-minimalistic-bold-duotone",
    glow: "bg-blue-600/10",
    border: "group-hover:border-blue-500/30",
    accent: "text-blue-500",
  },
  "real-estate": {
    icon: "solar:home-2-bold-duotone",
    glow: "bg-emerald-600/10",
    border: "group-hover:border-emerald-500/30",
    accent: "text-emerald-500",
  },
  manufacturing: {
    icon: "solar:settings-bold-duotone",
    glow: "bg-purple-600/10",
    border: "group-hover:border-purple-500/30",
    accent: "text-purple-500",
  },
  retail: {
    icon: "solar:shop-2-bold-duotone",
    glow: "bg-[#FF3B00]/10",
    border: "group-hover:border-[#FF3B00]/30",
    accent: "text-[#FF3B00]",
  },
  startups: {
    icon: "solar:rocket-bold-duotone",
    glow: "bg-orange-600/10",
    border: "group-hover:border-orange-500/30",
    accent: "text-orange-500",
  },
  ecommerce: {
    icon: "solar:cart-large-4-bold-duotone",
    glow: "bg-sky-600/10",
    border: "group-hover:border-sky-500/30",
    accent: "text-sky-500",
  },
};

export default function IndustriesSection() {
  const industries = Object.entries(industriesData);

  return (
    <section className="py-24 relative bg-black text-white overflow-hidden border-b border-white/5">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider text-neutral-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00]" />
            Industry Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight uppercase"
          >
            Sectors We <span className="text-[#FF3B00]">Transform</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto"
          >
            We build secure, compliant, and lightning-fast digital systems tailored specifically to handle your industry's operational hurdles and drive growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map(([slug, data], index) => {
            const meta = industryMeta[slug] || {
              icon: "solar:globus-bold-duotone",
              glow: "bg-orange-600/10",
              border: "group-hover:border-orange-500/30",
              accent: "text-orange-500",
            };

            // Retrieve the first key benefit metric if present
            const keyMetric = data.benefits?.[0];

            return (
              <motion.div
                key={slug}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-zinc-950 border border-zinc-800 p-8 transition-all duration-300 hover:bg-zinc-900/60 overflow-hidden"
              >
                {/* Glow effect backdrops */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-500 opacity-60 group-hover:opacity-100 ${meta.glow}`} />

                {/* Top: Icon & Metric Tag */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-colors duration-300 group-hover:bg-black group-hover:border-zinc-700 ${meta.accent}`}>
                    <Icon icon={meta.icon} width={24} height={24} />
                  </div>

                  {keyMetric && (
                    <div className="px-3 py-1 bg-white/5 border border-white/5 rounded-full flex items-center gap-1.5">
                      <span className={`text-xs font-black tracking-tight ${meta.accent}`}>
                        {keyMetric.stat}
                      </span>
                      <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                        {keyMetric.metric}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF3B00] transition-colors duration-300">
                  {data.title}
                </h3>
                
                <p className="text-sm text-zinc-400 line-clamp-3 mb-6 font-light leading-relaxed">
                  {data.subtext}
                </p>

                {/* Problems checklist preview */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
                    Resolving:
                  </div>
                  {data.problems.slice(0, 2).map((prob, pi) => (
                    <div key={pi} className="flex items-start gap-2 text-xs text-zinc-400">
                      <Icon icon="solar:shield-warning-bold-duotone" className="text-zinc-600 mt-0.5 flex-shrink-0" width={14} />
                      <span className="line-clamp-1">{prob}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-zinc-900 group-hover:border-zinc-800/80 transition-colors flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors duration-300">
                    Explore Solutions
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF3B00] group-hover:text-white group-hover:border-[#FF3B00]">
                    <Icon icon="solar:alt-arrow-right-linear" width={16} />
                  </div>
                </div>

                {/* Click overlay link */}
                <Link href={`/industries/${slug}`} className="absolute inset-0 z-20" aria-label={`View solutions for ${data.title}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
