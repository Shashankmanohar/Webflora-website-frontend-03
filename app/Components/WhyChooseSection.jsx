"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const cards = [
  {
    icon: "solar:user-check-linear",
    title: "Founder-Led",
    desc: "Direct access to technical founders, not just account managers.",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: "solar:shield-check-linear",
    title: "100% Secure",
    desc: "Enterprise-grade security protocols for every project we ship.",
  },
  {
    icon: "solar:graph-up-linear",
    title: "Result Focused",
    desc: "We improve measurable business metrics, not vanity numbers.",
  },
  {
    icon: "solar:headphones-round-sound-linear",
    title: "Long-Term Support",
    desc: "Continuous upgrades and maintenance to keep you ahead.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BentoWhyChoose() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* ambient orange glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-orange-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* heading */}
        <motion.div variants={reveal} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Why Global Brands Choose{" "}
            <span className=" text-orange-600">webflora</span>
          </h2>
          <p className="text-zinc-500">
            Not just an agency. We are your technical partners.
          </p>
        </motion.div>

        {/* bento grid */}
        <motion.div
          variants={container}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            auto-rows-[220px] gap-8
          "
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={reveal}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className={`
                group relative rounded-3xl
                bg-zinc-900 border border-zinc-800
                p-8 flex flex-col justify-between
                shadow-[0_20px_70px_rgba(0,0,0,0.7)]
                hover:border-orange-500/40
                ${card.size || ""}
              `}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* animated edge glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/10" />

              <div className="relative z-10 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="
                    w-12 h-12 rounded-xl
                    bg-orange-500/10
                    flex items-center justify-center
                    text-[#F54A00]
                  "
                >
                  <Icon icon={card.icon} width={26} />
                </motion.div>

                <div>
                  <h4 className="font-semibold text-xl mb-2">{card.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* subtle animated bottom bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="
                  absolute bottom-0 left-0 h-[2px] w-full
                  bg-gradient-to-r from-transparent via-orange-500 to-transparent
                  origin-left
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
