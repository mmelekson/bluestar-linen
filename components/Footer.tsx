import Link from 'next/link'
import { SITE } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-12 pb-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-3">Blue Star Linen</h2>
          <p className="text-sm text-navy-100 leading-relaxed">
            Women-owned commercial laundry &amp; linen rental serving South Florida since 2003.
            24/7 service for hotels, restaurants, spas, and condominiums.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Services</h2>
          <ul className="text-sm text-navy-100 space-y-2">
            <li>
              <Link href="/linen-rental" className="hover:text-gold-400 transition-colors">
                Linen Rental
              </Link>
            </li>
            <li>
              <Link href="/industrial-laundry" className="hover:text-gold-400 transition-colors">
                Industrial Laundry
              </Link>
            </li>
            <li>
              <Link href="/service-areas" className="hover:text-gold-400 transition-colors">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-400 transition-colors">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-3">Contact</h2>
          <div className="text-sm text-navy-100 space-y-2">
            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="block hover:text-gold-400 transition-colors"
            >
              {SITE.phone}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="block hover:text-gold-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on Instagram"
              className="text-navy-100 hover:text-gold-400 transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on Facebook"
              className="text-navy-100 hover:text-gold-400 transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on LinkedIn"
              className="text-navy-100 hover:text-gold-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-navy-100 mt-10 px-4">
        © {new Date().getFullYear()} Blue Star Linen. All rights reserved. Women-owned &amp;
        Minority-owned Business.
      </p>
    </footer>
  )
}
