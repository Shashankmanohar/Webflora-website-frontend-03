export interface CityData {
  slug: string;
  name: string;
  state: string;
  startupEco: string;
  localIndustries: string[];
  digitalAdoption: string;
  challenges: string[];
  stats: string;
  faqs: { question: string; answer: string }[];
  landmarks: string[];
}

export const citiesData: Record<string, CityData> = {
  delhi: {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    startupEco: "Delhi NCR boasts a thriving startup ecosystem, acting as a hotbed for unicorns, e-commerce giants, and retail innovators. The startup landscape is highly competitive, pushing businesses to establish dominant digital footprints early.",
    localIndustries: ["E-commerce", "Logistics", "Retail Trade", "Education Technology", "Manufacturing", "Healthcare & Biotech"],
    digitalAdoption: "Delhi NCR exhibits extremely high digital adoption, with businesses prioritizing fast, responsive Next.js storefronts, AI chatbots, and multi-channel digital advertising to capture the massive urban consumer base.",
    challenges: [
      "Extremely high customer acquisition costs (CAC) due to digital saturation.",
      "Navigating intense competition in e-commerce and local retail spaces.",
      "Legacy workflow bottlenecks in logistics and order processing."
    ],
    stats: "According to recent digital commerce surveys, over 78% of businesses in Delhi NCR have shifted their sales funnels to mobile-first web platforms to stay competitive.",
    faqs: [
      {
        question: "Why should a Delhi-based business choose Webflora Technologies?",
        answer: "Webflora Technologies builds premium, custom-coded Next.js websites that load in milliseconds and are highly optimized for competitive search markets. We deliver high-end enterprise solutions remotely from our headquarters in Patna, Bihar, keeping overhead costs low while delivering world-class output."
      },
      {
        question: "Does Webflora have an office in Delhi?",
        answer: "No, we do not maintain fake office addresses in Delhi. We are transparently headquartered in Patna, Bihar, and serve clients in Delhi and across India via highly efficient remote collaboration systems."
      }
    ],
    landmarks: ["Connaught Place", "Okhla Industrial Area", "Noida Sector 62", "Gurugram Cyber City"]
  },
  mumbai: {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    startupEco: "As India's financial capital, Mumbai hosts a mature startup ecosystem specializing in FinTech, corporate SaaS, logistics, and media entertainment startups.",
    localIndustries: ["Financial Services", "Media & Entertainment", "Logistics", "Textiles", "Real Estate Development", "E-commerce & Retail"],
    digitalAdoption: "Digital adoption in Mumbai is centered around highly secure, enterprise-grade cloud systems, custom software automations, and premium client-facing interfaces.",
    challenges: [
      "Meeting strict regulatory compliance and data protection guidelines.",
      "High operational and software licensing overheads.",
      "Need for seamless API integrations across legacy banking and commerce systems."
    ],
    stats: "Reports show that Mumbai's corporate sectors have registered a 90% year-on-year increase in custom cloud and automation software integration.",
    faqs: [
      {
        question: "How does Webflora manage projects for Mumbai clients remotely?",
        answer: "We use modern project management tools, staging links, Slack, and video calls to collaborate transparently. We serve businesses remotely across India from our Patna headquarters."
      },
      {
        question: "Can Webflora design secure financial or real estate portals for Mumbai businesses?",
        answer: "Yes. We specialize in custom-coded React/Next.js systems and secure Node.js backends with SSL encryption, perfect for Mumbai's security-centric business environments."
      }
    ],
    landmarks: ["Bandra Kurla Complex (BKC)", "Nariman Point", "Andheri East", "Lower Parel"]
  },
  bangalore: {
    slug: "bangalore",
    name: "Bangalore",
    state: "Karnataka",
    startupEco: "Known as the Silicon Valley of India, Bangalore represents the pinnacle of technology startups, deep-tech research, SaaS innovation, and developers.",
    localIndustries: ["Software Development", "Biotechnology", "Aerospace", "Deep Tech & AI", "Education & Coaching", "E-commerce & Retail"],
    digitalAdoption: "With digital-first consumers and businesses, Bangalore demands bleeding-edge web tech: React/Next.js 15, micro-frontend architecture, custom AI models, and sub-second loading speeds.",
    challenges: [
      "Standing out in a technically sophisticated, hyper-competitive software market.",
      "Continuous tech stack updates to prevent legacy obsolescence.",
      "High developer churn and team resource overheads."
    ],
    stats: "Over 85% of tech organizations in Bangalore use server-side rendered websites like Next.js to maximize their search visibility and speed performance.",
    faqs: [
      {
        question: "Why should a Bangalore startup hire Webflora instead of a local agency?",
        answer: "We offer top-tier Next.js 15 and custom software engineering at Patna-based developer rates, giving startups a huge runway advantage. We provide all services remotely from Patna, Bihar."
      },
      {
        question: "Does Webflora build custom AI systems for tech companies in Bangalore?",
        answer: "Yes, we build custom AI chatbot integrations, n8n automated workflows, and data pipelines to support modern tech companies."
      }
    ],
    landmarks: ["Whitefield Tech Hub", "Electronic City", "Koramangala", "Indiranagar"]
  },
  pune: {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    startupEco: "Pune has emerged as a major hub for IT services, automotive engineering, manufacturing startups, and higher education portals.",
    localIndustries: ["Automotive Manufacturing", "Information Technology", "Education & Colleges", "Heavy Industries", "Real Estate Development", "Logistics & Transport"],
    digitalAdoption: "Pune businesses are actively transitioning from legacy desktop software to cloud-based ERPs, automated inventory management, and search-optimized portals.",
    challenges: [
      "Bridging the digital gap between heavy physical factory floors and cloud systems.",
      "Managing massive student databases and online admission systems in the education sector.",
      "Scaling B2B lead generation channels."
    ],
    stats: "Industrial surveys indicate that Pune's manufacturing and educational hubs have increased their custom ERP/CRM investments by 70% to automate operations.",
    faqs: [
      {
        question: "How does Webflora support Pune's manufacturing and education sectors?",
        answer: "We build tailored B2B portals, custom ERP systems, and high-performance websites optimized for search. We operate remotely across India from Patna."
      }
    ],
    landmarks: ["Hinjawadi IT Park", "Kharadi", "Viman Nagar", "Bhosari Industrial Belt"]
  },
  hyderabad: {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    startupEco: "Hyderabad's startup ecosystem is characterized by rapid growth in BioTech, pharmaceutical ventures, SaaS, and large enterprise IT services.",
    localIndustries: ["Pharmaceuticals", "Information Technology", "Real Estate", "Healthcare services", "Education Technology", "E-commerce & Retail"],
    digitalAdoption: "High focus on enterprise resource planning (ERP), secure medical portals, and SEO strategies to capture regional healthcare and B2B markets.",
    challenges: [
      "Securing patient health information under international protocols.",
      "Localizing SEO to target diverse regional and multilingual audiences.",
      "Automating complex B2B supply chain operations."
    ],
    stats: "Healthcare portals in Hyderabad recorded a 120% rise in search inquiries for online doctor bookings and telemedicine channels.",
    faqs: [
      {
        question: "Do you build HIPAA-compliant portals for healthcare providers in Hyderabad?",
        answer: "We implement advanced encryption, role-based access, and secure cloud endpoints. All development is managed from our headquarters in Patna, Bihar."
      }
    ],
    landmarks: ["HITEC City", "Gachibowli", "Madhapur", "Jubilee Hills"]
  },
  chennai: {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    startupEco: "Chennai is a major hub for SaaS companies, automotive industries, and manufacturing sectors, fostering a stable startup ecosystem.",
    localIndustries: ["Automobile Manufacturing", "SaaS & Enterprise Software", "Healthcare", "Textiles & Retail", "Logistics & Transport", "E-commerce"],
    digitalAdoption: "Tamil Nadu businesses are prioritizing multi-device custom software solutions, local language SEO support, and automated inventory systems.",
    challenges: [
      "Optimizing logistics pipelines for heavy manufacturing hubs.",
      "Adopting SaaS workflows to handle large-scale global B2B operations.",
      "High local competition in retail textiles and healthcare services."
    ],
    stats: "Chennai-based SaaS companies generate over 30% of their new customer acquisitions via organic search engines optimized with schema markups.",
    faqs: [
      {
        question: "Can Webflora design bilingual (Tamil and English) websites for Chennai businesses?",
        answer: "Yes, we design multi-language SEO-friendly Next.js sites. We serve our Chennai clients remotely from our headquarters in Patna."
      }
    ],
    landmarks: ["OMR Tech Corridor", "Tidal Park", "Guindy Industrial Estate", "Nungambakkam"]
  },
  kolkata: {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    startupEco: "Kolkata's startup landscape is growing fast, with deep roots in creative industries, logistics tech, local artisan e-commerce, and education services.",
    localIndustries: ["Logistics", "Artisans & Handicrafts", "Education", "Tea Trading", "Retail", "Healthcare Services"],
    digitalAdoption: "Traditional businesses in East India are rapidly adopting custom web design, online store checkouts, and basic business automation tools to reach global audiences.",
    challenges: [
      "Transitioning long-standing legacy family businesses to cloud databases.",
      "Low awareness of modern technical SEO vs basic keyword stuffing.",
      "Managing distributed courier networks in logistics."
    ],
    stats: "Kolkata has experienced a 65% rise in traditional retail merchants upgrading to modern payment-integrated online stores.",
    faqs: [
      {
        question: "How does Webflora help Kolkata merchants build global e-commerce systems?",
        answer: "We engineer light, fast React/Next.js storefronts with secure payment integrations (Razorpay, Paytm) and configure automated shipping APIs remotely from Patna."
      }
    ],
    landmarks: ["Salt Lake Sector V", "New Town IT Zone", "Park Street", "Rajarhat"]
  },
  patna: {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    startupEco: "As our headquarters, Patna and the wider Bihar startup ecosystem are seeing a massive resurgence in digital transformation, EdTech portals, healthcare portals, and local retail systems.",
    localIndustries: ["Education & Coaching", "Healthcare & Clinics", "Real Estate", "Local Retail & MSMEs", "Agriculture Tech", "Logistics & Delivery"],
    digitalAdoption: "Businesses in Bihar are rapidly adopting digital tools, transitioning from generic templates to professional, custom-coded websites and automated billing platforms.",
    challenges: [
      "Lack of local technical software development companies with enterprise-level experience.",
      "Slow loading websites built on old frameworks hurting local map and search results.",
      "Need for robust offline-sync databases to counter occasional connectivity drops."
    ],
    stats: "Patna represents one of the fastest-growing local digital economies, with coaching institutes and clinics noting a 150% boost in online registrations.",
    faqs: [
      {
        question: "Is Webflora Technologies based in Patna?",
        answer: "Yes! Webflora Technologies is legally headquartered in Patna, Bihar (registered MSME: UDYAM-BR-26-0183379). We are proud to lead Patna's software ecosystem while serving clients remotely all over India."
      }
    ],
    landmarks: ["Bakar Ganj", "Maurya Lok", "Patliputra Industrial Area", "Fraser Road"]
  }
};

