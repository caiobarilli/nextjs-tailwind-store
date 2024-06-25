'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { ProductProps } from '@/lib/types/products'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product_id = params.id

  try {
    const product = db
      .prepare(queries.selectProductById)
      .all(product_id) as unknown as ProductProps

    if (!product) {
      return new Response(JSON.stringify({ error: 'Produto não encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const products = db
      .prepare(queries.selectRelatedProducts)
      .all(product_id, product_id)

    if (!products) {
      return new Response(JSON.stringify({ error: 'Produto não encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(
      JSON.stringify({
        products: products
      }),
      {
        headers: {
          'content-type': 'text/plain'
        },
        status: 200
      }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
