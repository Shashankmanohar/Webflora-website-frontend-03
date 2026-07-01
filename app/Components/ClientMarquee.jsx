"use client";

import React from "react";
import Image from "next/image";

const clientLogos = [
  { name: "DBM", src: "/client-logo/DBM.png" },
  { name: "Diamond Resort", src: "/client-logo/DiamondResort.png" },
  { name: "Edugen World School", src: "/client-logo/Edugen-world-school.png" },
  { name: "Team Excellent", src: "/client-logo/Team-excellentlogo.webp" },
  { name: "Best For Everyone", src: "/client-logo/best-for-everyone.png" },
  { name: "Heo Sahyog", src: "/client-logo/heo-sahyog.png" },
  { name: "Vidya Bharti", src: "/client-logo/vidya-bharti.png" },
];

export default function ClientMarquee() {
  return (
    <section className="bg-black py-6 md:py-10 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-3 md:mb-5 text-center">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Trusted by companies across India
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden w-full">
        {/* Left and right fade gradients for a premium mask effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-4">
          {/* First loop */}
          <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="w-28 h-10 md:w-36 md:h-12 shrink-0 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            ))}
          </div>

          {/* Second loop for infinite scroll */}
          <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden="true">
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="w-28 h-10 md:w-36 md:h-12 shrink-0 relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
