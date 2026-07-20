import React from "react";
import { getCityDetails, citiesData } from "../../../data/cities";
import { servicesData } from "../../../data/services";
import { notFound } from "next/navigation";
import LocationHero from "../../../components/locations/LocationHero";
import TrustStrip from "../../../components/locations/TrustStrip";
import Breadcrumb from "../../../components/locations/Breadcrumb";
import IndustrySection from "../../../components/locations/IndustrySection";
import FAQ from "../../../components/locations/FAQ";
import CTA from "../../../components/locations/CTA";
import Process from "../../../components/locations/Process";
import TechnologySection from "../../../components/locations/TechnologySection";
import RelatedCities from "../../../components/locations/RelatedCities";
import RelatedServices from "../../../components/locations/RelatedServices";
import ContactForm from "../../../components/locations/ContactForm";
import ServiceCard from "../../../components/locations/ServiceCard";
import WorkSection from "../../Components/WorkSection";
import { Icon } from "@iconify/react";
import ClientMarquee from "../../Components/ClientMarquee";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(citiesData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityDetails(citySlug);
  if (!city) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/locations/${citySlug}`;
  const title = `Software & Digital Solutions Company in ${city.name} | Webflora Technologies`;
  const description = `Looking for top-tier digital transformation in ${city.name}? Webflora Technologies provides website development, mobile apps, and custom software systems remotely across India from our Patna HQ.`;
  const keywords = citySlug === "patna"
    ? "IT company in Patna, software company in Patna, web development company in Patna, website design company in Patna, digital marketing agency in Patna, software development Bihar, Webflora Technologies Patna"
    : `IT company in ${city.name}, software company in ${city.name}, web development company in ${city.name}, website design company in ${city.name}, digital marketing agency in ${city.name}, Webflora Technologies ${city.name}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
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
      title,
      description,
      images: [`${baseUrl}/title-logo.png`],
    },
  };
}

