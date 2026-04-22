"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GrowthSection() {
  return (
    <section className="py-24 relative bg-black text-white overflow-hidden">
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* LEFT */}
          <motion.div variants={container} className="space-y-8 ">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold"
            >
              Is your business <br />
              <span className="text-zinc-500">stuck in the past?</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                "No meaningful online presence",
                "Manual work wasting hours daily",
                "Zero leads from your website",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 text-zinc-500 group"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-red-500/10 group-hover:text-red-500 transition-colors">
                    <Icon icon="solar:close-circle-linear" width={20} />
                  </div>
                  <span className="text-lg line-through decoration-zinc-700 group-hover:decoration-red-400 transition-all">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold mb-8 relative z-10"
            >
              We engineer <br />
              <span className="text-[#F54A00]">scalable growth.</span>
            </motion.h2>

            <motion.div variants={container} className="space-y-6 relative z-10">
              {[
                "Custom high-performance websites",
                "ERP & Workflow Automation",
                "Data-Driven Digital Marketing",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-600/10 flex items-center justify-center text-[#F54A00]">
                    <Icon icon="solar:check-circle-bold" width={20} />
                  </div>
                  <span className="text-lg font-medium text-zinc-100">
                    {text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <a 
                href="#contact"
                className="w-full md:w-auto px-6 py-3 bg-[#ff4e02] text-white font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20"
              >
                Book Strategy Call
                <Icon icon="solar:calendar-linear" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
