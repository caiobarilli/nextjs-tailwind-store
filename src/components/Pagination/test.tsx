import { render } from '@testing-library/react'

import Pagination from '.'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<Pagination />', () => {
  it('should render the pagination component', () => {
    render(<Pagination currentPage={1} totalPages={2} />)
  })
})
