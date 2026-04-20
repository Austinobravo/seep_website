"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const categories = ["All", "Announcements", "Programs & Impact", "News & Events"]

const blogPosts = [
  { id: 1, category: "Announcements", image: "/first1.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 2, category: "Programs & Impact", image: "/first2.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 3, category: "Announcements", image: "/first3.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 4, category: "News & Events", image: "/second1.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 5, category: "Announcements", image: "/second2.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 6, category: "News & Events", image: "/second3.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 7, category: "Programs & Impact", image: "/third1.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 8, category: "News & Events", image: "/third2.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 9, category: "Announcements", image: "/third3.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 10, category: "Programs & Impact", image: "/research.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 11, category: "News & Events", image: "/innovation.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
  { id: 12, category: "Announcements", image: "/science.jpg", title: "SEEP 2025 Program Cycle Announced", excerpt: "SEEP Support Centre is set to kick off the 2025 SEEP program, expanding access to education, innovation, and skills development across schools and communities." },
]

export default function BlogFilterSection() {
  const [activeTab, setActiveTab] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeTab === "All" || post.category === activeTab
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Filters and Search Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === cat 
                    ? "text-[#335CFF]" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#335CFF]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search Post" 
              className="pl-10 bg-slate-50 border-none rounded-full h-11 focus-visible:ring-1 focus-visible:ring-blue-100 placeholder:text-slate-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-700 bg-slate-100 inline-block px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#335CFF] transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
