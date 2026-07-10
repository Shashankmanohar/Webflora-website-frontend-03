import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function LocationCard({ city }) {
  return (
    <div className="group relative rounded-3xl border border-white/5 bg-zinc-950/40 p-6 backdrop-blur-sm hover:border-[#FF3B00]/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF3B00] group-hover:bg-[#FF3B00] group-hover:text-white transition-colors duration-300">
          <Icon icon="solar:map-point-bold" width={20} />
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{city.state}</span>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#FF3B00] transition-colors">{city.name}</h3>
      <p className="text-xs text-gray-400 font-light line-clamp-3 mb-6 leading-relaxed">
        {city.startupEco}
      </p>

      <Link 
        href={`/locations/${city.slug}`}
        className="inline-flex items-center gap-2 text-xs font-bold text-white/40 group-hover:text-white transition-colors uppercase tracking-wider"
      >
        Explore Region
        <Icon icon="solar:arrow-right-linear" width={14} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
