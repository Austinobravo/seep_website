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
  return (
    <section className='flex justify-center items-center'>
        <div className='bg-white p-2 w-full max-w-249 mx-auto flex justify-between items-center absolute top-4 rounded-full'>
            <Link href="/">
            <figure className='bg-neutral-100 px-3 py-5 rounded-full'>
                <Image src={`/logo.png`} width={500} height={500} alt='Logo' className='w-10 h-4' />
                <figcaption className='sr-only'>Logo</figcaption>
            </figure>
            </Link>
            <div className='flex gap-6'>
                {links.map((link) => (
                    <Link key={link.name} href={link.href} className='hover:font-bold transition duration-300'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className='flex items-center gap-2'>
                <Link href={``}>
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
                <LinkButton title='Donate' path='' />

            </div>
            
        </div>

    </section>
  )
}

export default DesktopNav