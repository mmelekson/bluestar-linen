import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Our Clients | Blue Star Linen – Hospitality Partners in South Florida',
  description:
    'Blue Star Linen proudly serves hotels, restaurants, spas, condominiums, and luxury homes across Miami, Broward, and West Palm Beach with premium linen and laundry services.',
  path: '/clients',
})

const clientTypes = [
  { label: 'Hotels', image: '/images/clients-1.jpg' },
  { label: 'Restaurants', image: '/images/clients-2.avif' },
  { label: 'Spas', image: '/images/clients-3.avif' },
  { label: 'Condominiums', image: '/images/clients-4.jpg' },
  { label: 'Luxury Homes', image: '/images/clients-5.jpg' },
]

const caseMetrics = [
  { value: '24/7', label: 'Reliable service coverage' },
  { value: '100%', label: 'Client satisfaction rate' },
  { value: 'Optimized', label: 'Linen rotation and delivery times' },
]

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clients</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Designed for the Hospitality Industry
          </p>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-700 mb-4">
            Partnering for Excellence in Every Detail
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We build long-term relationships with our clients by delivering consistent quality,
            responsive communication, and seamless linen logistics — day after day.
          </p>
        </div>
      </section>

      {/* Client photo grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {clientTypes.map((c) => (
              <div key={c.label} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-brand-900/50 flex items-end">
                  <span className="text-white font-bold text-sm p-3">{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-brand-700 mb-3">Luxury Hotel Miami</h2>
          <p className="text-gray-600 mb-10">
            A showcase of what a true linen service partnership looks like.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseMetrics.map((m) => (
              <div key={m.label} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="text-4xl font-bold text-brand-700 mb-2">{m.value}</div>
                <div className="text-gray-600 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-700 mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-12">
            From boutique restaurants to large hotel chains, we tailor our service to fit your
            business.
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
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Join Our Growing List of Partners</h2>
          <p className="text-brand-100 mb-8">
            Let us show you why South Florida&rsquo;s best hospitality businesses trust Blue Star
            Linen.
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
