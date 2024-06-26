'use client'

import { useState } from 'react'
import Image, { ImageLoaderProps } from 'next/image'
import { ProductResumeWithColorsProps } from '@/lib/types/products'
import { useCart } from '@/hooks/use-cart'
import Link from 'next/link'

const ProductResume: React.FC<ProductResumeWithColorsProps> = ({
  product,
  colors
}) => {
  const [quantity, setQuantity] = useState(1)

  const {
    toggleSidebar,
    addToCart,
    removeFromCart,
    updateProductQuantity,
    isInCart,
    itemQuantity
  } = useCart()

  const images = product.images.split(',')
  const hasImages = images[0] !== ''
  const hasScroll = images.length > 6

  const handleQuantityChange = (increment: boolean) => {
    if (isInCart(product.id)) {
      const qty = increment ? quantity + 1 : Math.max(1, quantity)
      const itemQty = itemQuantity(product.id)
      setQuantity(increment ? itemQty + 1 : Math.max(1, itemQty - 1))
      updateProductQuantity(product.id, qty)
    } else {
      setQuantity((prevQuantity) =>
        increment ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
      )
    }
  }

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    quantity: number
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
      quantity: quantity
    })
  }

  const handleRemoveFromCart = (id: number) => {
    setQuantity(1)
    removeFromCart(id)
  }

  function coverLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://images.unsplash.com/${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&h=380&q=${quality}`
  }

  function imageLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://images.unsplash.com/${src}?ixlib=rb-1.2.1&fit=crop&w=${width}&h=58&q=${quality}`
  }

  function renderImages() {
    if (hasImages) {
      return (
        <div
          className={`
            ${hasScroll ? 'product-images' : ''}
            flex flex-row lg:flex-col
            md:overflow-y-auto md:overflow-x-hidden
          `}
        >
          <div className={`md:h-80 md:mr-1 md:max-h-80`}>
            {images.map((image, index) => (
              <Link key={index} href={`/product/image/${image}`}>
                <Image
                  alt={product.name}
                  src={image}
                  loader={imageLoader}
                  width={50}
                  height={58}
                  quality={60}
                  className="mb-2 md:mr-2"
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  function renderCover() {
    return (
      <div
        className={`${hasScroll ? 'ml-2' : ''} relative mb-4 lg:mb-0 lg:mr-4 `}
      >
        <Image
          alt={product.name}
          src={product.cover}
          loader={coverLoader}
          width={320}
          height={520}
          quality={100}
          className="mb-4"
          priority
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row items-start p-4">
      {hasImages && renderImages()}

      {renderCover()}

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        <p className="text-gray-700 mb-4">{product.description}</p>

        <div className="flex mb-4">
          {Array.from({ length: product.rating }, (_, i) => (
            <span key={i} className="text-yellow-500">
              ⭐
            </span>
          ))}
        </div>

        <div className="flex items-center mb-4">
          <p className="mr-2">Colors:</p>
          {Array.isArray(colors) ? (
            colors.map((color) => (
              <span
                key={color.id}
                className={`w-4 h-4 rounded-full mr-2 bg-${color.name.toLowerCase()}${color.name !== 'White' ? '-500' : ''}`}
              ></span>
            ))
          ) : (
            <span
              className={`w-4 h-4 rounded-full mr-2 bg-${colors.name.toLowerCase()}${colors.name !== 'White' ? '-500' : ''}`}
            ></span>
          )}
        </div>

        <div className="flex flex-col">
          <div className="items-center mb-4">
            <button
              onClick={() => handleQuantityChange(false)}
              className="w-8 h-8 border border-black text-black"
            >
              -
            </button>

            <span className="mx-2">
              {!isInCart(product.id) ? quantity : itemQuantity(product.id)}
            </span>

            <button
              onClick={() => handleQuantityChange(true)}
              className="w-8 h-8 border border-black text-black"
            >
              +
            </button>
          </div>

          {!isInCart(product.id) ? (
            <button
              onClick={(e) => {
                handleAddToCart(e, quantity)
              }}
              className="px-4 py-3 bg-black text-white"
            >
              Add to cart
            </button>
          ) : (
            <button
              onClick={() => {
                handleRemoveFromCart(product.id)
              }}
              className="px-4 py-3 bg-black text-white"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductResume
