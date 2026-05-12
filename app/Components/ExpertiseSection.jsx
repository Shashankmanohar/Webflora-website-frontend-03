"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function ExpertiseSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      index: "01",
      icon: "tabler:device-laptop",
      title: "WEB DEVELOPMENT",
      desc: "Next-Gen Websites built with React, Next.js and Tailwind.",
      tech: ["logos:react", "logos:nextjs-icon"],
      href: "/services/web-development",
    },
    {
      index: "02",
      icon: "solar:code-circle-linear",
      title: "SOFTWARE DEV",
      desc: "Custom enterprise solutions with Python and .NET.",
      tech: ["logos:python", "logos:docker-icon"],
      href: "/services/software-development",
    },
    {
      index: "03",
      icon: "solar:smartphone-linear",
      title: "MOBILE APPS",
      desc: "Native and Cross-platform iOS & Android apps.",
      tech: ["logos:flutter", "logos:apple"],
      href: "/services/app-development",
    },
    {
      index: "04",
      icon: "solar:cpu-linear",
      title: "AI & ML",
      desc: "Intelligent systems powered by OpenAI and TensorFlow.",
      tech: ["logos:tensorflow", "logos:openai-icon"],
      href: "/services/ai-automation",
    },
    {
      index: "05",
      icon: "solar:pen-new-square-linear",
      title: "UI/UX DESIGN",
      desc: "Beautiful, functional interfaces designed in Figma.",
      tech: ["logos:figma"],
      href: "/services",
    },
    {
      index: "06",
      icon: "solar:cloud-linear",
      title: "CLOUD & DEVOPS",
      desc: "Scalable infrastructure on AWS and Azure.",
      tech: ["logos:aws"],
      href: "/services",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Calculate which cards to show
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(services[(currentIndex + i) % services.length]);
    }
    return cards;
  };

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            EXPERTISE<span className="text-orange-600">.</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Comprehensive digital solutions engineered for scale and
            performance.
          </p>
        </div>

        <button
          onClick={() => router.push("/services")}
          className="group  hidden font md:flex items-center gap-2 uppercase text-xl tracking-widest font-semibold transition duration-200 hover:scale-110 cursor-pointer"
        >
          View All Services
          <span className="text-orange-600 text-3xl transition-transform duration-300 group-hover:rotate-45">
            <Icon icon="solar:arrow-right-up-linear" />
          </span>
        </button>
      </div>

      {/* Desktop Carousel - 3 cards */}
      <div className="hidden lg:block relative">
        <div className="relative">
          <div className="flex gap-6 transition-all duration-700 ease-in-out">
            {getVisibleCards().map((service, idx) => (
              <Link
                href={service.href}
                key={`${service.index}-${idx}`}
                className="flex-1 min-w-0"
                style={{
                  animation: "fadeInSlide 0.7s ease-out",
                }}
              >
                <ServiceCard {...service} />
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Previous slide"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
            width={24}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Next slide"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
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
              .map((service, idx) => (
                <Link
                  href={service.href}
                  key={`${service.index}-${idx}`}
                  className="flex-1 min-w-0"
                  style={{
                    animation: "fadeInSlide 0.7s ease-out",
                  }}
                >
                  <ServiceCard {...service} />
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
            width={24}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
            width={24}
          />
        </button>
      </div>

      {/* Mobile Carousel - 1 card */}
      <div className="md:hidden relative">
        <div className="relative">
          <Link
            href={services[currentIndex].href}
            className="transition-all duration-700 ease-in-out block"
            style={{
              animation: "fadeInSlide 0.7s ease-out",
            }}
          >
            <ServiceCard {...services[currentIndex]} />
          </Link>
        </div>

        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
        >
          <Icon
            icon="solar:arrow-left-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
            width={20}
          />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-brand-dark border border-gray-800 hover:border-brand-red flex items-center justify-center transition-all hover:scale-110 group"
        >
          <Icon
            icon="solar:arrow-right-linear"
            className="text-gray-400 group-hover:text-brand-red transition-colors"
            width={20}
          />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-12">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-brand-red scale-125"
                : "bg-gray-700 hover:bg-gray-500"
                }`}
            />
            {index === currentIndex && (
              <div className="absolute inset-0 -m-1">
                <div className="w-4 h-4 rounded-full border border-brand-red/30 animate-ping" />
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
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-red transition-colors group"
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

function ServiceCard({ index, icon, title, desc, tech }) {
  return (
    <div className="group p-8 bg-brand-dark border border-gray-800 hover:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 h-full">
      <div className="flex justify-between items-start mb-8">
        <Icon
          icon={icon}
          width={40}
          className="text-white group-hover:text-brand-red transition-colors"
        />
        <span className="text-2xl font-display font-bold text-gray-700 group-hover:text-orange-600 transition-colors">
          {index}
        </span>
      </div>

      <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm mb-6">{desc}</p>

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
