import { render } from '@testing-library/react'

import NavProducts from '.'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn()
}))

describe('<NavProducts />', () => {
  it('should render the heading of products component', () => {
    render(
      <NavProducts>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
          <h1>Store</h1>
        </div>
      </NavProducts>
    )
  })
})
