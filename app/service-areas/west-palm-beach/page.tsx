import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Laundry & Linen Rental West Palm Beach',
  description:
    'Blue Star Linen provides commercial laundry and linen rental to West Palm Beach, Boca Raton, Delray Beach, and Palm Beach County. 24/7 availability. Women-owned.',
  path: '/service-areas/west-palm-beach',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE.url}/service-areas` },
    { '@type': 'ListItem', position: 3, name: 'West Palm Beach', item: `${SITE.url}/service-areas/west-palm-beach` },
  ],
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Laundry & Linen Rental West Palm Beach',
  provider: { '@type': 'LocalBusiness', name: 'Blue Star Linen', url: SITE.url },
  areaServed: { '@type': 'City', name: 'West Palm Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
  description: 'Commercial laundry and linen rental for Palm Beach County hotels, restaurants, resorts, and luxury properties.',
}

export default function WestPalmBeachPage() {
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
              <li aria-current="page" className="text-gold-400">West Palm Beach</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial Laundry &amp; Linen Rental in West Palm Beach
          </h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Blue Star Linen serves Palm Beach County&rsquo;s hotels, restaurants, luxury resorts, and
            spas with premium commercial laundry and linen rental &mdash; the same professional
            standard that South Florida&rsquo;s best properties have depended on for over 20 years.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Palm Beach Quote
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            Premium Linen Service for Palm Beach County
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Palm Beach County is home to some of Florida&rsquo;s most discerning hospitality properties
            &mdash; waterfront resorts in Palm Beach, fine-dining restaurants along Clematis Street,
            luxury spas in Boca Raton, and boutique hotels in Delray Beach. These properties require
            a linen service that matches their standards.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Blue Star Linen&rsquo;s{' '}
            <Link href="/linen-rental" className="text-navy-500 hover:text-navy-700">
              linen rental service
            </Link>{' '}
            provides hotel-quality bed linens, towels, tablecloths, and spa linens on a schedule
            tailored to your property&rsquo;s needs. Our{' '}
            <Link href="/industrial-laundry" className="text-navy-500 hover:text-navy-700">
              industrial laundry service
            </Link>{' '}
            handles high-volume processing for properties that own their own linen inventory. Both
            services operate 24/7 with no compromise on quality.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">Palm Beach County Cities We Serve</h3>
          <p className="text-gray-600 mb-8">
            West Palm Beach, Palm Beach, Boca Raton, Delray Beach, Boynton Beach, Lake Worth,
            Greenacres, Palm Beach Gardens, Jupiter, Tequesta, Juno Beach, North Palm Beach,
            Riviera Beach, Royal Palm Beach, Wellington.
          </p>

          <h3 className="text-xl font-bold text-navy-900 mb-4">
            Why Palm Beach Businesses Choose Blue Star Linen
          </h3>
          <ul className="text-gray-600 space-y-3">
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Premium quality standards</strong> &mdash; our processing meets the expectations
                of luxury and boutique properties where details matter.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>Certified women-owned and minority-owned</strong> &mdash; a diverse South
                Florida business you can count on.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>24/7 service</strong> &mdash; peak season in Palm Beach runs hard; we&rsquo;re
                available when you need us most.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 font-bold">&#10003;</span>
              <span>
                <strong>More than 20 years of South Florida experience</strong> &mdash; we know the
                snowbird season, the polo season, and everything in between.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Get Commercial Laundry Service in West Palm Beach
        </h2>
        <p className="text-navy-700 mb-6">
          We&rsquo;ll design a pick-up and delivery route that fits your Palm Beach property&rsquo;s schedule.
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
