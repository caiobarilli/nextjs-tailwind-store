import { render, screen } from '@testing-library/react'

import Text from '.'

describe('<Text />', () => {
  it('should render the Products', () => {
    render(<Text>Teste</Text>)

    expect(screen.getByTestId('paragraph'))
  })
})
