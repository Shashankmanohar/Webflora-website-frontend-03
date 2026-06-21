import React from "react";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import HomeSections from "./Components/HomeSections";
import HomeIntroSection from "./Components/HomeIntroSection";
import FaqSection from "./services/components/FaqSection";

/* ── FAQ data (defined server-side, passed as prop to client component) ── */
const homeFaqs = [
  {
    question: "Which is the best software development company in Patna Bihar?",
    answer: "Webflora Technologies is the leading MSME registered software development company in Patna, Bihar (Udyam Registration: UDYAM-BR-26-0183379), offering custom website development, mobile app development, CRM/ERP systems, and AI automation for startups and enterprises across Bihar and India.",
    icon: "lucide:award"
  },
  {
    question: "What services does Webflora Technologies provide?",
    answer: "We provide professional website development using Next.js and React, cross-platform mobile app development using React Native and Flutter, enterprise custom software solutions (scalable ERP & CRM), digital marketing (local SEO & lead generation), and AI workflow automation powered by n8n, Node.js, and Python.",
    icon: "lucide:layers"
  },
  {
    question: "Why should businesses invest in digital transformation?",
    answer: "Digital transformation helps businesses automate operational workflows, eliminate human errors, improve loading speeds, rank higher on Google for local Bihar searches, generate high-intent sales leads, and scale overall revenue through custom-engineered software.",
    icon: "lucide:trending-up"
  },
  {
    question: "Do you work with startups and small businesses in Bihar?",
    answer: "Yes, we partner closely with local startups, small businesses, online retail/ecommerce brands, and coaching institutes in Patna, Muzaffarpur, Gaya, Bhagalpur, and all of Bihar, building scalable digital tools designed to drive measurable business growth.",
    icon: "lucide:users"
  },
  {
    question: "How do you ensure project quality and performance?",
    answer: "We follow a strict founder-led execution methodology, using agile development sprints, enterprise-grade cloud-native security, and precise speed optimization to guarantee 90+ Lighthouse Core Web Vitals performance scores.",
    icon: "lucide:check-circle"
  },
  {
    question: "Do you provide long-term technical support?",
    answer: "Yes, Webflora Technologies provides comprehensive long-term technical support, regular security updates, server maintenance, SEO health audits, and future scalability upgrades after project deployment.",
    icon: "lucide:headset"
  },
  {
    question: "Why choose Webflora Technologies?",
    answer: "We stand out by combining modern full-stack software engineering, business-centric strategies, transparent pricing packages starting at ₹25K, and direct founder-led execution to build robust products that guarantee business scaling.",
    icon: "lucide:zap"
  }
];

/* ── Root Page — Server Component ── */
export default function Page() {
  return (
    <>
      {/* ── Above the fold — statically server-rendered ── */}
      <Hero />

      {/* ── SEO introduction section — statically server-rendered ── */}
      <HomeIntroSection />

      {/* ── SEO text block — server-rendered for crawlers ── */}
      <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter leading-none">
            What Does Webflora Technologies Do?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Webflora Technologies is a Patna-based software development company providing website development, mobile app development, AI automation, custom software, and digital marketing services for startups and businesses across Bihar and India.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 pointer-events-none" />
      </section>

      {/* ── Marquee — static, no JS hydration needed ── */}
      <StatsMarquee />

      {/* ── All viewport-gated client sections ── */}
      <HomeSections 
        homeFaqs={homeFaqs} 
        faqComponent={
          <FaqSection faqs={homeFaqs} title="web development and software services" />
        }
      />

      {/* ── JSON-LD Schemas — server-rendered for SEO ── */}

      {/* MAIN ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "@id": "https://webfloratechnologies.com/#organization",
            "name": "Webflora Technologies",
            "url": "https://webfloratechnologies.com",
            "logo": "https://webfloratechnologies.com/webflora-logo.svg",
            "image": "https://webfloratechnologies.com/webflora-logo.svg",
            "description": "Webflora Technologies is a software development company based in Patna Bihar offering web development, mobile app development, AI automation, SEO, digital marketing, and custom software solutions for startups and businesses across India.",
            "telephone": "+918540814729",
            "email": "hello.webflora@gmail.com",
            "identifier": {
              "@type": "PropertyValue",
              "name": "Udyam Registration Number",
              "value": "UDYAM-BR-26-0183379"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800016",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.594095",
              "longitude": "85.137566"
            },
            "areaServed": { "@type": "Country", "name": "India" },
            "sameAs": [
              "https://www.linkedin.com/company/webfloratechnologies/",
              "https://www.instagram.com/webflora.technologies",
              "https://www.facebook.com/profile.php?id=61580014195502"
            ],
            "founder": [
              { "@type": "Person", "name": "Shashank Manohar" },
              { "@type": "Person", "name": "Amitesh Kumar" }
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+918540814729",
                "contactType": "customer support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+918863081255",
                "contactType": "technical support",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "knowsAbout": [
              "Web Development", "Website Development", "Mobile App Development",
              "AI Automation", "SEO Services", "Digital Marketing",
              "Custom Software Development", "ERP Software Development",
              "React Development", "Next.js Development", "Node.js Development",
              "UI UX Design", "Software Development", "Ecommerce Development"
            ]
          })
        }}
      />

      {/* WEBSITE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://webfloratechnologies.com/#website",
            "url": "https://webfloratechnologies.com",
            "name": "Webflora Technologies",
            "publisher": { "@id": "https://webfloratechnologies.com/#organization" },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://webfloratechnologies.com/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* LOCAL BUSINESS SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://webfloratechnologies.com/#localbusiness",
            "name": "Webflora Technologies",
            "description": "Webflora Technologies is a software development company in Patna Bihar offering web development, mobile app development, AI automation, SEO, and digital marketing services.",
            "image": "https://webfloratechnologies.com/webflora-logo.svg",
            "url": "https://webfloratechnologies.com",
            "telephone": "+918540814729",
            "email": "hello.webflora@gmail.com",
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-19:00",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "NMCH College, Bajar Samiti, New Kunj Colony, Saketpuri",
              "addressLocality": "Patna",
              "addressRegion": "Bihar",
              "postalCode": "800016",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.594095",
              "longitude": "85.137566"
            }
          })
        }}
      />

      {/* SERVICE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development Services",
            "provider": { "@id": "https://webfloratechnologies.com/#organization" },
            "areaServed": { "@type": "Country", "name": "India" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } }
              ]
            }
          })
        }}
      />

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": homeFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
            }))
          })
        }}
      />
    </>
  );
}
