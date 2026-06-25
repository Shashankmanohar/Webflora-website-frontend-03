import React from "react";
import Link from "next/link";
import Starfield from "../../services/components/client/Starfield";
import GlowBlob from "../../services/components/client/GlowBlob";
import { ScrollProgressBar, FadeInUp, HoverScale } from "../../services/components/client/MotionWrappers";
import FaqSection from "../../services/components/FaqSection";
import { BenefitsGrid, TechStackGrid } from "../../services/components/client/InteractiveGrids";
import TestimonialWrapper from "../../services/components/client/TestimonialWrapper";
import ContactSection from "../../Components/ContactSection";
import SEOContentBlock from "../../Components/SEOContentBlock";
import SafeIcon from "../../services/components/client/SafeIcon";
import { industriesData } from "../data";

const IndustryTemplate = ({ data }) => {
  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden">
      <ScrollProgressBar />

      <HeroWrapper data={data} />
      
      <div className="relative">
        <ProblemWrapper data={data} />
        <SubServicesWrapper data={data} />
        <ProcessWrapper data={data} />
        <BenefitsWrapper data={data} />
        <TechStackWrapper data={data} />
        <TestimonialWrapper />
        <FaqSection faqs={data.faqs} title={`${data.title} Industry`} />
        <OtherIndustriesWrapper currentIndustry={data.title} />
        
        {/* GEO Content Section for Local SEO */}
        {(data.geoTitle || data.geoContent) && (
          <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <FadeInUp>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none">
                  {data.geoTitle}
                </h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light font-sans">
                  {data.geoContent}
                </p>
              </FadeInUp>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />
          </section>
        )}

        <div className="content-auto relative z-10">
          <SEOContentBlock 
            title={`${data.title} Digital Transformation Company`}
            paragraphs={[
              <React.Fragment key="p1">At <strong className="text-white font-medium">Webflora Technologies</strong>, we specialize in high-end solutions for the <strong className="text-gray-300">{data.title.toLowerCase()}</strong> sector. {data.subtext}</React.Fragment>,
              <React.Fragment key="p2">Our team engineers custom systems designed for performance, automation, and long-term business growth. By leveraging enterprise-grade technologies, we ensure your digital infrastructure meets modern demands.</React.Fragment>
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
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B00] to-orange-500">DIGITIZE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Accelerate your growth and outpace your competitors. Let's build the future of your {data.title} platforms today.
            </p>
            <div className="flex justify-center">
              <HoverScale className="inline-flex items-center gap-4 px-12 py-6 bg-[#FF3B00] rounded-full font-black text-xl hover:shadow-[0_0_60px_rgba(255,59,0,0.5)] transition-shadow">
                <Link href="/contact" className="flex items-center gap-4">
                  TALK TO OUR EXPERTS
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
    <section className="relative min-h-[calc(100vh-80px)] lg:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303] pt-32 pb-24 px-4 sm:px-6">
      <style>{`
        @keyframes blob {
          0%   { transform: translate(0px, 0px) scale(1); }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .hero-blob-1 { animation: blob 10s ease-in-out infinite; will-change: transform; }
        .hero-blob-2 { animation: blob 10s ease-in-out 2s infinite; will-change: transform; }
        .hero-blob-3 { animation: blob 10s ease-in-out 4s infinite; will-change: transform; }
      `}</style>
      
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }} aria-hidden="true">
        <Starfield />
        <div className="hero-blob-1" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, background: "rgba(255,60,0,0.20)", filter: "blur(120px)", borderRadius: "50%", mixBlendMode: "screen" }} />
        <div className="hero-blob-2" style={{ position: "absolute", top: "25%", left: "25%", width: 400, height: 400, background: "rgba(59,130,246,0.10)", filter: "blur(100px)", borderRadius: "50%", mixBlendMode: "screen" }} />
        <div className="hero-blob-3" style={{ position: "absolute", bottom: "25%", right: "25%", width: 500, height: 500, background: "rgba(168,85,247,0.10)", filter: "blur(100px)", borderRadius: "50%", mixBlendMode: "screen" }} />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />
        
        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 4)", "--duration": "9s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 12)", "--duration": "11s", "--delay": "2s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 20)", "--duration": "13s", "--delay": "4s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 28)", "--duration": "10s", "--delay": "1s" }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto">
        <FadeInUp delay={0.1} className="inline-flex items-center gap-2 px-3 py-1 mb-10 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-sm">
          <span className="flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full bg-white/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/60"></span>
          </span>
          <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 uppercase">
            {data.heroBadge || "Enterprise Industrial Digitization"}
          </span>
        </FadeInUp>

        <FadeInUp delay={0.2} className="mb-8">
          <h1 className="font-sans font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] text-white">
            {data.headline}
          </h1>
        </FadeInUp>
        
        <FadeInUp delay={0.2} className="text-gray-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          {data.subtext}
        </FadeInUp>
        
        <FadeInUp delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black rounded-full font-semibold text-sm tracking-wide hover:bg-gray-200 transition-colors w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Start Your Journey
            <SafeIcon icon="solar:arrow-right-up-linear" className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="#impact"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-white/20 text-white rounded-full font-medium text-sm tracking-wide transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            See Our Impact
          </a>
        </FadeInUp>

        <FadeInUp delay={0.5} className="mt-20 max-w-3xl mx-auto border-t border-white/5 pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
            <strong className="text-white font-medium">Webflora Technologies</strong> builds high-performance, responsive software systems tailored for key industrial players, ensuring that your organization is equipped to grow and scale effectively.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
};

