import Image from "next/image"
import { ChevronDown } from "lucide-react"
import LinkButton from "./LinkButton"

interface PageHeroProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHero({ title, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative w-full py-12 md:py-20 flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-white">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* White Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-[#93989C0D] w-1/2" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight animate-in fade-in slide-in-from-left-8 duration-700">
              {title}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              {description}
            </p>
            <LinkButton title="Join Us" path="" className="rounded-lg! px-7! py-2!"/>
            
            {/* Scroll indicator - absolute positioned in the bottom center of the card */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center p-3 bg-white/50 backdrop-blur-sm rounded-full border border-white/20 animate-bounce">
              <ChevronDown className="w-6 h-6 text-slate-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
