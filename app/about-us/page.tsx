import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'About Blue Star Linen | South Florida Linen & Laundry Experts',
  description:
    'Over 23 years of experience providing industrial laundry services across Miami-Dade, Broward, and West Palm Beach. Women-owned and minority-owned business offering round-the-clock service.',
  path: '/about-us',
})

const sustainabilityStats = [
  { value: '100%', label: 'Sustainable Commitment' },
  { value: '40%', label: 'Resource Efficiency' },
  { value: '100%', label: 'Eco-Safe Products' },
  { value: 'Zero', label: 'Plastic Waste Goal' },
]

const features = [
  {
    title: 'Our Team: Passion, Experience & Integrity',
    body: 'Our team is a multicultural group of highly experienced laundry linens professionals, with backgrounds in 5-star hotels, luxury spas, Italian haute cuisine restaurants, and high-end condominium laundry services.',
  },
  {
    title: 'High-Quality Commercial Care',
    body: 'We deliver meticulous care to every item we process, ensuring pristine linens that reflect the standards of your establishment.',
  },
  {
    title: 'Advanced Technology & Efficiency',
    body: 'Water and energy optimization using advanced machines, combined with a real-time data analytics platform for inventory management.',
  },
  {
    title: 'Professional Finishing & Longevity',
    body: 'Our professional finishing processes protect fabric quality and extend the lifespan of your linens, maximizing your investment.',
  },
  {
    title: '24/7 Reliable Service',
    body: 'Round-the-clock availability ensures your business is never left without clean linens, even in emergency situations.',
  },
  {
    title: 'Sustainability Facility & Operations',
    body: 'Eco-friendly detergents, recycling and waste reduction practices, and a commitment to zero plastic waste define our environmental approach.',
  },
  {
    title: 'Responsive and Fast',
    body: 'Our guiding principle: "Take responsibility and handle the situation immediately." We act, we don\'t wait.',
  },
  {
    title: 'Smart Laundry',
    body: 'We use innovative techniques that preserve linen quality and extend lifespan through intelligent laundry automation.',
  },
]

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            23+ years of excellence, integrity, and care in South Florida.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-700 mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              With over 23 years of experience, Blue Star Linen provides industrial laundry services
              across Miami-Dade, Broward, and West Palm Beach. As a women-owned and minority-owned
              business, we offer round-the-clock service with an emphasis on reliability, quality,
              and meticulous attention to detail.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our team is a multicultural group of highly experienced laundry linens professionals,
              with backgrounds in 5-star hotels, luxury spas, Italian haute cuisine restaurants, and
              high-end condominium laundry services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Teamwork is our foundation, and we operate with a family-oriented atmosphere. Our
              guiding principle: <em>&ldquo;Take responsibility and handle the situation
              immediately.&rdquo;</em>
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-team.jpg"
              alt="Blue Star Linen team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-700 text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-brand-700 mb-3 text-sm leading-snug">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Eco Commercial Laundry Linens</h2>
          <p className="text-brand-100 max-w-2xl mx-auto mb-12">
            Our commitment to sustainability is woven into every process we operate.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sustainabilityStats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold mb-2">{s.value}</div>
                <div className="text-brand-100 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-brand-700 mb-4">
            Partner with South Florida&rsquo;s Most Trusted Linen Service
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-brand-700 text-white font-bold px-8 py-4 rounded hover:bg-brand-900 transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
