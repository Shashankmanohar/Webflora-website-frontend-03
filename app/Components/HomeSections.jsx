"use client";

/**
 * HomeSections.jsx — Client Component wrapper
 *
 * Next.js 16 prohibits `ssr: false` inside Server Components.
 * This file is a "use client" boundary that owns all viewport-gated
 * dynamic imports. It is rendered once per page load and each section
 * only mounts when scrolled into view via LazySection (IntersectionObserver).
 */

import dynamic from "next/dynamic";
import LazySection from "./LazySection";

/* ── Viewport-gated dynamic imports (ssr:false = client-only, no hydration on load) ── */
const GoogleTrustBanner   = dynamic(() => import("./GoogleTrustBanner"),      { ssr: false });
const TrustSignals        = dynamic(() => import("./TrustSignals"),           { ssr: false });
const GrowthSection       = dynamic(() => import("./GrowthSection"),          { ssr: false });
const ExpertiseSection    = dynamic(() => import("./ExpertiseSection"),       { ssr: false });
const IndustriesSection   = dynamic(() => import("./IndustriesSection"),      { ssr: false });
const ProcessSection      = dynamic(() => import("./ProcessSection"),         { ssr: false });
const TechStackSection    = dynamic(() => import("./TechStackSection"),       { ssr: false });
const ProductCard         = dynamic(() => import("./ProductCard"),            { ssr: false });
const WorkSection         = dynamic(() => import("./WorkSection"),            { ssr: false });
const VegavanTeaser       = dynamic(() => import("./VegavanTeaser"),         { ssr: false });
const TestimonialSection  = dynamic(() => import("../services/components/TestimonialSection"), { ssr: false });
const GoogleReviewsSection= dynamic(() => import("./GoogleReviewsSection"),  { ssr: false });
const TeamSection         = dynamic(() => import("./TeamSection"),            { ssr: false });
const WhyChooseSection    = dynamic(() => import("./WhyChooseSection"),      { ssr: false });
const PremiumCTASection   = dynamic(() => import("./PremiumCTA"),            { ssr: false });
const FaqSection          = dynamic(() => import("../services/components/FaqSection"), { ssr: false });
const SEOContentBlock     = dynamic(() => import("./SEOContentBlock"),        { ssr: false });
const ContactSection      = dynamic(() => import("./ContactSection"),         { ssr: false });

export default function HomeSections({ homeFaqs }) {
  return (
    <>
      {/* Trust signals — appear just below the hero fold */}
      <div className="content-auto">
        <LazySection height="80px">
          <GoogleTrustBanner />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="600px">
          <TrustSignals />
        </LazySection>
      </div>

      {/* Mid-page sections */}
      <div className="content-auto">
        <LazySection height="300px">
          <GrowthSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <ExpertiseSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <IndustriesSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <ProcessSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="200px">
          <TechStackSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <ProductCard />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <WorkSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <VegavanTeaser />
        </LazySection>
      </div>

      {/* Social proof */}
      <div className="content-auto">
        <LazySection height="450px">
          <TestimonialSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="350px">
          <GoogleReviewsSection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <TeamSection />
        </LazySection>
      </div>

      {/* CTA + FAQ + Contact */}
      <div className="content-auto">
        <LazySection height="300px">
          <PremiumCTASection />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="500px">
          <FaqSection faqs={homeFaqs} title="web development and software services" />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="400px">
          <SEOContentBlock />
        </LazySection>
      </div>
      <div className="content-auto">
        <LazySection height="500px">
          <ContactSection />
        </LazySection>
      </div>
    </>
  );
}
