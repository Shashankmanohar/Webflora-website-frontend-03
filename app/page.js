import React from "react";
import Hero from "./Components/HeroSection";
import ClientMarquee from "./Components/ClientMarquee";
import StatsMarquee from "./Components/StatsMarquee";
import HomeSections from "./Components/HomeSections";
import HomeIntroSection from "./Components/HomeIntroSection";
import FaqSection from "./services/components/FaqSection";

/* ── FAQ data (defined server-side, passed as prop to client component) ── */
const homeFaqs = [
  {
    question: "Why is Webflora Technologies considered the top software development company in Patna?",
    answer: "Webflora Technologies is considered the top software company in Patna, Bihar, due to our dedication to high-performance custom code, premium tailor-made designs, and completely transparent flat-rate pricing. We design secure, search-optimized web systems and mobile applications that scale alongside your company, providing 100% source code ownership.",
    icon: "lucide:award"
  },
  {
    question: "What digital services do you provide?",
    answer: "We provide a complete suite of premium digital services: custom enterprise software (ERP/CRM), high-converting website development, native and cross-platform mobile app development, custom AI workflows, and targeted performance digital marketing. Our Patna-based team designs each solution from scratch to match your specific business workflows and scale seamlessly.",
    icon: "lucide:layers"
  },
  {
    question: "Do you offer custom AI and automation integrations?",
    answer: "Yes, we build custom workflow automations and advanced AI integration pipelines using platforms like n8n and modern LLM frameworks (OpenAI, Claude). Our automation solutions eliminate repetitive tasks, resolve manual bottlenecks, and enable your business to run efficiently 24/7 with zero downtime.",
    icon: "lucide:trending-up"
  },
  {
    question: "Why should my business choose Webflora Technologies over off-the-shelf software?",
    answer: "Choosing Webflora Technologies guarantees full source code ownership, founder-led engineering execution, and high-performance custom builds with zero recurring per-user monthly licensing fees. We ensure your custom software aligns perfectly with your specific business rules, avoiding the rigid constraints and high costs of off-the-shelf products.",
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

      {/* Client Marquee - logo slider */}
      <ClientMarquee />

      {/* ── SEO introduction section — statically server-rendered ── */}
      <HomeIntroSection />

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
            "description": "Leading custom software development and website company in Patna, Bihar.",
            "publisher": { 
              "@type": "Organization",
              "@id": "https://webfloratechnologies.com/#organization",
              "name": "Webflora Technologies",
              "url": "https://webfloratechnologies.com"
            },
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
            "provider": { 
              "@type": "Organization",
              "@id": "https://webfloratechnologies.com/#organization",
              "name": "Webflora Technologies",
              "url": "https://webfloratechnologies.com"
            },
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
            "description": "Frequently asked questions about web development, custom software, and digital services from Webflora Technologies.",
            "mainEntity": homeFaqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
              "dateCreated": "2024-05-19T00:00:00+05:30"
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
