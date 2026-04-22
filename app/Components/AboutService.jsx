"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Business Discovery",
    description:
      "We conduct deep analysis to clearly define business goals, user needs, and market positioning.",
  },
  {
    title: "Strategic Architecture",
    description:
      "We design scalable system architectures that support future expansion and high performance.",
  },
  {
    title: "Engineering & Development",
    description:
      "We execute structured development using clean, maintainable, and high-performance codebases.",
  },
  {
    title: "Testing & Optimization",
    description:
      "We rigorously test and optimize systems for speed, security, and reliability.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We provide post-launch monitoring and optimization to maintain long-term performance.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.95, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

export default function AboutService() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="px-6 max-w-7xl mx-auto w-full"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <span className="text-[#ff3c00] font-mono text-sm tracking-widest uppercase">
          Methodology
        </span>

        <h2
          id="process-heading"
          className="text-4xl md:text-5xl font-semibold text-white mt-2 tracking-tight"
          itemProp="name"
        >
          Our Approach
        </h2>

        <meta
          itemProp="description"
          content="A structured digital product development methodology covering discovery, architecture, engineering, testing, and continuous improvement."
        />
      </motion.header>

      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="origin-top absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ff3c00] to-transparent opacity-60"
        />

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
          itemProp="step"
        >
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.li
                key={step.title}
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                {!isEven ? (
                  <div className="md:text-right pl-12 md:pl-0 md:pr-12">
                    <h3
                      className="text-xl font-semibold text-white"
                      itemProp="name"
                    >
                      {String(index + 1).padStart(2, "0")}. {step.title}
                    </h3>
                    <p
                      className="text-neutral-500 mt-2"
                      itemProp="text"
                    >
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* Pulsing timeline dot */}
                <motion.div
                  aria-hidden="true"
                  animate={{
                    boxShadow: [
                      "0 0 0px #ff3c00",
                      "0 0 18px #ff3c00",
                      "0 0 0px #ff3c00",
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-4 md:left-1/2 -translate-x-[4.5px] w-2.5 h-2.5 bg-[#ff3c00] rounded-full"
                />

                {isEven ? (
                  <div className="pl-12 md:pl-12">
                    <h3
                      className="text-xl font-semibold text-white"
                      itemProp="name"
                    >
                      {String(index + 1).padStart(2, "0")}. {step.title}
                    </h3>
                    <p
                      className="text-neutral-500 mt-2"
                      itemProp="text"
                    >
                      {step.description}
                    </p>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
