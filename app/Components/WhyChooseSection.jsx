"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Fast Support Response" },
  { value: "100%", label: "Modern Technology Stack" },
];

const cards = [
  {
    icon: "solar:ranking-linear",
    title: "Results-Driven Approach",
    desc: "We focus on solving complex business problems, improving operational efficiency, generating high-quality leads, and helping companies achieve measurable growth through cutting-edge technology. Our digital solutions are built to yield maximum ROI for startups and enterprise brands in Patna, Bihar, and across India.",
  },
  {
    icon: "solar:bolt-linear",
    title: "Performance & Speed Optimized",
    desc: "Every website, portal, and custom software solution we ship is fully optimized for lightning-fast loading speeds, excellent user experiences, and 99+ score Core Web Vitals. We use static regeneration and server-side rendering to ensure your systems perform smoothly under heavy traffic loads.",
  },
  {
    icon: "solar:graph-up-linear",
    title: "SEO & Growth Focused Development",
    desc: "We develop search-friendly web apps integrated with technical SEO configurations, structured schema markups, and modern crawlable architectures. This allows businesses in Bihar to rank at the top of search engine result pages, improving organic visibility and inbound organic leads.",
  },
  {
    icon: "solar:cpu-linear",
    title: "AI & Automation Expertise",
    desc: "From custom workflow automation via n8n to LLM-powered chatbot agents, we integrate state-of-the-art artificial intelligence to eliminate manual bottlenecks, streamline internal communications, and automate customer support round-the-clock. This saves organizations in India hundreds of manual hours every week.",
  },
  {
    icon: "solar:shield-keyhole-linear",
    title: "Secure & Scalable Solutions",
    desc: "Our software architecture is designed to support future business expansion while keeping user data highly secure. We use decoupled backend systems, encrypted database connections, and secure API gateways to ensure absolute reliability, performance, and compliance with industry standards.",
  },
  {
    icon: "solar:users-group-two-rounded-linear",
    title: "Experienced Development Team",
    desc: "Our developers, UI/UX designers, and performance marketing specialists work together under founder-led execution to deliver high-quality solutions. With deep expertise in Next.js, Node.js, and cloud systems, we build modern platforms tailored specifically to your unique business operations.",
  },
  {
    icon: "solar:chat-square-call-linear",
    title: "Transparent Communication",
    desc: "We maintain absolute clarity throughout the development lifecycle. Clients receive weekly progress updates, clear project milestones, and live staging sandbox links. You will have direct communication channels with our engineering team, ensuring no details get lost in translation.",
  },
  {
    icon: "solar:settings-minimalistic-linear",
    title: "Long-Term Support & Maintenance",
    desc: "We provide dedicated post-launch support to keep your systems running flawlessly. Our maintenance services include automated database backups, library upgrades, security patches, local SEO health checks, and minor feature integrations to ensure your technology platform stays ahead of competitors.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhyChooseSection({ title, subtitle, cards: customCards }) {
  const displayCards = customCards || cards;
  const displayTitle = title || (
    <>
      Why Choose <span className="text-[#FF3B00]">Webflora Technologies</span>
    </>
  );
  const displaySubtitle = subtitle || "Businesses choose Webflora Technologies because we combine technology, strategy, and innovation to build solutions that drive measurable business growth. Our team focuses on creating scalable, secure, and high-performance digital products that deliver long-term value.";

  return (
    <section id="why-choose" className="py-24 bg-black text-white relative overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-orange-600/[0.03] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/[0.02] blur-3xl rounded-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Header / Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 text-xs text-[#FF3B00] font-bold uppercase tracking-wider">
            🤝 Trust & Reliability
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none font-display">
            {displayTitle}
          </h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* Real Proof Points / Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-8 rounded-3xl bg-zinc-950/40 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3B00]/[0.02] rounded-full blur-xl pointer-events-none" />
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-3xl md:text-5xl font-black text-[#FF3B00] font-display">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayCards.map((card, i) => (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3B00]/5 border border-[#FF3B00]/10 flex items-center justify-center text-[#FF3B00] group-hover:scale-110 transition-transform">
                  <Icon icon={card.icon} width={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-3 group-hover:text-[#FF3B00] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
