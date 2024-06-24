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

describe('<Product />', () => {
  it('should render the heading', () => {
    render(<Product product={product} related_infos={infos} />)
  })
})
