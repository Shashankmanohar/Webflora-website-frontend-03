import React from "react";
import { getCityDetails, citiesData } from "../../../../data/cities";
import { servicesData } from "../../../../data/services";
import { notFound } from "next/navigation";
import LocationHero from "../../../../components/locations/LocationHero";
import TrustStrip from "../../../../components/locations/TrustStrip";
import Breadcrumb from "../../../../components/locations/Breadcrumb";
import FAQ from "../../../../components/locations/FAQ";
import CTA from "../../../../components/locations/CTA";
import Process from "../../../../components/locations/Process";
import Pricing from "../../../../components/locations/Pricing";
import Testimonials from "../../../../components/locations/Testimonials";
import TechnologySection from "../../../../components/locations/TechnologySection";
import RelatedCities from "../../../../components/locations/RelatedCities";
import RelatedServices from "../../../../components/locations/RelatedServices";
import ContactForm from "../../../../components/locations/ContactForm";
import WorkSection from "../../../Components/WorkSection";
import { Icon } from "@iconify/react";
import ClientMarquee from "../../../Components/ClientMarquee";
import { ServiceComparisonWrapper, DetailedArticleWrapper } from "../../../it-company-in-patna/components/ServiceTemplate";

interface Props {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = [];
  
  Object.keys(citiesData).forEach((city) => {
    Object.keys(servicesData).forEach((service) => {
      paths.push({
        city: city,
        service: service,
      });
    });
  });

  return paths;
}

