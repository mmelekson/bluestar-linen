'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SITE } from '@/lib/siteConfig'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/clients', label: 'Clients' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/careers', label: 'Careers' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-brand-700 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-18 py-3">
        <Link href="/" aria-label="Blue Star Linen — home">
          <Image
            src="/images/logo.png"
            alt="Blue Star Linen logo"
            width={180}
            height={50}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-brand-100 transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-white text-brand-700 hover:bg-brand-100 font-bold px-5 py-2 rounded transition-colors whitespace-nowrap"
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, '')}`}
            className="text-sm opacity-80 hover:opacity-100 transition-opacity"
          >
            {SITE.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="lg:hidden bg-brand-900 px-4 pb-5 flex flex-col gap-1 text-sm font-medium border-t border-brand-500"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 border-b border-brand-700 hover:text-brand-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 bg-white text-brand-700 font-bold px-5 py-3 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, '')}`}
            className="py-3 text-center opacity-80"
          >
            {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
