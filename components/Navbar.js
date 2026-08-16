'use client'

import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const WHATSAPP_NUMBER = '2348137640944'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-20 h-20">
        <Link href="/" className="font-display text-2xl tracking-[0.1em] font-bold text-neutral-900">
          CRESPO <span className="text-gold">GADGETS</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-600 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to buy a phone.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-gold !py-2.5 !px-6 text-sm"
        >
          Chat on WhatsApp
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`h-[2px] w-6 bg-gold transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 bg-gold transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-6 bg-gold transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-neutral-600 hover:text-gold transition-colors text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to buy a phone.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold !py-2.5 text-sm w-full"
          >
            Chat on WhatsApp
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar