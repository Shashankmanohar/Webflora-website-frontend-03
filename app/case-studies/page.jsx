"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import API_BASE_URL from "../config";

// --- Premium Component: Starfield ---
function Starfield() {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const generated = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setStars(generated);
  }, []);

  return (
    <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

// --- Premium Component: Elegent Reveal ---
function ElegantReveal({ text, className }) {
  return (
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.h1>
  );
}

export default function CaseStudiesPage() {
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
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 border-2 border-primary/30 border-t-primary rounded-full" 
        />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-white pt-24 pb-48 overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
          >
            <span className="w-8 h-[1px] bg-primary" />
            Portfolio Showcase
          </motion.div>
          
          <ElegantReveal 
            text="Case Studies" 
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            A collection of our most impactful work, from high-performance web systems to strategic digital growth.
          </motion.p>
        </header>

        {/* Filter Section */}
        <div className="mb-16">
          <div className="flex flex-nowrap md:flex-wrap overflow-x-auto no-scrollbar gap-4 pb-4">
            {["ALL", "WEB", "MOBILE", "AI/ML", "SOFTWARE", "DIGITAL MARKETING"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === item
                    ? "bg-white border-white text-black"
                    : "bg-transparent border-white/10 text-neutral-500 hover:text-white hover:border-white/30"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col h-full bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                {/* Image Container */}
                <div 
                  onClick={() => router.push(`/case-studies/${project.slug}`)}
                  className="relative aspect-video overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.image.startsWith('http') ? project.image : `${API_BASE_URL}/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[8px] font-bold uppercase tracking-widest rounded-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 
                    onClick={() => router.push(`/case-studies/${project.slug}`)}
                    className="text-xl md:text-2xl font-bold text-white mb-3 cursor-pointer group-hover:text-primary transition-colors line-clamp-2"
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm mb-8 line-clamp-3 font-light leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link 
                      href={`/case-studies/${project.slug}`}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      View Case Study
                      <Icon icon="solar:arrow-right-linear" className="text-sm" />
                    </Link>
                    <Icon icon="solar:star-linear" className="text-neutral-800" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <Icon icon="solar:folder-error-linear" className="text-5xl text-neutral-800 mx-auto mb-6" />
            <p className="text-neutral-500 font-medium">No case studies found in this category.</p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  );
}
