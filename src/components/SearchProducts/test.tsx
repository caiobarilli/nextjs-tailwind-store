import { render } from '@testing-library/react'

import SearchProducts from '.'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<SearchProducts />', () => {
  it('should render the component', () => {
    render(<SearchProducts />)
  })
})
