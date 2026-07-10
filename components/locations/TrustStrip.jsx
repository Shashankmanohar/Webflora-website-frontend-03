import React from "react";
import { Icon } from "@iconify/react";

export default function TrustStrip() {
  return (
    <section className="py-12 px-6 bg-zinc-950/40 border-y border-white/5 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12 text-center">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Icon key={i} icon="solar:star-bold" className="text-sm" />
            ))}
          </div>
          <span className="text-xs text-gray-300 font-mono tracking-wider font-semibold uppercase">
            5.0 Google Rating (120+ Reviews)
          </span>
        </div>

        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />

        {/* MSME Status */}
        <div className="flex items-center gap-2">
          <Icon icon="solar:shield-check-bold" className="text-orange-500 text-lg" />
          <span className="text-xs text-gray-300 font-mono tracking-wider font-semibold uppercase">
            MSME Registered: UDYAM-BR-26-0183379
          </span>
        </div>

        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />

        {/* Response SLA */}
        <div className="flex items-center gap-2">
          <Icon icon="solar:history-bold" className="text-blue-500 text-lg" />
          <span className="text-xs text-gray-300 font-mono tracking-wider font-semibold uppercase">
            Response SLA &lt; 2 Hours
          </span>
        </div>

        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/10" />

        {/* Code Ownership */}
        <div className="flex items-center gap-2">
          <Icon icon="solar:key-bold" className="text-green-500 text-lg" />
          <span className="text-xs text-gray-300 font-mono tracking-wider font-semibold uppercase">
            100% Code Handover
          </span>
        </div>
      </div>
    </section>
  );
}
