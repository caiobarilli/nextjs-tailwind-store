'use client'

import { ProductProps } from '@/lib/types/products'
import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from '@/lib/localStorage'
import { CartContextProps, CartProviderProps } from '@/lib/types/cart'

const CART_KEY = 'CartProducts'

const CartContext = createContext<CartContextProps>({} as CartContextProps)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CartProvider: React.FC<CartProviderProps> = ({
  children
}: CartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<ProductProps[]>([])

  useEffect(() => {
    const storedCartItems = getStorageItem(CART_KEY)

    if (storedCartItems) {
      setCartItems(storedCartItems)
    }
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }

  const addToCart = (item: ProductProps) => {
    const newCartItems = [...cartItems, item]
    setCartItems(newCartItems)
    setStorageItem(CART_KEY, newCartItems)
  }

  const removeFromCart = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartItems)
    setStorageItem(CART_KEY, newCartItems)
  }

  const isInCart = (id: number) => {
    return cartItems.some((item) => item.id === id)
  }

  const calculateSubtotal = (products: ProductProps[]) => {
    return products.reduce((acc, product) => {
      return acc + product.price
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        calculateSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartContext, useCart }
