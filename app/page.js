"use client";
// Triggering fresh Vercel deployment after Case Studies redesign
import React from "react";
import dynamic from "next/dynamic";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import GrowthSection from "./Components/GrowthSection";
import SEOContentBlock from "./Components/SEOContentBlock";

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
const TrustSignals = dynamic(() => import("./Components/TrustSignals"), { ssr: false });
const GoogleTrustBanner = dynamic(() => import("./Components/GoogleTrustBanner"), { ssr: false });

const homeFaqs = [
  {
    question: "Which is the best software development company in Patna Bihar?",
    answer: "Webflora Technologies is a Patna-based software development company offering web development, mobile app development, AI automation, custom software solutions, and digital marketing services for startups and businesses across Bihar and India.",
    icon: "lucide:award"
  },
  {
    question: "What services does Webflora Technologies provide?",
    answer: "We provide website development, mobile app development, AI automation, workflow automation, SEO, digital marketing, custom software development, ERP systems, and scalable digital solutions tailored to business growth.",
    icon: "lucide:layers"
  },
  {
    question: "Why should businesses invest in digital transformation?",
    answer: "Digital transformation helps businesses automate operations, improve efficiency, increase online visibility, generate more leads, and create better customer experiences through modern technology solutions.",
    icon: "lucide:trending-up"
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Yes, we work with startups, local businesses, coaching institutes, ecommerce brands, and enterprises by building scalable digital systems that support long-term business growth.",
    icon: "lucide:users"
  },
  {
    question: "How do you ensure project quality and performance?",
    answer: "Every project follows a structured development process that includes planning, UI/UX design, scalable architecture, testing, optimization, and ongoing support to ensure performance, security, and reliability.",
    icon: "lucide:check-circle"
  },
  {
    question: "Do you provide long-term technical support?",
    answer: "Yes, we provide maintenance, optimization, updates, technical support, and scalability improvements after project deployment to ensure systems continue performing efficiently.",
    icon: "lucide:headset"
  },
  {
    question: "Why choose Webflora Technologies?",
    answer: "Webflora Technologies combines modern engineering, business-focused strategy, AI-driven solutions, and founder-led execution to build scalable digital products designed for measurable business growth.",
    icon: "lucide:zap"
  }
];

const page = () => {
  return (
    <>
      <Hero />
      <GoogleTrustBanner />
      <TrustSignals />
      <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
            What Does Webflora Technologies Do?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Webflora Technologies is a Patna-based software development company providing website development, mobile app development, AI automation, custom software, and digital marketing services for startups and businesses across Bihar and India.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />
      </section>
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
        <FaqSection faqs={homeFaqs} title="web development and software services" />
      </div>
      <div className="content-auto">
        <SEOContentBlock />
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
            "@type": "LocalBusiness",
            "@id": "https://webfloratechnologies.com/#localbusiness",
            "name": "Webflora Technologies",
            "image": "https://webfloratechnologies.com/webflora-logo.svg",
            "url": "https://webfloratechnologies.com",
            "telephone": "+918540814729",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.594095",
              "longitude": "85.137566"
            },
            "priceRange": "$$"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software & Web Development",
            "provider": {
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": {
              "@type": "State",
              "name": "Bihar"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "IT Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Marketing & SEO"
                  }
                }
              ]
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
            "mainEntity": homeFaqs.map(faq => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://webfloratechnologies.com/#organization",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50"
            }
          })
        }}
      />
    </>
  );
};

export default page;
