import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Eaysin Mia',
  description:
    'Full Stack Engineer building scalable web products, automation-heavy workflows, and AI-powered applications.',
  href: 'https://meet-eaysin.vercel.app/',
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
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/meet-eaysin',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/meet-eaysin/',
    label: 'LinkedIn',
  },
  {
    href: 'https://x.com/meet_eaysin',
    label: 'X/Twitter',
  },
  {
    href: 'https://web.facebook.com/meet.eaysin/',
    label: 'Facebook',
  },
  {
    href: 'https://app.daily.dev/meeteaysin',
    label: 'Daily.dev',
  },
  {
    href: 'mailto:meet.eaysin@gmail.com',
    label: 'Email',
  }
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
