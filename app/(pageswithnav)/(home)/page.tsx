import React from 'react'
import HomeHero from './_components/HomeHero'
import CoreDrivers from './_components/CoreDrivers'
import TrustedPartners from './_components/TrustedPartners'
import Founder from './_components/Founder'
import Faqs from './_components/Faqs'

const HomePage = () => {
  return (
    <section>
      <HomeHero />
      <CoreDrivers />
      <TrustedPartners />
      <Founder />
      <Faqs />
    </section>
  )
}

export default HomePage