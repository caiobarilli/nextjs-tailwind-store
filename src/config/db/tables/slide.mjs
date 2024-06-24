export const createTableSlider = `
CREATE TABLE IF NOT EXISTS slides (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image TEXT NOT NULL,
  title TEXT NOT NULL,
  link TEXT
)`

export const insertSlideScheme = (db) => {
  return db.prepare(`
    INSERT INTO slides VALUES (
      null,
      @image,
      @title,
      @link
    )
  `)
}
