'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '../../components/AuthProvider'
import { WorkoutService, WorkoutProgress } from '../../lib/workouts'
import { PlanService } from '../../lib/plans'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [progress, setProgress] = useState<WorkoutProgress[]>([])
  const [userPlan, setUserPlan] = useState<string>('free')
  const [stats, setStats] = useState({
    totalWorkouts: 0,
    totalMinutes: 0,
    totalCalories: 0,
    currentStreak: 0
  })
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    if (user) {
      loadDashboardData()
    }
  }, [user])

  const loadDashboardData = async () => {
    if (!user) return

    setLoadingData(true)
    try {
      // Load user progress
      const { progress: userProgress } = await WorkoutService.getUserProgress(user.id, 10)
      setProgress(userProgress || [])

      // Load user plan
      const { subscription } = await PlanService.getUserSubscription(user.id)
      if (subscription) {
        setUserPlan(subscription.plan_type)
      }

      // Calculate stats
      if (userProgress && userProgress.length > 0) {
        const totalWorkouts = userProgress.length
        const totalMinutes = userProgress.reduce((sum, p) => sum + p.duration, 0)
        const totalCalories = userProgress.reduce((sum, p) => sum + p.calories_burned, 0)
        
        setStats({
          totalWorkouts,
          totalMinutes,
          totalCalories,
          currentStreak: calculateStreak(userProgress)
        })
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoadingData(false)
    }
  }

  const calculateStreak = (progressData: WorkoutProgress[]) => {
    if (!progressData.length) return 0
    
    const sortedDates = progressData
      .map(p => new Date(p.date))
      .sort((a, b) => b.getTime() - a.getTime())
    
    let streak = 0
    let currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)
    
    for (const workoutDate of sortedDates) {
      workoutDate.setHours(0, 0, 0, 0)
      const diffDays = Math.floor((currentDate.getTime() - workoutDate.getTime()) / (1000 * 60 * 60 * 24))
      
      if (diffDays === streak) {
        streak++
      } else if (diffDays === streak + 1) {
        streak++
      } else {
        break
      }
    }
    
    return streak
  }

  if (loading || loadingData) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading your dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="dashboard-page">
        <div className="container">
          <div className="auth-required">
            <h1 className="text-3xl font-bold mb-4">Please Sign In</h1>
            <p className="mb-6">You need to be signed in to view your dashboard.</p>
            <Link href="/login" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard-page">
      <section className="dashboard-header">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">
            Welcome back, {user.user_metadata?.first_name || user.email?.split('@')[0]}!
          </h1>
          <p className="text-xl mb-6">Here's your fitness journey overview</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Stats Cards */}
          <div className="stats-grid mb-8">
            <div className="stat-card">
              <div className="stat-icon">🏋️</div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.totalWorkouts}</h3>
                <p className="stat-label">Total Workouts</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.totalMinutes}</h3>
                <p className="stat-label">Minutes Exercised</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🔥</div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.totalCalories}</h3>
                <p className="stat-label">Calories Burned</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.currentStreak}</h3>
                <p className="stat-label">Day Streak</p>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            {/* Current Plan */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Your Plan</h2>
              <div className="plan-info">
                <h3 className="text-xl font-semibold capitalize">{userPlan} Plan</h3>
                <p className="text-gray-600 mb-4">
                  {userPlan === 'free' 
                    ? 'Upgrade to unlock more features and personalized workouts!'
                    : 'Thank you for being a premium member!'}
                </p>
                {userPlan === 'free' && (
                  <Link href="/plans" className="btn btn-primary">
                    Upgrade Plan
                  </Link>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Quick Actions</h2>
              <div className="quick-actions">
                <Link href="/exercises" className="action-btn">
                  <span className="action-icon">💪</span>
                  <span>Start Workout</span>
                </Link>
                <Link href="/plans/free" className="action-btn">
                  <span className="action-icon">🍎</span>
                  <span>View Meal Plans</span>
                </Link>
                <Link href="/specialized" className="action-btn">
                  <span className="action-icon">🎯</span>
                  <span>Specialized Programs</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Recent Activity</h2>
            
            {progress.length > 0 ? (
              <div className="activity-list">
                {progress.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-info">
                      <h4 className="font-semibold">
                        {(activity as any).workouts?.name || 'Workout'}
                      </h4>
                      <p className="text-gray-600">
                        {new Date(activity.date).toLocaleDateString()} • {activity.duration} minutes • {activity.calories_burned} calories
                      </p>
                      {activity.notes && (
                        <p className="text-sm text-gray-500 mt-1">{activity.notes}</p>
                      )}
                    </div>
                    <div className="activity-badge">
                      <span className={`difficulty ${(activity as any).workouts?.difficulty || 'beginner'}`}>
                        {(activity as any).workouts?.difficulty || 'Completed'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-activity">
                <p className="text-gray-600 mb-4">No workouts completed yet. Start your fitness journey today!</p>
                <Link href="/exercises" className="btn btn-primary">
                  Browse Workouts
                </Link>
              </div>
            )}
          </div>

          {/* Goals Section */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">This Week's Goals</h2>
            
            <div className="goals-grid">
              <div className="goal-item">
                <div className="goal-header">
                  <h4 className="font-semibold">Workout Frequency</h4>
                  <span className="goal-progress">2/3</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '66%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Complete 3 workouts this week</p>
              </div>

              <div className="goal-item">
                <div className="goal-header">
                  <h4 className="font-semibold">Active Minutes</h4>
                  <span className="goal-progress">45/150</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '30%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Exercise for 150 minutes this week</p>
              </div>

              <div className="goal-item">
                <div className="goal-header">
                  <h4 className="font-semibold">Calories Burned</h4>
                  <span className="goal-progress">320/1000</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '32%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Burn 1000 calories this week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .dashboard-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 60px 0;
        }

        .loading-state, .auth-required {
          text-align: center;
          padding: 4rem 0;
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 2.5rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
          border-radius: 12px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #64748b;
          font-size: 0.875rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .plan-info {
          text-align: center;
        }

        .quick-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: #e2e8f0;
          transform: translateY(-1px);
        }

        .action-icon {
          font-size: 1.5rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .activity-badge .difficulty {
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          color: white;
        }

        .activity-badge .difficulty.beginner {
          background: #22c55e;
        }

        .activity-badge .difficulty.intermediate {
          background: #f59e0b;
        }

        .activity-badge .difficulty.advanced {
          background: #ef4444;
        }

        .empty-activity {
          text-align: center;
          padding: 2rem 0;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .goal-item {
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .goal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .goal-progress {
          font-weight: 600;
          color: #667eea;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat-card {
            flex-direction: column;
            text-align: center;
          }

          .activity-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .goals-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}