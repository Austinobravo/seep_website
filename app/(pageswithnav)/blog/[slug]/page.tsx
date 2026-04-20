"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import PressSection from '../_components/PressSection'

const sections = [
  { id: "intro", title: "What is SEEP Innov8on?" },
  { id: "institutions", title: "Institutions Engaged" },
  { id: "campus", title: "What Happened on Campus" },
  { id: "impact", title: "Outcomes & Early Impact" },
  { id: "why", title: "Why This Matters" },
]

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header / Breadcrumbs */}
      <section className="pt-12 pb-6">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/project" className="hover:text-slate-900 transition-colors">Project</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog?category=Programs & Impact" className="hover:text-slate-900 transition-colors">Programs & Impact</Link>
          </nav>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-4xl leading-tight mb-6">
            SEEP Innov8ion: Empowering Student Entrepreneurs Across Campuses
          </h1>
          <p className="text-slate-500 font-medium mb-10">Last updated: February 4, 2026</p>
          
          <div className="relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden mb-16 shadow-lg">
            <Image 
              src="/first1.jpg" 
              alt="SEEP Innov8ion" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar ToC */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-8">
                <h2 className="text-xl font-bold text-slate-900">Table of Contents</h2>
                <nav className="space-y-4">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block text-left text-sm font-medium transition-all duration-300 ${
                        activeSection === section.id 
                          ? "text-[#335CFF] border-l-2 border-[#335CFF] pl-4" 
                          : "text-slate-500 hover:text-slate-800 pl-0 border-l-2 border-transparent"
                      }`}
                    >
                      • {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="lg:w-3/4 space-y-16">
              <div id="intro" className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">What is SEEP Innov8on?</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  SEEP Innov8ion is a tertiary-institution program designed to identify, support, and nurture innovative ideas developed by students. 
                  The program focuses on:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>Early-stage idea validation</li>
                  <li>Entrepreneurial thinking</li>
                  <li>Practical problem-solving</li>
                  <li>Ethical leadership and impact-driven innovation</li>
                </ul>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Rather than theoretical learning, SEEP Innov8ion emphasizes real-world application, helping students understand how innovation translates into sustainable ventures.
                </p>
              </div>

              <div id="institutions" className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Institutions Engaged</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  During this program cycle, SEEP Support Centre engaged students across selected Nigerian tertiary institutions, working closely with campus communities, faculty members, and student innovation groups. 
                  Each institution served as a hub for:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>Identifying student-led ideas</li>
                  <li>Encouraging cross-disciplinary collaboration</li>
                  <li>Building innovation communities within campuses</li>
                </ul>
                <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-md mt-6">
                  <Image src="/first2.jpg" alt="Institutions" fill className="object-cover" />
                </div>
              </div>

              <div id="campus" className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">What Happened on Campus?</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  On campus, the program delivered structured innovation sessions that combined learning with interaction. 
                  Key activities included:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>Innovation and ideation workshops</li>
                  <li>Mentorship sessions with experienced professionals</li>
                  <li>Problem-definition and solution-mapping exercises</li>
                  <li>Open discussions on entrepreneurship challenges</li>
                </ul>
                <p className="text-slate-600 text-lg leading-relaxed">
                  These sessions created safe spaces for students to test ideas, ask critical questions, and receive constructive guidance.
                </p>
                <div className="relative w-full h-[400px] rounded-[2rem] overflow-hidden shadow-md mt-6">
                  <Image src="/first3.jpg" alt="On Campus" fill className="object-cover" />
                </div>
              </div>

              <div id="impact" className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Outcomes & Early Impact</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  The immediate outcomes of SEEP Innov8ion were both practical and measurable. 
                  Participants demonstrated:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>Improved clarity around their ideas</li>
                  <li>Better understanding of market and social relevance</li>
                  <li>Increased confidence in pursuing entrepreneurship</li>
                  <li>Stronger collaboration among peers</li>
                </ul>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Several ideas identified during the program are now progressing into structured development phases, with ongoing support from SEEP Support Centre.
                </p>
              </div>

              <div id="why" className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Why This Matters</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Nigeria's future economy depends on how effectively young people are empowered to innovate responsibly. 
                  SEEP Innov8ion matters because it:
                </p>
                <ul className="list-disc pl-6 text-slate-600 text-lg space-y-2">
                  <li>Invests in human capacity, not just ideas</li>
                  <li>Encourages ethical, solution-driven entrepreneurship</li>
                  <li>Builds long-term innovation ecosystems within institutions</li>
                </ul>
                <p className="text-slate-600 text-lg leading-relaxed">
                  By supporting students early, the program contributes to a stronger pipeline of entrepreneurs capable of creating jobs, solving problems, and driving sustainable growth.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <PressSection />
    </main>
  )
}
