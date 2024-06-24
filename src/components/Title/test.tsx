import { render, screen } from '@testing-library/react'

import Title from '.'

describe('<Title children="text" />', () => {
  it('should render the container with children', () => {
    const { container } = render(<Title size="md">Text</Title>)

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
