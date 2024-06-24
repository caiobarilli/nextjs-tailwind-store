import { render, screen } from '@testing-library/react'

import NavFilterProducts from '.'
import LoadingFilterNav from './loading'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<NavFilter />', () => {
  it('should render the FilterNav', () => {
    render(<NavFilterProducts />)

    expect(screen.getByTestId('store-nav-content'))
  })
})

describe('NavFilter Load component', () => {
  it('should render the loading component', () => {
    render(<LoadingFilterNav />)
  })
})
