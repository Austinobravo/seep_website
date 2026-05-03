import React from 'react'
import AboutHero from '../_components/AboutHero'
import VisionMission from '../_components/VisionMission'
import ZigZagFeatures from '../_components/ZigZagFeatures'
import AdvisoryBoard from '../_components/AdvisoryBoard'
import BenefitsImpact from '../_components/BenefitsImpact'
import TeamGrid from '../_components/TeamGrid'
import NewsletterBanner from '../_components/NewsletterBanner'
import Newsletter from '../../(home)/_components/Newsletter'

const AboutPage = () => {
  return (
    <main>
        <AboutHero />
        <VisionMission />
        <ZigZagFeatures />
        <AdvisoryBoard />
        <BenefitsImpact />
        <TeamGrid />
        <Newsletter />
        {/* <NewsletterBanner /> */}
    </main>
  )
}

export default AboutPage