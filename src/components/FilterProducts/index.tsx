'use client'

import { useEffect, useState } from 'react'
import { cleanQueryString } from '@/lib/utils/index'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from '@/lib/actions/products'
import {
  toggleLoading,
  toggleResultNotFound,
  updateProducts,
  updateFilterQueryString,
  toggleIsOnFilter
} from '@/redux/products-slice'
import { FilterProps } from '@/lib/types/filter'

const initCategory = {
  sortBy: true,
  price: true,
  color: false,
  tags: false
}

const FilterProducts: React.FC<FilterProps> = ({ tags, colors }) => {
  const filterIsOpen = useSelector(
    (state: { products: { filterIsOpen: boolean } }) =>
      state.products.filterIsOpen
  )

  const [activeCategory, setActiveCategory] = useState(initCategory)
  const [activeColor, setActiveColor] = useState<string | undefined>(undefined)
  const [activeTags, setActiveTags] = useState<string[] | undefined>(undefined)
  const [activePrice, setActivePrice] = useState<string | undefined>('all')
  const [activeSortBy, setActiveSortBy] = useState<string | undefined>(
    'default'
  )

  let QUERY_STRING = ''

  useEffect(() => {
    if (!filterIsOpen) {
      setActiveCategory(initCategory)
      setActiveColor(undefined)
      setActiveTags(undefined)
      setActivePrice('all')
      setActiveSortBy('default')
    }
  }, [
    setActiveCategory,
    setActiveColor,
    setActiveTags,
    setActivePrice,
    setActiveSortBy,
    filterIsOpen
  ])

  const dispatch = useDispatch()

  function renderSortBy() {
    return (
      <>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activeSortBy === 'default' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'sortBy', 'default')
          }}
        >
          Default
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activeSortBy === 'low-to-high' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'sortBy', 'low-to-high')
          }}
        >
          Price: Low to High
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activeSortBy === 'high-to-low' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'sortBy', 'high-to-low')
          }}
        >
          Price: High to Low
        </li>
      </>
    )
  }

  function renderPrice() {
    return (
      <>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === 'all' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', 'all')
          }}
        >
          All
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === '0-50' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', '0-50')
          }}
        >
          $0 - $50
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === '50-100' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', '50-100')
          }}
        >
          $50 - $100
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === '100-150' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', '100-150')
          }}
        >
          $100 - $150
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === '150-200' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', '150-200')
          }}
        >
          $150 - $200
        </li>
        <li
          className={`text-gray-600 hover:text-black cursor-pointer ${activePrice === '200-999999' && 'underline'}`}
          onClick={(e) => {
            filterProductsHandler(e, 'price', '200-999999')
          }}
        >
          $200+
        </li>
      </>
    )
  }

  function renderColors() {
    return colors?.map((color) => (
      <li
        key={`${color.name + '_' + color.id}`}
        className={`flex items-center cursor-pointer ${activeColor === color.name.toLowerCase() && 'underline'}`}
        onClick={(e) => {
          filterProductsHandler(e, 'colors', color.name.toLowerCase())
        }}
      >
        <span
          className={`w-4 h-4 bg-${color.name.toLowerCase()}${color.name !== 'White' ? '-500' : ''} rounded-full mr-2`}
        >
          <span className="bg-blue-500 bg-gray-500 bg-green-500 bg-orange-500 bg-white"></span>
        </span>
        {color.name}
      </li>
    ))
  }

  function renderTags() {
    return tags?.map((tag) => (
      <span
        key={`${tag.name + '_' + tag.id}`}
        className={`px-3 py-1 rounded-full text-sm cursor-pointer bg-gray-200 ${activeTags?.includes(tag.name.toLowerCase()) ? 'text-gray-800' : 'text-gray-400'}
        `}
        onClick={(e) => {
          filterProductsHandler(e, 'tags', tag.name.toLowerCase())
        }}
      >
        {tag.name}
      </span>
    ))
  }

  function filterProductsHandler(
    e:
      | React.MouseEvent<HTMLLIElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>,
    category: string,
    subcategory: string
  ) {
    e.preventDefault()

    switch (category) {
      case 'sortBy':
        if (activeSortBy === subcategory) {
          setActiveSortBy('default')
          subcategory = 'default'
        } else {
          setActiveSortBy(subcategory)
        }
        QUERY_STRING = cleanQueryString(
          `?sortBy=${subcategory}&price=${activePrice}&color=${activeColor}&tags=${activeTags}`
        )
        break

      case 'price':
        if (activePrice === subcategory) {
          setActivePrice('all')
          subcategory = 'all'
        } else {
          setActivePrice(subcategory)
        }
        QUERY_STRING = cleanQueryString(
          `?sortBy=${activeSortBy}&price=${subcategory}&color=${activeColor}&tags=${activeTags}`
        )
        break

      case 'colors':
        setActiveCategory({
          sortBy: true,
          price: true,
          color: true,
          tags: activeCategory.tags
        })
        if (activeColor === subcategory) {
          setActiveColor(undefined)
          QUERY_STRING = cleanQueryString(
            `?sortBy=${activeSortBy}&price=${activePrice}&tags=${activeTags}`
          )
        } else {
          setActiveColor(subcategory)
          QUERY_STRING = cleanQueryString(
            `?sortBy=${activeSortBy}&price=${activePrice}&color=${subcategory}&tags=${activeTags}`
          )
        }
        break

      case 'tags':
        setActiveCategory({
          sortBy: true,
          price: true,
          color: activeCategory.color,
          tags: true
        })

        if (activeTags?.includes(subcategory)) {
          setActiveTags(activeTags?.filter((tag) => tag !== subcategory))
          setActiveCategory({
            sortBy: true,
            price: true,
            color: true,
            tags: false
          })

          QUERY_STRING = cleanQueryString(
            `?sortBy=${activeSortBy}&price=${activePrice}&color=${activeColor}&tags=${activeTags?.filter((tag) => tag !== subcategory)}`
          )
        } else {
          setActiveTags([...(activeTags || []), subcategory])
          QUERY_STRING = cleanQueryString(
            `?sortBy=${activeSortBy}&price=${activePrice}&color=${activeColor}&tags=${[...(activeTags || []), subcategory]}`
          )
        }
        break

      default:
        break
    }

    changeProducts(QUERY_STRING)
    dispatch(updateFilterQueryString(QUERY_STRING))

    return
  }

  const changeProducts = async (queryString: string) => {
    dispatch(toggleLoading(true))
    dispatch(toggleIsOnFilter(true))

    try {
      const pagedProducts = await filterProducts(queryString)
      const { products, pagination } = pagedProducts

      if (products.length === 0 && pagination.totalPages === 0) {
        dispatch(toggleResultNotFound(true))
        dispatch(toggleLoading(false))
        dispatch(toggleIsOnFilter(false))
        dispatch(
          updateProducts({
            products: [],
            pagination: { currentPage: 0, totalPages: 0 }
          })
        )
        return
      }

      dispatch(updateProducts(pagedProducts))
      dispatch(toggleResultNotFound(false))
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
    dispatch(toggleLoading(false))
    return
  }

  return (
    <div
      className={`${filterIsOpen ? 'grid' : 'hidden'}  md:grid-cols-4 gap-8 mb-4 px-2 py-3`}
    >
      <div className="md:mb-0 mb-4">
        <h3 className="font-semibold mb-4">Sort By</h3>
        <ul className="space-y-2">{renderSortBy()}</ul>
      </div>
      <div className="md:mb-0 mb-4">
        <h3 className="font-semibold mb-4">Price</h3>
        <ul className="space-y-2">{renderPrice()}</ul>
      </div>
      <div className="md:mb-0 mb-4">
        <h3 className="font-semibold mb-4">Color</h3>
        <ul className="space-y-2">{renderColors()}</ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">{renderTags()}</div>
      </div>
    </div>
  )
}

export default FilterProducts
