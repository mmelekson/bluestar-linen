import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import QuoteForm from '@/components/QuoteForm'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Request a Quote — Commercial Laundry & Linen Rental',
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

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">Request a Quote</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Request a Free Quote</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Tell us about your property and we&rsquo;ll put together a custom commercial laundry or linen
            rental program that fits your operation. No commitment required.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy-900 mb-8">Quote Request Form</h2>
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-navy-50 rounded-xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Info</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Phone</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, '')}`}
                    className="text-navy-500 hover:text-navy-700 font-medium"
                  >
                    {SITE.phone}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-500 hover:text-navy-700 font-medium"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Availability</p>
                  <p>24 hours a day, 7 days a week</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">Service Area</p>
                  <p>Miami-Dade &middot; Broward &middot; Palm Beach</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-100">
                <h3 className="font-bold text-navy-900 mb-3">Follow Us</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-500 hover:text-navy-700 transition-colors"
                  >
                    Instagram &mdash; @blue.starlinen
                  </a>
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-500 hover:text-navy-700 transition-colors"
                  >
                    Facebook &mdash; oceanlinen
                  </a>
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-500 hover:text-navy-700 transition-colors"
                  >
                    LinkedIn &mdash; Ofer Manor
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
