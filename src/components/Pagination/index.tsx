import { useDispatch, useSelector } from 'react-redux'
import { updateProducts, toggleLoading } from '@/redux/products-slice'
import {
  filterProducts,
  findProducts,
  getPagedProducts
} from '@/lib/actions/products'
import { PaginationProps } from '@/lib/types/products'

export const initialPage: number = 1
export const productsPerPage: number = 8

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const isOnSearch = useSelector(
    (state: { products: { isOnSearch: boolean } }) => state.products.isOnSearch
  )
  const searchQuery = useSelector(
    (state: { products: { queryString: string } }) => state.products.queryString
  )
  const isOnFilter = useSelector(
    (state: { products: { isOnFilter: boolean } }) => state.products.isOnFilter
  )
  const filterQuery = useSelector(
    (state: { products: { queryStringFilter: string } }) =>
      state.products.queryStringFilter
  )

  const dispatch = useDispatch()

  const handlePageChange = (
    e: React.MouseEvent | React.KeyboardEvent,
    page: number
  ) => {
    e.preventDefault()
    if (isOnSearch) {
      if (page >= 1 && page <= totalPages) {
        onSearchChange(page)
      }
      return
    }

    if (isOnFilter) {
      if (page >= 1 && page <= totalPages) {
        onFilterChange(page, filterQuery)
      }
      return
    }

    if (page >= 1 && page <= totalPages) {
      changeProductsPage(page)
    }
    return
  }

  const changeProductsPage = async (page: number) => {
    dispatch(toggleLoading(true))
    try {
      const pagedProducts = await getPagedProducts(page, productsPerPage)
      dispatch(updateProducts(pagedProducts))
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
    dispatch(toggleLoading(false))
    return
  }

  const onSearchChange = async (page: number) => {
    dispatch(toggleLoading(true))
    try {
      const pagedProducts = await findProducts(
        searchQuery,
        page,
        productsPerPage
      )
      dispatch(updateProducts(pagedProducts))
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
    dispatch(toggleLoading(false))
    return
  }

  const onFilterChange = async (page: number, queryString: string) => {
    dispatch(toggleLoading(true))
    const filterQuery = `${queryString}&page=${page}`

    try {
      const pagedProducts = await filterProducts(filterQuery)
      dispatch(updateProducts(pagedProducts))
    } catch (error) {
      console.error('Failed to fetch products', error)
    }
    dispatch(toggleLoading(false))
    return
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i + 100}>
          {totalPages > 1 && (
            <div key={i} aria-current={currentPage === i ? 'page' : undefined}>
              <div
                className={`
                            relative block rounded px-3 py-1.5 mr-1.5 text-sm
                            transition duration-300 cursor-pointer text-surface
                            hover:bg-neutral-100
                            focus:bg-neutral-100 focus:text-primary-700
                            dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500

                            ${currentPage === i ? 'bg-neutral-100 text-primary-700 dark:hover:text-white dark:text-black dark:bg-neutral-100 ' : 'bg-transparent'}
                          `}
                onClick={(e) => handlePageChange(e, i)}
              >
                {i}
              </div>
            </div>
          )}
        </li>
      )
    }
    return pageNumbers
  }

  return (
    <nav>
      <ul className="list-style-none flex">
        {currentPage > 1 ? (
          <li>
            <div
              className="relative block cursor-pointer rounded bg-transparent px-3 py-1.5 mr-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
              onClick={(e) => handlePageChange(e, currentPage - 1)}
            >
              {'<<'}
            </div>
          </li>
        ) : null}

        {renderPageNumbers()}

        {currentPage !== totalPages ? (
          <li>
            <div
              className="relative block cursor-pointer rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
              onClick={(e) => handlePageChange(e, currentPage + 1)}
            >
              {'>>'}
            </div>
          </li>
        ) : null}
      </ul>
    </nav>
  )
}

export default Pagination
