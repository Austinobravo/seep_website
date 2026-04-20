import Image from "next/image"

const advisors = [
  {
    name: "Dr. Sarah Johnson",
    role: "Strategic Advisor",
    image: "/about/advisory1.png"
  },
  {
    name: "Michael Chen",
    role: "Technology Consultant",
    image: "/about/advisory2.png"
  }
]

export default function AdvisoryBoard() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Advisory Board</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our strategic vision is guided by industry experts and thought leaders committed to sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {advisors.map((advisor, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-sm">
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{advisor.name}</h3>
              <p className="text-[#335CFF] font-medium">{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
