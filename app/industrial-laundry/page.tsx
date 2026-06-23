import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Industrial & Commercial Laundry Service South Florida',
  description:
    'Professional industrial laundry service for hotels, restaurants, and spas in Miami, Broward, and West Palm Beach. High-capacity processing, 24/7 availability, pick-up & delivery.',
  path: '/industrial-laundry',
})

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrial Commercial Laundry',
  provider: { '@type': 'LocalBusiness', name: 'Blue Star Linen', url: SITE.url },
  description:
    'High-capacity industrial laundry processing for South Florida hotels, restaurants, and spas. Advanced cleaning techniques preserve linen quality and extend lifespan.',
  areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
  serviceType: 'Industrial Laundry',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'Industrial Laundry', item: `${SITE.url}/industrial-laundry` },
  ],
}

const faqs = [
  {
    name: 'What is included in commercial laundry service?',
    answer:
      "Blue Star Linen's industrial laundry service covers pick-up, high-capacity washing with commercial-grade detergents, professional finishing (pressing and folding), and scheduled delivery back to your property.",
  },
  {
    name: 'How does industrial laundry extend the life of my linens?',
    answer:
      'We use precise water temperatures, pH-balanced detergents, and controlled drying cycles calibrated for fabric type. This removes stains effectively without the mechanical stress that shortens linen life in standard machines.',
  },
  {
    name: 'Can Blue Star Linen handle large volumes on short notice?',
    answer:
      'Yes. Our high-capacity facility operates 24/7 and can accommodate surge volumes for events, peak seasons, or emergency situations. Contact us to discuss your volume requirements.',
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

const processSteps = [
  { n: '1', title: 'Schedule Pick-Up', body: 'Contact us to establish a recurring route or arrange a one-time pick-up for your soiled linens.' },
  { n: '2', title: 'Processing', body: 'Your linens are washed in high-capacity industrial machines using professional-grade detergents calibrated for each fabric type.' },
  { n: '3', title: 'Finishing', body: 'Items are pressed, folded, and packaged to your specifications — ready for immediate use.' },
  { n: '4', title: 'Delivery', body: 'Clean linens are returned to your property on schedule. We operate 24/7 to meet any timetable.' },
]

const categories = [
  { title: 'Bed Linens', items: ['Sheets and pillowcases', 'Duvet covers', 'Mattress pads', 'Pillow protectors'] },
  { title: 'Bath & Pool', items: ['Bath towels', 'Hand towels and washcloths', 'Pool towels', 'Bath robes'] },
  { title: 'Food & Beverage', items: ['Tablecloths', 'Napkins', 'Bar mops', 'Kitchen towels', 'Aprons'] },
]

export default function IndustrialLaundryPage() {
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
              <li aria-current="page" className="text-gold-400">Industrial Laundry</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Industrial &amp; Commercial Laundry Service &mdash; South Florida
          </h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            Reliable, high-capacity laundry processing for the linens your business already owns.
            Blue Star Linen picks up, washes, finishes, and delivers — so your team stays focused
            on guests, not laundry.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Get a Laundry Service Quote
          </Link>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">What We Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="border border-navy-100 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy-900 mb-3">{cat.title}</h3>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex gap-2">
                      <span className="text-gold-500">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-navy-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">How It Works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <li key={step.n} className="flex flex-col items-center text-center">
                <span className="w-12 h-12 rounded-full bg-navy-900 text-white text-xl font-bold flex items-center justify-center mb-4">
                  {step.n}
                </span>
                <h3 className="font-bold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Industrial Laundry &mdash; FAQs
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
        <h2 className="text-3xl font-bold text-navy-900 mb-4">Talk to Us About Your Laundry Volume</h2>
        <p className="text-navy-700 mb-8">
          We&rsquo;ll build a pick-up, processing, and delivery schedule around your operation.
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
