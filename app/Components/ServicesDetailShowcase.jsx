import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "web",
    title: "Website Development",
    badge: "Best Website Company in Patna",
    href: "/services/website-development-company-in-patna",
    icon: "solar:display-bold",
    themeColor: "#FF3B00",
    color: "from-orange-500/10 via-orange-600/5 to-transparent",
    glow: "rgba(255, 59, 0, 0.12)",
    textColor: "text-orange-400",
    hoverBorder: "hover:border-orange-500/30",
    activeBg: "bg-orange-500/10 border-orange-500/50 text-white shadow-[0_0_25px_rgba(255,59,0,0.15)]",
    bulletColor: "text-orange-400 bg-orange-500/10",
    desc: "Our website development services focus on creating fast, responsive, SEO-friendly websites using modern technologies that improve user experience and generate business leads.",
    included: [
      "Custom Website Development",
      "Ecommerce Website Development",
      "Responsive Web Design",
      "SEO-Friendly Websites",
      "Website Redesign Services",
      "Custom Web Applications"
    ],
    stats: [
      { label: "Load Speed", val: "<0.5s" },
      { label: "SEO Score", val: "100%" },
      { label: "Uptime", val: "99.9%" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    badge: "Top Mobile App Company in Patna",
    href: "/services/mobile-app-development-company-in-patna",
    icon: "solar:smartphone-line-duotone",
    themeColor: "#06b6d4",
    color: "from-cyan-500/10 via-cyan-600/5 to-transparent",
    glow: "rgba(6, 182, 212, 0.12)",
    textColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
    activeBg: "bg-cyan-500/10 border-cyan-500/50 text-white shadow-[0_0_25px_rgba(6, 182, 212, 0.15)]",
    bulletColor: "text-cyan-400 bg-cyan-500/10",
    desc: "We build Android, iOS, and cross-platform mobile applications designed to enhance customer engagement and support business growth.",
    included: [
      "Custom App Development",
      "iOS App Development",
      "Android App Development",
      "Cross-Platform App Development",
      "Gaming App Development",
      "AI Enabled App"
    ],
    stats: [
      { label: "Frame Rate", val: "60 FPS" },
      { label: "App Size", val: "<15MB" },
      { label: "Platforms", val: "iOS & Android" }
    ]
  },
  {
    id: "software",
    title: "Software Development",
    badge: "Top Rated Software Company in Patna",
    href: "/services/software-development-company-in-patna",
    icon: "solar:code-circle-bold-duotone",
    themeColor: "#3b82f6",
    color: "from-blue-500/10 via-blue-600/5 to-transparent",
    glow: "rgba(59, 130, 246, 0.12)",
    textColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
    activeBg: "bg-blue-500/10 border-blue-500/50 text-white shadow-[0_0_25px_rgba(59, 130, 246, 0.15)]",
    bulletColor: "text-blue-400 bg-blue-500/10",
    desc: "We develop custom software solutions tailored to business requirements. Our software development services include ERP systems, CRM platforms, inventory management software, HR management systems, and enterprise applications.",
    included: [
      "ERP System Development",
      "CRM Software Development",
      "Billing & Invoice Generator Software",
      "AI-Based Attendance System",
      "QR Code Attendance System",
      "Custom Business Software"
    ],
    stats: [
      { label: "Encryption", val: "AES-256" },
      { label: "Security", val: "RBAC" },
      { label: "Compliance", val: "MSME Reg." }
    ]
  },
  {
    id: "ai",
    title: "AI Automation",
    badge: "Best AI & Automation Company in Bihar",
    href: "/services/ai-automation-company-in-patna",
    icon: "solar:cpu-bold-duotone",
    themeColor: "#a855f7",
    color: "from-purple-500/10 via-purple-600/5 to-transparent",
    glow: "rgba(168, 85, 247, 0.12)",
    textColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/30",
    activeBg: "bg-purple-500/10 border-purple-500/50 text-white shadow-[0_0_25px_rgba(168, 85, 247, 0.15)]",
    bulletColor: "text-purple-400 bg-purple-500/10",
    desc: "We implement AI-powered automation solutions including chatbots, workflow automation, lead management systems, and business process optimization.",
    included: [
      "AI Chatbots for Customer Support",
      "Lead Qualification Automation",
      "WhatsApp Automation",
      "CRM Workflow Automation",
      "Data Extraction Automation",
      "n8n Automation Solutions"
    ],
    stats: [
      { label: "Efficiency Gain", val: "80%" },
      { label: "Integrations", val: "n8n / API" },
      { label: "Service", val: "24 / 7" }
    ]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    badge: "Best Digital Marketing Agency in Patna",
    href: "/services/digital-marketing-agency-in-patna",
    icon: "solar:ranking-bold-duotone",
    themeColor: "#10b981",
    color: "from-emerald-500/10 via-emerald-600/5 to-transparent",
    glow: "rgba(16, 185, 129, 0.12)",
    textColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/30",
    activeBg: "bg-emerald-500/10 border-emerald-500/50 text-white shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    bulletColor: "text-emerald-400 bg-emerald-500/10",
    desc: "Our digital marketing solutions include SEO, local SEO, content marketing, social media marketing, performance advertising, and lead generation campaigns.",
    included: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Google Ads (PPC Advertising)",
      "Lead Generation Strategies",
      "Content Marketing",
      "Website Performance Optimization"
    ],
    stats: [
      { label: "ROAS Target", val: "10x" },
      { label: "Local Map SEO", val: "3-Pack" },
      { label: "Lead Growth", val: "3x" }
    ]
  }
];

