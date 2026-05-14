import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "Mobile App Development Company in Patna Bihar | Android & iOS Apps",
  description: "Get Android app development, iOS app development, and custom mobile application solutions from Webflora Technologies in Patna, Bihar.",
  keywords: "app development company Patna, mobile app development Bihar, android app developer Patna, iOS app company Bihar",
};

const page = () => {
  const data = servicesData["app-development"];
  
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
            "serviceType": "App Development",
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
