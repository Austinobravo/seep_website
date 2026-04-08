import { StrippedLines } from '@/components/svgs'
import React from 'react'
import { ArrowUpRight } from "lucide-react"
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
        <div>
            <h2>Trusted by 3+ Partners</h2>
            <div>
                <StrippedLines />
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="">
                            {item.logo !== "" ?
                            <div>
                                <Image src={item.logo} width={500} height={500} alt="Logo" />
                                <ArrowUpRight />

                            </div>
                            :
                            <Image src={`/partnerComingSoon`} width={500} height={500} alt="Logo" />
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