import { getPagedProducts, getProductDetails } from '@/lib/actions/products'

import Products from '@/components/Products'
import Search from '@/components/SearchProducts'
import Filter from '@/components/FilterProducts'
import NavProducts from '@/components/NavProducts'
import { initialPage, productsPerPage } from '@/components/Pagination'

export const dynamic = 'force-dynamic'

export default async function HomeProductsPage() {
  const { colors, tags } = await getProductDetails()
  const pagedProducts = await getPagedProducts(initialPage, productsPerPage)

  return (
    <>
      <NavProducts>
        <Search />
        <Filter colors={colors} tags={tags} />
      </NavProducts>
      <Products initialProducts={pagedProducts} />
    </>
  )
}
