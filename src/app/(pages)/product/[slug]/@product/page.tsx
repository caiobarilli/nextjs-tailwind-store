'use server'

import Container from '@/components/Container'
import Product from '@/components/Product'
import {
  getProductBySlug,
  getProductReviews,
  getProductDetailsByIds,
  getRelatedProducts
} from '@/lib/actions/products'

export default async function ProductPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { product } = await getProductBySlug(slug)

  const productReviews = product.reviews_ids
    ? await getProductReviews(product.reviews_ids)
    : undefined

  const { colors, tags } = await getProductDetailsByIds(
    product.color_ids,
    product.tag_ids
  )

  const related_products = await getRelatedProducts(product.id)

  const related_infos = {
    sku: product.sku,
    description: product.description,
    additional_info: product.additional_info,
    reviews: productReviews ? productReviews.reviews : undefined,
    colors,
    tags
  }

  return (
    <Container>
      <Product
        product={product}
        related_infos={related_infos}
        related_products={related_products}
      />
    </Container>
  )
}
