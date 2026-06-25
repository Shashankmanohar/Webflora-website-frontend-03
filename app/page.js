import React from "react";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import HomeSections from "./Components/HomeSections";
import HomeIntroSection from "./Components/HomeIntroSection";
import FaqSection from "./services/components/FaqSection";

/* ── FAQ data (defined server-side, passed as prop to client component) ── */
const homeFaqs = [
  {
    question: "Why is Webflora Technologies considered the top software development company in Patna?",
    answer: "Webflora Technologies stands out due to our commitment to high-performance code, tailor-made designs, and transparent flat-rate pricing. We build secure, search-optimized web and mobile systems that scale alongside your company.",
    icon: "lucide:award"
  },
  {
    question: "What digital services do you provide?",
    answer: "We offer a complete suite of tech services: custom enterprise software (ERP/CRM), high-converting website development, native and cross-platform mobile apps (Android & iOS), custom AI workflow automations, and targeted performance digital marketing.",
    icon: "lucide:layers"
  },
  {
    question: "Do you offer custom AI and automation integrations?",
    answer: "Yes, we design smart workflow automations and custom AI pipelines using platforms like n8n and API frameworks (OpenAI, Claude). We help businesses eliminate manual bottlenecks and operate 24/7.",
    icon: "lucide:trending-up"
  },
  {
    question: "Why should my business choose Webflora Technologies over off-the-shelf software?",
    answer: "We offer complete source code ownership, founder-led execution, and high-performance custom builds with zero monthly per-user licensing fees. This ensures your systems conform to your business rules, not the other way around.",
    icon: "lucide:check-circle"
  },
  {
    question: "Do you support startups and local businesses in Bihar?",
    answer: "Yes, we partner closely with local startups, clinics, institutes, and businesses in Patna, Muzaffarpur, Gaya, and across Bihar, helping them digitize operations and grow their online presence.",
    icon: "lucide:users"
  },
  {
    question: "Do you provide long-term technical support?",
    answer: "Absolutely. We offer complete post-launch support including server management, regular security updates, local SEO health checks, and feature scaling support for all our custom builds.",
    icon: "lucide:headset"
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
            Driving Digital Transformation
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Webflora Technologies is the premier software company in Patna, Bihar, offering top-tier website design, custom software applications, mobile apps, and digital marketing. We engineer custom solutions to automate your workflows, maximize your search engine rankings, and scale your business growth from Patna, Bihar, to all over India.
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
          <FaqSection faqs={homeFaqs} title="home" />
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
            "description": "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software development, website development, mobile app development, performance digital marketing, and AI automation solutions.",
            "telephone": "+918540814729",
            "email": ["hello@webfloratechnologies.com", "info@webfloratechnologies.com"],
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
              "website company", "software company", "mobile app company",
              "digital marketing", "AI automation", "Web Development",
              "Website Development", "Mobile App Development",
              "AI Automation Services", "SEO Services", "Digital Marketing Services",
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
            "description": "Webflora Technologies is the leading software company in Patna, Bihar, offering custom software development, website development, mobile app development, digital marketing, and AI automation workflows.",
            "image": "https://webfloratechnologies.com/webflora-logo.svg",
            "url": "https://webfloratechnologies.com",
            "telephone": "+918540814729",
            "email": ["hello@webfloratechnologies.com", "info@webfloratechnologies.com"],
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
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Company Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Company Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Company Development" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation" } },
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
      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              }
            ]
          })
        }}
      />
    </>
  );
}
