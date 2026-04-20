import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const VisionMission = () => {
  const data = [
    {
      title: "Vision",
      content: "Our vision is to become a platform for research through modern solutions and creating a resounding future part of the world across standard living and making impact via modern solutions that build bigger futures."
    },
    {
      title: "Mission",
      content: "Our mission is to provide an platform where modern research can be translated into amazing strategies that solve real problems and drive our world towards a better tomorrow."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <Card 
              key={index} 
              className="bg-[#1A1A1A] border-none text-white overflow-hidden rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {item.title}
                </h2>
                <div className="w-12 h-1 bg-blue-600 transition-all duration-300 group-hover:w-24"></div>
                <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionMission
