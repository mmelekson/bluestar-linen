import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Service Areas — South Florida Commercial Laundry',
  description:
    'Blue Star Linen provides commercial laundry and linen rental throughout South Florida. Service areas include Miami-Dade, Broward, and Palm Beach counties.',
  path: '/service-areas',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
  ],
}

const areas = [
  {
    name: 'Miami-Dade County',
    slug: 'miami',
    cities: 'Miami, Coral Gables, Doral, Hialeah, Homestead, Key Biscayne, Miami Beach, Miami Gardens, North Miami',
    desc: 'Serving the hotels, restaurants, and spas of Greater Miami with daily commercial laundry and linen rental.',
  },
  {
    name: 'Broward County',
    slug: 'broward',
    cities: 'Fort Lauderdale, Hollywood, Pompano Beach, Deerfield Beach, Hallandale Beach, Coral Springs, Miramar',
    desc: "Full-service commercial laundry and linen rental throughout Broward County, including Fort Lauderdale's hospitality corridor.",
  },
  {
    name: 'Palm Beach County',
    slug: 'west-palm-beach',
    cities: 'West Palm Beach, Boca Raton, Delray Beach, Palm Beach Gardens, Boynton Beach, Lake Worth, Jupiter',
    desc: 'Premium linen rental and industrial laundry for Palm Beach County resorts, restaurants, and luxury properties.',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">Service Areas</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial Laundry &amp; Linen Rental &mdash; South Florida Service Areas
          </h1>
          <p className="text-xl text-navy-100">
            Blue Star Linen serves Miami-Dade, Broward, and Palm Beach counties with reliable
            commercial laundry and linen rental. If your business is in South Florida, we can
            build a route that works for you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((a) => (
            <div key={a.slug} className="border border-navy-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-navy-900 mb-3">{a.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{a.desc}</p>
              <p className="text-gray-500 text-xs mb-6">
                <strong>Cities served:</strong> {a.cities}
              </p>
              <Link
                href={`/service-areas/${a.slug}`}
                className="text-navy-500 font-semibold hover:text-navy-700 transition-colors text-sm"
              >
                Commercial laundry in {a.name} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">Not sure if we serve your area?</h2>
        <p className="text-navy-700 mb-6">
          Call us or send a message &mdash; we&rsquo;ll tell you right away and can often expand routes for the right client.
        </p>
        <Link
          href="/contact"
          className="bg-navy-900 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}
