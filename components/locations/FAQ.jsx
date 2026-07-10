"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ({ faqs, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,59,0,0.03),transparent_40%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            Frequently Asked Questions {title && <span className="text-gray-600">for {title}</span>}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 bg-[#FF3B00]/25 text-[#FF3B00]" : "text-gray-400"}`}>
                    <Plus size={18} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0"}`}
                >
                  <p className="p-6 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
