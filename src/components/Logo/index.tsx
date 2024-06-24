import { Svg } from '@/lib/svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="order-1 md:order-2" data-testid="logo">
      <Link
        className="dark:text-white text-gray-800 flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl "
        href="/"
      >
        <Svg
          name="shop"
          className="dark:text-white text-gray-800 fill-current mr-2 "
        />
        STORE
      </Link>
    </div>
  )
}

export default Logo
