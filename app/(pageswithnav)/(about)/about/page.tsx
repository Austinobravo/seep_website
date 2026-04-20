import React from 'react'
import AboutHero from '../_components/AboutHero'
import VisionMission from '../_components/VisionMission'
import ZigZagFeatures from '../_components/ZigZagFeatures'
import AdvisoryBoard from '../_components/AdvisoryBoard'
import BenefitsImpact from '../_components/BenefitsImpact'
import TeamGrid from '../_components/TeamGrid'
import NewsletterBanner from '../_components/NewsletterBanner'

const AboutPage = () => {
  return (
    <main>
        <AboutHero />
        <VisionMission />
        <ZigZagFeatures />
        <BenefitsImpact />
        <AdvisoryBoard />
        <TeamGrid />
        <NewsletterBanner />
    </main>
  )
}

export default AboutPage