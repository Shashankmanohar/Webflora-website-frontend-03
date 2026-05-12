"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const steps = [
  {
    title: "01. DISCOVER",
    desc: "We deep dive into your business model, understand your pain points, and define clear objectives.",
    icon: "solar:compass-linear",
  },
  {
    title: "02. DESIGN",
    desc: "Crafting intuitive, high-fidelity prototypes that visualize the solution before a single line of code is written.",
    icon: "solar:pallete-2-linear",
  },
  {
    title: "03. DEVELOP",
    desc: "Agile development using scalable architecture and clean code, with regular updates and feedback loops.",
    icon: "solar:code-circle-linear",
  },
  {
    title: "04. LAUNCH",
    desc: "Rigorous testing, deployment, and post-launch support to ensure your product thrives in the market.",
    icon: "solar:rocket-linear",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-neutral-950 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tighter text-center mb-20">
          HOW <span className="text-orange-600">WE</span> BUILD THE FUTURE
        </h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-16 relative"
          >
            {steps.map((step, i) => {
              const isEven = i % 2 === 1;

              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="flex flex-col md:flex-row items-center gap-8 md:gap-0"
                >
                  {/* Left */}
                  <div
                    className={`flex-1 ${isEven
                      ? "md:text-right md:pr-12 opacity-50 hidden md:block"
                      : "md:text-right md:pr-12"
                      }`}
                  >
                    {!isEven && (
                      <>
                        <h3 className="font-display font-bold text-2xl text-orange-600">
                          {step.title}
                        </h3>
                        <p className="text-gray-200 mt-2 text-sm">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full bg-black border border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,60,0,0.3)] shrink-0"
                  >
                    <Icon
                      icon={step.icon}
                      className="text-primary"
                      width={24}
                    />
                  </motion.div>

                  {/* Right */}
                  <div
                    className={`flex-1 ${isEven
                      ? "md:pl-12"
                      : "md:pl-12 opacity-50 hidden md:block"
                      }`}
                  >
                    {isEven && (
                      <>
                        <h3 className="font-display font-bold text-2xl text-orange-600">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 mt-2 text-sm">
                          {step.desc}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
