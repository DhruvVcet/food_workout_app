'use client'

import { useState } from 'react'
import { Workout, WorkoutService } from '../lib/workouts'
import { useAuth } from './AuthProvider'

interface WorkoutCardProps {
  workout: Workout
  onStart?: (workout: Workout) => void
}

export default function WorkoutCard({ workout, onStart }: WorkoutCardProps) {
  const { user } = useAuth()
  const [isStarting, setIsStarting] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const handleStartWorkout = async () => {
    if (!user) {
      alert('Please sign in to start workouts')
      return
    }

    setIsStarting(true)
    try {
      const { workout: startedWorkout, error } = await WorkoutService.startWorkout(workout.id, user.id)
      
      if (error) {
        console.error('Error starting workout:', error)
        alert('Failed to start workout. Please try again.')
        return
      }

      if (onStart && startedWorkout) {
        onStart(startedWorkout)
      } else {
        // Redirect to workout session
        window.location.href = `/workout/${workout.id}`
      }
    } catch (error) {
      console.error('Error starting workout:', error)
      alert('Failed to start workout. Please try again.')
    } finally {
      setIsStarting(false)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500'
      case 'intermediate': return 'bg-yellow-500'
      case 'advanced': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="card workout-card">
      <div className="workout-header">
        <h3 className="text-xl font-bold">{workout.name}</h3>
        <div className="workout-meta">
          <span className="duration">{workout.duration} min</span>
          <span className={`difficulty ${workout.difficulty}`}>
            {workout.difficulty}
          </span>
        </div>
      </div>
      
      <p className="mb-4">{workout.description}</p>
      
      {showDetails && (
        <div className="exercise-preview">
          <h4 className="font-semibold mb-2">Exercises:</h4>
          <ul>
            {workout.exercises.slice(0, 5).map((exercise, index) => (
              <li key={index}>• {exercise.name}</li>
            ))}
            {workout.exercises.length > 5 && (
              <li>• And {workout.exercises.length - 5} more...</li>
            )}
          </ul>
        </div>
      )}
      
      <div className="workout-actions mt-4">
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="btn btn-secondary mr-2"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        
        <button
          onClick={handleStartWorkout}
          disabled={isStarting}
          className="btn btn-primary"
        >
          {isStarting ? 'Starting...' : 'Start Workout'}
        </button>
      </div>

      <style jsx>{`
        .workout-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .workout-actions button {
          flex: 1;
          min-width: 120px;
        }
        
        @media (max-width: 480px) {
          .workout-actions {
            flex-direction: column;
          }
          
          .workout-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}