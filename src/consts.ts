import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Eaysin Mia',
  description:
    'Full Stack Engineer specialized in ERP and Healthcare systems, building large-scale products with advanced API integrations.',
  href: 'https://imeaysin.vercel.app/',
  author: 'Eaysin Mia',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/imeaysin',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/imeaysin/',
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/imeaysin',
    label: 'X/Twitter',
  },
  {
    href: 'https://leetcode.com/u/imeaysin/',
    label: 'LeetCode',
  },
  {
    href: 'https://web.facebook.com/imeaysin/',
    label: 'Facebook',
  },
  {
    href: 'https://app.daily.dev/imeaysin',
    label: 'Daily.dev',
  },
  {
    href: 'mailto:eaysin.dev@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  'X/Twitter': 'lucide:twitter',
  Facebook: 'lucide:facebook',
  LeetCode: 'lucide:code',
  'Daily.dev': 'lucide:book-open',
  Email: 'lucide:mail',
  Resume: 'lucide:file-text',
  RSS: 'lucide:rss',
}
