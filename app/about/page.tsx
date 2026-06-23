import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'About Blue Star Linen — Women-Owned, South Florida Since 2003',
  description:
    'Learn about Blue Star Linen — a women-owned, minority-owned commercial laundry and linen rental company serving South Florida hospitality businesses since 2003.',
  path: '/about',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Blue Star Linen',
  url: SITE.url,
  foundingDate: SITE.foundingDate,
  description: SITE.description,
  telephone: SITE.phone,
  sameAs: Object.values(SITE.social),
}

const stats = [
  { stat: '23+', label: 'Years in Business' },
  { stat: '24/7', label: 'Service Availability' },
  { stat: '3', label: 'Counties Served' },
  { stat: '100%', label: 'Client Satisfaction' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={orgSchema} />

      <section className="bg-navy-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-100 mb-6">
            <ol className="flex gap-2">
              <li><Link href="/" className="hover:text-gold-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold-400">About</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Blue Star Linen</h1>
          <p className="text-xl text-navy-100 max-w-2xl">
            A women-owned and minority-owned commercial laundry company built on 23 years of
            service, reliability, and genuine partnership with South Florida&rsquo;s hospitality industry.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            <strong>
              Blue Star Linen is a women-owned commercial laundry and linen rental company serving
              South Florida since 2003.
            </strong>{' '}
            For over two decades, hotels, restaurants, spas, and condominiums across Miami-Dade,
            Broward, and Palm Beach counties have depended on us to keep their operations running
            &mdash; 24 hours a day, every day of the year.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            As a certified women-owned and minority-owned business, we bring both the operational
            scale of a large commercial laundry and the personal accountability of a South
            Florida-based team that is invested in your success. We don&rsquo;t just wash and return
            linens &mdash; we serve as a true operational partner for our clients, adapting schedules,
            scaling volumes, and responding to emergencies so that linen management is never a
            problem your team has to solve.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our services span{' '}
            <Link href="/linen-rental" className="text-navy-500 hover:text-navy-700 font-medium">
              linen rental programs
            </Link>{' '}
            &mdash; where we own, launder, and deliver the inventory &mdash; and{' '}
            <Link href="/industrial-laundry" className="text-navy-500 hover:text-navy-700 font-medium">
              industrial laundry services
            </Link>{' '}
            for properties that manage their own linen stock. Both are backed by the same standard
            of quality, the same commitment to on-time service, and the same availability.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center border border-navy-100 rounded-xl p-6">
                <p className="text-3xl font-extrabold text-navy-900 mb-2">{s.stat}</p>
                <p className="text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Certifications</h2>
          <ul className="text-gray-600 space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold text-lg">&#10003;</span>
              <span>
                <strong>Women-Owned Business (WBE)</strong> &mdash; Certified women-owned enterprise
                serving South Florida&rsquo;s hospitality industry.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold text-lg">&#10003;</span>
              <span>
                <strong>Minority-Owned Business (MBE)</strong> &mdash; A certified diverse supplier
                committed to South Florida&rsquo;s community.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy-900 mb-6">Our Approach</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We believe the best linen service is the one you don&rsquo;t have to think about. That means
            delivering on schedule, maintaining consistent quality across every piece, and being
            available when the unexpected happens &mdash; a sold-out weekend, an event booking, a peak
            season rush. Our 24/7 operations model isn&rsquo;t a marketing claim; it&rsquo;s how we&rsquo;ve kept
            clients for 23 years.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We use advanced industrial processing equipment and precise chemistry to clean linens
            more effectively and gently than on-property laundering, extending the life of your
            inventory while ensuring every towel, sheet, and tablecloth meets the standard your
            guests expect.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gold-500 text-center">
        <h2 className="text-2xl font-bold text-navy-900 mb-4">
          Ready to Work with Blue Star Linen?
        </h2>
        <p className="text-navy-700 mb-6">
          Contact us to discuss a linen program tailored to your property&rsquo;s needs.
        </p>
        <Link
          href="/contact"
          className="bg-navy-900 hover:bg-navy-700 text-white font-bold px-8 py-4 rounded-md text-lg transition-colors inline-block"
        >
          Request a Quote
        </Link>
      </section>
    </>
  )
}
