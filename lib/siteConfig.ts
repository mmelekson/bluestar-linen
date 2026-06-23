export const SITE = {
  name: 'Blue Star Linen',
  url: 'https://www.bluestarlinen.com',
  description:
    'Blue Star Linen — trusted partner in premium linen and laundry services for hotels, restaurants, spas, condominiums, and luxury homes. Women-owned, 23+ years, 24/7 service in Miami, Broward, and West Palm Beach.',
  phone: process.env.NEXT_PUBLIC_PHONE ?? '954-682-6311',
  whatsapp: '17865472572',
  email: 'sales@bluestarlinen.com',
  address: {
    streetAddress: '6780 NW 37th Court',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    postalCode: '33147',
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
