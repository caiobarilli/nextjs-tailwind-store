import { ProductProps } from './products'

export interface CartContextProps {
  isOpen: boolean
  cartItems: ProductProps[]
  addToCart: (item: ProductProps) => void
  removeFromCart: (id: number) => void
  toggleSidebar: () => void
  isInCart: (id: number) => boolean
  calculateSubtotal: (products: ProductProps[]) => number
}

export interface CartProviderProps {
  children: React.ReactNode
}
