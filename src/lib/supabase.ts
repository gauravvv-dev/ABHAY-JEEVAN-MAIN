import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://naaagrueqzgawkbkwqwf.supabase.co'
const supabaseAnonKey = 'sb_publishable_ouNoQ4U9UUXdn960VfeY5A_C-_-xjYl'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Camp = {
  id: string
  title: string
  description: string
  camp_date: string
  camp_time: string
  location: string
  banner_image_url: string | null
  is_published: boolean
  created_at: string
}

export type Announcement = {
  id: string
  title: string
  body: string
  is_published: boolean
  published_at: string | null
  created_at: string
}