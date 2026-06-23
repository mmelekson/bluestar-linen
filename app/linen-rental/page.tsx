import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Linen Rental Service — Hotels, Restaurants & Spas',
  description:
    'Blue Star Linen offers hotel-quality linen rental for South Florida businesses. Bed linens, towels, tablecloths, napkins, and spa linens — delivered fresh, 24/7. No capital investment required.',
  path: '/linen-rental',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Linen Rental',
  provider: { '@type': 'LocalBusiness', name: 'Blue Star Linen', url: SITE.url },
  description:
    'Hotel-quality linen rental for South Florida hotels, restaurants, spas, and condominiums. Fresh linens delivered on schedule with no capital investment.',
  areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
  serviceType: 'Linen Rental',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Linen Rental', item: `${SITE.url}/linen-rental` },
  ],
}

const faqs = [
  {
    name: 'What types of linens are available in the rental program?',
    answer:
      'Blue Star Linen provides bed linens and pillowcases, bath towels and hand towels, restaurant tablecloths and napkins, bar mops, aprons, and spa/salon linens. Custom quantities and schedules are available.',
  },
  {
    name: 'How does the linen rental billing work?',
    answer:
      'You pay only for the linens you use each cycle — no upfront purchase or minimum inventory commitment. This eliminates capital expenditure and reduces storage costs for your property.',
  },
  {
    name: 'How quickly can Blue Star Linen deliver replacement linens in an emergency?',
    answer:
      'Because we operate 24/7, we can arrange emergency deliveries for unexpected occupancy surges or peak season demand. Contact us directly for urgent requests.',
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

const categories = [
  {
    title: 'Hotel Linens',
    items: ['King, queen, and full bed sheet sets', 'Pillowcases', 'Bath towels, hand towels, and washcloths', 'Pool towels', 'Duvet covers and pillow shams'],
  },
  {
    title: 'Restaurant Linens',
    items: ['Tablecloths in multiple sizes', 'Cloth napkins', 'Bar mops and kitchen towels', 'Server aprons', 'Bistro aprons'],
  },
  {
    title: 'Spa & Salon Linens',
    items: ['Massage table sheets and face cradle covers', 'Spa towels and wraps', 'Salon capes', 'Robes'],
  },
  {
    title: 'Condo & Residential',
    items: ['Common-area towels', 'Pool deck linens', 'Gym and fitness center towels', 'Housekeeping linens'],
  },
]

const benefits = [
  { title: 'No Capital Investment', body: 'Stop buying and replacing linens. Our pay-per-use rental model converts a capital expense into a predictable operating cost.' },
  { title: 'Consistent Quality', body: 'Every delivery meets the same hotel-grade standard. Our advanced processing extends linen life while maintaining softness and brightness.' },
  { title: '24/7 Reliability', body: "Peak seasons and last-minute events happen. Our round-the-clock service means you're never caught short — even during emergencies." },
  { title: 'Flexible Volumes', body: "Scale up or down each week. You're billed only for what you use, giving you full flexibility as occupancy changes." },
  { title: 'Reduced Storage', body: "No need to warehouse a full linen par. We manage inventory levels so your storage space stays clear." },
  { title: 'Environmental Responsibility', body: 'Industrial-scale washing is significantly more water- and energy-efficient per piece than on-property laundering.' },
]

export default function LinenRentalPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">Linen Rental</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Commercial Linen Rental in South Florida
          </h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Eliminate your linen inventory investment. Blue Star Linen delivers hotel-quality
            linens — washed, pressed, and ready to use — directly to your business on a schedule
            that fits your operation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Linen Rental Quote
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Why South Florida Businesses Choose Our Linen Rental Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-navy-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What&rsquo;s Included in Our Rental Program
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="text-gold-500 font-bold mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Linen Rental &mdash; Frequently Asked Questions
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

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Start Your Linen Rental Program Today</h2>
        <p className="text-navy-700 mb-8">
          Tell us about your property and we&rsquo;ll design a program that fits your volume and schedule.
        </p>
        <Link
          href="/contact"
          className="bg-navy-900 hover:bg-navy-700 text-white font-bold px-10 py-4 rounded-md text-lg transition-colors inline-block"
        >
          Request a Quote
        </Link>
      </section>
    </>
  )
}
