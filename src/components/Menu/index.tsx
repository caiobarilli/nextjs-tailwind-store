import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Logo from '@/components/Logo'
import { Svg } from '@/lib/svg'
import { useCart } from '@/hooks/use-cart'
// import Modal from '@/components/Modal'

const Menu = () => {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  // const [isModalOpen, setIsModalOpen] = useState(false)

  const { systemTheme, theme, setTheme } = useTheme()

  const { toggleSidebar } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  // const handleOpenModal = () => setIsModalOpen(true)
  // const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      <>
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <Svg name="menu" />
        </label>
        <input
          id="menu-toggle"
          onClick={handleMenuToggle}
          className="hidden"
          type="checkbox"
        />
      </>

      <div
        className={`${menuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto w-full order-3 md:order-1`}
      >
        <nav>
          <ul className="dark:text-white text-gray-700 md:flex items-center justify-between text-base pt-4 md:pt-0">
            <li>
              <Link
                className="dark:text-white dark:hover:text-white hover:text-black inline-block no-underline hover:underline py-2 px-4"
                href="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="dark:text-white dark:hover:text-white hover:text-black inline-block no-underline hover:underline py-2 px-4"
                href="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Logo />

      <div
        data-testid="shop-menu"
        className="order-2 md:order-3 flex items-center"
      >
        <>
          {currentTheme === 'dark' ? (
            <button
              onClick={() => setTheme('light')}
              className="inline-block no-underline hover:text-black"
            >
              <Svg
                name="sun"
                className="fill-current dark:hover:text-gray-300 hover:text-black"
              />
            </button>
          ) : (
            <button
              onClick={() => setTheme('dark')}
              className="inline-block no-underline hover:text-black"
            >
              <Svg
                name="moon"
                className="fill-current dark:hover:text-gray-300 hover:text-black"
              />
            </button>
          )}
        </>

        <Link
          href="/login"
          className="pl-3 inline-block no-underline hover:text-black"
        >
          <Svg
            name="profileIcon"
            className="fill-current dark:hover:text-gray-300 hover:text-black"
          />
        </Link>

        {/*
        <button
          onClick={handleOpenModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>
        backdrop
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-lg font-semibold">Modal Title</h2>
          <p>This is the modal content.</p>
        </Modal> */}

        <button
          onClick={toggleSidebar}
          className="pl-3 inline-block no-underline hover:text-black"
        >
          <Svg
            name="cartIcon"
            className="fill-current dark:hover:text-gray-300 hover:text-black"
          />
        </button>
      </div>
    </>
  )
}

export default Menu
