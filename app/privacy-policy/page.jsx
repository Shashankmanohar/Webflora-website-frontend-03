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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-300 selection:bg-[#ff3b00] selection:text-white pt-24 pb-20 px-6">
      {/* Ambient background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#ff3b00] rounded-full mix-blend-screen blur-[120px] opacity-[0.05] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-900 rounded-full mix-blend-screen blur-[100px] opacity-[0.05] animate-pulse" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={item} className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
            Privacy <span className="text-[#ff3b00]">Policy</span>
          </h1>
          <p className="text-neutral-500 text-sm font-light italic">
            Effective Date: April 30, 2026
          </p>
        </motion.div>

        <div className="space-y-10 text-neutral-300 font-light leading-relaxed">
          <motion.section variants={item}>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-snug max-w-3xl">
              Webflora Technologies (“we,” “our,” or “us”) provides web development, mobile app development, software solutions, automation, and digital marketing services. This Privacy Policy explains how we collect, use, and protect your information.
            </p>
          </motion.section>

          <motion.section variants={item} className="space-y-8">
            <h2 className="text-3xl font-semibold text-white flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00]">
                <Icon icon="solar:user-id-linear" width={24} />
              </span>
              Information We Collect
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#ff3b00]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,59,0,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <h3 className="text-xl text-white font-medium mb-4 relative z-10 flex items-center gap-2">
                   Information You Provide
                </h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Name, email address, phone number",
                    "Company/business details",
                    "Project requirements, files, credentials",
                    "Communication data (emails, messages, calls)"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff3b00]/50" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#ff3b00]/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,59,0,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                <h3 className="text-xl text-white font-medium mb-4 relative z-10">
                   Automatically Collected Data
                </h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "IP address",
                    "Browser type and device information",
                    "Pages visited, session duration",
                    "Referral sources"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-[#ff3b00]/30 transition-all duration-500">
              <h3 className="text-xl text-white font-medium mb-4 flex items-center gap-2">
                <Icon icon="solar:card-2-linear" className="text-[#ff3b00]" />
                 Payment Information
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Billing details and transaction records. (Payments are processed via secure third-party gateways. We do not store card details.)
              </p>
            </div>
          </motion.section>

          <motion.section variants={item} className="space-y-6">
            <h2 className="text-2xl font-semibold text-white flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#ff3b00]/10 border border-[#ff3b00]/20 flex items-center justify-center text-[#ff3b00]">
                <Icon icon="solar:settings-linear" width={22} />
              </span>
              How We Use Your Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { text: "Deliver and manage our services", icon: "solar:delivery-linear" },
                { text: "Communicate regarding projects, updates, and support", icon: "solar:chat-round-line-linear" },
                { text: "Improve website performance and user experience", icon: "solar:graph-up-linear" },
                { text: "Run marketing campaigns (SEO, Ads, remarketing)", icon: "solar:tag-linear" },
                { text: "Ensure security and prevent fraud", icon: "solar:shield-check-linear" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3b00]/5 flex items-center justify-center text-[#ff3b00] group-hover:bg-[#ff3b00] group-hover:text-white transition-all">
                    <Icon icon={item.icon} width={20} />
                  </div>
                  <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <motion.section variants={item} className="space-y-4 p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <h2 className="text-2xl font-semibold text-white">Legal Basis</h2>
              <p className="text-neutral-400 text-sm italic">India Compliance & GDPR standards</p>
              <ul className="space-y-3">
                {[
                  "Your explicit consent",
                  "Contractual necessity for project execution",
                  "Legitimate business interests"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Icon icon="solar:check-circle-linear" className="text-[#ff3b00]" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section variants={item} className="space-y-4 p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
              <p className="text-sm text-neutral-400 mb-4">We do not sell your data. Trusted partners include:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hosting providers",
                  "Analytics tools",
                  "Ad platforms",
                  "Payment processors",
                  "Legal authorities"
                ].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400 hover:text-[#ff3b00] hover:border-[#ff3b00]/50 transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>
          </div>

          <motion.section variants={item} className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Data Retention", desc: "Duration of the project or as required for legal purposes.", icon: "solar:history-linear" },
              { title: "Data Security", desc: "Secure hosting, encryption, and regular monitoring.", icon: "solar:lock-password-linear" },
              { title: "Cookies Policy", desc: "Used to analyze traffic and improve performance.", icon: "solar:cookie-linear" }
            ].map((box, i) => (
              <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#ff3b00]/20 transition-all">
                <Icon icon={box.icon} width={24} className="text-[#ff3b00] mb-4" />
                <h3 className="text-white font-medium mb-2">{box.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </motion.section>

          <motion.section variants={item} className="p-8 rounded-3xl bg-[#ff3b00]/5 border border-[#ff3b00]/10">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-neutral-400 mb-6">You may request access, correction, or deletion of your data at any time.</p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm">Access Data</div>
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm">Request Deletion</div>
               <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm">Withdraw Consent</div>
            </div>
          </motion.section>

          <motion.section variants={item} className="pt-12 border-t border-white/5">
            <h2 className="text-2xl font-semibold text-white mb-6">11. Contact Us</h2>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <p className="text-white font-medium mb-1">Webflora Technologies</p>
              <p className="text-sm text-neutral-500 mb-4">NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India</p>
              <a 
                href="mailto:hello.webflora@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff3b00] text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
              >
                <Icon icon="solar:letter-linear" width={20} />
                hello.webflora@gmail.com
              </a>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
