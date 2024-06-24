'use server'

import { NextResponse } from 'next/server'
import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'

export async function GET() {
  try {
    const slides = db.prepare(queries.selectAllSlides).all()
    const { total_slides } = db.prepare(queries.countTotalSlides).get() as {
      total_slides: number
    }

    return NextResponse.json({
      slides,
      total_slides
    })
  } catch (error) {
    console.error('Failed to fetch slides:', error)
    return NextResponse.json(
      { error: 'Failed to fetch slides' },
      { status: 500 }
    )
  }
}
