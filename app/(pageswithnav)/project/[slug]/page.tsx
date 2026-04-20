import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCTA from '../_components/ProjectCTA'

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Link href="/project" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-10 group">
            <div className="p-2 bg-white rounded-full border shadow-sm group-hover:bg-slate-50">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Back to Project</span>
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            SEEP-Tech-2-School
          </h1>
          
          <p className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed mb-12">
            We collaborate with secondary schools to introduce students to the tech industry and other emerging industries while providing mentorship, a community of like-minded researchers to become self-sufficient and relevant in the industry. We aim to develop tech skills in young people and provide them with entrepreneurial opportunities, empowering them to solve social problems through innovation for the global and Nigerian economies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300">
               Enroll Your School
             </Button>
             <Button variant="outline" className="bg-white hover:bg-slate-50 text-slate-900 border-none rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 shadow-sm">
               Become a Volunteer
             </Button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Metadata Sidebar */}
            <aside className="lg:w-1/3 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Program</h4>
                  <p className="text-lg font-bold text-slate-800">SEEP-Tech-2-School</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Institution</h4>
                  <p className="text-lg font-bold text-slate-800">Secondary School Name</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date</h4>
                  <p className="text-lg font-bold text-slate-800">12—14 March, 2025</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">What We Did</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Tech introduction sessions, mentorship talks, hands-on learning, and community building.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Goal</h4>
                  <p className="text-slate-600 leading-relaxed">
                    To equip young students with foundational tech skills, mentorship, and entrepreneurial awareness to become future-ready problem solvers.
                  </p>
                </div>
              </div>
            </aside>

            {/* Content Body */}
            <div className="lg:w-2/3 space-y-16">
              <div className="space-y-8">
                <p className="text-slate-600 text-lg leading-relaxed">
                  SEEP-Tech-2-School is a grassroots initiative designed to introduce secondary school students to technology and emerging industries at an early stage. The program focuses on building awareness, confidence, and foundational skills that prepare young minds for future opportunities in the digital economy.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Through interactive sessions, mentorship, and access to relevant learning resources, we expose students to real-world applications of technology while fostering a strong sense of purpose, creativity, and problem-solving.
                </p>
                
                <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-xl">
                  <Image src="/first1.jpg" alt="Mentorship" fill className="object-cover" />
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed pt-8">
                  Beyond technical exposure, the program builds a supportive community of like-minded students and mentors, encouraging collaboration and curiosity. We emphasize self-sufficiency, innovation, and entrepreneurship—empowering students to see technology not just as a skill, but as a tool for solving social challenges.
                </p>

                <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-xl">
                   <Image src="/first3.jpg" alt="Students" fill className="object-cover" />
                </div>

                <p className="text-slate-600 text-lg leading-relaxed pt-8 font-medium">
                  SEEP-Tech-2-School is part of our long-term commitment to developing Africa's next generation of innovators, ensuring young people are equipped to contribute meaningfully to both the Nigerian and global economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-24 bg-slate-50/50 text-center">
        <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="space-y-4">
                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Power the next program</p>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
                    This program was made possible through institutional support. Help us expand to more campuses.
                </h2>
            </div>
            <div className="pt-4">
                <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-12 py-7 text-lg font-semibold transition-all duration-300 shadow-xl">
                    Donate
                </Button>
            </div>
        </div>
      </section>

      <ProjectCTA />
    </main>
  )
}
