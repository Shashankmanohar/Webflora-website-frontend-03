"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import GrowthSection from "./Components/GrowthSection";

// Lazy load components below the fold
const ExpertiseSection = dynamic(() => import("./Components/ExpertiseSection"), { ssr: false });
const ProcessSection = dynamic(() => import("./Components/ProcessSection"), { ssr: false });
const TechStackSection = dynamic(() => import("./Components/TechStackSection"), { ssr: false });
const WhyChooseSection = dynamic(() => import("./Components/WhyChooseSection"), { ssr: false });
const WorkSection = dynamic(() => import("./Components/WorkSection"), { ssr: false });
const PremiumCTASection = dynamic(() => import("./Components/PremiumCTA"), { ssr: false });
const ContactSection = dynamic(() => import("./Components/ContactSection"), { ssr: false });
const FaqSection = dynamic(() => import("./services/components/FaqSection"), { ssr: false });
const TestimonialSection = dynamic(() => import("./services/components/TesimonialSection"), { ssr: false });
const ProductCard = dynamic(() => import("./Components/ProductCard"), { ssr: false });

const page = () => {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <div className="content-auto">
        <GrowthSection />
      </div>
      <div className="content-auto">
        <ExpertiseSection />
      </div>
      <div className="content-auto">
        <ProcessSection />
      </div>
      <div className="content-auto">
        <TechStackSection />
      </div>
      <div className="content-auto">
        <WhyChooseSection />
      </div>
      <div className="content-auto">
        <ProductCard />
      </div>
      <div className="content-auto">
        <WorkSection />
      </div>
      <div className="content-auto">
        <TestimonialSection />
      </div>
      <div className="content-auto">
        <PremiumCTASection />
      </div>
      <div className="content-auto">
        <FaqSection />
      </div>
      <div className="content-auto">
        <ContactSection />
      </div>
    </>
  );
};

export default page;
