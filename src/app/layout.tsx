import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nextjs Tailwind Store',
  description: '...'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="dark:bg-gray-900 dark:text-white bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        {children}
      </body>
    </html>
  )
}
