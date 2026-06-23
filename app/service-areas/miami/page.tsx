import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Laundry & Linen Rental Miami',
  description:
    'Blue Star Linen provides commercial laundry and linen rental to hotels, restaurants, spas, and condominiums throughout Miami-Dade County. 24/7 service. Call 954-682-6311.',
  path: '/service-areas/miami',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
    { '@type': 'ListItem', position: 3, name: 'Miami', item: `${SITE.url}/service-areas/miami` },
  ],
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Laundry & Linen Rental Miami',
  provider: { '@type': 'LocalBusiness', name: 'Blue Star Linen', url: SITE.url },
  areaServed: { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
  description: 'Commercial laundry and linen rental for Miami-Dade County hotels, restaurants, spas, and condominiums.',
}

export default function MiamiPage() {
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
              <li aria-current="page" className="text-gold-400">Miami</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial Laundry &amp; Linen Rental in Miami
          </h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Blue Star Linen serves Miami-Dade County hotels, restaurants, spas, and condominiums
            with professional commercial laundry and linen rental &mdash; 24 hours a day, 7 days
            a week.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Miami Quote
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Serving Greater Miami Since 2003</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Miami&rsquo;s hospitality industry operates at a demanding pace &mdash; boutique hotels on South
            Beach, waterfront restaurants in Brickell, luxury spas in Coral Gables, and high-rise
            condominiums across Biscayne Bay all rely on a steady, reliable supply of clean linens.
            Blue Star Linen has been part of that supply chain for over two decades.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our{' '}
            <Link href="/linen-rental" className="text-navy-500 hover:text-navy-700">
              linen rental program
            </Link>{' '}
            is ideal for Miami properties that want to eliminate inventory carrying costs while
            maintaining consistent quality. Our{' '}
            <Link href="/industrial-laundry" className="text-navy-500 hover:text-navy-700">
              industrial laundry service
            </Link>{' '}
            handles high-volume washing and finishing for properties that own their own linen
            inventory.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">Miami-Dade Cities We Serve</h3>
          <p className="text-gray-600 mb-8">
            Miami, Miami Beach, South Beach, Brickell, Coral Gables, Doral, Hialeah, Homestead,
            Key Biscayne, Miami Gardens, Miami Lakes, North Miami, North Miami Beach, Opa-locka,
            Palmetto Bay, Pinecrest, South Miami, Sunny Isles Beach, Sweetwater.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">
            Why Miami Businesses Choose Blue Star Linen
          </h3>
          <ul className="text-gray-600 space-y-3">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Women-owned and minority-owned:</strong> A certified diverse supplier
                committed to South Florida&rsquo;s community.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>23+ years of Miami-area experience:</strong> We understand the seasonal
                demand spikes, Art Basel surges, and hurricane-prep scenarios unique to this market.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>24/7 emergency availability:</strong> When an event overbooks or a storm
                shortens your supply, we&rsquo;re available.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Consistent quality standards:</strong> Every piece meets the same
                professional standard that boutique hotels and fine-dining restaurants expect.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Get Commercial Laundry Service in Miami
        </h2>
        <p className="text-navy-700 mb-6">
          Tell us about your property and we&rsquo;ll put together a custom pick-up and delivery schedule.
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
