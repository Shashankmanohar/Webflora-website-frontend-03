import React from "react";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import ExpertiseSection from "./Components/ExpertiseSection";
import ProcessSection from "./Components/ProcessSection";
import TechStackSection from "./Components/TechStackSection";
import GrowthSection from "./Components/GrowthSection";
import WhyChooseSection from "./Components/WhyChooseSection";
import WorkSection from "./Components/WorkSection";
import PremiumCTASection from "./Components/PremiumCTA";
import ContactSection from "./Components/ContactSection";
import FooterSection from "./Components/FooterSection";
import FaqSection from "./services/components/FaqSection";
import TestimonialSection from "./services/components/TesimonialSection";
import ProductCard from "./Components/ProductCard";

const page = () => {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <GrowthSection />
      <ExpertiseSection />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
      <ProductCard />
      <WorkSection />
      <TestimonialSection />
      <PremiumCTASection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export default page;
