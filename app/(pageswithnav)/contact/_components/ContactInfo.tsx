import React from 'react'

export default function ContactInfo() {
  return (
    <div className="space-y-10 py-4">
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-slate-800">Email support</h3>
        <p className="text-slate-500 text-base">Email us and we'll get back to you within 24 hours.</p>
        <div className="flex flex-col space-y-1">
          <a href="mailto:info.seesc.official@gmail.com" className="text-slate-900 font-semibold hover:text-[#335CFF] transition-colors underline decoration-slate-300">
            info.seesc.official@gmail.com
          </a>
          <a href="mailto:seepng.info@gmail.com" className="text-slate-900 font-semibold hover:text-[#335CFF] transition-colors underline decoration-slate-300">
            seepng.info@gmail.com
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-slate-800">Chat support</h3>
        <p className="text-slate-500 text-base">Chat to our staff 24/7 for instant access to support</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-semibold">+234 806 375 0853</span>
            <span className="bg-[#E7F9F3] text-[#00BA88] text-xs font-bold px-3 py-1 rounded-full border border-[#00BA88]/20">
              • Online
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-slate-900 font-semibold">+234 916 208 5151</span>
            <span className="bg-[#E7F9F3] text-[#00BA88] text-xs font-bold px-3 py-1 rounded-full border border-[#00BA88]/20">
              • Online
            </span>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-slate-800">Call us</h3>
        <p className="text-slate-500 text-base">Mon - Fri, 9:00 AM - 5:00 PM (WAT/GMT +01:00)</p>
        <p className="text-slate-900 font-semibold">+234 916 208 5151</p>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-slate-800">Head Office</h3>
        <p className="text-slate-500 text-base">Visit our office Mon - Fri, 9:00 AM - 5:00 PM.</p>
        <p className="text-slate-900 font-semibold leading-relaxed max-w-xs underline decoration-slate-300">
          13 Kenneth Nwaigwe Avenue, World Bank Estate Owerri, Imo State.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-bold text-slate-800">Uyo Office</h3>
        <p className="text-slate-500 text-base">Visit our office Mon - Fri, 9:00 AM - 5:00 PM.</p>
        <p className="text-slate-900 font-semibold leading-relaxed max-w-sm underline decoration-slate-300">
          Apostle Umana Building, Uwern Lazarus Road, Osongoma Estate Extension Uyo, Akwa Ibom State.
        </p>
      </section>
    </div>
  )
}
