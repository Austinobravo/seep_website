import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PressSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image that covers the bottom part */}
      <div className="absolute inset-0 z-0">
         <Image 
          src="/second2.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-[3rem] p-10 md:p-20 shadow-xl border border-white/50 text-center space-y-8">
          <div className="space-y-4">
            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Press Enquiries</p>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Got a media or press-related question?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              For interviews, features, or press information about SEEP Support Centre and our programs, please contact us at <a href="mailto:media@seepupportcentre.org" className="text-[#335CFF] font-semibold underline">media@seepupportcentre.org</a>. For general enquiries or support, kindly use <a href="mailto:info@seepupportcentre.org" className="text-[#335CFF] font-semibold underline">info@seepupportcentre.org</a>.
            </p>
          </div>
          
          <div className="pt-4">
            <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-12 py-7 text-lg font-semibold transition-all duration-300 shadow-lg">
              Contact Media Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
