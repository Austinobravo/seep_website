import Footer from '@/components/globals/Footer'
import Navbar from '@/components/globals/Navbar'
import React, { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>
const PagesWithNavLayout = ({children}: Props) => {
  return (
    <div>
        <section>
            <Navbar />
        </section>
        <main className='pt-28'>
            {children}
        </main>
        <section>
            <Footer />
        </section>
        

    </div>
  )
}

export default PagesWithNavLayout