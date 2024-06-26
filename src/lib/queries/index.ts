export const queries = {
  // Slides
  selectAllSlides: `SELECT * FROM slides;`,
  countTotalSlides: `SELECT COUNT(*) as total_slides FROM slides;`,

  // Products
  selectProducts: `SELECT * FROM products LIMIT 10 OFFSET 0;`,
  selectProductsWithPagination: `SELECT * FROM products LIMIT ? OFFSET ?;`,
  selectProductBySlug: `SELECT * FROM products WHERE slug = ?;`,
  selectProductById: `SELECT * FROM products WHERE id = ?;`,
  countTotalProducts: `SELECT COUNT(*) as total_products FROM products;`,

  selectRelatedProducts: `
    WITH ProductTags AS (
      SELECT tag_id
      FROM product_tags
      WHERE product_id = ?
    ),

    RelatedProducts AS (
      SELECT pt.product_id
      FROM product_tags pt
      INNER JOIN ProductTags spt ON pt.tag_id = spt.tag_id
      WHERE pt.product_id != ?
      GROUP BY pt.product_id
      HAVING COUNT(pt.tag_id) = (SELECT COUNT(*) FROM ProductTags)
    )

    SELECT p.*
    FROM products p
    WHERE p.id IN (SELECT product_id FROM RelatedProducts)
    ORDER BY RANDOM()
    LIMIT 3;
  `,

  searchProducts: `
    SELECT * FROM products
    WHERE name LIKE '%' || ? || '%'
    OR description LIKE '%' || ? || '%'
    OR additional_info LIKE '%' || ? || '%'
    LIMIT ? OFFSET ?;
  `,

  countSearchProduct: `
    SELECT COUNT(*) as total_products
    FROM products
    WHERE name LIKE '%' || ? || '%'
    OR description LIKE '%' || ? || '%'
    OR additional_info LIKE '%' || ? || '%';
  `,

  searchProductByName: `SELECT * FROM products WHERE name LIKE '%' || ? || '%' LIMIT ? OFFSET ?;`,
  countSearchProductByName: `SELECT COUNT(*) as total_products FROM products WHERE name LIKE '%' || ? || '%';`,

  // Tags
  selectTags: `SELECT * FROM tags;`,
  selectByTagId: `SELECT * FROM tags WHERE id = ?;`,
  selectProductsByTagNames: `SELECT p.* FROM products p
                        JOIN product_tags pt ON pt.product_id = p.id
                        JOIN tags t ON pt.tag_id = t.id
                        WHERE t.name LIKE '%' || ? || '%';`,

  // Colors
  selectColors: `SELECT * FROM colors;`,
  selectByColorId: `SELECT * FROM colors WHERE id = ?;`,
  selectByColorName: `SELECT p.* FROM products p
                  JOIN colors c ON pc.color_id = c.id
                  JOIN product_colors pc ON pc.product_id = p.id
                  WHERE c.name LIKE '%' || ? || '%';`,

  // Filter Products
  filterProducts: `SELECT p.* FROM products p
                JOIN product_colors pc ON pc.product_id = p.id
                JOIN colors c ON pc.color_id = c.id

                JOIN product_tags pt ON pt.product_id = p.id
                JOIN tags t ON pt.tag_id = t.id

                WHERE c.name LIKE '%' || ? || '%'
                AND t.name LIKE '%' || ? || '%'
                AND p.price BETWEEN ? AND ?;`,

  // Reviews
  selectReviewsByIDs: `SELECT * FROM reviews WHERE id IN (?);`,
  selectReviews: `SELECT * FROM reviews LIMIT 10 OFFSET 0;`
}
