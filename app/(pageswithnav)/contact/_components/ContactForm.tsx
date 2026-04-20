'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="bg-[#F8F9FB] p-8 md:p-12 rounded-[2.5rem] shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 leading-tight">
        Leave us a message — we'll get back to you.
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-medium text-base">
            Name*
          </Label>
          <Input 
            id="name" 
            placeholder="Enter full name" 
            required 
            className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-slate-700 font-medium text-base">
            Email*
          </Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your mail here" 
            required 
            className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact" className="text-slate-700 font-medium text-base">
            Contact (optional)
          </Label>
          <Input 
            id="contact" 
            placeholder="Enter your phone number here" 
            className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700 font-medium text-base">
            Message*
          </Label>
          <Textarea 
            id="message" 
            placeholder="Leave us a message..." 
            required 
            className="min-h-[180px] bg-white border-none rounded-xl p-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm resize-none"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-14 bg-[#335CFF] hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-all duration-300"
        >
          Send Us a Message
        </Button>
      </form>
    </div>
  )
}
