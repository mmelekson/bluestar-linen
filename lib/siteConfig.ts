export const SITE = {
  name: 'Blue Star Linen',
  url: 'https://www.bluestarlinen.com',
  description:
    'Blue Star Linen is a women-owned commercial laundry and linen rental company serving South Florida since 2003. 24/7 service for hotels, restaurants, spas, and condominiums in Miami-Dade, Broward, and Palm Beach counties.',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '954-682-6311',
  whatsapp: '17865472572',
  address: {
    streetAddress: 'South Florida',
    addressLocality: 'Fort Lauderdale',
    addressRegion: 'FL',
    postalCode: '33301',
    addressCountry: 'US',
  },
  social: {
    instagram: 'https://www.instagram.com/blue.starlinen',
    facebook: 'https://www.facebook.com/oceanlinen',
    linkedin: 'https://www.linkedin.com/in/ofer-manor',
  },
  foundingDate: '2003',
  areaServed: ['Miami-Dade', 'Broward', 'Palm Beach'],
} as const
