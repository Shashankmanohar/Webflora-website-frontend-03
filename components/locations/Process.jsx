import React from "react";

export default function Process({ steps }) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            How We Deliver
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            Our Development Process
          </h2>
        </div>

        <div className="relative space-y-12 pl-4 md:pl-16">
          {/* Vertical connecting line */}
          <div className="absolute left-[34px] md:left-[64px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-[#FF3B00] via-orange-500/10 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="group relative flex gap-6 md:gap-10 items-start">
              {/* Timeline number node */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-sm md:text-xl font-mono text-[#FF3B00] font-bold group-hover:scale-110 group-hover:border-[#FF3B00] transition-transform duration-300">
                0{index + 1}
              </div>

              {/* Content box */}
              <div className="flex-grow p-6 md:p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-[#FF3B00]/20 hover:bg-zinc-900/10 transition-all duration-300">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 group-hover:text-[#FF3B00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
