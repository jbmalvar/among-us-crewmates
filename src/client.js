import { createClient } from '@supabase/supabase-js'

const API_Key = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

export const supabase = createClient(API_URL, API_Key);