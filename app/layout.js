import './globals.css'
import { Philosopher, Lobster_Two } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
  display: 'swap',
})

const lobsterTwo = Lobster_Two({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'NOIR — Premium Phones',
  description: 'Flagship smartphones, curated. Black and gold, only the essentials.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${philosopher.variable} ${lobsterTwo.variable}`}>
      <body className="font-body bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}