import { StrippedLines } from '@/components/svgs'
import React from 'react'
import { ArrowUpRight } from "lucide-react"

import Image from "next/image"
const items = [
    {
        logo: "/trustedPartner1.png",
        link: "",
        title: "Adiaha Obong Secondary School"
    },
    {
        logo: "/trustedPartner2.png",
        link: "",
        title: "12th Empire"
    },
    {
        logo: "/trustedPartner3.png",
        link: "",
        title: "Government Technical School"
    },
    {
        logo: "",
        link: "",
        title: "Coming Soon"
    },
    {
        logo: "",
        link: "",
        title: "Coming Soon"
    },
    {
        logo: "",
        link: "",
        title: "Coming Soon"
    },
    {
        logo: "",
        link: "",
        title: "Coming Soon"
    },
    {
        logo: "",
        link: "",
        title: "Coming Soon"
    },
]
const TrustedPartners = () => {
  return (
    <section className="bg-linear-to-b from-[#DFE5E9] via-[#C3CDE2] to-[#6D7586]">
        <div className='mx-auto max-w-360 py-10 lg:px-20 px-5'>
            <h2 className='text-center lg:text-2xl font-medium py-4'>Trusted by 3+ Partners</h2>
            <div className='flex justify-center items-center'>
                <StrippedLines className='hidden lg:block'/>
                <div className='grid lg:grid-cols-4 grid-cols-3 divide-x divide-y divide-neutral-200 border-t border-l border-neutral-200 '>
                    {items.map((item, index) => (
                        <div title={item.title} key={index} className="max-w-40 max-h-60 py-2 bg-neutral-50 flex flex-col justify-center items-center border-r border-b border-neutral-200">
                            {item.logo !== "" ?
                            <div className='flex justify-center'>
                                <Image src={item.logo} width={500} height={500} alt="Logo"  className='w-[60.58px] h-[35.20px] object-contain'/>
                                <ArrowUpRight className='size-[10px]' />

                            </div>
                            :
                            <Image src={`/partnerComingSoon.png`} width={500} height={500} alt="Logo"  className='  object-cover cursor-not-allowed pointer-events-auto!'/>
                            }

                        </div>
                    ))}
                </div>
                <StrippedLines className='hidden lg:block'/>
            </div>
        </div>
    </section>
  )
}

export default TrustedPartners