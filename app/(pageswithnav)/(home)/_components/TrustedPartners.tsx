import { StrippedLines } from '@/components/svgs'
import React from 'react'
import { ArrowUpRight } from "lucide-react"

import Image from "next/image"
const items = [
    {
        logo: "/trustedPartner1.png",
        link: ""
    },
    {
        logo: "/trustedPartner2.png",
        link: ""
    },
    {
        logo: "/trustedPartner3.png",
        link: ""
    },
    {
        logo: "",
        link: ""
    },
    {
        logo: "",
        link: ""
    },
    {
        logo: "",
        link: ""
    },
    {
        logo: "",
        link: ""
    },
]
const TrustedPartners = () => {
  return (
    <section className="bg-linear-to-b from-[#DFE5E9] via-[#C3CDE2] to-[#6D7586]">
        <div className='mx-auto max-w-360 py-10'>
            <h2 className='text-center'>Trusted by 3+ Partners</h2>
            <div className='flex justify-center items-center'>
                <StrippedLines />
                <div className='lg:grid-cols-4 grid gap-y-4'>
                    {items.map((item, index) => (
                        <div key={index} className="max-w-40 max-h-60">
                            {item.logo !== "" ?
                            <div className='flex '>
                                <Image src={item.logo} width={500} height={500} alt="Logo"  className='max-w-20 max-h-20 object-cover'/>
                                <ArrowUpRight />

                            </div>
                            :
                            <Image src={`/partnerComingSoon.png`} width={500} height={500} alt="Logo"  className='cursor-not-allowed pointer-events-auto!'/>
                            }

                        </div>
                    ))}
                </div>
                <StrippedLines />
            </div>
        </div>
    </section>
  )
}

export default TrustedPartners