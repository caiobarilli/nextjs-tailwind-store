'use client'

import { SliderProps } from '@/lib/types/slide'
import { useState } from 'react'

const Slider: React.FC<SliderProps> = ({
  slides,
  totalSlides
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    )
  }

  const handleBulletClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="w-full mx-auto flex md:pt-0 md:items-center bg-cover bg-right">
      <div
        className="relative container mx-auto"
        style={{ maxWidth: '1600px' }}
      >
        <div
          className="relative overflow-hidden w-full"
          style={{ height: '50vh' }}
        >
          {slides.map((slide) => (
            <input
              key={slide.id}
              type="radio"
              id={`carousel-${slide.id}`}
              name="carousel"
              aria-hidden="true"
              hidden
            />
          ))}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-opacity duration-1000`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'right',
                height: '50vh',
                width: '100%',
                left: `${100 * (index - currentSlide)}%`,
                opacity: index === currentSlide ? 1 : 0
              }}
              data-testid="slide"
            >
              <div className="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
                <div className="container mx-auto">
                  <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">{slide.title}</p>
                    <a
                      className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                      href={slide.link}
                    >
                      view product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            data-testid="prev-button"
            className="flex justify-center leading-8 w-10 h-10 ml-2 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 z-10 inset-y-0 my-auto"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            data-testid="next-button"
            className="flex justify-center leading-8 w-10 h-10 mr-2 absolute cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 z-10 inset-y-0 my-auto right-0"
            onClick={nextSlide}
          >
            &gt;
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                data-testid="bullet"
                className={`w-3 h-3 mx-1 rounded-full focus:outline-none border ${index === currentSlide ? 'bg-black border-black' : 'bg-white border-black'}`}
                onClick={() => handleBulletClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
