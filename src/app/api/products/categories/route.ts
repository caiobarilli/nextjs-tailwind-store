'use server'

import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const tags = db.prepare(queries.selectTags).all()
    const colors = db.prepare(queries.selectColors).all()

    return NextResponse.json({
      tags,
      colors
    })
  } catch (error) {
    console.error('Failed to fetch categories from products :', error)
    return NextResponse.json(
      { error: 'Failed to fetch categories from products ' },
      { status: 500 }
    )
  }
}
