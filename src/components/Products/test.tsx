import { render } from '@testing-library/react'

import Products from '.'
import LoadingSlider from './loading'
import { PagedProductsProps } from '@/lib/types/products'

const products: PagedProductsProps = {
  products: [
    {
      id: 1,
      name: 'Teapot Ceramic',
      price: 9.99,
      quantity: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget justo vehicula, eu vestibulum libero feugiat. Sed ut leo sed metus eleifend malesuada at id nunc.',
      additional_info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      rating: 4.5,
      color_ids: '1,2',
      tag_ids: '1',
      slug: 'teapot-ceramic',
      image:
        'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80'
    }
  ],
  pagination: { currentPage: 1, totalPages: 2 }
}

jest.mock('@/hooks/use-cart', () => ({
  useCart: () => ({
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    isInCart: jest.fn().mockReturnValue(false)
  })
}))

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

jest.mock('../../lib/utils/index', () => ({
  cleanQueryString: jest.fn()
}))

describe('<Products />', () => {
  it('should render the Products', () => {
    render(<Products initialProducts={products} />)
  })
})

describe('Products Load component', () => {
  it('should render the loading component', () => {
    render(<LoadingSlider />)
  })
})
