import Image from "next/image"

export default function BlogHero() {
  return (
    <section className="relative w-full py-12 md:py-20 flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-[300px] md:h-[450px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-900 shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/first3.jpg"
              alt="Insights & Updates"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">
             <div className="space-y-4">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight animate-in fade-in slide-in-from-left-8 duration-700">
                INSIGHTS & UPDATES
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                Stories, updates, and announcements from SEEP Support Centre — highlighting our programs, impact, and community work.
              </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
