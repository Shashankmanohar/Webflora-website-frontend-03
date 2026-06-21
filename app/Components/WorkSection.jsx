"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API_BASE_URL from "../config";

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
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/public/case-studies`);
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeCategory === "ALL") {
      setFilteredProjects(projects.slice(0, 6));
    } else {
      setFilteredProjects(
        projects
          .filter((p) => p.category.toUpperCase() === activeCategory)
          .slice(0, 6)
      );
    }
  }, [activeCategory, projects]);

  if (loading) {
    return (
      <div className="min-h-[60vh] bg-neutral-950 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section
      id="work"
      className="relative py-20 px-6 bg-neutral-950 overflow-hidden"
    >
      {/* CSS Animations injected for compositor execution (0ms main thread blocking) */}
      <style>{`
        @keyframes pulse-opacity-work {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-opacity-work-2 {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        .animate-pulse-work-1 { animation: pulse-opacity-work 8s infinite ease-in-out; }
        .animate-pulse-work-2 { animation: pulse-opacity-work-2 10s infinite ease-in-out; }
      `}</style>

      {/* Ambient premium glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[140px] animate-pulse-work-1"
        />
        <div
          className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-primary/20 rounded-full blur-[140px] animate-pulse-work-2"
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
        <motion.div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl text-white tracking-tighter mb-6 uppercase"
          >
            WORK THAT SPEAKS
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {["ALL", "WEB", "MOBILE", "AI/ML", "SOFTWARE", "DIGITAL MARKETING"].map((item) => (
              <motion.button
                key={item}
                onClick={() => setActiveCategory(item)}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-xl border transition-all duration-300 ${activeCategory === item
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
          layout
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover="hover"
                onClick={() => router.push(`/case-studies/${project.slug}`)}
                className="group relative aspect-[16/10] rounded-2xl md:rounded-[1.5rem] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { scale: 1 },
                    hover: {
                      scale: 1.05,
                      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                >
                  <Image
                    src={project.image.startsWith('http') ? project.image : `${API_BASE_URL}/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </motion.div>

                {/* Glass overlay */}
                <motion.div
                  variants={{
                    rest: { opacity: isMobile ? 1 : 0 },
                    hover: {
                      opacity: 1,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className={`absolute inset-0 flex flex-col justify-end p-5 md:p-6 transition-all duration-500 ${isMobile
                      ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[1px]"
                      : "bg-gradient-to-t from-black/95 via-black/40 to-transparent backdrop-blur-[2px]"
                    }`}
                >
                  <motion.span
                    variants={{
                      rest: { y: isMobile ? 0 : 30, opacity: isMobile ? 1 : 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="text-primary text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-1.5"
                  >
                    {project.category}
                  </motion.span>

                  <motion.h3
                    variants={{
                      rest: { y: isMobile ? 0 : 30, opacity: isMobile ? 1 : 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold text-lg md:text-xl text-white mb-1.5 leading-tight line-clamp-2"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      rest: { y: isMobile ? 0 : 30, opacity: isMobile ? 1 : 0 },
                      hover: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gray-400 text-xs mb-4 line-clamp-2 font-medium leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <div className="flex items-center text-white font-black uppercase tracking-widest text-[9px] md:text-[10px] gap-2.5">
                    <span className="pb-0.5 border-b border-primary/50">View Case Study</span>
                    <motion.div
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 4 },
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon icon="solar:arrow-right-linear" className="text-xs md:text-lg text-primary" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Premium border glow */}
                <motion.div
                  variants={{
                    rest: { opacity: isMobile ? 1 : 0 },
                    hover: { opacity: 1 },
                  }}
                  className="absolute inset-0 rounded-2xl md:rounded-[2rem] ring-1 ring-primary/40 shadow-[0_0_60px_rgba(255,115,0,0.25)]"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No projects found in this category.
          </div>
        )}

        <motion.div variants={fadeUp} className="text-center mt-24">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 border-b border-primary pb-1 text-white hover:text-primary transition-all duration-300 group text-lg"
          >
            <motion.span
              whileHover={{ x: 8 }}
              className="flex items-center gap-2"
            >
              See All Projects
              <Icon icon="solar:arrow-right-linear" className="text-xl transition-transform group-hover:translate-x-1" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
