import sql from 'better-sqlite3'

import { dummySlides } from './src/lib/mocks/sliders/index.js'
import { dummyUsers } from './src/lib/mocks/users/index.js'
import { dummyProducts } from './src/lib/mocks/products/index.js'
import { dummyColors } from './src/lib/mocks/products/colors.js'
import { dummyTags } from './src/lib/mocks/products/tags.js'
import { dummyReviews } from './src/lib/mocks/products/reviews.js'

import { createTables } from './src/config/db/createTables.mjs'

import { insertSlideScheme } from './src/config/db/tables/slide.mjs'
import { insertColorScheme } from './src/config/db/tables/colors.mjs'
import { insertTagScheme } from './src/config/db/tables/tags.mjs'
import { insertUserScheme } from './src/config/db/tables/users.mjs'

import {
  insertProductColorScheme,
  insertProductScheme,
  insertProductTagScheme
} from './src/config/db/tables/products.mjs'

import {
  insertReviewScheme,
  insertReviewProductScheme,
  insertReviewUserScheme
} from './src/config/db/tables/reviews.mjs'

const db = sql('store.db')

createTables(db)

const insertSlide = insertSlideScheme(db)
const insertUser = insertUserScheme(db)
const insertColor = insertColorScheme(db)
const insertTag = insertTagScheme(db)
const insertProduct = insertProductScheme(db)
const insertProductColor = insertProductColorScheme(db)
const insertProductTag = insertProductTagScheme(db)
const insertReview = insertReviewScheme(db)
const insertReviewProduct = insertReviewProductScheme(db)
const insertReviewUser = insertReviewUserScheme(db)

async function initData() {
  for (const slide of dummySlides) {
    insertSlide.run(slide)
  }

  for (const color of dummyColors) {
    insertColor.run(color)
  }

  for (const tag of dummyTags) {
    insertTag.run(tag)
  }

  for (const review of dummyReviews) {
    insertReview.run(review)
  }

  for (const product of dummyProducts) {
    const { lastInsertRowid: productId } = insertProduct.run(product)

    const colorIds = product.color_ids.split(',')
    for (const colorId of colorIds) {
      insertProductColor.run({ product_id: productId, color_id: colorId })
    }

    const tagIds = product.tag_ids.split(',')
    for (const tagId of tagIds) {
      insertProductTag.run({ product_id: productId, tag_id: tagId })
    }

    if (!product.reviews_ids) continue
    const reviewIds = product.reviews_ids.split(',')
    for (const reviewId of reviewIds) {
      insertReviewProduct.run({ product_id: productId, review_id: reviewId })
    }
  }

  for (const user of dummyUsers) {
    const { lastInsertRowid: userId } = insertUser.run(user)

    if (!user.reviews_ids) continue
    const reviewsIds = user.reviews_ids.split(',')
    for (const reviewId of reviewsIds) {
      insertReviewUser.run({ user_id: userId, review_id: reviewId })
    }
  }
}

initData()

console.warn('Banco de dados inicializado com sucesso!')
