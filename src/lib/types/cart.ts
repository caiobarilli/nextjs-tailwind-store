export interface CartContextProps {
  isOpen: boolean
  cartItems: CartProductProps[]
  addToCart: (item: CartProductProps) => void
  removeFromCart: (id: number) => void
  toggleSidebar: () => void
  isInCart: (id: number) => boolean
  calculateSubtotal: (products: CartProductProps[]) => number
  itemQuantity: (id: number) => number
  updateProductQuantity: (id: number, quantity: number) => void
}

export interface CartProductProps {
  id: number
  name: string
  price: number
  description: string
  slug: string
  cover: string
  totalQuantity: number
  quantity: number
}

export interface CartProviderProps {
  children: React.ReactNode
}
