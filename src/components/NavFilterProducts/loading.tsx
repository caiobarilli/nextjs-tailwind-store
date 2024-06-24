'use client'

import { Svg } from '@/lib/svg'

const LoadingFilterNav = () => {
  return (
    <div className="relative flex items-center" data-testid="store-nav-content">
      <button className="pl-3 inline-block no-underline hover:text-black cursor-not-allowed">
        <Svg name="filter" />
      </button>

      <button className="pl-3 inline-block no-underline hover:text-black cursor-not-allowed">
        <Svg name="search" />
      </button>
    </div>
  )
}

export default LoadingFilterNav
