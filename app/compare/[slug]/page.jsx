import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparisonsData } from "../data";
import SafeIcon from "../../it-company-in-patna/components/client/SafeIcon";
import { FadeInUp } from "../../it-company-in-patna/components/client/MotionWrappers";
import ContactSection from "../../Components/ContactSection";
import FaqSection from "../../it-company-in-patna/components/FaqSection";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const comp = comparisonsData[slug];
  if (!comp) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/compare/${slug}`;

  return {
    title: `${comp.title} | Webflora Technologies`,
    description: comp.subtext,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: comp.title,
      description: comp.subtext,
      url: url,
      siteName: "Webflora Technologies",
      locale: "en_IN",
      type: "website",
    }
  };
}

export default async function ComparePage({ params }) {
  const { slug } = await params;
  const data = comparisonsData[slug];

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
            <span className="text-orange-500 text-xs">🆚</span>
            <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
              Technology Matchup
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

      {/* Structured Comparison Table */}
      <section className="py-20 px-6 bg-[#050505] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Feature Grid</span>
            <h2 className="text-3xl font-black text-white uppercase mt-2">Technical Matchup Table</h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-white">Capability</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-orange-400">{data.prosCons.leftName}</th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-red-500">{data.prosCons.rightName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300 font-light text-sm">
                {data.features.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-6 font-bold text-white">{feat.name}</td>
                    <td className="p-6">{feat.wordpress}</td>
                    <td className="p-6">{feat.nextjs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recommendation Block */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 text-center space-y-6">
          <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Our Expert Verdict</span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase">Architect Recommendation</h2>
          <p className="text-gray-300 leading-relaxed font-light text-base md:text-lg">
            {data.recommendation}
          </p>
        </div>
      </section>

      {/* Pros & Cons Section */}
      <section className="py-20 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Side */}
            <div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-6">
              <h3 className="text-2xl font-black text-orange-400 uppercase tracking-wide">{data.prosCons.leftName} Analysis</h3>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pros</h4>
                <ul className="space-y-2">
                  {data.prosCons.leftPros.map((pro, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300 font-light items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest pt-4">Cons</h4>
                <ul className="space-y-2">
                  {data.prosCons.leftCons.map((con, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-500 font-light items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side */}
            <div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-6">
              <h3 className="text-2xl font-black text-red-500 uppercase tracking-wide">{data.prosCons.rightName} Analysis</h3>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pros</h4>
                <ul className="space-y-2">
                  {data.prosCons.rightPros.map((pro, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-300 font-light items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest pt-4">Cons</h4>
                <ul className="space-y-2">
                  {data.prosCons.rightCons.map((con, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-500 font-light items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(comparisonsData).map((slug) => ({
    slug: slug,
  }));
}
