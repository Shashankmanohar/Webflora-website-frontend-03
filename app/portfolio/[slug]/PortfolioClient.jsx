"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  ChevronLeft, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  ArrowRight,
  ExternalLink,
  Trophy,
  Activity,
  Briefcase
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import API_BASE_URL from "../../config";

const PortfolioClient = () => {
  const { slug } = useParams();
  const [project, setProject] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchProject();
  }, [slug]);

  const fetchProject = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/case-studies/${slug}`);
      const data = await res.json();
      if (res.ok) {
        setProject(data);
      }
    } catch (err) {
      console.error("Error fetching project:", err);
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

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-5xl font-black mb-8 tracking-tighter uppercase">PROJECT NOT FOUND</h2>
        <p className="text-gray-500 mb-12 max-w-sm font-medium uppercase tracking-widest text-[10px]">The case study you're looking for might have been moved or archived.</p>
        <Link href="/#work" className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-brand-red hover:text-white transition-all duration-500">
          Back to Portfolio
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
          <Link href="/#work" className="group inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all font-black uppercase tracking-[0.3em] text-[10px]">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <header className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-5 py-2 bg-brand-red text-white text-[10px] font-black tracking-widest uppercase rounded-full">
                {project.category}
              </span>
              <span className="text-gray-600 font-black tracking-[0.2em] text-[10px] uppercase flex items-center gap-2">
                <Briefcase size={14} className="text-brand-red" />
                Case Study
              </span>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-bold leading-[1.05] mb-12 tracking-tight">
              {project.title}
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5">
              <div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-2">Client</p>
                <p className="text-xl font-bold text-white uppercase tracking-tight">{project.client || "Confidential"}</p>
              </div>
              
              <div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-2">Outcome</p>
                <p className="text-xl font-bold text-brand-red uppercase tracking-tight flex items-center gap-2">
                   <Trophy size={18} />
                   {project.outcome || "Success"}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-gray-600 font-black uppercase tracking-widest mb-2">Share Case Study</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
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
          className="max-w-7xl mx-auto relative aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] mb-24"
        >
          <Image 
            src={project.image.startsWith('http') ? project.image : `${API_BASE_URL}/${project.image}`} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-24">
          {/* Main Content */}
          <article className="max-w-[720px] mx-auto lg:mx-0">
             <div className="mb-16">
                <p className="text-2xl text-gray-400 font-medium leading-relaxed italic">
                   "{project.description}"
                </p>
             </div>

            <div 
              className="case-study-content prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            {/* In-Article CTA */}
            <div className="mt-24 p-12 md:p-16 rounded-[4rem] bg-gradient-to-br from-brand-red/20 via-[#050505] to-[#050505] border border-brand-red/30 shadow-[0_0_40px_rgba(255,60,0,0.1)]">
              <span className="text-brand-red font-black tracking-[0.4em] uppercase text-[9px] mb-4 inline-block">Work With Us</span>
              <h3 className="text-4xl font-bold mb-6 tracking-tight uppercase leading-tight">Want results like <br />{project.client}?</h3>
              <p className="text-gray-400 mb-10 font-medium text-lg max-w-md">Our team specialized in {project.category} is ready to help you scale and dominate your market.</p>
              <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-brand-red text-white font-black uppercase tracking-widest text-[11px] rounded-full hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,60,0,0.3)] group">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </article>

          {/* Premium Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-16">
              {/* External Link */}
              {project.projectUrl && (
                <div className="space-y-4">
                  <a 
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-6 bg-white text-black font-black uppercase tracking-widest text-[11px] rounded-[2rem] shadow-2xl hover:bg-brand-red hover:text-white transition-all duration-500"
                  >
                    Launch Live Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Project Stats */}
              <div className="p-10 rounded-[3.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red shadow-[0_0_15px_rgba(255,60,0,0.5)]" />
                <h5 className="text-sm font-black mb-8 tracking-[0.3em] uppercase text-gray-500">Key Statistics</h5>
                <div className="space-y-8">
                   <div>
                      <span className="text-brand-red text-3xl font-bold block mb-1">{project.outcome || "Successful"}</span>
                      <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest">Primary Objective</span>
                   </div>
                   <div className="flex items-center gap-4 text-gray-400">
                      <Activity size={20} className="text-brand-red" />
                      <span className="text-sm font-bold uppercase">{project.category} Solutions</span>
                   </div>
                </div>
              </div>

              {/* Our Expertise */}
              <div>
                <h5 className="text-sm font-black mb-8 tracking-[0.3em] uppercase text-gray-700">Other Services</h5>
                <div className="space-y-4">
                  {[
                    { name: "Website Development", href: "/services/web-development" },
                    { name: "Mobile App Development", href: "/services/app-development" },
                    { name: "Digital Marketing", href: "/services/social-media-marketing" }
                  ].map((service, i) => (
                    <Link key={i} href={service.href} className="group flex items-center justify-between p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500">
                      <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white">{service.name}</span>
                      <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-brand-red transition-all" />
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
        .case-study-content {
          font-family: var(--font-inter), sans-serif;
        }
        .case-study-content h1, .case-study-content h2, .case-study-content h3, .case-study-content h4 {
          font-family: var(--font-space-grotesk), sans-serif;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          margin-top: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .case-study-content h2 { font-size: 3rem; }
        .case-study-content h3 { font-size: 2.25rem; }
        
        .case-study-content p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #9ca3af; /* gray-400 */
          margin-bottom: 2.25rem;
        }
        .case-study-content b, .case-study-content strong {
          color: white;
          font-weight: 700;
        }
        .case-study-content blockquote {
          position: relative;
          padding: 3rem;
          background: rgba(255, 60, 0, 0.03);
          border-radius: 2rem;
          margin: 4.5rem 0;
          border-left: 6px solid #ff3c00;
        }
        .case-study-content blockquote p {
          color: white;
          font-size: 1.75rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 0;
        }
        .case-study-content ul {
          margin: 3rem 0;
          padding-left: 0;
        }
        .case-study-content li {
          font-size: 1.25rem;
          color: #9ca3af;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 2.5rem;
        }
        .case-study-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #ff3c00;
          font-weight: 900;
        }
        .case-study-content img {
          border-radius: 2.5rem;
          margin: 4.5rem 0;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </main>
  );
};

export default PortfolioClient;
