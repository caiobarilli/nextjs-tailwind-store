'use server'

import { NextRequest, NextResponse } from 'next/server'
import { productsPerPage } from '@/components/Pagination' // number of products per page
import { db } from '@/config/sqlite'
import { capitalize } from '@/lib/utils'

type QueryParams = {
  page: number
  sortBy: string
  price: string
  color?: string
  tags?: string
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const queryParams = validateQueryParams(url)

  try {
    const { countQuery, selectQuery } = buildQuery(queryParams)

    const count = db.prepare(countQuery).get()
    if (!count) {
      return NextResponse.json({ error: 'Products not found' }, { status: 404 })
    }

    const { total_products } = count as { total_products: number }
    const totalPages = Math.ceil(total_products / productsPerPage)

    const currentPage = queryParams.page
    const offset = (queryParams.page - 1) * productsPerPage
    const products = db.prepare(selectQuery).all(productsPerPage, offset)

    return NextResponse.json({
      products,
      pagination: {
        currentPage,
        totalPages
      }
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ status: 500 })
  }
}

const validateQueryParams = (url: URL): QueryParams => {
  const page = parseInt(url.searchParams.get('page') || '1', 10)
  const sortBy = url.searchParams.get('sortBy') || ''
  const price = url.searchParams.get('price') || ''
  const color = url.searchParams.get('color') ?? undefined
  const tags = url.searchParams.get('tags') ?? undefined

  const validSortBy = ['default', 'low-to-high', 'high-to-low']
  const validPrice = [
    'all',
    '0-50',
    '50-100',
    '100-150',
    '150-200',
    '200-999999'
  ]

  if (!validSortBy.includes(sortBy)) {
    throw new Error('Invalid sortBy query')
  }

  if (!validPrice.includes(price)) {
    throw new Error('Invalid price query')
  }

  return { page, sortBy, price, color, tags }
}

const buildQuery = ({ sortBy, price, color, tags }: QueryParams) => {
  let queryOrderBy = ''
  let queryBetween = ''
  let queryJoin = ''
  let queryWhere = ''

  switch (sortBy) {
    case 'low-to-high':
      queryOrderBy = 'ORDER BY p.price ASC'
      break
    case 'high-to-low':
      queryOrderBy = 'ORDER BY p.price DESC'
      break
  }

  switch (price) {
    case '0-50':
      queryBetween = 'p.price BETWEEN 0 AND 50.0'
      break
    case '50-100':
      queryBetween = 'p.price BETWEEN 50.0 AND 100.0'
      break
    case '100-150':
      queryBetween = 'p.price BETWEEN 100.0 AND 150.0'
      break
    case '150-200':
      queryBetween = 'p.price BETWEEN 150.0 AND 200.0'
      break
    case '200-999999':
      queryBetween = 'p.price BETWEEN 200.0 AND 999999.9'
      break
  }

  const colorIsSet = !!color
  const tagsIsSet = !!tags

  if (colorIsSet) {
    queryJoin += `
      JOIN product_colors pc ON pc.product_id = p.id
      JOIN colors c ON pc.color_id = c.id`
    queryWhere += `c.name = '${capitalize(color)}'`
  }

  if (tagsIsSet) {
    const arrayTags = tags.split(',')
    const tagsCondition =
      arrayTags.length === 1
        ? `t.name = '${capitalize(arrayTags[0])}'`
        : `t.name IN (${arrayTags.map((tag) => `'${capitalize(tag)}'`).join(', ')})`
    queryJoin += `
      JOIN product_tags pt ON pt.product_id = p.id
      JOIN tags t ON pt.tag_id = t.id`
    queryWhere += colorIsSet ? ` AND ${tagsCondition}` : tagsCondition
  }

  if (queryBetween) {
    queryWhere +=
      colorIsSet || tagsIsSet ? ` AND ${queryBetween}` : queryBetween
  }

  queryWhere = queryWhere ? `WHERE ${queryWhere}` : ''

  return {
    countQuery: `
      SELECT COUNT(*) as total_products
      FROM products p
      ${queryJoin}
      ${queryWhere}`,
    selectQuery: `
      SELECT p.*
      FROM products p
      ${queryJoin}
      ${queryWhere}
      ${queryOrderBy}
      LIMIT ? OFFSET ?`
  }
}
