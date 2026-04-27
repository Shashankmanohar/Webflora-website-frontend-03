"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Web Apps",
        tagline: "Build fast & scale smart",
        icon: "solar:global-bold-duotone",
        price: "$5K+",
        color: "#3B82F6", // Blue icon from screenshot
        delay: 0,
      },
      {
        id: 2,
        name: "Mobile Apps",
        tagline: "iOS & Android magic",
        icon: "solar:smartphone-bold-duotone",
        price: "$8K+",
        color: "#A855F7", // Purple/Pink icon from screenshot
        delay: 0.1,
      },
      {
        id: 3,
        name: "ERP Systems",
        tagline: "Enterprise power",
        icon: "solar:buildings-bold-duotone",
        price: "Custom",
        color: "#10B981",
        delay: 0.2,
      },
      {
        id: 4,
        name: "E-Commerce",
        tagline: "Sell smarter online",
        icon: "solar:cart-large-minimalistic-bold-duotone",
        price: "$6K+",
        color: "#F59E0B",
        delay: 0.3,
      },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            Digital <span className="text-[#FF3B00]">Solutions</span>
          </motion.h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            High-performance systems built with precision and modern design excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[380px] rounded-[3rem] p-12 overflow-hidden bg-[#121212] border border-white/5 transition-all duration-500 hover:border-[#FF3B00]/30"
            >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <Icon icon={p.icon} width={80} height={80} style={{ color: p.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="w-12 h-1 bg-[#FF3B00]/50 mb-6 group-hover:w-20 transition-all duration-500" />
                  
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-xl text-gray-400 font-medium">
                    {p.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#FF3B00]">
                    {p.price}
                  </span>
                  
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                  >
                    <Icon icon="lucide:arrow-right" width={28} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
