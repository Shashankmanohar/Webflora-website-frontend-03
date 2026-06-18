import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-grid pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28">
      {/* CSS Animations injected directly for compositor execution (0ms main thread blocking) */}
      <style>{`
        @keyframes drift1 {
          0% { transform: translate(-20px, -30px) scale(1); }
          50% { transform: translate(20px, 30px) scale(1.05); }
          100% { transform: translate(-20px, -30px) scale(1); }
        }
        @keyframes drift2 {
          0% { transform: translate(20px, 30px) scale(1.05); }
          50% { transform: translate(-20px, -30px) scale(1); }
          100% { transform: translate(20px, 30px) scale(1.05); }
        }
        @keyframes float1 {
          0% { transform: translateY(-25px) rotate(-4deg); }
          50% { transform: translateY(25px) rotate(4deg); }
          100% { transform: translateY(-25px) rotate(-4deg); }
        }
        @keyframes float2 {
          0% { transform: translateY(25px) rotate(4deg); }
          50% { transform: translateY(-25px) rotate(-4deg); }
          100% { transform: translateY(25px) rotate(4deg); }
        }
        @media (min-width: 768px) {
          .animate-drift-1 { animation: drift1 39s infinite ease-in-out; }
          .animate-drift-2 { animation: drift2 39s infinite ease-in-out; }
        }
        .animate-float-1 { animation: float1 33s infinite ease-in-out; }
        .animate-float-2 { animation: float2 33s infinite ease-in-out; }
      `}</style>
 
      {/* Glow Background — animated via CSS keyframes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/5" />
          <div
            className="absolute left-1/4 top-1/4 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[80px] md:blur-[150px] opacity-60 will-change-transform md:animate-drift-1"
          />
          <div
            className="absolute left-1/2 top-1/2 w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full bg-gradient-to-b from-orange-500 to-orange-600 blur-[80px] md:blur-[150px] opacity-40 will-change-transform md:animate-drift-2"
          />
        </div>
      </div>

      {/* Floating Icons — pure CSS float animation */}
      <div className="absolute right-[8%] top-[25%] hidden lg:block opacity-35 will-change-transform animate-float-1">
        <span className="text-white text-[80px]">{"</>"}</span>
      </div>

      <div className="absolute left-[8%] bottom-[25%] hidden lg:block opacity-35 will-change-transform animate-float-2">
        <span className="text-white text-[70px]">{"{}"}</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full">
        {/* SEO H1 - Primary authority signal at the top */}
        <h1 className="text-[#FF3B00] text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] font-black mb-3 px-4 drop-shadow-[0_0_15px_rgba(255,59,0,0.3)] leading-relaxed">
          Software Development Company in Patna Bihar
        </h1>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 sm:mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-gray-300 font-mono uppercase">
            Top Web Agency in Bihar
          </span>
        </div>

        {/* Heading — elegant reveal */}
        <h2 className="font-display font-bold tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-5 will-change-transform">
          ANYTHING THAT <br />
          <span className="text-gradient inline-block">CAN BE BUILT,</span>
          <br />
          <span className="text-brand text-glow inline-block">WE BUILD.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-7 sm:mb-8 uppercase tracking-wider">
          CUSTOM SOFTWARE <span className="text-[#FF3B00]">•</span> WEBSITE DEVELOPMENT <span className="text-[#FF3B00]">•</span> MOBILE APPS <span className="text-[#FF3B00]">•</span> AI WORKFLOW AUTOMATION
        </p>

        {/* Actions — premium hover micro-interactions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/contact"
            className="btn-primary px-8 py-3.5 w-full sm:w-auto cursor-pointer flex items-center justify-center text-center font-semibold rounded-none"
          >
            Start Your Project
          </Link>

          <div className="w-full sm:w-auto inline-block relative">
            <div className="absolute z-10 -top-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-10 -top-[3px] -right-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-10 -bottom-1 -left-1 w-1.5 h-1.5 bg-white"></div>
            <div className="absolute z-10 -bottom-1 -right-1 w-1.5 h-1.5 bg-white"></div>

            <Link
              href="#work"
              className="relative w-full sm:w-auto px-8 py-3.5 bg-transparent border-1 border-orange-600 text-white text-base font-light tracking-wide hover:bg-orange-800 hover:text-white transition-all duration-300 flex items-center justify-center text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