export default async function CityLandingPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityDetails(citySlug);

  if (!city) {
    notFound();
  }

  const allServices = Object.values(servicesData);
  
  // Synthesizing unique local content paragraphs for each city
  const localIntro = `Our engagement in ${city.name} is built on a simple premise: delivering elite-grade software engineering without the local agency markups. ${city.startupEco} From our centralized engineering headquarters in Patna, Bihar, we collaborate remotely with teams across ${city.name} (including commercial hubs like ${city.landmarks.slice(0, 3).join(", ")}) to ship high-performance Next.js systems, mobile applications, and custom automation.`;
  
  const digitalTransformationWhy = `In today's digital climate, local companies in ${city.name} must modernize to survive. ${city.digitalAdoption} Operating with outdated web designs or disjointed manual processes restricts business scalability. By building secure web platforms, automating routine workflows, and employing dynamic local SEO systems, local brands in ${city.name} (from startups in ${city.landmarks[0]} to traditional offices in ${city.landmarks[1]}) can acquire high-value regional leads and optimize operational efficiency.`;

  const remoteDeliveryExplanation = `We believe in absolute transparency. Instead of listing fake local offices or inflating our rates to pay for premium city rents, we run all operations from our registered headquarters in Patna, Bihar (MSME ID: UDYAM-BR-26-0183379). Our remote workflow is optimized for zero friction, utilizing shared Git repositories, daily staging links, and direct Slack coordinates to integrate seamlessly with your local operations.`;

  const localFaqs = [
    ...city.faqs,
    {
      question: `How does Webflora serve businesses in ${city.name} without a physical local office?`,
      answer: "We employ advanced remote collaboration pipelines, real-time messaging channels, and daily staging deployments to keep our partners updated. We are transparently headquartered in Patna, Bihar, and provide premium development services remotely across India, passing the office overhead savings directly to our clients."
    },
    {
      question: `Are the pricing packages for ${city.name} businesses subject to monthly fees?`,
      answer: "No. Unlike proprietary page builders that lock you in, our custom Next.js websites and custom software architectures offer 100% source code ownership with zero recurring user subscription fees."
    },
    {
      question: `How do we communicate and track project progress remotely from ${city.name}?`,
      answer: "We establish a dedicated Slack channel or WhatsApp group for instant communication. In addition, we schedule weekly demo calls via Google Meet and share daily staging links so you can see live updates as we write code."
    },
    {
      question: `What is the typical timeline for website development for a ${city.name} project?`,
      answer: "A standard landing page or corporate website takes 2 to 3 weeks, while complex custom web portals or custom e-commerce systems can take 4 to 8 weeks depending on the technical scope."
    },
    {
      question: `Will we have complete ownership of the source code and assets?`,
      answer: "Yes, 100%. Once the project is fully delivered, we transfer complete intellectual property rights, database schemas, and codebase repository access directly to your team."
    },
    {
      question: `Does Webflora build mobile applications for businesses in ${city.name}?`,
      answer: "Yes, we build cross-platform mobile apps for iOS and Android using React Native and Flutter, ensuring native-level performance and smooth integrations."
    },
    {
      question: `How does Webflora handle the security of our custom systems?`,
      answer: "We follow industry-standard security protocols: SSL/TLS encryption, robust database sanitization, strict CORS policies, secured environment variables, and secure API authorization methods."
    },
    {
      question: `Do you optimize websites for local SEO search terms in ${city.name}?`,
      answer: "Yes, absolutely. We implement technical SEO including structured FAQ schemas, semantic HTML5, XML sitemaps, fast page loading optimization, and targeted meta descriptions to boost your ranking on local Google searches."
    },
    {
      question: `What post-launch support and maintenance do you offer?`,
      answer: "We provide 30 to 90 days of free post-launch support depending on the project plan. Following that, we offer monthly SLA packages covering server monitoring, database backups, security patches, and regular UI adjustments."
    },
    {
      question: `Can you integrate third-party payment gateways for our online store?`,
      answer: "Yes, we integrate popular payment platforms such as Razorpay, Stripe, Paytm, and custom banking APIs, allowing seamless transactions for your users."
    },
    {
      question: `How do you manage client revisions and layout changes?`,
      answer: "We present complete visual prototypes in Figma first. Once you review and approve the design layout, our team proceeds to the coding phase, minimizing changes during development."
    },
    {
      question: `Why choose Webflora over a local freelancer in ${city.name}?`,
      answer: "We offer professional software agency standards, type-safe Next.js code quality, and structured development lifecycle processes, ensuring your software is scalable and future-proof without a high local agency price tag."
    }
  ];

  // Dynamic lists of tech stack and process steps for city pages
  const cityTechStack = [
    { name: "Next.js 15", icon: "logos:nextjs-icon" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "AWS Cloud", icon: "logos:aws" },
    { name: "Figma", icon: "logos:figma" }
  ];

  const cityProcessSteps = [
    { title: "Strategic Audit", desc: `We analyze the competitor landscape and high-intent search volumes in ${city.name}.` },
    { title: "Bespoke UI Design", desc: "Crafting modern layouts aligned with your brand values." },
    { title: "Type-Safe Coding", desc: "Developing fast, scalable components using Next.js and Tailwind." },
    { title: "Cloud Rollout", desc: "Deploying on serverless cloud systems with continuous performance monitoring." }
  ];

  const breadcrumbItems = [
    { name: "Locations", href: "/locations" },
    { name: city.name }
  ];

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/locations/${citySlug}`;

  // Structured schemas
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Webflora Technologies",
    "url": baseUrl,
    "logo": `${baseUrl}/title-logo.png`,
    "sameAs": [
      "https://www.linkedin.com/company/webflora-technologies"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#localbusiness`,
    "name": `Webflora Technologies ${city.name}`,
    "url": url,
    "image": `${baseUrl}/title-logo.png`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NMCH College Road, Saketpuri",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800016",
      "addressCountry": "IN"
    },
    "telephone": "+918540814729",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": city.name
    },
    "description": `Webflora Technologies provides website development, mobile apps, and custom software systems remotely to ${city.name} from our headquarters in Patna, Bihar.`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5.0,
      "bestRating": 5,
      "worstRating": 1,
      "reviewCount": 48
    },
    "review": city.testimonials.map(t => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": t.feedback
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${baseUrl}/locations`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name,
        "item": url
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-black text-white selection:bg-[#FF3B00] selection:text-white min-h-screen">
      <LocationHero 
        badge={`Top Software Agency serving ${city.name}`}
        title="Webflora Technologies in"
        gradientTitle={city.name}
        description={`Scale your operations and dominate search visibility with our premium Next.js systems, mobile apps, and digital solutions. Remote execution from Patna, Bihar.`}
        stats={[
          { value: "99.9%", label: "Uptime Target" },
          { value: "Sub-1s", label: "Page Loading" },
          { value: "100%", label: "Code Ownership" }
        ]}
        techStack={cityTechStack}
      />

      <ClientMarquee />

      <TrustStrip />

      {/* Local Statistics & Performance Metrics Dashboard */}
      {city.businessStats && city.businessStats.length > 0 && (
        <section className="py-12 px-6 bg-zinc-950 border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left items-center justify-between">
              <div>
                <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-widest block mb-2">
                  Market Dynamics
                </span>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  {city.name} Stats
                </h3>
              </div>
              {city.businessStats.map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col justify-center">
                  <span className="text-3xl md:text-4xl font-black text-[#FF3B00] tracking-tight">{stat.value}</span>
                  <span className="text-xs text-gray-400 font-light mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About & Remote Model Grid */}
      <section className="py-24 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,59,0,0.02),transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-4">
              Operational Strategy
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              How We Partner With {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Local Market Dynamics Card */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#FF3B00]/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF3B00]">
                  <Icon icon="solar:globus-linear" width={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Local Integration</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {localIntro}
                </p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {digitalTransformationWhy}
                </p>
              </div>
            </div>

            {/* Remote Delivery Model Card */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#FF3B00]/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF3B00]">
                  <Icon icon="solar:programming-linear" width={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Our Delivery Model</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {remoteDeliveryExplanation}
                </p>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-[10px] uppercase text-gray-500 tracking-wider space-y-2">
                  <div className="flex justify-between"><span>Operation Hub:</span><span className="text-white">Patna, Bihar</span></div>
                  <div className="flex justify-between"><span>Registry ID:</span><span className="text-white">UDYAM-BR-26-0183379</span></div>
                  <div className="flex justify-between"><span>Source Code:</span><span className="text-white">100% Handover</span></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Local Market Insights & Industry Focus Section */}
      <section className="py-24 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left: Market Insights */}
            <div className="space-y-8">
              <div>
                <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-2">
                  Insights & Trends
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                  Market Insights for {city.name}
                </h2>
              </div>
              <div className="space-y-6">
                {city.marketInsights.map((insight, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-3">
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{insight.title}</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{insight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Industry Focus */}
            <div className="space-y-8">
              <div>
                <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-2">
                  Sectors We Scale
                </span>
                <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                  Industry Focus in {city.name}
                </h2>
              </div>
              <div className="space-y-6">
                {city.industryFocus.map((focus, idx) => (
                  <div key={idx} className="p-6 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-3 relative overflow-hidden group hover:border-[#FF3B00]/20 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight">{focus.name}</h3>
                      <span className="text-xs font-mono text-[#FF3B00] bg-[#FF3B00]/10 px-3 py-1 rounded-full border border-[#FF3B00]/20">{focus.growth}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{focus.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustrySection industries={city.localIndustries} title={city.name} />

      {/* Local Client Stories Section */}
      {city.clientStories && city.clientStories.length > 0 && (
        <section className="py-24 px-6 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-4">
                Local Impact Case Studies
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                Client Stories from {city.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {city.clientStories.map((story, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{story.clientName}</h3>
                        <p className="text-xs text-[#FF3B00] font-mono uppercase tracking-wide mt-1">{story.project}</p>
                      </div>
                      <span className="text-xs font-mono text-green-400 bg-green-950/30 px-3 py-1 rounded-full border border-green-500/20">{story.result}</span>
                    </div>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{story.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Services Section */}
      <section className="py-24 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
              Enterprise Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              Services We Provide in {city.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map(service => (
              <ServiceCard key={service.slug} service={service} citySlug={city.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials Section */}
      {city.testimonials && city.testimonials.length > 0 && (
        <section className="py-24 px-6 bg-black border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.03),transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-4">
                Local Endorsements
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
                What {city.name} Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {city.testimonials.map((t, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 flex flex-col justify-between relative">
                  <div className="space-y-4">
                    <div className="flex text-[#FF3B00] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} icon="solar:star-bold" width={16} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm italic font-light leading-relaxed">
                      "{t.feedback}"
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500 font-light mt-0.5">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits section */}
      <section className="py-24 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-8 text-center">
          <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-widest block">
            Why Partner With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Key Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-3">
              <h3 className="font-bold text-white text-lg">95+ Lighthouse Targets</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">We target sub-second load times using pre-rendered compilation and static assets.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-3">
              <h3 className="font-bold text-white text-lg">No Vendor Lock-In</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">You own 100% of the repository source code and database structures.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-950/40 border border-white/5 space-y-3">
              <h3 className="font-bold text-white text-lg">Transparent HQ Delivery</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">No spoofed office structures. Transparent operations from Patna, Bihar.</p>
            </div>
          </div>
        </div>
      </section>

      <Process steps={cityProcessSteps} />
      <TechnologySection techStack={cityTechStack} />
      
      <WorkSection />
      
      <FAQ faqs={localFaqs} title={city.name} />

      <RelatedServices citySlug={city.slug} />
      <RelatedCities currentCitySlug={city.slug} />

      <CTA 
        title={`Accelerate your business in ${city.name} today`} 
        subtitle="Request a free technical audit and discovery session. We will map your system parameters and provide a comprehensive plan." 
      />

      <ContactForm />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
