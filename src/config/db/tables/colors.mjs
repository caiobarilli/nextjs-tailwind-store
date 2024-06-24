export const createTableColors = `
CREATE TABLE IF NOT EXISTS colors (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
)
`

export const insertColorScheme = (db) => {
  return db.prepare(`
    INSERT INTO colors VALUES (
      null,
      @name
    )
  `)
}
