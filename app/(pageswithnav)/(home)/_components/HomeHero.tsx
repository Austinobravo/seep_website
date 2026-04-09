import React from 'react'
import HomeHeroMarquee from './HomeHeroMarquee'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/globals/LinkButton'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const HomeHero = () => {
  return (
    <section className='flex gap-2 not-lg:flex-col max-w-360 mx-auto lg:px-20 px-10 max-h-120'>
        <div className='lg:basis-2/5 my-auto h-fit space-y-6'>
            <h1 className="lg:text-4xl font-general-sans">Social Entrepreneurial Enhancement <span className='text-neutral-400'>Support Center (SEE-SC)</span></h1>
            <h2 className="text-neutral-600">Creating a network of business opportunities and ideas, for a sustainable global economy.</h2>
            <div className='flex gap-x-4 items-center'>
                <LinkButton title='Learn more' icon={ArrowRight} path='' />
                <Link href={``}>
                    <Button className="bg-[#476CFF1A] text-seep-primary py-6! px-10 hover:scale-105 transition-all duration-700 cursor-pointer rounded-full hover:bg-[#476CFF1A]/80">Donate</Button>
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