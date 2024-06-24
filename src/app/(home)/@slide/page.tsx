import Slider from '@/components/Slider'
import { getHomeSlider } from '@/lib/actions/slides'

export const dynamic = 'force-dynamic'

export default async function HomeSlidePage() {
  const { slides, totalSlides } = await getHomeSlider()
  return <Slider slides={slides} totalSlides={totalSlides} />
}
