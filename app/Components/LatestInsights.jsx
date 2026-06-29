"use client";

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";
import API_BASE_URL from "../config";

export default function LatestInsights() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/public/blogs`);
        if (res.ok) {
          const data = await res.json();
          // Sort by creation date and take first 3
          const sorted = data
            .filter((p) => p.status !== "draft")
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 3);
          setBlogs(sorted);
        }
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlogs();
  }, []);

  const fallbackBlogs = [
    {
      _id: "1",
      title: "Why Next.js is the Ultimate Framework for SEO & Core Web Vitals in 2026",
      category: "Web Development",
      description: "How static generation, server-side rendering, and image optimizations help startups achieve 99+ PageSpeed scores.",
      createdAt: new Date().toISOString()
    },
    {
      _id: "2",
      title: "How n8n & LLM Agents are Eliminating Customer Support Bottlenecks",
      category: "AI & Automation",
      description: "Discover how custom AI workflows and API connections are saving businesses hundreds of manual hours every week.",
      createdAt: new Date().toISOString()
    },
    {
      _id: "3",
      title: "The 2026 Guide to Local SEO for Coaching Institutes and Hospitals in Bihar",
      category: "Digital Marketing",
      description: "A complete blueprint to ranking on Google Maps, optimizing schema markup, and driving high-intent admissions.",
      createdAt: new Date().toISOString()
    }
  ];

  const displayedBlogs = blogs.length > 0 ? blogs : fallbackBlogs;

  return (
    <section className="py-24 bg-black relative overflow-hidden border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-bold uppercase tracking-wider mb-4">
              📚 Knowledge Base
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none font-display">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF3B00] hover:text-orange-400 transition-colors"
          >
            View All Articles
            <Icon icon="solar:arrow-right-line-duotone" width={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedBlogs.map((blog, idx) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-3xl bg-zinc-950/40 border border-white/5 hover:border-orange-500/25 hover:bg-zinc-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-orange-500 bg-orange-500/5 px-2.5 py-1 rounded-md border border-orange-500/10">
                    {blog.category}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">
                    {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </span>
                </div>
                
                {/* H2 for the Blog Post Title */}
                <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-orange-500 transition-colors tracking-tight line-clamp-2">
                  {blog.title}
                </h2>
                
                <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                  {(blog.description || blog.excerpt || "")
                    ? (blog.description || blog.excerpt).replace(/<[^>]*>/g, "").trim()
                    : (blog.content || "").replace(/<[^>]*>/g, "").substring(0, 120).trim() + ((blog.content || "").replace(/<[^>]*>/g, "").length > 120 ? "..." : "")}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/blog/${blog._id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-orange-500 transition-colors"
                >
                  Read Article
                  <Icon icon="solar:arrow-right-up-linear" width={14} className="group-hover:rotate-45 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
