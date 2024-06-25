import { ColorProps, TagProps } from './filter'
import { ReviewProps } from './reviews'

export interface ProductsProps {
  initialProducts: PagedProductsProps
}

export interface ProductProps {
  id: number
  name: string
  price: number
  quantity: number
  description: string
  additional_info: string
  rating: number
  slug: string
  sku: string
  reviews_ids: string
  color_ids: string
  tag_ids: string
  cover: string
  images: string
}

export interface SingleProductProps {
  product: ProductProps
  related_infos: RelatedInfoProductsProps
}

export interface PagedProductsProps {
  products: ProductProps[] | []
  pagination: {
    currentPage: number
    totalPages: number
  }
}

export interface ProductResumeWithColorsProps {
  product: ProductProps
  colors: ColorProps | ColorProps[]
}

export interface ProductInformationProps {
  related_infos: RelatedInfoProductsProps
}

export interface PaginationProps {
  totalPages: number
  currentPage: number
}

export interface RelatedInfoProductsProps {
  description: string
  additional_info: string
  sku: string
  reviews: ReviewProps | ReviewProps[] | undefined
  colors: ColorProps | ColorProps[]
  tags: TagProps | TagProps[]
}
