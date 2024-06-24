import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nextjs Tailwind Store',
  description: '...'
}

export default function AppLayout({
  slide,
  products,
  about
}: Readonly<{
  slide: React.ReactNode
  products: React.ReactNode
  about: React.ReactNode
  sidebar: React.ReactNode
  modals: React.ReactNode
}>) {
  return (
    <>
      {slide}
      {products}
      {about}
    </>
  )
}
