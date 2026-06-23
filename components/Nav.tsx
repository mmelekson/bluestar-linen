'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { SITE } from '@/lib/siteConfig'

const links = [
  { href: '/', label: 'Home' },
  { href: '/linen-rental', label: 'Linen Rental' },
  { href: '/industrial-laundry', label: 'Industrial Laundry' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3" aria-label="Blue Star Linen — home">
          {/* TODO: Replace logo-placeholder.svg with real Blue Star Linen logo */}
          <Image
            src="/logo-placeholder.svg"
            alt="Blue Star Linen logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium"
          aria-label="Main navigation"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gold-400 transition-colors">
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\D/g, '')}`}
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-4 py-2 rounded-md transition-colors"
          >
            {SITE.phone}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
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
          className="md:hidden bg-navy-700 px-4 pb-4 flex flex-col gap-3 text-sm font-medium"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-gold-400 py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone.replace(/\D/g, '')}`}
            className="bg-gold-500 text-navy-900 font-bold px-4 py-2 rounded-md text-center"
          >
            {SITE.phone}
          </a>
        </nav>
      )}
    </header>
  )
}
