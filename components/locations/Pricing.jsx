import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Pricing({ pricing }) {
  if (!pricing || pricing.length === 0) return null;

  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
            Investment Schemes
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
            Transparent Pricing Packages
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`w-full md:w-[48%] lg:w-[45%] p-8 rounded-[2.5rem] bg-zinc-950/40 border backdrop-blur-sm relative flex flex-col justify-between transition-all duration-300 ${plan.popular ? "border-[#FF3B00] shadow-[0_0_30px_rgba(255,59,0,0.1)]" : "border-white/5 hover:border-white/10"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF3B00] text-black font-mono text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">{plan.subtitle}</p>
                {plan.timeline && (
                  <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
                    <Icon
                      icon="solar:clock-circle-linear"
                      width={12}
                      height={12}
                      className="text-[#FF3B00] flex-shrink-0"
                    />
                    <span className="text-gray-300 text-[10px] font-semibold uppercase tracking-wider">
                      {plan.timeline}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">{plan.period}</span>
                </div>

                <div className="h-[1px] w-full bg-white/5 mb-8" />

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-light">
                      <Icon icon="solar:check-circle-bold" className="text-green-500 text-lg shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact" 
                className={`w-full py-4 text-center rounded-full font-bold uppercase tracking-wider text-xs transition-colors ${plan.popular ? "bg-[#FF3B00] text-white hover:bg-orange-600" : "bg-white/5 border border-white/10 text-white hover:bg-white/10"}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
