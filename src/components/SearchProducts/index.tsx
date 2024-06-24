'use client'

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleLoading,
  updateProducts,
  toggleResultNotFound,
  updateQueryString,
  toggleIsOnSearch
} from '@/redux/products-slice'
import { findProducts } from '@/lib/actions/products'
import { initialPage, productsPerPage } from '@/components/Pagination'

const SearchProducts: React.FC = () => {
  const [typingTimeout, setTypingTimeout] = useState<number | undefined>(
    undefined
  )
  const searchIsOpen = useSelector(
    (state: { products: { searchIsOpen: boolean } }) =>
      state.products.searchIsOpen
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (searchIsOpen) {
      const searchInput = document.getElementById('searchInput')
      if (searchInput) {
        searchInput.focus()
      }
    } else {
      formik.setFieldValue('search', '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchIsOpen])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    formik.setFieldValue('search', value)

    if (typingTimeout) {
      clearTimeout(typingTimeout)
    }

    const timeout = setTimeout(() => {
      formik.submitForm()
    }, 2500)

    setTypingTimeout(timeout as unknown as number)
  }

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (values) => {
      clearTimeout(typingTimeout)
      if (values.search.trim() === '') {
        dispatch(toggleResultNotFound(false))
        dispatch(
          updateProducts({
            products: [],
            pagination: { currentPage: 0, totalPages: 0 }
          })
        )
        return
      }
      onSearchChange(values.search)
    }
  })

  const onSearchChange = async (text: string) => {
    dispatch(toggleLoading(true))
    dispatch(toggleIsOnSearch(true))

    try {
      dispatch(updateQueryString(text))

      const pagedProducts = await findProducts(
        text,
        initialPage,
        productsPerPage
      )

      const { products, pagination } = pagedProducts

      if (products.length === 0 && pagination.totalPages === 0) {
        dispatch(toggleResultNotFound(true))
        dispatch(toggleLoading(false))
        dispatch(
          updateProducts({
            products: [],
            pagination: { currentPage: 0, totalPages: 0 }
          })
        )
        return
      }

      dispatch(updateProducts(pagedProducts))
    } catch (error) {
      console.error('Failed to fetch products', error)
    }

    dispatch(toggleResultNotFound(false))
    dispatch(toggleLoading(false))
    return
  }

  return (
    <div className={`${searchIsOpen ? 'relative' : 'hidden'}  mb-4 px-2 py-3`}>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex items-center absolute inset-y-0 left-0 pl-4 ">
          <button type="submit">
            <svg
              className="h-5 w-5 text-gray-500 "
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <input
          id="searchInput"
          name="search"
          className="w-full border rounded-md focus:border-blue-500 focus:shadow-outline pl-8 py-2 "
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
          value={formik.values.search}
        />
      </form>
    </div>
  )
}
export default SearchProducts
