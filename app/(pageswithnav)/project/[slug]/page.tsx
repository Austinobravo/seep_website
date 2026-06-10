import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProjectCTA from '../_components/ProjectCTA'
import projects from "./data.json"
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

// export const metadata = {
//   title: 'Our Projects | SEE SUPPORT CENTRE',
//   description: 'Explore the impactful projects and initiatives led by SEEP Support Centre across Africa.',
// }
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

     const { slug } = await params; 

    const post = projects.find(
        (project) => project.slug === slug
      );;
    const displayTitle = post?.title || slug || "Project Details";
    // const slug = post?.slug || slug || "Project Details"

    return {
     title: `${displayTitle.toLocaleUpperCase()} | SEE SUPPORT CENTRE`,
      description: post ? (post.shortDescription) : `Read more about this insightful post on SEE SUPPORT CENTER.`,
      keywords: ["Rent", "Booking", "SEE", "AirBnB", "Apartments", "Houses", "Hotels"],
      openGraph: {
        title: displayTitle,
        description: `Read more about ${displayTitle} insightful post on SEE SUPPORT CENTRE.`,
        // images: [{ url: `${BASE_URL}/blacklogo.png` }],
        // url: `${BASE_URL}/${slug}`,
        type: "website"
      },
      twitter:{
        card: "summary_large_image",
        title: `${displayTitle} | SEE SUPPORT CENTRE`,
        description: "We believe in booking the right apartments",
        // images: [`${BASE_URL}/blacklogo.png`],
      },
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "headline": `${displayTitle} | SEE SUPPORT CENTRE`,
          "description": "We believe in booking the right apartments",
          "author": {
            "@type": "Person",
            "name": "SEE SUPPORT CENTRE",
          },
          "publisher": {
            "@type": "Organization",
            "name": "SEE SUPPORT CENTRE",
            "logo": {
              "@type": "ImageObject",
              // "url": `${BASE_URL}/blacklogo.png`,
            },
          },
          // "image": `${BASE_URL}/blacklogo.png`,
          // "url": `${BASE_URL}/${slug}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            // "@id": BASE_URL
          }
        })
      }
    };
  }

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async  function ProjectDetailPage({ params }: PageProps) {
   const { slug } = await params
    const project = projects.find(
        (project) => project.slug === slug
      );


  
    if (!project) {
      notFound()
    }
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
            {project.title}
          </h1>
          
          <p className="max-w-3xl mx-auto text-slate-600 text-lg md:text-xl leading-relaxed mb-12">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {project.actions.map((action) => (
            <Link key={action.label} href={action.href}>
             <Button className={`${action.label === "Enroll Your School" ? "bg-[#335CFF] hover:bg-blue-700 text-white" : "bg-white hover:bg-slate-50 text-slate-900 border-none"} rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300`}>
               {action.label}
             </Button>
            </Link>

            ))}
            {/* <Link href="/contact">
             <Button variant="outline" className="bg-white hover:bg-slate-50 text-slate-900 border-none rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 shadow-sm">
               Become a Volunteer
             </Button>
            </Link> */}
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
                  <p className="text-lg font-bold text-slate-800">{project.program}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Institution</h4>
                  <p className="text-lg font-bold text-slate-800">{project.institution}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date</h4>
                  <p className="text-lg font-bold text-slate-800">{project.date}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">What We Did</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {project.whatWeDid}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Goal</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {project.goal}
                  </p>
                </div>
              </div>
            </aside>

            {/* Content Body */}
            <div className="lg:w-2/3 space-y-16">
              <div className="space-y-8">
                {project.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return (
                    <p
                      key={index}
                      className="text-slate-600 text-lg leading-relaxed"
                    >
                      {item.value}
                    </p>
                  );
                }

                return (
                  <div
                    key={index}
                    className="relative w-full h-[450px] rounded-[3rem] overflow-hidden"
                  >
                    <Image
                      src={item.value}
                      alt={item.alt || project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              })}
                {/* <p className="text-slate-600 text-lg leading-relaxed">
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
                </p> */}
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
                     {project.cta.title}
                </h2>
            </div>
            <Link href={project.cta.buttonLink} className="pt-4">
                <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-12 py-7 text-lg font-semibold transition-all duration-300 shadow-xl">
                    {project.cta.buttonText}
                </Button>
            </Link>
        </div>
      </section>

      <ProjectCTA />
    </main>
  )
}

