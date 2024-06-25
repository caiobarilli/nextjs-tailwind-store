'use server'

import { ColorProps, TagProps } from '@/lib/types/filter'
import { PagedProductsProps, ProductProps } from '@/lib/types/products'
import { ReviewProps } from '@/lib/types/reviews'
import { revalidateTag } from 'next/cache'

export async function getPagedProducts(
  page: number,
  limit: number
): Promise<PagedProductsProps> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products?page=${page}&limit=${limit}`,
      {
        cache: 'force-cache',
        next: { tags: ['products'] }
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getProductBySlug(
  slug: string
): Promise<{ product: ProductProps }> {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
      cache: 'force-cache'
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function findProducts(
  text: string,
  page: number,
  limit: number
): Promise<PagedProductsProps> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/search?query=${text}&page=${page}&limit=${limit}`,
      {
        cache: 'no-store',
        next: { tags: ['find_product'] }
      }
    )

    revalidateTag('find_product')

    if (!res.ok && res.status === 400)
      return { products: [], pagination: { currentPage: 0, totalPages: 0 } }
    if (!res.ok && res.status === 404)
      return { products: [], pagination: { currentPage: 0, totalPages: 0 } }
    if (!res.ok && res.status === 500) throw new Error('Failed to fetch data')

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function filterProducts(
  queryString: string
): Promise<PagedProductsProps> {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/filter${queryString}`,
      {
        cache: 'no-store',
        next: { tags: ['filter_products'] }
      }
    )

    if (!res.ok && res.status === 404)
      return { products: [], pagination: { currentPage: 0, totalPages: 0 } }
    if (!res.ok && res.status === 500) throw new Error('Failed to fetch data')

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getProductDetails(): Promise<{
  tags: TagProps[]
  colors: ColorProps[]
}> {
  try {
    const relatedInfos = await fetch(
      'http://localhost:3000/api/products/categories',
      {
        cache: 'force-cache',
        next: { tags: ['related_info_products'] }
      }
    )

    if (!relatedInfos.ok) {
      throw new Error('Failed to fetch data')
    }

    const { colors, tags } = await relatedInfos.json()

    return { colors, tags }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getProductDetailsByIds(
  colorsIds: string[] | string,
  tagsIds: string[] | string
): Promise<{
  tags: TagProps[]
  colors: ColorProps[]
}> {
  try {
    const relatedInfos = await fetch(
      `http://localhost:3000/api/products/category?colors=${colorsIds}&tags=${tagsIds}`,
      {
        cache: 'force-cache',
        next: { tags: ['related_info_products'] }
      }
    )

    if (!relatedInfos.ok) {
      throw new Error('Failed to fetch data')
    }

    const { colors, tags } = await relatedInfos.json()

    return { colors, tags }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getProductReviews(
  ids: string[] | string
): Promise<{ reviews: ReviewProps | ReviewProps[] }> {
  try {
    const reviews = await fetch(
      `http://localhost:3000/api/products/reviews/${ids}`,
      {
        cache: 'force-cache',
        next: { tags: ['product_reviews'] }
      }
    )

    if (!reviews.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await reviews.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export async function getRelatedProducts(
  id: number
): Promise<{ products: ProductProps[] | [] }> {
  try {
    const products = await fetch(
      `http://localhost:3000/api/products/related/${id}`,
      {
        cache: 'force-cache',
        next: { tags: ['related_products'] }
      }
    )

    if (!products.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await products.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
