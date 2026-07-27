import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";
import { notFound } from "next/navigation";
import {
  buildServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildItemListSchema,
  buildOfferSchema,
  toGraphSchema
} from "../../lib/schemas";

export async function generateMetadata({ params }) {
  const { service: serviceSlug } = await params;
  const service = servicesData[serviceSlug];
  if (!service) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/it-company-in-patna/${serviceSlug}`;
  const shortDesc = service.seoDescription || (service.subtext ? service.subtext.slice(0, 155) + "..." : "");

  return {
    title: service.seoTitle || `${service.title} Services | Webflora Technologies`,
    description: shortDesc,
    keywords: service.seoKeywords || `${service.title}, Next.js, React, SEO, Patna, Bihar, Web Design, Performance`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.title,
      description: shortDesc,
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
      description: shortDesc,
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
      
      {/* Service Subpage JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toGraphSchema([
              buildServiceSchema({
                name: data.title,
                serviceType: data.title,
                description: data.subtext
              }),
              buildWebPageSchema({
                name: data.title,
                description: data.subtext.slice(0, 150) + "...",
                url: `https://webfloratechnologies.com/it-company-in-patna/${serviceSlug}`
              }),
              buildBreadcrumbListSchema([
                { name: "Home", url: "/" },
                { name: "IT Company In Patna", url: "/it-company-in-patna" },
                { name: data.title, url: `/it-company-in-patna/${serviceSlug}` }
              ]),
              buildItemListSchema(
                (data.solutions || []).map(s => ({ name: s, url: `/it-company-in-patna/${serviceSlug}` }))
              ),
              ...(data.faqs ? [buildFAQPageSchema(data.faqs)] : [])
            ])
          )
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
