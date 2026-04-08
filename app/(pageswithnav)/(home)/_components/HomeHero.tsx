import React from 'react'
import HomeHeroMarquee from './HomeHeroMarquee'
import { Button } from '@/components/ui/button'
import LinkButton from '@/components/globals/LinkButton'
import { ArrowRight } from 'lucide-react'

const HomeHero = () => {
  return (
    <section className='flex gap-2 not-lg:flex-col'>
        <div className='lg:basis-1/2'>
            <h1 className="lg:text-4xl font-general-sans">Social Entrepreneurial Enhancement <span className='text-neutral-400'>Support Center (SEE-SC)</span></h1>
            <h2 className="text-neutral-600">Creating a network of business opportunities and ideas, for a sustainable global economy.</h2>
            <div>
                <LinkButton title='Learn more' icon={ArrowRight} path='' />
                <Button className="bg-[#476CFF1A] text-seep-primary hover:bg-[#476CFF1A]/80">Donate</Button>
            </div>
        </div>
        <div>
            <HomeHeroMarquee />
        </div>
        
    </section>
  )
}

export default HomeHero