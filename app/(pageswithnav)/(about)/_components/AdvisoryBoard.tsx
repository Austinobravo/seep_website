"use client"

import GalleryPagination from "@/components/gallery/GalleryPagination"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const advisors = [
  { 
  name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" }, 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor",
    description: "Strategize the collective ideas in the team",
     image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" }, 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor",
    description: "Strategize the collective ideas in the team",
     image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" }, 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor",
    description: "Strategize the collective ideas in the team",
     image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" }, 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor",
    description: "Strategize the collective ideas in the team",
     image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" }, 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", 
    description: "Strategize the collective ideas in the team",
    image: "/about/advisory2.png" },
  ]

export default function AdvisoryBoard() {
  const pageSize = 3
  const [currentPage, setCurrentPage] = React.useState(1)

  const totalPages = Math.ceil(advisors.length / pageSize)

  // 👇 calculate translate
  const translateX = (currentPage - 1) * 100

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-16 flex justify-between items-center">
          <h2 className="text-3xl md:text-4xl max-w-2xl font-bold text-slate-900">
            Meet the advisory board{" "}
            <span className="text-slate-600">
              shaping strategy and driving long-term impact
            </span>
          </h2>

          <GalleryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${translateX}%)`,
            }}
          >
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0"
              >
                <div className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-3">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-[#335CFF] font-medium">
                    {advisor.role}
                  </p>
                  <p className="text-neutral-600 font-medium">
                    {advisor.description}
                  </p>
                  <div className='flex gap-5 w-fit'>
                    <Link title={`LinkedIn`} href={``} target='_blank' className='hover:bg-gray-200 bg-[#FFFFFF12] hover:text-black/80 text-[#CACFD8] rounded-full transition-all duration-500 size-9 flex justify-center items-center'>
                        <FaLinkedinIn  size={20}/>
                    </Link>
                    <Link  title={`Twitter`} href={``} target='_blank' className='hover:bg-gray-200 bg-[#FFFFFF12] hover:text-black/80 text-[#CACFD8] rounded-full transition-all duration-500 size-9 flex justify-center items-center'>
                        <FaXTwitter size={20}/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}