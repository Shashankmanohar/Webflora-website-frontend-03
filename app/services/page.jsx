import React from 'react'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import OurCoreServices from './components/OurCoreServices'
import BusinessValue from './components/BusinessValue'
import TestimonialSection from './components/TestimonialSection'
import FaqSection from './components/FaqSection'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <ProblemSection/>
      <OurCoreServices/>
      <BusinessValue/>
      <TestimonialSection/>
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
    </div>
  )
}

export default page