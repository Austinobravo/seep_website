"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Copy, ChevronRight, ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// --- Components for Steps ---

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { id: 1, label: "Donation Amount" },
    { id: 2, label: "Personal Details" },
    { id: 3, label: "Payment Method" },
    { id: 4, label: "Confirm Donation" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-8 px-2 md:px-0">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
            currentStep > step.id 
              ? "bg-[#00BA88] text-white" 
              : currentStep === step.id 
                ? "bg-[#335CFF] text-white" 
                : "border-2 border-slate-200 text-slate-400"
          }`}>
            {currentStep > step.id ? <Check className="w-3 h-3" /> : step.id}
          </div>
          <span className={`text-[10px] md:text-xs font-semibold whitespace-nowrap ${currentStep === step.id ? "text-slate-900" : "text-slate-400"}`}>
            {step.label}
          </span>
          {index < steps.length - 1 && <ChevronRight className="w-3 h-3 text-slate-300" />}
        </div>
      ))}
    </div>
  )
}

export default function DonationModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    type: "once",
    amount: "10000",
    customAmount: "",
    name: "",
    email: "",
    phone: "",
    anonymous: false,
    paymentMethod: "bank_transfer"
  })

  // Timer for Step 4
  const [timeLeft, setTimeLeft] = useState(3575) // 59m 35s
  useEffect(() => {
    if (step === 4 && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m • ${secs}s`
  }

  const handleNext = () => {
    if (step === 1) {
      if (!formData.amount && !formData.customAmount) return
    }
    if (step === 2) {
      if (!formData.name || !formData.email) {
        alert("Please fill in the mandatory fields (Name and Email)")
        return
      }
    }
    setStep(prev => prev + 1)
  }
  const handleBack = () => setStep(prev => prev - 1)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Could add a toast here
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-8 pb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Donation</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="px-8 pb-8 overflow-y-auto custom-scrollbar">
          {step <= 4 && <StepIndicator currentStep={step} />}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                {/* Once/Monthly Tabs */}
                <div className="flex bg-slate-100 p-1 rounded-2xl">
                  <button 
                    onClick={() => setFormData({...formData, type: "once"})}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${formData.type === "once" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Give once
                  </button>
                  <button 
                    onClick={() => setFormData({...formData, type: "monthly"})}
                    className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${formData.type === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    Give Monthly
                  </button>
                </div>

                <div className="bg-[#F8F9FB] p-8 rounded-[2rem] border border-slate-100 space-y-6">
                   <p className="text-sm font-bold text-slate-800">Select Amount to Donate</p>
                   <RadioGroup 
                    value={formData.amount} 
                    onValueChange={(val) => setFormData({...formData, amount: val, customAmount: ""})}
                    className="space-y-4"
                   >
                     <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <RadioGroupItem value="5000" id="amt-5000" />
                       <Label htmlFor="amt-5000" className="flex-1 font-bold text-slate-700 cursor-pointer">₦5,000</Label>
                     </div>
                     <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <RadioGroupItem value="10000" id="amt-10000" />
                       <Label htmlFor="amt-10000" className="flex-1 font-bold text-slate-700 cursor-pointer">₦10,000</Label>
                     </div>
                     <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                       <RadioGroupItem value="20000" id="amt-20000" />
                       <Label htmlFor="amt-20000" className="flex-1 font-bold text-slate-700 cursor-pointer">₦20,000</Label>
                     </div>
                   </RadioGroup>

                   <div className="relative">
                      <Input 
                        placeholder="Custom Amount" 
                        value={formData.customAmount}
                        onChange={(e) => setFormData({...formData, customAmount: e.target.value, amount: "custom"})}
                        className="h-14 bg-white border-none rounded-xl px-4 text-slate-800 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-blue-100"
                      />
                   </div>
                </div>

                <p className="text-[10px] text-slate-400 leading-relaxed text-center italic">
                  Your generosity will enable us to assists these students and young graduates in the rural community as well as the underserved areas, in turn help them discover and develop their potentials and interest in tech. We implore you to join us in providing every individual with the opportunity to learn and in tech. Together, we can make a lasting impact on the lives of many.
                </p>

                <div className="flex gap-4 pt-4">
                  <Button onClick={onClose} variant="outline" className="flex-1 h-14 rounded-xl bg-slate-50 border-none font-bold text-slate-500">
                    Cancel
                  </Button>
                  <Button onClick={handleNext} className="flex-1 h-14 rounded-xl bg-[#335CFF] hover:bg-blue-700 text-white font-bold">
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                 <div className="bg-[#EBF5FF] p-6 rounded-2xl border border-blue-100">
                    <p className="text-xs font-semibold text-[#1a2b6d] leading-relaxed">
                      Name and Email Address are mandatory to use credit/debit card on the platform. This is required by the payment processing engine. Only Name is required for payment via Bank transfer.
                    </p>
                 </div>

                 <div className="bg-[#F8F9FB] p-8 rounded-[2rem] border border-slate-100 space-y-6">
                    <div className="space-y-2">
                       <Label className="text-slate-700 font-bold text-sm">Name:</Label>
                       <Input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="h-14 bg-white border-none rounded-xl px-4"
                       />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-slate-700 font-bold text-sm">Email:</Label>
                       <Input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="JohnDoe@gmail.com" 
                        className="h-14 bg-white border-none rounded-xl px-4"
                       />
                    </div>
                    <div className="space-y-2">
                       <Label className="text-slate-700 font-bold text-sm">Phone Number:</Label>
                       <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Your phone number here" 
                        className="h-14 bg-white border-none rounded-xl px-4"
                       />
                    </div>
                    <div className="flex items-center space-x-3 pt-2">
                       <input 
                        type="checkbox" 
                        checked={formData.anonymous}
                        onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                        id="anonymous" 
                        className="w-5 h-5 rounded border-slate-300 accent-[#335CFF]"
                       />
                       <Label htmlFor="anonymous" className="text-sm font-bold text-slate-700 cursor-pointer">Donate as anonymous</Label>
                    </div>
                 </div>

                 <p className="text-[10px] text-slate-400 leading-relaxed text-center italic">
                  Your generosity will enable us to assists these students and young graduates in the rural community...
                </p>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleBack} variant="outline" className="flex-1 h-14 rounded-xl bg-slate-50 border-none font-bold text-slate-500">
                    Back
                  </Button>
                  <Button onClick={handleNext} className="flex-1 h-14 rounded-xl bg-[#335CFF] hover:bg-blue-700 text-white font-bold">
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                 <div className="bg-[#F8F9FB] py-4 px-8 rounded-[2rem] border border-slate-100">
                    <p className="text-lg font-bold text-[#1a2b6d] mb-4 pt-4 border-b border-slate-200 pb-4">Select Payment Method</p>
                    <RadioGroup 
                      value={formData.paymentMethod} 
                      onValueChange={(val) => setFormData({...formData, paymentMethod: val})}
                      className="space-y-0"
                    >
                      <div className="flex items-center space-x-4 py-8 border-b border-slate-200">
                        <RadioGroupItem value="bank_transfer" id="pm-bank" className="w-6 h-6" />
                        <Label htmlFor="pm-bank" className="text-xl font-bold text-slate-800 cursor-pointer">Bank Transfer</Label>
                      </div>
                      <div className="flex items-center space-x-4 py-8">
                        <RadioGroupItem value="online_banking" id="pm-online" className="w-6 h-6" />
                        <Label htmlFor="pm-online" className="text-xl font-bold text-slate-800 cursor-pointer">Online Banking</Label>
                      </div>
                    </RadioGroup>
                 </div>

                 <p className="text-[10px] text-slate-400 leading-relaxed text-center italic">
                  Your generosity will enable us to assists these students and young graduates in the rural community...
                </p>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleBack} variant="outline" className="flex-1 h-14 rounded-xl bg-slate-50 border-none font-bold text-slate-500">
                    Back
                  </Button>
                  <Button onClick={handleNext} className="flex-1 h-14 rounded-xl bg-[#335CFF] hover:bg-blue-700 text-white font-bold">
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                 <div className="bg-[#F8F9FB] p-8 rounded-[2rem] border border-slate-100 space-y-6">
                    <p className="text-lg font-bold text-[#1a2b6d] border-b border-slate-200 pb-4">Bank Transfer</p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-slate-700 font-bold text-sm">Account Number:</Label>
                        <div className="relative">
                          <Input readOnly value="000000000" className="h-20 bg-white border-none rounded-2xl px-6 text-2xl font-bold tracking-widest" />
                          <button onClick={() => copyToClipboard("000000000")} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                            <Copy className="w-6 h-6 text-slate-400" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-bold text-sm">Bank Name:</Label>
                        <div className="relative">
                          <Input readOnly value="Zenith Bank" className="h-20 bg-white border-none rounded-2xl px-6 text-2xl font-bold" />
                          <button onClick={() => copyToClipboard("Zenith Bank")} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-lg transition-colors">
                            <Copy className="w-6 h-6 text-slate-400" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-slate-700 font-bold text-sm">Remark:</Label>
                        <div className="h-20 bg-white border-none rounded-2xl px-6 flex items-center text-slate-300">
                          Transfer narration here...
                        </div>
                      </div>
                    </div>
                 </div>

                 <p className="text-center text-slate-400 text-xs font-bold">
                   This account details is only valid for <span className="text-slate-900 font-extrabold">{formatTime(timeLeft)}</span>
                 </p>

                <div className="flex gap-4 pt-4">
                  <Button onClick={handleBack} variant="outline" className="flex-1 h-14 rounded-xl bg-slate-50 border-none font-bold text-slate-500">
                    Back
                  </Button>
                  <Button onClick={() => setStep(5)} className="flex-1 h-14 rounded-xl bg-[#335CFF] hover:bg-blue-700 text-white font-bold">
                    I have made the Transfer
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="success" 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                  <div className="w-24 h-24 bg-[#00BA88]/10 rounded-full flex items-center justify-center p-4">
                    <div className="w-full h-full bg-[#00BA88] rounded-full flex items-center justify-center shadow-lg shadow-[#00BA88]/20">
                      <Check className="w-12 h-12 text-white stroke-[4px]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-extrabold text-[#1a2b6d]">Transfer Successful!</h3>
                    <p className="text-slate-500 font-medium">The transfer has been completed successfully.</p>
                  </div>
                  
                  <div className="flex gap-4 w-full pt-8">
                    <Button onClick={() => setStep(1)} variant="outline" className="flex-1 h-14 rounded-xl bg-slate-50 border-none font-bold text-slate-500">
                      Back
                    </Button>
                    <Button onClick={onClose} className="flex-1 h-14 rounded-xl bg-[#335CFF] hover:bg-blue-700 text-white font-bold">
                      Done
                    </Button>
                  </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
