'use server'

import { NextRequest, NextResponse } from 'next/server'
import { productsPerPage } from '@/components/Pagination'
import { db } from '@/config/sqlite'
import { capitalize } from '@/lib/utils'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const page = parseInt(url.searchParams.get('page') || '1', 10)
  const sortBy = url.searchParams.get('sortBy')
  const price = url.searchParams.get('price')
  const color = url.searchParams.get('color')
  const tags = url.searchParams.get('tags')

  try {
    const colorIsSet = color?.length !== undefined
    const tagsIsSet = tags?.length !== undefined

    if (!sortBy) {
      return NextResponse.json(
        { error: 'Missing sortBy query' },
        { status: 400 }
      )
    }

    if (!price) {
      return NextResponse.json(
        { error: 'Missing price query' },
        { status: 400 }
      )
    }

    let query: string = ''
    let queryOrderBy: string = ''
    let queryBetween: string = ''
    let queryJoin: string = ''
    let queryWhere: string = ''

    switch (sortBy) {
      case 'default':
        queryOrderBy = ''
        break

      case 'low-to-high':
        queryOrderBy = `
        ORDER BY p.price ASC`
        break

      case 'high-to-low':
        queryOrderBy = `
        ORDER BY p.price DESC`
        break

      default:
        break
    }

    switch (price) {
      case 'all':
        queryBetween = ''
        break
      case '0-50':
        if (colorIsSet || tagsIsSet) {
          queryBetween = `
          AND p.price BETWEEN 0 AND 50.0`
        } else {
          queryBetween = `
          WHERE p.price BETWEEN 0 AND 50.0`
        }
        break
      case '50-100':
        if (colorIsSet || tagsIsSet) {
          queryBetween = `
            AND p.price BETWEEN 50.0 AND 100.0`
        } else {
          queryBetween = `
            WHERE p.price BETWEEN 50.0 AND 100.0`
        }
        break
      case '100-150':
        if (colorIsSet || tagsIsSet) {
          queryBetween = `
          AND p.price BETWEEN 100.0 AND 150.0`
        } else {
          queryBetween = `
          WHERE p.price BETWEEN 100.0 AND 150.0`
        }
        break
      case '150-200':
        if (colorIsSet || tagsIsSet) {
          queryBetween = `
          AND p.price BETWEEN 150.0 AND 200.0`
        } else {
          queryBetween = `
          WHERE p.price BETWEEN 150.0 AND 200.0`
        }
        break
      case '200-999999':
        if (colorIsSet || tagsIsSet) {
          queryBetween = `
          AND p.price BETWEEN 200.0 AND 999999.9`
        } else {
          queryBetween = `
          WHERE p.price BETWEEN 200.0 AND 999999.9`
        }
        break

      default:
        queryBetween = ''
        break
    }

    if (colorIsSet && tagsIsSet) {
      queryJoin += `
              JOIN colors c ON pc.color_id = c.id
              JOIN product_colors pc ON pc.product_id = p.id
              JOIN tags t ON pt.tag_id = t.id
              JOIN product_tags pt ON pt.product_id = p.id
            `

      const arrayTags = tags?.split(',')
      const isSingleTag = arrayTags.length === 1

      if (isSingleTag) {
        queryWhere += `
          WHERE c.name = '${capitalize(color)}'
          AND t.name = '${capitalize(arrayTags.toString())}'
        `
      } else {
        const lineTags = arrayTags
          ?.map((elemento) => `'${capitalize(elemento)}'`)
          .join(', ')

        queryWhere += `
          WHERE c.name = '${capitalize(color)}'
          AND t.name IN (${lineTags})
          GROUP BY p.id
          HAVING COUNT(DISTINCT t.name) = 2
        `
      }
    }

    if (colorIsSet && !tagsIsSet) {
      queryJoin += `
        JOIN colors c ON pc.color_id = c.id
        JOIN product_colors pc ON pc.product_id = p.id
      `
      queryWhere += `WHERE c.name = '${capitalize(color)}'`
    }

    if (!colorIsSet && tagsIsSet) {
      const arrayTags = tags?.split(',')
      const isSingleTag = arrayTags.length === 1

      queryJoin += `
        JOIN tags t ON pt.tag_id = t.id
        JOIN product_tags pt ON pt.product_id = p.id
      `

      if (isSingleTag) {
        queryWhere += `
          WHERE t.name = '${capitalize(arrayTags.toString())}'
        `
      } else {
        const lineTags = arrayTags
          ?.map((elemento) => `'${elemento}'`)
          .join(', ')

        queryWhere += `
          WHERE t.name IN (${lineTags})
          GROUP BY p.id
          HAVING COUNT(DISTINCT t.name) = 2
        `
      }
    }

    if (!colorIsSet && !tagsIsSet) {
      queryJoin = ''
      queryWhere = ''
    }

    const countQuery = `
      SELECT COUNT(*) as total_products
      FROM products p
      ${queryJoin}
      ${queryWhere}
      ${queryBetween}
      `

    const count = db.prepare(countQuery).get()

    if (!count) {
      return NextResponse.json({ error: 'Products not found' }, { status: 404 })
    }

    const { total_products } = count as { total_products: number }
    const totalPages = Math.ceil(total_products / productsPerPage)

    query = `
      SELECT p.* FROM products p
      ${queryJoin}
      ${queryWhere}
      ${queryBetween}
      ${queryOrderBy}
      LIMIT ? OFFSET ?;
    `

    const currentPage = page
    const offset = (page - 1) * productsPerPage
    const products = db.prepare(query).all(productsPerPage, offset)

    return NextResponse.json({
      products,
      pagination: {
        currentPage,
        totalPages
      }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
