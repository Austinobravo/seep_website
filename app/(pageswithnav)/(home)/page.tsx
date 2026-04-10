import React from 'react'
import HomeHero from './_components/HomeHero'
import CoreDrivers from './_components/CoreDrivers'
import TrustedPartners from './_components/TrustedPartners'
import Founder from './_components/Founder'
import Faqs from './_components/Faqs'
import Newsletter from './_components/Newsletter'

const HomePage = () => {
  return (
    <section>
      <HomeHero />
      <CoreDrivers />
      <TrustedPartners />
      <Founder />
      <Faqs />
      <Newsletter />
    </section>
  )
}

export default HomePage