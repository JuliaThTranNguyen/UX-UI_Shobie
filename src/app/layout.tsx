import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeaderTop from '@/components/HeaderTop';
import HeaderMain from '@/components/HeaderMain';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happy Life',
  description: 'Shopping App - UI/UX design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
