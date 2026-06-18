"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const BusinessValue = () => {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const countersRef = useRef([]);

  const pillars = [
    {
      id: 1,
      title: "Strategic Brand Architecture",
      description:
        "We engineer brand ecosystems that evolve with market dynamics, creating sustainable competitive advantage.",
      icon: "lucide:layers-3",
      stat: "340%",
      statLabel: "Brand Value Growth",
      metric: "Multi-Channel Strategy",
      color: "from-[#FF3B00]/20 to-red-600/5",
    },
    {
      id: 2,
      title: "Conversion-Optimized Design",
      description:
        "Every pixel serves purpose. Design systems that transform visitors into customers with precision.",
      icon: "lucide:sparkles",
      stat: "67%",
      statLabel: "Conversion Lift",
      metric: "Data-Driven UX/UI",
      color: "from-cyan-600/20 to-blue-600/5",
    },
    {
      id: 3,
      title: "Performance Marketing Engine",
      description:
        "ROI-obsessed campaigns that scale. Real-time optimization across all digital channels.",
      icon: "lucide:trending-up",
      stat: "12.5x",
      statLabel: "ROAS Average",
      metric: "Performance Guaranteed",
      color: "from-purple-600/20 to-violet-600/5",
    },
    {
      id: 4,
      title: "Enterprise Analytics Stack",
      description:
        "Deep insights from raw data. Predictive models that drive strategic decisions.",
      icon: "lucide:bar-chart-3",
      stat: "95%",
      statLabel: "Data Accuracy",
      metric: "AI-Powered Intelligence",
      color: "from-emerald-600/20 to-teal-600/5",
    },
  ];

  const roiMetrics = [
    {
      value: 340,
      suffix: "%",
      label: "Average Client ROI",
      icon: "lucide:wallet",
      detail: "First Year Results",
    },
    {
      value: 250,
      suffix: "+",
      label: "Successful Campaigns",
      icon: "lucide:rocket",
      detail: "Across All Industries",
    },
    {
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      icon: "lucide:star",
      detail: "5-Star Rated Agency",
    },
  ];

  const trustSignals = [
    { text: "ISO 27001", icon: "lucide:shield-check" },
    { text: "GDPR Ready", icon: "lucide:lock" },
    { text: "Industry Awards", icon: "lucide:award" },
    { text: "24/7 Support", icon: "lucide:headphones" },
    { text: "Certified Team", icon: "lucide:user-check" },
    { text: "Global Reach", icon: "lucide:globe" },
  ];


  // Counter Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          const suffix = counter.getAttribute("data-suffix") || "";
          const duration = 2800;

          let start = 0;
          const startTime = performance.now();

          const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easing curve
            const easeProgress =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const current = start + (target - start) * easeProgress;
            const displayValue =
              target > 100
                ? Math.floor(current)
                : current.toFixed(target === 98 ? 0 : 1);

            counter.textContent = `${displayValue}${suffix}`;

            if (progress < 1) requestAnimationFrame(update);
          };

          requestAnimationFrame(update);
          observer.unobserve(counter);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => {
      countersRef.current.forEach((counter) => {
        if (counter) observer.unobserve(counter);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black border-t border-white/5"
    >
      {/* === PREMIUM BACKGROUND SYSTEM === */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core Neural Mesh - Ultra Subtle */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.015]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="neural-mesh"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1.2" fill="white" opacity="0.6" />
              <path
                d="M 50 50 L 100 50 M 50 50 L 50 100 M 50 50 L 75 75 M 50 50 L 25 75"
                fill="none"
                stroke="white"
                strokeWidth="0.4"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-mesh)" />
        </svg>

        {/* Primary Orange Core */}
        <motion.div
          animate={{
            opacity: [0.25, 0.35, 0.25],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-gradient-radial from-[#FF3B00]/20 via-[#FF3B00]/5 to-transparent blur-[150px] sm:blur-[200px]"
        />

        {/* Secondary Deep Blue */}
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 left-1/3 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-radial from-blue-950/15 via-transparent to-transparent blur-[120px]"
        />

        {/* Accent Purple */}
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-radial from-purple-950/10 via-transparent to-transparent blur-[100px]"
        />

        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.01] mix-blend-overlay"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="6" seed="3" /></filter><rect width="100%" height="100%" filter="url(%23noise)" fill="white"/></svg>')`,
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      {/* === CONTENT LAYER === */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER - Premium Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 sm:mb-32"
        >
          {/* Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[#FF3B00]/30 bg-[#FF3B00]/8 backdrop-blur-xl mb-8 group"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-[#FF3B00] rounded-full shadow-[0_0_16px_#FF3B00]"
            />
            <span className="text-xs sm:text-xs font-semibold text-[#FF3B00] uppercase tracking-[0.25em]">
              Agency Expertise
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-black text-white tracking-[-0.05em] leading-[0.95] mb-6"
            >
              Proven Results
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-r from-[#FF3B00] via-orange-500 to-red-600 bg-clip-text text-transparent"
              >
                That Drive Growth
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-base sm:text-lg text-gray-400 font-light leading-relaxed max-w-3xl mt-6"
            >
              Our agency combines strategic thinking with technical excellence.
              We deliver measurable results across brand strategy, digital
              design, marketing, and analytics.
            </motion.p>
          </div>
        </motion.div>

        {/* === BENTO GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => setHoveredCard("hero")}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[24px] border border-white/[0.08] transition-all duration-500 cursor-default will-change-transform"
            style={{
              transform:
                hoveredCard === "hero"
                  ? "translateY(-16px) scale(1.01)"
                  : "translateY(0) scale(1)",
            }}
          >
            {/* Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent"
              style={{
                boxShadow:
                  hoveredCard === "hero"
                    ? `
                      0 0 100px rgba(255, 59, 0, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.12),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.5)
                    `
                    : `
                      0 0 20px rgba(255, 59, 0, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05)
                    `,
                backdropFilter: "blur(40px)",
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Dynamic Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#FF3B00]/15 via-transparent to-transparent"
              animate={{
                opacity: hoveredCard === "hero" ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Content */}
            <div className="relative z-10 p-10 sm:p-14 md:p-16 h-full flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/[0.12] mb-8 w-fit"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Icon
                      icon="lucide:zap"
                      width={18}
                      height={18}
                      className="text-[#FF3B00]"
                    />
                  </motion.div>
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Award-Winning Work
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.03em] mb-4 leading-tight"
                >
                  Full-Service Digital Agency
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-base text-gray-400 font-light leading-relaxed max-w-2xl"
                >
                  From brand strategy to digital execution, we provide
                  comprehensive solutions for modern businesses. Strategic
                  thinking paired with cutting-edge technology.
                </motion.p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 gap-6 sm:gap-10 mt-12 pt-12 border-t border-white/[0.08]"
              >
                <div>
                  <motion.div
                    animate={{
                      color: hoveredCard === "hero" ? "#FF3B00" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-black tracking-tight mb-2"
                  >
                    15+
                  </motion.div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Years Experience
                  </p>
                </div>
                <div>
                  <motion.div
                    animate={{
                      color: hoveredCard === "hero" ? "#FF3B00" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-black tracking-tight mb-2"
                  >
                    500+
                  </motion.div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Happy Clients
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Metric Cards */}
          {pillars.slice(1).map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: (idx + 1) * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredCard(idx + 1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-[24px] border border-white/[0.08] transition-all duration-500 cursor-default will-change-transform"
              style={{
                transform:
                  hoveredCard === idx + 1
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)",
              }}
            >
              {/* Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-white/[0.01] to-transparent"
                style={{
                  boxShadow:
                    hoveredCard === idx + 1
                      ? `
                        0 0 80px rgba(255, 59, 0, 0.25),
                        inset 0 1px 0 rgba(255, 255, 255, 0.12)
                      `
                      : `
                        0 0 20px rgba(255, 59, 0, 0.08),
                        inset 0 1px 0 rgba(255, 255, 255, 0.04)
                      `,
                  backdropFilter: "blur(40px)",
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Accent Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${pillar.color}`}
                animate={{
                  opacity: hoveredCard === idx + 1 ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
                {/* Icon Container */}
                <motion.div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 transition-all duration-500 backdrop-blur-md border ${
                    hoveredCard === idx + 1
                      ? "bg-[#FF3B00] border-[#FF3B00] shadow-[0_0_40px_rgba(255,59,0,0.6)]"
                      : "bg-white/[0.08] border-white/[0.12]"
                  }`}
                  animate={{
                    scale: hoveredCard === idx + 1 ? 1.15 : 1,
                    rotate: hoveredCard === idx + 1 ? 8 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    animate={{
                      rotate: hoveredCard === idx + 1 ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: hoveredCard === idx + 1 ? Infinity : 0,
                    }}
                  >
                    <Icon
                      icon={pillar.icon}
                      width={28}
                      height={28}
                      className={`transition-all duration-300 ${
                        hoveredCard === idx + 1 ? "text-white" : "text-white/70"
                      }`}
                    />
                  </motion.div>
                </motion.div>

                {/* Stat */}
                <div className="mb-6 flex-1">
                  <motion.p
                    animate={{
                      color: hoveredCard === idx + 1 ? "#FF3B00" : "#FFFFFF",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl sm:text-4xl font-black tracking-tight mb-2"
                  >
                    {pillar.stat}
                  </motion.p>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    {pillar.statLabel}
                  </p>
                  <motion.h4
                    animate={{
                      x: hoveredCard === idx + 1 ? 4 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`text-base font-semibold transition-all duration-300 ${
                      hoveredCard === idx + 1 ? "text-white" : "text-white/80"
                    }`}
                  >
                    {pillar.title}
                  </motion.h4>
                </div>

                {/* Badge */}
                <motion.div
                  className="text-xs font-semibold text-gray-600 bg-white/[0.05] border border-white/[0.08] px-3 py-2.5 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {pillar.metric}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === ROI METRICS === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-20 sm:mb-32 p-8 sm:p-12 md:p-16 rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent backdrop-blur-xl overflow-hidden relative group"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF3B00]/0 via-[#FF3B00]/8 to-[#FF3B00]/0"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(40px)" }}
            pointerEvents="none"
          />

          {roiMetrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 flex flex-col items-center text-center group/metric"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.06] border border-white/[0.12] flex items-center justify-center mb-8 group-hover/metric:bg-[#FF3B00]/20 group-hover/metric:border-[#FF3B00]/50 transition-all duration-300"
              >
                <Icon
                  icon={metric.icon}
                  width={40}
                  height={40}
                  className="text-white/70 group-hover/metric:text-[#FF3B00] transition-colors duration-300"
                />
              </motion.div>

              {/* Counter */}
              <div className="mb-4">
                <motion.div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight group-hover/metric:text-[#FF3B00] transition-colors duration-300">
                  <span
                    ref={(el) => {
                      if (el) countersRef.current[idx] = el;
                    }}
                    data-target={metric.value}
                    data-suffix={metric.suffix}
                  >
                    0
                  </span>
                </motion.div>
              </div>

              {/* Label */}
              <motion.p className="text-sm sm:text-base font-bold text-white/90 mb-2 group-hover/metric:text-white transition-colors duration-300">
                {metric.label}
              </motion.p>
              <p className="text-xs font-semibold text-gray-600 group-hover/metric:text-gray-400 transition-colors duration-300 uppercase tracking-wider">
                {metric.detail}
              </p>

              {/* Accent Dot */}
              <motion.div
                className="absolute -top-3 -right-3 w-4 h-4 bg-[#FF3B00] rounded-full opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_#FF3B00]"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* === TRUST SIGNALS - INFINITE MARQUEE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full overflow-hidden py-8 sm:py-12"
        >
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Container */}
          <motion.div
            className="flex gap-4 sm:gap-6 whitespace-nowrap"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First Set */}
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={`first-${idx}`}
                className="flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#FF3B00]/50 transition-all duration-300 flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Icon
                  icon={signal.icon}
                  width={20}
                  height={20}
                  className="text-white/60 group-hover:text-[#FF3B00] transition-colors duration-300 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300 uppercase tracking-wider flex-shrink-0">
                  {signal.text}
                </span>
              </motion.div>
            ))}

            {/* Second Set (Duplicate for seamless loop) */}
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={`second-${idx}`}
                className="flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#FF3B00]/50 transition-all duration-300 flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Icon
                  icon={signal.icon}
                  width={20}
                  height={20}
                  className="text-white/60 group-hover:text-[#FF3B00] transition-colors duration-300 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300 uppercase tracking-wider flex-shrink-0">
                  {signal.text}
                </span>
              </motion.div>
            ))}

            {/* Third Set (Extra for smooth infinite scroll on slower speeds) */}
            {trustSignals.map((signal, idx) => (
              <motion.div
                key={`third-${idx}`}
                className="flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-full border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#FF3B00]/50 transition-all duration-300 flex-shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <Icon
                  icon={signal.icon}
                  width={20}
                  height={20}
                  className="text-white/60 group-hover:text-[#FF3B00] transition-colors duration-300 flex-shrink-0"
                />
                <span className="text-xs sm:text-sm font-semibold text-white/70 group-hover:text-white transition-colors duration-300 uppercase tracking-wider flex-shrink-0">
                  {signal.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Tailwind Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-2000px);
          }
        }
      `}</style>
    </section>
  );
};

export default BusinessValue;
