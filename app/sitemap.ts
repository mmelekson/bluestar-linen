import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '',                          priority: 1.0 },
    { path: '/linen-rental',             priority: 0.9 },
    { path: '/industrial-laundry',       priority: 0.9 },
    { path: '/service-areas',            priority: 0.8 },
    { path: '/service-areas/miami',      priority: 0.8 },
    { path: '/service-areas/broward',    priority: 0.8 },
    { path: '/service-areas/west-palm-beach', priority: 0.8 },
    { path: '/about',                    priority: 0.6 },
    { path: '/contact',                  priority: 0.7 },
  ]

  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }))
}
