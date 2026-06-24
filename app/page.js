import React from "react";
import Hero from "./Components/HeroSection";
import StatsMarquee from "./Components/StatsMarquee";
import HomeSections from "./Components/HomeSections";
import HomeIntroSection from "./Components/HomeIntroSection";
import FaqSection from "./services/components/FaqSection";

/* ── FAQ data (defined server-side, passed as prop to client component) ── */
const homeFaqs = [
  {
    question: "Which is the best software company and website company in Patna Bihar?",
    answer: "Webflora Technologies is the leading registered software company and website company in Patna, Bihar, offering custom software, custom website development, mobile app development, performance digital marketing, and AI automation for startups and enterprises across India.",
    icon: "lucide:award"
  },
  {
    question: "What services does your mobile app company and software company provide?",
    answer: "As a full-service software company and mobile app company, we provide custom software development, Android & iOS mobile app development (React Native & Flutter), professional website development (Next.js & React), performance digital marketing (SEO & lead generation), and custom AI automation solutions.",
    icon: "lucide:layers"
  },
  {
    question: "Do you offer digital marketing and AI automation services?",
    answer: "Yes, we are a premium digital marketing agency and AI automation company. We run performance-focused SEO and ad campaigns, and build custom AI workflow automations (using tools like n8n and OpenAI/Claude APIs) to streamline your sales and operations.",
    icon: "lucide:trending-up"
  },
  {
    question: "Why should my business partner with Webflora Technologies?",
    answer: "Whether you need a reliable website company, software company, mobile app company, digital marketing partner, or AI automation builder, we offer founder-led execution, high-performance code, and transparent flat-rate pricing to scale your business operations.",
    icon: "lucide:check-circle"
  },
  {
    question: "Do you support startups and local businesses in Bihar?",
    answer: "Yes, we partner closely with local startups, coaching institutes, clinics, and businesses in Patna, Muzaffarpur, Gaya, and all of Bihar, providing scalable website development, mobile app builds, and localized digital marketing solutions.",
    icon: "lucide:users"
  },
  {
    question: "Do you provide long-term support for software and apps?",
    answer: "Yes, Webflora Technologies provides comprehensive technical support, regular security updates, server maintenance, SEO health audits, and future scaling upgrades for all custom software, websites, and mobile applications.",
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
            Your Trusted Software & Website Company in Patna
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            Webflora Technologies is the premier software company in Bihar and the leading website company in India, offering top-tier website design, custom software applications, mobile apps, and digital marketing. We engineer custom solutions to automate your workflows, maximize your search engine rankings, and scale your business growth from Patna, Bihar, to all over India.
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
            "description": "Webflora Technologies is a software company, website company, mobile app company, digital marketing agency, and AI automation company based in Patna Bihar offering custom software development, website development, mobile app development, performance digital marketing, and AI automation workflows.",
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
            "description": "Webflora Technologies is a software company, website company, mobile app company, digital marketing agency, and AI automation company in Patna Bihar.",
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
    </>
  );
}
