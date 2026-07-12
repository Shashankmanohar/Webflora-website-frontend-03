"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AboutWebflora from "../Components/AboutWebflora";
import FounderStorySection from "../Components/FounderStorySection";
import MissionVisionSection from "../Components/MIssion&Vission";
import AboutService from "../Components/AboutService";
import AboutMissionandVision from "../Components/AboutMissionandVision";
import ContactSection from "../Components/ContactSection";
import SEOContentBlock from "../Components/SEOContentBlock";
import TrustSignals from "../Components/TrustSignals";
import GoogleTrustBanner from "../Components/GoogleTrustBanner";
import FaqSection from "../it-company-in-patna/components/FaqSection";
import GoogleReviewsSection from "../Components/GoogleReviewsSection";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function UltraAnimatedHero() {
  return (
    <>
      {/* About Section */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="min-h-screen w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased relative overflow-hidden pt-20 px-6"
      >
        {/* Background Grid Pattern & Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="creative-grid-bg" />
          <div className="creative-grid-dots" />
          
          {/* Rising glowing dots */}
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_8px_#ff3c00,0_0_15px_#ff3c00]" style={{ left: "calc(45px * 4)", "--duration": "9s", "--delay": "0s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6,0_0_15px_#3b82f6]" style={{ left: "calc(45px * 12)", "--duration": "11s", "--delay": "2s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-[#FF3B00] rounded-full shadow-[0_0_10px_#ff3c00,0_0_20px_#ff3c00]" style={{ left: "calc(45px * 20)", "--duration": "13s", "--delay": "4s" }} />
          <div className="animate-grid-dot-rise w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_8px_#fb923c,0_0_15px_#fb923c]" style={{ left: "calc(45px * 28)", "--duration": "10s", "--delay": "1s" }} />
        </div>
        {/* Animated Spotlight */}
        <motion.svg
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] -top-40 left-0 md:-top-20 md:left-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="1924.71"
              cy="273.501"
              rx="1924.71"
              ry="273.501"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill="white"
              fillOpacity="0.21"
            />
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              />
            </filter>
          </defs>
        </motion.svg>

        {/* Radial Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

        {/* Floating ambient glow */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -z-10 top-1/3 left-1/3 w-[500px] h-[500px] bg-[#ff3c00]/20 blur-[140px] rounded-full"
        />

        {/* Hero Content */}
        <motion.div
          variants={container}
          className="max-w-6xl w-full text-center space-y-8 z-10 relative mt-12 md:mt-0"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-[#ff3c00] mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#ff3c00]"
            />
            Spotlight on Engineering
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.9] text-white drop-shadow-2xl">
            About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-[#ff3c00]">
              Webflora Technologies
            </span>
          </h1>

          <p className="text-base md:text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Leading Software Development Company in Patna Bihar
          </p>

          <motion.div
            variants={item}
            className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link href="/it-company-in-patna">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-8 py-4 bg-[#ff3c00] text-black font-semibold text-sm uppercase tracking-wider overflow-hidden"
              >
                <div className="relative z-10 flex items-center gap-2 text">
                  Explore Vision
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="text-lg"
                  >
                    →
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0" />
              </motion.button>
            </Link>

            <div className="flex gap-6 text-xs text-neutral-400 font-medium uppercase tracking-widest mt-8 md:mt-0">
              {["Scalable", "Efficient", "Secure"].map((t, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="flex items-center gap-1"
                >
                  <span className="text-[#ff3c00]">✔</span> {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <GoogleTrustBanner />
      <TrustSignals />
      <GoogleReviewsSection />

      {/* GEO Content Section */}
      <section className="py-20 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter leading-none">
            Leading Software Development Company in Patna Bihar
          </h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed font-light">
            Webflora Technologies is a Patna-based digital solutions company helping startups, coaching institutes, ecommerce businesses, and enterprises build scalable digital systems through software development, AI automation, and modern web technologies.
          </p>
          
          <div className="text-left bg-white/5 p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto">
             <h3 className="text-xl font-bold text-white mb-4">Why choose Webflora Technologies?</h3>
             <p className="text-gray-400 font-light">
               Webflora Technologies focuses on scalable engineering, founder-led execution, AI-driven systems, and long-term technology partnerships for business growth.
             </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />
      </section>

      {/* About Section of webflora Technologies -  */}
      <AboutWebflora />

      {/* Origin Story */}
      <FounderStorySection />

      {/* Mission and Vision */}
      <MissionVisionSection />

      {/* About Service  */}
      <AboutService />

      {/* About Mission and Vision */}
      <AboutMissionandVision />

      {/* SEO Content Block */}
      <SEOContentBlock 
        title="Leading Technology Partner in Bihar"
        paragraphs={[
          <>Since our inception, <strong className="text-white font-medium">Webflora Technologies</strong> has been driven by a mission to engineer scalable, high-performance digital systems. We are not just a <strong className="text-gray-300">software development company in Patna</strong>; we are a dedicated team of technical founders and engineers who understand how to translate business goals into technological realities.</>,
          <>Our commitment to excellence means we utilize enterprise-grade technologies to deliver custom <Link href="/it-company-in-patna/website-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">web development</Link>, <Link href="/it-company-in-patna/mobile-app-development-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">mobile applications</Link>, and <Link href="/it-company-in-patna/ai-automation-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">AI automation</Link>. We serve businesses across Bihar and India, ensuring every product we ship is secure, optimized for SEO, and built for measurable business growth. Explore our <Link href="/it-company-in-patna/ai-chatbot-company-in-patna" className="text-[#FF3B00] hover:underline font-medium">AI Chatbot</Link> solutions or view our <Link href="/case-studies" className="text-[#FF3B00] hover:underline font-medium">case studies</Link> to see our engineering in action.</>
        ]}
      />

      {/* About FAQs Section */}
      <FaqSection 
        title="Webflora Technologies"
        faqs={aboutFaqs} 
      />

      {/* Contact Section */}
      <ContactSection />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Webflora Technologies",
            "description": "Learn about Webflora Technologies, a leading software development and digital solutions company based in Patna, Bihar.",
            "url": "https://webfloratechnologies.com/about",
            "publisher": {
              "@id": "https://webfloratechnologies.com/#organization"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://webfloratechnologies.com/about"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": aboutFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
}

const aboutFaqs = [
  {
    question: "What is Webflora Technologies?",
    answer: "Webflora Technologies is a software development and digital solutions company based in Patna, Bihar, helping businesses build websites, mobile applications, AI automation systems, and scalable software solutions.",
    icon: "lucide:info"
  },
  {
    question: "Where is Webflora Technologies located?",
    answer: "Webflora Technologies is located at NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri, Patna, Bihar, 800016, India, and serves startups, businesses, coaching institutes, and enterprises across Bihar and India.",
    icon: "lucide:map-pin"
  },
  {
    question: "What industries does Webflora Technologies work with?",
    answer: "We work with startups, ecommerce businesses, coaching institutes, healthcare businesses, educational organizations, local businesses, and enterprises looking for digital transformation and automation solutions.",
    icon: "lucide:briefcase"
  },
  {
    question: "Why is Webflora Technologies the best custom software development company in Patna?",
    answer: "We provide tailored, secure, and scalable enterprise-grade software solutions using modern tech stacks, ensuring that your business operations are fully automated and data-driven.",
    icon: "lucide:award"
  },
  {
    question: "How much does custom software development cost?",
    answer: "Software development costs depend on project scope, complexity, and features. Small systems may start around ₹1,00,000, while larger enterprise solutions with complex integrations require a customized quote based on specific ROI goals.",
    icon: "lucide:indian-rupee"
  },
  {
    question: "How long does it take to develop software?",
    answer: "Development time depends on complexity. Small systems may take 4-8 weeks, while large scalable systems can take several months for a full rollout and integration.",
    icon: "lucide:calendar"
  },
  {
    question: "Can you upgrade existing software?",
    answer: "Yes, Webflora Technologies can improve, upgrade, or rebuild existing legacy systems to match current business needs using modern SaaS architecture and cloud-native solutions.",
    icon: "lucide:refresh-cw"
  },
  {
    question: "What makes Webflora Technologies different from other agencies?",
    answer: "Our approach focuses on scalable engineering, structured execution, performance optimization, AI-driven systems, and long-term business growth instead of just basic website or software delivery.",
    icon: "lucide:zap"
  },
  {
    question: "Is Webflora Technologies MSME registered?",
    answer: "Yes, Webflora Technologies is registered as an MSME under the Government of India with Udyam Registration Number UDYAM-BR-26-0183379.",
    icon: "lucide:award"
  },
  {
    question: "Do founders directly manage projects?",
    answer: "Yes, Webflora follows a founder-led execution approach where project strategy, quality control, and client communication are closely managed to ensure better execution and transparency.",
    icon: "lucide:users"
  },
  {
    question: "What is the mission of Webflora Technologies?",
    answer: "Our mission is to help businesses grow faster and operate smarter through scalable technology systems, automation, digital transformation, and performance-focused engineering solutions.",
    icon: "lucide:target"
  }
];
