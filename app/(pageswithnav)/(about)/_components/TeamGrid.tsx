import Image from "next/image"

const members = [
  {
    name: "John Doe",
    role: "Core Program Coordinator",
    image: "/about/team1.png"
  }
]

export default function TeamGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            The passionate individuals driving our mission forward every day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-8 border-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-slate-500 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
