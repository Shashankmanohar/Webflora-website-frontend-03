"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const projects = [
  {
    category: "Web Development",
    title: "E-Commerce Platform",
    description: "Retail Pro • +150% Traffic Increase",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
  },
  {
    category: "Mobile App",
    title: "Fintech Dashboard",
    description: "Finance Corp • Real-time Data Visualization",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    offset: true,
  },
  {
    category: "Software",
    title: "MediCare System",
    description: "Healthcare Solutions • AI Diagnostics",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    category: "AI & ML",
    title: "Neural Chatbot",
    description: "Tech Solutions • NLP Processing",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    offset: true,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 80, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 bg-neutral-950 overflow-hidden"
    >
      {/* Ambient premium glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[140px]"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-6xl text-white tracking-tighter mb-6"
          >
            WORK THAT SPEAKS
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {["ALL", "WEB", "MOBILE", "AI/ML"].map((item, i) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border transition-all duration-300 ${i === 0
                    ? "border-primary bg-primary text-white shadow-[0_0_40px_rgba(255,115,0,0.35)]"
                    : "border-white/10 text-gray-400 hover:text-white hover:border-white/40"
                  }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${project.offset ? "md:mt-16" : ""
                }`}
            >
              {/* Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                variants={{
                  rest: { scale: 1 },
                  hover: {
                    scale: 1.15,
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="w-full h-full object-cover"
              />

              {/* Glass overlay */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: {
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px] flex flex-col justify-end p-8"
              >
                <motion.span
                  variants={{
                    rest: { y: 40, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary text-xs font-mono uppercase tracking-widest mb-2"
                >
                  {project.category}
                </motion.span>

                <motion.h3
                  variants={{
                    rest: { y: 40, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold text-3xl text-white mb-2"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  variants={{
                    rest: { y: 40, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gray-300 text-sm mb-4"
                >
                  {project.description}
                </motion.p>

                <motion.div
                  variants={{
                    rest: { y: 40, opacity: 0 },
                    hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center text-white font-semibold gap-2"
                >
                  View Case Study
                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 6 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon icon="solar:arrow-right-linear" className="text-xl" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Premium border glow */}
              <motion.div
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                className="absolute inset-0 rounded-2xl ring-1 ring-primary/40 shadow-[0_0_60px_rgba(255,115,0,0.25)]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer link */}
        <motion.div variants={fadeUp} className="text-center mt-16">
          <motion.a
            href="#"
            whileHover={{ x: 8 }}
            transition={{ type: "spring", stiffness: 280 }}
            className="inline-flex items-center gap-2 border-b border-primary pb-1 text-white hover:text-primary transition-colors text-lg"
          >
            See All Projects
            <Icon icon="solar:arrow-right-linear" className="text-xl" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
