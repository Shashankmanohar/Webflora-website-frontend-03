"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

export default function TrustSignals() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden z-10 border-t border-white/5">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#ff3c00]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- BY THE NUMBERS --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
              <TrendingUp className="w-4 h-4 text-[#ff3c00]" /> Quantitative Proof
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Impact by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Numbers</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "200+", label: "Projects Delivered", desc: "Successfully engineered and deployed." },
              { number: "150+", label: "Clients Served", desc: "Across startups and enterprises." },
              { number: "5+", label: "Years Experience", desc: "Mastering the digital landscape." },
              { number: "99%", label: "Client Satisfaction", desc: "Driven by transparent communication." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3c00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ff3c00] mb-3 drop-shadow-sm">
                    {stat.number}
                  </div>
                  <div className="text-base font-semibold text-white tracking-wide mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-500 font-light">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- INDUSTRIES WE SERVE --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-32 relative"
        >
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Engineer For</motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto font-light">
              We build scalable digital infrastructure for highly specialized vertical markets.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              "Coaching Institutes", "Ecommerce", "Healthcare", "Real Estate", 
              "Startups", "Restaurants", "Education", "Local Businesses", "Corporate Enterprises"
            ].map((industry, idx) => (
              <motion.span 
                key={idx} 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-[#0a0a0a] border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-[#ff3c00]/50 hover:shadow-[0_0_20px_rgba(255,60,0,0.15)] transition-all duration-300 cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* --- WHY CHOOSE US --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#ff3c00]" /> The Webflora Advantage
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Businesses Choose Us
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap />, title: "Performance-focused", desc: "We engineer systems optimized for speed, Core Web Vitals, and UX to maximize your conversion rates." },
              { icon: <ShieldCheck />, title: "Scalable architecture", desc: "Codebases and cloud infrastructure designed to grow seamlessly alongside your business." },
              { icon: <CheckCircle2 />, title: "Founder-led execution", desc: "Direct involvement from technical founders ensuring premium quality and strategic alignment." },
              { icon: <TrendingUp />, title: "SEO-first systems", desc: "In-built semantic HTML and schema architecture to dominate local and global search engine rankings." },
              { icon: <CheckCircle2 />, title: "Long-term support", desc: "Continuous maintenance, security patches, and technological evolution post-launch." },
              { icon: <CheckCircle2 />, title: "Transparent communication", desc: "Clear roadmaps, realistic timelines, and consistent updates with no hidden complexities." }
            ].map((reason, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[#ff3c00]/10 transition-colors duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3c00] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(reason.icon, { className: "w-5 h-5" })}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{reason.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
