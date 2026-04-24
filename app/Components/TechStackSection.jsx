"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const techStack = [
  { icon: "logos:react" },
  { icon: "logos:nextjs-icon", invert: true },
  { icon: "logos:nodejs-icon" },
  { icon: "logos:python" },
  { icon: "logos:aws", invert: true },
  { icon: "logos:docker-icon" },
  { icon: "logos:figma" },
  { icon: "logos:typescript-icon" },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.5,
    rotate: -25,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
  },
};

export default function TechStackSection() {
  return (
    <section className="relative py-20 border-y border-white/5 bg-neutral-950/50 overflow-hidden w-full min-h-[400px]">
      {/* Optimized animated gradient background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 20% 20%, #ff6a00 0%, transparent 40%)" }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 80% 80%, #ff6a00 0%, transparent 40%)" }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -40, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-md font-mono text-primary uppercase text-orange-600 tracking-[0.2em] mb-12"
        >
          Powered by Cutting-Edge Tech
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-4 md:grid-cols-8 gap-12 items-center justify-center opacity-80"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.35,
                rotate: 8,
                filter: "grayscale(0%) brightness(1.2)",
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 3 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{ willChange: "transform" }}
              className="flex items-center justify-center cursor-pointer"
            >
              <Icon
                icon={tech.icon}
                width={40}
                className={`grayscale transition-all duration-500 ${
                  tech.invert ? "invert" : ""
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
