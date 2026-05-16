"use client";

import React from "react";

export default function SEOContentBlock({ 
  title = "Software Development Company in Patna, Bihar",
  paragraphs = [
    <>
      <strong className="text-white font-medium">Webflora Technologies</strong> provides comprehensive digital solutions for businesses in Patna, Bihar, and across India. As a premier technology partner, our expertise spans across <strong className="text-gray-300">website development</strong>, <strong className="text-gray-300">ecommerce development</strong>, <strong className="text-gray-300">custom software</strong> engineering, and specialized <strong className="text-gray-300">ERP solutions</strong>.
    </>,
    <>
      Our specialized team builds scalable digital products designed for performance, automation, and business growth. Whether you need intuitive <strong className="text-gray-300">mobile app development</strong>, powerful <strong className="text-gray-300">CRM software</strong>, cutting-edge AI automation, or result-driven <strong className="text-gray-300">SEO services</strong>, we deliver engineered excellence tailored to your specific business requirements.
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
