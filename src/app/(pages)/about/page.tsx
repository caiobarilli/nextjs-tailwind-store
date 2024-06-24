import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Nextjs Tailwind Store',
  description: '...'
}

import About from '@/components/About'

export default async function AboutPage() {
  return <About />
}
