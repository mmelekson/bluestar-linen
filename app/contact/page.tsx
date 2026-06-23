import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import QuoteForm from '@/components/QuoteForm'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Request a Quote | Blue Star Linen – Commercial Laundry & Linen Rental',
  description:
    'Contact Blue Star Linen to request a free quote for commercial laundry or linen rental service in Miami, Broward, or West Palm Beach. Call 954-682-6311.',
  path: '/contact',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${SITE.url}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-brand-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-brand-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Request a Quote</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-brand-100 max-w-2xl">
            Tell us about your property and we&rsquo;ll put together a custom commercial laundry or
            linen rental program that fits your operation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-700 mb-8">Quote Request Form</h2>
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-brand-50 rounded-xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-brand-700 mb-6">Contact Info</h2>
              <address className="not-italic space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-brand-700 mb-1">Address</p>
                  <p>{SITE.address.streetAddress}</p>
                  <p>{SITE.address.addressLocality}, {SITE.address.addressRegion} {SITE.address.postalCode}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-700 mb-1">Phone</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                    className="text-steel-500 hover:text-steel-600 font-medium"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-brand-700 mb-1">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-steel-500 hover:text-steel-600 font-medium"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-brand-700 mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-500 hover:text-steel-600 font-medium"
                  >
                    +1-786-547-2572
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-brand-700 mb-1">Availability</p>
                  <p>24 hours a day, 7 days a week</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-700 mb-1">Service Area</p>
                  <p>Miami-Dade · Broward · Palm Beach</p>
                </div>
              </address>

              <div className="mt-8 pt-6 border-t border-brand-100">
                <h3 className="font-bold text-brand-700 mb-3">Follow Us</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer"
                    className="text-steel-500 hover:text-steel-600 transition-colors">
                    Instagram — @blue.starlinen
                  </a>
                  <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer"
                    className="text-steel-500 hover:text-steel-600 transition-colors">
                    Facebook — oceanlinen
                  </a>
                  <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="text-steel-500 hover:text-steel-600 transition-colors">
                    LinkedIn — Ofer Manor
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
