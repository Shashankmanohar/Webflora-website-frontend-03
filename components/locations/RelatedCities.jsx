import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { citiesData } from "../../data/cities";

export default function RelatedCities({ currentCitySlug, serviceSlug = "" }) {
  // Get other cities, prioritizing the static ones
  const otherCities = Object.values(citiesData).filter(c => c.slug !== currentCitySlug);

  return (
    <section className="py-16 px-6 bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-widest block">
          Network Operations
        </span>
        <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
          Explore Services in Other Cities
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-2">
          {otherCities.map(city => {
            const href = serviceSlug 
              ? `/locations/${city.slug}/${serviceSlug}`
              : `/locations/${city.slug}`;
            return (
              <Link
                key={city.slug}
                href={href}
                className="px-4 py-2 rounded-full border border-white/5 bg-zinc-950/40 text-xs text-gray-400 hover:text-white hover:border-[#FF3B00] hover:bg-[#FF3B00]/5 transition-all font-light"
              >
                {city.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
