import { Dot } from 'lucide-react'
import React from 'react'

const Founder = () => {
  return (
    <div className='bg-neutral-900 py-16 px-6'>
        <div className="mx-auto max-w-360 flex flex-col lg:flex-row gap-10">
            <div className='lg:basis-1/2'>
                <h3 className='text-neutral-50 text-3xl font-medium mb-6'>
                    SEE Support founder and CEO Bright Ohakam
                </h3>
                
                {/* Video Implementation */}
                <div className="overflow-hidden rounded-2xl bg-black border border-neutral-800">
                    <video 
                        className="w-full h-auto aspect-video object-cover"
                        controls
                        preload="metadata"
                        poster="/first1.jpg" // Optional: adds a preview image
                    >
                        <source src="/founder.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className='space-y-3 lg:basis-1/2'>
                <h3 className="text-blue-100 text-xs font-medium flex items-center">
                    <Dot className="text-blue-400" /> BIO
                </h3>
                <div className='text-lg lg:text-xl space-y-7 text-neutral-300 leading-relaxed'>
                    <p>
                        As the founder of SEE-Support Centre, my journey began with a single observation: 
                        Africa’s greatest resource isn’t buried in the ground; it is rather found in the 
                        minds of our youth. I established this social enterprise to bridge the gap between 
                        academic learning and real-world entrepreneurial success.
                    </p>
                    <p>
                        Through our Student Entrepreneurial Empowerment Programme (SEEP), we are not just 
                        offering vocational training, teaching coding or design; we are nurturing the 
                        future business leaders and job creators of 2030 and beyond.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Founder
