'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query') || ''
  const page = parseInt(url.searchParams.get('page') || '1', 10)
  const limit = parseInt(url.searchParams.get('limit') || '1', 10)

  try {
    if (query === '') {
      return NextResponse.json({ error: 'Missing query' }, { status: 400 })
    }

    const offset = (page - 1) * limit
    const { total_products } = db
      .prepare(queries.countSearchProduct)
      .get(query, query, query) as {
      total_products: number
    }

    const currentPage = page
    const totalPages = Math.ceil(total_products / limit)
    const products = db
      .prepare(queries.searchProducts)
      .all(query, query, query, limit, offset)

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
