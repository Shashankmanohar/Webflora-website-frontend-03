"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoHovered, setVideoHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        clientName: "Rahul Sharma",
        company: "EdTech Startup",
        result: "+120% leads generated",
        feedback:
          "The team's strategic approach completely transformed our digital presence. Within 6 months, we saw unprecedented growth across all channels.",
        avatar: "👨‍💼",
        tilt: -2,
        color: "from-blue-500/20",
        delay: 0,
      },
      {
        id: 2,
        clientName: "Priya Verma",
        company: "D2C Brand",
        result: "40% cost reduced",
        feedback:
          "Their data-driven campaigns eliminated wasteful spending. ROI improved dramatically while maintaining quality and brand consistency.",
        avatar: "👩‍💼",
        tilt: 2,
        color: "from-purple-500/20",
        delay: 0.15,
      },
      {
        id: 3,
        clientName: "Amit Singh",
        company: "SaaS Platform",
        result: "3x engagement growth",
        feedback:
          "Outstanding execution and creativity. They understood our vision and delivered beyond expectations across the board.",
        avatar: "👨‍💻",
        tilt: -1,
        color: "from-pink-500/20",
        delay: 0.3,
      },
    ],
    [],
  );

  // Optimized mouse tracking with passive event
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 sm:py-40 md:py-56 lg:py-2 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
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
              id="grid-pattern"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
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
          className="absolute top-1/4 right-1/5 w-[600px] h-[600px] bg-gradient-radial from-[#FF3B00]/30 via-[#FF3B00]/8 to-transparent blur-[160px] will-change-transform"
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
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-blue-950/20 via-transparent to-transparent blur-[140px] will-change-transform"
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
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-purple-950/15 via-transparent to-transparent blur-[120px] will-change-transform"
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
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER SECTION - Smooth Multi-layer animation with breathing room */}
        <AnimatePresence>
          {isInView && (
            <motion.div
              ref={contentRef}
              initial="hidden"
              animate="visible"
              variants={headerVariants}
              className="mb-32 sm:mb-40 md:mb-48 lg:mb-56"
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
                  ⭐
                </motion.span>
                <span className="text-xs sm:text-sm font-bold text-[#FF3B00] uppercase tracking-[0.3em] bg-clip-text">
                  Client Testimonials
                </span>
              </motion.div>

              {/* Title - Ultra Smooth with proper spacing */}
              <motion.div variants={titleVariants} className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[-0.04em] leading-[0.95] mb-6 sm:mb-8">
                  What Our
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
                    Clients Achieve
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
                className="text-base sm:text-lg text-gray-400 font-light leading-relaxed sm:leading-relaxed max-w-3xl"
              >
                Backed by real results from real clients. Our strategic approach
                and flawless execution consistently deliver measurable business
                growth across every industry.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TESTIMONIALS GRID - Ultra Smooth with proper spacing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-9 mb-32 sm:mb-40 md:mb-48 lg:mb-56"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              layout
              className="group relative h-full"
            >
              {/* Smooth Card Container */}
              <motion.div
                animate={{
                  scale: hoveredIndex === idx ? 1.06 : 1,
                  y: hoveredIndex === idx ? -12 : 0,
                  rotateX: hoveredIndex === idx ? 5 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                  mass: 0.8,
                }}
                style={{
                  rotate: testimonial.tilt,
                  transformStyle: "preserve-3d",
                }}
                className="relative bg-[#0A0A0A] border-3 border-[#FF3B00] rounded-3xl p-7 sm:p-8 md:p-10 lg:p-12 overflow-hidden h-full flex flex-col justify-between will-change-transform perspective"
              >
                {/* Shadow that expands smoothly */}
                <motion.div
                  animate={{
                    boxShadow:
                      hoveredIndex === idx
                        ? "0 20px 60px rgba(255, 59, 0, 0.4), 12px 12px 0px #FF3B00, inset 0 0 30px rgba(255, 59, 0, 0.15)"
                        : "8px 8px 0px #FF3B00, 0 10px 30px rgba(0, 0, 0, 0.5)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 pointer-events-none"
                />

                {/* Smooth Border Glow */}
                <motion.div
                  className="absolute inset-0 border-3 border-[#FF3B00] rounded-[24px] pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                    boxShadow:
                      hoveredIndex === idx
                        ? "inset 0 0 30px rgba(255, 59, 0, 0.6), 0 0 40px rgba(255, 59, 0, 0.4)"
                        : "inset 0 0 0px rgba(255, 59, 0, 0)",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                {/* Smooth Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} via-transparent to-transparent rounded-3xl`}
                  animate={{
                    opacity: hoveredIndex === idx ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  pointerEvents="none"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Quote Icon - Smooth Scale */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === idx ? 1.3 : 1,
                      rotate: hoveredIndex === idx ? 8 : 0,
                      opacity: hoveredIndex === idx ? 1 : 0.6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      mass: 0.6,
                    }}
                    className="text-6xl sm:text-7xl md:text-8xl mb-6 sm:mb-8 inline-block leading-none"
                  >
                    "
                  </motion.div>

                  {/* Feedback - Smooth Color transition with proper spacing */}
                  <motion.p
                    animate={{
                      color: hoveredIndex === idx ? "#F3F4F6" : "#D1D5DB",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base md:text-lg font-light leading-relaxed sm:leading-relaxed mb-8 sm:mb-10"
                  >
                    {testimonial.feedback}
                  </motion.p>
                </div>

                {/* Client Info - Smooth Reveal with breathing room */}
                <motion.div
                  animate={{
                    y: hoveredIndex === idx ? 0 : 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 pt-6 sm:pt-8 border-t-2 border-[#FF3B00]/40"
                >
                  {/* Avatar + Name Container */}
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <motion.div
                      animate={{
                        x: hoveredIndex === idx ? 4 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col flex-1 pr-3"
                    >
                      <motion.h4
                        animate={{
                          color: hoveredIndex === idx ? "#FF3B00" : "#FFFFFF",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-lg sm:text-xl font-black mb-2 sm:mb-2.5 tracking-[-0.02em]"
                      >
                        {testimonial.clientName}
                      </motion.h4>
                      <motion.p
                        animate={{
                          color: hoveredIndex === idx ? "#9CA3AF" : "#6B7280",
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-xs sm:text-sm font-medium uppercase tracking-widest"
                      >
                        {testimonial.company}
                      </motion.p>
                    </motion.div>

                    {/* Avatar Emoji - Smooth Bounce */}
                    <motion.span
                      animate={{
                        scale: hoveredIndex === idx ? 1.4 : 1,
                        y: hoveredIndex === idx ? -6 : 0,
                        rotate: hoveredIndex === idx ? 12 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        mass: 0.7,
                      }}
                      className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0"
                    >
                      {testimonial.avatar}
                    </motion.span>
                  </div>

                  {/* Result Badge - Smooth Pulse */}
                  <motion.div
                    animate={{
                      scale: hoveredIndex === idx ? 1.08 : 1,
                      y: hoveredIndex === idx ? -2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-[#FF3B00]/15 to-[#FF3B00]/5 border-2 border-[#FF3B00] rounded-xl"
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === idx ? 180 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon
                        icon="lucide:trending-up"
                        width={16}
                        height={16}
                        className="text-[#FF3B00]"
                      />
                    </motion.div>
                    <motion.span
                      animate={{
                        color: hoveredIndex === idx ? "#FFAA00" : "#FF3B00",
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm font-black uppercase tracking-wider"
                    >
                      {testimonial.result}
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* === VIDEO TESTIMONIAL - Ultra Smooth with breathing room === */}
        <motion.div
          variants={videoVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32 sm:mb-40 md:mb-48 lg:mb-56"
        >
          {/* Section Header with proper spacing */}
          <motion.div className="text-center mb-12 sm:mb-16 md:mb-20">
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.1 },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 tracking-[-0.03em]"
            >
              See Real Success
            </motion.h3>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.15 },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-gray-400 text-base sm:text-lg font-light"
            >
              Watch how we transformed a client's digital presence
            </motion.p>
          </motion.div>

          {/* Video Container - Smooth Hover */}
          <motion.div
            onMouseEnter={() => setVideoHovered(true)}
            onMouseLeave={() => setVideoHovered(false)}
            animate={{
              scale: videoHovered ? 1.03 : 1,
              y: videoHovered ? -8 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
            className="relative bg-[#0A0A0A] border-3 border-dashed border-[#FF3B00] rounded-3xl sm:rounded-4xl overflow-hidden group will-change-transform"
          >
            {/* Smooth Shadow */}
            <motion.div
              animate={{
                boxShadow: videoHovered
                  ? "0 30px 80px rgba(255, 59, 0, 0.5), inset 0 0 40px rgba(255, 59, 0, 0.15)"
                  : "0 15px 40px rgba(255, 59, 0, 0.15)",
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 pointer-events-none"
            />

            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#1A1A1A] via-[#0F0F0F] to-[#000000] flex items-center justify-center relative overflow-hidden group">
              {/* Animated Background Pattern */}
              <motion.div
                animate={{
                  opacity: videoHovered ? 0.2 : 0.08,
                  scale: videoHovered ? 1.05 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23FF3B00%22 width=%221%22 height=%221%22/><rect fill=%22%23FF3B00%22 x=%2250%22 y=%2250%22 width=%221%22 height=%221%22/></svg>')] bg-repeat"
              />

              {/* Smooth Play Button */}
              <motion.div
                animate={{
                  scale: videoHovered ? 1.25 : 1,
                  y: videoHovered ? -8 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="relative z-10"
              >
                {/* Animated Ring */}
                <motion.div
                  animate={{
                    scale: videoHovered ? 1 : 1.6,
                    opacity: videoHovered ? 0.6 : 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 border-3 border-[#FF3B00] rounded-full"
                  style={{
                    width: "90px",
                    height: "90px",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />

                {/* Play Button */}
                <motion.div
                  animate={{
                    boxShadow: videoHovered
                      ? "0 0 60px rgba(255, 59, 0, 0.8), inset 0 0 20px rgba(255, 59, 0, 0.4)"
                      : "0 0 30px rgba(255, 59, 0, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 rounded-full bg-[#FF3B00] flex items-center justify-center relative border-3 border-[#FF3B00]"
                >
                  <Icon
                    icon="lucide:play"
                    width={48}
                    height={48}
                    className="text-black ml-2"
                  />
                </motion.div>
              </motion.div>

              {/* Pulse Wave Animation */}
              <motion.div
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 border-2 border-[#FF3B00] rounded-3xl pointer-events-none"
                style={{
                  width: "140px",
                  height: "140px",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            {/* Info Bar - Smooth Transition with breathing room */}
            <motion.div
              animate={{
                backgroundColor: videoHovered
                  ? "rgba(255, 59, 0, 0.12)"
                  : "rgba(10, 10, 10, 1)",
                borderTopColor: videoHovered ? "#FF3B00" : "#FF3B00",
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="px-6 sm:px-8 md:px-12 py-5 sm:py-7 md:py-8 border-t-3 border-dashed border-[#FF3B00] flex items-center justify-between gap-4"
            >
              <motion.div
                animate={{
                  x: videoHovered ? 4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-1.5 sm:mb-2 font-semibold">
                  Client Success Story
                </p>
                <p className="text-base sm:text-lg md:text-xl font-black text-white">
                  SaaS Platform Growth Case Study
                </p>
              </motion.div>
              <motion.span
                animate={{
                  x: videoHovered ? 6 : 0,
                  rotate: videoHovered ? 45 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                className="flex-shrink-0"
              >
                <Icon
                  icon="lucide:arrow-right"
                  width={28}
                  height={28}
                  className="text-[#FF3B00]"
                />
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* === CTA BUTTON - Ultra Smooth with proper spacing === */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center pt-12 sm:pt-16 md:pt-20"
        >
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
            className="relative px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 border-3 border-[#FF3B00] bg-transparent text-white font-black text-sm sm:text-base md:text-lg uppercase tracking-[0.12em] rounded-2xl group overflow-hidden will-change-transform"
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
              Start Your Project Today
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group-hover:text-orange-600 flex-shrink-0"
              >
                <Icon icon="lucide:arrow-right" width={22} height={22} />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Custom CSS for gradient animation */}
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
        h1, h2, h3, h4, h5, h6, p, span {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;