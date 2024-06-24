import { render } from '@testing-library/react'

import FilterProducts from '.'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

const colors = [
  {
    id: 1,
    name: 'Red'
  },
  {
    id: 2,
    name: 'Blue'
  }
]

const tags = [
  {
    id: 1,
    name: 'Kitchen'
  }
]

jest.mock('../../lib/utils/index', () => ({
  cleanQueryString: jest.fn()
}))

describe('<FilterProducts />', () => {
  it('should render the heading', () => {
    render(<FilterProducts colors={colors} tags={tags} />)
  })
})
