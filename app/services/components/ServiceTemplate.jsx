import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SafeIcon from "./client/SafeIcon";
import { Icon } from "@iconify/react";

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
import BentoWhyChoose from "../../Components/WhyChooseSection";

const ServiceTemplate = ({ data }) => {
  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
      <ScrollProgressBar />

      <HeroWrapper data={data} />
      
      <div className="relative">
        <ProblemWrapper data={data} />
        <BentoWhyChoose 
          title={data.whyChooseTitle} 
          subtitle={data.whyChooseSubtitle} 
          cards={data.whyChooseCards} 
        />
        <BenefitsWrapper data={data} />
        <SubServicesWrapper data={data} />
        <SuitableForWrapper data={data} />
        <IndustriesWrapper data={data} />
        <TechStackWrapper data={data} />
        <ProcessWrapper data={data} />
        <PricingWrapper data={data} />
        <TestimonialWrapper />
        <WorkSection />
        <DetailedArticleWrapper data={data} />
        <ServiceComparisonWrapper data={data} />
        <ServiceGlossaryWrapper data={data} />
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />

        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 5)", "--duration": "8s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 10)", "--duration": "12s", "--delay": "1.5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 16)", "--duration": "9s", "--delay": "3.5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 22)", "--duration": "14s", "--delay": "0.5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 28)", "--duration": "10s", "--delay": "2.5s" }} />
        
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
              href="/contact"
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
              <p className="text-xs font-mono uppercase tracking-widest text-[#FF3B00] font-bold">Primary Tech Stack</p>
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
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase">
                  Benefits
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
          <h2 className="text-3xl md:text-4xl font-black mb-24 tracking-tighter text-white uppercase">
            {data.techStackTitle || (
              <>
                OUR TECH <span className="text-gray-700">ARSENAL.</span>
              </>
            )}
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
              {data.subServicesTitle || "Features"}
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
              Development Process
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
  const getIndustryContent = (title) => {
    const name = title.toLowerCase();
    
    // Website Development
    if (name.includes("website") || name.includes("web design")) {
      return [
        {
          industry: "Coaching Institutes",
          title: "Website Design for Coaching Institutes",
          desc: "We build custom educational portals for coaching centers, institutes, and individual educators. Our coaching site development features integrated online registration platforms, course catalog filter systems, student ranker achievement walls, downloadable syllabi, and local search optimization templates. This establishes credibility, automates registration tasks, and maximizes local student admissions.",
          icon: "solar:backpack-bold-duotone"
        },
        {
          industry: "Hospitals",
          title: "Website Design for Hospitals",
          desc: "Healthcare website designs require clarity, responsiveness, and accessibility. We construct hospital and clinic web platforms featuring doctor database directory panels, department service descriptions, online appointment request configurations, patient guidance instructions, and local clinical search optimization to help local patients connect with medical specialists.",
          icon: "solar:health-bold-duotone"
        },
        {
          industry: "Real Estate",
          title: "Website Design for Real Estate",
          desc: "We engineer property catalog websites for real estate agencies and brokers. Features include advanced property search filters, interactive mapping systems, detailed neighborhood information, virtual 360-degree tour integration, high-resolution layout carousels, and high-intent contact forms to capture buyer inquiries.",
          icon: "solar:home-bold-duotone"
        },
        {
          industry: "Schools",
          title: "Website Design for Schools",
          desc: "Educational website portals for schools, colleges, and trusts. We deliver custom websites equipped with admission notice boards, academic calendars, downloadable registration forms, photo galleries, student achievement records, and dedicated parent-teacher contact coordinates.",
          icon: "solar:square-academic-cap-bold-duotone"
        },
        {
          industry: "Restaurants",
          title: "Website Design for Restaurants",
          desc: "Bespoke digital menus and booking configurations for restaurants, cafes, and hotels. We build restaurant websites that feature interactive food menus, reservation scheduling forms, customer reviews, operational hours, and map directions to increase dining covers.",
          icon: "solar:cup-hot-bold-duotone"
        },
        {
          industry: "Manufacturing Companies",
          title: "Website Design for Manufacturing Companies",
          desc: "Industrial B2B website development to showcase production capabilities. We build manufacturing sites that present product catalogs, technical ISO certifications, custom Request for Quote (RFQ) forms, company capability statements, and factory facility galleries.",
          icon: "solar:settings-bold-duotone"
        }
      ];
    }
    // Mobile App Development
    else if (name.includes("mobile") || name.includes("app")) {
      return [
        {
          industry: "Coaching Institutes",
          title: "Mobile App Development for Coaching Institutes",
          desc: "Custom coaching apps featuring secure student logins, live virtual classes, mock exam tests, push notifications, batch schedules, offline lecture access, and fee transaction gateways to digitize student management on mobile screens.",
          icon: "solar:backpack-bold-duotone"
        },
        {
          industry: "Hospitals",
          title: "Mobile App Development for Hospitals",
          desc: "Clinical mobile app designs enabling patients to book consultant appointments, attend remote video consultations, download laboratory check reports, receive prescription alarms, and chat with emergency staff.",
          icon: "solar:health-bold-duotone"
        },
        {
          industry: "Real Estate",
          title: "Mobile App Development for Real Estate",
          desc: "Real estate search apps with dynamic geolocation sorting, real-time agent-buyer messaging, saved search alarms, filter configurations, and interactive maps to connect home buyers with local brokers.",
          icon: "solar:home-bold-duotone"
        },
        {
          industry: "Schools",
          title: "Mobile App Development for Schools",
          desc: "Parent-teacher school apps showing student homework records, report cards, class notice boards, fee payment gateways, and school bus GPS coordinates for complete transparency.",
          icon: "solar:square-academic-cap-bold-duotone"
        },
        {
          industry: "Restaurants",
          title: "Mobile App Development for Restaurants",
          desc: "Food ordering apps with digital menu navigation, cart checkouts, secure online payment, live delivery tracking on maps, and customized customer discount systems.",
          icon: "solar:cup-hot-bold-duotone"
        },
        {
          industry: "Manufacturing Companies",
          title: "Mobile App Development for Manufacturing Companies",
          desc: "Operations mobile apps to monitor factory machine parameters, delivery logs, employee shifts, and inventory records for managers on the go.",
          icon: "solar:settings-bold-duotone"
        }
      ];
    }
    // Software Development
    else if (name.includes("software") || name.includes("erp") || name.includes("crm")) {
      return [
        {
          industry: "Coaching Institutes",
          title: "Software Development for Coaching Institutes",
          desc: "Coaching ERP systems handling student registration files, automated fee alert pipelines, batch management, mock test scores, and employee shift databases.",
          icon: "solar:backpack-bold-duotone"
        },
        {
          industry: "Hospitals",
          title: "Software Development for Hospitals",
          desc: "Hospital Management Software (HMS) coordinating OPD/IPD registers, patient electronic health files (EHR), inventory pharmacy supplies, and staff billing portals.",
          icon: "solar:health-bold-duotone"
        },
        {
          industry: "Real Estate",
          title: "Software Development for Real Estate",
          desc: "Real estate CRM systems managing broker commissions, property allocation parameters, customer progress history, and sales performance indicators.",
          icon: "solar:home-bold-duotone"
        },
        {
          industry: "Schools",
          title: "Software Development for Schools",
          desc: "School ERP platforms managing student records, library books tracking, employee payroll files, exam results, and administrative credentials.",
          icon: "solar:square-academic-cap-bold-duotone"
        },
        {
          industry: "Restaurants",
          title: "Software Development for Restaurants",
          desc: "Point of Sale (POS) billing software managing kitchen order tickets (KOT), recipe stock levels, GST-compliant transactions, and sales analytics.",
          icon: "solar:cup-hot-bold-duotone"
        },
        {
          industry: "Manufacturing Companies",
          title: "Software Development for Manufacturing Companies",
          desc: "Manufacturing ERP databases coordinating B2B supply chain assets, Bill of Materials (BOM), batch schedules, production pipelines, and vendor invoices.",
          icon: "solar:settings-bold-duotone"
        }
      ];
    }
    // Digital Marketing
    else if (name.includes("marketing") || name.includes("seo")) {
      return [
        {
          industry: "Coaching Institutes",
          title: "Digital Marketing for Coaching Institutes",
          desc: "Targeted digital marketing campaigns for coaching centers focusing on admission lead generation, local SEO ranking, and search engine ad optimization.",
          icon: "solar:backpack-bold-duotone"
        },
        {
          industry: "Hospitals",
          title: "Digital Marketing for Hospitals",
          desc: "Patient acquisition campaigns connecting local clinics with patients in need of specialized treatment, optimized maps configurations, and local search ads.",
          icon: "solar:health-bold-duotone"
        },
        {
          industry: "Real Estate",
          title: "Digital Marketing for Real Estate",
          desc: "Lead generation ad programs targeting property buyers, dynamic portal SEO, local map listings, and email nurturing workflows to close property sales.",
          icon: "solar:home-bold-duotone"
        },
        {
          industry: "Schools",
          title: "Digital Marketing for Schools",
          desc: "School admission marketing campaigns, branding advertisements on social channels, and local maps configuration to maximize registrations.",
          icon: "solar:square-academic-cap-bold-duotone"
        },
        {
          industry: "Restaurants",
          title: "Digital Marketing for Restaurants",
          desc: "Local Google Maps optimization, foodie branding campaigns, reservation conversion metrics, and local audience targeting to boost dine-in covers.",
          icon: "solar:cup-hot-bold-duotone"
        },
        {
          industry: "Manufacturing Companies",
          title: "Digital Marketing for Manufacturing Companies",
          desc: "B2B lead generation targeting purchase officers, manufacturing directory indexing, and LinkedIn marketing setups to capture corporate contracts.",
          icon: "solar:settings-bold-duotone"
        }
      ];
    }
    // Fallback/AI Automation
    else {
      return [
        {
          industry: "Coaching Institutes",
          title: "Automation Solutions for Coaching Institutes",
          desc: "Autonomous workflow pipelines syncing student registrations, automated Whatsapp alerts, CRM syncs, and teacher schedule notifications.",
          icon: "solar:backpack-bold-duotone"
        },
        {
          industry: "Hospitals",
          title: "Automation Solutions for Hospitals",
          desc: "AI-driven receptionists handling appointment inquiries, automated pharmacy inventory logs, and patient follow-up message pipelines.",
          icon: "solar:health-bold-duotone"
        },
        {
          industry: "Real Estate",
          title: "Automation Solutions for Real Estate",
          desc: "WhatsApp chatbots sorting listing query flows, scheduling property site visits, and assigning prospects to local agents.",
          icon: "solar:home-bold-duotone"
        },
        {
          industry: "Schools",
          title: "Automation Solutions for Schools",
          desc: "Automated parent inquiry workflows, digital fee receipt delivery, notice broadcast automations, and administrative tasks sync.",
          icon: "solar:square-academic-cap-bold-duotone"
        },
        {
          industry: "Restaurants",
          title: "Automation Solutions for Restaurants",
          desc: "Autonomous table booking confirmations, POS transaction logs, customer review requests, and inventory alert setups.",
          icon: "solar:cup-hot-bold-duotone"
        },
        {
          industry: "Manufacturing Companies",
          title: "Automation Solutions for Manufacturing Companies",
          desc: "Autonomous supply chain inventory alerts, automated purchase order generation, and machinery telemetry sync pipelines.",
          icon: "solar:settings-bold-duotone"
        }
      ];
    }
  };

  const industries = getIndustryContent(data.title);

  return (
    <section className="py-24 px-6 bg-[#030303] relative border-b border-white/5">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center max-w-3xl mx-auto space-y-4">
            <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              Who We Serve
            </FadeInUp>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              Industries <span className="text-orange-600">We Serve</span>
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded mx-auto" />
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed pt-2">
              We engineer specialized digital systems tailored to meet the strict technical demands of key commercial sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((item, index) => (
              <FadeInUp key={item.industry} delay={index * 0.05} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF3B00]/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl pointer-events-none" />
                <div className="relative h-full p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF3B00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#FF3B00]/40 transition-all duration-500 group-hover:scale-110">
                    <SafeIcon icon={item.icon} width={26} className="text-white group-hover:text-[#FF3B00] transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed flex-grow">
                    {item.desc}
                  </p>
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

                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                      {section.title}
                    </h2>
                    
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

const PricingWrapper = ({ data }) => {
  const getPricingPackages = (title) => {
    const name = title.toLowerCase();
    
    if (name.includes("website") || name.includes("web design")) {
      return [
        {
          name: "Startup Website",
          subtitle: "Best for local business presence",
          price: "₹25,000",
          period: "one-time cost",
          features: [
            "Responsive React/Next.js Layout",
            "5 Core Pages + Contact Form",
            "Standard Local SEO Setup",
            "Sub-1s Page Loading Speed",
            "1 Month Post-Launch Support"
          ],
          popular: false
        },
        {
          name: "Custom E-Commerce",
          subtitle: "Fully featured online storefront",
          price: "₹75,000+",
          period: "based on features",
          features: [
            "Bespoke Product Catalog & Checkout",
            "Razorpay / Stripe Payment Gate",
            "Admin Dashboard & Inventory Control",
            "Advanced SEO & Speed Optimized",
            "3 Months Support SLA"
          ],
          popular: true
        }
      ];
    } else if (name.includes("mobile") || name.includes("app")) {
      return [
        {
          name: "MVP Mobile App",
          subtitle: "Build to validate your app idea",
          price: "₹80,000",
          period: "one-time cost",
          features: [
            "Flutter or React Native UI",
            "Auth (Email/OTP) & User Profile",
            "Clean Firebase/Node API Backend",
            "App Store & Google Play Setup",
            "30 Days Launch Warranty"
          ],
          popular: false
        },
        {
          name: "Custom Enterprise App",
          subtitle: "Heavy database custom mobile app",
          price: "₹1,80,000+",
          period: "based on specs",
          features: [
            "Bespoke Design System Integration",
            "Role-Based Admin Dashboards",
            "Real-Time Notifications & Chats",
            "AWS VPS Backend Configuration",
            "6 Months Maintenance Contract"
          ],
          popular: true
        }
      ];
    } else if (name.includes("software") || name.includes("erp") || name.includes("crm")) {
      return [
        {
          name: "SaaS Starter",
          subtitle: "Bespoke web application build",
          price: "₹1,20,000",
          period: "one-time cost",
          features: [
            "Next.js Dashboard UI Portal",
            "Database Integration (Postgre/Mongo)",
            "Auth and User Roles Controls",
            "Standard Payment Webhook/Stripe",
            "3 Months System SLA"
          ],
          popular: false
        },
        {
          name: "Custom Enterprise Suite",
          subtitle: "Full CRM / ERP workflow software",
          price: "₹2,50,000+",
          period: "custom scope",
          features: [
            "Bespoke Cloud Pipeline Structure",
            "Multi-Tenant Database Scaling",
            "Autonomous Automation (n8n APIs)",
            "Dedicated Staging Environments",
            "12 Months Maintenance SLA"
          ],
          popular: true
        }
      ];
    } else if (name.includes("marketing") || name.includes("seo")) {
      return [
        {
          name: "Local Growth Plan",
          subtitle: "Boost local search views & maps",
          price: "₹15,000",
          period: "per month",
          features: [
            "Google Maps Ranking Optimization",
            "Keyword Auditing & Metadata Setup",
            "10 High-Authority Local Citations",
            "On-Page SEO Technical Fixes",
            "Monthly Search Traffic Reports"
          ],
          popular: false
        },
        {
          name: "National Scale Plan",
          subtitle: "Rank for competitive terms across India",
          price: "₹35,000+",
          period: "per month",
          features: [
            "Competitive National Keyword Analysis",
            "Bespoke SEO Link-Building Campaigns",
            "Content Optimization Copywriting",
            "Technical Schema Audit Fixes",
            "Bi-Weekly Performance Calls"
          ],
          popular: true
        }
      ];
    } else {
      return [
        {
          name: "Discovery & Blueprint",
          subtitle: "Design and strategy analysis",
          price: "₹35,000",
          period: "one-time cost",
          features: [
            "Technical Requirement Specs",
            "UI/UX Layout Sketches",
            "Technology Stack Evaluation",
            "Timeline & Cost Estimates",
            "Architecture Schematic Draft"
          ],
          popular: false
        },
        {
          name: "Custom Integration Build",
          subtitle: "Bespoke full-scale development",
          price: "₹95,000+",
          period: "based on scope",
          features: [
            "Next.js/React Frontend Layout",
            "REST/GraphQL API Endpoints",
            "Autonomous Workflows (n8n/GPT)",
            "Cloud Deployment (AWS/Vercel)",
            "3 Months Launch Warranty"
          ],
          popular: true
        }
      ];
    }
  };

  const packages = data.pricing || getPricingPackages(data.title);

  return (
    <section className="py-24 px-6 bg-[#050505] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="mb-16">
          <FadeInUp className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Simple & Transparent
          </FadeInUp>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            Pricing
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {packages.map((pkg) => (
            <div 
              key={pkg.name}
              className={`p-8 rounded-[2.5rem] bg-zinc-950/80 border backdrop-blur-xl relative overflow-hidden group hover:border-[#FF3B00]/40 transition-all duration-500 ${
                pkg.popular 
                  ? "border-[#FF3B00]/20 shadow-[0_0_50px_rgba(255,59,0,0.1)]" 
                  : "border-white/5 hover:border-[#FF3B00]/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FF3B00] text-black text-[9px] font-black uppercase tracking-widest rounded-bl-2xl">
                  POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
              <p className="text-xs text-[#FF3B00] font-mono uppercase tracking-wider mb-6">{pkg.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
                <span className="text-xs text-neutral-500 font-mono">{pkg.period}</span>
              </div>
              <ul className="space-y-3 text-sm text-neutral-400 font-light mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span className="text-[#FF3B00]">✓</span> {feat}
                  </li>
                ))}
              </ul>
              <Link 
                href="/contact" 
                className={`block text-center w-full py-4 rounded-2xl font-bold uppercase tracking-wider text-xs transition-all duration-300 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20"
                    : "bg-white/5 border border-white/10 hover:border-[#FF3B00] hover:bg-orange-500/5 text-white"
                }`}
              >
                {pkg.popular ? "Request Quote" : "Get Started"}
              </Link>
            </div>
          ))}
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

export const ServiceComparisonWrapper = ({ data }) => {
  const getPageKey = (data) => {
    if (!data || !data.title) return "website";
    const titleLower = data.title.toLowerCase();
    if (titleLower.includes("marketing") || titleLower.includes("seo") || titleLower.includes("digital")) return "marketing";
    if (titleLower.includes("chatbot") || titleLower.includes("bot") || titleLower.includes("chat")) return "chatbot";
    if (titleLower.includes("health")) return "healthcare";
    if (titleLower.includes("educat") || titleLower.includes("school") || titleLower.includes("college")) return "education";
    if (titleLower.includes("real estate") || titleLower.includes("property")) return "realestate";
    if (titleLower.includes("next.js") || titleLower.includes("nextjs")) return "nextjs";
    if (titleLower.includes("react")) return "react";
    if (titleLower.includes("laravel")) return "laravel";
    if (titleLower.includes("app") || titleLower.includes("mobile")) return "mobile";
    if (titleLower.includes("ai") || titleLower.includes("automation")) return "ai";
    if (titleLower.includes("software")) return "software";
    return "website";
  };

  const comparisonData = {
    "marketing": [
      { feature: "Lead Generation", custom: "Organic SEO mapping, high-intent user conversion funnels", standard: "Spam click buy templates, high paid-ad budget drain" },
      { feature: "Analytics Tracking", custom: "Centralized pixel event logs, custom ROI dashboards", standard: "Bloated tags slowing site speed, inaccurate bounce reporting" },
      { feature: "Long-term ROI", custom: "Compounding organic traffic rankings that persist over time", standard: "Traffic drops to absolute zero the minute ad budget stops" }
    ],
    "chatbot": [
      { feature: "Intent Handling", custom: "Advanced RAG LLM prompts understanding natural language context", standard: "Rigid button-trees that freeze if customer types manually" },
      { feature: "System Sync", custom: "Direct REST API database queries (track orders, book dates)", standard: "Basic email contact triggers that require manual support" },
      { feature: "Session Memory", custom: "Context window variables remembering past visitor preferences", standard: "Fresh reset on every single request query sent" }
    ],
    "website": [
      { feature: "Tech Stack", custom: "Next.js, React, Tailwind CSS, Vercel/AWS", standard: "Generic PHP, heavy WordPress, cheap hosting templates" },
      { feature: "Performance", custom: "Under 1s load time, 95+ Core Web Vitals score", standard: "3s+ load time, bloated plugins, poor speed optimization" },
      { feature: "SEO & Rankings", custom: "Dynamic schemas, structured AEO glossary, metadata", standard: "Basic meta tags, no semantic structure, poor indexing" },
      { feature: "Ownership", custom: "100% source code ownership, zero monthly fees", standard: "Locked theme, platform dependencies, vendor fees" }
    ],
    "mobile": [
      { feature: "Performance", custom: "Native UI rendering (Flutter/React Native), 60FPS smoothness", standard: "WebView wrappers, slow loading web frames" },
      { feature: "Offline Support", custom: "Local database caching, offline operation sync", standard: "Requires active internet for all basic screens" },
      { feature: "UX/UI Design", custom: "Custom micro-animations, tailored platform flows", standard: "Outdated material design templates" },
      { feature: "Security", custom: "Biometric auth, secure keychain storage, AES-256", standard: "Basic plaintext data, vulnerable endpoints" }
    ],
    "software": [
      { feature: "Alignment", custom: "Built exactly around your custom business workflows", standard: "Forces business to adjust to rigid pre-built software" },
      { feature: "License Fees", custom: "One-time flat-rate cost, unlimited users", standard: "Per-user monthly subscription fees" },
      { feature: "Integrations", custom: "Direct custom API mapping to all internal databases", standard: "Closed ecosystem, locked database endpoints" },
      { feature: "Support", custom: "Direct technical support, SLAs, source code custody", standard: "Standard community forums, delayed ticket support" }
    ],
    "ai": [
      { feature: "Integrations", custom: "Multi-platform mapping (n8n, custom Node.js, REST APIs)", standard: "Basic triggers (Zapier limits, rigid templates)" },
      { feature: "Operational Hours", custom: "24/7 autonomous cron loops, self-healing pipelines", standard: "Requires manual trigger monitoring" },
      { feature: "Security", custom: "Private host keys, encryption protocols, locked keys", standard: "Shared cloud credentials, security risks" },
      { feature: "AI Model Support", custom: "Multi-modal model mapping (GPT-4o, Claude 3.5, local LLMs)", standard: "Single API endpoint dependencies" }
    ],
    "healthcare": [
      { feature: "Patient Data Safety", custom: "AES-256 local database encryption, HIPAA-compliant flows", standard: "Plaintext database logs on generic shared hosts" },
      { feature: "Telehealth Streaming", custom: "WebRTC peer-to-peer real-time video connections", standard: "Laggy iframe plugins or third-party redirects" },
      { feature: "Appointment Booking", custom: "Instant slot allocation with automated WhatsApp reminders", standard: "Manual email checks, high appointment no-shows" }
    ],
    "education": [
      { feature: "Admissions Handling", custom: "Scale-tested intake architecture, zero-delay load balancing", standard: "Server timeouts and crashes during high-traffic weeks" },
      { feature: "LMS Functionality", custom: "Custom dashboard widgets, offline assignment trackers", standard: "Heavy PDF downloads, confusing navigation templates" },
      { feature: "Exam Integrity", custom: "Window blur detection, session recovery database states", standard: "No log files saved if student loses internet" }
    ],
    "realestate": [
      { feature: "Property Search", custom: "ElasticSearch location indexing with filter presets", standard: "Slow database scans, page reloads for simple sorting" },
      { feature: "Broker Alerts", custom: "Immediate WhatsApp lead sync to on-duty agents", standard: "Daily email digest, leads cold after 24 hours" },
      { feature: "Interactive Tours", custom: "Speed-optimized next/image rendering, light media loads", standard: "Bloated raw files causing long startup page load lag" }
    ],
    "nextjs": [
      { feature: "Speed & Scale", custom: "Static Site Generation (SSG), ISR dynamic edge caching", standard: "Client-side JS bundle parsing, slow device rendering" },
      { feature: "Hydration", custom: "Optimized script imports, lazy-loading component folds", standard: "Heavy monolithic script blocks parsed on first paint" },
      { feature: "SEO Indexability", custom: "Pre-rendered semantic HTML matching modern web crawlers", standard: "Indexers waiting on client-side API callback states" }
    ],
    "react": [
      { feature: "User Interaction", custom: "Sub-millisecond dynamic DOM updates via custom Hooks", standard: "Monolithic browser re-renders creating UI stutter" },
      { feature: "Component Reuse", custom: "Atomic component files sharing centralized state parameters", standard: "Duplicate HTML structures in legacy scripts" }
    ],
    "laravel": [
      { feature: "Database Shield", custom: "Eloquent ORM database query shields, CSRF protection", standard: "Manual SQL strings vulnerable to script injections" },
      { feature: "Job Processing", custom: "Redis queues handling heavy integrations in background", standard: "HTTP timeout crashes during concurrent data syncs" }
    ]
  };

  const headingData = {
    "marketing": {
      title: "Custom SEO Strategy",
      vs: "Generic Ad Campaigns",
      label: "Organic Growth vs. Paid Spending",
      customCol: "Webflora SEO Strategy",
      standardCol: "Traditional PPC/Ads"
    },
    "chatbot": {
      title: "Cognitive AI Assistant",
      vs: "Basic Button Autoresponders",
      label: "Autonomous Agents vs. Static Logic",
      customCol: "Webflora AI Agent",
      standardCol: "Basic Scripted Bots"
    },
    "healthcare": {
      title: "Compliant Patient Portals",
      vs: "Generic Admin Templates",
      label: "Secure Telehealth vs. Basic Forms",
      customCol: "Webflora Clinic Portal",
      standardCol: "Standard Forms"
    },
    "education": {
      title: "Scale-Tested Student LMS",
      vs: "Confusing PDF Templates",
      label: "Integrated Portals vs. Monolithic Scripts",
      customCol: "Webflora LMS Platform",
      standardCol: "Generic Templates"
    },
    "realestate": {
      title: "Elastic Listing Portals",
      vs: "Slow Broker Catalogs",
      label: "Instant Sync vs. Delayed Updates",
      customCol: "Webflora Listing Engine",
      standardCol: "Basic Database Templates"
    },
    "nextjs": {
      title: "Next.js Static Generation",
      vs: "Heavy CSR Frameworks",
      label: "SSR Edge Scale vs. Bloated Bundles",
      customCol: "Next.js Build",
      standardCol: "Traditional SPA/CSR"
    },
    "react": {
      title: "React Component Hook",
      vs: "Raw Monolithic Markup",
      label: "Virtual DOM vs. Monolithic Renders",
      customCol: "React Hook UI",
      standardCol: "Legacy HTML/JS"
    },
    "laravel": {
      title: "Laravel PHP Framework",
      vs: "Raw PHP / Basic CGI",
      label: "Eloquent Security vs. Vulnerable Scripts",
      customCol: "Laravel MVC Engine",
      standardCol: "Raw Script Codes"
    },
    "website": {
      title: "Custom Next.js Web",
      vs: "Generic WordPress Theme",
      label: "Tailored Speed vs. Bloated Code",
      customCol: "Webflora Custom Web",
      standardCol: "Bloated Templates"
    },
    "mobile": {
      title: "Native Mobile App",
      vs: "WebView App Wrappers",
      label: "Optimized Core Performance vs. Fused Frames",
      customCol: "Webflora Native App",
      standardCol: "WebView Wrappers"
    },
    "software": {
      title: "Custom Cloud Software",
      vs: "Generic Multi-Tenant SaaS",
      label: "Tailored Workflows vs. Rigid Subscriptions",
      customCol: "Webflora Custom Build",
      standardCol: "Standard SaaS Tools"
    },
    "ai": {
      title: "AI Pipeline Automation",
      vs: "Manual Integration Workflows",
      label: "Self-Healing AI vs. Human Overhead",
      customCol: "Webflora AI Pipeline",
      standardCol: "Manual Tasks"
    }
  };

  const pageKey = getPageKey(data);
  const rows = comparisonData[pageKey] || comparisonData["website"];
  const headers = headingData[pageKey] || headingData["website"];

  return (
    <section className="py-24 px-6 bg-[#030303] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            ⚔️ Architecture Battle
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            {headers.title} <span className="text-gray-600 font-outline">vs. {headers.vs}</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light">
            {headers.label}
          </p>
        </div>

        <div className="w-full bg-neutral-950/80 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 md:p-0">
          {/* Mobile Stacked View */}
          <div className="block md:hidden space-y-6 divide-y divide-white/5">
            {rows.map((row, i) => (
              <div key={i} className={`pt-6 ${i === 0 ? 'pt-0' : ''} space-y-3`}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-300 font-mono">{row.feature}</h3>
                <div className="p-4 rounded-xl bg-[#ff3b00]/5 border border-[#ff3b00]/20">
                  <span className="text-[10px] font-bold text-[#ff3b00] uppercase tracking-widest block mb-1">★ {headers.customCol}</span>
                  <p className="text-xs sm:text-sm text-white font-medium flex items-start gap-2">
                    <Icon icon="solar:check-circle-bold" className="text-emerald-400 text-base shrink-0 mt-0.5" />
                    {row.custom}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest block mb-1">{headers.standardCol}</span>
                  <p className="text-xs text-neutral-400">
                    {row.standard}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-400 border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-bold font-mono">
                  <th className="p-5 bg-white/[0.02] text-neutral-300 font-bold text-xs uppercase tracking-widest w-1/4">Feature</th>
                  <th className="p-5 bg-[#ff3b00]/10 border-x border-[#ff3b00]/20 text-white font-black text-xs uppercase tracking-widest text-center w-2/5">
                    {headers.customCol}
                  </th>
                  <th className="p-5 bg-white/[0.01] text-neutral-500 font-bold text-xs uppercase tracking-widest text-center w-1/3">{headers.standardCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors duration-200">
                    <td className="p-5 font-semibold text-white font-mono text-xs uppercase tracking-wider">{row.feature}</td>
                    <td className="p-5 border-x border-[#ff3b00]/10 bg-[#ff3b00]/[0.02] text-white font-medium text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                        <Icon icon="solar:check-circle-bold" /> {row.custom}
                      </span>
                    </td>
                    <td className="p-5 text-neutral-500 text-center text-xs">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceGlossaryWrapper = ({ data }) => {
  const getPageKey = (data) => {
    if (!data || !data.title) return "website";
    const titleLower = data.title.toLowerCase();
    if (titleLower.includes("marketing") || titleLower.includes("seo") || titleLower.includes("digital")) return "marketing";
    if (titleLower.includes("chatbot") || titleLower.includes("bot") || titleLower.includes("chat")) return "chatbot";
    if (titleLower.includes("health")) return "healthcare";
    if (titleLower.includes("educat") || titleLower.includes("school") || titleLower.includes("college")) return "education";
    if (titleLower.includes("real estate") || titleLower.includes("property")) return "realestate";
    if (titleLower.includes("next.js") || titleLower.includes("nextjs")) return "nextjs";
    if (titleLower.includes("react")) return "react";
    if (titleLower.includes("laravel")) return "laravel";
    if (titleLower.includes("app") || titleLower.includes("mobile")) return "mobile";
    if (titleLower.includes("ai") || titleLower.includes("automation")) return "ai";
    if (titleLower.includes("software")) return "software";
    return "website";
  };

  const glossaryData = {
    "marketing": [
      { term: "Organic SEO", def: "Attracting customer clicks via high Google rankings without paying per visitor.", icon: "solar:map-arrow-square-bold-duotone" },
      { term: "Conversion Attribution", def: "Analytical maps showing exactly which click triggered a sales booking transaction.", icon: "solar:database-bold-duotone" },
      { term: "Keyword Funnel", def: "Grouping search phrases by buyer intent to target high-value commercial customers.", icon: "solar:filter-bold-duotone" }
    ],
    "chatbot": [
      { term: "RAG Prompting", def: "Feeding clean local database info to LLMs so they reply with accurate business details.", icon: "solar:chat-round-bold-duotone" },
      { term: "Cognitive Agent", def: "An automated helper script empowered to log items directly into CRM software tables.", icon: "solar:cpu-bolt-bold-duotone" },
      { term: "Context Memory", def: "Storing active chat variables so the bot remembers the user's name and queries.", icon: "solar:database-bold-duotone" }
    ],
    "website": [
      { term: "Headless Architecture", def: "Decoupling the frontend user interface from the backend database for unmatched speed, scalability, and security.", icon: "solar:code-square-bold-duotone" },
      { term: "Core Web Vitals", def: "A set of specific Google metrics used to measure user experience, including loading performance, interactivity, and visual stability.", icon: "solar:database-bold-duotone" },
      { term: "Static Site Generation (SSG)", def: "Pre-rendering frontend pages into HTML files at build time to deliver instant loading speeds and serverless scale.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "mobile": [
      { term: "Cross-Platform Framework", def: "Single codebase framework (e.g. Flutter/React Native) compiled directly to native ARM code on both iOS and Android.", icon: "solar:code-square-bold-duotone" },
      { term: "API Integration", def: "Connecting the mobile application frontend to databases and secure third-party billing gates via secure REST/GraphQL endpoints.", icon: "solar:database-bold-duotone" },
      { term: "State Management", def: "Managing active app data states (user sessions, carts, filters) locally for instant, glitch-free screen renders.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "software": [
      { term: "Custom Software", def: "Applications engineered specifically to match your exact business guidelines, operating processes, and rules.", icon: "solar:code-square-bold-duotone" },
      { term: "ERP/CRM Systems", def: "Intelligent software modules used to manage inventory, tracking, finance, customer leads, and internal team logs.", icon: "solar:database-bold-duotone" },
      { term: "Legacy Migration", def: "Transitioning outdated, insecure databases or old desktop programs into secure, modern cloud-native systems.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "ai": [
      { term: "Workflow Pipeline", def: "Autonomous data sequences that trigger based on events (e.g. a new form submit) to update all systems instantly.", icon: "solar:code-square-bold-duotone" },
      { term: "LLM Orchestration", def: "Connecting advanced AI intelligence layers (GPT-4o, Claude) to verify emails, draft custom quotes, or answer customer leads.", icon: "solar:database-bold-duotone" },
      { term: "Self-Healing Workflows", def: "Logical exception-handling loops that retry database connections or swap APIs automatically if a service is down.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "healthcare": [
      { term: "Telehealth Interface", def: "Encrypted audio-visual protocols enabling doctors and patients to consult safely inside browser frames.", icon: "solar:video-library-bold-duotone" },
      { term: "HIPAA-Compliance", def: "Technical safeguards (logs, encryption) to protect patient records against unauthorized database access.", icon: "solar:shield-keyhole-bold-duotone" },
      { term: "Lab Report Bot", def: "Secure API scripts that read doctor approval flags and push PDF results directly to patient contacts.", icon: "solar:chat-round-bold-duotone" }
    ],
    "education": [
      { term: "Learning Management (LMS)", def: "Unified student portal panels mapping lesson videos, progress marks, and exam tasks dynamically.", icon: "solar:bookmark-bold-duotone" },
      { term: "Load-Balanced Intake", def: "Multi-cluster hosting setup preventing portal crashes during first-day class registration rushes.", icon: "solar:server-bold-duotone" },
      { term: " Proctor Shield", def: "Client-side listener hooks logging focus shifts or page exits to maintain high quiz integrity standards.", icon: "solar:eye-bold-duotone" }
    ],
    "realestate": [
      { term: "Elastic property search", def: "Database query indexes returning available listings instantly based on custom location parameters.", icon: "solar:map-arrow-square-bold-duotone" },
      { term: "Instant Sync CRM", def: "Automatic broker alerts pushing full client requirements to staff phones the second a lead is captured.", icon: "solar:phone-calling-bold-duotone" },
      { term: "Asset optimization", def: "Next-gen image formatting compiling home tour graphics to under 100KB for sub-second page paints.", icon: "solar:gallery-bold-duotone" }
    ],
    "nextjs": [
      { term: "Static Generation (SSG)", def: "Pre-rendering frontend pages into HTML files at build time to deliver instant loading speeds.", icon: "solar:code-square-bold-duotone" },
      { term: "Static Regeneration (ISR)", def: "Updating page assets in the background without requiring a complete Next.js project build run.", icon: "solar:database-bold-duotone" }
    ],
    "react": [
      { term: "Virtual DOM", def: "Dynamic interface representation enabling the browser to apply paint updates in sub-milliseconds.", icon: "solar:cpu-bolt-bold-duotone" }
    ],
    "laravel": [
      { term: "Eloquent ORM", def: "Clean active record syntax to query databases securely without raw SQL scripts.", icon: "solar:shield-keyhole-bold-duotone" }
    ]
  };

  const pageKey = getPageKey(data);
  const terms = glossaryData[pageKey] || glossaryData["website"];

  return (
    <section className="py-24 px-6 bg-black relative border-b border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            📚 Terminology Glossary
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            {data.title} <span className="text-gray-600 font-outline">Glossary</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light">
            Understand key industry terms that drive premium digital systems and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {terms.map((item, idx) => (
            <div key={idx} className="p-6 rounded-[2rem] border border-white/5 bg-zinc-950/40 hover:border-[#ff3b00]/30 hover:bg-[#ff3b00]/5 transition-all duration-500 flex flex-col justify-start relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                <Icon icon={item.icon} className="text-xl" />
              </div>
              <h3 className="text-white font-bold text-lg tracking-tight mb-2">{item.term}</h3>
              <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
