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
    <section className="py-20 md:py-28 bg-[#050505] relative overflow-hidden z-10 border-t border-white/5">
      {/* Ambient Background Glows — static radial gradients (no blur animation = no non-composited animation warning) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(255,60,0,0.06) 0%, rgba(255,60,0,0) 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(59,130,246,0.06) 0%, rgba(59,130,246,0) 70%)" }} />
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- WHY CHOOSE US (BENTO GRID) --- */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <ShieldCheck className="w-4 h-4 text-[#ff3c00]" />
              <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Webflora Advantage</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-display font-bold text-white tracking-tighter leading-none uppercase">
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
                  className={`group relative p-6 md:p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-[#ff3c00]/30 transition-all duration-700 overflow-hidden ${reason.span}`}
                >
                  {/* Background Accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${reason.color} to-transparent opacity-0 group-hover:opacity-100 blur-[80px] transition-all duration-700 pointer-events-none`} />
                  
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff3c00] mb-6 group-hover:scale-110 group-hover:bg-[#ff3c00] group-hover:text-black transition-all duration-500 shadow-inner">
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3 tracking-tight uppercase">{reason.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed max-w-xl group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base">{reason.desc}</p>
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
