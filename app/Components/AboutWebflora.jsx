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
      className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden"
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
          Webflora Technologies is a Patna-based digital solutions company offering web development, mobile app development, custom software, digital marketing, and AI automation services for startups and businesses across India.
        </p>

        <p className="text-neutral-400 text-lg leading-relaxed">
          We help businesses improve online visibility, automate operations, and build scalable, performance-driven digital systems using modern technology and data-driven strategies. Our approach combines structured planning, clean execution, and practical solutions to solve real business challenges such as low leads, inefficient workflows, and lack of digital growth.
        </p>

        <p className="text-neutral-400 text-lg leading-relaxed">
          Our goal is to make businesses faster, smarter, and more efficient through technology, with every solution designed for scalability, performance, and long-term growth.
        </p>

        <p className="text-neutral-400 text-lg leading-relaxed">
          Beyond custom software engineering, Webflora Technologies is deeply committed to empowering local youths and aspiring tech startups in Bihar. By providing high-quality, practical technical education, hands-on software development internships, and mentoring local student communities, we are actively fostering the next generation of software engineers and entrepreneurs within Patna's growing technological ecosystem.
        </p>

        {/* MSME Certification Block */}
        <motion.div
          variants={item}
          className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Icon icon="solar:shield-check-bold" className="text-[#ff3c00]" />
            Certification & Compliance
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Webflora Technologies is a registered MSME (Micro, Small & Medium Enterprise) under the Government of India.
          </p>
          <div className="inline-block px-3 py-1.5 rounded-lg bg-[#ff3c00]/10 border border-[#ff3c00]/20 text-[#ff3c00] font-mono text-xs">
            Udyam Registration No: UDYAM-BR-26-0183379
          </div>
        </motion.div>
      </motion.div>

      {/* Right Glass Panel */}
      <motion.div variants={item} className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
        <div className="relative w-full max-w-[550px] p-6 md:p-10 rounded-[3rem] backdrop-blur-3xl bg-white/[0.02] border border-white/10 shadow-2xl overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#ff3c00] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-4 md:gap-6"
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
                className={`relative p-5 md:p-7 rounded-[2rem] backdrop-blur-lg bg-white/5 border border-white/10 flex flex-col gap-4 transition-all hover:bg-white/[0.08] ${i % 2 === 1 ? "mt-10 md:mt-16" : ""
                  }`}
              >
                <motion.div variants={cardHover}>
                  <Icon
                    icon={card.icon}
                    className="text-[#ff3c00] text-3xl"
                  />
                </motion.div>

                <div className="space-y-1.5">
                  <h3 className="text-white font-medium text-sm md:text-base">
                    {card.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-neutral-500 leading-tight">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
