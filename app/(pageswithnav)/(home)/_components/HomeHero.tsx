import React from 'react'
import HomeHeroMarquee from './HomeHeroMarquee'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/globals/LinkButton'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <section className='flex gap-2 not-lg:flex-col gap-y-10 max-w-360 mx-auto lg:px-20 px-5 lg:max-h-120 max-h-207'>
        <div className='lg:basis-2/5 my-auto h-fit space-y-6'>
            <h1 className="lg:text-4xl text-3xl font-general-sans text-center">Social Entrepreneurial Enhancement <span className='text-neutral-400'>Support Center (SEE-SC)</span></h1>
            <h2 className="text-neutral-600 text-center ">Creating a network of business opportunities and ideas, for a sustainable global economy.</h2>
            <div className='flex gap-x-4 not-lg:flex-col gap-y-4 items-center'>
                <LinkButton title='Learn more' icon={ArrowRight} path='' className='py-10'/>
                <Link href={``}>
                    <Button className="bg-[#476CFF1A] text-seep-primary py-6! w-40 hover:scale-105 transition-all duration-700 cursor-pointer rounded-full hover:bg-[#476CFF1A]/80">Donate</Button>
                </Link>
            </div>
        </div>
        <div className='lg:basis-3/5 overflow-hidden'>
            <HomeHeroMarquee />
        </div>
        
    </section>
  )
}

export default HomeHero