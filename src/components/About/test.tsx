import { render, screen } from '@testing-library/react'

import About from '.'

describe('<About />', () => {
  it('should render the complete AboutComponent', () => {
    render(<About />)

    expect(screen.getByTestId('about'))
  })

  it('should render the AboutComponent with the resume', () => {
    render(<About resume={true} />)

    expect(screen.getByText('About'))
  })
})