const ProblemWrapper = ({ data }) => {
  return (
    <section className="py-20 px-6 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <FadeInUp className="text-[#FF3B00] font-bold tracking-widest uppercase text-sm block mb-6">
              Industry Challenges
            </FadeInUp>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tighter leading-tight animate-fade-in">
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
                  Targeted Solutions
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
    <section id="impact" className="py-20 px-6 bg-black relative overflow-hidden">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
             <div className="max-w-2xl">
               <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
                 Key Advantages
               </FadeInUp>
               <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                 BUSINESS <br/><span className="text-gray-600 font-outline">BENEFITS.</span>
               </h2>
             </div>
             <p className="text-lg text-gray-400 max-w-sm font-light">We engineer digital channels designed to create maximum operational value and return on investment.</p>
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
            TECHNOLOGY <span className="text-gray-700">ARSENAL.</span>
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
    <section className="py-20 px-6 bg-[#030303] relative border-y border-white/5">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              Platform Features
            </FadeInUp>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              OUR <span className="text-gray-600 font-outline">CAPABILITIES.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.subServices.map((service, index) => (
              <FadeInUp key={index} delay={index * 0.05} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                <div className="relative h-full p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col group-hover:-translate-y-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3B00]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,59,0,0.0)] group-hover:shadow-[0_0_30px_rgba(255,59,0,0.3)] transition-all duration-500 group-hover:scale-110">
                    <SafeIcon icon={service.icon} width={28} className="text-white group-hover:text-[#FF3B00] transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF3B00] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed flex-grow">{service.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
       </div>
    </section>
  );
};

const ProcessWrapper = ({ data }) => {
  if (!data.process || data.process.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-[#050505] relative border-y border-white/5">
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <FadeInUp className="text-[#FF3B00] font-bold uppercase tracking-[0.3em] mb-4 block text-xs">
              How We Deliver
            </FadeInUp>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
              OUR <span className="text-gray-600 font-outline">PROCESS.</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {data.process.map((step, index) => (
              <FadeInUp key={index} delay={index * 0.05} className="group relative">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-[#FF3B00] font-black text-2xl group-hover:scale-110 group-hover:border-[#FF3B00] transition-all duration-500">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 font-light">{step.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
       </div>
    </section>
  );
};

const OtherIndustriesWrapper = ({ currentIndustry }) => {
  const otherIndustries = Object.entries(industriesData)
    .filter(([key, ind]) => ind.title !== currentIndustry)
    .map(([key, ind]) => ({
      ...ind,
      slug: key,
    }));

  if (otherIndustries.length === 0) return null;

  const getBentoSpan = (index) => {
    const spans = [
      "md:col-span-2 md:row-span-2",
      "md:col-span-2 md:row-span-1",
      "md:col-span-1 md:row-span-1",
      "md:col-span-1 md:row-span-1",
    ];
    return spans[index % spans.length];
  };

  const getGradient = (index) => {
    const gradients = [
      "from-[#FF3B00]/10 to-transparent",
      "from-blue-600/10 to-transparent",
      "from-purple-600/10 to-transparent",
      "from-emerald-600/10 to-transparent",
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="py-20 px-6 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <GlowBlob color="#FF3B00" size="600px" bottom="-20%" left="-10%" opacity={0.05} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-24">
          <FadeInUp className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3B00]/20 bg-[#FF3B00]/5 text-[#FF3B00] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-[#FF3B00] animate-ping" />
            Discover More
          </FadeInUp>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            OTHER INDUSTRIES <br />
            <span className="text-gray-700">WE SERVE.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Tailor-made system logic for diverse industry landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
          {otherIndustries.map((ind, index) => {
            const span = getBentoSpan(index);
            const gradient = getGradient(index);
            const isLarge = span.includes("row-span-2");

            return (
              <FadeInUp 
                key={ind.slug} 
                delay={index * 0.1}
                className={`${span} group relative`}
              >
                <Link href={`/industries/${ind.slug}`} className="block h-full w-full">
                  <div className={`relative h-full w-full p-8 rounded-[2.5rem] bg-neutral-900/30 border border-white/5 backdrop-blur-3xl overflow-hidden transition-all duration-700 group-hover:border-white/20 group-hover:bg-neutral-900/50 flex flex-col justify-between`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#FF3B00]/50 transition-all duration-500">
                        <SafeIcon 
                          icon={ind.subServices?.[0]?.icon || "solar:widget-linear"} 
                          width={24} 
                          className="text-white group-hover:text-[#FF3B00] transition-colors" 
                        />
                      </div>
                      <h3 className={`font-bold text-white tracking-tight ${isLarge ? 'text-3xl' : 'text-xl'} mb-2`}>
                        {ind.title}
                      </h3>
                    </div>

                    <div className="relative z-10 space-y-6">
                      {isLarge && (
                        <p className="text-gray-400 font-light leading-relaxed line-clamp-4">
                          {ind.subtext}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors">
                          Explore Sector
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF3B00] transition-colors duration-500">
                          <SafeIcon icon="solar:arrow-right-up-linear" width={18} className="text-white group-hover:rotate-45 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>

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

export default IndustryTemplate;
