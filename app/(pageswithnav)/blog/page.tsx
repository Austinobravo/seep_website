import React from 'react'
import BlogHero from './_components/BlogHero'
import BlogFilterSection from './_components/BlogFilterSection'
import SupportBanner from './_components/SupportBanner'
import PressSection from './_components/PressSection'
import PageHero from '@/components/globals/PageHero'

export const metadata = {
  title: 'Blog | Insights & Updates | SEE SUPPORT CENTRE',
  description: 'Stories, updates, and announcements from SEEP Support Centre — highlighting our programs, impact, and community work.',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* <BlogHero /> */}
       <PageHero 
          title="INSIGHTS & UPDATES"
          description="Stories, updates, and announcements from SEEP Support Centre — highlighting our programs, impact, and community work."
          backgroundImage="/first3.jpg"
        />
      <BlogFilterSection />
      <SupportBanner />
      <PressSection />
    </main>
  )
}
