export const createTableReviews = `
CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  review TEXT NOT NULL
)
`

export const createTableReviewProducts = `
CREATE TABLE IF NOT EXISTS reviews_products (
  product_id INTEGER,
  review_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
)
`

export const createTableReviewUsers = `
CREATE TABLE IF NOT EXISTS reviews_users (
  user_id INTEGER,
  review_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
)
`

export const insertReviewScheme = (db) => {
  return db.prepare(`
    INSERT INTO reviews VALUES (
      null,
      @review
    )
  `)
}

export const insertReviewProductScheme = (db) => {
  return db.prepare(`
    INSERT INTO reviews_products (product_id, review_id)
    VALUES (@product_id, @review_id)
  `)
}

export const insertReviewUserScheme = (db) => {
  return db.prepare(`
    INSERT INTO reviews_users (user_id, review_id)
    VALUES (@user_id, @review_id)
  `)
}