export default function ServicesDetailShowcase() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("web");

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="py-20 bg-[#020202] relative overflow-hidden border-t border-white/5">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-[65%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] transition-all duration-700 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${currentService.glow} 0%, rgba(0,0,0,0) 70%)` }}
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/[0.02] backdrop-blur-md text-[10px] text-neutral-400 font-mono tracking-widest uppercase rounded-none">
            🚀 Complete Digital Suite
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-none font-display">
            What We Do
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
          <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xl mx-auto">
            We build state-of-the-art websites, custom apps, enterprise systems, and AI workflows tailored precisely to your company's growth.
          </p>
        </motion.div>

        {/* Desktop Interface */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-stretch">

          {/* Left: Tab Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 justify-center pr-4 border-r border-white/5">
            {services.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group w-full text-left px-5 py-3.5 border transition-all duration-500 flex items-center gap-3.5 cursor-pointer rounded-none ${isActive
                      ? item.activeBg
                      : "bg-zinc-950/20 border-white/5 text-neutral-400 hover:text-white hover:bg-zinc-900/30 hover:border-white/10"
                    }`}
                  title={`View details for ${item.title}`}
                >
                  <div className={`p-2 transition-all duration-300 rounded-none ${isActive
                      ? "bg-white text-black"
                      : "bg-white/5 text-neutral-300 group-hover:bg-white/10"
                    }`}>
                    <Icon icon={item.icon} className="text-xl" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xs tracking-wider uppercase">{item.title}</h2>
                    <span className={`text-[9px] font-mono transition-opacity duration-300 ${isActive ? "text-white/80" : "text-neutral-500 group-hover:text-neutral-400"
                      }`}>
                      {item.badge}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Active Service Content Card */}
          <div className="lg:col-span-8 pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`h-full p-8 md:p-10 bg-gradient-to-br ${currentService.color} border border-white/10 backdrop-blur-xl transition-all duration-700 flex flex-col justify-between group relative overflow-hidden rounded-none`}
              >

                <div className="space-y-6">
                  {/* Badge and Title */}
                  <div className="space-y-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-wider uppercase text-neutral-300 rounded-none`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {currentService.badge}
                    </span>
                    <Link
                      href={currentService.href}
                      className="block group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <h2 className="text-2xl md:text-3xl font-black text-white hover:underline flex items-center gap-2 tracking-tight leading-none uppercase">
                        {currentService.title}
                        <Icon icon="solar:arrow-right-up-bold" className={`text-2xl ${currentService.textColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                      </h2>
                    </Link>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 font-light leading-relaxed text-sm max-w-2xl">
                    {currentService.desc}
                  </p>

                  {/* Grid stats/KPIs */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {currentService.stats.map((st, i) => (
                      <div key={i} className="p-2.5 bg-white/[0.02] border border-white/5 text-center rounded-none">
                        <span className="block text-xl font-black text-white tracking-tight">{st.val}</span>
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">{st.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Included Checklist */}
                  <div className="space-y-3 pt-5 border-t border-white/5">
                    <h4 className="text-white font-mono text-[10px] uppercase tracking-widest">Included Capabilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentService.included.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 group/item">
                          <div className={`p-1 ${currentService.bulletColor} transition-transform duration-300 group-hover/item:scale-110 rounded-none`}>
                            <Icon icon="solar:check-circle-bold" className="text-sm" />
                          </div>
                          <span className="text-neutral-300 text-xs font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-6">
                  <Link
                    href={currentService.href}
                    className="px-6 py-3 bg-white text-black font-extrabold uppercase tracking-wider text-[10px] transition-all duration-300 shadow-lg shadow-white/5 hover:scale-105 rounded-none hover:bg-neutral-200"
                  >
                    Explore Details
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
                  >
                    Get Free Consultation
                    <Icon icon="solar:arrow-right-linear" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mobile Accordion Interface */}
        <div className="lg:hidden space-y-4">
          {services.map((item) => {
            const isOpen = activeTab === item.id;
            return (
              <div
                key={item.id}
                className={`border transition-all duration-300 rounded-none ${isOpen ? "bg-zinc-950/80 border-white/10 shadow-xl" : "bg-zinc-950/20 border-white/5"
                  }`}
              >
                {/* Header Selector */}
                <button
                  onClick={() => setActiveTab(isOpen ? "" : item.id)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 bg-white/5 text-neutral-300 rounded-none`}>
                      <Icon icon={item.icon} className="text-xl" />
                    </div>
                    <div>
                      <h2 className="font-bold text-sm tracking-wide uppercase text-white">{item.title}</h2>
                      <span className="text-[10px] opacity-40 font-mono">{item.badge}</span>
                    </div>
                  </div>
                  <Icon
                    icon={isOpen ? "solar:minus-circle-linear" : "solar:add-circle-linear"}
                    className={`text-xl transition-transform ${isOpen ? "text-white" : "text-neutral-500"}`}
                  />
                </button>

                {/* Dropdown Content */}
                {isOpen && (
                  <div className="p-6 pt-0 space-y-6 animate-fade-in">
                    <p className="text-gray-400 text-sm font-light leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {item.stats.map((st, i) => (
                        <div key={i} className="p-3 bg-white/[0.02] border border-white/5 text-center rounded-none">
                          <span className="block text-lg font-black text-white">{st.val}</span>
                          <span className="text-[8px] font-mono text-neutral-500 uppercase">{st.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-white/5">
                      <h5 className="text-white font-mono text-[10px] uppercase tracking-widest">Included...</h5>
                      <div className="grid grid-cols-1 gap-2.5">
                        {item.included.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <Icon icon="solar:check-circle-bold" className={`text-base ${item.textColor} shrink-0`} />
                            <span className="text-gray-300 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col gap-3">
                      <Link
                        href={item.href}
                        className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider text-xs text-center shadow-lg block rounded-none"
                      >
                        Explore Details
                      </Link>
                      <Link
                        href="/contact"
                        className="w-full py-3 border border-white/10 text-white font-bold uppercase tracking-wider text-xs text-center block rounded-none"
                      >
                        Contact Consultant
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
