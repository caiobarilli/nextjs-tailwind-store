import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PagedProductsProps } from '@/lib/types/products'

type ProductsState = {
  queryString: string
  queryStringFilter: string
  isLoading: boolean
  filterIsOpen: boolean
  searchIsOpen: boolean
  isOnSearch: boolean
  isOnFilter: boolean
  resultNotFound: boolean
  pagedProducts: PagedProductsProps
}

const initialState: ProductsState = {
  queryString: '',
  queryStringFilter: '',
  filterIsOpen: false,
  searchIsOpen: false,
  isOnSearch: false,
  isOnFilter: false,
  isLoading: false,
  resultNotFound: false,
  pagedProducts: { products: [], pagination: { currentPage: 0, totalPages: 0 } }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload
    },
    updateFilterQueryString: (state, action: PayloadAction<string>) => {
      state.queryStringFilter = action.payload
    },
    updateProducts: (state, action: PayloadAction<PagedProductsProps>) => {
      state.pagedProducts = action.payload
    },
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    toggleIsOnSearch: (state, action: PayloadAction<boolean>) => {
      state.isOnSearch = action.payload
    },
    toggleIsOnFilter: (state, action: PayloadAction<boolean>) => {
      state.isOnFilter = action.payload
    },
    toggleSearch: (state) => {
      state.filterIsOpen = false
      state.searchIsOpen = !state.searchIsOpen
    },
    toggleFilter: (state) => {
      state.searchIsOpen = false
      state.filterIsOpen = !state.filterIsOpen
    },
    toggleResultNotFound: (state, action: PayloadAction<boolean>) => {
      state.resultNotFound = action.payload
    }
  }
})

export const {
  updateQueryString,
  updateFilterQueryString,
  updateProducts,
  toggleLoading,
  toggleIsOnSearch,
  toggleIsOnFilter,
  toggleSearch,
  toggleFilter,
  toggleResultNotFound
} = productsSlice.actions
export default productsSlice.reducer
