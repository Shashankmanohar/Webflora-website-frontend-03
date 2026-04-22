"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function CurvedProductCards() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const products = [
    {
      id: 1,
      title: "Inventory Management",
      description: "Real-time tracking and optimization of stock levels",
      icon: "📦",
      position: "left",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Financial Suite",
      description: "Complete accounting and financial reporting tools",
      icon: "💰",
      position: "center",
      delay: 0,
    },
    {
      id: 3,
      title: "Supply Chain",
      description: "End-to-end visibility and logistics management",
      icon: "🚚",
      position: "right",
      delay: 0.2,
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data-driven insights for business intelligence",
      icon: "📊",
      position: "far-right",
      delay: 0.4,
    },
  ];

  const getCardStyles = (position) => {
    const baseStyles = {
      left: {
        desktop: "translate-x-[-220px] translate-y-[80px] rotate-[-8deg]",
        mobile: "translate-x-0 translate-y-0 rotate-0",
      },
      center: {
        desktop: "translate-x-0 translate-y-0 rotate-0",
        mobile: "translate-x-0 translate-y-0 rotate-0",
      },
      right: {
        desktop: "translate-x-[220px] translate-y-[80px] rotate-[8deg]",
        mobile: "translate-x-0 translate-y-[120px] rotate-0",
      },
      "far-right": {
        desktop: "translate-x-[480px] translate-y-[160px] rotate-[12deg]",
        mobile: "translate-x-0 translate-y-[240px] rotate-0",
      },
    };

    return baseStyles[position];
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden py-12 md:py-0">
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#ff3b00]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff3b00]/5 rounded-full blur-3xl"></div>
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative h-full w-full flex flex-col items-center justify-center px-4">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-24 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
            Enterprise Solutions
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Powerful ERP modules designed to transform your business operations
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative w-full h-auto md:h-96 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-auto h-full">
            {/* ANIMATED CURVE BACKGROUND (DESKTOP ONLY) */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 pointer-events-none">
              <svg
                viewBox="0 0 1000 300"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 100 250 Q 250 100, 500 50 T 900 250"
                  stroke="rgba(255, 59, 0, 0.1)"
                  strokeWidth="2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* CARDS */}
            {products.map((product, idx) => {
              const cardStyles = getCardStyles(product.position);
              return (
                <div
                  key={product.id}
                  className={`absolute w-72 md:w-80 transition-all duration-1000 ease-out ${
                    isLoaded
                      ? `${cardStyles.desktop} md:${cardStyles.desktop} ${cardStyles.mobile}`
                      : "translate-y-96 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${product.delay}s`,
                  }}
                >
                  {/* CARD */}
                  <div className="group relative h-full">
                    {/* GLOW EFFECT */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff3b00]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                    {/* CARD BODY */}
                    <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-gray-800 group-hover:border-[#ff3b00]/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 h-full flex flex-col justify-between group-hover:shadow-2xl group-hover:shadow-[#ff3b00]/20 transform group-hover:scale-105">
                      {/* TOP ACCENT */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* ICON */}
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-black text-white mb-2 group-hover:text-[#ff3b00] transition-colors duration-300">
                          {product.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                          {product.description}
                        </p>
                      </div>

                      {/* CTA BUTTON */}
                      <button className="w-full py-3 bg-gradient-to-r from-[#ff3b00] to-[#ff5523] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#ff3b00]/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider group-hover:gap-3">
                        Get Started
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>

                      {/* BOTTOM ACCENT */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff3b00] to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SCROLL INDICATOR (MOBILE) */}
        <div className="md:hidden mt-12 text-center text-gray-500 text-xs animate-pulse">
          ↓ Scroll to see all products
        </div>
      </div>
    </section>
  );
}
