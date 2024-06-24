'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug

  try {
    const product = db.prepare(queries.selectProductBySlug).get(slug)

    if (!product) {
      return new Response(JSON.stringify({ error: 'Produto não encontrado' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response(
      JSON.stringify({
        product: product
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
