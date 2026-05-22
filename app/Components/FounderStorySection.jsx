import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FounderStorySection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 py-24 max-w-7xl mx-auto w-full relative"
    >
      <motion.div
        variants={item}
        className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />

        {/* Animated grid background */}
        <motion.div
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-[-1] opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#333 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Ambient glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ff3c00]/10 blur-[120px] rounded-full" />

        <div className="relative z-10 grid md:grid-cols-12 gap-12">
          {/* Left */}
          <motion.div
            variants={item}
            className="md:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#ff3c00] font-mono text-sm tracking-widest uppercase mb-2 block">
                The Origin
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Founder Story
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <Icon
                icon="solar:user-id-linear"
                className="text-neutral-700 text-9xl"
              />
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={container}
            className="md:col-span-7 space-y-6 text-neutral-400 leading-relaxed border-l border-white/10 pl-0 md:pl-12"
          >
            <motion.p variants={item}>
              Webflora Technologies was founded to address a real gap in how
              businesses use technology. The founder recognized that many
              companies were losing growth opportunities because of outdated
              tools and manual workflows. Although technology was available,
              its strategic implementation was often missing.
            </motion.p>

            <motion.p variants={item}>
              Rather than moving to tier-1 metro hubs, the founders made a conscious decision to establish our primary engineering headquarters in Patna. Our goal is to lead high-value IT job creation in Bihar, proving that world-class software development and digital products can be designed and executed locally. By nurturing regional technical talent and offering high-end software development career opportunities, Webflora Technologies is building a robust foundation for software startups in Patna and actively strengthening the technology ecosystem of Patna.
            </motion.p>

            <motion.p variants={item}>
              The journey began with freelance execution focused on
              high-quality delivery and building client trust. Over time,
              this evolved into a structured agency model. Today, every
              project follows a founder-led strategy with direct involvement,
              clear communication, and strict quality standards. This
              approach has positioned Webflora as a reliable, long-term
              software development company and digital partner that grows alongside its clients.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
