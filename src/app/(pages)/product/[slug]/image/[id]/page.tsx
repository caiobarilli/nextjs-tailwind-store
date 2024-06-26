'use client'

import Container from '@/components/Container'
import Image, { ImageLoaderProps } from 'next/image'

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {
  function imageLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://images.unsplash.com/${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=${quality}`
  }
  return (
    <Container>
      <Image
        alt="Full image"
        src={id}
        loader={imageLoader}
        width={600}
        height={480}
        quality={100}
        className="object-cover object-center"
        loading="lazy"
      />
    </Container>
  )
}
