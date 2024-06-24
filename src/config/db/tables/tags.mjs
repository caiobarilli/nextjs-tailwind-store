export const createTableTags = `
CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)
`

export const insertTagScheme = (db) => {
  return db.prepare(`
    INSERT INTO tags VALUES (
      null,
      @name
    )
  `)
}
