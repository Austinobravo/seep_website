"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "SEEP", "Project 2", "Project 3", "Project 4", "Project 5"]

const projects = [
  { id: 1, category: "SEEP", image: "/first1.jpg", title: "Project A" },
  { id: 2, category: "Project 2", image: "/first2.jpg", title: "Project B" },
  { id: 3, category: "Project 3", image: "/first3.jpg", title: "Project C" },
  { id: 4, category: "Project 4", image: "/second1.jpg", title: "Project D" },
  { id: 5, category: "Project 5", image: "/second2.jpg", title: "Project E" },
  { id: 6, category: "SEEP", image: "/second3.jpg", title: "Project F" },
  { id: 7, category: "Project 2", image: "/third1.jpg", title: "Project G" },
  { id: 8, category: "Project 3", image: "/third2.jpg", title: "Project H" },
  { id: 9, category: "Project 4", image: "/third3.jpg", title: "Project I" },
  { id: 10, category: "Project 5", image: "/research.jpg", title: "Project J" },
  { id: 11, category: "SEEP", image: "/innovation.jpg", title: "Project K" },
  { id: 12, category: "Project 2", image: "/science.jpg", title: "Project L" },
]

export default function ProjectFilterSection() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                activeTab === cat 
                  ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900 shadow-md">
                  {project.category}
                </div>

                {/* Bottom Title Overlay (Optional but nice) */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
