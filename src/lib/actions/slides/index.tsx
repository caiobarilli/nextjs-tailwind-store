'use server'

import { SliderProps } from '@/components/Slider'

export async function getHomeSlider(): Promise<SliderProps> {
  try {
    const res = await fetch(`http://localhost:3000/api/slides`, {
      cache: 'no-store',
      next: { tags: ['slider_home'] }
    })

    if (res.status === 500 || res.status === 404)
      return {
        slides: [],
        totalSlides: 0
      }

    const slider = await res.json()

    return {
      slides: slider.slides,
      totalSlides: slider.total_slides
    }
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}
