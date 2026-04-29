"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API_BASE_URL from "../config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category.toUpperCase() === activeCategory)
      );
    }
  }, [activeCategory, projects]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-20 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 uppercase"
          >
            Digital <span className="text-primary italic">Showcase</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Explore our collection of high-impact digital solutions, from complex enterprise software to disruptive mobile experiences and strategic marketing campaigns.
          </motion.p>
        </header>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {["ALL", "WEB", "MOBILE", "AI/ML", "SOFTWARE", "DIGITAL MARKETING"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === item
                  ? "bg-primary border-primary text-white shadow-[0_0_30px_rgba(255,115,0,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-500 hover:text-white hover:border-white/20"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover="hover"
                onClick={() => router.push(`/portfolio/${project.slug}`)}
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer bg-zinc-900 border border-white/5"
              >
                {/* Image */}
                <motion.div
                  className="absolute inset-0"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={project.image.startsWith('http') ? project.image : `${API_BASE_URL}/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight uppercase group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6 font-medium group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px]">
                    <span className="pb-1 border-b border-primary/40">Case Study</span>
                    <Icon icon="solar:arrow-right-linear" className="text-lg text-primary" />
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 group-hover:ring-primary/40 transition-all duration-500 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] group-hover:shadow-[inset_0_0_100px_rgba(255,115,0,0.2)]" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <Icon icon="solar:folder-error-linear" className="text-6xl text-gray-800 mx-auto mb-4" />
            <p className="text-gray-500 font-medium">No projects found in this category yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
