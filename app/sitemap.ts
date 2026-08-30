import { MetadataRoute } from 'next';
import { TOOLS, CATEGORIES } from '@/data/registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolbox.local';

  // Core static pages
  const staticRoutes = [
    '',
    '/tools',
    '/categories',
    '/about',
    '/pricing',
    '/privacy',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Category pages
  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/categories/${cat.toLowerCase().replace(/[\s&]+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Tool routes
  const toolRoutes = TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes];
}
