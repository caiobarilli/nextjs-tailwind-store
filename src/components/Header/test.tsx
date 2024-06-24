import { render, screen } from '@testing-library/react'

import Header from '.'

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

describe('<Header />', () => {
  it('should render the Header', () => {
    render(<Header />)

    expect(screen.getByTestId('header'))
  })
})
