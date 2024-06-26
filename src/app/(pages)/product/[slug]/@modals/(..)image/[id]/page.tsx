'use client'

import Image, { ImageLoaderProps } from 'next/image'
import { Modal } from './modal'

export default function PhotoModal({
  params: { id: photoId }
}: {
  params: { id: string }
}) {
  function imageLoader({ src, width, quality }: ImageLoaderProps) {
    return `https://images.unsplash.com/${src}?ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=${quality}`
  }
  return (
    <Modal>
      <Image
        alt="Full image"
        src={photoId}
        loader={imageLoader}
        width={320}
        height={480}
        quality={100}
        className="object-cover object-center"
        loading="lazy"
      />
    </Modal>
  )
}
