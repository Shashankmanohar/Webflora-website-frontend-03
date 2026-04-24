"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react";

const OurCoreServices = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const touchStartX = useRef(0);
  const autoScrollInterval = useRef(null);

  const services = [
    {
      id: 1,
      name: "Website Development",
      description:
        "Conversion-focused websites built for speed, performance, and scalability.",
      features: [
        "Custom UI/UX designs tailored to your brand",
        "SEO optimization for organic traffic growth",
        "Lightning-fast performance & mobile-first approach",
      ],
      timeline: "7-21 Days",
      startingPrice: "₹25,000",
      subtitle: "Starting Price",
      icon: "solar:monitor-smartphone-linear",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Software & ERP Systems",
      description:
        "Custom business software to automate workflows and centralize operations.",
      features: [
        "Real-time dashboards & analytics",
        "Automated workflow management systems",
        "Secure cloud infrastructure & backup",
      ],
      timeline: "15-30 Days",
      startingPrice: "₹80,000",
      subtitle: "Starting Price",
      icon: "solar:server-square-cloud-linear",
      badge: "Enterprise",
    },
    {
      id: 3,
      name: "Mobile App Development",
      description:
        "High-performance Android and iOS applications for scalable user growth.",
      features: [
        "Cross-platform native apps for iOS & Android",
        "Real-time synchronization & APIs",
        "App Store & Play Store optimization",
      ],
      timeline: "20-45 Days",
      startingPrice: "₹1,20,000",
      subtitle: "Starting Price",
      icon: "solar:smartphone-2-linear",
      badge: "Advanced",
    },
    {
      id: 4,
      name: "Digital Marketing",
      description:
        "Performance-driven marketing strategies focused on ROI and lead generation.",
      features: [
        "SEO & paid advertising optimization",
        "Social media management & content strategy",
        "Analytics tracking & performance insights",
      ],
      timeline: "Ongoing",
      startingPrice: "₹15,000",
      subtitle: "Monthly",
      icon: "solar:graph-up-linear",
      badge: null,
    },
    {
      id: 5,
      name: "Business Automation",
      description:
        "Automated systems that eliminate repetitive tasks and improve efficiency.",
      features: [
        "CRM & workflow automation setup",
        "WhatsApp & email integration systems",
        "Process optimization & cost reduction",
      ],
      timeline: "10-25 Days",
      startingPrice: "₹40,000",
      subtitle: "Starting Price",
      icon: "solar:bolt-circle-linear",
      badge: null,
    },
    {
      id: 5,
      name: "Business Automation",
      description:
        "Automated systems that eliminate repetitive tasks and improve efficiency.",
      features: [
        "CRM & workflow automation setup",
        "WhatsApp & email integration systems",
        "Process optimization & cost reduction",
      ],
      timeline: "10-25 Days",
      startingPrice: "₹40,000",
      subtitle: "Starting Price",
      icon: "solar:bolt-circle-linear",
      badge: null,
    },
  ];

  // Check screen size and initialize
  useEffect(() => {
    setIsLoading(false);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto-scroll carousel on mobile
  useEffect(() => {
    if (!isMobile) {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      return;
    }

    // Clear existing interval
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    // Set new interval
    autoScrollInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isMobile, services.length]);

  // Desktop intersection observer - FIXED
  useEffect(() => {
    if (isMobile) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardIndex = cardsRef.current.indexOf(entry.target);
          if (cardIndex !== -1) {
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Add small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          observer.observe(card);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, [isMobile]);

  // Handle carousel slide change
  const goToSlide = useCallback(
    (slideIndex) => {
      setCurrentSlide(slideIndex % services.length);

      // Reset autoplay interval
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      if (isMobile) {
        autoScrollInterval.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % services.length);
        }, 5000);
      }
    },
    [isMobile, services.length],
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1 < 0 ? services.length - 1 : currentSlide - 1);
  }, [currentSlide, goToSlide, services.length]);

  // Handle touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const renderCard = (service, idx, isMobileView) => (
    <div
      key={`${service.id}-${isMobileView ? "mobile" : "desktop"}`}
      ref={(el) => {
        if (el && !isMobileView) {
          cardsRef.current[idx] = el;
        }
      }}
      className={`${isMobileView ? "w-full flex-shrink-0" : "w-full"} transform-gpu transition-all duration-700 ease-out ${isMobileView
          ? "opacity-100 translate-y-0 scale-100"
          : visibleCards.has(idx)
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      style={{
        transitionDelay:
          !isMobileView && visibleCards.has(idx) ? `${idx * 100}ms` : "0ms",
      }}
      onMouseEnter={() => !isMobileView && setHoveredCard(idx)}
      onMouseLeave={() => !isMobileView && setHoveredCard(null)}
    >
      {/* Main Card Container */}
      <div className="group h-full flex flex-col rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-3">
        {/* Upper Section - Black Background */}
        <div className="flex-1 bg-black pt-12 px-6 sm:px-8 md:px-10 pb-8 relative overflow-hidden border border-gray-800">
          {/* Badge */}
          {service.badge && (
            <div className="absolute top-4 right-4 bg-[#FF3B00] text-white px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF3B00]/50 transform transition-all duration-300 group-hover:scale-110 z-20">
              {service.badge}
            </div>
          )}

          {/* Header with Icon */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex-1 pr-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight mb-3 leading-tight">
                {service.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                {service.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-[#FF3B00]/30 via-gray-700 to-transparent my-6"></div>

          {/* Includes Section */}
          <div className="mb-8">
            <h4 className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 font-display">
              Includes
            </h4>
            <div className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="flex gap-3 items-start transform transition-all duration-300"
                  style={{
                    transitionDelay:
                      hoveredCard === idx ? `${fIdx * 50}ms` : "0ms",
                    transform:
                      hoveredCard === idx ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FF3B00] to-orange-600 flex items-center justify-center text-white shadow-lg shadow-[#FF3B00]/50 transform transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        icon="solar:check-circle-bold"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-snug font-medium group-hover:text-gray-200 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lower Section - Orange Gradient Background */}
        <div className="bg-gradient-to-r from-[#FF3B00] to-orange-600 relative overflow-hidden pb-8 px-6 sm:px-8 md:px-10 pt-8">
          {/* Animated Background Blur */}
          <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          {/* Pricing Section */}
          <div className="relative z-10 mb-8">
            <p className="text-white/90 text-xs uppercase tracking-widest font-mono font-bold mb-2">
              {service.subtitle}
            </p>
            <p className="text-white font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight">
              {service.startingPrice}
              {!service.subtitle.includes("Monthly") && (
                <span className="text-lg font-semibold">/-</span>
              )}
            </p>
          </div>

          {/* Timeline Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/30 rounded-full px-3 sm:px-4 py-2 mb-6">
            <Icon
              icon="solar:clock-circle-linear"
              width={14}
              height={14}
              className="text-white flex-shrink-0"
            />
            <span className="text-white text-xs font-semibold uppercase tracking-wider">
              {service.timeline}
            </span>
          </div>

          {/* CTA Button */}
          <button className="relative z-10 w-full py-3 sm:py-3.5 px-6 bg-black text-[#FF3B00] rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden group/btn border border-white/20 hover:border-white/40 active:scale-95">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer rounded-2xl"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
              Get Free Consultation
              <Icon
                icon="solar:arrow-right-linear"
                width={16}
                height={16}
                className="group-hover/btn:translate-x-1 transition-transform duration-300 flex-shrink-0"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-neutral-950/30 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#FF3B00]/10 blur-[80px] sm:blur-[120px] rounded-full opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-orange-500/5 blur-[80px] sm:blur-[100px] rounded-full opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 right-0 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-[#FF3B00]/10 blur-[60px] sm:blur-[80px] rounded-full opacity-10"></div>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-subtle-grid bg-[size:30px_30px] sm:bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_0%,transparent_100%)] pointer-events-none opacity-30"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-20 gap-6">
          <div className="w-full md:w-auto">
            <span className="text-[#FF3B00] font-mono text-xs tracking-[0.2em] uppercase mb-4 block animate-pulse">
              Capabilities
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-tight">
              Our Core Services
            </h2>
          </div>
          <div
            className="h-px flex-1 bg-gradient-to-r from-transparent via-[#FF3B00]/50 to-transparent hidden md:block mb-4"
            aria-hidden="true"
          ></div>
        </div>

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => renderCard(service, idx, false))}
          </div>
        )}

        {/* Mobile Carousel View */}
        {isMobile && (
          <div className="flex flex-col gap-6">
            {/* Carousel Container */}
            <div
              className="relative overflow-hidden rounded-3xl bg-black/50"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Services carousel"
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {services.map((service, idx) => renderCard(service, idx, true))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex flex-col gap-6">
              {/* Indicators */}
              <div
                className="flex justify-center items-center gap-2"
                role="tablist"
                aria-label="Carousel slides"
              >
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                        ? "bg-[#FF3B00] w-8 shadow-lg shadow-[#FF3B00]/50"
                        : "bg-gray-700 w-2 hover:bg-gray-600"
                      }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-selected={idx === currentSlide}
                    role="tab"
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-[#FF3B00]/20 border border-[#FF3B00]/50 text-[#FF3B00] hover:bg-[#FF3B00]/30 transition-all duration-300 active:scale-95"
                  aria-label="Previous slide"
                >
                  <Icon icon="solar:arrow-left-linear" width={20} height={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-[#FF3B00]/20 border border-[#FF3B00]/50 text-[#FF3B00] hover:bg-[#FF3B00]/30 transition-all duration-300 active:scale-95"
                  aria-label="Next slide"
                >
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-20 sm:mt-24 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-white mb-4 tracking-tight">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-400 text-sm mb-8 font-light font-mono">
              We build custom solutions tailored to your unique business needs.
              Get a personalized quote.
            </p>
            <button className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-[#FF3B00] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,59,0,0.5)] overflow-hidden focus:ring-2 focus:ring-[#FF3B00] focus:outline-none active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center whitespace-nowrap">
                Schedule Free Strategy Call
                <Icon
                  icon="solar:arrow-right-linear"
                  width={16}
                  height={16}
                  className="group-hover:translate-x-1 transition-transform flex-shrink-0"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreServices;
