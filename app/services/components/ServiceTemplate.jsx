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
import { servicesData } from "../data";

const ServiceTemplate = ({ data }) => {
  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
      <ScrollProgressBar />

      <HeroWrapper data={data} />
      
      <div className="relative">
        <ProblemWrapper data={data} />
        <SubServicesWrapper data={data} />
        <BenefitsWrapper data={data} />
        <TechStackWrapper data={data} />
        <TestimonialWrapper />
        <FaqSection faqs={data.faqs} title={data.title} />
        <OtherServicesWrapper currentService={data.title} />
        <ContactSection />
      </div>

      {/* Footer CTA */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-[#050505]">
        <GlowBlob color="#FF3B00" size="400px" top="0" left="30%" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <FadeInUp className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
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
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20 pb-32 px-6 overflow-hidden">
      <Starfield />
      <GlowBlob color="#FF3B00" size="500px" top="-10%" left="-10%" />
      <GlowBlob color="#3B82F6" size="500px" bottom="-10%" right="-10%" delay={2} />
      
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <FadeInUp className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3B00]"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">{data.heroBadge}</span>
        </FadeInUp>
        
        <RevealText 
          text={data.headline} 
          className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight mb-12"
        />
        
        <FadeInUp delay={0.4} className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
          {data.subtext}
        </FadeInUp>
        
        <FadeInUp delay={0.6} className="flex flex-wrap justify-center gap-6">
          <HoverScale className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-wider overflow-hidden">
             <Link href="/contact" className="relative z-10">Get Started</Link>
          </HoverScale>
          <a href="#impact" className="px-10 py-5 border border-white/20 rounded-full font-black uppercase tracking-wider hover:bg-white/5 hover:border-white transition-all">
            See Our Impact
          </a>
        </FadeInUp>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
        <SafeIcon icon="solar:mouse-scroll-linear" width={24} />
      </div>
    </section>
  );
};

const ProblemWrapper = ({ data }) => {
  return (
    <section className="py-40 px-6 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeInUp className="text-[#FF3B00] font-bold tracking-widest uppercase text-sm block mb-6">
              The Challenge
            </FadeInUp>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-tight">
              {data.problemTitle}
            </h2>
            <div className="space-y-4">
              {data.problems.map((p, i) => (
                <FadeInUp key={i} delay={i * 0.05} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/20 transition-all">
                  <SafeIcon icon="solar:close-circle-bold" className="text-red-500 shrink-0" width={20} />
                  <span className="text-lg text-gray-300 font-medium">{p}</span>
                </FadeInUp>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[2.5rem] opacity-5 blur-3xl group-hover:opacity-10 transition-opacity" />
            <div className="relative p-10 md:p-16 rounded-[2rem] bg-neutral-900/50 border border-white/5 backdrop-blur-3xl overflow-hidden">
               <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <SafeIcon icon="solar:check-circle-bold" className="text-green-500" width={20} />
                  </div>
                  Our Precise Solutions
               </h3>
               <div className="space-y-6">
                  {data.solutions.map((s, i) => (
                    <FadeInUp key={i} delay={i * 0.05} className="flex gap-4">
                      <span className="text-gray-600 font-mono text-sm mt-1">0{i+1}</span>
                      <div className="w-full">
                        <h4 className="text-lg font-bold text-white mb-1">{s}</h4>
                        <div className="h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-700 delay-300" />
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
    <section id="impact" className="py-40 px-6 bg-black relative overflow-hidden">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
             <div className="max-w-2xl">
               <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
                 Unmatched Value
               </FadeInUp>
               <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
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
    <section className="py-40 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <FadeInUp className="text-4xl md:text-7xl font-black mb-24 tracking-tighter">
          OUR TECH <span className="text-gray-700">ARSENAL.</span>
        </FadeInUp>
        
        <TechStackGrid techStack={data.techStack} />
      </div>
    </section>
  );
};

const SubServicesWrapper = ({ data }) => {
  if (!data.subServices || data.subServices.length === 0) return null;

  return (
    <section className="py-32 px-6 bg-[#030303] relative border-y border-white/5">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              Comprehensive Solutions
            </FadeInUp>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              OUR <span className="text-gray-600 font-outline">EXPERTISE.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subServices.map((service, index) => (
              <FadeInUp key={index} delay={index * 0.05} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative h-full p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3B00]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,59,0,0.0)] group-hover:shadow-[0_0_30px_rgba(255,59,0,0.3)] transition-all duration-500 group-hover:scale-110">
                    <SafeIcon icon={service.icon} width={28} className="text-white group-hover:text-[#FF3B00] transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF3B00] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed flex-grow">{service.desc}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors cursor-pointer w-fit">
                    <span className="uppercase tracking-wider">Learn More</span>
                    <SafeIcon icon="solar:arrow-right-line-duotone" width={16} className="group-hover:translate-x-1 transition-transform" />
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
    <section className="py-40 px-6 bg-[#030303] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <GlowBlob color="#FF3B00" size="600px" bottom="-20%" left="-10%" opacity={0.05} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-24">
          <FadeInUp className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 text-[#FF3B00] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-[#FF3B00] animate-ping" />
            Discover More
          </FadeInUp>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
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

export default ServiceTemplate;
