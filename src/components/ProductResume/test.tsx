import { render } from '@testing-library/react'

import ProductResume from '.'

const product = {
  id: 1,
  name: 'Product',
  price: 100,
  quantity: 10,
  description: 'Description',
  additional_info: 'Additional info',
  rating: 5,
  slug: 'product',
  sku: 'sku',
  reviews_ids: '1',
  color_ids: '1',
  tag_ids: '1',
  cover: 'cover',
  images: 'images'
}

describe('<ProductResume />', () => {
  it('should render the component', () => {
    render(<ProductResume product={product} colors={{ id: 1, name: 'Blue' }} />)
  })
})
