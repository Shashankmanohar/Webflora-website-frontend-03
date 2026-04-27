import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "App Development Services | Webflora Technologies",
  description: "Create seamless mobile experiences with our expert React Native and Flutter development services. High-performance apps for iOS and Android.",
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
