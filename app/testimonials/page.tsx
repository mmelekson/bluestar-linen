import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Testimonials | Blue Star Linen Client Reviews',
  description:
    'Hear from hotels, restaurants, spas, and condo managers who trust Blue Star Linen for premium commercial laundry and linen rental services in South Florida.',
  path: '/testimonials',
})

const testimonials = [
  {
    quote:
      'The rental linens program is a game-changer for us. The quality of the linens is excellent, and the service is always timely.',
    author: 'Restaurant Owner',
    location: 'Fort Lauderdale',
  },
  {
    quote:
      'We had an emergency during peak season, and Blue Star Linen saved the day with their prompt delivery. Their team is always responsive and professional!',
    author: 'Spa Director',
    location: 'South Beach',
  },
  {
    quote:
      "Blue Star Linen transformed our operations with their efficient service. They're truly the best in South Florida!",
    author: 'General Manager',
    location: 'Luxury Hotel Miami',
  },
  {
    quote:
      'As a property manager for a large condo association, having a dependable laundry partner is essential. Blue Star Linen always exceeds expectations.',
    author: 'Condo Manager',
    location: 'Miami',
  },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Blue Star Linen',
  review: testimonials.map((t) => ({
    '@type': 'Review',
    reviewBody: t.quote,
    author: { '@type': 'Person', name: `${t.author}, ${t.location}` },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  })),
}

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />

      {/* Hero */}
      <section className="relative min-h-[300px] flex items-center">
        <Image
          src="/images/testimonials-bg.jpg"
          alt="Happy Blue Star Linen clients"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-900/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-white text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Hear from our customers
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-700 text-center mb-12">
            HEAR FROM OUR CUSTOMERS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="bg-gray-50 rounded-xl p-8 border-l-4 border-brand-500 shadow-sm"
              >
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="font-bold text-brand-700">
                  {t.author}
                  <span className="font-normal text-gray-500"> — {t.location}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="py-16 bg-brand-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-700 mb-4">Leave Us a Google Review</h2>
          <p className="text-gray-600 mb-8">
            Are you a Blue Star Linen client? We&rsquo;d love to hear about your experience.
          </p>
          <a
            href="https://www.google.com/search?q=Blue+Star+Linen+Miami"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-700 text-white font-bold px-8 py-4 rounded hover:bg-brand-900 transition-colors"
          >
            Review Us on Google
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-brand-100 mb-8">
            Join the hotels, restaurants, spas, and condo managers who trust Blue Star Linen.
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
