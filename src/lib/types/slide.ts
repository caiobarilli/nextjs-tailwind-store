export interface Slide {
  id: number
  image: string
  title: string
  link: string
}

export interface SliderProps {
  slides: Slide[]
  totalSlides: number
}
