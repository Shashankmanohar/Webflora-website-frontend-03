"use client";

import React from "react";
import Link from "next/link";

export default function SEOContentBlock({ 
  title = "Software Development Company in Patna, Bihar",
  paragraphs = [
    <>
      <strong className="text-white font-medium">Webflora Technologies</strong> provides comprehensive digital solutions for businesses in Patna, Bihar, and across India. As a premier technology partner, our expertise spans across <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">website development</Link>, ecommerce development, <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">Custom Software Development</Link> engineering, and specialized <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">ERP Development Company</Link> systems.
    </>,
    <>
      Our specialized team builds scalable digital products designed for performance, automation, and business growth. Whether you need intuitive <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">mobile app development</Link>, powerful <Link href="/it-company-in-patna/software-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">CRM Software Development</Link>, cutting-edge <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">AI automation</Link>, or result-driven local SEO, we deliver engineered excellence tailored to your specific business requirements.
    </>
  ]
}) {
  return (
    <section className="py-16 px-6 bg-[#050505] border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
          {title}
        </h2>
        {paragraphs.map((p, i) => (
          <p key={i} className={`text-neutral-400 text-sm md:text-base leading-relaxed font-light ${i !== paragraphs.length - 1 ? "mb-4" : ""}`}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
