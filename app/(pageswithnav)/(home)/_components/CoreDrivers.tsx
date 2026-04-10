import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image'
import CoreDriversCard from './CoreDriversCard'

const CoreDrivers = () => {
  return (
    <section className="bg-linear-to-b from-[#F4F6F6] via-[#E9F0F4] to-[#DFE5E9]">
      <div className="max-w-360 mx-auto py-10 space-y-7">
        <h2 className='text-center lg:text-4xl font-medium'>Our Core Drivers</h2>
        <Tabs defaultValue="research" className="2xl:min-w-260 lg:w-200 mx-auto border bg-neutral-50 shadow rounded-2xl p-4">
          <TabsList className='bg-neutral-100! mx-auto space-x-10 min-h-15 px-4 py-2 lg:w-190'>
            <TabsTrigger value="research" className='data-active:bg-neutral-50 cursor-pointer data-active:py-4 data-active:px-4 rounded font-medium text-neutral-400 data-active:text-seep-primary!'>Research</TabsTrigger>
            <TabsTrigger value="innovation" className='data-active:bg-neutral-50 cursor-pointer data-active:py-4 data-active:px-4 rounded font-medium text-neutral-400 data-active:text-seep-primary!'>Innovation</TabsTrigger>
            <TabsTrigger value="empowerment" className='data-active:bg-neutral-50 cursor-pointer data-active:py-4 data-active:px-4 rounded font-medium text-neutral-400 data-active:text-seep-primary!'>Empowerment</TabsTrigger>
            <TabsTrigger value="science" className='data-active:bg-neutral-50 cursor-pointer data-active:py-4 data-active:px-4 rounded font-medium text-neutral-400 data-active:text-seep-primary!'>Science</TabsTrigger>
            <TabsTrigger value="technology" className='data-active:bg-neutral-50 cursor-pointer data-active:py-4 data-active:px-4 rounded font-medium text-neutral-400 data-active:text-seep-primary!'>Technology</TabsTrigger>
          </TabsList>
          <TabsContent value="research" className=''>
            <CoreDriversCard heading='Research' paragraph='We drive evidence-based research to understand real community challenges and uncover practical solutions. Our studies focus on education, social development, and sustainable growth. By gathering reliable data and local insights, we ensure every program is informed, measurable, and impactful.' image='/research.jpg'/>
          </TabsContent>
          <TabsContent value="innovation">
            <CoreDriversCard heading='Innovation' paragraph='We design innovative approaches that respond to evolving social and educational needs. Through creative problem-solving and collaborative thinking, we develop scalable solutions that improve access and opportunity. Innovation allows us to adapt quickly and deliver smarter, more effective programs.' image='/innovation.jpg'/>
            
          </TabsContent>
          <TabsContent value="empowerment">
            <CoreDriversCard heading='Empowerment' paragraph='We empower individuals and communities with the skills, knowledge, and resources they need to thrive. Our programs build confidence, leadership, and long-term capacity. By investing in people, we create sustainable change that continues beyond our direct involvement.' image='/empowerment.jpg'/>
          </TabsContent>
          <TabsContent value="science">
            <CoreDriversCard heading='Science' paragraph='We leverage science and technology to enhance learning, expand access, and improve program delivery. Digital tools and data systems enable greater efficiency, transparency, and impact measurement. By integrating technology responsibly, we prepare communities for a rapidly advancing world.' image='/science.jpg'/>
            
          </TabsContent>
          <TabsContent value="technology">
            <CoreDriversCard heading='Technology' paragraph='We leverage science and technology to enhance learning, expand access, and improve program delivery. Digital tools and data systems enable greater efficiency, transparency, and impact measurement. By integrating technology responsibly, we prepare communities for a rapidly advancing world.' image='/technology.jpg'/>
            
          </TabsContent>
        </Tabs>

      </div>
    </section>
  )
}

export default CoreDrivers