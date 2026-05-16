"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = useMemo(
    () => [
      {
        id: 4,
        clientName: "Albert Newwel",
        company: "Founder, Team Excellent",
        feedback:
          "We had an amazing experience working with Webflora Technologies. Shashank and his team built our website and app exactly the way we envisioned. Their SEO and digital marketing strategy significantly improved our online visibility and lead generation. Highly professional, responsive, and result-oriented team. I strongly recommend Webflora for anyone looking for reliable website, app development, and digital marketing services.",
        avatar: "👨‍💼",
      },
      {
        id: 5,
        clientName: "Shyam Kishor Sharma",
        company: "Founder, Best For Everyone",
        feedback:
          "I had an excellent experience working with Webflora Technologies for MLM software development. They built a fully customized MLM system for my business with features like genealogy tree, e-wallet, commission tracking, and real-time reporting. Their approach is very data-driven and scalable, helping automate complex operations. Clean and user-friendly dashboard, fast performance, and secure system. Highly professional team that understands both technology and business growth.",
        avatar: "🚀",
      },
      {
        id: 6,
        clientName: "Dinesh Kumar",
        company: "Managing Director, Diamond Resort",
        feedback:
          "We had a great experience working with Webflora Technologies for Diamond Resort’s digital development. They delivered a modern, responsive website with effective SEO and marketing strategies. The site is fast, user-friendly, and visually appealing. Their SEO improved our rankings and traffic, while marketing brought consistent leads and boosted visibility. Highly recommended for web development, SEO, and digital marketing that delivers real results.",
        avatar: "💎",
      },
    ],
    [],
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyles = (index) => {
    const total = testimonials.length;
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    const isActive = index === activeIndex;

    const x = diff * 220; 
    const scale = 1 - absDiff * 0.2;
    const opacity = 1 - absDiff * 0.45;
    const zIndex = 10 - absDiff;
    const rotateY = isActive ? 0 : diff * -25;
    const z = isActive ? 100 : -200;

    return {
      x,
      scale,
      opacity,
      zIndex,
      rotateY,
      z,
      cursor: isActive ? "default" : "pointer",
    };
  };

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden bg-black"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-[0.1]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter leading-none mb-6 uppercase"
          >
            Client <span className="text-primary">Success</span> Stories
          </motion.h2>
        </div>

        <div 
          className="relative h-[500px] md:h-[650px] flex items-center justify-center perspective-[2500px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
            {testimonials.map((testimonial, index) => {
              const styles = getCardStyles(index);
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={styles}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(index);
                    }
                  }}
                  className="absolute w-[320px] md:w-[700px] group select-none"
                >
                  {/* SIMPLIFIED HIGH-READABILITY CARD */}
                  <div className={`relative flex flex-col rounded-[2.5rem] md:rounded-[3rem] overflow-hidden transition-all duration-700 ${
                    isActive 
                    ? "bg-[#0A0A0A] border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)]" 
                    : "bg-white/[0.02] backdrop-blur-2xl border-white/5 opacity-40 grayscale"
                  } border`}>
                    
                    {/* Content Area */}
                    <div className="p-8 md:p-14 flex flex-col">
                      <div className="mb-8">
                        <Icon 
                          icon="ri:double-quotes-l" 
                          className={`text-4xl md:text-6xl mb-4 transition-colors duration-700 ${
                            isActive ? "text-primary/20" : "text-white/[0.02]"
                          }`} 
                        />
                        <p className={`text-base md:text-xl font-medium leading-[1.7] tracking-normal transition-colors duration-700 ${
                          isActive ? "text-white/90" : "text-white/20 line-clamp-3"
                        }`}>
                          {testimonial.feedback}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center gap-5 pt-8 border-t border-white/5">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl border border-white/10">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className={`text-lg md:text-2xl font-display font-bold leading-none mb-1 ${
                            isActive ? "text-white" : "text-white/30"
                          }`}>
                            {testimonial.clientName}
                          </h4>
                          <p className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] ${
                            isActive ? "text-primary" : "text-white/10"
                          }`}>
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Active Accent Bar */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              className="relative p-2 group"
            >
              <div className={`h-1.5 rounded-full transition-all duration-700 ${
                index === activeIndex 
                ? "w-12 bg-primary" 
                : "w-2 bg-white/10 group-hover:bg-white/30"
              }`} />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-2500 {
          perspective: 2500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;