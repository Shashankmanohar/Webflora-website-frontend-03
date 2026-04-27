"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#030303] z-[200] flex flex-col items-center justify-center">
      {/* Branded Pulse Loader */}
      <div className="relative flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-[#FF3B00] rounded-full blur-3xl opacity-20"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 bg-[#FF3B00] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,59,0,0.3)]">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-4 h-4 bg-white" />
              <div className="w-4 h-4 bg-white/50" />
              <div className="w-4 h-4 bg-white/50" />
              <div className="w-4 h-4 bg-white" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-black text-xl tracking-[0.3em] uppercase">WEBFLORA</span>
            <div className="h-[2px] w-12 bg-[#FF3B00] mt-2 animate-pulse" />
          </div>
        </motion.div>
      </div>
      
      {/* Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent"
        />
      </div>
    </div>
  );
}
