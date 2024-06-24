'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  const arrayId = id.split(',')

  try {
    let reviews
    if (arrayId.length === 1) {
      reviews = db.prepare(queries.selectReviewsByIDs).get(arrayId[0])
    } else {
      const ids = arrayId.map(() => '?').join(',')
      const query = `SELECT * FROM reviews WHERE id IN (${ids});`
      reviews = db.prepare(query).all(...arrayId)
    }

    if (!reviews) {
      return new Response(
        JSON.stringify({ error: 'Review do produto não encontrada' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    return new Response(
      JSON.stringify({
        reviews: reviews
      }),
      {
        headers: {
          'content-type': 'text/plain'
        },
        status: 200
      }
    )
  } catch (error) {
    console.error('Failed to fetch:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
