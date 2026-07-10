"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { citiesData } from "../../data/cities";

export default function SearchCities() {
  const [query, setQuery] = useState("");
  const cities = Object.values(citiesData);

  const filtered = query
    ? cities.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    : cities.slice(0, 8); // show main 8 by default

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-3xl bg-zinc-950/60 border border-white/5 backdrop-blur-xl">
      <div className="relative flex items-center mb-6">
        <Icon icon="solar:magnifer-linear" className="absolute left-4 text-gray-500 text-lg" />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search target locations..."
          className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white text-sm focus:outline-none focus:border-[#FF3B00] transition-colors"
        />
      </div>

      <div className="space-y-2">
        <p className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2">Available Cities</p>
        <div className="flex flex-wrap gap-2">
          {filtered.map(city => (
            <Link 
              key={city.slug} 
              href={`/locations/${city.slug}`}
              className="px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 hover:border-[#FF3B00] hover:bg-[#FF3B00]/5 text-xs text-gray-300 hover:text-white transition-all font-light"
            >
              {city.name}
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-xs text-gray-500 italic py-2">No cities match your search. Try "Delhi", "Mumbai"...</p>
          )}
        </div>
      </div>
    </div>
  );
}
