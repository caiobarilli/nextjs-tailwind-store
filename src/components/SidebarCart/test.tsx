import { render } from '@testing-library/react'
import CartSidebar from '.'

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

describe('<CartSidebar />', () => {
  it('should render the Component', () => {
    render(<CartSidebar />)
  })
})
