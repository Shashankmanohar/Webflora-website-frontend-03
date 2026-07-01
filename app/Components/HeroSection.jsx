import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-12">

      {/* Background Grid Pattern & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="creative-grid-bg" />
        <div className="creative-grid-dots" />

        {/* Rising glowing dots */}
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 3)", "--duration": "9s", "--delay": "0s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 8)", "--duration": "12s", "--delay": "3s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 13)", "--duration": "8s", "--delay": "1s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 18)", "--duration": "14s", "--delay": "5s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 23)", "--duration": "10s", "--delay": "2s" }} />
        <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 28)", "--duration": "11s", "--delay": "4s" }} />

        {/* Centered glowing orb behind content */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[600px] md:h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(0,0,0,0) 70%)" }}
        />
        <div
          className="absolute left-1/3 top-1/3 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 70%)" }}
        />
      </div>

      {/* Floating abstract code decorations (Desktop only) */}
      <div className="absolute right-[10%] top-[22%] hidden xl:block opacity-10 animate-float-1 pointer-events-none text-white text-[64px] font-mono select-none leading-none" aria-hidden="true">
        {"</>"}
      </div>
      <div className="absolute left-[10%] bottom-[22%] hidden xl:block opacity-10 animate-float-2 pointer-events-none text-white text-[54px] font-mono select-none leading-none" aria-hidden="true">
        {"{}"}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center space-y-4 md:space-y-5">

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-md">
          <span className="text-orange-500 text-xs">⭐</span>
          <span className="text-[10px] sm:text-xs tracking-wider text-gray-300 font-mono uppercase">
            Trusted Software Company in Patna
          </span>
        </div>

        {/* H1 Main Heading */}
        <h1 className="font-display font-bold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl text-white">
          Software <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-black drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            Company
          </span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-white">in Patna, Bihar</span>
        </h1>

        {/* Subtext description */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-3xl">
          We are a full-service software company in Patna, Bihar, offering custom website development, mobile app development, performance digital marketing, and custom AI automation solutions that scale business growth across India.
        </p>

        {/* Core Services inline bullet points */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-gray-300 font-mono">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Software Development
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Web Development
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Mobile Apps
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> Digital Marketing
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" /> AI Automation
          </span>
        </div>


        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-1">
          <Link
            href="/contact"
            className="px-8 py-3 w-full sm:w-auto cursor-pointer bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            Start Your Project
          </Link>

          <Link
            href="/contact?consultation=true"
            className="px-8 py-3 w-full sm:w-auto cursor-pointer bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/5 text-white text-sm font-semibold tracking-wide text-center transition-all duration-300"
          >
            Get Free Consultation
          </Link>

          <Link
            href="#work"
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors py-2 flex items-center gap-1"
          >
            View Work <span className="text-orange-500 font-bold">→</span>
          </Link>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl pt-6 border-t border-white/10">
          <div className="p-3 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm">
            <p className="text-white text-xl md:text-2xl font-bold tracking-tight">200+</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5">Projects Delivered</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm">
            <p className="text-white text-xl md:text-2xl font-bold tracking-tight">150+</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5">Clients Served</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm">
            <p className="text-white text-xl md:text-2xl font-bold tracking-tight">5+</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5">Years Experience</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm">
            <p className="text-[#FF3B00] text-xl md:text-2xl font-bold tracking-tight">99%</p>
            <p className="text-gray-500 text-[9px] md:text-[10px] font-mono uppercase tracking-wider mt-0.5">Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}
