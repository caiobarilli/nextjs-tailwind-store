import { createTableSlider } from './tables/slide.mjs'
import { createTableUsers } from './tables/users.mjs'
import { createTableColors } from './tables/colors.mjs'
import { createTableTags } from './tables/tags.mjs'

import {
  createTableReviews,
  createTableReviewProducts,
  createTableReviewUsers
} from './tables/reviews.mjs'

import {
  createTableProducts,
  createTableProductColors,
  createTableProductTags
} from './tables/products.mjs'

export function createTables(db) {
  db.prepare(createTableSlider).run()
  db.prepare(createTableColors).run()
  db.prepare(createTableTags).run()
  db.prepare(createTableUsers).run()

  db.prepare(createTableProducts).run()
  db.prepare(createTableProductColors).run()
  db.prepare(createTableProductTags).run()

  db.prepare(createTableReviews).run()
  db.prepare(createTableReviewProducts).run()
  db.prepare(createTableReviewUsers).run()
}
