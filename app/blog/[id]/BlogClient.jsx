"use client";

import React from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  MessageSquare,
  Bookmark,
  ArrowRight,
  ChevronRight,
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import API_BASE_URL from "../../config";

const BlogClient = () => {
  const { id: slug } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [relatedBlogs, setRelatedBlogs] = React.useState([]);

  const [comments, setComments] = React.useState([]);
  const [isDiscussionOpen, setIsDiscussionOpen] = React.useState(false);
  const [commentsLoading, setCommentsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [commentForm, setCommentForm] = React.useState({ name: "", email: "", content: "" });
  const [submissionMessage, setSubmissionMessage] = React.useState({ type: "", text: "" });
  const [showAllExpertise, setShowAllExpertise] = React.useState(false);

  const allExpertise = [
    { name: "Website Development", href: "/services/website-development-company-in-patna" },
    { name: "Mobile App Development", href: "/services/mobile-app-development-company-in-patna" },
    { name: "Digital Marketing", href: "/services/digital-marketing-agency-in-patna" },
    { name: "Software Development", href: "/services/software-development-company-in-patna" },
    { name: "AI & Automation", href: "/services/ai-automation-company-in-patna" },
    { name: "Vegavan AI (SaaS)", href: "/vegavan-ai" },
  ];

  const discussionRef = React.useRef(null);

  React.useEffect(() => {
    fetchPost();
    fetchComments();
  }, [slug]);

  const fetchComments = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/blogs/${slug}/comments`);
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    } finally {
      setCommentsLoading(false);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage({ type: "", text: "" });
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/blogs/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentForm),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmissionMessage({ type: "success", text: "Thank you! Your comment was posted successfully." });
        setCommentForm({ name: "", email: "", content: "" });
        // Append locally
        setComments(prev => [data.data, ...prev]);
      } else {
        setSubmissionMessage({ type: "error", text: data.message || "Something went wrong." });
      }
    } catch (err) {
      setSubmissionMessage({ type: "error", text: "Failed to post. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        // Fetch blogs
        const blogsRes = await fetch(`${API_BASE_URL}/api/public/blogs`);
        if (blogsRes.ok) {
          const blogsData = await blogsRes.json();
          // Filter out current post and take first 3
          const filtered = blogsData.filter(b => b.slug !== slug).slice(0, 3);
          setRelatedBlogs(filtered);
        }
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };
    if (post) {
      fetchRelatedData();
    }
  }, [slug, post]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/blogs/${slug}`);
      const data = await res.json();
      if (res.ok) {
        setPost(data);
      }
    } catch (err) {
      console.error("Error fetching post:", err);
    } finally {
      setLoading(false);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-brand-red/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase">STORY NOT FOUND</h2>
        <p className="text-gray-500 mb-12 max-w-sm font-medium uppercase tracking-widest text-[10px]">The article you're looking for might have been moved or archived.</p>
        <Link href="/blog" className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-500">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-32 overflow-hidden">
      {/* Blog Schemas */}
      {post && (
        <>
          {/* BLOG POST SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",

                "@type": "BlogPosting",

                "@id": `https://webfloratechnologies.com/blog/${slug}`,

                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": `https://webfloratechnologies.com/blog/${slug}`
                },

                "headline": post.title,

                "description": post.description || post.excerpt || "Read the latest insights and updates from Webflora Technologies.",

                "image": post.image || "https://webfloratechnologies.com/blog-image.jpg",

                "author": {
                  "@type": "Organization",
                  "name": "Webflora Technologies",
                  "@id": "https://webfloratechnologies.com/#organization"
                },

                "publisher": {
                  "@type": "Organization",

                  "name": "Webflora Technologies",

                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://webfloratechnologies.com/webflora-logo.svg"
                  }
                },

                "datePublished": post.createdAt ? post.createdAt.split('T')[0] : "2026-05-19",

                "dateModified": post.updatedAt ? post.updatedAt.split('T')[0] : (post.createdAt ? post.createdAt.split('T')[0] : "2026-05-19"),

                "inLanguage": "en-IN",

                "keywords": post.tags || [
                  "software development company in Patna",
                  "web development company Bihar",
                  "SEO company Patna",
                  "AI automation company India",
                  "mobile app development"
                ],

                "articleSection": post.category || "Technology",

                "wordCount": post.wordCount || "1200"
              })
            }}
          />

          {/* BREADCRUMB SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",

                "@type": "BreadcrumbList",

                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://webfloratechnologies.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://webfloratechnologies.com/blog"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": post.title,
                    "item": `https://webfloratechnologies.com/blog/${slug}`
                  }
                ]
              })
            }}
          />
        </>
      )}

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-red origin-left z-[200] shadow-[0_0_10px_rgba(255,60,0,0.5)]"
        style={{ scaleX }}
      />

      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-red/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation */}
        <div className="mb-16">
          <Link href="/blog" className="group inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all font-black uppercase tracking-[0.3em] text-[10px]">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Archive
          </Link>
        </div>

        {/* Hero Section */}
        <header className="max-w-5xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="px-5 py-2 bg-brand-red text-white text-[10px] font-black tracking-widest uppercase rounded-full">
                {post.category}
              </span>
              <span className="text-gray-600 font-black tracking-[0.2em] text-[10px] uppercase flex items-center gap-2">
                <Clock size={14} className="text-brand-red" />
                {post.readTime || '8 MIN READ'}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-12 tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8 md:py-12 border-y border-white/5">
              <div className="flex items-center gap-4 text-left">
                <div className="w-14 h-14 rounded-full bg-white/5 border-2 border-white/10 p-1">
                  <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-sm font-black text-brand-red">
                    {post.author ? post.author.charAt(0) : 'W'}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">Written By</p>
                  <p className="text-lg font-bold text-white uppercase tracking-tight">{post.author || 'Webflora Team'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-8 md:gap-12">
                <div className="text-left">
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">Published</p>
                  <p className="text-lg font-bold text-white uppercase tracking-tight">
                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Share</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all duration-500"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-500"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-500"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto relative aspect-video md:aspect-[21/9] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-12 md:mb-24"
        >
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-24">
          {/* Main Content */}
          <article className="max-w-[720px] mx-auto lg:mx-0">
            <div 
              className="blog-content prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tag Cloud */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-20 pt-12 border-t border-white/5">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-6 py-2.5 bg-white/5 border-2 border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:border-brand-red hover:text-white transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* In-Article CTA */}
            <div className="mt-16 p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-brand-red/20 via-[#050505] to-[#050505] border border-brand-red/30 shadow-[0_0_40px_rgba(255,60,0,0.1)]">
              <h3 className="text-3xl font-bold mb-4 tracking-tight uppercase">Ready to build something extraordinary?</h3>
              <p className="text-gray-400 mb-8 font-medium text-lg">Let's turn these insights into action. Partner with Webflora to elevate your digital presence.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-brand-red text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,60,0,0.3)]">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Premium Author Card */}
            <div className="mt-24 relative p-12 md:p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 overflow-hidden group">
              <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-red/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-700 group-hover:scale-110" />
              
              <div className="relative flex flex-col md:flex-row gap-12 items-center text-center md:text-left">
                <div className="w-32 h-32 rounded-[2.5rem] bg-white/5 border-2 border-white/10 flex-shrink-0 flex items-center justify-center text-4xl font-black text-brand-red shadow-2xl overflow-hidden p-1">
                   <div className="w-full h-full bg-zinc-900 rounded-[2rem] flex items-center justify-center">
                    {post.author ? post.author.charAt(0) : 'W'}
                   </div>
                </div>
                <div className="flex-1">
                  <span className="text-brand-red font-black tracking-[0.4em] uppercase text-[9px] mb-4 inline-block">The Mind Behind</span>
                  <h4 className="text-3xl font-bold mb-4 tracking-tight uppercase">{post.author || 'Webflora Team'}</h4>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium italic">
                    "{post.authorDescription || "A lead voice at Webflora Technologies, pushing the boundaries of what's possible in the digital realm through innovation and strategy."}"
                  </p>
                  <Link href="/about" className="text-white font-black uppercase tracking-[0.2em] text-[10px] inline-flex items-center gap-3 hover:text-brand-red transition-all group/link">
                    Follow the Journey <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Inline Entry Card for Discussion (for mobile and fallback) */}
            <div className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center text-center">
              <span className="text-brand-red font-black tracking-[0.3em] uppercase text-[10px] mb-4 block">Share Your Perspective</span>
              <h4 className="text-2xl md:text-3xl font-bold uppercase mb-6 tracking-tight">Join the Conversation</h4>
              <button 
                onClick={() => setIsDiscussionOpen(true)}
                className="inline-flex items-center gap-4 px-10 py-5 bg-white/5 border-2 border-white/10 rounded-[2rem] hover:border-white/30 text-white transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 text-brand-red group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-black uppercase tracking-widest">Read and Post Comments ({comments.length})</span>
              </button>
            </div>
          </article>

          {/* Premium Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-16">
              {/* Engagement */}
              <div className="space-y-4">
                <button className="flex items-center justify-center gap-4 w-full py-5 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-[2rem] shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-500">
                  <Bookmark className="w-4 h-4" /> Save For Later
                </button>
                <div className="flex gap-4">
                   <button 
                      onClick={() => setIsDiscussionOpen(true)}
                      className="flex-1 flex items-center justify-center gap-3 py-5 bg-white/5 border-2 border-white/5 text-gray-400 font-black uppercase tracking-widest text-[10px] rounded-[2rem] hover:border-white/20 hover:text-white transition-all"
                    >
                     <MessageSquare className="w-4 h-4" /> Discussion ({comments.length})
                   </button>
                   <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          url: window.location.href
                        }).catch(console.error);
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="w-16 flex items-center justify-center bg-white/5 border-2 border-white/5 text-gray-400 rounded-[2rem] hover:border-white/20 hover:text-white transition-all"
                   >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Newsletter Mini */}
              <div className="p-10 rounded-[3.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red shadow-[0_0_15px_rgba(255,60,0,0.5)]" />
                <h5 className="text-2xl font-bold mb-6 tracking-tight uppercase leading-tight">Elevate Your <br /><span className="text-white/40">Knowledge.</span></h5>
                <p className="text-gray-500 text-xs leading-relaxed mb-8 font-medium uppercase tracking-wider">
                  The weekly briefing for digital leaders.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="EMAIL@EXAMPLE.COM" 
                    className="w-full bg-black border-2 border-white/5 rounded-full py-4 px-6 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-white/20 transition-all placeholder:text-gray-800"
                  />
                  <button className="w-full py-5 bg-brand-red text-white font-black uppercase tracking-widest text-[11px] rounded-full shadow-2xl hover:bg-white hover:text-black transition-all duration-500">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Our Expertise */}
              <div>
                <h5 className="text-sm font-black mb-8 tracking-[0.3em] uppercase text-gray-700">Our Expertise</h5>
                <div className="space-y-4">
                  {allExpertise.slice(0, 3).map((service, i) => (
                    <Link key={i} href={service.href} className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500">
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{service.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-brand-red transition-all" />
                    </Link>
                  ))}

                  <AnimatePresence initial={false}>
                    {showAllExpertise && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="space-y-4 overflow-hidden flex flex-col"
                      >
                        {allExpertise.slice(3).map((service, i) => (
                          <Link key={i + 3} href={service.href} className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500">
                            <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{service.name}</span>
                            <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-brand-red transition-all" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setShowAllExpertise(!showAllExpertise)}
                    className="w-full flex items-center justify-center gap-2 py-4 border border-dashed border-white/10 rounded-[2rem] text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    {showAllExpertise ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Blogs Section */}
        {relatedBlogs.length > 0 && (
          <div className="max-w-7xl mx-auto mt-32 pt-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <span className="text-brand-red font-black tracking-[0.3em] uppercase text-[10px] mb-3 block">Keep Reading</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">Related Stories</h2>
              </div>
              <Link href="/blog" className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white mt-4 md:mt-0 transition-colors">
                View All Articles <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((item) => (
                <Link href={`/blog/${item.slug}`} key={item._id} className="group flex flex-col">
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 border border-white/5">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <span className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-3">{item.category}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-red transition-colors line-clamp-2 leading-snug">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Premium Content Styling */}
      <style jsx global>{`
        .blog-content {
          font-family: var(--font-inter), sans-serif;
        }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
          font-family: var(--font-space-grotesk), sans-serif;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .blog-content h2 { font-size: 2.75rem; }
        .blog-content h3 { font-size: 2rem; }
        .blog-content h4 { font-size: 1.5rem; }
        
        .blog-content p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #d1d5db; /* gray-300 */
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .blog-content b, .blog-content strong {
          color: white;
          font-weight: 700;
        }
        .blog-content a {
          color: #ff3c00;
          text-decoration: none;
          font-weight: 700;
          border-bottom: 1px solid rgba(255, 60, 0, 0.3);
          transition: all 0.3s ease;
        }
        .blog-content a:hover {
          border-bottom-color: #ff3c00;
          background: rgba(255, 60, 0, 0.05);
        }
        .blog-content blockquote {
          position: relative;
          padding: 2.5rem 3rem;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.03), transparent);
          border-radius: 1.5rem;
          margin: 4rem 0;
          border-left: 4px solid #ff3c00;
        }
        .blog-content blockquote p {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: -0.01em;
          margin-bottom: 0;
          font-style: italic;
        }
        .blog-content ul, .blog-content ol {
          margin: 2.5rem 0;
          padding-left: 1.25rem;
          list-style: none;
        }
        .blog-content li {
          font-size: 1.2rem;
          color: #d1d5db;
          margin-bottom: 1.25rem;
          position: relative;
          padding-left: 2rem;
        }
        .blog-content li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.75rem;
          width: 0.75rem;
          height: 2px;
          background: #ff3c00;
          box-shadow: 0 0 10px rgba(255, 60, 0, 0.5);
        }
        .blog-content img {
          border-radius: 1.5rem;
          margin: 2.5rem 0;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        @media (min-width: 768px) {
          .blog-content img {
            border-radius: 2rem;
            margin: 4rem 0;
          }
        }
        
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 2.25rem; }
          .blog-content h3 { font-size: 1.75rem; }
          .blog-content p { font-size: 1.125rem; }
          .blog-content blockquote { padding: 2rem; }
          .blog-content blockquote p { font-size: 1.25rem; }
        }
      `}</style>

      {/* Slide-out Side Panel Discussion Hub */}
      <AnimatePresence>
        {isDiscussionOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDiscussionOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[999]"
            />

            {/* Drawer Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-[#070707] border-l border-white/5 z-[1000] flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-8 border-b border-white/5 flex-shrink-0 bg-[#090909]">
                <div>
                  <span className="text-brand-red font-black tracking-[0.2em] uppercase text-[9px] mb-1 block">Community Dialogue</span>
                  <h3 className="text-xl font-bold uppercase text-white flex items-center gap-2">
                    Discussion <span className="text-gray-500">({comments.length})</span>
                  </h3>
                </div>
                <button 
                  onClick={() => setIsDiscussionOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-brand-red hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                {/* Submit Box */}
                <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6">Share Your Thoughts</h4>
                  
                  <form onSubmit={handleCommentSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-xs text-white focus:outline-none focus:border-brand-red transition-all"
                        placeholder="Alex Morgan"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-5 py-3 text-xs text-white focus:outline-none focus:border-brand-red transition-all"
                        placeholder="alex@company.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-gray-500 ml-2">Comment</label>
                      <textarea 
                        rows="4"
                        required
                        value={commentForm.content}
                        onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-5 py-3 text-xs text-white focus:outline-none focus:border-brand-red transition-all resize-none"
                        placeholder="Join the dialogue..."
                      />
                    </div>

                    {submissionMessage.text && (
                      <div className={`p-3 rounded-xl text-[10px] font-bold text-center uppercase tracking-wider ${
                        submissionMessage.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-brand-red"
                      }`}>
                        {submissionMessage.text}
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black disabled:bg-gray-800 disabled:text-gray-600 font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-300 shadow-xl"
                      >
                        {isSubmitting ? "Posting..." : "Post Comment"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Comments List */}
                <div className="space-y-6 pb-10">
                  {commentsLoading ? (
                    <div className="py-10 flex justify-center">
                      <div className="w-6 h-6 border-2 border-brand-red/20 border-t-brand-red rounded-full animate-spin" />
                    </div>
                  ) : comments.length === 0 ? (
                    <div className="py-12 text-center bg-white/[0.01] border border-dashed border-white/5 rounded-2xl">
                      <MessageSquare className="w-6 h-6 text-gray-700 mx-auto mb-3" />
                      <p className="text-gray-500 text-xs font-medium">No comments yet.</p>
                    </div>
                  ) : (
                    comments.map((comment, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.03 }}
                        key={comment._id || idx} 
                        className="flex gap-4 items-start"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-xs font-black text-brand-red">
                          {comment.name ? comment.name.charAt(0).toUpperCase() : "G"}
                        </div>
                        <div className="flex-1 bg-white/[0.01] border border-white/5 rounded-2xl p-5 relative">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-xs font-bold text-white">{comment.name}</h5>
                            <span className="text-[9px] font-bold text-gray-600 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Just now'}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs leading-relaxed font-medium">{comment.content}</p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default BlogClient;
