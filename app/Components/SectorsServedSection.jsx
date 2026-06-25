"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function SectorsServedSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sectors = [
    {
      index: "01",
      icon: "solar:heart-pulse-bold-duotone",
      title: "HEALTHCARE",
      desc: "Secure patient portals, telemedicine apps, and clinical CRM systems in Bihar.",
      tech: ["logos:nextjs-icon", "logos:react", "logos:postgresql"],
      href: "/industries/healthcare",
    },
    {
      index: "02",
      icon: "solar:case-minimalistic-bold-duotone",
      title: "EDUCATION",
      desc: "Scalable LMS portals, mock test engines, and institute systems in India.",
      tech: ["logos:nextjs-icon", "logos:react", "logos:mongodb-icon"],
      href: "/industries/education",
    },
    {
      index: "03",
      icon: "solar:home-2-bold-duotone",
      title: "REAL ESTATE",
      desc: "Property listing directories and automated lead capture CRM integrations in Bihar.",
      tech: ["logos:nextjs-icon", "logos:react", "logos:tailwindcss-icon"],
      href: "/industries/real-estate",
    },
    {
      index: "04",
      icon: "solar:settings-bold-duotone",
      title: "MANUFACTURING",
      desc: "Custom ERP systems, supply chain logistics, and B2B distributor portals in Bihar India.",
      tech: ["logos:docker-icon", "logos:postgresql", "logos:aws"],
      href: "/industries/manufacturing",
    },
    {
      index: "05",
      icon: "solar:shop-2-bold-duotone",
      title: "RETAIL",
      desc: "GST-compliant billing software, offline scanners, and inventory trackers in Patna Bihar.",
      tech: ["logos:nodejs-icon", "logos:postgresql", "logos:react"],
      href: "/industries/retail",
    },
    {
      index: "06",
      icon: "solar:rocket-bold-duotone",
      title: "STARTUPS & SAAS",
      desc: "High-performance MVP launchpads, validation websites, and SaaS subscriptions in India.",
      tech: ["logos:nextjs-icon", "logos:n8n", "logos:openai-icon"],
      href: "/industries/startups",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sectors.length);
  }, [sectors.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sectors.length) % sectors.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(sectors[(currentIndex + i) % sectors.length]);
    }
    return cards;
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase tracking-wider">
            Industries We Serve<span className="text-orange-600">.</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Industry-specific digital capabilities engineered for scale, compliance, and growth.
          </p>
        </div>

        <button
          onClick={() => router.push("/industries")}
          className="group hidden md:flex items-center gap-2 uppercase text-sm tracking-widest font-semibold transition duration-200 hover:scale-110 cursor-pointer"
        >
          View All Industries
          <span className="text-orange-600 text-3xl transition-transform duration-300 group-hover:rotate-45">
            <Icon icon="solar:arrow-right-up-linear" />
          </span>
        </button>
      </div>

      {/* Desktop Carousel - 3 cards */}
      <div className="hidden lg:block relative">
        <div className="relative">
          <div className="flex gap-6 transition-all duration-700 ease-in-out">
            {getVisibleCards().map((sector, idx) => (
              <Link
                href={sector.href}
                key={`${sector.index}-${idx}`}
                className="flex-1 min-w-0"
                style={{
                  animation: "fadeInSlide 0.7s ease-out",
                }}
              >
                <SectorCard {...sector} />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
          aria-label="Previous slide"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={24}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
          aria-label="Next slide"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={24}
          />
        </button>
      </div>

      {/* Tablet Carousel - 2 cards */}
      <div className="hidden md:block lg:hidden relative">
        <div className="relative">
          <div className="flex gap-6 transition-all duration-700 ease-in-out">
            {getVisibleCards()
              .slice(0, 2)
              .map((sector, idx) => (
                <Link
                  href={sector.href}
                  key={`${sector.index}-${idx}`}
                  className="flex-1 min-w-0"
                  style={{
                    animation: "fadeInSlide 0.7s ease-out",
                  }}
                >
                  <SectorCard {...sector} />
                </Link>
              ))}
          </div>
        </div>

        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={24}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={24}
          />
        </button>
      </div>

      {/* Mobile Carousel - 1 card */}
      <div className="md:hidden relative">
        <div className="relative">
          <Link
            href={sectors[currentIndex].href}
            className="transition-all duration-700 ease-in-out block"
            style={{
              animation: "fadeInSlide 0.7s ease-out",
            }}
          >
            <SectorCard {...sectors[currentIndex]} />
          </Link>
        </div>

        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={20}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-zinc-950/80 border border-gray-800 hover:border-orange-500 flex items-center justify-center transition-all hover:scale-110 group rounded-none"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-orange-500 transition-colors"
            width={20}
          />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-orange-500 scale-125"
                : "bg-gray-700 hover:bg-gray-500"
                }`}
            />
            {index === currentIndex && (
              <div className="absolute inset-0 -m-1">
                <div className="w-4 h-4 rounded-full border border-orange-500/30 animate-ping" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Autoplay Toggle */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors group"
        >
          <Icon
            icon={isAutoPlaying ? "solar:pause-linear" : "solar:play-linear"}
            width={20}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="uppercase tracking-wider">
            {isAutoPlaying ? "Pause" : "Play"}
          </span>
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}

function SectorCard({ index, icon, title, desc, tech }) {
  return (
    <div className="group p-8 bg-zinc-950/40 border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 h-full rounded-none flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-8">
          <Icon
            icon={icon}
            width={40}
            className="text-white group-hover:text-orange-500 transition-colors"
          />
          <span className="text-2xl font-display font-bold text-neutral-800 group-hover:text-orange-500 transition-colors">
            {index}
          </span>
        </div>

        <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm mb-6 font-light leading-relaxed">{desc}</p>
      </div>

      <div className="flex gap-2">
        {tech.map((t) => (
          <Icon
            key={t}
            icon={t}
            width={16}
            className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 bg-white rounded-sm p-[1px] transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
