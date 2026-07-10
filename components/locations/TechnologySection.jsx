import React from "react";
import { Icon } from "@iconify/react";

export default function TechnologySection({ techStack }) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
          Engineered for Speed
        </span>
        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight text-white uppercase leading-none">
          Our Technology Stack
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-950/40 border border-white/5 hover:border-[#FF3B00]/30 hover:bg-zinc-900/10 transition-all duration-300"
            >
              <Icon icon={tech.icon || "solar:code-linear"} width={36} className="mb-3 text-white" />
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
