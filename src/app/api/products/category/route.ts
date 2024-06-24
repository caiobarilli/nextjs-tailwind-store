'use server'

import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/config/sqlite'
import { queries } from '@/lib/queries'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const colorsIds = url.searchParams.get('colors')
  const tagsIds = url.searchParams.get('tags')

  try {
    const arrayColorsIds = colorsIds ? colorsIds.split(',') : []
    const arrayTagsIds = tagsIds ? tagsIds.split(',') : []

    let colors
    if (arrayColorsIds.length === 1) {
      colors = db.prepare(queries.selectByColorId).get(colorsIds)
    } else {
      const ids = arrayColorsIds.map(() => '?').join(',')
      const query = `SELECT * FROM colors WHERE id IN (${ids});`
      colors = db.prepare(query).all(...arrayColorsIds)
    }

    let tags
    if (arrayTagsIds.length === 1) {
      tags = db.prepare(queries.selectByTagId).get(tagsIds)
    } else {
      const ids = arrayTagsIds.map(() => '?').join(',')
      const query = `SELECT * FROM tags WHERE id IN (${ids});`
      tags = db.prepare(query).all(...arrayTagsIds)
    }

    return new Response(
      JSON.stringify({
        colors: colors,
        tags: tags
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
