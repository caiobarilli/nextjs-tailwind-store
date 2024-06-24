'use server'

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const page = parseInt(url.searchParams.get('page') || '1', 10)
  const limit = parseInt(url.searchParams.get('limit') || '2', 10)

  try {
    if (!page) {
      return NextResponse.json({ error: 'Missing page query' }, { status: 400 })
    }

    if (!limit) {
      return NextResponse.json(
        { error: 'Missing limit query' },
        { status: 400 }
      )
    }

    const offset = (page - 1) * limit
    const { total_products } = db.prepare(queries.countTotalProducts).get() as {
      total_products: number
    }

    const currentPage = page
    const totalPages = Math.ceil(total_products / limit)
    const products = db
      .prepare(queries.selectProductsWithPagination)
      .all(limit, offset)

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
