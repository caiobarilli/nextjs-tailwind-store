'use client'

import { Svg } from '@/lib/svg'
import {
  toggleFilter,
  toggleIsOnFilter,
  toggleIsOnSearch,
  toggleResultNotFound,
  toggleSearch,
  updateProducts
} from '@/redux/products-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const NavFilterProducts = () => {
  const dispatch = useDispatch()

  const filterIsOpen = useSelector(
    (state: { products: { filterIsOpen: boolean } }) =>
      state.products.filterIsOpen
  )
  const searchIsOpen = useSelector(
    (state: { products: { searchIsOpen: boolean } }) =>
      state.products.searchIsOpen
  )

  useEffect(() => {
    if (!filterIsOpen || !searchIsOpen) {
      dispatch(toggleIsOnSearch(false))
      dispatch(toggleIsOnFilter(false))
      dispatch(toggleResultNotFound(false))
      dispatch(
        updateProducts({
          products: [],
          pagination: { currentPage: 0, totalPages: 0 }
        })
      )
    }
  })

  const toggleFilterHandler = () => {
    dispatch(toggleIsOnSearch(false))
    dispatch(toggleResultNotFound(false))

    if (filterIsOpen) {
      dispatch(toggleIsOnFilter(false))
      dispatch(
        updateProducts({
          products: [],
          pagination: { currentPage: 0, totalPages: 0 }
        })
      )
    }

    dispatch(toggleFilter())
  }

  const toggleSearchHandler = () => {
    dispatch(toggleIsOnFilter(false))
    dispatch(toggleResultNotFound(false))

    if (searchIsOpen) {
      dispatch(toggleIsOnSearch(false))
      dispatch(
        updateProducts({
          products: [],
          pagination: { currentPage: 0, totalPages: 0 }
        })
      )
    }

    dispatch(toggleSearch())
  }

  return (
    <div className="relative flex items-center" data-testid="store-nav-content">
      <button
        onClick={toggleFilterHandler}
        className="pl-3 inline-block no-underline hover:text-black"
      >
        <Svg name="filter" />
      </button>

      <button
        onClick={toggleSearchHandler}
        className="pl-3 inline-block no-underline hover:text-black"
      >
        <Svg name="search" />
      </button>
    </div>
  )
}

export default NavFilterProducts
