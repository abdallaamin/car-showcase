import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'



const metadata: Metadata = {
  title: 'car hub',
  description: 'Discover worlds best car showcase application',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}


export {
  metadata
}