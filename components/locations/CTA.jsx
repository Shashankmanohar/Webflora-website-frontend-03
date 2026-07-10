import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function CTA({ 
  title = "Ready to scale your business?", 
  subtitle = "Talk to our team to build high-performance Next.js websites, mobile apps, or enterprise integrations remotely.",
  buttonText = "Start Project Now"
}) {
  return (
    <section className="relative py-24 px-6 overflow-hidden border-t border-white/5 bg-[#050505] text-center">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF3B00]/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
        <div className="flex justify-center pt-4">
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF3B00] rounded-full font-bold text-lg text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
          >
            {buttonText}
            <Icon icon="solar:arrow-right-up-linear" width={20} />
          </Link>
        </div>
        <p className="text-xs font-mono text-gray-600 uppercase tracking-widest pt-2">
          We provide services remotely across India from our headquarters in Patna, Bihar.
        </p>
      </div>
    </section>
  );
}
