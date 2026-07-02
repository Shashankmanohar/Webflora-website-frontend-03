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

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TrustSignals />
      <ProblemSection/>
      <OurCoreServices/>
      <BusinessValue/>
      <WorkSection/>
      <TestimonialSection/>
      <ServiceComparisonWrapper data={{ title: "Webflora Digital Solutions" }} />
      <ServiceGlossaryWrapper data={{ title: "Webflora Digital Solutions" }} />
      <FaqSection/>
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
                "name": "Services",
                "item": "https://webfloratechnologies.com/services"
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
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide all services together?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer comprehensive service bundles tailored to your needs. You can choose individual services or combine multiple services into a cohesive strategy. Our team ensures seamless integration across all services for maximum impact and efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "What is the timeline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines vary based on scope and complexity. Typically, strategy and planning take 2-4 weeks, implementation spans 4-12 weeks, and optimization is ongoing."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We provide ongoing support including 24/7 email support, weekly strategy calls, and monthly performance reviews. Our dedicated account manager ensures your success."
                }
              }
            ]
          })
        }}
      />
      <div className="content-auto">
        <SEOContentBlock 
          title="Custom Software & Digital Services in India"
          paragraphs={[
            <>At <strong className="text-white font-medium">Webflora Technologies</strong>, we offer an elite suite of digital services designed to empower your business. From creating high-converting <strong className="text-gray-300">ecommerce websites</strong> to developing scalable <strong className="text-gray-300">custom software</strong>, we ensure your technological infrastructure is robust and future-proof.</>,
            <>Our specialized teams in Patna handle complex <strong className="text-gray-300">ERP solutions</strong>, <strong className="text-gray-300">mobile app development</strong>, <strong className="text-gray-300">CRM systems</strong>, and strategic <strong className="text-gray-300">SEO services</strong> to elevate your brand's digital presence and operational efficiency.</>
          ]}
        />
      </div>
    </div>
  )
}

export default page