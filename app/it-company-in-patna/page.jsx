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

export const metadata = {
  title: "IT Company in Patna Bihar | Software & Web Services | Webflora",
  description: "Looking for the top IT company in Patna, Bihar? Webflora Technologies provides premium custom software engineering, Next.js web design, mobile apps, and n8n AI workflow automations. Get a free quote!",
  keywords: "web development company, website development company, website design, website development, web design, e commerce websites, web application development, app software, mobile app development company, it company in patna, software company in patna",
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
      answer: "We focus on a flat, transparent pricing structure with zero platform lock-in. Website development packages start from ₹25,000, AI chatbots start from ₹35,000, and custom software builds start from ₹1,00,000. You retain 100% code ownership.",
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
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development, Software Development, and AI Solutions",
            "provider": {
              "@id": "https://webfloratechnologies.com/#organization"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "description": "Webflora Technologies provides web development, mobile app development, custom software, digital marketing, and AI automation services, helping businesses build fast and scalable digital systems."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://webfloratechnologies.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "IT Company In Patna",
                "item": "https://webfloratechnologies.com/it-company-in-patna"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": itCompanyFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
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