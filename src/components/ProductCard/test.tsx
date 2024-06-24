import { render, screen } from '@testing-library/react'

import ProductCard from '.'
import { ProductProps } from '@/lib/types/products'

const product: ProductProps = {
  id: 1,
  name: 'Product Name 1',
  price: 9.99,
  quantity: 10,
  description: 'Description 1',
  additional_info: 'Additional Info 1',
  rating: 4,
  sku: 'sku-1',
  reviews_ids: '1,2,3',
  color_ids: '1,2,3',
  tag_ids: '1,2',
  cover:
    'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
  slug: 'product-name-1',
  images:
    'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80'
}

jest.mock('@/hooks/use-cart', () => ({
  useCart: () => ({
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    isInCart: jest.fn().mockReturnValue(false),
    toggleSidebar: jest.fn()
  })
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<ProductCard />', () => {
  it('should render the Product', () => {
    render(<ProductCard key={product.id} product={product} />)

    expect(screen.getByTestId('product'))
  })
})
