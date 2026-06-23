import Link from 'next/link'
import { SITE } from '@/lib/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="font-bold text-lg mb-4">Blue Star Linen</h2>
          <p className="text-sm text-brand-100 leading-relaxed mb-4">
            Your trusted partner in premium linen and laundry services. Women-owned, minority-led,
            serving South Florida since 2003.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on Instagram"
              className="text-brand-100 hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on Facebook"
              className="text-brand-100 hover:text-white transition-colors text-sm"
            >
              Facebook
            </a>
            <a
              href={SITE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Blue Star Linen on LinkedIn"
              className="text-brand-100 hover:text-white transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="font-bold text-lg mb-4">Navigation</h2>
          <ul className="text-sm text-brand-100 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about-us', label: 'About Us' },
              { href: '/services', label: 'Services' },
              { href: '/clients', label: 'Clients' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/careers', label: 'Careers' },
              { href: '/contact', label: 'Request a Quote' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold text-lg mb-4">Contact</h2>
          <address className="not-italic text-sm text-brand-100 space-y-2">
            <p>{SITE.address.streetAddress}</p>
            <p>{SITE.address.addressLocality}, {SITE.address.addressRegion} {SITE.address.postalCode}</p>
            <a href={`tel:${SITE.phone.replace(/\D/g, '')}`} className="block hover:text-white transition-colors mt-3">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="block hover:text-white transition-colors">
              {SITE.email}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition-colors"
            >
              WhatsApp: +1-786-547-2572
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-brand-700 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-100">
        <p>© {new Date().getFullYear()} Blue Star Linen. All rights reserved.</p>
        <p>Women-Owned &amp; Minority-Owned Business · Miami, Florida</p>
      </div>
    </footer>
  )
}
