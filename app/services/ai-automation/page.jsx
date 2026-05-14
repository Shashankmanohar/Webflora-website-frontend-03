import React from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { servicesData } from "../data";

export const metadata = {
  title: "AI Automation Company in Patna Bihar | AI Workflow Solutions",
  description: "Automate customer support, lead generation, workflows, and business operations with AI automation services by Webflora Technologies.",
  keywords: "AI automation company Patna, AI solutions Bihar, workflow automation Patna, AI chatbot company Bihar, automation agency India",
};

const page = () => {
  const data = servicesData["ai-automation"];
  
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
            "serviceType": "AI Automation",
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
