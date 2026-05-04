"use client"

import GalleryPagination from "@/components/gallery/GalleryPagination"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const advisors = [ 
  { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, { name: "Dr. Sarah Johnson", role: "Strategic Advisor", description: "Strategize the collective ideas in the team", image: "/about/advisory1.png" }, 
  { name: "Michael Chen", role: "Technology Consultant", description: "Strategize the collective ideas in the team", image: "/about/advisory2.png" }, 
]

export default function AdvisoryBoard() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerView, setItemsPerView] = React.useState(1)

  // ✅ detect screen size
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView())
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(advisors.length / itemsPerView)

  // ✅ SCROLL FIX (pixel perfect)
  const scrollToPage = (page: number) => {
    const container = containerRef.current
    if (!container) return

    const firstCard = container.querySelector<HTMLDivElement>("[data-card]")
    if (!firstCard) return

    const cardWidth = firstCard.offsetWidth + 32 // include gap (gap-8 = 32px)

    container.scrollTo({
      left: (page - 1) * cardWidth * itemsPerView,
      behavior: "smooth",
    })
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    scrollToPage(page)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-16 flex not-lg:flex-col gap-4 justify-between items-center">
          <h2 className="text-3xl md:text-4xl max-w-2xl font-bold text-slate-900">
            Meet the advisory board{" "}
            <span className="text-slate-600">
              shaping strategy and driving long-term impact
            </span>
          </h2>

          <GalleryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>

        {/* SLIDER */}
        <div ref={containerRef} className="overflow-hidden">
          <div className="flex gap-8">

            {advisors.map((advisor, index) => (
              <div
                key={index}
                data-card
                className="w-3/4 md:w-1/2 lg:w-1/4 shrink-0"
              >
                <div className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-3">

                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {advisor.name}
                  </h3>

                  <p className="text-[#335CFF] font-medium">
                    {advisor.role}
                  </p>

                  <p className="text-neutral-600">
                    {advisor.description}
                  </p>

                  <div className="flex gap-5">
                    <Link href="#" className="size-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                      <FaLinkedinIn />
                    </Link>
                    <Link href="#" className="size-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
                      <FaXTwitter />
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

// helper outside component
function getItemsPerView() {
  if (typeof window === "undefined") return 1

  if (window.innerWidth >= 1024) return 4
  if (window.innerWidth >= 768) return 2
  return 1
}