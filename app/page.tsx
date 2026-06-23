import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Blue Star Linen | Premium Linen & Laundry Services – South Florida',
  description:
    'Your partner in premium linen and laundry services. Trusted by hotels, restaurants, spas, condominiums, and luxury homes in Miami, Broward, and West Palm Beach.',
  path: '/',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.bluestarlinen.com/#business',
  name: 'Blue Star Linen',
  url: 'https://www.bluestarlinen.com',
  telephone: '954-682-6311',
  email: 'sales@bluestarlinen.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6780 NW 37th Court',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33147',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Su 00:00-23:59',
  description:
    'Women-owned commercial laundry and linen rental serving South Florida since 2003.',
  foundingDate: '2003',
  areaServed: ['Miami-Dade', 'Broward', 'Palm Beach'],
  sameAs: [
    'https://www.instagram.com/blue.starlinen',
    'https://www.facebook.com/oceanlinen',
    'https://www.linkedin.com/in/ofer-manor',
  ],
}

const stats = [
  { value: '23+', label: 'Years of experience in industrial laundry excellence' },
  { value: '24/7', label: 'Service available for your business needs' },
  { value: 'Women‑Owned', label: 'Women-owned and minority-owned business' },
  { value: 'Smart', label: 'Intelligent Laundry Automation with advanced technology' },
]

const services = [
  {
    title: 'Linen Rental',
    description: 'Simplify your linen management and maximize your profits—no hassle!',
    image: '/images/linen-rental.avif',
  },
  {
    title: 'Industrial Laundry',
    description: 'Reliable, efficient, and professional care for your linens.',
    image: '/images/industrial-laundry.jpg',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="relative min-h-[580px] flex items-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="Blue Star Linen laundry facility"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
            Your Partner in Premium Linen &amp; Laundry Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Trusted by Hotels, Restaurants, Spas, Condominiums, and Luxury Homes, we combine
            quality, efficiency, and care to keep your business looking its best.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-700 hover:bg-brand-100 font-bold text-lg px-8 py-4 rounded shadow-lg transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-700 mb-6 leading-snug">
              Your Trusted Partner for Industrial Laundry Excellence
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We provide top-quality industrial laundry services tailored to meet the specific needs
              of the hospitality and food and beverage industries in Miami, Broward, and West Palm
              Beach, Florida.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 23 years of experience as a women-owned and minority-owned business, we
              offer 24/7 service that stands out for its reliability, quality, and meticulous
              attention to detail.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/facility.jpg"
              alt="Blue Star Linen laundry facility"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold mb-2">{s.value}</div>
              <div className="text-sm text-brand-100 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-700 text-center mb-12">
            Our Laundry Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.description}</p>
                  <span className="mt-4 inline-block text-steel-500 font-semibold text-sm">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-700 mb-4">
            Designed for the Hospitality Industry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We proudly serve a wide range of clients who demand consistency, quality, and
            reliability.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {['Hotels', 'Restaurants', 'Spas', 'Condominiums', 'Luxury Homes'].map((c) => (
              <div
                key={c}
                className="bg-brand-50 rounded-xl py-6 px-4 text-brand-700 font-semibold text-sm shadow-sm"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-brand-100 mb-8">
            Contact us today to learn how Blue Star Linen can serve your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded hover:bg-brand-100 transition-colors text-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
