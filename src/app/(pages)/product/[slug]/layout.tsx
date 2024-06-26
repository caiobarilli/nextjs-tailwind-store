import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product - ',
  description: '...'
}

export default function ProductLayout({
  product,
  modals
}: Readonly<{
  product: React.ReactNode
  modals: React.ReactNode
}>) {
  return (
    <>
      <div id="modal-root" />
      {product}
      {modals}
    </>
  )
}
