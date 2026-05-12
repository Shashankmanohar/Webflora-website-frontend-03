"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("saas-banner-dismissed");
    if (dismissed) setIsVisible(false);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("saas-banner-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 left-0 w-full z-[60] bg-black border-b border-white/10 flex items-center justify-center px-4 overflow-hidden"
          style={{ height: "40px" }}
        >
          {/* Animated Gradient Border Sweep */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF3B00]/20 to-transparent opacity-40" 
            />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent shadow-[0_0_10px_#FF3B00]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between md:justify-center">
            {/* Mobile center space or empty space */}
            <div className="md:hidden w-6" />

            <Link 
              href="/vegavan-ai" 
              className="flex items-center gap-2 md:gap-4 cursor-pointer group"
            >
              <div className="hidden md:flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B00]"></span>
                </span>
                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                  Breaking
                </span>
              </div>

              <p className="text-xs md:text-sm text-white font-medium flex items-center gap-1.5 tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 font-bold">
                  Announcing Our First SaaS:
                </span>
                <span className="font-black text-[#FF3B00] group-hover:text-white transition-colors duration-300">Vegavan AI</span>
                <span className="hidden sm:inline text-neutral-400">
                  — Ultimate Conversational Intelligence.
                </span>
              </p>

              <motion.div 
                whileHover={{ x: 3 }}
                className="flex items-center gap-1 bg-white/10 group-hover:bg-[#FF3B00] transition-all duration-300 rounded-full px-3 py-0.5 md:py-1"
              >
                <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-wide">Learn More</span>
                <Icon icon="solar:arrow-right-up-linear" className="text-white text-xs font-bold" />
              </motion.div>
            </Link>

            <button 
              onClick={(e) => {
                e.preventDefault();
                dismiss();
              }}
              className="absolute right-4 md:right-0 text-neutral-500 hover:text-white transition-colors p-1"
            >
              <Icon icon="solar:close-circle-bold-duotone" width={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
