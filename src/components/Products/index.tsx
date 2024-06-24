'use client'

import { useSelector } from 'react-redux'
import Container from '@/components/Container'
import Pagination from '@/components/Pagination'
import Title from '@/components/Title'
import Text from '@/components/Text'
import ProductCard from '@/components/ProductCard'
import { PagedProductsProps, ProductsProps } from '@/lib/types/products'
import LoadingProducts from './loading'

const Products: React.FC<ProductsProps> = ({ initialProducts }) => {
  const isLoading = useSelector(
    (state: { products: { isLoading: boolean } }) => state.products.isLoading
  )
  const resultNotFound = useSelector(
    (state: { products: { resultNotFound: boolean } }) =>
      state.products.resultNotFound
  )
  const pagedProducts = useSelector(
    (state: { products: { pagedProducts: PagedProductsProps } }) =>
      state.products.pagedProducts
  )

  const pagedProductsIsEmpty = (pagedProducts?.products?.length ?? 0) === 0
  const { products, pagination } = pagedProductsIsEmpty
    ? initialProducts
    : pagedProducts

  if (isLoading) return <LoadingProducts />

  if (resultNotFound) {
    return (
      <Container>
        <div className="flex items-center flex-col">
          <Title size="md">Not Found</Title>
          <Text>Could not find requested resource</Text>
        </div>
      </Container>
    )
  }

  return (
    <>
      <Container className="flex flex-wrap items-center">
        <div id="modal-product" />
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>

      <Container className="flex flex-wrap flex-row-reverse pb-12">
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </Container>
    </>
  )
}

export default Products
