import React from "react";
import IndustryTemplate from "../components/IndustryTemplate";
import { industriesData } from "../data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { industry: industrySlug } = await params;
  const industry = industriesData[industrySlug];
  if (!industry) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/industries/${industrySlug}`;

  return {
    title: `${industry.title} Software Solutions & Digital Transformation | Webflora Technologies`,
    description: industry.seoDescription || industry.subtext,
    keywords: `${industry.title}, Custom Software, ERP systems, Web Design, Patna, Bihar, Digital Transformation`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: industry.title,
      description: industry.subtext,
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
      title: industry.title,
      description: industry.subtext,
      images: [`${baseUrl}/title-logo.png`],
    },
  };
}

export default async function IndustryPage({ params }) {
  const { industry: industrySlug } = await params;
  const data = industriesData[industrySlug];
  
  if (!data) {
    notFound();
  }
  
  return (
    <>
      <IndustryTemplate data={data} />
      
      {/* Industry Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${data.title} Digital Transformation Services`,
            "serviceType": `${data.title} Technology Solutions`,
            "description": data.subtext,
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies",
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": `${data.title} Solutions Catalog`,
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
                "name": "Industries",
                "item": "https://webfloratechnologies.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": data.title,
                "item": `https://webfloratechnologies.com/industries/${industrySlug}`
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
  return Object.keys(industriesData).map((industry) => ({
    industry: industry,
  }));
}
