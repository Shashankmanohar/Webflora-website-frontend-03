import React from 'react'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import OurCoreServices from './components/OurCoreServices'
import BusinessValue from './components/BusinessValue'
import TestimonialSection from './components/TesimonialSection'
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
    </div>
  )
}

export default page