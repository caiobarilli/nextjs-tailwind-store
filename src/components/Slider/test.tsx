import { fireEvent, render } from '@testing-library/react'

import Slider from './'
import LoadingSlider from './loading'

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    title: 'Stripy Zig Zag Jigsaw Pillow and Duvet Set',
    link: '#'
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
    title: 'Second Slide Title',
    link: '#'
  }
]

describe('Slider component', () => {
  it('should render the correct number of slides', () => {
    const { getAllByTestId } = render(
      <Slider slides={slides} totalSlides={2} />
    )
    const slideElements = getAllByTestId('slide')
    expect(slideElements.length).toBe(slides.length)
  })

  it('should render the next slide when next button is clicked', () => {
    const { getByTestId, getAllByTestId } = render(
      <Slider slides={slides} totalSlides={2} />
    )
    const nextButton = getByTestId('next-button')
    fireEvent.click(nextButton)
    const slideElements = getAllByTestId('slide')
    expect(slideElements[1]).toHaveStyle('opacity: 1')
  })

  it('should render the correct slide when bullet is clicked', () => {
    const { getAllByTestId } = render(
      <Slider slides={slides} totalSlides={2} />
    )
    const bullets = getAllByTestId('bullet')
    fireEvent.click(bullets[1])
    const slideElements = getAllByTestId('slide')
    expect(slideElements[1]).toHaveStyle('opacity: 1')
  })
})

describe('Slider Load component', () => {
  it('should render the loading component', () => {
    render(<LoadingSlider />)
  })
})
