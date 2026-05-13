'use client';

import Link from "next/link";

export default function InvertedCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-6xl border border-gray-800 w-full rounded-[3rem] bg-black text-white py-20 px-8 md:px-16 text-center relative overflow-hidden">

        {/* subtle gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black opacity-90" />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-orange-500/20 blur-[120px] rounded-full" />

        {/* content */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Let’s Build Something
            <br />
            <span className="text-[#ff3b00]">
              Great Together
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Transform your business with technology that delivers results.
            Schedule a free discovery call with our founders.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">

            {/* inverted primary button */}
            <Link 
              href="/contact"
              className="px-10 py-4 bg-orange-600 border-1 border-orange-600 hover:text-orange-600 text-white font-semibold transition-all duration-300 hover:bg-black cursor-pointer inline-block"
            >
              Start Your Project
            </Link>

            {/* outline button */}
            <Link 
              href="/contact"
              className="px-10 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
