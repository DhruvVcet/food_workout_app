'use client'

import { useState, useEffect } from 'react'
import { WorkoutService, Workout } from '../../lib/workouts'
import { useAuth } from '../../components/AuthProvider'
import WorkoutCard from '../../components/WorkoutCard'
import Link from 'next/link'

export default function ExercisesPage() {
  const { user } = useAuth()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    loadWorkouts()
  }, [selectedCategory, user])

  const loadWorkouts = async () => {
    setLoading(true)
    try {
      if (selectedCategory === 'all') {
        // Load default workouts for demo
        const defaultWorkouts = WorkoutService.getDefaultWorkouts()
        const allWorkouts = [
          ...defaultWorkouts.strength.map(w => ({ ...w, id: `strength-${Math.random()}`, user_id: user?.id || '', created_at: new Date().toISOString() })),
          ...defaultWorkouts.cardio.map(w => ({ ...w, id: `cardio-${Math.random()}`, user_id: user?.id || '', created_at: new Date().toISOString() }))
        ]
        setWorkouts(allWorkouts)
      } else {
        const { workouts: categoryWorkouts } = await WorkoutService.getWorkoutsByCategory(selectedCategory, user?.id)
        setWorkouts(categoryWorkouts || [])
      }
    } catch (error) {
      console.error('Error loading workouts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleStartWorkout = (workout: Workout) => {
    // Navigate to workout session
    window.location.href = `/workout/${workout.id}`
  }

  const categories = [
    { id: 'all', name: 'All Exercises', icon: '🏋️' },
    { id: 'strength', name: 'Strength Training', icon: '💪' },
    { id: 'cardio', name: 'Cardio', icon: '❤️' },
    { id: 'flexibility', name: 'Flexibility', icon: '🤸‍♀️' },
    { id: 'balance', name: 'Balance', icon: '⚖️' }
  ]

  return (
    <div className="exercises-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Exercise Library</h1>
          <p className="text-xl mb-8">Comprehensive collection of exercises for all fitness levels and goals</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter mb-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              <span className="gradient-text">Filter by Category</span>
            </h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  <span className="filter-icon">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Workouts Grid */}
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading workouts...</p>
            </div>
          ) : (
            <div className="workouts-grid mb-8">
              <h2 className="text-2xl font-bold mb-6">
                <span className="gradient-text">
                  {selectedCategory === 'all' ? 'All Workouts' : `${categories.find(c => c.id === selectedCategory)?.name} Workouts`}
                </span>
              </h2>
              
              {workouts.length > 0 ? (
                <div className="grid grid-3">
                  {workouts.map(workout => (
                    <WorkoutCard
                      key={workout.id}
                      workout={workout}
                      onStart={handleStartWorkout}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>No workouts found for this category.</p>
                  {!user && (
                    <p>
                      <Link href="/login" className="signup-link">Sign in</Link> to access personalized workouts!
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Exercise Categories */}
          <div className="exercise-categories mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Browse by Category</span>
            </h2>
            
            <div className="grid grid-4">
              <div className="card category-card">
                <div className="category-icon">💪</div>
                <h3 className="text-xl font-bold mb-4">Strength Training</h3>
                <p className="mb-4">Build muscle and increase power with resistance exercises</p>
                <div className="exercise-count">45+ exercises</div>
              </div>

              <div className="card category-card">
                <div className="category-icon">❤️</div>
                <h3 className="text-xl font-bold mb-4">Cardio</h3>
                <p className="mb-4">Improve cardiovascular health and endurance</p>
                <div className="exercise-count">30+ exercises</div>
              </div>

              <div className="card category-card">
                <div className="category-icon">🤸‍♀️</div>
                <h3 className="text-xl font-bold mb-4">Flexibility</h3>
                <p className="mb-4">Enhance mobility and reduce injury risk</p>
                <div className="exercise-count">25+ exercises</div>
              </div>

              <div className="card category-card">
                <div className="category-icon">⚖️</div>
                <h3 className="text-xl font-bold mb-4">Balance</h3>
                <p className="mb-4">Improve stability and core strength</p>
                <div className="exercise-count">20+ exercises</div>
              </div>
            </div>
          </div>

          {/* Featured Workouts */}
          <div className="featured-workouts mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Featured Workouts</span>
            </h2>
            
            <div className="grid grid-3">
              <div className="card workout-card">
                <div className="workout-header">
                  <h3 className="text-xl font-bold">Full Body HIIT</h3>
                  <div className="workout-meta">
                    <span className="duration">30 min</span>
                    <span className="difficulty intermediate">Intermediate</span>
                  </div>
                </div>
                <p className="mb-4">High-intensity interval training targeting all major muscle groups</p>
                <div className="exercise-preview">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul>
                    <li>• Burpees</li>
                    <li>• Mountain climbers</li>
                    <li>• Jump squats</li>
                    <li>• Push-ups</li>
                    <li>• Plank variations</li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    if (!user) {
                      window.location.href = '/login'
                      return
                    }
                    // Create and start HIIT workout
                    const hiitWorkout: Workout = {
                      id: 'hiit-' + Date.now(),
                      user_id: user.id,
                      name: 'Full Body HIIT',
                      description: 'High-intensity interval training targeting all major muscle groups',
                      duration: 30,
                      difficulty: 'intermediate',
                      category: 'cardio',
                      exercises: [
                        {
                          name: 'Burpees',
                          sets: 3,
                          reps: 10,
                          rest: 60,
                          instructions: ['Start in standing position', 'Drop into squat, place hands on floor', 'Jump feet back to plank position', 'Do a push-up', 'Jump feet back to squat', 'Jump up with arms overhead'],
                          muscle_groups: ['Full Body'],
                          equipment: 'None'
                        }
                      ],
                      created_at: new Date().toISOString()
                    }
                    handleStartWorkout(hiitWorkout)
                  }}
                  className="btn btn-primary w-full mt-4"
                >
                  Start Workout
                </button>
              </div>

              <div className="card workout-card">
                <div className="workout-header">
                  <h3 className="text-xl font-bold">Upper Body Strength</h3>
                  <div className="workout-meta">
                    <span className="duration">45 min</span>
                    <span className="difficulty advanced">Advanced</span>
                  </div>
                </div>
                <p className="mb-4">Build upper body muscle and strength with progressive overload</p>
                <div className="exercise-preview">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul>
                    <li>• Pull-ups</li>
                    <li>• Bench press</li>
                    <li>• Shoulder press</li>
                    <li>• Rows</li>
                    <li>• Tricep dips</li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    if (!user) {
                      window.location.href = '/login'
                      return
                    }
                    alert('Upper Body Strength workout will be available in the full version!')
                  }}
                  className="btn btn-primary w-full mt-4"
                >
                  Start Workout
                </button>
              </div>

              <div className="card workout-card">
                <div className="workout-header">
                  <h3 className="text-xl font-bold">Beginner Flexibility</h3>
                  <div className="workout-meta">
                    <span className="duration">20 min</span>
                    <span className="difficulty beginner">Beginner</span>
                  </div>
                </div>
                <p className="mb-4">Gentle stretching routine perfect for beginners and recovery days</p>
                <div className="exercise-preview">
                  <h4 className="font-semibold mb-2">Includes:</h4>
                  <ul>
                    <li>• Cat-cow stretch</li>
                    <li>• Hamstring stretch</li>
                    <li>• Hip flexor stretch</li>
                    <li>• Shoulder rolls</li>
                    <li>• Spinal twist</li>
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    if (!user) {
                      window.location.href = '/login'
                      return
                    }
                    alert('Beginner Flexibility workout will be available in the full version!')
                  }}
                  className="btn btn-primary w-full mt-4"
                >
                  Start Workout
                </button>
              </div>
            </div>
          </div>

          {/* Strength Training Exercises */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">💪 Strength Training Exercises</h2>
            
            <div className="muscle-groups">
              <div className="muscle-group">
                <h3 className="text-xl font-semibold mb-4">Upper Body</h3>
                <div className="exercises-grid">
                  <div className="exercise-item">
                    <h4 className="font-semibold">Push-ups</h4>
                    <p className="exercise-description">Classic bodyweight exercise for chest, shoulders, and triceps</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Chest, Shoulders, Triceps</span>
                      <span className="equipment">Equipment: None</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Start in plank position</li>
                        <li>2. Lower body until chest nearly touches floor</li>
                        <li>3. Push back up to starting position</li>
                        <li>4. Keep core engaged throughout</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Pull-ups</h4>
                    <p className="exercise-description">Excellent upper body pulling exercise</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Back, Biceps</span>
                      <span className="equipment">Equipment: Pull-up bar</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Hang from bar with overhand grip</li>
                        <li>2. Pull body up until chin clears bar</li>
                        <li>3. Lower with control</li>
                        <li>4. Avoid swinging</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Dumbbell Rows</h4>
                    <p className="exercise-description">Strengthen back and improve posture</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Back, Biceps</span>
                      <span className="equipment">Equipment: Dumbbells</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Hinge at hips, hold dumbbells</li>
                        <li>2. Pull weights to ribs</li>
                        <li>3. Squeeze shoulder blades</li>
                        <li>4. Lower with control</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="muscle-group">
                <h3 className="text-xl font-semibold mb-4">Lower Body</h3>
                <div className="exercises-grid">
                  <div className="exercise-item">
                    <h4 className="font-semibold">Squats</h4>
                    <p className="exercise-description">Fundamental lower body movement pattern</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Quads, Glutes, Hamstrings</span>
                      <span className="equipment">Equipment: None</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Stand with feet shoulder-width apart</li>
                        <li>2. Lower as if sitting in chair</li>
                        <li>3. Keep knees behind toes</li>
                        <li>4. Drive through heels to stand</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Lunges</h4>
                    <p className="exercise-description">Unilateral leg strength and balance</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Quads, Glutes</span>
                      <span className="equipment">Equipment: None</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Step forward into lunge position</li>
                        <li>2. Lower back knee toward ground</li>
                        <li>3. Push off front foot to return</li>
                        <li>4. Alternate legs</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Deadlifts</h4>
                    <p className="exercise-description">Hip hinge pattern for posterior chain</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Hamstrings, Glutes, Back</span>
                      <span className="equipment">Equipment: Barbell/Dumbbells</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Stand with weight in front of legs</li>
                        <li>2. Hinge at hips, keep back straight</li>
                        <li>3. Lower weight toward ground</li>
                        <li>4. Drive hips forward to stand</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="muscle-group">
                <h3 className="text-xl font-semibold mb-4">Core</h3>
                <div className="exercises-grid">
                  <div className="exercise-item">
                    <h4 className="font-semibold">Plank</h4>
                    <p className="exercise-description">Isometric core strengthening exercise</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Core, Shoulders</span>
                      <span className="equipment">Equipment: None</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Start in push-up position</li>
                        <li>2. Hold body in straight line</li>
                        <li>3. Engage core muscles</li>
                        <li>4. Breathe normally</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Russian Twists</h4>
                    <p className="exercise-description">Rotational core strength exercise</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Obliques, Core</span>
                      <span className="equipment">Equipment: None/Weight</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Sit with knees bent, lean back</li>
                        <li>2. Lift feet off ground</li>
                        <li>3. Rotate torso side to side</li>
                        <li>4. Keep chest up</li>
                      </ol>
                    </div>
                  </div>

                  <div className="exercise-item">
                    <h4 className="font-semibold">Mountain Climbers</h4>
                    <p className="exercise-description">Dynamic core and cardio exercise</p>
                    <div className="exercise-details">
                      <span className="muscle-target">Target: Core, Cardio</span>
                      <span className="equipment">Equipment: None</span>
                    </div>
                    <div className="exercise-instructions">
                      <h5 className="font-semibold">Instructions:</h5>
                      <ol>
                        <li>1. Start in plank position</li>
                        <li>2. Alternate bringing knees to chest</li>
                        <li>3. Keep hips level</li>
                        <li>4. Maintain steady rhythm</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cardio Exercises */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">❤️ Cardiovascular Exercises</h2>
            
            <div className="cardio-categories">
              <div className="cardio-category">
                <h3 className="text-xl font-semibold mb-4">High-Intensity Interval Training (HIIT)</h3>
                <div className="hiit-workout">
                  <h4 className="font-semibold mb-2">20-Minute HIIT Circuit</h4>
                  <p className="mb-4">Alternate between 45 seconds work and 15 seconds rest</p>
                  <div className="hiit-exercises">
                    <div className="hiit-round">
                      <h5 className="font-semibold">Round 1 (Repeat 4 times):</h5>
                      <ul>
                        <li>• Burpees</li>
                        <li>• High knees</li>
                        <li>• Jump squats</li>
                        <li>• Push-ups</li>
                      </ul>
                    </div>
                    <div className="hiit-round">
                      <h5 className="font-semibold">Round 2 (Repeat 4 times):</h5>
                      <ul>
                        <li>• Mountain climbers</li>
                        <li>• Jumping jacks</li>
                        <li>• Plank up-downs</li>
                        <li>• Squat jumps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardio-category">
                <h3 className="text-xl font-semibold mb-4">Low-Impact Cardio</h3>
                <div className="low-impact-options">
                  <div className="cardio-option">
                    <h4 className="font-semibold">Walking Program</h4>
                    <ul>
                      <li>• Week 1-2: 15 minutes daily</li>
                      <li>• Week 3-4: 20 minutes daily</li>
                      <li>• Week 5-6: 25 minutes daily</li>
                      <li>• Week 7+: 30+ minutes daily</li>
                    </ul>
                  </div>
                  <div className="cardio-option">
                    <h4 className="font-semibold">Swimming Routine</h4>
                    <ul>
                      <li>• Warm-up: 5 minutes easy pace</li>
                      <li>• Main set: 20 minutes intervals</li>
                      <li>• Cool-down: 5 minutes easy pace</li>
                      <li>• Focus on different strokes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Flexibility and Mobility */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🤸‍♀️ Flexibility & Mobility</h2>
            
            <div className="flexibility-sections">
              <div className="flexibility-section">
                <h3 className="text-xl font-semibold mb-4">Daily Stretching Routine (15 minutes)</h3>
                <div className="stretch-sequence">
                  <div className="stretch-item">
                    <h4 className="font-semibold">Neck and Shoulders (3 minutes)</h4>
                    <ul>
                      <li>• Neck rolls - 30 seconds each direction</li>
                      <li>• Shoulder shrugs - 1 minute</li>
                      <li>• Cross-body shoulder stretch - 30 seconds each arm</li>
                    </ul>
                  </div>

                  <div className="stretch-item">
                    <h4 className="font-semibold">Upper Body (4 minutes)</h4>
                    <ul>
                      <li>• Chest doorway stretch - 1 minute</li>
                      <li>• Tricep stretch - 30 seconds each arm</li>
                      <li>• Cat-cow stretch - 1 minute</li>
                      <li>• Spinal twist - 30 seconds each side</li>
                    </ul>
                  </div>

                  <div className="stretch-item">
                    <h4 className="font-semibold">Lower Body (8 minutes)</h4>
                    <ul>
                      <li>• Forward fold - 1 minute</li>
                      <li>• Hip flexor lunge - 1 minute each leg</li>
                      <li>• Seated hamstring stretch - 1 minute each leg</li>
                      <li>• Figure-4 hip stretch - 1 minute each leg</li>
                      <li>• Calf stretch - 30 seconds each leg</li>
                      <li>• Child's pose - 1 minute</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flexibility-section">
                <h3 className="text-xl font-semibold mb-4">Mobility Exercises</h3>
                <div className="mobility-exercises">
                  <div className="mobility-exercise">
                    <h4 className="font-semibold">Hip Circles</h4>
                    <p>Improve hip mobility and reduce stiffness</p>
                    <ul>
                      <li>• Stand with hands on hips</li>
                      <li>• Make large circles with hips</li>
                      <li>• 10 circles each direction</li>
                    </ul>
                  </div>

                  <div className="mobility-exercise">
                    <h4 className="font-semibold">Arm Swings</h4>
                    <p>Warm up shoulders and improve range of motion</p>
                    <ul>
                      <li>• Stand with arms at sides</li>
                      <li>• Swing arms in large circles</li>
                      <li>• 10 forward, 10 backward</li>
                    </ul>
                  </div>

                  <div className="mobility-exercise">
                    <h4 className="font-semibold">Leg Swings</h4>
                    <p>Dynamic hip flexibility exercise</p>
                    <ul>
                      <li>• Hold wall for support</li>
                      <li>• Swing leg forward and back</li>
                      <li>• 10 swings each leg, each direction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .category-filter {
          text-align: center;
        }
        
        .filter-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          background: white;
          color: #64748b;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-btn:hover {
          border-color: #667eea;
          color: #667eea;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: #667eea;
          color: white;
        }
        
        .filter-icon {
          font-size: 1.25rem;
        }
        
        .workouts-grid {
          margin-bottom: 3rem;
        }
        
        .loading-state {
          text-align: center;
          padding: 3rem 0;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f4f6;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 1rem;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .empty-state {
          text-align: center;
          padding: 3rem 0;
          color: #64748b;
        }
        
        @media (max-width: 768px) {
          .filter-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .filter-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}
