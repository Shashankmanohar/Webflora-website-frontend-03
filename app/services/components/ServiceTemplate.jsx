import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SafeIcon from "./client/SafeIcon";

// Client-side atomic components for performance
import Starfield from "./client/Starfield";
import RevealText from "./client/RevealText";
import GlowBlob from "./client/GlowBlob";
import { ScrollProgressBar, FadeInUp, HoverScale } from "./client/MotionWrappers";
import FaqSection from "./FaqSection";
import { BenefitsGrid, TechStackGrid } from "./client/InteractiveGrids";
import TestimonialWrapper from "./client/TestimonialWrapper";
import ContactSection from "../../Components/ContactSection";
import SEOContentBlock from "../../Components/SEOContentBlock";
import { servicesData } from "../data";

import WorkSection from "../../Components/WorkSection";

const ServiceTemplate = ({ data }) => {
  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
      <ScrollProgressBar />

      <HeroWrapper data={data} />
      
      <div className="relative">
        <ProblemWrapper data={data} />
        <SubServicesWrapper data={data} />
        <SuitableForWrapper data={data} />
        <ProcessWrapper data={data} />
        <IndustriesWrapper data={data} />
        <BenefitsWrapper data={data} />
        <TechStackWrapper data={data} />
        <TestimonialWrapper />
        <WorkSection />
        <DetailedArticleWrapper data={data} />
        <FaqSection faqs={data.faqs} title={data.title} />
        <OtherServicesWrapper currentService={data.title} />
        
        {/* GEO Content Section - New section for localized SEO */}
        {(data.geoTitle || data.geoContent) && (
          <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <FadeInUp>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none">
                  {data.geoTitle}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                  {data.geoContent}
                </p>
              </FadeInUp>
            </div>
            {/* Background elements to match aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />
          </section>
        )}

        <div className="content-auto relative z-10">
          <SEOContentBlock 
            title={data.title}
            paragraphs={[
              <React.Fragment key="p1">At <strong className="text-white font-medium">Webflora Technologies</strong>, we specialize in high-end <strong className="text-gray-300">{data.title.toLowerCase()}</strong> for businesses across India. {data.subtext}</React.Fragment>,
              <React.Fragment key="p2">Our team engineers scalable systems designed for performance, automation, and long-term business growth. By leveraging enterprise-grade technologies, we ensure your digital infrastructure meets modern demands.</React.Fragment>
            ]}
          />
        </div>
        <ContactSection />
      </div>

      {/* Footer CTA */}
      <section className="relative py-20 px-6 overflow-hidden border-t border-white/5 bg-[#050505]">
        <GlowBlob color="#FF3B00" size="400px" top="0" left="30%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeInUp className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-orange-500">SCALE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Don't let your competition outpace you. Let's build the future of your {data.title} today.
            </p>
            <div className="flex justify-center">
              <HoverScale className="inline-flex items-center gap-4 px-12 py-6 bg-[#FF3B00] rounded-full font-black text-xl hover:shadow-[0_0_60px_rgba(255,59,0,0.5)] transition-shadow">
                <Link href="/contact" className="flex items-center gap-4">
                  START PROJECT NOW
                  <SafeIcon icon="solar:arrow-right-up-linear" width={28} />
                </Link>
              </HoverScale>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

const HeroWrapper = ({ data }) => {
  const words = data.headline.split(" ");
  const mainPart = words.slice(0, -2).join(" ");
  const gradientPart = words.slice(-2).join(" ");

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black pt-32 pb-20 px-6 border-b border-white/5">
      
      {/* Background Grids & Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        
        {/* Colorful glows */}
        <div 
          className="absolute left-10 top-1/4 w-[350px] h-[350px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(255,59,0,0.2) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <div 
          className="absolute right-10 bottom-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading, Subtext, Bullets & CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
          
          {/* Trust Badge */}
          <FadeInUp delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md w-fit">
              <span className="text-orange-500 text-xs">⭐</span>
              <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
                {data.heroBadge || "Top Web Agency in Bihar"}
              </span>
            </div>
          </FadeInUp>

          {/* Heading */}
          <FadeInUp delay={200} className="w-full">
            <h1 className="font-display font-bold tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl uppercase text-white">
              {mainPart}{" "}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-black drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">
                {gradientPart}
              </span>
            </h1>
          </FadeInUp>
          
          {/* Subtext description */}
          <FadeInUp delay={200} className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            {data.subtext}
            {data.relatedServices && (
              <span className="block mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                Related Services:{" "}
                {data.relatedServices.map((rs, idx) => (
                  <React.Fragment key={rs.href}>
                    {idx > 0 && <span className="mx-2 text-gray-700">•</span>}
                    <Link href={rs.href} className="text-orange-500 hover:text-orange-400 hover:underline transition-colors">
                      {rs.name}
                    </Link>
                  </React.Fragment>
                ))}
              </span>
            )}
          </FadeInUp>

          {/* Value Bullet Points */}
          <FadeInUp delay={300} className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-gray-300 text-sm font-light pt-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>Full Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>90+ Lighthouse Speed Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>Security-First Static Hosting</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>No Per-User Subscription Fees</span>
            </div>
          </FadeInUp>

          {/* CTAs */}
          <FadeInUp delay={400} className="flex flex-col sm:flex-row items-center gap-4 w-full pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-orange-500/20 rounded-full uppercase"
            >
              Start Project
            </Link>

            <Link
              href="/contact?consultation=true"
              className="px-8 py-4 w-full sm:w-auto bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 rounded-full uppercase"
            >
              Get Free Consultation
            </Link>
          </FadeInUp>

        </div>

        {/* Right Column: Dynamic Tech & Uptime Dashboard */}
        <div className="lg:col-span-5 flex flex-col gap-6 relative">
          
          {/* Tech Stack Card */}
          {data.techStack && (
            <div className="animate-float-card-1 p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-bold">Primary Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                {data.techStack.map((tech, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#FF3B00]/30 transition-all duration-300">
                    <SafeIcon icon={tech.icon} width={28} height={28} className="mb-2" />
                    <span className="text-[9px] font-mono text-gray-400 uppercase text-center tracking-wider truncate w-full">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Metrics Card */}
          <div className="animate-float-card-2 p-6 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-black text-white">99.9%</p>
              <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Uptime SLA</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Sub-1s</p>
              <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Page Load Speed</p>
            </div>
            <div className="col-span-2 h-[1px] bg-white/5 my-1" />
            <div>
              <p className="text-2xl font-black text-white">200+</p>
              <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Systems Shipped</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#FF3B00]">100%</p>
              <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Code Ownership</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const ProblemWrapper = ({ data }) => {
  return (
    <section className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Ambient decorative elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-600/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/[0.02] rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Challenge list on the left */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <FadeInUp className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs block mb-4">
              The Challenge
            </FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight leading-[1.05] uppercase">
              {data.problemTitle}
            </h2>
            <div className="space-y-4">
              {data.problems.map((p, i) => (
                <FadeInUp key={i} delay={i * 0.05} className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-red-500/20 hover:bg-red-500/[0.01] transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <SafeIcon icon="solar:close-circle-bold" className="text-red-500" width={16} />
                  </div>
                  <span className="text-base text-gray-300 font-light leading-relaxed">{p}</span>
                </FadeInUp>
              ))}
            </div>
          </div>
          
          {/* Solutions card on the right */}
          <div className="lg:col-span-6 relative group flex">
            <div className="absolute -inset-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-[2.5rem] opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
            <div className="relative w-full p-8 md:p-12 rounded-[2rem] bg-zinc-950/80 border border-white/5 shadow-2xl backdrop-blur-3xl overflow-hidden flex flex-col justify-center">
               <h3 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-4 text-white uppercase tracking-tight">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_4px_15px_rgba(34,197,94,0.3)]">
                    <SafeIcon icon="solar:check-circle-bold" className="text-white" width={20} />
                  </div>
                  Our Engineered Solutions
               </h3>
               <div className="space-y-6">
                  {data.solutions.map((s, i) => (
                    <FadeInUp key={i} delay={i * 0.05} className="flex gap-4">
                      <span className="text-gray-600 font-mono text-sm mt-1 font-bold">0{i+1}</span>
                      <div className="w-full">
                        <h4 className="text-base md:text-lg font-bold text-gray-200 mb-1 group-hover:text-white transition-colors">{s}</h4>
                        <div className="h-[1px] w-full bg-white/5" />
                      </div>
                    </FadeInUp>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BenefitsWrapper = ({ data }) => {
  return (
    <section id="impact" className="py-20 px-6 bg-black relative overflow-hidden">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
             <div className="max-w-2xl">
               <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
                 Unmatched Value
               </FadeInUp>
               <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                 WHY WE ARE <br/><span className="text-gray-600 font-outline">DIFFERENT.</span>
               </h2>
             </div>
             <p className="text-lg text-gray-400 max-w-sm font-light">We don't just deliver services; we deliver measurable business outcomes.</p>
          </div>
          
          <BenefitsGrid benefits={data.benefits} title={data.title} />
       </div>
    </section>
  );
};

const TechStackWrapper = ({ data }) => {
  if (!data.techStack) return null;

  return (
    <section className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-black mb-24 tracking-tighter text-white">
            OUR TECH <span className="text-gray-700">ARSENAL.</span>
          </h2>
        </FadeInUp>
        
        <TechStackGrid techStack={data.techStack} />
      </div>
    </section>
  );
};

const SubServicesWrapper = ({ data }) => {
  if (!data.subServices || data.subServices.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
       {/* Subtle background overlay */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-grid-pattern opacity-[0.01] pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeInUp className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
              Comprehensive Solutions
            </FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              OUR <span className="text-gray-600 font-outline">EXPERTISE.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subServices.map((service, index) => (
              <FadeInUp key={index} delay={index * 0.05} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B00]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />
                <div className="relative h-full p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                  
                  {/* Neon Top Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  {/* Glowing Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,59,0,0.0)] group-hover:shadow-[0_0_30px_rgba(255,59,0,0.25)] group-hover:border-[#FF3B00]/40 transition-all duration-500 group-hover:scale-110">
                    <SafeIcon icon={service.icon} width={26} className="text-white group-hover:text-[#FF3B00] transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors cursor-pointer w-fit uppercase tracking-widest">
                    <span>Learn More</span>
                    <SafeIcon icon="solar:arrow-right-line-duotone" width={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
       </div>
    </section>
  );
};

const OtherServicesWrapper = ({ currentService }) => {
  const otherServices = Object.entries(servicesData)
    .filter(([key, service]) => service.title !== currentService)
    .map(([key, service]) => ({
      ...service,
      slug: key,
    }));

  if (otherServices.length === 0) return null;

  // Configuration for Bento Grid Spans (Desktop)
  const getBentoSpan = (index) => {
    const spans = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-2 md:row-span-1", // Wide
    ];
    return spans[index % spans.length];
  };

  const getGradient = (index) => {
    const gradients = [
      "from-[#FF3B00]/10 to-transparent",
      "from-blue-600/10 to-transparent",
      "from-purple-600/10 to-transparent",
      "from-emerald-600/10 to-transparent",
      "from-orange-600/10 to-transparent",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <GlowBlob color="#FF3B00" size="600px" bottom="-20%" left="-10%" opacity={0.05} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-24">
          <FadeInUp className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 text-[#FF3B00] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-[#FF3B00] animate-ping" />
            Discover More
          </FadeInUp>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            WIDEN YOUR <br />
            <span className="text-gray-700">HORIZON.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            From intelligence to infrastructure, we provide the full spectrum of digital evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
          {otherServices.map((service, index) => {
            const span = getBentoSpan(index);
            const gradient = getGradient(index);
            const isLarge = span.includes("row-span-2");

            return (
              <FadeInUp 
                key={service.slug} 
                delay={index * 0.1}
                className={`${span} group relative`}
              >
                <Link href={`/services/${service.slug}`} className="block h-full w-full">
                  <div className={`relative h-full w-full p-8 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-700 group-hover:border-white/20 group-hover:bg-neutral-900/50 flex flex-col justify-between`}>
                    
                    {/* Dynamic Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    {/* Icon & Category */}
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#FF3B00]/50 transition-all duration-500">
                        <SafeIcon 
                          icon={service.subServices?.[0]?.icon || "solar:widget-linear"} 
                          width={24} 
                          className="text-white group-hover:text-[#FF3B00] transition-colors" 
                        />
                      </div>
                      <h3 className={`font-bold text-white tracking-tight ${isLarge ? 'text-3xl' : 'text-xl'} mb-2`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description & Link (Only for large/wide cards or on hover) */}
                    <div className="relative z-10 space-y-6">
                      {isLarge && (
                        <p className="text-gray-400 font-light leading-relaxed line-clamp-4">
                          {service.subtext}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                          View Case Studies
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF3B00] transition-colors duration-500">
                          <SafeIcon icon="solar:arrow-right-up-linear" width={18} className="text-white group-hover:rotate-45 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle Numbering */}
                    <div className="absolute top-8 right-8 text-[4rem] font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                      0{index + 1}
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProcessWrapper = ({ data }) => {
  if (!data.process || data.process.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-[#050505] relative border-y border-white/5 overflow-hidden">
       {/* Ambient glow backdrop */}
       <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF3B00]/[0.01] rounded-full blur-3xl pointer-events-none" />

       <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeInUp className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
              How We Work
            </FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              OUR <span className="text-gray-600 font-outline">PROCESS.</span>
            </h2>
          </div>
          
          <div className="relative space-y-8 pl-4 md:pl-16">
            {/* Connecting Timeline Vertical Line */}
            <div className="absolute left-[36px] md:left-[68px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#FF3B00] via-orange-500/10 to-transparent pointer-events-none" />

            {data.process.map((step, index) => (
              <FadeInUp key={index} delay={index * 0.05} className="group relative flex gap-6 md:gap-10">
                
                {/* Timeline Number Node */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-sm md:text-xl font-mono text-[#FF3B00] font-bold shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:scale-110 group-hover:border-[#FF3B00] group-hover:shadow-[0_0_20px_rgba(255,59,0,0.2)] transition-all duration-500">
                  {index + 1}
                </div>

                {/* Content Block */}
                <div className="flex-grow p-6 md:p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-500">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-[#FF3B00] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </FadeInUp>
            ))}
          </div>
       </div>
    </section>
  );
};

const IndustriesWrapper = ({ data }) => {
  if (!data.industries || data.industries.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#030303] relative border-b border-white/5">
       <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="mb-16 text-center">
            <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              Who We Serve
            </FadeInUp>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              INDUSTRIES <span className="text-gray-600 font-outline">SERVED.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {data.industries.map((industry, index) => (
              <FadeInUp key={index} delay={index * 0.05}>
                <div className="px-6 py-3 rounded-full bg-neutral-900/40 border border-white/10 hover:border-[#FF3B00] text-gray-300 hover:text-white transition-all cursor-default">
                  {industry}
                </div>
              </FadeInUp>
            ))}
          </div>
       </div>
    </section>
  );
};

const DetailedArticleWrapper = ({ data }) => {
  if (!data.detailedArticle) return null;
  const { title, sections } = data.detailedArticle;

  return (
    <section className="py-28 px-6 bg-[#030303] relative border-y border-white/5 overflow-hidden">
      {/* Dynamic Background Grids & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#FF3B00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sidebar Navigation - Modern Sticky Anchor Nav */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28">
            <div className="p-8 rounded-3xl bg-zinc-950/80 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF3B00]/30 to-transparent" />
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B00] animate-pulse" />
                  Documentation
                </div>
                
                <h3 className="text-2xl font-black text-white tracking-tight uppercase leading-tight">
                  {title || "Overview Guide"}
                </h3>
                
                <div className="h-[1px] bg-white/5 w-full" />
                
                <nav className="space-y-1">
                  {sections.map((section, idx) => {
                    const slug = `article-sec-${idx}`;
                    return (
                      <a
                        key={idx}
                        href={`#${slug}`}
                        className="group/item flex items-center gap-3 py-2 px-3 rounded-xl text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-300 border-l-2 border-transparent hover:border-[#FF3B00]"
                      >
                        <span className="text-[10px] font-mono text-neutral-600 group-hover/item:text-[#FF3B00] transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="line-clamp-1">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Article Content - High-end Modern Typography Layout */}
          <div className="col-span-1 lg:col-span-8 space-y-16">
            {sections.map((section, idx) => {
              const slug = `article-sec-${idx}`;
              return (
                <div 
                  key={idx} 
                  id={slug} 
                  className="scroll-mt-28 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 hover:border-white/10 backdrop-blur-sm transition-all duration-500 relative group overflow-hidden"
                >
                  {/* Visual Glow on Hover */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF3B00]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#FF3B00] bg-[#FF3B00]/10 px-2.5 py-1 rounded-lg font-bold tracking-wider">
                        CHAPTER 0{idx + 1}
                      </span>
                      <div className="h-[1px] bg-white/5 flex-grow" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                      {section.title}
                    </h3>
                    
                    <div className="text-neutral-400 font-light leading-relaxed text-base md:text-lg space-y-5">
                      {Array.isArray(section.paragraphs) ? (
                        section.paragraphs.map((p, pi) => {
                          const isNumbered = /^\d+\.\s/.test(p);
                          const isBullet = /^-\s/.test(p);

                          if (isNumbered) {
                            const cleanText = p.replace(/^\d+\.\s/, "");
                            const titlePart = cleanText.split(":")[0];
                            const descPart = cleanText.split(":")[1];

                            return (
                              <div key={pi} className="flex gap-4 items-start bg-white/[0.02] border border-white/5 p-5 rounded-2xl">
                                <span className="w-8 h-8 rounded-full bg-[#FF3B00]/10 border border-[#FF3B00]/20 flex items-center justify-center text-xs font-mono text-[#FF3B00] font-bold shrink-0">
                                  {pi}
                                </span>
                                <div className="space-y-1">
                                  {descPart ? (
                                    <>
                                      <h4 className="text-white font-bold text-base tracking-tight">{titlePart}</h4>
                                      <p className="text-sm text-neutral-400 font-light leading-relaxed">{descPart.trim()}</p>
                                    </>
                                  ) : (
                                    <p className="text-sm md:text-base font-light leading-relaxed">{cleanText}</p>
                                  )}
                                </div>
                              </div>
                            );
                          }

                          if (isBullet) {
                            const cleanText = p.replace(/^-\s/, "");
                            const titlePart = cleanText.split(":")[0];
                            const descPart = cleanText.split(":")[1];

                            return (
                              <div key={pi} className="flex gap-4 items-start">
                                <span className="w-2 h-2 rounded-full bg-[#FF3B00] mt-2.5 shrink-0" />
                                <div className="space-y-1">
                                  {descPart ? (
                                    <>
                                      <span className="text-white font-bold tracking-tight">{titlePart}:</span>
                                      <span className="text-neutral-400 font-light pl-1">{descPart.trim()}</span>
                                    </>
                                  ) : (
                                    <span className="text-neutral-400 font-light">{cleanText}</span>
                                  )}
                                </div>
                              </div>
                            );
                          }

                          return <p key={pi} className="font-light leading-relaxed">{p}</p>;
                        })
                      ) : (
                        <p className="font-light leading-relaxed">{section.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

const SuitableForWrapper = ({ data }) => {
  if (!data.suitableFor || data.suitableFor.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <FadeInUp className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Target Audience
          </FadeInUp>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            WHO SHOULD CHOOSE <span className="text-gray-600 font-outline">THIS SERVICE?</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.suitableFor.map((item, index) => (
            <FadeInUp key={index} delay={index * 0.05} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B00]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />
              <div className="relative h-full p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                  <SafeIcon icon={item.icon} width={26} className="text-white group-hover:text-[#FF3B00] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed flex-grow">
                  {item.reason}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
