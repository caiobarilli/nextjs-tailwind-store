export const createTableProducts = `
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  quantity INTEGER NOT NULL,
  description TEXT,
  additional_info TEXT,
  rating REAL,
  slug TEXT NOT NULL,
  sku INTEGER,
  reviews_ids TEXT,
  color_ids TEXT,
  tag_ids TEXT,
  cover TEXT,
  images TEXT
)
`

export const createTableProductColors = `
CREATE TABLE IF NOT EXISTS product_colors (
  product_id INTEGER,
  color_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (color_id) REFERENCES colors(id)
)
`

export const createTableProductTags = `
CREATE TABLE IF NOT EXISTS product_tags (
  product_id INTEGER,
  tag_id INTEGER,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (tag_id) REFERENCES tags(id)
)
`

export const insertProductScheme = (db) => {
  return db.prepare(`
    INSERT INTO products VALUES (
      null,
      @name,
      @price,
      @quantity,
      @description,
      @additional_info,
      @rating,
      @slug,
      @sku,
      @reviews_ids,
      @color_ids,
      @tag_ids,
      @cover,
      @images
    )
  `)
}

export const insertProductColorScheme = (db) => {
  return db.prepare(`
    INSERT INTO product_colors (product_id, color_id)
    VALUES (@product_id, @color_id)
  `)
}

export const insertProductTagScheme = (db) => {
  return db.prepare(`
    INSERT INTO product_tags (product_id, tag_id)
    VALUES (@product_id, @tag_id)
  `)
}
