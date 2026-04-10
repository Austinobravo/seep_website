"use client"
import { Dot, Play } from 'lucide-react'
import React from 'react'

const Founder = () => {
     const videoRef = React.useRef<any>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }
  return (
    <div className='bg-neutral-900 py-20'>
        <div className="mx-auto max-w-360 lg:px-20 px-10 flex flex-col lg:flex-row gap-10">
            <div className='lg:basis-1/2 space-y-10'>
                <h3 className='text-neutral-50 text-3xl font-medium mb-6 max-w-4/5'>
                    SEE Support founder and CEO Bright Ohakam
                </h3>
                
                {/* Video Implementation */}
                <div 
                 onMouseEnter={handlePlay}
                 onMouseLeave={handlePause}
                className="group relative overflow-hidden rounded-2xl bg-black border border-neutral-800 cursor-pointer max-w-100.75 min-h-[369px]">
                    <video 
                        ref={videoRef}
                        className="w-full h-auto max-w-100.75 min-h-[369px] aspect-video object-left object-cover transition-opacity duration-500"
                        // controls
                        preload="metadata"
                        muted // Required for most browsers to allow autoplay on hover
                        playsInline // Essential for iOS edge cases
                        loop

                        // poster="/first1.jpg" // Optional: adds a preview image
                    >
                        <source src="/founder.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                     {!isPlaying && (
                            <div className="absolute inset-0 flex items-end justify-start p-6 transition-opacity group-hover:opacity-0">
                                <button 
                                    onClick={handlePlay}
                                    className="flex items-center gap-3 px-6 py-3 rounded-full 
                                               text-white backdrop-blur bg-transparent
                                               shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_10px_rgba(0,0,0,0.3)]
                                               hover:scale-105 transition-transform active:scale-95"
                                >
                                    <span className="font-medium tracking-tight">Watch the video</span>
                                    <div className="bg-white/40 p-1 rounded-full shadow-inner">
                                        <Play size={16} fill="white" className="text-white translate-x-0.5" />
                                    </div>
                                </button>
                            </div>
                        )}
                </div>
            </div>

            <div className='space-y-3 lg:basis-1/2'>
                <h3 className="text-blue-100 text-xs font-medium flex items-center">
                    <Dot className="text-blue-400" /> BIO
                </h3>
                <div className='text-lg lg:text-xl space-y-20 text-neutral-300 leading-relaxed'>
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
