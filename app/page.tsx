import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Laundry & Linen Rental South Florida',
  description:
    'Blue Star Linen — women-owned commercial laundry and linen rental serving Miami, Broward, and West Palm Beach since 2003. 24/7 service. Request a free quote.',
  path: '/',
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Blue Star Linen',
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  foundingDate: SITE.foundingDate,
  openingHours: 'Mo-Su 00:00-23:59',
  priceRange: '$$',
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Miami-Dade County' },
    { '@type': 'AdministrativeArea', name: 'Broward County' },
    { '@type': 'AdministrativeArea', name: 'Palm Beach County' },
  ],
  address: {
    '@type': 'PostalAddress',
    ...SITE.address,
  },
  sameAs: Object.values(SITE.social),
}

const faqs = [
  {
    name: 'What types of businesses does Blue Star Linen serve?',
    answer:
      'Blue Star Linen serves hotels, restaurants, spas, condominiums, and luxury homes throughout South Florida, including Miami-Dade, Broward, and Palm Beach counties.',
  },
  {
    name: 'Does Blue Star Linen offer 24/7 service?',
    answer:
      'Yes. Blue Star Linen provides 24/7 service, including emergency deliveries during peak seasons and unexpected demand spikes.',
  },
  {
    name: 'What is the difference between linen rental and industrial laundry services?',
    answer:
      'With linen rental, Blue Star Linen owns the linens and delivers freshly laundered inventory on a schedule — eliminating your capital investment and storage burden. Industrial laundry is a wash-process-return service for linens you already own.',
  },
  {
    name: 'Is Blue Star Linen a certified women-owned business?',
    answer:
      'Yes. Blue Star Linen is a certified women-owned and minority-owned business with over 23 years of experience in South Florida commercial laundry.',
  },
  {
    name: 'How do I get a quote from Blue Star Linen?',
    answer: `Fill out the Request a Quote form on our Contact page or call us at ${SITE.phone}. We respond within one business day.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.name,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const testimonials = [
  {
    quote:
      "Blue Star Linen transformed our operations with their efficient service. They're truly the best in South Florida!",
    author: 'General Manager',
    company: 'Luxury Hotel, Miami',
  },
  {
    quote:
      'The rental linens program is a game-changer for us. The quality is excellent, and the service is always timely.',
    author: 'Owner',
    company: 'Restaurant, Fort Lauderdale',
  },
  {
    quote:
      'We had an emergency during peak season and Blue Star Linen saved the day with their prompt delivery.',
    author: 'Spa Director',
    company: 'Day Spa, South Beach',
  },
  {
    quote: 'Having a dependable laundry partner is essential. Blue Star Linen always exceeds expectations.',
    author: 'Property Manager',
    company: 'Condo Association, Miami',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            South Florida&rsquo;s Trusted Commercial Laundry &amp; Linen Rental
          </h1>
          <p className="text-xl text-navy-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            <strong>Blue Star Linen is a women-owned commercial laundry and linen rental company</strong>{' '}
            serving South Florida since 2003. Hotels, restaurants, spas, and condominiums across
            Miami, Broward, and West Palm Beach count on us — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href={`tel:${SITE.phone.replace(/\D/g, '')}`}
              className="border-2 border-white hover:bg-white hover:text-navy-900 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gold-500 py-4 px-4" aria-label="Key facts">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-navy-900 font-semibold text-sm md:text-base">
          <span>&#10003; 23+ Years of Experience</span>
          <span>&#10003; Women-Owned &amp; Minority-Owned</span>
          <span>&#10003; 24/7 Service Available</span>
          <span>&#10003; Miami &middot; Broward &middot; West Palm Beach</span>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From daily industrial laundry processing to fully managed linen rental programs, we
            handle every aspect of your linen supply chain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-navy-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4" aria-hidden="true">🏨</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Linen Rental</h3>
              <p className="text-gray-600 mb-4">
                Skip the capital investment. We supply hotel-quality bed linens, towels,
                tablecloths, napkins, and spa linens — washed, pressed, and delivered on your
                schedule. Pay only for what you use.
              </p>
              <Link
                href="/linen-rental"
                className="text-navy-500 font-semibold hover:text-navy-700 transition-colors"
              >
                Learn about Linen Rental &rarr;
              </Link>
            </div>
            <div className="border border-navy-100 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4" aria-hidden="true">🔄</div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Industrial Laundry</h3>
              <p className="text-gray-600 mb-4">
                High-capacity washing, professional finishing, and careful handling for the linens
                you already own. Advanced cleaning techniques preserve quality and extend linen
                lifespan.
              </p>
              <Link
                href="/industrial-laundry"
                className="text-navy-500 font-semibold hover:text-navy-700 transition-colors"
              >
                Learn about Industrial Laundry &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 px-4 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Industries We Serve</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Any hospitality or commercial property in South Florida that needs reliable, professional
            linen service.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {['Hotels & Resorts', 'Restaurants & Cafes', 'Spas & Salons', 'Condominiums', 'Luxury Homes'].map(
              (ind) => (
                <div key={ind} className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="font-semibold text-navy-700 text-sm">{ind}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-4">Service Areas</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We serve commercial properties across Miami-Dade, Broward, and Palm Beach counties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Miami-Dade County',
                slug: 'miami',
                desc: 'Commercial laundry and linen rental for hotels, restaurants, and spas throughout Miami and surrounding cities.',
              },
              {
                name: 'Broward County',
                slug: 'broward',
                desc: 'Serving Fort Lauderdale, Hollywood, Pompano Beach, and all of Broward County with daily linen service.',
              },
              {
                name: 'West Palm Beach',
                slug: 'west-palm-beach',
                desc: 'Premium linen rental and laundry service for Palm Beach County hospitality businesses.',
              },
            ].map((area) => (
              <div key={area.slug} className="border border-navy-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{area.desc}</p>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="text-navy-500 font-semibold text-sm hover:text-navy-700 transition-colors"
                >
                  Commercial laundry in {area.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="bg-navy-700 rounded-xl p-8">
                <p className="text-navy-100 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <footer className="font-semibold text-gold-400">
                  {t.author} &mdash; {t.company}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-8">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <dt className="font-bold text-navy-900 mb-2">{f.name}</dt>
                <dd className="text-gray-600">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gold-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Simplify Your Linen Operations?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Get a custom quote for your property today. No commitment required.
          </p>
          <Link
            href="/contact"
            className="bg-navy-900 hover:bg-navy-700 text-white font-bold px-10 py-4 rounded-md text-lg transition-colors inline-block"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
