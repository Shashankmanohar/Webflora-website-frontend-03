"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import { 
  ChevronLeft, 
  Twitter, 
  Linkedin, 
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

const PortfolioClient = ({ initialProject }) => {
  const { slug } = useParams();
  const [project, setProject] = React.useState(initialProject || null);
  const [loading, setLoading] = React.useState(!initialProject);
  const [relatedProjects, setRelatedProjects] = React.useState([]);

  React.useEffect(() => {
    if (!project || project.slug !== slug) {
      fetchProject();
    }
  }, [slug]);

  React.useEffect(() => {
    const fetchRelatedData = async () => {
      try {
        // Fetch case studies
        const csRes = await fetch(`${API_BASE_URL}/api/public/case-studies`);
        if (csRes.ok) {
          const csData = await csRes.json();
          // Filter out current case study, and take first 2
          const filtered = csData.filter(p => p.slug !== slug).slice(0, 2);
          setRelatedProjects(filtered);
        }
      } catch (error) {
        console.error("Error fetching related data:", error);
      }
    };
    if (project) {
      fetchRelatedData();
    }
  }, [slug, project]);

  const fetchProject = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/public/case-studies/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setProject(data);
      } else {
        const fallback = getStaticCaseStudyFallback(slug);
        if (fallback) setProject(fallback);
      }
    } catch (err) {
      console.error("Error fetching project:", err);
      const fallback = getStaticCaseStudyFallback(slug);
      if (fallback) setProject(fallback);
    } finally {
      setLoading(false);
    }
  };

  const getStaticCaseStudyFallback = (slug) => {
    if (slug === "coaching-lms-erp-patna") {
      return {
        title: "Re-engineering Bihar's Largest Coaching ERP & LMS System",
        slug: "coaching-lms-erp-patna",
        description: "How Webflora re-architected a legacy portal into a high-performance Next.js and n8n-automated LMS, doubling student registrations.",
        content: `
          <h2>Executive Summary & Background</h2>
          <p>Our client, a premier educational coaching group operating in Patna, Bihar, manages over 10 active branches with a student count exceeding 15,000. They were struggling with outdated manual admission desks, slow web inquiry sheets, and zero brand authority on local search engine queries.</p>

          <h2>The Business Problem</h2>
          <p>The client experienced significant administrative friction. Over 40% of prospective student leads dropped out due to delayed follow-ups. Their existing WordPress landing page had a 7-second loading latency on mobile 4G networks, driving cumulative layout shifts and dropping Google Map visibility score below average.</p>

          <h2>Why They Chose Webflora Technologies</h2>
          <p>Webflora was selected for our deep expertise in high-performance headless architectures (Next.js/React) and our Udyam-registered corporate trust, which guaranteed a custom SLA (Service Level Agreement) and long-term tech maintenance.</p>

          <h2>Software & System Architecture</h2>
          <p>We designed a decoupled microservices architecture. The user interface was built using Next.js (Server-Side Rendered), backed by an Express/Node.js API gateway, and stored securely in a cluster PostgreSQL database. n8n was integrated to trigger automated WhatsApp messages and qualify leads via Google Sheets sync.</p>

          <h2>Development Timeline & Tech Stack</h2>
          <ul>
            <li><strong>Timeline:</strong> 8 Weeks (Agile Scrum sprints).</li>
            <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS, Framer Motion.</li>
            <li><strong>Backend:</strong> Node.js, Express, PostgreSQL, Prisma ORM.</li>
            <li><strong>Automation:</strong> n8n workflow engine, WhatsApp Business API.</li>
          </ul>

          <h2>SEO & Speed Improvements</h2>
          <p>By moving from WordPress to Next.js SSG:
            - Google PageSpeed Insights mobile score jumped from 32 to 98.
            - Organic local keyword rankings for coaching searches in Bihar reached the Top 3.
            - 100% Core Web Vitals compliance (LCP under 1.2s, CLS of 0.0).</p>

          <h2>Measurable Business Outcome</h2>
          <ul>
            <li><strong>Admissions Growth:</strong> Direct digital admissions increased by 150% in the first quarter.</li>
            <li><strong>Time Savings:</strong> Admin overhead was reduced by 25 hours per week due to automatic WhatsApp receipts.</li>
            <li><strong>Conversion Rates:</strong> Lead qualification rates rose from 15% to 48%.</li>
          </ul>

          <h2>Lessons Learned & Future Scaling</h2>
          <p>Decoupled headless frameworks are not just for speed; they provide unmatched security against SQL injection attempts. In phase two, we plan to implement geofenced check-ins using custom mobile applications.</p>
        `,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        category: "SOFTWARE",
        status: "published",
        client: "Chanakya Classes Patna",
        outcome: "150% Enrollment Growth"
      };
    }
    return null;
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Case Study Not Found</h2>
        <Link href="/case-studies" className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/80 transition-all">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-32">
      {/* Case Study Schemas */}
      {project && (
        <>
          {/* CASE STUDY SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",

                "@type": "Article",

                "@id": `https://webfloratechnologies.com/case-studies/${slug}`,

                "name": project.title,

                "headline": `How Webflora Technologies Built ${project.title}`,

                "description": project.description || `Explore how Webflora Technologies helped ${project.client || "our client"} improve performance, automate workflows, and increase online growth through custom web development and digital solutions.`,

                "url": `https://webfloratechnologies.com/case-studies/${slug}`,

                "image": project.image ? (project.image.startsWith('http') ? project.image : `https://webfloratechnologies.com/${project.image}`) : "https://webfloratechnologies.com/case-study-image.jpg",

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

                "datePublished": project.createdAt ? project.createdAt.split('T')[0] : "2026-05-19",

                "dateModified": project.updatedAt ? project.updatedAt.split('T')[0] : (project.createdAt ? project.createdAt.split('T')[0] : "2026-05-19"),

                "inLanguage": "en-IN",

                "keywords": [
                  "case study",
                  project.category || "website development",
                  "software development",
                  "digital transformation",
                  "AI automation",
                  "SEO growth",
                  "Patna software company"
                ],

                "about": [
                  {
                    "@type": "Thing",
                    "name": project.category || "Web Development"
                  },
                  {
                    "@type": "Thing",
                    "name": "Custom Software Development"
                  },
                  {
                    "@type": "Thing",
                    "name": "AI Automation"
                  }
                ]
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
                    "name": "Case Studies",
                    "item": "https://webfloratechnologies.com/case-studies"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": project.title,
                    "item": `https://webfloratechnologies.com/case-studies/${slug}`
                  }
                ]
              })
            }}
          />
        </>
      )}

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[200]"
        style={{ scaleX }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm font-medium">
            <ChevronLeft size={16} />
            Back to Case Studies
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest rounded-md">
              {project.category}
            </span>
            <span className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <Activity size={12} />
              Impact Report
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-12 tracking-tight max-w-5xl">
            {project.title}
          </h1>
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5">
            <div>
              <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mb-2">Client</p>
              <p className="text-lg font-bold text-white">{project.client || "Confidential"}</p>
            </div>
            
            <div>
              <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mb-2">Success Rate</p>
              <p className="text-lg font-bold text-primary flex items-center gap-2">
                 <Trophy size={16} />
                 {project.outcome || "100%"}
              </p>
            </div>

            <div className="hidden md:block">
              <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mb-2">Domain</p>
              <p className="text-lg font-bold text-white">{project.category}</p>
            </div>

            <div>
              <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest mb-2">Social Share</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(project.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  aria-label="Share on Twitter"
                  className="text-neutral-500 hover:text-[#1DA1F2] transition-colors"
                >
                  <Twitter size={18} />
                </button>
                <button 
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  aria-label="Share on LinkedIn"
                  className="text-neutral-500 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 mb-20">
          <Image 
            src={project.image.startsWith('http') ? project.image : `${API_BASE_URL}/${project.image}`} 
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">
          {/* Article */}
          <article className="max-w-[760px]">
            {project.description && (
              <div className="mb-12">
                <p className="text-2xl text-neutral-300 font-light leading-relaxed italic">
                   "{project.description}"
                </p>
              </div>
            )}

            <div 
              className="case-study-content prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />

            {/* Contextual Internal Service Link for AEO & SEO */}
            <div className="mt-16 p-8 rounded-3xl bg-zinc-950 border border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden group shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              <div className="space-y-2 text-left">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] block">
                  Service Expertise Link
                </span>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Interested in our {project.category} systems?
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-lg">
                  This case study demonstrates our capability in custom web engineering, performance optimization, and custom integrations. Click below to view detailed features, pricing, and service offerings.
                </p>
              </div>
              <Link 
                href={
                  project.category?.toUpperCase() === "WEB" ? "/services/website-development-company-in-patna" :
                  project.category?.toUpperCase() === "MOBILE" ? "/services/mobile-app-development-company-in-patna" :
                  project.category?.toUpperCase() === "SOFTWARE" ? "/services/software-development-company-in-patna" :
                  project.category?.toUpperCase() === "AI/ML" ? "/services/ai-automation-company-in-patna" :
                  project.category?.toUpperCase() === "DIGITAL MARKETING" ? "/services/digital-marketing-agency-in-patna" :
                  "/services"
                }
                className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-primary hover:border-primary text-white hover:text-white transition-all text-xs font-black uppercase tracking-wider rounded-xl flex items-center gap-2 flex-shrink-0 group shadow-lg"
              >
                <span>Explore {project.category} Service</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-Impact Cinematic CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 md:mt-32 p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group shadow-2xl text-center"
            >
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8">
                   Accelerate Your Growth
                </span>
                
                <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
                  Want to achieve <span className="text-primary italic">similar results?</span>
                </h3>
                
                <p className="text-neutral-400 text-lg md:text-xl mb-12 font-light leading-relaxed">
                  Our specialists are ready to help you architect your next digital success story and replicate this growth for your brand.
                </p>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-4 px-10 md:px-14 py-5 md:py-6 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(255,59,0,0.4)] group"
                >
                  <span className="flex items-center gap-3 text-sm md:text-base uppercase tracking-widest">
                    Let's Start Your Project 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* Decorative Large Icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                 <Icon icon="solar:rocket-bold" className="text-[200px]" />
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-12">
              {project.projectUrl && (
                <a 
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-primary hover:text-white transition-all"
                >
                  Live Preview <ExternalLink size={16} />
                </a>
              )}

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <h5 className="text-[10px] font-bold mb-6 uppercase tracking-widest text-neutral-600">Expertise Used</h5>
                <div className="flex flex-wrap gap-2">
                  {[project.category, "Consultation", "Design"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-neutral-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-700 px-2">Related Expertise</h5>
                <div className="space-y-2">
                  {[
                    { name: "Web Development", href: "/services/website-development-company-in-patna" },
                    { name: "Mobile Apps", href: "/services/mobile-app-development-company-in-patna" },
                    { name: "Digital Growth", href: "/services/digital-marketing-agency-in-patna" }
                  ].map((service) => (
                    <Link key={service.name} href={service.href} className="group flex items-center justify-between p-5 rounded-2xl bg-transparent hover:bg-white/5 transition-all">
                      <span className="text-[11px] font-bold text-neutral-500 group-hover:text-white uppercase tracking-widest">{service.name}</span>
                      <ArrowRight size={14} className="text-neutral-800 group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Case Studies */}
        {relatedProjects.length > 0 && (
          <div className="mt-32 pt-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
              <div>
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Success Stories</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Related Case Studies</h2>
              </div>
              <Link href="/case-studies" className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-white mt-4 md:mt-0 transition-colors">
                All Case Studies <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((item) => (
                <Link href={`/case-studies/${item.slug}`} key={item._id} className="group flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-primary/30 rounded-3xl overflow-hidden transition-all duration-500">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={item.image.startsWith('http') ? item.image : `${API_BASE_URL}/${item.image}`} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[8px] font-bold uppercase tracking-widest rounded-lg">{item.category}</div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors line-clamp-2 mb-4 leading-tight">{item.title}</h3>
                    <p className="text-neutral-500 text-sm font-light leading-relaxed line-clamp-2 mb-8">{item.description}</p>
                    <div className="mt-auto flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                      View Case Study <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        .case-study-content h1, .case-study-content h2, .case-study-content h3, .case-study-content h4 {
          color: white;
          font-weight: 800;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .case-study-content h1 { font-size: 3.25rem; }
        .case-study-content h2 { font-size: 2.5rem; }
        .case-study-content h3 { font-size: 1.9rem; }
        .case-study-content h4 { font-size: 1.5rem; }
        
        @media (max-width: 768px) {
          .case-study-content h1 { font-size: 1.9rem; }
          .case-study-content h2 { font-size: 1.65rem; }
          .case-study-content h3 { font-size: 1.4rem; }
          .case-study-content h4 { font-size: 1.2rem; }
        }
        
        .case-study-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #a3a3a3;
          margin-bottom: 2rem;
        }
        .case-study-content strong { color: white; }
        
        .case-study-content blockquote {
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          border-left: 4px solid #ff3c00;
          border-radius: 1.5rem;
          margin: 3rem 0;
        }
        .case-study-content blockquote p {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          margin-bottom: 0;
        }
        .case-study-content ul {
          list-style: none;
          padding: 0;
          margin: 2.5rem 0;
        }
        .case-study-content li {
          font-size: 1.15rem;
          color: #a3a3a3;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
        }
        .case-study-content li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #ff3c00;
          font-weight: 900;
        }
      `}</style>
    </main>
  );
};

export default PortfolioClient;
