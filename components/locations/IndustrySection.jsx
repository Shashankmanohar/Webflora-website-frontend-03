import React from "react";
import { Icon } from "@iconify/react";

export default function IndustrySection({ industries, title }) {
  if (!industries || industries.length === 0) return null;

  // Map industry names to dynamic icons
  const getIndustryIcon = (name) => {
    const n = name.toLowerCase();
    if (n.includes("school") || n.includes("education") || n.includes("coaching")) return "solar:square-academic-cap-linear";
    if (n.includes("health") || n.includes("clinic") || n.includes("hospital")) return "solar:health-linear";
    if (n.includes("estate") || n.includes("property")) return "solar:home-linear";
    if (n.includes("retail") || n.includes("shop") || n.includes("e-commerce") || n.includes("merchant")) return "solar:cart-large-minimalistic-linear";
    if (n.includes("logistics") || n.includes("delivery") || n.includes("transport")) return "solar:delivery-linear";
    if (n.includes("manufactur") || n.includes("factory") || n.includes("industrial")) return "solar:settings-linear";
    if (n.includes("startup") || n.includes("saas")) return "solar:rocket-linear";
    return "solar:widget-linear";
  };

  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Sectors We Empower
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            Industries We Serve {title && <span className="text-gray-600">in {title}</span>}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-orange-500/20 hover:bg-zinc-900/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#FF3B00]/40 transition-all duration-300">
                <Icon 
                  icon={getIndustryIcon(industry)} 
                  width={24} 
                  className="text-white group-hover:text-[#FF3B00] transition-colors" 
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FF3B00] transition-colors">
                {industry}
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Tailored digital solutions helping local {industry.toLowerCase()} brands automate operations, scale customer acquisition, and solve complex technology challenges.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