export async function generateMetadata({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityDetails(citySlug);
  const service = servicesData[serviceSlug];
  if (!city || !service) return {};

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/locations/${citySlug}/${serviceSlug}`;
  const title = `${service.headline} in ${city.name} | Webflora Technologies`;
  const description = `Looking for the best ${service.name.toLowerCase()} in ${city.name}? Webflora Technologies engineers premium Next.js apps and software remotely from our Patna HQ. Request a quote!`;

  return {
    title,
    description,
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

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityDetails(citySlug);
  const service = servicesData[serviceSlug];

  if (!city || !service) {
    notFound();
  }

  // Synthesize custom unique content to avoid doorway page penalties and keep copy highly contextual (>70% unique)
  const introPara = `We construct tailored ${service.name.toLowerCase()} systems engineered specifically for ${city.name}'s competitive commerce landscape. With commercial zones like ${city.landmarks.slice(0, 3).join(", ")} undergoing rapid modernization, local businesses require robust platforms that load instantly and rank organically on search results. ${city.startupEco}`;

  const whyDelhiPara = `Building standard templates is a significant liability in ${city.name}'s saturated digital space. ${city.digitalAdoption} Incorporating professional, custom-coded ${service.name.toLowerCase()} helps local brands bypass common hurdles such as ${city.challenges[0].toLowerCase()} and achieve absolute control over their code. By choosing custom React/Next.js architectures, local brands in ${city.name} can double conversion metrics and secure lasting authority in search results.`;

  const remoteDeliveryExplanation = `All development work is led by our core engineering team in Patna, Bihar (MSME registered: UDYAM-BR-26-0183379). We coordinate remotely using shared repositories, staging portals, and direct Slack updates, ensuring zero operational friction and full project alignment from start to deployment.`;

  const detailedArticleData = {
    title: "Governance, Security & SLA Support",
    detailedArticle: {
      title: "Governance, Security & SLA Support",
      sections: [
        {
          title: `Why Modern Businesses Need Custom ${service.name} Solutions`,
          paragraphs: [
            `In today's hyper-competitive digital landscape, relying on off-the-shelf templates or standard builders in ${city.name} is a recipe for stagnation. A custom-engineered ${service.name.toLowerCase()} solution acts as the digital nervous system of your business. It automates repetitive operational workflows, eliminates manual processing errors, and integrates disconnected business components seamlessly.`,
            `Off-the-shelf products often force you to adapt your workflows to their rigid structures. Custom software, however, is built around your specific business logic. Whether you are managing distributors, capturing sales leads, tracking inventories, or running complex calculations, custom-engineered software scales precisely with your growth, giving you a distinct competitive edge in the local and national markets.`
          ]
        },
        {
          title: `Top ${service.name} Company serving ${city.name}`,
          paragraphs: [
            `When searching for the best ${service.name.toLowerCase()} company in ${city.name} or a dedicated partner, you need a team that understands modern next-generation web architectures. Webflora Technologies is recognized for providing premium ${service.name.toLowerCase()} remotely from our Patna engineering headquarters, eliminating expensive local office markups and delivering top-tier performance.`,
            `Our team handles everything from clean design blueprints to full-stack API integration. We serve businesses across ${city.name} with reliable remote execution, daily staging links, and direct communication coordinates so you are always in control of the build.`
          ]
        },
        {
          title: "Advanced Security & Data Privacy Standards We Implement",
          paragraphs: [
            "Security is core to our build process. We leverage static site generation (SSG) which makes our frontend code serverless and virtually immune to standard database hacking attacks. We also configure SSL certificates, secure authentication layers (such as OTP login), role-based permissions, and implement regular security patches to keep your databases safe.",
            "All server endpoints are hidden behind security proxies, and user input is heavily sanitized on both frontend and backend to completely prevent injection threats."
          ]
        },
        {
          title: "Post-Launch System Maintenance & SLA Support",
          paragraphs: [
            `Websites and software are living systems that require regular care. Our comprehensive maintenance services cover regular database backups, automated security scans, platform version updates, content changes, and technical support. This ensures your ${service.name.toLowerCase()} platform operates at 100% uptime with zero downtime, protecting your business operations.`
          ]
        },
        {
          title: "Transparent Pricing Structure & Code Ownership ROI",
          paragraphs: [
            `Our custom basic ${service.name.toLowerCase()} packages start from a transparent ${service.pricing[0]?.price || "₹25,000"}, while complex custom applications are quoted based on specific feature requirements. By choosing our custom code, you gain complete source code ownership and host it on your own serverless cloud accounts. This keeps your recurring licensing fees close to zero, providing a high return on investment (ROI) that helps your business scale sustainably.`
          ]
        }
      ]
    }
  };

  const localizedFaqs = [
    {
      question: `What is the cost of ${service.name.toLowerCase()} for a business in ${city.name}?`,
      answer: `Our custom ${service.name.toLowerCase()} setups start from a transparent base rate of ${service.pricing[0]?.price || "₹25,000"}. Since we work remotely from our Patna headquarters, we eliminate heavy local office rent markups, providing premium engineering at high efficiency.`
    },
    {
      question: `Do you provide technical support for ${service.name.toLowerCase()} in ${city.name}?`,
      answer: `Yes. We offer robust maintenance SLAs covering cloud server logs, security upgrades, database backups, and regular code optimization remotely across India.`
    },
    {
      question: `How long does it take to deploy a custom ${service.name.toLowerCase()} project in ${city.name}?`,
      answer: `Typically, a standard ${service.name.toLowerCase()} rollout takes 2 to 4 weeks. For complex custom integrations, advanced database schemas, or full enterprise systems, the timeline may extend to 6 to 8 weeks.`
    },
    {
      question: `Why should our ${city.name}-based business choose custom ${service.name} over WordPress/Wix templates?`,
      answer: `Custom-coded ${service.name} applications built with Next.js deliver sub-second loading speeds, clean semantic layouts, high conversion optimization, and no vendor lock-in or recurring builder subscription fees.`
    },
    {
      question: `How does Webflora optimize ${service.name} for search visibility (SEO) in ${city.name}?`,
      answer: `We integrate advanced schema markups, optimize page speed performance indices, build responsive HTML structures, structure headings hierarchically, and configure automatic sitemaps targeting local search intents.`
    },
    {
      question: `Will the ${service.name.toLowerCase()} solution be fully mobile-responsive?`,
      answer: "Yes, absolutely. We design mobile-first layout breakpoints, ensuring a seamless user experience across smartphones, tablets, laptops, and wide monitors."
    },
    {
      question: `Can you integrate third-party APIs and custom databases into our system?`,
      answer: "Yes. We possess extensive experience integrating REST/GraphQL APIs, CRM platforms, ERP systems, SMS alerts, and relational databases like PostgreSQL, MySQL, and MongoDB."
    },
    {
      question: `Do you assist with hosting deployment and domain mapping for ${city.name} businesses?`,
      answer: "Yes, we handle the complete server deployment pipeline on secure platforms like Vercel, AWS, or Netlify, and point your DNS configurations to ensure absolute uptime."
    },
    {
      question: `What technologies are employed in your custom ${service.name.toLowerCase()} stack?`,
      answer: "We utilize modern technologies including Next.js 15, React, TypeScript, Tailwind CSS, Node.js, and Postgres to guarantee speed, safety, and modern interface designs."
    },
    {
      question: `How are security protocols managed for custom ${service.name.toLowerCase()} platforms?`,
      answer: "We deploy secure authorization systems (JWT, NextAuth), implement parameterized database queries to prevent SQL injections, and mandate HTTPS/SSL encryption across all server routes."
    },
    {
      question: `Can we easily scale our ${service.name.toLowerCase()} application as our business grows?`,
      answer: "Yes. Our component-driven architecture is built for horizontal scaling. We structure clean, modular codebases so you can easily append new features and database collections."
    },
    {
      question: `Do you provide an admin dashboard or CMS to manage content?`,
      answer: "Yes, we build custom admin panels or integrate headless CMS platforms (like Sanity, Strapi, or payloads) so non-technical staff can update texts, products, and images easily."
    },
    ...service.faqs
  ];

  const breadcrumbItems = [
    { name: "Locations", href: "/locations" },
    { name: city.name, href: `/locations/${city.slug}` },
    { name: service.name }
  ];

  const baseUrl = "https://webfloratechnologies.com";
  const url = `${baseUrl}/locations/${city.slug}/${service.slug}`;

  // Structured schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    "name": `${service.name} in ${city.name}`,
    "image": `${baseUrl}/title-logo.png`,
    "description": `Premium ${service.name.toLowerCase()} services serving ${city.name} remotely from Patna, Bihar.`,
    "brand": {
      "@type": "Brand",
      "name": "Webflora Technologies"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": service.pricing[0]?.price.replace(/[^0-9]/g, "") || "25000",
      "highPrice": "500000",
      "offerCount": service.solutions?.length ? String(service.solutions.length) : "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "48"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sahil Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Our new website built by Webflora has been live for three months and not a single bug so far. Communication was clear and consistent throughout the entire project. Cannot recommend Webflora Technologies enough."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Balwant Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Webflora built our app with a level of polish you usually only see from big city studios. They were responsive on WhatsApp, email and calls whenever we needed answers."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sonu Kumar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "We had an app idea sitting on paper for a year and Webflora turned it into a real product in months. Their team listened carefully to what we actually needed instead of pushing a template solution."
      }
    ]
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
        "item": `${baseUrl}/locations/${city.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": service.name,
        "item": url
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localizedFaqs.map(faq => ({
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
        badge={`${service.name} Expert in ${city.name}`}
        title={`${service.name} Company in`}
        gradientTitle={city.name}
        description={`Accelerate growth with our custom-engineered ${service.name.toLowerCase()} systems. Designed for extreme page speeds and built-in search rank indexes.`}
        stats={[
          { value: "95+", label: "Lighthouse Speed" },
          { value: "100%", label: "Source Code Ownership" },
          { value: "Patna", label: "Operations HQ" }
        ]}
        techStack={service.techStack}
      />

      <ClientMarquee />

      <TrustStrip />

      {/* About & Remote Model Grid */}
      <section className="py-24 px-6 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,59,0,0.02),transparent_40%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF3B00] font-mono text-[10px] font-black uppercase tracking-[0.25em] block mb-4">
              Strategic Partnership
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              {service.name} in {city.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Local Integration Card */}
            <div className="lg:col-span-7 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#FF3B00]/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF3B00]">
                  <Icon icon="solar:globus-linear" width={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Local Integration</h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {introPara}
                </p>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                  {whyDelhiPara}
                </p>
              </div>
            </div>

            {/* Remote Delivery Model Card */}
            <div className="lg:col-span-5 p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/40 border border-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#FF3B00]/30 transition-all duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF3B00]">
                  <Icon icon="solar:programming-linear" width={24} />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">Our Remote Model</h3>
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

      {/* Benefits section */}
      <section className="py-24 px-6 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FF3B00] font-black uppercase tracking-[0.25em] mb-4 block text-xs">
              Value Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-none">
              Benefits of our {service.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-zinc-950/40 border border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white text-lg">{benefit.title}</h3>
                  <span className="text-[#FF3B00] font-mono text-xs">{benefit.stat}</span>
                </div>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Webflora Technologies */}
      <section className="relative py-24 px-6 bg-black overflow-hidden border-t border-white/5">
        {/* Background Soft Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          <div className="text-center space-y-4">
            <span className="text-[#FF3B00] font-mono text-xs font-black uppercase tracking-widest block bg-[#FF3B00]/10 px-3 py-1 rounded-full w-fit mx-auto border border-[#FF3B00]/20">
              Why Webflora
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight">
              Why Choose <span className="bg-gradient-to-r from-[#FF3B00] via-[#FF6A00] to-[#FF8C00] bg-clip-text text-transparent">Webflora Technologies</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto font-light">
              We combine modern engineering, bespoke design, and data-driven optimization to build high-converting digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
            {[
              {
                icon: "solar:bolt-line-duotone",
                title: "⚡ Fast & Scalable Solutions",
                desc: "We build high-performance digital solutions that are fast, scalable, and ready to grow with your business."
              },
              {
                icon: "solar:target-outline",
                title: "🎯 Business-Focused Approach",
                desc: "Every project is designed to solve real business challenges and deliver measurable results."
              },
              {
                icon: "solar:palette-round-line-duotone",
                title: "🎨 Custom-Built Solutions",
                desc: "Every website, app, and software is tailored to your business goals—never built from generic templates."
              },
              {
                icon: "solar:ranking-line-duotone",
                title: "📈 SEO & AI Ready",
                desc: "Built with technical SEO, structured data, Core Web Vitals, and AI search optimization from day one."
              },
              {
                icon: "solar:shield-check-line-duotone",
                title: "🔒 Secure & Reliable",
                desc: "Enterprise-grade security, clean code, and rigorous testing ensure long-term reliability."
              },
              {
                icon: "solar:smartphone-line-duotone",
                title: "📱 Responsive Across Devices",
                desc: "Seamless experiences on mobile, tablet, and desktop for every user."
              },
              {
                icon: "solar:users-group-rounded-line-duotone",
                title: "🤝 Dedicated Support",
                desc: "From planning to launch and beyond, we provide reliable support and continuous improvements."
              },
              {
                icon: "solar:rocket-line-duotone",
                title: "🚀 Future-Ready Technology",
                desc: "We use modern technologies that make your digital products easier to scale, maintain, and upgrade."
              }
            ].map((reason, idx) => (
              <div 
                key={idx} 
                className="relative p-6 rounded-2xl border border-white/[0.06] bg-zinc-950/40 hover:border-[#FF3B00]/40 hover:bg-zinc-900/30 hover:shadow-[0_0_25px_rgba(255,59,0,0.08)] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Glow Inside Card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF3B00]/10 to-transparent blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-4">
                  {/* Icon container */}
                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 text-zinc-400 group-hover:text-white group-hover:bg-[#FF3B00]/10 group-hover:border-[#FF3B00]/30 transition-all duration-300 w-fit">
                    <Icon icon={reason.icon} width={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-bold text-white text-base tracking-tight group-hover:text-[#FF3B00] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-300">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <TechnologySection techStack={service.techStack} />
      <Process steps={service.process} />
      <Pricing pricing={service.pricing} />

      <DetailedArticleWrapper data={detailedArticleData} />
      <ServiceComparisonWrapper data={service} />

      <WorkSection />

      <Testimonials />

      <FAQ faqs={localizedFaqs} title={`${service.name} in ${city.name}`} />

      <RelatedServices citySlug={city.slug} currentServiceSlug={service.slug} />
      <RelatedCities currentCitySlug={city.slug} serviceSlug={service.slug} />

      <CTA 
        title={`Kickstart ${service.name} in ${city.name}`} 
        subtitle={`Let's construct a type-safe, ultra-fast Next.js layout or custom software database built to scale. Get a free proposal from our team.`} 
      />

      <ContactForm />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
