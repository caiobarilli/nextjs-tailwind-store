import ProductResume from '@/components/ProductResume'
import ProductInformation from '@/components/ProductInformation'
import { SingleProductProps } from '@/lib/types/products'

const Product: React.FC<SingleProductProps> = ({ product, related_infos }) => {
  return (
    <>
      <ProductResume product={product} colors={related_infos.colors} />
      <ProductInformation related_infos={related_infos} />
    </>
  )
}

export default Product
