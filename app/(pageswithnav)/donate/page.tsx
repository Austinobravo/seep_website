"use client"

import { useState } from "react"
import Image from "next/image"
import { ShieldAlert, Lock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import DonationModal from "./_components/DonationModal"
import ProjectCTA from "../project/_components/ProjectCTA"

export default function DonatePage() {
  const [isModalOpen, setIsModalOpen] = useState(true) // Open by default for demo

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <Image 
          src="/second3.jpg" 
          alt="Donate Hero" 
          fill 
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tight leading-[0.9]">
              DOUBLE <br />
              <span className="italic font-light opacity-90 text-[0.8em]">your impact</span> <br />
              for refugees
            </h1>
          </div>
        </div>
        
        {/* Floating Modal Overlay - for this specific page, the modal is the focus */}
        <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>

      {/* Information Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900">For a limited time, all gifts matched</h2>
               <p className="text-slate-600 text-lg leading-relaxed font-medium">
                At SEE-Support Centre, we believe that every young person deserves a chance to thrive in the global economy. Many bright people have the talent, but lack the appropriate community, tools and training to become outstanding.
               </p>
               <p className="text-slate-600 text-lg leading-relaxed font-medium">
                We therefore take it upon ourselves to serve as a bridge between young people and the essential resources.
               </p>
               <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Your donation helps us maintain our robust community through scholarship training, professional mentorship, grant opportunities, and other necessary resources that turns a disadvantaged youth into a self-sufficient global leader and professional.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Confidence Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Secure & Tax Deductible */}
             <div className="flex items-center gap-6 p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="p-5 bg-slate-50 rounded-2xl">
                  <ShieldAlert className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  Donations are 100% Secure <br /> & Tax Deductible
                </h3>
             </div>

             {/* Logos Grid */}
             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-slate-800">Give with confidence</h4>
                  <Lock className="w-5 h-5 text-slate-300" />
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60">
                   {/* Mock payment logos */}
                   {["Visa", "Mastercard", "PayPal", "GPay", "ApplePay", "Paystack", "Flutterwave", "Stripe", "WorldRemit", "Remita", "Klarna", "Bitcoin"].map((brand) => (
                    <div key={brand} className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-[8px] font-bold text-slate-400">
                      {brand}
                    </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </main>
  )
}
