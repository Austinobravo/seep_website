import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqsItems = [
    {
        question: "What is SEE-Support Centre?",
        answer: "We are a non-profit social enterprise dedicated to youth development. We bridge the gap between classroom learning and the modern economy by training young people, with focus on research, innovation, empowerment, science and technology."
    },
    {
        question: "Is SEE-Support Centre a government agency?",
        answer: `No. We are a "non-state actor," meaning we are an independent organisation. However, we often collaborate with government ministries to reach more young people.`
    },
    {
        question: "Who can benefit from your programs?",
        answer: "Our primary focus is on secondary schools and tertiary institution students, teachers and youth generally."
    },
    {
        question: "How can I partner with SEE-Support Centre?",
        answer: "We welcome collaborations with individuals, educational institutions, tech firms, private businesses and government/non-government agencies. If you share our vision for 2030, you can reach out via our Contact Us page to discuss project funding or resource sharing."
    },
    {
        question: "How is the organization funded?",
        answer: "We rely on partnerships, grants and donations from individuals and corporate organisations who believe in investing in human capacity development."
    },
    {
        question: "What is your goal for 2030?",
        answer: `Our "Vision 2030" is to have trained 1,000 students and successfully helped launch 10 youth-led startups across Nigeria.`
    },
]

const Faqs = () => {
    return (
        <section className='max-w-7xl mx-auto flex py-20 flex-col lg:flex-row lg:px-20 px-5 gap-10'>
            <h2 className='text-3xl font-medium lg:basis-1/2'>FAQS</h2>
            
            <div className='lg:basis-1/2 w-full'>
                <Accordion type="single" collapsible className="space-y-4 w-full">
                    {faqsItems.map((faq, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${index}`} 
                            className='lg:max-w-[556px] shadow-sm border border-solid border-[#E1E4EA] rounded-2xl px-4 py-1'
                        >
                            <AccordionTrigger isPlus={true} className='text-sm cursor-pointer  font-medium hover:no-underline'>
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className='text-[#525866] text-sm leading-relaxed'>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default Faqs
