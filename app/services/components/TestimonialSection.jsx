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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = useMemo(
    () => [
      {
        id: 4,
        clientName: "Albert Newwel",
        company: "Founder, Team Excellent",
        result: "Enhanced Visibility",
        feedback:
          "We had an amazing experience working with Webflora Technologies. Shashank and his team built our website and app exactly the way we envisioned. Their SEO and digital marketing strategy significantly improved our online visibility and lead generation. Highly professional, responsive, and result-oriented team. I strongly recommend Webflora for anyone looking for reliable website, app development, and digital marketing services.",
        avatar: "👨‍💼",
        tilt: 1,
        color: "from-emerald-500/20",
        delay: 0,
      },
      {
        id: 5,
        clientName: "Shyam Kishor Sharma",
        company: "Founder, Best For Everyone",
        result: "MLM System Automation",
        feedback:
          "I had an excellent experience working with Webflora Technologies for MLM software development. They built a fully customized MLM system for my business with features like genealogy tree, e-wallet, commission tracking, and real-time reporting. Their approach is very data-driven and scalable, helping automate complex operations. Clean and user-friendly dashboard, fast performance, and secure system. Highly professional team that understands both technology and business growth.",
        avatar: "🚀",
        tilt: -1,
        color: "from-orange-500/20",
        delay: 0.2,
      },
      {
        id: 6,
        clientName: "Dinesh Kumar",
        company: "Managing Director, Diamond Resort",
        result: "Digital Transformation",
        feedback:
          "We had a great experience working with Webflora Technologies for Diamond Resort’s digital development. They delivered a modern, responsive website with effective SEO and marketing strategies. The site is fast, user-friendly, and visually appealing. Their SEO improved our rankings and traffic, while marketing brought consistent leads and boosted visibility. Highly recommended for web development, SEO, and digital marketing that delivers real results.",
        avatar: "💎",
        tilt: 1,
        color: "from-blue-500/20",
        delay: 0.4,
      },
    ],
    [],
  );

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };


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

        {/* TESTIMONIALS CAROUSEL - Curated Webflora Theme Carousel with Ambient Orbs */}
        <div className="relative flex flex-col items-center justify-center mb-32 sm:mb-40 md:mb-48 lg:mb-56 w-full mx-auto select-none overflow-visible">
          {/* Ambient orbs to fill wide blank desktop spaces */}
          <div className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block">
            <div className="absolute top-1/2 -left-48 w-80 h-80 bg-[#ff3b00]/15 rounded-full blur-[140px] -translate-y-1/2 animate-pulse duration-5000" />
            <div className="absolute top-1/2 -right-48 w-80 h-80 bg-[#ff3b00]/10 rounded-full blur-[140px] -translate-y-1/2 animate-pulse duration-7000 delay-2000" />
            
            {/* Soft decorative background grid */}
            <div className="absolute inset-x-0 top-0 bottom-0 bg-grid opacity-[0.15] -z-10" />
          </div>

          {/* DESKTOP VIEW: Show 3 cards side-by-side for perfect screen coverage */}
          <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl px-4 z-10">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="group relative h-full">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Card Body */}
                <div className="relative h-full bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-gray-800 group-hover:border-[#ff3b00]/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-[#ff3b00]/20 transform group-hover:scale-105 min-h-[360px]">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col">
                    <span className="text-4xl text-[#ff3b00]/40 font-serif mb-1 select-none leading-none transform group-hover:scale-110 transition-transform duration-300">"</span>
                    <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed mb-6 select-text group-hover:text-white transition-colors duration-300">
                      {testimonial.feedback}
                    </p>
                  </div>

                  {/* Client Info Bar */}
                  <div className="relative z-10 pt-4 border-t border-gray-800 group-hover:border-[#ff3b00]/40 flex items-center justify-between gap-3 transition-colors duration-300">
                    <div className="flex flex-col flex-1">
                      <h4 className="text-base font-black text-white tracking-tight mb-0.5 group-hover:text-[#ff3b00] transition-colors duration-300 font-display">
                        {testimonial.clientName}
                      </h4>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-display">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Avatar Emoji */}
                    <span className="text-3xl select-none flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </span>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE VIEW: Single card centered compact slider */}
          <div className="md:hidden relative w-full max-w-xl px-4 min-h-[420px] flex items-center justify-center">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                className="absolute w-full"
              >
                {/* Mobile Card Container */}
                <div className="group relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-gray-800 group-hover:border-[#ff3b00]/50 rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-[#ff3b00]/20 min-h-[360px]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col">
                      <span className="text-4xl text-[#ff3b00]/40 font-serif mb-1 leading-none transform group-hover:scale-110 transition-transform duration-300 select-none">"</span>
                      <p className="text-sm text-gray-200 font-light leading-relaxed mb-6 select-text group-hover:text-white transition-colors duration-300">
                        {testimonials[activeTestimonial]?.feedback}
                      </p>
                    </div>
                    <div className="relative z-10 pt-4 border-t border-gray-800 group-hover:border-[#ff3b00]/40 flex items-center justify-between gap-3">
                      <div className="flex flex-col flex-1">
                        <h4 className="text-base font-black text-white tracking-tight mb-0.5 group-hover:text-[#ff3b00] transition-colors duration-300 font-display">
                          {testimonials[activeTestimonial]?.clientName}
                        </h4>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-display">
                          {testimonials[activeTestimonial]?.company}
                        </p>
                      </div>
                      <span className="text-3xl select-none flex-shrink-0">
                        {testimonials[activeTestimonial]?.avatar}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

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