import { supabase } from './supabase'

export interface Workout {
  id: string
  user_id: string
  name: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  exercises: Exercise[]
  completed_at?: string
  created_at: string
}

export interface Exercise {
  name: string
  sets?: number
  reps?: number
  duration?: number
  rest?: number
  instructions: string[]
  muscle_groups: string[]
  equipment: string
}

export interface WorkoutProgress {
  id: string
  user_id: string
  workout_id: string
  date: string
  duration: number
  calories_burned: number
  notes?: string
  created_at: string
}

export class WorkoutService {
  static async getWorkoutsByCategory(category: string, userId?: string) {
    try {
      let query = supabase
        .from('workouts')
        .select('*')
        .eq('category', category)

      if (userId) {
        query = query.eq('user_id', userId)
      }

      const { data, error } = await query.order('created_at', { ascending: false })

      if (error) throw error
      return { workouts: data, error: null }
    } catch (error) {
      return { workouts: [], error }
    }
  }

  static async createWorkout(workout: Omit<Workout, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .insert(workout)
        .select()
        .single()

      if (error) throw error
      return { workout: data, error: null }
    } catch (error) {
      return { workout: null, error }
    }
  }

  static async startWorkout(workoutId: string, userId: string) {
    try {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('id', workoutId)
        .eq('user_id', userId)
        .single()

      if (error) throw error
      return { workout: data, error: null }
    } catch (error) {
      return { workout: null, error }
    }
  }

  static async completeWorkout(workoutId: string, userId: string, progressData: {
    duration: number
    calories_burned: number
    notes?: string
  }) {
    try {
      // Mark workout as completed
      const { error: workoutError } = await supabase
        .from('workouts')
        .update({ completed_at: new Date().toISOString() })
        .eq('id', workoutId)
        .eq('user_id', userId)

      if (workoutError) throw workoutError

      // Record progress
      const { data, error: progressError } = await supabase
        .from('progress')
        .insert({
          user_id: userId,
          workout_id: workoutId,
          date: new Date().toISOString().split('T')[0],
          duration: progressData.duration,
          calories_burned: progressData.calories_burned,
          notes: progressData.notes
        })
        .select()
        .single()

      if (progressError) throw progressError
      return { progress: data, error: null }
    } catch (error) {
      return { progress: null, error }
    }
  }

  static async getUserProgress(userId: string, limit = 10) {
    try {
      const { data, error } = await supabase
        .from('progress')
        .select(`
          *,
          workouts (
            name,
            category,
            difficulty
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return { progress: data, error: null }
    } catch (error) {
      return { progress: [], error }
    }
  }

  static getDefaultWorkouts() {
    return {
      strength: [
        {
          name: "Full Body HIIT",
          description: "High-intensity interval training targeting all major muscle groups",
          duration: 30,
          difficulty: "intermediate" as const,
          category: "strength",
          exercises: [
            {
              name: "Burpees",
              sets: 3,
              reps: 10,
              rest: 60,
              instructions: [
                "Start in standing position",
                "Drop into squat, place hands on floor",
                "Jump feet back to plank position",
                "Do a push-up",
                "Jump feet back to squat",
                "Jump up with arms overhead"
              ],
              muscle_groups: ["Full Body"],
              equipment: "None"
            },
            {
              name: "Mountain Climbers",
              sets: 3,
              duration: 45,
              rest: 60,
              instructions: [
                "Start in plank position",
                "Alternate bringing knees to chest",
                "Keep hips level",
                "Maintain steady rhythm"
              ],
              muscle_groups: ["Core", "Cardio"],
              equipment: "None"
            }
          ]
        }
      ],
      cardio: [
        {
          name: "20-Minute HIIT Circuit",
          description: "Alternate between 45 seconds work and 15 seconds rest",
          duration: 20,
          difficulty: "intermediate" as const,
          category: "cardio",
          exercises: [
            {
              name: "High Knees",
              sets: 4,
              duration: 45,
              rest: 15,
              instructions: [
                "Run in place",
                "Bring knees up to waist level",
                "Pump arms naturally",
                "Maintain quick pace"
              ],
              muscle_groups: ["Legs", "Cardio"],
              equipment: "None"
            }
          ]
        }
      ]
    }
  }
}