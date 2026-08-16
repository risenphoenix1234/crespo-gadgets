'use client'

import Link from 'next/link'

const WHATSAPP_NUMBER = '2348137640944'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-2xl tracking-[0.1em] font-bold text-neutral-900">
            CRESPO <span className="text-gold">GADGETS</span>
          </p>
          <p className="mt-4 text-sm text-neutral-500 leading-relaxed max-w-xs">
            All phones available — buy, sell and swap. Brand new and UK-used, across every top brand.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Shop</h4>
          <ul className="space-y-3 text-sm text-neutral-500">
            <li><Link href="/shop" className="hover:text-gold transition-colors">Brand New Phones</Link></li>
            <li><Link href="/shop" className="hover:text-gold transition-colors">UK Used Phones</Link></li>
            <li><Link href="/shop" className="hover:text-gold transition-colors">Accessories</Link></li>
            <li><Link href="/shop" className="hover:text-gold transition-colors">Swap Deals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-neutral-500">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link href="/" className="hover:text-gold transition-colors">Trade-In</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Get in touch</h4>
          <p className="text-sm text-neutral-500 mb-4">
            Best deals move fast on WhatsApp — reach out directly.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to buy a phone.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient text-black text-sm font-semibold px-5 py-2.5"
            >
              Chat on WhatsApp
            </Link>
            
             <a href="tel:08137640944"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 text-neutral-700 text-sm font-semibold px-5 py-2.5 hover:border-gold hover:text-gold transition-colors"
            >
              Call 0813 764 0944
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 px-6 sm:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Crespo Gadgets. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer