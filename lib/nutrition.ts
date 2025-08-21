import { supabase } from './supabase'

export interface MealPlan {
  id: string
  user_id: string
  name: string
  description: string
  meals: DayMeals[]
  calories_per_day: number
  created_at: string
}

export interface DayMeals {
  day: string
  breakfast: Meal
  lunch: Meal
  dinner: Meal
  snacks: Meal[]
}

export interface Meal {
  name: string
  description: string
  calories: number
  protein: number
  carbs: number
  fat: number
  ingredients: string[]
  instructions: string[]
}

export class NutritionService {
  static async createMealPlan(userId: string, mealPlan: Omit<MealPlan, 'id' | 'user_id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('meal_plans')
        .insert({
          user_id: userId,
          ...mealPlan
        })
        .select()
        .single()

      if (error) throw error
      return { mealPlan: data, error: null }
    } catch (error) {
      return { mealPlan: null, error }
    }
  }

  static async getUserMealPlans(userId: string) {
    try {
      const { data, error } = await supabase
        .from('meal_plans')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error
      return { mealPlans: data, error: null }
    } catch (error) {
      return { mealPlans: [], error }
    }
  }

  static getDefaultMealPlan(): Omit<MealPlan, 'id' | 'user_id' | 'created_at'> {
    return {
      name: "Balanced Weekly Plan",
      description: "A well-balanced meal plan for general fitness goals",
      calories_per_day: 2000,
      meals: [
        {
          day: "Monday",
          breakfast: {
            name: "Oatmeal with Berries",
            description: "Steel-cut oats topped with fresh berries and nuts",
            calories: 350,
            protein: 12,
            carbs: 58,
            fat: 8,
            ingredients: [
              "1 cup steel-cut oats",
              "1/2 cup mixed berries",
              "2 tbsp chopped walnuts",
              "1 tbsp honey",
              "1 cup almond milk"
            ],
            instructions: [
              "Cook oats according to package directions",
              "Top with berries and nuts",
              "Drizzle with honey",
              "Serve with almond milk"
            ]
          },
          lunch: {
            name: "Grilled Chicken Salad",
            description: "Mixed greens with grilled chicken and quinoa",
            calories: 450,
            protein: 35,
            carbs: 30,
            fat: 18,
            ingredients: [
              "4 oz grilled chicken breast",
              "2 cups mixed greens",
              "1/2 cup cooked quinoa",
              "1/4 avocado",
              "2 tbsp olive oil vinaigrette"
            ],
            instructions: [
              "Grill chicken breast until cooked through",
              "Combine greens and quinoa in bowl",
              "Top with sliced chicken and avocado",
              "Drizzle with vinaigrette"
            ]
          },
          dinner: {
            name: "Baked Salmon with Vegetables",
            description: "Herb-crusted salmon with roasted vegetables",
            calories: 500,
            protein: 40,
            carbs: 25,
            fat: 28,
            ingredients: [
              "5 oz salmon fillet",
              "2 cups mixed vegetables",
              "1 tbsp olive oil",
              "Fresh herbs",
              "Lemon juice"
            ],
            instructions: [
              "Preheat oven to 400°F",
              "Season salmon with herbs",
              "Toss vegetables with olive oil",
              "Bake for 15-20 minutes",
              "Serve with lemon juice"
            ]
          },
          snacks: [
            {
              name: "Greek Yogurt with Honey",
              description: "Protein-rich snack",
              calories: 150,
              protein: 15,
              carbs: 18,
              fat: 3,
              ingredients: ["1 cup Greek yogurt", "1 tbsp honey"],
              instructions: ["Mix yogurt with honey"]
            }
          ]
        }
      ]
    }
  }

  static calculateMacros(weight: number, goal: string) {
    let proteinRatio = 0.25
    let carbRatio = 0.45
    let fatRatio = 0.30

    switch (goal) {
      case 'weight-loss':
        proteinRatio = 0.35
        carbRatio = 0.35
        fatRatio = 0.30
        break
      case 'muscle-gain':
        proteinRatio = 0.30
        carbRatio = 0.45
        fatRatio = 0.25
        break
      case 'bodybuilding':
        proteinRatio = 0.35
        carbRatio = 0.40
        fatRatio = 0.25
        break
    }

    const calories = weight * 15 // Basic calculation
    
    return {
      calories,
      protein: Math.round((calories * proteinRatio) / 4),
      carbs: Math.round((calories * carbRatio) / 4),
      fat: Math.round((calories * fatRatio) / 9)
    }
  }
}