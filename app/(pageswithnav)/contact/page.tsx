import React from 'react'
import PageHero from '@/components/globals/PageHero'
import ContactForm from './_components/ContactForm'
import ContactInfo from './_components/ContactInfo'

export const metadata = {
  title: 'Contact Us | SEEP',
  description: "We'd love to hear from you. Whether you have questions, want to collaborate, support our initiatives, or learn more about what we do, feel free to reach out.",
}

export default function ContactPage() {
  return (
    <main className="bg-white pb-20">
      <PageHero 
        title="Contact Us"
        description="We'd love to hear from you. Whether you have questions, want to collaborate, support our initiatives, or learn more about what we do, feel free to reach out."
        backgroundImage="/contact-hero.png"
      />

      <div className="container mx-auto px-4 md:px-6 -mt-8 md:-mt-12 relative z-20">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Our team is always ready to connect and explore opportunities to create meaningful impact together.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
              <ContactForm />
            </div>
            
            <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
                <ContactInfo />
            </div>
          </div>
      </div>
    </main>
  )
}
