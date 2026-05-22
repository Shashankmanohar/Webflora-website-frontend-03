"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Zap, Users, Settings, MessageSquare } from "lucide-react";

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
    <section className="py-32 md:py-48 bg-[#050505] relative overflow-hidden z-10 border-t border-white/5">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff3c00]/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none animate-pulse delay-700" />
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- BY THE NUMBERS --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-40"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#ff3c00]" />
                <span className="text-[#ff3c00] font-bold uppercase tracking-[0.4em] text-[10px]">Quantifiable Impact</span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.8] uppercase">
                Success <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-700">Validated.</span>
              </motion.h2>
            </div>
            <motion.p variants={itemVariants} className="text-gray-500 text-lg md:text-xl font-light max-w-sm border-l border-white/10 pl-8">
              Empowering global brands with high-performance digital infrastructure.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "200+", label: "Projects Delivered", desc: "Successfully engineered systems." },
              { number: "150+", label: "Clients Served", desc: "Across startups and enterprises." },
              { number: "5+", label: "Years Experience", desc: "Mastering the digital landscape." },
              { number: "99%", label: "Client Satisfaction", desc: "Driven by transparent processes." }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-[#ff3c00] uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- WHY CHOOSE US (BENTO GRID) --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <ShieldCheck className="w-4 h-4 text-[#ff3c00]" />
              <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Webflora Advantage</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none uppercase">
              Why Businesses <span className="text-[#ff3c00]">Choose Us</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {[
              { 
                icon: Zap, 
                title: "Performance-focused", 
                desc: "We engineer systems optimized for speed, Core Web Vitals, and UX to maximize your conversion rates.",
                span: "md:col-span-3",
                color: "from-orange-500/10"
              },
              { 
                icon: ShieldCheck, 
                title: "Scalable Architecture", 
                desc: "Codebases and cloud infrastructure designed to grow seamlessly alongside your business.",
                span: "md:col-span-3",
                color: "from-blue-500/10"
              },
              { 
                icon: Users, 
                title: "Founder-led Execution", 
                desc: "Direct involvement from technical founders ensuring premium quality and strategic alignment.",
                span: "md:col-span-2",
                color: "from-purple-500/10"
              },
              { 
                icon: TrendingUp, 
                title: "SEO-first Systems", 
                desc: "In-built semantic HTML and schema architecture to dominate search rankings.",
                span: "md:col-span-2",
                color: "from-emerald-500/10"
              },
              { 
                icon: Settings, 
                title: "Long-term Support", 
                desc: "Continuous maintenance and security patches post-launch.",
                span: "md:col-span-2",
                color: "from-pink-500/10"
              },
              { 
                icon: MessageSquare, 
                title: "Transparent Communication", 
                desc: "Clear roadmaps, realistic timelines, and consistent updates with no hidden complexities.",
                span: "md:col-span-6",
                color: "from-[#ff3c00]/10"
              }
            ].map((reason, idx) => {
              const IconComponent = reason.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className={`group relative p-10 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 hover:border-[#ff3c00]/30 transition-all duration-700 overflow-hidden ${reason.span}`}
                >
                  {/* Background Accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${reason.color} to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-all duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3c00] mb-8 group-hover:scale-110 group-hover:bg-[#ff3c00] group-hover:text-black transition-all duration-500 shadow-inner">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight uppercase">{reason.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors duration-500">{reason.desc}</p>
                  </div>
                  
                  {/* Modern Border Accent */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff3c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
