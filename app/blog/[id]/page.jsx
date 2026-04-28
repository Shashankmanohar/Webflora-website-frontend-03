"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import API_BASE_URL from "../../config";

const BlogDetail = () => {
  const { id: slug } = useParams();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchPost();
  }, [slug]);

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
            
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12 tracking-tighter uppercase">
              {post.title}
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-12 border-y border-white/5">
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
              
              <div className="flex items-center gap-12">
                <div className="text-left">
                  <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-1">Published</p>
                  <p className="text-lg font-bold text-white uppercase tracking-tight">
                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
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
          className="max-w-7xl mx-auto relative aspect-[21/9] rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-24"
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
                   <button className="flex-1 flex items-center justify-center gap-3 py-5 bg-white/5 border-2 border-white/5 text-gray-400 font-black uppercase tracking-widest text-[10px] rounded-[2rem] hover:border-white/20 hover:text-white transition-all">
                    <MessageSquare className="w-4 h-4" /> Discussion
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
                  {[
                    { name: "Website Development", href: "/services/web-development" },
                    { name: "Mobile App Development", href: "/services/app-development" },
                    { name: "Digital Marketing", href: "/services/social-media-marketing" }
                  ].map((service, i) => (
                    <Link key={i} href={service.href} className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500">
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{service.name}</span>
                      <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-brand-red transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
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
          border-radius: 2rem;
          margin: 4rem 0;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }
        
        @media (max-width: 768px) {
          .blog-content h2 { font-size: 2.25rem; }
          .blog-content h3 { font-size: 1.75rem; }
          .blog-content p { font-size: 1.125rem; }
          .blog-content blockquote { padding: 2rem; }
          .blog-content blockquote p { font-size: 1.25rem; }
        }
      `}</style>
    </main>
  );
};

export default BlogDetail;
