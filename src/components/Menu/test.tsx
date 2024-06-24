import { render } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the MainMenu', () => {
    render(<Menu />)
  })
})
