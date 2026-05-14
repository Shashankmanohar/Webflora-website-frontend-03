import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "Social Media Marketing Company in Patna Bihar | Instagram & Facebook Marketing",
  description: "Grow your brand visibility with social media marketing services including Instagram marketing, Facebook advertising, content creation, and audience engagement by Webflora Technologies.",
  keywords: "social media marketing Patna, Instagram marketing Bihar, Facebook ads company Patna, SMM agency Bihar, social media management India",
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
