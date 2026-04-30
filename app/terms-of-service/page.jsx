"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 selection:bg-[#ff3b00] selection:text-white pt-24 pb-20 px-6">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-[#ff3b00] rounded-full mix-blend-screen blur-[120px] opacity-[0.05] animate-pulse" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-blue-900 rounded-full mix-blend-screen blur-[100px] opacity-[0.05] animate-pulse" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={item} className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
            Terms of <span className="text-[#ff3b00]">Service</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light italic">
            Effective Date: April 30, 2026
          </p>
        </motion.div>

        <div className="space-y-10 text-neutral-300 font-light leading-relaxed">
          <motion.section variants={item}>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-snug max-w-3xl">
              By accessing or using Webflora Technologies services, you agree to the following Terms of Service. These terms outline the relationship between Webflora and its clients.
            </p>
          </motion.section>

          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00]">
                <Icon icon="solar:widget-2-linear" width={22} />
              </span>
              Our Services
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Web Development", desc: "Custom websites & web applications built for scale." },
                { title: "Mobile Apps", desc: "Native and cross-platform mobile solutions." },
                { title: "Automation", desc: "ERP, software solutions, and AI automation." },
                { title: "Digital Marketing", desc: "SEO, Ads, and strategic lead generation." }
              ].map((service, i) => (
                <div key={i} className="group p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#ff3b00]/30 transition-all duration-500">
                  <h3 className="text-white font-medium mb-2 group-hover:text-[#ff3b00] transition-colors">{service.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.section variants={item} className="space-y-6 p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Icon icon="solar:calendar-mark-linear" className="text-[#ff3b00]" />
                Project Execution
              </h2>
              <ul className="space-y-4">
                {[
                  "Scope and deliverables defined pre-initiation",
                  "Out-of-scope requirements billed separately",
                  "Timelines subject to feedback and approvals"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                    <Icon icon="solar:alt-arrow-right-linear" className="text-[#ff3b00] mt-1 shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={item} className="space-y-6 p-8 rounded-3xl bg-[#0a0a0a] border border-white/5">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Icon icon="solar:bill-list-linear" className="text-[#ff3b00]" />
                Billing & Payments
              </h2>
              <div className="space-y-4">
                <p className="text-sm text-neutral-400">Advance payment is required for project commencement.</p>
                <div className="p-4 rounded-2xl bg-[#ff3b00]/5 border border-[#ff3b00]/10">
                  <p className="text-xs text-[#ff3b00] font-medium uppercase tracking-wider mb-1">Refund Policy</p>
                  <p className="text-sm text-neutral-300 font-light">Payments are non-refundable unless agreed in writing.</p>
                </div>
              </div>
            </motion.section>
          </div>

          <motion.section variants={item} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Client Responsibilities</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">Clients agree to provide accurate information, deliver content and approvals on time, and ensure lawful use of delivered services.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Confidentiality</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">Both parties agree to maintain confidentiality of sensitive information shared during the course of the project.</p>
            </div>
          </motion.section>

          <motion.section variants={item} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">Intellectual Property</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Transfer", desc: "Final deliverables transferred upon full payment." },
                { title: "Ownership", desc: "Core source code and frameworks remain our property." },
                { title: "Case Studies", desc: "We reserve the right to showcase completed work." }
              ].map((ip, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-[#ff3b00] text-sm font-medium">{ip.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">{ip.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={item} className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Liability", desc: "We are not liable for business losses or third-party service failures.", icon: "solar:shield-warning-linear" },
              { title: "Support", desc: "Limited to agreed duration. Maintenance may incur charges.", icon: "solar:chat-round-line-linear" },
              { title: "Termination", desc: "We may suspend services for payment or ethical violations.", icon: "solar:stop-circle-linear" }
            ].map((box, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5">
                <Icon icon={box.icon} width={24} className="text-[#ff3b00] mb-4" />
                <h3 className="text-white font-medium mb-2 text-sm">{box.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </motion.section>

          <motion.section variants={item} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">Governing Law</h2>
            <p className="text-neutral-400 text-sm">These Terms are governed by the laws of India. Jurisdiction: Patna, Bihar.</p>
          </motion.section>

          <motion.section variants={item} className="text-center space-y-4">
            <h2 className="text-xl font-medium text-white">Modifications</h2>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto">We may update these Terms at any time. Continued use of services implies acceptance of the updated terms.</p>
          </motion.section>

          <motion.section variants={item} className="pt-12 border-t border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">12. Contact</h2>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <p className="text-white font-medium mb-4">Webflora Technologies</p>
              <a 
                href="mailto:hello.webflora@gmail.com" 
                className="text-[#ff3b00] text-lg hover:underline transition-all"
              >
                hello.webflora@gmail.com
              </a>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
