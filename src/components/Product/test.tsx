import { render } from '@testing-library/react'

import Product from '.'

const product = {
  id: 1,
  name: 'Product 1',
  price: 100,
  quantity: 10,
  description: 'Description',
  additional_info: 'Additional Information',
  rating: 5,
  sku: '123SKU',
  slug: 'product-1',
  reviews_ids: '1',
  color_ids: '1',
  tag_ids: '1',
  cover: 'https://www.google.com/logo.png',
  images: ''
}

const infos = {
  description: 'Description',
  additional_info: 'Additional Information',
  sku: '123SKU',
  reviews: { id: 1, review: 'Comment' },
  colors: { id: 1, name: 'Blue' },
  tags: { id: 1, name: 'Tag' }
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

jest.mock('@/hooks/use-cart', () => ({
  useCart: () => ({
    isOpen: false,
    cartItems: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    isInCart: jest.fn().mockReturnValue(false),
    toggleSidebar: jest.fn(),
    calculateSubtotal: jest.fn().mockReturnValue(0)
  })
}))

const related_products = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 10,
      description: 'Description',
      additional_info: 'Additional Information',
      rating: 5,
      sku: '123SKU',
      slug: 'product-1',
      reviews_ids: '1',
      color_ids: '1',
      tag_ids: '1',
      cover: 'https://www.google.com/logo.png',
      images: ''
    }
  ]
}

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<Product />', () => {
  it('should render the heading', () => {
    render(
      <Product
        product={product}
        related_infos={infos}
        related_products={related_products}
      />
    )
  })
})
