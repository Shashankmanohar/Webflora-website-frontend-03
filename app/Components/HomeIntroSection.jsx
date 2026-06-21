import React from "react";
import Link from "next/link";

export default function HomeIntroSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(0,0,0,0) 70%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 font-medium tracking-wide uppercase">
              ⭐ Leading Tech Partner
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              Looking for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-extrabold">
                Best Software Company in Patna?
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-red-600 rounded" />
          </div>

          {/* Prose Content Area */}
          <div className="lg:col-span-7 text-gray-300 space-y-6 text-base md:text-lg leading-relaxed font-light">
            <p>
              Welcome to <strong className="text-white font-medium">Webflora Technologies</strong>, a premier MSME-registered (UDYAM-BR-26-0183379) 
              <span className="text-white font-normal"> software development company in Patna, Bihar</span>. We engineer high-performance, 
              scalable, and secure custom applications designed to accelerate digital transformation. Whether you are a startup looking to launch 
              a new product or an enterprise streamlining internal operations, our team delivers founder-led technical excellence from concept to execution.
            </p>
            <p>
              As a full-stack <span className="text-white font-normal">IT company in Patna</span>, our core services include custom software development, 
              scalable enterprise-grade CRM/ERP systems, mobile app development (iOS & Android via Flutter/React Native), high-speed website development 
              using Next.js and React, and cutting-edge n8n-powered AI automation. We combine modern technical architectures with growth-oriented strategies 
              to turn software development into a measurable ROI driver for your brand.
            </p>
            <p>
              We are dedicated to elevating the digital ecosystem across the region, serving growth-minded businesses in key trade hubs. Webflora Technologies 
              proudly provides custom technological solutions and SEO-friendly web platforms for companies in <span className="text-white">Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, and Bihar Sharif</span>, as well as clients across India. Partner with us to scale your business operations, automate workflows, and build absolute digital authority in your market.
            </p>
            
            {/* Quick links to service subpages */}
            <div className="pt-4 flex flex-wrap gap-3">
              <Link 
                href="/services/website-development-company-in-patna"
                className="text-xs px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all"
              >
                Web Development Patna
              </Link>
              <Link 
                href="/services/mobile-app-development-company-in-patna"
                className="text-xs px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all"
              >
                Mobile Apps Patna
              </Link>
              <Link 
                href="/services/software-development-company-in-patna"
                className="text-xs px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all"
              >
                Software Solutions Patna
              </Link>
              <Link 
                href="/services/ai-automation-company-in-patna"
                className="text-xs px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-neutral-300 hover:text-white transition-all"
              >
                AI & Automation Bihar
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
