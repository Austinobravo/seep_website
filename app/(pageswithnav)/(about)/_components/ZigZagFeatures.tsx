import Image from "next/image"

const features = [
  {
    label: "Who we are",
    title: "SEEP Support Centre is where life-relevance and value creation are looking for potentials.",
    description: "It's a platform focused on looking for leaders, his resilience, and fine value drawing entrepreneur who can compete globally and lead with integrity.",
    image: "/research.jpg",
    reverse: false
  },
  {
    label: "Our Vision",
    title: "Empowering young leaders and research, science, technology, and mentorship.",
    description: "This is reasons young leaders and research, science, technology, and mentorship to build sustainable, high-impact strategies that solve real problems and drive our economies for Africa's economy.",
    image: "/innovation.jpg",
    reverse: true
  }
]

export default function ZigZagFeatures() {
  return (
    <section className="py-20 md:py-32 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-40">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col gap-12 lg:gap-24 items-center ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            {/* Image Section */}
            <div className="flex-1 w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-neutral-100 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex-1 space-y-6 lg:max-w-[500px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm md:text-base border-b-2 border-blue-600 pb-1">
                {feature.label}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {feature.title}
              </h2>
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
