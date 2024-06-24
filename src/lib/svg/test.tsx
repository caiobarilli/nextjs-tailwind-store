import { render, screen } from '@testing-library/react'

import { Svg } from '.'

describe('<Svg />', () => {
  it('should render the menu icon', () => {
    render(<Svg name="menu" />)
    const menuIcon = render(<Svg name="menu" />)

    expect(menuIcon).toBeTruthy()
  })

  it('should render shop icon with class', () => {
    render(<Svg name="shop" className="relative" />)

    expect(screen.getAllByRole('shop-icon')[0]).toHaveClass('relative')
  })
})
