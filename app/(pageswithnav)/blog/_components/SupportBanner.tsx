import { Button } from "@/components/ui/button"

export default function SupportBanner() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 text-center space-y-8">
        <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Partner with SEEP</p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
          If you believe in empowering young innovators, you can support SEEP' ongoing programs.
        </h2>
        <div className="pt-4">
          <Button className="bg-[#335CFF] hover:bg-blue-700 text-white rounded-full px-12 py-7 text-lg font-semibold transition-all duration-300">
            Donate
          </Button>
        </div>
      </div>
    </section>
  )
}
