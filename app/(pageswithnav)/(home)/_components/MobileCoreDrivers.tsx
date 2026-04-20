import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'

const drivers = [
    {
        title: "Research",
        paragraph: "We drive evidence-based research to understand real community challenges and uncover practical solutions. Our studies focus on education, social development, and sustainable growth. By gathering reliable data and local insights, we ensure every program is informed, measurable, and impactful.",
        image: "/research.jpg"
    },
    {
        title: "Innovation",
        paragraph: "We design innovative approaches that respond to evolving social and educational needs. Through creative problem-solving and collaborative thinking, we develop scalable solutions that improve access and opportunity. Innovation allows us to adapt quickly and deliver smarter, more effective programs.",
        image: "/innovation.jpg"
    },
    {
        title: "Empowerment",
        paragraph: "We empower individuals and communities with the skills, knowledge, and resources they need to thrive. Our programs build confidence, leadership, and long-term capacity. By investing in people, we create sustainable change that continues beyond our direct involvement.",
        image: "/empowerment.jpg"
    },
    {
        title: "Science",
        paragraph: "We leverage science and technology to enhance learning, expand access, and improve program delivery. Digital tools and data systems enable greater efficiency, transparency, and impact measurement. By integrating technology responsibly, we prepare communities for a rapidly advancing world.",
        image: "/science.jpg"
    },
    {
        title: "Technology",
        paragraph: "We leverage science and technology to enhance learning, expand access, and improve program delivery. Digital tools and data systems enable greater efficiency, transparency, and impact measurement. By integrating technology responsibly, we prepare communities for a rapidly advancing world.",
        image: "/technology.jpg"
    },
]
const MobileCoreDrivers = () => {
    return (
        <Accordion type="single" collapsible className="space-y-4 w-full">
            {drivers.map((driver, index) => (
                <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className='max-w-full shadow-sm  bg-neutral-50 rounded-2xl px-4 py-1'
                >
                    <AccordionTrigger isPlus={true} className='cursor-pointer text-2xl font-medium hover:no-underline text-neutral-700'>
                        {driver.title}
                    </AccordionTrigger>
                    <AccordionContent className='text-[#525866] text-sm leading-relaxed space-y-4'>
                        <span>
                            {driver.paragraph}
                        </span>


                        <Image src={driver.image} width={500} height={500} alt={driver.title} className='mt-5 rounded-lg'/>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default MobileCoreDrivers