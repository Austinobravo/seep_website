import Footer from '@/components/globals/Footer'
import Navbar from '@/components/globals/Navbar'
import React, { PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

type Props = PropsWithChildren<{}>
const PagesWithNavLayout = ({children}: Props) => {
  return (
    <div>
        <section>
            <Navbar />
        </section>
        <main className='pt-28'>
            {children}
            <Toaster />
        </main>
        <section>
            <Footer />
        </section>
        

    </div>
  )
}

export default PagesWithNavLayout