import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs Tailwind Store',
  description: '...'
}

export default function AppLayout({
  form
}: Readonly<{
  form: React.ReactNode
}>) {
  return <>{form}</>
}
