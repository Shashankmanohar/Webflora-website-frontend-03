"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Web App Development",
        tagline: "Build fast & scale smart",
        description: "SEO-friendly website development company services in Patna Bihar, engineering custom web apps with high performance using React and Next.js.",
        link: "/services/website-development-company-in-patna",
        icon: "solar:global-bold-duotone",
        price: "₹25K+",
        color: "#3B82F6", // Blue icon
        delay: 0,
      },
      {
        id: 2,
        name: "Mobile App Development",
        tagline: "iOS & Android magic",
        description: "Top mobile app development company in Patna Bihar, creating high-performance, responsive cross-platform Android and iOS applications.",
        link: "/services/mobile-app-development-company-in-patna",
        icon: "solar:smartphone-bold-duotone",
        price: "₹1.2L+",
        color: "#A855F7", // Purple/Pink icon
        delay: 0.1,
      },
      {
        id: 3,
        name: "ERP Software Systems",
        tagline: "Enterprise power",
        description: "Custom software development company specializing in scalable ERP software development, CRM systems, and workflow automation in Bihar.",
        link: "/services/software-development-company-in-patna",
        icon: "solar:buildings-bold-duotone",
        price: "₹80K+",
        color: "#10B981",
        delay: 0.2,
      },
      {
        id: 4,
        name: "E-Commerce Solutions",
        tagline: "Sell smarter online",
        description: "Professional ecommerce website development company services integrated with secure payment gateways and conversion-optimized SEO design.",
        link: "/services/website-development-company-in-patna",
        icon: "solar:cart-large-minimalistic-bold-duotone",
        price: "₹35K+",
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
              className="group relative min-h-[420px] md:min-h-[500px] h-auto rounded-[3rem] p-8 md:p-12 overflow-hidden bg-[#121212] border border-white/5 transition-all duration-500 hover:border-[#FF3B00]/30"
            >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              
              <div className="relative h-full flex flex-col justify-between gap-10">
                <div>
                  <div className="mb-6 md:mb-8">
                    <Icon icon={p.icon} width={60} height={60} style={{ color: p.color }} className="md:w-20 md:h-20 opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="w-12 h-1 bg-[#FF3B00]/50 mb-6 group-hover:w-20 transition-all duration-500" />
                  
                  <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight leading-none hover:text-[#FF3B00] transition-colors duration-300">
                    <Link href={p.link}>
                      {p.name}
                    </Link>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 font-medium">
                    {p.tagline}
                  </p>
                  <p className="text-sm md:text-base text-gray-500 font-light mt-4 leading-relaxed group-hover:text-gray-400 transition-colors duration-500">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-3xl md:text-5xl font-black text-[#FF3B00]">
                    {p.price}
                  </span>
                  
                  <Link 
                    href={p.link}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:scale-110 hover:rotate-45 group-hover:bg-white group-hover:text-black transition-all duration-500"
                  >
                    <Icon icon="lucide:arrow-right" width={24} className="md:w-7" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Transparency Info Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-sm md:text-base font-light">
            <span className="w-10 h-10 rounded-full bg-[#FF3B00]/10 flex items-center justify-center text-[#FF3B00] shrink-0 font-bold">✓</span>
            <p className="leading-relaxed">
              <strong className="text-white font-medium">Transparent Pricing Packages:</strong> Our entry web development packages starting at <strong className="text-white font-bold">₹25,000</strong> include complete custom UI/UX design, a lightning-fast responsive Next.js frontend, search engine optimized semantic structure, secure contact forms, and 1 year of complimentary technical server maintenance.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductCard;
