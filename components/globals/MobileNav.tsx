'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useNavigation from '@/hooks/useNavigation'

const MobileNav = () => {
  const navLinks = useNavigation()
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const pathname = usePathname()

  // 1. Prevent background scroll
  useEffect(() => {
    if (isMenuToggled) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuToggled])

  // 2. Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 756) {
        setIsMenuToggled(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (pathname.includes('/admin')) return null

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
    <nav className="fixed top-0 left-0 w-full z-55">
      {/* Header Bar */}
      <div className={`flex px-6 items-center justify-between py-4 ${pathname.includes("/donate") ? isNavScrolling ? "bg-white" : "bg-transparent": "bg-white border-b"} relative z-50`}>
        <Link href="/" onClick={() => setIsMenuToggled(false)}>
          <div className="bg-neutral-100 px-2 py-6 rounded-full">
            <Image src="/logo.png" width={100} height={40} alt="Logo" className="w-auto h-6" />
          </div>
        </Link>

        <button 
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className="p-2 bg-neutral-100 rounded-full transition-colors hover:bg-neutral-200"
          aria-label="Toggle Menu"
        >
          {isMenuToggled ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out z-40 ${
          isMenuToggled 
            ? 'opacity-100 pointer-events-auto translate-y-0' 
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <ul className="flex flex-col border h-full space-y-4  pt-20">
          {navLinks.map((navLink, index) => {
            const isActive = pathname === navLink.href
            const isContact = navLink.name === 'Contact Us'

            return (
              <li key={index} className="w-full text-center">
                <Link 
                  href={navLink.href} 
                  onClick={() => setIsMenuToggled(false)}
                  className={`text-2xl transition-all block py-2 ${
                    isContact 
                      ? "bg-linear-to-r from-[#0097FF] to-[#CCEAFF] text-white px-8 rounded-full inline-block" 
                      : isActive 
                        ? 'text-[#0097FF] font-bold' 
                        : 'text-neutral-700 font-medium'
                  }`}
                >
                  {navLink.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default MobileNav
