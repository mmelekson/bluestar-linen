import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Laundry & Linen Rental Services | Blue Star Linen',
  description:
    'Blue Star Linen offers industrial laundry and linen rental services for hotels, restaurants, spas, and condominiums across Miami-Dade, Broward, and West Palm Beach.',
  path: '/services',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrial Laundry & Linen Rental',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Blue Star Linen',
    url: 'https://www.bluestarlinen.com',
  },
  areaServed: ['Miami-Dade', 'Broward', 'Palm Beach'],
  description:
    'Commercial laundry and linen rental services for hospitality businesses in South Florida.',
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <section className="relative min-h-[360px] flex items-center">
        <Image
          src="/images/services-hero.jpg"
          alt="Blue Star Linen services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Our Laundry Solutions for the Hospitality and Food &amp; Beverage Industries
          </p>
        </div>
      </section>

      {/* Industrial Laundry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/industrial-laundry.jpg"
              alt="Industrial laundry service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-700 mb-6">Industrial Laundry</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Reliable, efficient, and professional care for your linens.
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Comprehensive Linen Care',
                  body: 'High-capacity washing for bed linens, towels, and table linens — all handled with precision.',
                },
                {
                  title: 'Advanced Cleaning Technology',
                  body: 'Innovative techniques that preserve quality and extend the lifespan of your textiles.',
                },
                {
                  title: '24/7 Operational Support',
                  body: 'Round-the-clock availability for emergency situations and urgent delivery needs.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-brand-700">{item.title}: </span>
                    <span className="text-gray-600">{item.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Linen Rental */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-700 mb-6">Linen Rental Service</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Simplify your linen management and maximize your profits—no hassle!
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Hotel Linens',
                  body: 'Bed linens and towels provided fresh and ready for your guests every time.',
                },
                {
                  title: 'Restaurant Linens',
                  body: 'Tablecloths, napkins, bar mops, and aprons delivered ready-to-use.',
                },
                {
                  title: 'Convenient, Reliable, Cost-Effective',
                  body: 'Fresh linens delivered on-demand so you can focus on running your business.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-brand-700">{item.title}: </span>
                    <span className="text-gray-600">{item.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/linen-rental.avif"
              alt="Linen rental service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-brand-100 mb-8">
            Contact us to discuss your linen and laundry needs in Miami, Broward, or West Palm
            Beach.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded hover:bg-brand-100 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
