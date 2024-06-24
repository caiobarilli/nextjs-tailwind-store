import { render, screen } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render the container with children', () => {
    render(
      <Container>
        <span>Children</span>
      </Container>
    )

    expect(screen.getByText(/Children/i)).toBeInTheDocument()
  })

  it('should render the container with default class "container mx-auto"', () => {
    render(
      <Container>
        <span>Children</span>
      </Container>
    )

    expect(screen.getByText(/Children/i).parentElement).toHaveClass(
      'container md:mx-auto'
    )
  })

  it('should render the container must have default class and classes from props', () => {
    render(
      <Container className="pt-4 pb-12">
        <span>Children</span>
      </Container>
    )

    expect(screen.getByText(/Children/i).parentElement).toHaveClass(
      'container md:mx-auto pt-4 pb-12'
    )
  })
})
