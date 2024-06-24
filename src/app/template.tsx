'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { CartProvider } from '@/hooks/use-cart'
import ReduxProvider from '@/redux/provider'

import { usePathname } from 'next/navigation'

import Header from '@/components/Header'
import SidebarCart from '@/components/SidebarCart'
import Footer from '@/components/Footer'

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ReduxProvider>
        <CartProvider>{children}</CartProvider>
      </ReduxProvider>
    </ThemeProvider>
  )
}

export default function Template({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  if (path === '/panel' || path.startsWith('/panel/')) {
    return <Providers>{children}</Providers>
  }

  return (
    <Providers>
      <SidebarCart />
      <Header />
      {children}
      <Footer />
    </Providers>
  )
}
