import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pricingGuidesData } from "../data";
import SafeIcon from "../../it-company-in-patna/components/client/SafeIcon";
import ContactSection from "../../Components/ContactSection";
import FaqSection from "../../it-company-in-patna/components/FaqSection";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = pricingGuidesData[slug];
  if (!guide) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/pricing-guides/${slug}`;

  return {
    title: `${guide.title} | Webflora Technologies`,
    description: guide.subtext,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.title,
      description: guide.subtext,
      url: url,
      siteName: "Webflora Technologies",
      locale: "en_IN",
      type: "website",
    }
  };
}

export default async function PricingGuidePage({ params }) {
  const { slug } = await params;
  const data = pricingGuidesData[slug];

  if (!data) {
    notFound();
  }

  const words = data.headline.split(" ");
  const mainPart = words.slice(0, -2).join(" ");
  const gradientPart = words.slice(-2).join(" ");

  return (
    <div className="bg-[#030303] text-white selection:bg-[#FF3B00] selection:text-white overflow-x-hidden pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black pb-16">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-grid opacity-[0.08]" />
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(255,59,0,0.15) 0%, rgba(0,0,0,0) 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md">
            <span className="text-orange-500 text-xs">💰</span>
            <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
              Pricing Calculator Guide
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
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed">
          <p>{data.intro}</p>
        </div>
      </section>

      {/* Pricing Tiers Table */}
      <section className="py-20 px-6 bg-black relative">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Cost Estimates</span>
            <h2 className="text-3xl font-black text-white uppercase mt-2">Project Pricing Scales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.factors.map((tier, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 hover:border-[#FF3B00]/20 transition-all duration-500 flex flex-col justify-between group">
                <div>
                  <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest block mb-2">Tier 0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FF3B00] transition-colors">{tier.name}</h3>
                  <p className="text-2xl font-black text-orange-400 mb-6">{tier.price}</p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{tier.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors Breakdown */}
      <section className="py-20 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Pricing Drivers</span>
            <h2 className="text-3xl font-black text-white uppercase mt-2">Cost Breakdown Factors</h2>
          </div>

          <div className="space-y-6">
            {data.pricingFactors.map((factor, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl bg-zinc-950/30 border border-white/5">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold shrink-0">
                  <SafeIcon icon="lucide:check" width={16} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{factor.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <FaqSection faqs={data.faqs} title={data.title} />

      <ContactSection />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(pricingGuidesData).map((slug) => ({
    slug: slug,
  }));
}
