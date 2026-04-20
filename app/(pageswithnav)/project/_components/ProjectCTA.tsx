import Image from "next/image"

export default function ProjectCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[500px] md:h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden group">
          {/* Background Image */}
          <Image
            src="/first3.jpg"
            alt="Have a project in mind?"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          {/* Overlay Content Box */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[45%] flex items-center p-6 md:p-12">
            <div className="bg-[#1a2b6d]/90 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/20 shadow-2xl space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="space-y-4">
                <span className="text-white/60 uppercase tracking-widest text-sm font-bold">Partner with us</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Have a project <span className="block italic font-light">in mind?</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  We collaborate with partners, institution, and innovators to design and deliver high-impact programs, infrastructure, and initiatives. If your project aligns with our mission, let's explore how we can build it together.
                </p>
              </div>
              
              <button className="w-full py-5 bg-white text-[#1a2b6d] font-bold rounded-2xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-[1.02] shadow-xl">
                Propose a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
