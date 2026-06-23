import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '',                  priority: 1.0 },
    { path: '/about-us',         priority: 0.9 },
    { path: '/services',         priority: 0.9 },
    { path: '/clients',          priority: 0.7 },
    { path: '/testimonials',     priority: 0.7 },
    { path: '/careers',          priority: 0.6 },
    { path: '/contact',          priority: 0.8 },
  ]

  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }))
}
