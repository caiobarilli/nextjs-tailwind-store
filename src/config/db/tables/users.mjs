export const createTableUsers = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT NOT NULL,
  username TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL,
  reviews_ids TEXT
)
`

export const insertUserScheme = (db) => {
  return db.prepare(`
    INSERT INTO users VALUES (
      null,
      @fullname,
      @username,
      @email,
      @password,
      @role,
      @reviews_ids
    )
  `)
}
