'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { ProductInformationProps } from '@/lib/types/products'

const ProductInformation: React.FC<ProductInformationProps> = ({
  related_infos,
  related_products
}) => {
  const [activeTab, setActiveTab] = useState('description')

  const { products } = related_products

  const renderContent = () => {
    let content
    switch (activeTab) {
      case 'description':
        return (
          <div>
            <p>{related_infos.description}</p>
          </div>
        )

      case 'additionalInformation':
        return <p>{related_infos.additional_info}</p>

      case 'reviews':
        if (Array.isArray(related_infos.reviews)) {
          content = related_infos.reviews.map((review) => (
            <li key={review.id}>{review.review}</li>
          ))
        }

        if (
          related_infos.reviews !== undefined &&
          !Array.isArray(related_infos.reviews)
        ) {
          content = (
            <li key={related_infos.reviews.id}>
              {related_infos.reviews.review}
            </li>
          )
        }

        return <ul>{content}</ul>

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col px-4 mb-12">
      <nav className="flex space-x-4 border-b border-gray-300">
        <button
          className={`pb-2 ${activeTab === 'description' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>

        <button
          className={`pb-2 ${activeTab === 'additionalInformation' ? 'border-b-2 border-black' : ''}`}
          onClick={() => setActiveTab('additionalInformation')}
        >
          Additional information
        </button>
        {related_infos.reviews !== undefined && (
          <button
            className={`pb-2 ${activeTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
            <sup className="text-orange-500">
              {Array.isArray(related_infos.reviews)
                ? related_infos.reviews.length
                : 1}
            </sup>
          </button>
        )}
      </nav>

      <section className="mt-4 pb-4">{renderContent()}</section>

      <section className="border-y border-gray-300 pt-4 text-sm">
        <article className="grid justify-items-center pb-4">
          <p>SKU: {related_infos.sku}</p>
          <div>
            {`Tags: `}
            {Array.isArray(related_infos.tags)
              ? related_infos.tags.map((tag) => tag.name).join(', ')
              : related_infos.tags.name}
          </div>
        </article>
      </section>

      <section className="mb-12 py-4">
        <h2 className="text-xl font-semibold my-6 text-center">
          RELATED PRODUCTS
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductInformation
