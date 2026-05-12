"use client";
// Triggering fresh Vercel deployment after Case Studies redesign
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
const TestimonialSection = dynamic(() => import("./services/components/TestimonialSection"), { ssr: false });
const TeamSection = dynamic(() => import("./Components/TeamSection"), { ssr: false });
const ProductCard = dynamic(() => import("./Components/ProductCard"), { ssr: false });
const VegavanTeaser = dynamic(() => import("./Components/VegavanTeaser"), { ssr: false });

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
        <VegavanTeaser />
      </div>
      <div className="content-auto">
        <TestimonialSection />
      </div>
      <div className="content-auto">
        <TeamSection />
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

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://webfloratechnologies.com/#organization",
            "name": "Webflora Technologies",
            "url": "https://webfloratechnologies.com",
            "logo": "https://webfloratechnologies.com/webflora-logo.svg",
            "description": "Webflora Technologies is a Patna-based digital solutions company offering web development, mobile app development, custom software, digital marketing, and AI automation services for startups and businesses across India.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "India"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "sameAs": [
              "https://www.linkedin.com/company/webfloratechnologies/",
              "https://www.instagram.com/webflora.technologies?igsh=aW5lNnk1Z2g1ZXRq",
              "https://www.facebook.com/profile.php?id=61580014195502"
            ],
            "telephone": "+918540814729",
            "founder": [
              {
                "@type": "Person",
                "name": "Shashank Manohar"
              },
              {
                "@type": "Person",
                "name": "Amitesh Kumar"
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
            "@type": "WebSite",
            "@id": "https://webfloratechnologies.com/#website",
            "url": "https://webfloratechnologies.com",
            "name": "Webflora Technologies",
            "publisher": {
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://webfloratechnologies.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Webflora Technologies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Webflora Technologies is a Patna-based digital solutions company offering web development, mobile app development, custom software, digital marketing, and AI automation services for startups and businesses across India."
                }
              },
              {
                "@type": "Question",
                "name": "What services does Webflora Technologies offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Webflora provides web development, mobile app development, custom software, digital marketing, and AI automation services, helping businesses build fast and scalable digital systems."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Webflora Technologies located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Webflora Technologies is located in Patna, Bihar, India and serves clients across India."
                }
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
            "@type": "Organization",
            "@id": "https://webfloratechnologies.com/#organization",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "20"
            }
          })
        }}
      />
    </>
  );
};

export default page;
