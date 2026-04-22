"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const faqs = useMemo(
    () => [
      {
        id: 1,
        question: "Do you provide all services together?",
        answer:
          "Yes, we offer comprehensive service bundles tailored to your needs. You can choose individual services or combine multiple services into a cohesive strategy. Our team ensures seamless integration across all services for maximum impact and efficiency.",
        icon: "lucide:package",
        color: "from-blue-500/20",
        delay: 0,
      },
      {
        id: 2,
        question: "What is the timeline?",
        answer:
          "Project timelines vary based on scope and complexity. Typically, strategy and planning take 2-4 weeks, implementation spans 4-12 weeks, and optimization is ongoing. We provide detailed timeline roadmaps at project kickoff with clear milestones and deliverables.",
        icon: "lucide:calendar",
        color: "from-purple-500/20",
        delay: 0.1,
      },
      {
        id: 3,
        question: "Do you offer support?",
        answer:
          "Absolutely. We provide ongoing support including 24/7 email support, weekly strategy calls, and monthly performance reviews. Our dedicated account manager ensures your success with proactive recommendations and rapid response to any issues.",
        icon: "lucide:headset",
        color: "from-pink-500/20",
        delay: 0.2,
      },
      {
        id: 4,
        question: "Can I start with one service?",
        answer:
          "Of course! Many clients start with one service to test our approach. This allows you to experience our quality and results before expanding to additional services. We offer flexible engagement models and can scale services as your needs grow.",
        icon: "lucide:zap",
        color: "from-orange-500/20",
        delay: 0.3,
      },
    ],
    [],
  );

  // Intersection observer for smooth entry
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

  // Ultra-smooth animation variants
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

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.15,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: (i) => ({
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.05,
      },
    }),
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 sm:py-40 md:py-56 lg:py-64 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      {/* === ULTRA-SMOOTH BACKGROUND SYSTEM === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Grid Background - Ultra Subtle */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.025]"
          aria-hidden="true"
          style={{ filter: "blur(0.5px)" }}
        >
          <defs>
            <pattern
              id="faq-grid-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120"
                fill="none"
                stroke="white"
                strokeWidth="0.8"
                opacity="0.6"
              />
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid-pattern)" />
        </svg>

        {/* Primary Orange Glow - Smooth animation */}
        <motion.div
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.1, 1],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#FF3B00]/30 via-[#FF3B00]/8 to-transparent blur-[160px] will-change-transform"
          style={{ filter: "blur(160px)" }}
        />

        {/* Secondary Blue Glow */}
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.07, 1],
            x: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-950/20 via-transparent to-transparent blur-[140px] will-change-transform"
          style={{ filter: "blur(140px)" }}
        />

        {/* Tertiary Purple Glow */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-purple-950/15 via-transparent to-transparent blur-[120px] will-change-transform"
          style={{ filter: "blur(120px)" }}
        />

        {/* Noise Texture - Refined */}
        <div
          className="absolute inset-0 opacity-[0.006] mix-blend-overlay"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" seed="2" /></filter><rect width="100%" height="100%" filter="url(%23noise)" fill="white"/></svg>')`,
            backgroundSize: "400px 400px",
          }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER SECTION - Smooth Multi-layer animation with breathing room */}
        <AnimatePresence>
          {isInView && (
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              className="mb-20 sm:mb-24 md:mb-32 lg:mb-40"
            >
              {/* Badge - Refined Animation */}
              <motion.div
                variants={badgeVariants}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                className="inline-flex items-center gap-3 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border-2 border-[#FF3B00] bg-gradient-to-r from-[#FF3B00]/15 to-[#FF3B00]/5 backdrop-blur-xl mb-10 sm:mb-12 group cursor-pointer"
              >
                <motion.span
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="text-xl sm:text-2xl"
                >
                  ❓
                </motion.span>
                <span className="text-xs sm:text-sm font-bold text-[#FF3B00] uppercase tracking-[0.3em] bg-clip-text">
                  FAQ & Support
                </span>
              </motion.div>

              {/* Title - Ultra Smooth with proper spacing */}
              <motion.div variants={titleVariants} className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[-0.04em] leading-[0.95] mb-0">
                  Frequently Asked
                  <br className="hidden sm:block" />
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.25,
                      duration: 0.95,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-gradient-to-r from-[#FF3B00] via-orange-400 to-red-600 bg-clip-text text-transparent animate-gradient block"
                  >
                    Questions
                  </motion.span>
                </h2>
              </motion.div>

              {/* Description - Smooth fade with breathing room */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.85,
                      delay: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="text-base sm:text-lg text-gray-400 font-light leading-relaxed sm:leading-relaxed max-w-2xl"
              >
                Get answers to common questions about our services, timelines,
                support, and flexible engagement models designed for your success.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ ITEMS - Ultra Smooth with accordion animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* FAQ Card Container */}
              <motion.button
                onClick={() =>
                  setExpandedIndex(expandedIndex === idx ? null : idx)
                }
                animate={{
                  scale: hoveredIndex === idx ? 1.02 : 1,
                  y: hoveredIndex === idx ? -4 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  mass: 0.8,
                }}
                className="w-full text-left relative bg-[#0A0A0A] border-2 border-[#FF3B00]/40 hover:border-[#FF3B00] rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 overflow-hidden group transition-all duration-300 will-change-transform"
              >
                {/* Smooth Shadow */}
                <motion.div
                  animate={{
                    boxShadow:
                      hoveredIndex === idx || expandedIndex === idx
                        ? "0 15px 50px rgba(255, 59, 0, 0.25), inset 0 0 20px rgba(255, 59, 0, 0.1)"
                        : "0 8px 24px rgba(0, 0, 0, 0.3)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 pointer-events-none"
                />

                {/* Smooth Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${faq.color} via-transparent to-transparent rounded-2xl sm:rounded-3xl`}
                  animate={{
                    opacity:
                      hoveredIndex === idx || expandedIndex === idx ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  pointerEvents="none"
                />

                {/* Content Container */}
                <div className="relative z-10 flex items-start justify-between gap-4 sm:gap-6">
                  {/* Icon Container */}
                  <motion.div
                    className="flex-shrink-0 mt-1 sm:mt-1.5"
                    animate={{
                      rotate: expandedIndex === idx ? 180 : 0,
                      scale: hoveredIndex === idx ? 1.15 : 1,
                    }}
                    transition={{
                      rotate: { duration: 0.5 },
                      scale: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                  >
                    <div className="relative w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                      {/* Icon Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#FF3B00]/30 to-[#FF3B00]/10 rounded-xl"
                        animate={{
                          opacity: hoveredIndex === idx ? 1 : 0.6,
                          scale: hoveredIndex === idx ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon */}
                      <motion.div
                        animate={{
                          scale: hoveredIndex === idx ? 1.2 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <Icon
                          icon={faq.icon}
                          width={24}
                          height={24}
                          className="text-[#FF3B00] relative z-10"
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Question Text */}
                  <div className="flex-1 text-left">
                    <motion.h3
                      animate={{
                        color:
                          hoveredIndex === idx || expandedIndex === idx
                            ? "#FFFFFF"
                            : "#F3F4F6",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-base sm:text-lg md:text-xl font-black tracking-[-0.02em] leading-tight pr-4 sm:pr-0"
                    >
                      {faq.question}
                    </motion.h3>
                  </div>

                  {/* Chevron Icon */}
                  <motion.div
                    className="flex-shrink-0 mt-0.5"
                    animate={{
                      rotate: expandedIndex === idx ? 180 : 0,
                      scale: hoveredIndex === idx ? 1.2 : 1,
                    }}
                    transition={{
                      rotate: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      scale: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                  >
                    <Icon
                      icon="lucide:chevron-down"
                      width={24}
                      height={24}
                      className="text-[#FF3B00]"
                    />
                  </motion.div>
                </div>
              </motion.button>

              {/* Expandable Answer Content */}
              <AnimatePresence>
                {expandedIndex === idx && (
                  <motion.div
                    variants={contentVariants}
                    custom={idx}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="bg-gradient-to-b from-[#FF3B00]/10 to-transparent border-t-2 border-[#FF3B00]/30 rounded-b-2xl sm:rounded-b-3xl p-6 sm:p-7 md:p-8 lg:p-10 mt-1 sm:mt-1.5"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-sm sm:text-base text-gray-300 font-light leading-relaxed sm:leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>

                      {/* CTA Link */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-5 sm:mt-6 flex items-center gap-2"
                      >
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF3B00]/20 hover:bg-[#FF3B00]/30 border-2 border-[#FF3B00]/50 hover:border-[#FF3B00] rounded-lg transition-all duration-300 group"
                        >
                          <span className="text-sm font-semibold text-[#FF3B00]">
                            Get Started
                          </span>
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="group-hover:text-[#FF3B00]"
                          >
                            <Icon
                              icon="lucide:arrow-right"
                              width={16}
                              height={16}
                              className="text-[#FF3B00]"
                            />
                          </motion.span>
                        </a>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* SUPPORT SECTION - Enterprise Support Info */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.9,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-20 sm:mt-24 md:mt-32 lg:mt-40"
        >
          <div className="relative bg-[#0A0A0A] border-3 border-dashed border-[#FF3B00]/40 rounded-3xl sm:rounded-4xl p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden group">
            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF3B00]/10 via-transparent to-transparent rounded-3xl sm:rounded-4xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              pointerEvents="none"
            />

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-4 sm:gap-6 mb-6 sm:mb-8"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-[#FF3B00]/30 to-[#FF3B00]/10 flex items-center justify-center border-2 border-[#FF3B00]/50"
                >
                  <Icon
                    icon="lucide:life-buoy"
                    width={28}
                    height={28}
                    className="text-[#FF3B00]"
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 sm:mb-3">
                    Enterprise Support Included
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                    Get dedicated support with every engagement. Our team is
                    committed to your success.
                  </p>
                </div>
              </motion.div>

              {/* Support Features Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
              >
                {[
                  { icon: "lucide:phone", label: "24/7 Phone Support" },
                  { icon: "lucide:mail", label: "Priority Email Support" },
                  { icon: "lucide:calendar", label: "Weekly Strategy Calls" },
                  { icon: "lucide:bar-chart-2", label: "Monthly Reports" },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.75 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-[#FF3B00]/5 border-2 border-[#FF3B00]/20 rounded-xl hover:border-[#FF3B00]/50 transition-all duration-300"
                  >
                    <Icon
                      icon={feature.icon}
                      width={20}
                      height={20}
                      className="text-[#FF3B00] flex-shrink-0"
                    />
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 mt-16 sm:mt-20 md:mt-24 lg:mt-32 pt-12 sm:pt-16 md:pt-20 border-t-2 border-[#FF3B00]/20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{
              duration: 0.8,
              delay: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 font-light">
              Let's discuss your project and find the perfect solution.
            </p>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -6,
            }}
            whileTap={{ scale: 0.94 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="relative px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 border-3 border-[#FF3B00] bg-transparent text-white font-black text-sm sm:text-base uppercase tracking-[0.12em] rounded-2xl group overflow-hidden will-change-transform flex-shrink-0"
            style={{
              boxShadow: "8px 8px 0px #FF3B00",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "12px 12px 0px #FF3B00";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "8px 8px 0px #FF3B00";
            }}
          >
            {/* Smooth Background Fill */}
            <motion.div
              className="absolute inset-0 bg-[#FF3B00]"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                type: "tween",
              }}
              style={{ originX: 0 }}
            />

            {/* Text */}
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 group-hover:text-orange-600 transition-colors duration-300">
              Book Consultation
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group-hover:text-orange-600 flex-shrink-0"
              >
                <Icon icon="lucide:arrow-right" width={20} height={20} />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease-in-out infinite;
        }

        /* GPU acceleration */
        .will-change-transform {
          will-change: transform, opacity, box-shadow;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Smooth text rendering */
        h1, h2, h3, h4, h5, h6, p, span, button {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );``
};

export default FaqSection;