import React from "react";
import { Icon } from "@iconify/react";

const staticReviews = [
  {
    name: "Arjun Sharma",
    role: "Founder, PeakEducation Delhi",
    text: "Webflora Technologies developed our student enrollment website and scaled our technical SEO. We operate our coaching portal with zero monthly system licensing fees. Outstanding support remotely handled from Patna!"
  },
  {
    name: "Priya Nair",
    role: "CTO, FinFlow Mumbai",
    text: "Our custom cloud CRM portal was built by Webflora with state-of-the-art security, role permissions, and full API integrations. The performance is incredible and loading speeds are under 1 second."
  },
  {
    name: "Rohan Das",
    role: "Logistics Manager, EastCargo Kolkata",
    text: "We wanted a clean custom ERP to track deliveries across the state. Webflora delivered a robust React system that works flawlessly, backed by solid off-site database backups."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Client Success
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {staticReviews.map((review, index) => (
            <div 
              key={index}
              className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm hover:border-orange-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="solar:star-bold" className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-300 font-light leading-relaxed text-sm italic">
                  "{review.text}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <p className="font-bold text-white tracking-tight text-sm">{review.name}</p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
