import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// In-memory fallback cache for views and likes
const memoryStore = new Map<string, { views: number; likes: number }>()
const userLikesMemoryStore = new Set<string>() // key: `${userId || 'anon'}:${fileId}`

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const fileIdsParam = searchParams.get('fileIds')
    const userId = searchParams.get('userId') || ''

    const fileIds = fileIdsParam
      ? fileIdsParam.split(',').map((id) => id.trim()).filter(Boolean)
      : []

    const result: Record<string, { views: number; likes: number; userLiked: boolean }> = {}

    // Initialize with memory store values
    for (const id of fileIds) {
      const mem = memoryStore.get(id) || { views: 0, likes: 0 }
      const hasLiked = userLikesMemoryStore.has(`${userId}:${id}`)
      result[id] = {
        views: mem.views,
        likes: mem.likes,
        userLiked: hasLiked,
      }
    }

    // Try fetching from Supabase if configured
    try {
      const supabase = await createClient()
      if (fileIds.length > 0) {
        const { data: dbData, error } = await supabase
          .from('library_resource_engagement')
          .select('file_id, views_count, likes_count')
          .in('file_id', fileIds)

        if (!error && dbData) {
          dbData.forEach((row: any) => {
            if (result[row.file_id]) {
              result[row.file_id].views = Math.max(result[row.file_id].views, row.views_count || 0)
              result[row.file_id].likes = Math.max(result[row.file_id].likes, row.likes_count || 0)
            } else {
              result[row.file_id] = {
                views: row.views_count || 0,
                likes: row.likes_count || 0,
                userLiked: false,
              }
            }
          })
        }

        if (userId) {
          const { data: likesData } = await supabase
            .from('library_resource_likes')
            .select('file_id')
            .eq('user_id', userId)
            .in('file_id', fileIds)

          if (likesData) {
            likesData.forEach((row: any) => {
              if (result[row.file_id]) {
                result[row.file_id].userLiked = true
              }
            })
          }
        }
      }
    } catch {
      // Gracefully continue with memory store if database is offline or unmigrated
    }

    return NextResponse.json({ engagement: result })
  } catch (err: any) {
    return NextResponse.json({ engagement: {} })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fileId, action, userId = 'anonymous' } = body

    if (!fileId || !action) {
      return NextResponse.json({ error: 'fileId and action are required' }, { status: 400 })
    }

    // Update in-memory state
    const current = memoryStore.get(fileId) || { views: 0, likes: 0 }
    let userLiked = userLikesMemoryStore.has(`${userId}:${fileId}`)

    if (action === 'view') {
      current.views += 1
    } else if (action === 'like') {
      if (!userLiked) {
        current.likes += 1
        userLiked = true
        userLikesMemoryStore.add(`${userId}:${fileId}`)
      }
    } else if (action === 'unlike') {
      if (userLiked) {
        current.likes = Math.max(0, current.likes - 1)
        userLiked = false
        userLikesMemoryStore.delete(`${userId}:${fileId}`)
      }
    }
    memoryStore.set(fileId, current)

    // Try persisting to Supabase
    try {
      const supabase = await createClient()

      if (action === 'view') {
        const { data: existing } = await supabase
          .from('library_resource_engagement')
          .select('views_count')
          .eq('file_id', fileId)
          .single()

        const newViews = (existing?.views_count || 0) + 1
        await supabase.from('library_resource_engagement').upsert({
          file_id: fileId,
          views_count: Math.max(newViews, current.views),
          updated_at: new Date().toISOString(),
        })
      } else if (action === 'like') {
        const { data: existing } = await supabase
          .from('library_resource_engagement')
          .select('likes_count')
          .eq('file_id', fileId)
          .single()

        const newLikes = (existing?.likes_count || 0) + 1
        await supabase.from('library_resource_engagement').upsert({
          file_id: fileId,
          likes_count: Math.max(newLikes, current.likes),
          updated_at: new Date().toISOString(),
        })

        if (userId && userId !== 'anonymous') {
          await supabase.from('library_resource_likes').upsert({
            file_id: fileId,
            user_id: userId,
          })
        }
      } else if (action === 'unlike') {
        const { data: existing } = await supabase
          .from('library_resource_engagement')
          .select('likes_count')
          .eq('file_id', fileId)
          .single()

        const newLikes = Math.max(0, (existing?.likes_count || 1) - 1)
        await supabase.from('library_resource_engagement').upsert({
          file_id: fileId,
          likes_count: newLikes,
          updated_at: new Date().toISOString(),
        })

        if (userId && userId !== 'anonymous') {
          await supabase
            .from('library_resource_likes')
            .delete()
            .eq('file_id', fileId)
            .eq('user_id', userId)
        }
      }
    } catch {
      // Continue gracefully
    }

    return NextResponse.json({
      success: true,
      fileId,
      views: current.views,
      likes: current.likes,
      userLiked,
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to update engagement' }, { status: 500 })
  }
}
