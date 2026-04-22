"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

export default function MissionVisionSection() {
  const audioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
        });
      },
      { threshold: 0.4 }
    );

    const section = document.getElementById("mission");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="mission"
      className="px-6 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8"
    >

      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={cardVariants}
        className="glass-panel p-10 rounded-2xl group hover:bg-white/5 transition-all duration-500"
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-12 h-12 bg-[#ff3c00]/10 rounded-lg flex items-center justify-center mb-6 text-[#ff3c00]"
        >
          <Icon icon="solar:rocket-2-linear" className="text-2xl" />
        </motion.div>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Our Mission
        </h3>
        <p className="text-neutral-400 leading-relaxed">
          Our mission is to help businesses scale faster and smarter through
          technology. We build digital ecosystems that reduce manual
          workload, automate repetitive processes, and create operational
          clarity. Every system is performance-driven and designed for
          long-term sustainability.
        </p>
      </motion.div>

      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={cardVariants}
        className="glass-panel p-10 rounded-2xl group hover:bg-white/5 transition-all duration-500"
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: -6 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-12 h-12 bg-[#ff3c00]/10 rounded-lg flex items-center justify-center mb-6 text-[#ff3c00]"
        >
          <Icon icon="solar:eye-linear" className="text-2xl" />
        </motion.div>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Our Vision
        </h3>
        <p className="text-neutral-400 leading-relaxed">
          Our vision is to become a future-ready digital transformation
          company that makes global-standard technology accessible to
          businesses. Through AI-driven automation, intelligent systems, and
          modern infrastructure, we aim to provide a strong competitive
          advantage.
        </p>
      </motion.div>
    </section>
  );
}
