import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Laundry & Linen Rental Broward County',
  description:
    'Blue Star Linen delivers commercial laundry and linen rental to Fort Lauderdale, Hollywood, Pompano Beach, and all of Broward County. Women-owned, 24/7 service.',
  path: '/service-areas/broward',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
    { '@type': 'ListItem', position: 3, name: 'Broward County', item: `${SITE.url}/service-areas/broward` },
  ],
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Laundry & Linen Rental Broward County',
  provider: { '@type': 'LocalBusiness', name: 'Blue Star Linen', url: SITE.url },
  areaServed: { '@type': 'AdministrativeArea', name: 'Broward County', containedInPlace: { '@type': 'State', name: 'Florida' } },
  description: 'Commercial laundry and linen rental for Broward County hotels, restaurants, spas, and condominiums.',
}

export default function BrowardPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localSchema} />

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/service-areas" className="hover:text-gold-400">Service Areas</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">Broward County</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial Laundry &amp; Linen Rental in Broward County
          </h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            From Fort Lauderdale&rsquo;s hospitality district to Hollywood&rsquo;s beachfront hotels, Blue Star
            Linen keeps Broward County businesses stocked with fresh, professionally cleaned linens
            &mdash; around the clock.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Broward Quote
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Fort Lauderdale&rsquo;s Commercial Laundry Partner
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Broward County is home to some of South Florida&rsquo;s busiest hospitality corridors &mdash; Fort
            Lauderdale Beach, Las Olas Boulevard, the Port Everglades cruise ship port, and a dense
            network of restaurants, spas, and resort-style condominiums. Managing linen supply in
            this environment means your laundry partner must be fast, reliable, and available
            whenever you need them.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Blue Star Linen&rsquo;s{' '}
            <Link href="/linen-rental" className="text-navy-500 hover:text-navy-700">
              linen rental program
            </Link>{' '}
            and{' '}
            <Link href="/industrial-laundry" className="text-navy-500 hover:text-navy-700">
              commercial laundry service
            </Link>{' '}
            are built for exactly this environment. We&rsquo;ve operated in Broward for over two decades
            and understand the seasonal rhythms &mdash; from spring break surges to slow summer months
            &mdash; that shape your linen needs.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">Broward County Cities We Serve</h3>
          <p className="text-gray-600 mb-8">
            Fort Lauderdale, Hollywood, Pompano Beach, Deerfield Beach, Hallandale Beach, Coral
            Springs, Miramar, Plantation, Sunrise, Weston, Davie, Cooper City, Margate, Tamarac,
            North Lauderdale, Lauderhill, Coconut Creek, Lauderdale Lakes.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">
            Why Broward Properties Trust Blue Star Linen
          </h3>
          <ul className="text-gray-600 space-y-3">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Certified women-owned and minority-owned</strong> &mdash; we&rsquo;re a local,
                diverse business invested in the Broward community.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>23+ years of Broward County service</strong> &mdash; we&rsquo;ve handled the Boat
                Show rush, the cruise season, and every busy weekend in between.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>24/7 operations</strong> &mdash; our facility doesn&rsquo;t close, and neither do
                your service needs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Scalable programs</strong> &mdash; whether you need 50 towels a week or 5,000,
                we build a route that matches your volume.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Get Commercial Laundry Service in Broward County
        </h2>
        <p className="text-navy-700 mb-6">
          Request a custom quote for your Fort Lauderdale, Hollywood, or Broward property today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-navy-900 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors inline-block"
          >
            Request a Quote
          </Link>
          <a
            href={`tel:${SITE.phone.replace(/\D/g, '')}`}
            className="border-2 border-navy-900 text-navy-900 font-bold px-8 py-4 rounded-md text-lg hover:bg-navy-900 hover:text-white transition-colors inline-block"
          >
            Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  )
}
