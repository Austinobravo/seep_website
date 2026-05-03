import React from 'react'
import { FooterStars } from '../svgs'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'

interface FooterChild {
  title: string;
  link?: string;    
  isEmail?: boolean;
}

interface FooterSection {
  title: string;
  children: FooterChild[];
}


const footerLinks: FooterSection[] = [
  {
    title: "Company",
    children: [
      {
        link: "/gallery",
        title: "Gallery"
      },
      {
        link: "/project",
        title: "Projects"
      },
      {
        link: "/news-and-events",
        title: "News and events"
      },
    ]
  },
  {
    title: "Testimonials",
    children: [
      {
        link: "/join-us",
        title: "Join Us"
      },
      {
        link: "/donate",
        title: "Donate"
      },
      {
        link: "/contact",
        title: "Contact"
      },
    ]
  },
  {
    title: "Information",
    children: [
      {
        link: "/faqs",
        title: "Faqs"
      },
      {
        link: "/privacy-policy",
        title: "Privacy Policy"
      },
    ]
  },
  {
    title: "Contact",
    children: [
      {
        title: "seepng.info@gmail.com",
        isEmail: true
      },
    ]
  },
]

const socials = [
  {
    link: "https://www.instagram.com/aparte.africa?igsh=MWV5bmE5dG1uZ210dw%3D%3D&utm_source=qr",
    icon: FaInstagram,
    title: "Instagram"
  },
  {
    link: "",
    icon: FaTiktok,
    title: "Tiktok"
  },
  {
    link: "",
    icon: FaLinkedinIn,
    title: "LinkedIn"
  },
  {
    link: "",
    icon: FaYoutube,
    title: "Youtube"
  },
  {
    link: "",
    icon: FaXTwitter,
    title: "X"
  },
  {
    link: "https://www.facebook.com/share/16nT8ok3va/?mibextid=wwXIfr",
    icon: FaFacebookF,
    title: "Facebook"
  },
]
const Footer = () => {
  return (
    <section className='bg-linear-to-r from-[#003F89] via-[#01050D] to-[#000000] w-full  z-10 relative'>
      <footer className='flex flex-col justify-between not-lg:gap-y-10 lg:px-20 px-5 py-7 max-w-360 mx-auto  min-h-110 '>
          <FooterStars className='absolute left-0  -z-10 not-lg:max-w-75'/>
        <div className='flex not-lg:flex-col pt-10 gap-y-3'>
          <div className='lg:basis-4/12'>
            <figure className='text-neutral-100 flex gap-2 items-center'>
              <span className='bg-neutral-100  rounded-full px-2 py-3'>
                <Image src={`/logo.png`} width={500} height={500} alt=''  className='w-7 h-5'/>
              </span>
              <figcaption className='font-medium'>SEE-SUPPORT CENTRE</figcaption>
            </figure>
          </div>
          <div className='lg:basis-6/12 flex-1 space-y-10'>
            <h3 className='text-neutral-100'>Building People. Powering Progress.</h3>
            <div className='flex justify-between not-lg:flex-col gap-y-10'>
              {footerLinks.map((footerLink, index) => (
                <div key={index} className='space-y-7'>
                  <h3 className='text-neutral-100'>{footerLink.title}</h3>
                  <ul className='space-y-4'>
                    {footerLink.children.map((child, linkIndex) => (
                      <li key={linkIndex} className=' hover:translate-x-1 transition-all duration-500'>
                        <Link href={child.isEmail ? `mailto:${child.title}` : (child.link || "#")} className={`text-neutral-300 hover:text-neutral-500 transition-all duration-500 text-sm ${child.isEmail && "underline underline-offset-4"}`}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

        </div>
        <div className='flex justify-between not-lg:flex-col not-lg:items-center gap-y-4'>
          <span className='text-neutral-400'>
            &copy; SEE-Support centre. All rights reserved {new Date().getFullYear()}
          </span>
          <div className='flex gap-5 w-fit'>
            {socials.map((social) => (
                  <Link key={social.title} title={social.title} href={`${social.link}`} target='_blank' className='hover:bg-gray-200 bg-[#FFFFFF12] hover:text-black/80 text-[#CACFD8] rounded-full transition-all duration-500 size-9 flex justify-center items-center'>
                      <social.icon  size={20}/>
                  </Link>
              
            ))}
          </div>
        </div>
        
      </footer>
    </section>
  )
}

export default Footer