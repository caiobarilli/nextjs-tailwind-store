'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const reviews = db.prepare(queries.selectReviews).all()

    if (!reviews) {
      return new Response(
        JSON.stringify({ error: 'Reviews de produtos não foram encontradas' }),
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
