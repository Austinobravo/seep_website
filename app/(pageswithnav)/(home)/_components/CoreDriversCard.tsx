import Image from 'next/image'
import React from 'react'

const CoreDriversCard = ({image, heading, paragraph}: {image:string, heading: string, paragraph: string}) => {
  return (
    <div className='shadow-none bg-transparent border-0! outline-0! ring-0 rounded-none flex gap-4 pt-7'>
        <div className='space-y-10 basis-1/2 flex flex-col justify-between'>
        <h2 className='font-medium text-4xl'>{heading}</h2>
        <p className="text-neutral-500 max-w-80">
            {paragraph}
        </p>
        </div>
        <div className="basis-1/2">
        <Image src={`${image}`} width={500} height={500} alt="" className='rounded-2xl h-79.75 object-cover' />
        </div>
    </div>
  )
}

export default CoreDriversCard