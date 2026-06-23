"use client";

import React from "react";
import { Icon } from "@iconify/react";

export const BenefitsGrid = ({ benefits, title }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {benefits.map((b, i) => (
      <div 
        key={i}
        className="group relative p-10 rounded-[2rem] border border-white/5 bg-[#080808] overflow-hidden premium-glow-card"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:scale-110 transition-all duration-500">
            <Icon icon={b.icon} width={32} className="text-white group-hover:text-black transition-colors" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-black">{b.stat}</span>
            <span className="text-[10px] font-bold text-[#FF3B00] uppercase tracking-widest">{b.statLabel}</span>
          </div>
          <h3 className="text-xl font-bold mb-4">{b.title}</h3>
          <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-200 transition-colors font-light">{b.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export const TechStackGrid = ({ techStack }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
    {techStack.map((tech, i) => (
      <div 
        key={i}
        className="group p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-[#FF3B00]/40 transition-all duration-500 cursor-default hover:scale-105 hover:bg-neutral-900/40"
      >
        <div className="flex flex-col items-center gap-5">
          <div className="w-16 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:drop-shadow-[0_0_20px_rgba(255,59,0,0.2)] transition-all duration-500">
            <Icon icon={tech.icon} width={48} height={48} />
          </div>
          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">{tech.name}</span>
        </div>
      </div>
    ))}
  </div>
);
