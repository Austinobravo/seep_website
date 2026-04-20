import React from 'react'
import PageHero from '@/components/globals/PageHero'
import ProjectFilterSection from './_components/ProjectFilterSection'
import ProjectCTA from './_components/ProjectCTA'

export const metadata = {
  title: 'Our Projects | SEEP',
  description: 'Explore the impactful projects and initiatives led by SEEP Support Centre across Africa.',
}

const ProjectPage = () => {
  return (
    <main className="min-h-screen bg-slate-50/30">
      <PageHero 
        title="Our Projects"
        description="Since our launch, SEE-Support Centre has delivered programs and initiatives focused on education, innovation, and human capacity development across communities. Each project is designed to create measurable impact — equipping individuals with skills, rebuilding institutions and supporting long-term social and economic growth."
        backgroundImage="/first1.jpg"
      />
      
      <ProjectFilterSection />
      
      <ProjectCTA />
    </main>
  )
}

export default ProjectPage
