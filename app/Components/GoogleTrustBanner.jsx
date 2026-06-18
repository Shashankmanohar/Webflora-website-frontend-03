"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleTrustBanner() {
  return (
    <div className="bg-[#030303] py-8 border-b border-white/5 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
           <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" />
            ))}
          </div>
          <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">Verified Google Reviews</span>
        </div>

        <div className="hidden md:block w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight mb-1">
            Highest Rated Tech Agency in Patna
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-light max-w-xl">
            Join 150+ businesses who trust Webflora for scalable software and high-performance websites.
          </p>
        </div>

        <div className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
            <span className="text-white font-black text-2xl tracking-tighter mr-2">5.0</span>
            <div className="h-4 w-[2px] bg-yellow-500/50 mx-2" />
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Perfect<br/>Score</span>
        </div>
      </motion.div>
    </div>
  );
}
