"use client"
import useNavigation from '@/hooks/useNavigation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import LinkButton from './LinkButton'

const DesktopNav = () => {
    const links = useNavigation()
        const [isNavScrolling, setIsNavScrolling] = React.useState<boolean>(false)
    
      React.useEffect(() => {
        const handleScroll = () => {
          setIsNavScrolling(window.scrollY > 40)
        }
    
        window.addEventListener('scroll', handleScroll)
    
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])
  return (
    <section className='flex justify-center items-center'>
        <div className={`bg-white p-2 w-full mx-auto flex justify-between items-center ${isNavScrolling ? "fixed top-0" : "absolute rounded-full max-w-249 top-4"} z-55 transition-all duration-700 ease-in-out  `}>
            <Link href="/">
            <figure className='bg-neutral-100 px-3 py-5 rounded-full'>
                <Image src={`/logo.png`} width={500} height={500} alt='Logo' className='w-10 h-4' />
                <figcaption className='sr-only'>Logo</figcaption>
            </figure>
            </Link>
            <div className='flex gap-6'>
                {links.filter(link => link.name !== "Contact Us" && link.name !== "Donate").map((link) => (
                    <Link key={link.name} href={link.href} className='hover:font-bold transition duration-300'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-2'>
                <Link href={`/contact`}>
                    <Button variant={`outline`} className='min-h-12 group cursor-pointer bg-neutral-50 border border-solid rounded-full'>
                        <span className="bg-blue-700 p-2 rounded-full text-white">
                            <ArrowRight  className='group-hover:translate-x-2 transition duration-500'/>
                        </span>
                        <span>Contact</span>

                    </Button>
                </Link>
                {/* <Link href={``}>
                    <Button className='bg-seep-primary min-h-12 cursor-pointer rounded-full px-6'>
                        Donate
                    </Button>
                </Link> */}
                <LinkButton title='Donate' path='/donate' />

            </div>
            
        </div>

    </section>
  )
}

export default DesktopNav