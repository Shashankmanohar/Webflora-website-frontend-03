import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "Social Media Marketing Services | Webflora Technologies",
  description: "Dominate your niche with performance-driven social media strategies that build brand authority and drive sustainable growth.",
};

const page = () => {
  const data = servicesData["social-media-marketing"];
  
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
            "serviceType": "Social Media Marketing",
            "description": data.subtext,
            "provider": {
              "@type": "ProfessionalService",
              "name": "Webflora Technologies"
            }
          })
        }}
      />
    </>
  );
};

export default page;
