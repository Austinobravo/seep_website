import Image from "next/image"

const features = [
  {
    label: "Who we are",
    title: "SEEP Support Centre is where life-relevance and value creation are looking for potentials.",
    description: "SEE-Support Centre is a values-driven social enterprise committed to unlocking the potential of Africa’s youth through ethical leadership, excellence, and innovation—shaping entrepreneurs who can compete globally and lead with integrity.",
    image: "/about2.png",
    reverse: false
  },
  {
    label: "Our Vision",
    title: "Empowering young leaders and research, science, technology, and mentorship.",
    description: "We empower young leaders with research, science, technology, and mentorship to build sustainable, high-impact enterprises that solve real problems and drive an innovation-led African economy.",
    image: "/third2.jpg",
    reverse: true
  }
]

export default function ZigZagFeatures() {
  return (
    <section className="py-20 md:py-32 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 space-y-10">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col max-h-[422px] gap-12 lg:gap-24 border-seep-primary border-solid rounded-2xl bg-neutral-100  ${feature.reverse ? 'lg:flex-row lg:border-r-2 ' : 'lg:flex-row-reverse lg:border-l-2 '}`}
          >
            {/* Image Section */}
            <div className="lg:basis-1/2 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="relative max-h-[422px]  rounded-[2rem] overflow-hidden shadow-xl border-4 border-neutral-100 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className={`lg:basis-1/2 flex justify-between flex-col p-7  animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200`}>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm md:text-base border-b-2 w-fit border-blue-600 pb-1">
                {feature.label}
              </span>
              {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {feature.title}
              </h2> */}
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
