import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Careers | Join the Blue Star Linen Team in Miami, FL',
  description:
    'Join the Blue Star Linen team. We are a women-owned, family-oriented commercial laundry company in Miami, FL seeking passionate professionals with hospitality industry experience.',
  path: '/careers',
})

const values = [
  {
    title: 'Family-Oriented Culture',
    body: 'We operate with the warmth and teamwork of a family business, where every team member is valued.',
  },
  {
    title: 'Multicultural Team',
    body: 'Our diverse team brings experience from 5-star hotels, luxury spas, and fine-dining restaurants worldwide.',
  },
  {
    title: 'Growth & Development',
    body: 'We invest in our team members and provide opportunities to grow within the company.',
  },
  {
    title: 'Purpose-Driven Work',
    body: "Your work directly impacts South Florida's top hospitality businesses every single day.",
  },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Join a team that takes pride in delivering excellence every day.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-700 mb-6">Work With Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Blue Star Linen is a women-owned, minority-owned commercial laundry company based in
            Miami, Florida. With over 23 years in the industry, we have built a culture rooted in
            teamwork, integrity, and a passion for quality.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team is a multicultural group of highly experienced laundry linens professionals,
            with backgrounds in 5-star hotels, luxury spas, Italian haute cuisine restaurants, and
            high-end condominium laundry services. We are always looking for dedicated people who
            share our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-700 text-center mb-12">Why Join Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-brand-700 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-700 mb-6">Open Positions</h2>
          <p className="text-gray-600 mb-10">
            We are always interested in connecting with talented professionals in the laundry and
            hospitality space. If you don&rsquo;t see an open role that fits, send us your resume
            anyway — we&rsquo;ll keep it on file for future opportunities.
          </p>
          <div className="bg-brand-50 rounded-xl p-8 text-left border border-brand-100">
            <p className="text-brand-700 font-semibold mb-2">Interested in joining our team?</p>
            <p className="text-gray-600 text-sm mb-4">
              Send your resume and a brief note about your background to{' '}
              <a
                href="mailto:sales@bluestarlinen.com"
                className="text-steel-500 font-semibold hover:underline"
              >
                sales@bluestarlinen.com
              </a>
              . We review every application and will reach out if there&rsquo;s a fit.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Questions? Get in Touch.</h2>
          <p className="text-brand-100 mb-8">
            We&rsquo;d love to tell you more about what it&rsquo;s like to be part of the Blue Star
            Linen family.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-700 font-bold px-8 py-4 rounded hover:bg-brand-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
