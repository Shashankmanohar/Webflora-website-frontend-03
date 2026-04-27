"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import API_BASE_URL from "../config";
import ContactSection from "../Components/ContactSection";

// Mock categories - you can also fetch these from unique categories in your blogs
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...new Set(blogs.map(blog => blog.category).filter(Boolean))];

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/blogs`);
      const data = await res.json();
      if (res.ok) {
        setBlogs(data);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogs.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogs.find(p => p.status === 'published');

  return (
    <main className="min-h-screen bg-[#000] text-white pt-32 pb-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-[10px]">The Journal</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
            >
              Stories of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-orange-500">Digital Mastery.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed font-medium"
            >
              Explore our latest thoughts on technology, design, and how we're shaping the future of digital experiences.
            </motion.p>
          </div>
        </section>

        {loading ? (
          <div className="flex justify-center py-32">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-brand-red/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && selectedCategory === "All" && !searchQuery && (
              <section className="container mx-auto px-4 mb-24">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-[600px] md:h-[700px] rounded-[3rem] overflow-hidden border border-white/10"
                >
                  <div className="absolute inset-0">
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-[#000]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#000]/60 via-transparent to-transparent hidden md:block" />
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
                    <div className="max-w-3xl">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 mb-6"
                      >
                        <span className="px-4 py-1.5 bg-brand-red text-white text-[10px] font-black tracking-widest uppercase rounded-full">
                          Featured
                        </span>
                        <span className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest">
                          <Clock size={14} className="text-brand-red" />
                          {featuredPost.readTime || '8 MIN READ'}
                        </span>
                      </motion.div>

                      <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight"
                      >
                        {featuredPost.title}
                      </motion.h2>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center gap-6"
                      >
                        <Link href={`/blog/${featuredPost.slug}`} className="group/btn relative flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-500 overflow-hidden shadow-2xl">
                          <span className="relative z-10">Read Full Story</span>
                          <ChevronRight className="relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full border border-white/20 p-1">
                            <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold">
                              {featuredPost.author ? featuredPost.author.charAt(0) : 'W'}
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-0.5">Written By</p>
                            <p className="text-sm font-bold text-white uppercase">{featuredPost.author || 'Webflora Team'}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </section>
            )}

            {/* Controls */}
            <section className="container mx-auto px-4 mb-16">
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-between border-b border-white/5 pb-12">
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 ${
                        selectedCategory === category 
                          ? "bg-white border-white text-black shadow-[0_20px_40px_rgba(255,255,255,0.1)]" 
                          : "bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="relative w-full lg:w-[400px] group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-white transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search the archive..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.03] border-2 border-white/5 rounded-full py-5 pl-14 pr-8 text-[12px] font-bold tracking-widest focus:outline-none focus:border-brand-red/50 focus:bg-white/[0.07] transition-all placeholder:text-gray-600 text-white"
                  />
                </div>
              </div>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-4 mb-32">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post._id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="group flex flex-col h-full"
                    >
                      <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                        <Image 
                          src={post.image} 
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-6 right-6">
                          <span className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[9px] font-black tracking-[0.2em] uppercase text-white">
                            {post.category}
                          </span>
                        </div>
                      </Link>
                      
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-6 mb-4">
                          <span className="flex items-center gap-2 text-[10px] font-black text-brand-red tracking-[0.2em] uppercase">
                            <Calendar size={12} />
                            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-2 text-[10px] font-black text-gray-500 tracking-[0.2em] uppercase">
                            <Clock size={12} />
                            {post.readTime || '5 MIN READ'}
                          </span>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`} className="block group/title">
                          <h3 className="text-3xl font-bold mb-4 leading-[1.2] tracking-tight group-hover/title:text-brand-red transition-colors duration-300">
                            {post.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-300 text-base leading-relaxed mb-8 line-clamp-3 font-normal">
                          {post.content.replace(/<[^>]*>/g, '').substring(0, 140)}...
                        </p>
                        
                        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white">
                              {post.author ? post.author.charAt(0) : 'W'}
                            </div>
                            <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">{post.author || 'Webflora'}</span>
                          </div>
                          
                          <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-brand-red transition-colors group/link">
                            Read Story
                            <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-32 bg-white/[0.02] border border-white/5 rounded-[3rem]">
                  <div className="inline-flex p-8 rounded-full bg-white/5 border border-white/10 mb-8">
                    <Search className="w-16 h-16 text-gray-700" />
                  </div>
                  <h3 className="text-4xl font-bold mb-4 tracking-tight">No stories found.</h3>
                  <p className="text-gray-500 max-w-sm mx-auto mb-10 font-medium">We couldn't find any articles matching your current search or filters.</p>
                  <button 
                    onClick={() => {setSelectedCategory("All"); setSearchQuery("");}}
                    className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-500"
                  >
                    Reset Archive
                  </button>
                </div>
              )}
            </section>
          </>
        )}

        {/* Premium Newsletter Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="relative rounded-[4rem] bg-[#080808] border border-white/5 p-12 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-red/10 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-orange-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block text-brand-red font-black tracking-[0.4em] uppercase text-[10px] mb-8"
                >
                  Join the Inner Circle
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]"
                >
                  Digital <br />
                  <span className="text-white/40">Intelligence.</span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-500 leading-relaxed font-medium mb-0"
                >
                  Join 10k+ innovators getting our weekly deep-dive into AI, Web3, and the future of human-centric design.
                </motion.p>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <motion.form 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-[2.5rem] flex flex-col sm:flex-row gap-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input 
                    type="email" 
                    placeholder="YOUR EMAIL ADDRESS" 
                    className="flex-grow bg-transparent border-none rounded-full py-5 px-8 text-[11px] font-black uppercase tracking-widest focus:outline-none focus:ring-0 text-white placeholder:text-gray-700"
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-12 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] shadow-2xl hover:bg-white hover:text-black transition-all duration-500 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </motion.form>
                <p className="mt-6 text-center lg:text-left text-[9px] text-gray-600 font-black uppercase tracking-widest">
                  NO SPAM. JUST HIGH-VALUE INSIGHTS. UNSUBSCRIBE ANYTIME.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  );
};

export default BlogPage;
