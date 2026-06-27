import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { service: serviceSlug } = await params;
  const service = servicesData[serviceSlug];
  if (!service) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/services/${serviceSlug}`;

  return {
    title: service.seoTitle || `${service.title} Services | Webflora Technologies`,
    description: service.seoDescription || service.subtext,
    keywords: service.seoKeywords || `${service.title}, Next.js, React, SEO, Patna, Bihar, Web Design, Performance`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.title,
      description: service.subtext,
      url: url,
      siteName: "Webflora Technologies",
      images: [
        {
          url: `${baseUrl}/title-logo.png`,
          width: 512,
          height: 512,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.subtext,
      images: [`${baseUrl}/title-logo.png`],
    },
  };
}

export default async function ServicePage({ params }) {
  const { service: serviceSlug } = await params;
  const data = servicesData[serviceSlug];
  
  if (!data) {
    notFound();
  }
  
  return (
    <>
      <ServiceTemplate data={data} />
      
      {/* Service Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.title,
            "serviceType": data.title,
            "description": data.subtext,
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies",
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${data.title} Catalog`,
              "itemListElement": data.solutions.map((s, i) => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": s
                }
              }))
            }
          })
        }}
      />
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
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://webfloratechnologies.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data.title,
                "item": `https://webfloratechnologies.com/services/${serviceSlug}`
              }
            ]
          })
        }}
      />
      {data.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": data.faqs.map(faq => ({
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
      )}
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}
