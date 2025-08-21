import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          fitness_goal: string
          plan_type: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          fitness_goal: string
          plan_type?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          fitness_goal?: string
          plan_type?: string
          updated_at?: string
        }
      }
      workouts: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string
          duration: number
          difficulty: string
          category: string
          exercises: any
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description: string
          duration: number
          difficulty: string
          category: string
          exercises: any
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string
          duration?: number
          difficulty?: string
          category?: string
          exercises?: any
          completed_at?: string | null
        }
      }
      progress: {
        Row: {
          id: string
          user_id: string
          workout_id: string
          date: string
          duration: number
          calories_burned: number
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          workout_id: string
          date: string
          duration: number
          calories_burned: number
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          workout_id?: string
          date?: string
          duration?: number
          calories_burned?: number
          notes?: string | null
        }
      }
      meal_plans: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string
          meals: any
          calories_per_day: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description: string
          meals: any
          calories_per_day: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string
          meals?: any
          calories_per_day?: number
        }
      }
    }
  }
}