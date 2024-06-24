import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    render(<Logo />)

    expect(screen.getByTestId('logo'))
  })
})
