import { render } from '@testing-library/react'

import ProductInformation from '.'

const productInfos = {
  description: 'description',
  additional_info: 'additional_info',
  sku: 'sku',
  reviews: [{ id: 1, review: 'review' }],
  colors: [{ id: 1, name: 'color' }],
  tags: [{ id: 1, name: 'tag' }]
}

describe('<ProductInformation />', () => {
  it('should render the heading', () => {
    render(<ProductInformation related_infos={productInfos} />)
  })
})
