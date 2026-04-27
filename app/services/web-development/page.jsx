import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "Web Development Services | Webflora Technologies",
  description: "High-performance, SEO-optimized web development services in Patna, Bihar. We build fast, scalable websites using Next.js, React, and modern UI/UX design.",
  keywords: "Web Development, Next.js, React, SEO, Patna, Bihar, Web Design, Performance, Scalable Websites",
};

const page = () => {
  const data = servicesData["web-development"];
  
  return (
    <>
      <ServiceTemplate data={data} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.title,
            "serviceType": "Web Development",
            "description": data.subtext,
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies",
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": "India"
          })
        }}
      />
    </>
  );
};

export default page;
