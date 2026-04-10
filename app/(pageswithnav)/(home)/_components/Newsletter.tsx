import React from 'react'
import { NewsletterForm } from './NewsletterForm'

const Newsletter = () => {
  return (
     <section className="bg-linear-to-b from-[#FFFFFF] via-[#F1F4FB] to-[#DDE7EF]">
        <div className='mx-auto max-w-360 py-10 lg:px-20 px-5 space-y-1'>
            <h2 className='text-center text-2xl font-medium py-4 text-neutral-800'>Stay Updated. Stay Involved.</h2>
            <p className='text-sm text-neutral-800 text-center lg:max-w-4/12 mx-auto'>Subscribe to receive program updates, impact stories, and opportunities to support our work in communities.</p>
            <NewsletterForm />
            
        </div>
    </section>
  )
}

export default Newsletter