import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardHover = {
  hover: {
    y: -8,
    scale: 1.03,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function AboutWebflora() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative px-6 py-24 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff3c00]/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Left Content */}
      <motion.div variants={item} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            About <span className="text-[#ff3c00]">Webflora</span> <br />
            <span >Technologies</span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1 bg-[#ff3c00]"
          />
        </div>

        <p className="text-neutral-400 text-lg leading-relaxed">
          Webflora Technologies is a growth-driven digital partner serving
          both startups and established companies with modern,
          performance-focused technology. We approach business challenges with
          an engineering mindset, combining research, structured planning, and
          clean execution in every project.
        </p>

        <p className="text-neutral-400 text-lg leading-relaxed">
          Our objective is to help businesses become faster, smarter, and
          more efficient. Every solution we build is future-ready, with
          scalability, performance, and sustainability integrated from the
          ground up.
        </p>
      </motion.div>

      {/* Right Glass Panel */}
      <motion.div variants={item} className="relative">
        <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#ff3c00] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: "solar:graph-up-linear",
                title: "Growth Engine",
                desc: "Measurable business returns",
              },
              {
                icon: "solar:server-square-linear",
                title: "Architecture",
                desc: "Scalable ecosystems",
              },
              {
                icon: "solar:cog-linear",
                title: "Automation",
                desc: "Operational efficiency",
              },
              {
                icon: "solar:shield-check-linear",
                title: "Partnership",
                desc: "Long-term reliability",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover="hover"
                className={`relative p-6 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 flex flex-col gap-3 ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <motion.div variants={cardHover}>
                  <Icon
                    icon={card.icon}
                    className="text-[#ff3c00] text-3xl"
                  />
                </motion.div>

                <h3 className="text-white font-medium">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-500">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
