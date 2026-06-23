'use client'
import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const businessTypes = [
  'Hotel / Resort',
  'Restaurant / Cafe',
  'Spa / Salon',
  'Condominium / HOA',
  'Luxury Home',
  'Other',
]

export default function QuoteForm() {
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setState('success')
      form.reset()
    } catch {
      setState('error')
      setError('Something went wrong. Please call us directly at 954-682-6311.')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="text-2xl mb-2">&#10003;</p>
        <h3 className="text-xl font-bold text-green-800 mb-2">Quote Request Sent!</h3>
        <p className="text-green-700">
          We&rsquo;ll be in touch within one business day. For urgent needs, call us at{' '}
          <a href="tel:9546826311" className="font-semibold underline">
            954-682-6311
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">
            Business Name <span aria-hidden="true" className="text-red-500">*</span>
          </span>
          <input
            name="businessName"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Oceanview Hotel"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name <span aria-hidden="true" className="text-red-500">*</span>
          </span>
          <input
            name="contactName"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Jane Smith"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">Business Type</span>
          <select
            name="businessType"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
          >
            <option value="">Select one</option>
            {businessTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">Location / City</span>
          <input
            name="city"
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="Miami Beach, FL"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-semibold text-gray-700 mb-1">
          Approximate Weekly Volume
        </span>
        <input
          name="volume"
          type="text"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="e.g. 500 lbs/week, 200 towels/week"
        />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address <span aria-hidden="true" className="text-red-500">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="jane@hotel.com"
          />
        </label>
        <label className="block">
          <span className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</span>
          <input
            name="phone"
            type="tel"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder="(305) 555-0100"
          />
        </label>
      </div>

      <label className="block">
        <span className="block text-sm font-semibold text-gray-700 mb-1">
          Tell us more (optional)
        </span>
        <textarea
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-y"
          placeholder="Describe your linen needs, current pain points, or any questions..."
        />
      </label>

      {error && (
        <p className="text-red-600 text-sm" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full bg-brand-700 hover:bg-brand-900 disabled:opacity-60 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
      >
        {state === 'loading' ? 'Sending…' : 'Submit Quote Request'}
      </button>
    </form>
  )
}
