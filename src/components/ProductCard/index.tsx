'use client'

import { useState } from 'react'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '@/redux/favorite-slice'
import { Svg } from '@/lib/svg'
import { ProductProps } from '@/lib/types/products'

const ProductCard: React.FC<{
  product: ProductProps
}> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart, removeFromCart, isInCart, toggleSidebar } = useCart()
  const dispatch = useDispatch()

  const favoriteProducts = useSelector(
    (state: { favorite: { products: number[] } }) => state.favorite.products
  )

  const handleToggleFavorite = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault()
    dispatch(toggleFavorite(id))
  }

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: ProductProps
  ) => {
    e.preventDefault()
    toggleSidebar()
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      slug: product.slug,
      cover: product.cover,
      totalQuantity: product.quantity,
      quantity: 1
    })
  }

  const handleRemoveFromCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.preventDefault()
    removeFromCart(id)
  }

  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://images.unsplash.com/${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&h=${width}&q=${quality || 75}`
  }

  return (
    <div
      key={product.id}
      data-testid="product"
      className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
    >
      <Link href={`/product/${product.slug}`} passHref>
        <Image
          alt={product.name}
          src={product.cover}
          loader={myLoader}
          width={336}
          height={336}
          quality={80}
          className="transform hover:grow hover:shadow-lg"
          loading="lazy"
        />
      </Link>

      <div className="pt-3 flex items-center justify-between">
        <p>{product.name}</p>

        <div className="flex">
          {isInCart(product.id) ? (
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={(e) => handleRemoveFromCart(e, product.id)}
            >
              <Svg name={isHovered ? 'removeFromCartIcon' : 'onCartIcon'} />
            </button>
          ) : (
            <button onClick={(e) => handleAddToCart(e, product)}>
              <Svg name="addToCartIcon" />
            </button>
          )}

          {favoriteProducts?.includes(product.id) ? (
            <button onClick={(e) => handleToggleFavorite(e, product.id)}>
              <Svg name="heartIconFilled" />
            </button>
          ) : (
            <button onClick={(e) => handleToggleFavorite(e, product.id)}>
              <Svg name="heartIcon" />
            </button>
          )}
        </div>
      </div>
      <p className="pt-1 text-gray-900">${product.price}</p>
    </div>
  )
}

export default ProductCard
