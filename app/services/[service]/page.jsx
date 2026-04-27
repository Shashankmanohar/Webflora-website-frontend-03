import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const service = servicesData[params.service];
  if (!service) return {};

  return {
    title: `${service.title} Services | Webflora Technologies`,
    description: service.subtext,
    keywords: `${service.title}, Next.js, React, SEO, Patna, Bihar, Web Design, Performance`,
  };
}

export default function ServicePage({ params }) {
  const data = servicesData[params.service];
  
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
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((service) => ({
    service: service,
  }));
}
