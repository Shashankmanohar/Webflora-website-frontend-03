"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const products = useMemo(
    () => [
      {
        id: 1,
        name: "Web Apps",
        tagline: "Build fast & scale smart",
        emoji: "🌐",
        price: "$5K+",
        color: "#FF6B1A",
        lightColor: "rgba(255, 107, 26, 0.15)",
        delay: 0,
      },
      {
        id: 2,
        name: "Mobile Apps",
        tagline: "iOS & Android magic",
        emoji: "📱",
        price: "$8K+",
        color: "#FF8C42",
        lightColor: "rgba(255, 140, 66, 0.15)",
        delay: 0.15,
      },
      {
        id: 3,
        name: "ERP Systems",
        tagline: "Enterprise power",
        emoji: "🏢",
        price: "Custom",
        color: "#FF3B00",
        lightColor: "rgba(255, 59, 0, 0.15)",
        delay: 0.3,
      },
      {
        id: 4,
        name: "E-Commerce",
        tagline: "Sell smarter online",
        emoji: "🛍️",
        price: "$6K+",
        color: "#FF7533",
        lightColor: "rgba(255, 117, 51, 0.15)",
        delay: 0.45,
      },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for glass effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const headerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.75, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* === PREMIUM BACKGROUND === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ultra Smooth Animated Gradient Orbs */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.4, 1],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/40 via-orange-400/20 to-transparent rounded-full"
          style={{
            filter: "blur(180px)",
            mixBlendMode: "screen",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-orange-600/35 via-orange-500/15 to-transparent rounded-full"
          style={{
            filter: "blur(200px)",
            mixBlendMode: "screen",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/30 to-transparent rounded-full"
          style={{
            filter: "blur(220px)",
            mixBlendMode: "screen",
          }}
        />

        {/* Ultra Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 107, 26, .05) 25%, rgba(255, 107, 26, .05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 26, .05) 75%, rgba(255, 107, 26, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 107, 26, .05) 25%, rgba(255, 107, 26, .05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 26, .05) 75%, rgba(255, 107, 26, .05) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <AnimatePresence>
          {isInView && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              className="text-center mb-20 sm:mb-28 md:mb-32"
            >
              {/* Badge with Glass Effect */}
              <motion.div
                variants={badgeVariants}
                whileHover={{ scale: 1.1, y: -6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/20 mb-8 group cursor-pointer"
                style={{
                  background: "rgba(255, 107, 26, 0.08)",
                  boxShadow:
                    "0 8px 32px rgba(255, 107, 26, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
                }}
              >
                <motion.span
                  animate={{
                    rotate: 360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                  className="text-lg"
                >
                  ✨
                </motion.span>
                <span className="text-xs sm:text-sm font-black bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent uppercase tracking-wider">
                  What We Build
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-tight"
              >
                Your Next Big Idea,
                <br className="hidden sm:block" />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.95,
                  }}
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                >
                  Brought to Life
                </motion.span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-light"
              >
                Premium digital solutions with Apple-grade design excellence
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PRODUCTS GRID - Glass Morphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mb-20 sm:mb-28"
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Premium Glass Card */}
              <motion.div
                animate={{
                  scale: hoveredIndex === idx ? 1.05 : 1,
                  y: hoveredIndex === idx ? -12 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  mass: 1,
                }}
                className="relative rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 overflow-hidden h-full will-change-transform"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%), ${product.lightColor}`,
                  backdropFilter: "blur(20px) saturate(180%)",
                  WebkitBackdropFilter: "blur(20px) saturate(180%)",
                  border: "1.5px solid rgba(255, 255, 255, 0.18)",
                  boxShadow: `0 8px 32px rgba(${hoveredIndex === idx ? "255, 107, 26" : "0, 0, 0"}, ${hoveredIndex === idx ? "0.3" : "0.1"}), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)`,
                }}
              >
                {/* Liquid Glass Layer */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === idx ? 0.8 : 0,
                    scale: hoveredIndex === idx ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 pointer-events-none rounded-3xl sm:rounded-4xl"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${product.color}40 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${product.color}20 0%, transparent 50%)`,
                    mixBlendMode: "screen",
                  }}
                />

                {/* Light Reflection Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 pointer-events-none rounded-3xl sm:rounded-4xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(255, 255, 255, 0.1) 100%)`,
                    mixBlendMode: "overlay",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top Section */}
                  <div className="mb-8">
                    {/* Emoji with Light Effect */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === idx ? 1.5 : 1,
                        rotate: hoveredIndex === idx ? 20 : 0,
                        y: hoveredIndex === idx ? -16 : 0,
                        filter:
                          hoveredIndex === idx
                            ? "drop-shadow(0 20px 30px rgba(255, 107, 26, 0.4))"
                            : "drop-shadow(0 8px 16px rgba(255, 107, 26, 0.2))",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.8,
                      }}
                      className="text-6xl sm:text-7xl mb-6 inline-block"
                    >
                      {product.emoji}
                    </motion.div>

                    {/* Animated Accent Line */}
                    <motion.div
                      animate={{
                        width: hoveredIndex === idx ? "80px" : "40px",
                        opacity: hoveredIndex === idx ? 1 : 0.6,
                      }}
                      transition={{ duration: 0.4 }}
                      className="h-1.5 rounded-full mb-5"
                      style={{
                        background: `linear-gradient(90deg, ${product.color}, ${product.color}00)`,
                        boxShadow: `0 0 20px ${product.color}60`,
                      }}
                    />

                    {/* Title with Glass Text */}
                    <motion.h3
                      animate={{
                        scale: hoveredIndex === idx ? 1.1 : 1,
                        color: hoveredIndex === idx ? product.color : "#FFFFFF",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl sm:text-4xl font-black mb-2 tracking-tight"
                    >
                      {product.name}
                    </motion.h3>

                    {/* Tagline */}
                    <motion.p
                      animate={{
                        color: hoveredIndex === idx ? product.color : "#D1D5DB",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-base sm:text-lg font-semibold tracking-wide"
                    >
                      {product.tagline}
                    </motion.p>
                  </div>

                  {/* Bottom Section with Glass Divider */}
                  <div
                    className="flex items-center justify-between pt-6"
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {/* Price */}
                    <motion.span
                      animate={{
                        scale: hoveredIndex === idx ? 1.2 : 1,
                        color:
                          hoveredIndex === idx ? product.color : product.color,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-lg sm:text-2xl font-black"
                      style={{
                        textShadow: `0 0 20px ${product.color}40`,
                      }}
                    >
                      {product.price}
                    </motion.span>

                    {/* Glass Button */}
                    <motion.button
                      whileHover={{ scale: 1.25, rotate: 45 }}
                      whileTap={{ scale: 0.85 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden group/btn cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)`,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1.5px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: `0 8px 16px ${product.color}30, inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: hoveredIndex === idx ? 1 : 0,
                          opacity: hoveredIndex === idx ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${product.color}40, ${product.color}10)`,
                          backdropFilter: "blur(10px)",
                        }}
                      />
                      <Icon
                        icon="lucide:arrow-right"
                        width={20}
                        height={20}
                        className="relative z-10 text-white"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.6,
          }}
          className="text-center"
        >
          <motion.div
            className="inline-flex flex-col items-center gap-6 sm:gap-8"
            whileHover={{ y: -4 }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 sm:mb-3">
                Let's Create Something
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base font-light">
                Premium solutions, Apple-grade excellence
              </p>
            </div>

            {/* Premium Glass Button */}
            <motion.button
              whileHover={{ scale: 1.12, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 sm:px-16 py-4 sm:py-5 text-white font-black text-sm sm:text-base uppercase tracking-widest rounded-full overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, rgba(255, 107, 26, 0.3) 0%, rgba(255, 107, 26, 0.1) 100%)`,
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                border: "1.5px solid rgba(255, 107, 26, 0.4)",
                boxShadow: `0 20px 60px rgba(255, 107, 26, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
              }}
            >
              <motion.div
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 rounded-full -z-10"
                style={{
                  background: `radial-gradient(circle, rgba(255, 107, 26, 0.4), transparent)`,
                  filter: "blur(20px)",
                }}
              />

              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                Begin Your Journey
                <motion.span
                  animate={{ x: [0, 8, 0], rotateZ: [0, 20, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Icon icon="lucide:sparkles" width={20} height={20} />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .will-change-transform {
          will-change: transform, opacity, box-shadow;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        h1, h2, h3, h4, h5, h6, p, span, button {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @supports (backdrop-filter: blur(1px)) {
          .glass-morphism {
            backdrop-filter: blur(20px) saturate(180%);
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCard;
