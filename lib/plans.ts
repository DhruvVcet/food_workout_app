import { supabase } from './supabase'

export interface Plan {
  id: string
  name: string
  price: number
  features: string[]
  description: string
  popular?: boolean
}

export interface UserSubscription {
  id: string
  user_id: string
  plan_type: 'free' | 'premium' | 'pro'
  status: 'active' | 'cancelled' | 'expired'
  started_at: string
  expires_at?: string
  created_at: string
}

export class PlanService {
  static getPlans(): Plan[] {
    return [
      {
        id: 'free',
        name: 'Free Plan',
        price: 0,
        description: 'Perfect for beginners and home fitness enthusiasts',
        features: [
          'Home workout routines',
          'Basic nutrition tips',
          'Cooking healthy at home guide',
          'Community access',
          'Weekly fitness challenges'
        ]
      },
      {
        id: 'premium',
        name: 'Premium Plan',
        price: 29,
        description: 'Comprehensive fitness and nutrition guidance',
        popular: true,
        features: [
          'Everything in Free Plan',
          'Personalized workout plans',
          'Advanced nutrition tracking',
          'Progress analytics',
          'Expert consultation',
          'Meal planning tools'
        ]
      },
      {
        id: 'pro',
        name: 'Pro Builder',
        price: 79,
        description: 'Advanced bodybuilding and competition prep',
        features: [
          'Everything in Premium',
          'Professional bodybuilding plans',
          'Competition prep guidance',
          'Advanced supplement protocols',
          '1-on-1 coaching sessions',
          'Custom macro calculations'
        ]
      }
    ]
  }

  static async getUserSubscription(userId: string) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('plan_type')
        .eq('id', userId)
        .single()

      if (error) throw error
      return { subscription: data, error: null }
    } catch (error) {
      return { subscription: null, error }
    }
  }

  static async upgradePlan(userId: string, planType: 'premium' | 'pro') {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ 
          plan_type: planType,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return { user: data, error: null }
    } catch (error) {
      return { user: null, error }
    }
  }

  static async cancelPlan(userId: string) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update({ 
          plan_type: 'free',
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error
      return { user: data, error: null }
    } catch (error) {
      return { user: null, error }
    }
  }
}