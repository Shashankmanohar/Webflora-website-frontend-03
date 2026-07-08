import React from "react";
import ContactSection from "../Components/ContactSection";
import SafeIcon from "../it-company-in-patna/components/client/SafeIcon";

export const metadata = {
  title: "Why Webflora Technologies | Software Agency in Patna Bihar",
  description: "Learn why businesses choose Webflora over WordPress agencies and freelancers. Discover why we build with Next.js, React, and custom AI automation workflows.",
  alternates: {
    canonical: "/why-webflora",
  },
};

export default function WhyWebfloraPage() {
  const sections = [
    {
      title: "Why Next.js?",
      icon: "logos:nextjs-icon",
      desc: "WordPress and other monolithic systems require massive plugin packages that slow your website load times past 5 seconds, dropping your Google Map pack rankings. We use Next.js to compile static pages that render instantly on mobile 4G networks. This provides a sub-second LCP (Largest Contentful Paint) and excellent Core Web Vitals to maximize user retention."
    },
    {
      title: "Why React?",
      icon: "logos:react",
      desc: "For dynamic web portals, customer admin panels, and e-commerce carts, React provides a virtual DOM that processes screen transitions instantly without refreshing pages. This app-like fluidity raises online conversion rates, keeping prospective buyers engaged."
    },
    {
      title: "Why AI Automation?",
      icon: "logos:openai-icon",
      desc: "We integrate n8n, OpenAI, and official WhatsApp Business APIs to qualify online leads, answer FAQs, and sync details to CRM sheets. By automating up to 80% of your administrative routines, your brand operates 24/7 with zero human errors and minimal overhead."
    },
    {
      title: "Why Webflora over Freelancers?",
      icon: "lucide:users",
      desc: "Freelancers often lack reliable long-term support and struggle with complex system architectures. Webflora Technologies is an officially registered MSME service with dual founder-led code verification, secure AWS/Vercel pipelines, and robust post-launch service agreements (SLAs)."
    },
    {
      title: "Why Webflora over WordPress Agencies?",
      icon: "lucide:code-2",
      desc: "WordPress agencies install pre-made templates that are slow, hard to customize, and highly vulnerable to security hacks. Webflora engineers custom-coded solutions from scratch. You own 100% of the source code, pay zero monthly platform fees, and get absolute security."
    }
  ];

  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-[#FF3B00] pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center bg-black border-b border-white/5">
        <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="text-[#FF3B00] font-black tracking-[0.25em] uppercase text-xs">Our Engineering Core</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-extrabold">Webflora?</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We don't build generic websites. We engineer high-speed, secure, custom software architectures built to scale your business ROI.
          </p>
        </div>
      </section>

      {/* Detail Grid */}
      <section className="py-24 px-6 bg-[#050505] relative">
        <div className="max-w-5xl mx-auto space-y-16">
          {sections.map((sec, idx) => (
            <div key={idx} className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 hover:border-[#FF3B00]/20 transition-all duration-500 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#FF3B00]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#FF3B00]/40 transition-colors">
                  <SafeIcon icon={sec.icon} width={32} className="text-white group-hover:text-[#FF3B00] transition-colors" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#FF3B00] transition-colors uppercase tracking-tight">{sec.title}</h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">{sec.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
