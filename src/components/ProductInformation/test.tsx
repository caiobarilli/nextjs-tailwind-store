import { render } from '@testing-library/react'

import ProductInformation from '.'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

const productInfos = {
  description: 'description',
  additional_info: 'additional_info',
  sku: 'sku',
  reviews: [{ id: 1, review: 'review' }],
  colors: [{ id: 1, name: 'color' }],
  tags: [{ id: 1, name: 'tag' }]
}

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

describe('<ProductInformation />', () => {
  it('should render the heading', () => {
    render(
      <ProductInformation
        related_infos={productInfos}
        related_products={related_products}
      />
    )
  })
})
