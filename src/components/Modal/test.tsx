import { render } from '@testing-library/react'

import Modal from '.'

const onClose = jest.fn()

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = jest.fn()
})

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(
      <Modal isOpen={true} onClose={onClose}>
        test
      </Modal>
    )
  })
})
