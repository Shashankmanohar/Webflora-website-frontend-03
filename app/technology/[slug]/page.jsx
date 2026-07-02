import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { technologiesData } from "../data";
import SafeIcon from "../../services/components/client/SafeIcon";
import { FadeInUp, HoverScale } from "../../services/components/client/MotionWrappers";
import ContactSection from "../../Components/ContactSection";
import FaqSection from "../../services/components/FaqSection";
import { ServiceComparisonWrapper, ServiceGlossaryWrapper } from "../../services/components/ServiceTemplate";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tech = technologiesData[slug];
  if (!tech) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/technology/${slug}`;
  const shortDesc = tech.subtext.slice(0, 150) + "...";

  return {
    title: `${tech.title} | Webflora Technologies`,
    description: shortDesc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: tech.title,
      description: shortDesc,
      url: url,
      siteName: "Webflora Technologies",
      locale: "en_IN",
      type: "website",
    }
  };
}

export default async function TechPage({ params }) {
  const { slug } = await params;
  const data = technologiesData[slug];

  if (!data) {
    notFound();
  }

  const words = data.headline.split(" ");
  const mainPart = words.slice(0, -2).join(" ");
  const gradientPart = words.slice(-2).join(" ");

  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(255,59,0,0.15) 0%, rgba(0,0,0,0) 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md">
            <span className="text-orange-500 text-xs">🛠️</span>
            <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
              Technology Expertise
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl text-white uppercase">
            {mainPart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-black drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              {gradientPart}
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-3xl">
            {data.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <Link
              href="/contact"
              className="px-10 py-3.5 w-full sm:w-auto cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Start Tech Project
            </Link>
            <Link
              href="/contact?consultation=true"
              className="px-10 py-3.5 w-full sm:w-auto cursor-pointer bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300"
            >
              Consult an Architect
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Overview</span>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Why Choose This Stack?</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            {data.whyChoose}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs block mb-4">Strategic Impact</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Core Advantages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.benefits.map((item, index) => (
              <div key={index} className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 hover:border-[#FF3B00]/20 transition-all duration-500 flex flex-col justify-between group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <SafeIcon icon="lucide:check-circle" className="text-orange-500" width={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF3B00] transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">Agile Flow</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">Our Integration Process</h2>
          </div>
          <div className="space-y-6">
            {data.process.map((step, index) => (
              <div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-zinc-950/30 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-mono text-sm flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Comparison & Glossary */}
      <ServiceComparisonWrapper data={data} />
      <ServiceGlossaryWrapper data={data} />

      {/* FAQs Section */}
      <FaqSection faqs={data.faqs} title={data.title} />

      <ContactSection />
      
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `https://webfloratechnologies.com/technology/${slug}#webpage`,
            "url": `https://webfloratechnologies.com/technology/${slug}`,
            "name": data.title,
            "headline": data.title,
            "description": data.subtext.slice(0, 150) + "...",
            "datePublished": "2026-01-01T00:00:00+05:30",
            "dateModified": "2026-07-02T00:00:00+05:30",
            "publisher": {
              "@type": "Organization",
              "name": "Webflora Technologies",
              "url": "https://webfloratechnologies.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://webfloratechnologies.com/title-logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Shashank Manohar",
              "url": "https://webfloratechnologies.com/#founder-shashank",
              "sameAs": [
                "https://www.linkedin.com/in/shashank-manohar-patna/"
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.title,
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies",
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": "India",
            "description": data.subtext
          })
        }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(technologiesData).map((slug) => ({
    slug: slug,
  }));
}
