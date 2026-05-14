import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "Web Development Company in Patna Bihar | Custom Website Development",
  description: "Webflora Technologies provides responsive website development, ecommerce websites, business websites, and custom web applications in Patna, Bihar.",
  keywords: "web development company Patna, website development Bihar, ecommerce website Patna, responsive web design Bihar, custom website company India",
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
