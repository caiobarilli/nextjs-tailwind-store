'use client'

import { ProductInformationProps } from '@/lib/types/products'
import { useState } from 'react'

const ProductInformation: React.FC<ProductInformationProps> = ({
  related_infos
}) => {
  const [activeTab, setActiveTab] = useState('description')

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
        if (
          Array.isArray(related_infos.reviews) &&
          related_infos.reviews !== undefined
        ) {
          content = related_infos.reviews.map((review) => (
            <li key={review.id}>{review.review}</li>
          ))
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

        <div className="grid grid-cols-3 gap-4">
          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Product 1</h3>
            <p className="text-sm">Description</p>
          </div>

          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Product 2</h3>
            <p className="text-sm">Description</p>
          </div>

          <div className="border border-gray-300 p-4">
            <h3 className="text-lg font-semibold">Product 2</h3>
            <p className="text-sm">Description</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductInformation
