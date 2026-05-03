import Image from "next/image";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/globals/PageHero";
import LinkButton from "@/components/globals/LinkButton";

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-slate-900 leading-tight">
                About Us
              </h1>
              <p className="max-w-[600px] text-slate-600 text-lg md:text-xl leading-relaxed">
                We are deliberate about spatial and music research, creating a resounding future part of worlds across standard living, and making impacts via modern solutions that build bigger futures.
              </p>
            </div>
            <div className="pt-2">
              <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                About Us
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image
                src="/first3.jpg"
                alt="About SEEP Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-110"
                priority
              />
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div> */}
        <div className="hidden lg:block">
         <PageHero 
            title="About Us"
            description="Our team brings together experienced innovators and mentors committed to empowering African youth. We combine science, technology, and strong values to turn ideas into real economic opportunities and shape Nigeria’s future."
            backgroundImage="/about.jpg"
          />
        </div>
        <div className="block lg:hidden space-y-7 py-2 ">
          <div className="flex flex-col items-center gap-y-4 text-center">
            <h2 className="font-medium text-3xl">About Us</h2>
            <p className="text-neutral-600 text-sm">Our team brings together experienced innovators and mentors committed to empowering African youth. We combine science, technology, and strong values to turn ideas into real economic opportunities and shape Nigeria’s future.</p>
            <LinkButton title="Join us" path="" className="rounded-lg! px-7! py-2!"/>
          </div>
          <Image src={`/about1.png`} alt="About image" width={500} height={500}/>

        </div>
      </div>
    </section>
  );
}