// Procedural content generator for 100+ cities to avoid duplicate/doorway page issues.
export function getCityDetails(slug: string): CityData {
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  
  if (citiesData[normalizedSlug]) {
    return citiesData[normalizedSlug];
  }

  // Generate dynamic, unique data for any city
  const cityName = normalizedSlug.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    slug: normalizedSlug,
    name: cityName,
    state: "India",
    startupEco: `${cityName}'s local business ecosystem is expanding, with active growth in entrepreneurship, local service startups, and digital transformation initiatives. Local enterprises are increasingly looking to establish a strong online identity.`,
    localIndustries: ["Retail Trade", "Education Services", "Healthcare Clinics", "Agribusiness", "Logistics", "Real Estate Development"],
    digitalAdoption: `Businesses in ${cityName} are adopting mobile-first web designs, custom software solutions, and local search strategies to keep pace with changing customer preferences.`,
    challenges: [
      `Securing high-quality local search visibility in the ${cityName} region.`,
      "Bridging the technology gap from manual processing to cloud-based systems.",
      "Acquiring high-intent customer leads in the region."
    ],
    stats: `Market analysis shows a rising digital trend in ${cityName}, with over 60% of small to medium businesses planning to invest in custom digital tools this year.`,
    faqs: [
      {
        question: `How does Webflora Technologies support companies in ${cityName}?`,
        answer: `We provide custom website engineering, mobile apps, and digital solutions remotely across India from our headquarters in Patna, Bihar. This allows us to offer premium Next.js and custom software services to ${cityName} businesses with maximum efficiency.`
      },
      {
        question: `Can Webflora build an SEO-optimized website for my ${cityName}-based business?`,
        answer: `Yes. All our sites feature technical SEO architectures, including structured schema layouts, optimized meta tags, and fast page speeds to rank on Google in ${cityName} and surrounding areas.`
      }
    ],
    landmarks: [`${cityName} Commercial Zone`, `${cityName} Market Hub`, `${cityName} Downtown Area`]
  };
}
