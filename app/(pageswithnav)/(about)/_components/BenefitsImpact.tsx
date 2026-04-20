import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Global Competitive Edge",
    description: "Developing skills that allow African entrepreneurs to compete on a world stage."
  },
  {
    title: "Sustainable Strategies",
    description: "Implementing long-term solutions that address core economic challenges."
  },
  {
    title: "Leadership Integrity",
    description: "Fostering a new generation of leaders who prioritize ethical decision-making."
  },
  {
    title: "High-Impact Networking",
    description: "Connecting talented individuals with mentors and industry leaders."
  }
]

export default function BenefitsImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Projected Benefits & <br /> <span className="text-[#335CFF]">Global Impact</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We are committed to creating a measurable difference in the entrepreneurial landscape of Africa. Our programs are designed to deliver tangible value.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-6 h-6 text-[#335CFF] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
