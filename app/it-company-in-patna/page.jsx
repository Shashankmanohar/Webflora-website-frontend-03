import React from 'react'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import OurCoreServices from './components/OurCoreServices'
import BusinessValue from './components/BusinessValue'
import WorkSection from '../Components/WorkSection'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'
import SEOContentBlock from '../Components/SEOContentBlock'
import TrustSignals from '../Components/TrustSignals'
import { ServiceComparisonWrapper, ServiceGlossaryWrapper } from './components/ServiceTemplate'
import ClientMarquee from '../Components/ClientMarquee'
import {
  buildServiceSchema,
  buildProfessionalServiceSchema,
  buildWebPageSchema,
  buildBreadcrumbListSchema,
  buildFAQPageSchema,
  buildItemListSchema,
  buildAggregateRatingSchema,
  buildReviewSchema,
  toGraphSchema
} from '../lib/schemas'

export const metadata = {
  title: "Best IT Company in Patna Bihar | Webflora Technologies",
  description: "Webflora Technologies is the best IT company in Patna, Bihar, offering high-performance website development, custom software engineering, mobile apps, and SEO services. Get a free quote!",
  keywords: "best website development company in patna, website development company in patna, best software development company in patna, software company in patna, best IT company in patna, IT company in patna, best web design company in patna, website design company in patna, web developer in patna, mobile app development company in patna, digital marketing agency in patna",
  alternates: {
    canonical: "/it-company-in-patna",
  },
};

const page = () => {
  const itCompanyFaqs = [
    {
      question: "Which is the leading IT company in Patna, Bihar?",
      answer: "Webflora Technologies is the leading IT company in Patna, Bihar, specializing in custom enterprise software, Next.js web application design, cross-platform mobile apps, and automated workflows.",
      icon: "lucide:building"
    },
    {
      question: "What IT services do you provide in Bihar?",
      answer: "We offer comprehensive IT services including custom software engineering (ERMs/CRMs), Next.js web design, mobile app development (Flutter/React Native), Google/Meta performance ads, local SEO, and AI/n8n process automation.",
      icon: "lucide:code"
    },
    {
      question: "How does Webflora price its IT projects?",
      answer: "We focus on a flat, transparent pricing structure with zero platform lock-in. Website development packages start from ₹25,000, AI chatbots start from ₹45,000, and custom software builds start from ₹1,20,000. You retain 100% code ownership.",
      icon: "lucide:wallet"
    },
    {
      question: "Do you provide cloud hosting and post-launch support?",
      answer: "Yes. We configure serverless cloud architectures on AWS and Vercel to minimize monthly hosting costs and provide long-term maintenance SLAs covering security patches, backups, and library updates.",
      icon: "lucide:cloud"
    }
  ];

  return (
    <div>
      <HeroSection/>
      <ClientMarquee />
      <TrustSignals />
      <ProblemSection/>
      <OurCoreServices/>
      <BusinessValue/>
      <WorkSection/>
      <TestimonialSection/>
      <ServiceComparisonWrapper data={{ title: "Webflora Digital Solutions" }} />
      <ServiceGlossaryWrapper data={{ title: "Webflora Digital Solutions" }} />
      <FaqSection faqs={itCompanyFaqs} title="IT Company FAQs" />
      {/* Service Page JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toGraphSchema([
              buildServiceSchema({
                name: "IT & Software Development Services in Patna",
                serviceType: "Web Development, Software Development, Mobile Apps, and AI Solutions",
                description: "Webflora Technologies provides web development, mobile app development, custom software, digital marketing, and AI automation services in Patna, Bihar."
              }),
              buildProfessionalServiceSchema({
                name: "Webflora Technologies - IT & Software Services",
                description: "Top IT software and web development company in Patna, Bihar."
              }),
              buildWebPageSchema({
                name: "Best IT Company in Patna Bihar | Webflora Technologies",
                description: "Webflora Technologies is the best IT company in Patna, Bihar, offering high-performance website development, custom software engineering, mobile apps, and SEO services.",
                url: "https://webfloratechnologies.com/it-company-in-patna"
              }),
              buildBreadcrumbListSchema([
                { name: "Home", url: "/" },
                { name: "IT Company In Patna", url: "/it-company-in-patna" }
              ]),
              buildItemListSchema([
                { name: "Website Development", url: "/it-company-in-patna/website-development-company-in-patna" },
                { name: "Mobile App Development", url: "/it-company-in-patna/mobile-app-development-company-in-patna" },
                { name: "Software Development", url: "/it-company-in-patna/software-development-company-in-patna" },
                { name: "Digital Marketing", url: "/it-company-in-patna/digital-marketing-agency-in-patna" },
                { name: "AI & Automation", url: "/it-company-in-patna/ai-automation-company-in-patna" },
                { name: "AI Chatbots", url: "/it-company-in-patna/ai-chatbot-company-in-patna" }
              ]),
              buildFAQPageSchema(itCompanyFaqs),
              buildAggregateRatingSchema({ ratingValue: 4.9, reviewCount: 52 }),
              buildReviewSchema({
                authorName: "Rahul Kumar",
                reviewRating: 5,
                reviewBody: "Best IT company in Patna. They delivered our web application on time with exceptional performance."
              })
            ])
          )
        }}
      />
      <div className="content-auto">
        <SEOContentBlock 
          title="Custom Web Development & IT Solutions"
          paragraphs={[
            <React.Fragment key={0}>At <strong className="text-white font-medium">Webflora Technologies</strong>, we are a full-service <strong className="text-gray-300">web development company</strong> and <strong className="text-gray-300">website development company</strong>. We offer specialized <strong className="text-gray-300">website development services</strong> and premium <strong className="text-gray-300">web designing services</strong> designed to empower local enterprises in Bihar and brands across India.</React.Fragment>,
            <React.Fragment key={1}>Our engineers build high-converting <strong className="text-gray-300">e commerce websites</strong>, scale custom <strong className="text-gray-300">web application development</strong>, and support businesses with professional <strong className="text-gray-300">mobile app development company</strong> solutions. If you are looking to start <strong className="text-gray-300">creating website for business</strong> growth, we deliver secure, optimized platforms to elevate your digital presence.</React.Fragment>
          ]}
        />
      </div>
    </div>
  )
}

export default page