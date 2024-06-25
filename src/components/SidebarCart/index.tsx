'use client'

import { useCart } from '@/hooks/use-cart'
import Image, { ImageLoaderProps } from 'next/image'

const SidebarCart = () => {
  const {
    isOpen,
    toggleSidebar,
    removeFromCart,
    cartItems,
    calculateSubtotal,
    updateProductQuantity
  } = useCart()

  const subtotal = calculateSubtotal(cartItems)

  const handleQuantityChange = (increase: boolean, id: number) => {
    const cartItem = cartItems.find((item) => item.id === id)

    if (cartItem) {
      const updatedItem = {
        ...cartItem,
        quantity: increase ? cartItem.quantity + 1 : cartItem.quantity - 1
      }

      updateProductQuantity(id, updatedItem.quantity)
    }
  }

  function imageLoader({ src, quality }: ImageLoaderProps) {
    return `${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=${quality}`
  }

  return (
    <>
      <div
        data-testid="cart-sidebar"
        className={`bg-gray-900 text-white h-full w-64 z-50 pl-4
                  ${isOpen ? '-translate-x-0' : 'translate-x-full'}
                  fixed top-0 right-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between flex-row my-4 pb-4 pr-4 border-b">
          <h2 className="text-lg font-medium text-white" id="slide-over-title">
            Shopping cart
          </h2>
          <div className="ml-3 flex items-center">
            <button
              type="button"
              onClick={toggleSidebar}
              className="relative text-gray-400 hover:text-gray-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Close panel</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-y-auto h-3/4 cart-sidebar mb-4">
          <ul role="list" className="h-full divide-gray-200 pr-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex pb-4">
                <div className="w-10 mt-1 mr-4">
                  <Image
                    alt={item.name}
                    src={item.cover}
                    loader={imageLoader}
                    width={80}
                    height={80}
                    quality={40}
                    loading="lazy"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-white mb-2">
                      <h3 className="text-xs">{item.name}</h3>
                      <p className="text-xs">$ {item.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center	">
                      <button
                        onClick={() => handleQuantityChange(false, item.id)}
                        className="flex items-center justify-center	w-4 h-4 rounded-full mr-2 bg-indigo-600"
                      >
                        <strong>{` - `}</strong>
                      </button>

                      <span className="text-white">{item.quantity}</span>

                      <button
                        onClick={() => handleQuantityChange(true, item.id)}
                        className="flex items-center justify-center	w-4 h-4 rounded-full ml-2 bg-indigo-600"
                      >
                        <strong>{` + `}</strong>
                      </button>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-pink-600 hover:text-pink-900"
                      >
                        <svg
                          width="15px"
                          height="15px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                            stroke="#db2777"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-2 pr-4">
          <div className="flex justify-between text-base font-medium text-white">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-30`}
        onClick={toggleSidebar}
      ></div>
    </>
  )
}

export default SidebarCart
