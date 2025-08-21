'use client'

import { useState, useEffect } from 'react'
import { PlanService, Plan } from '../../lib/plans'
import { useAuth } from '../../components/AuthProvider'
import PlanCard from '../../components/PlanCard'
import Link from 'next/link'

export default function PlansPage() {
  const { user } = useAuth()
  const [plans, setPlans] = useState<Plan[]>([])
  const [currentPlan, setCurrentPlan] = useState<string>('free')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPlans()
    if (user) {
      loadUserPlan()
    }
  }, [user])

  const loadPlans = () => {
    const availablePlans = PlanService.getPlans()
    setPlans(availablePlans)
    setLoading(false)
  }

  const loadUserPlan = async () => {
    if (!user) return
    
    try {
      const { subscription } = await PlanService.getUserSubscription(user.id)
      if (subscription) {
        setCurrentPlan(subscription.plan_type)
      }
    } catch (error) {
      console.error('Error loading user plan:', error)
    }
  }

  const handlePlanUpgrade = (planId: string) => {
    setCurrentPlan(planId)
    alert(`Successfully upgraded to ${planId} plan!`)
  }

  return (
    <div className="plans-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Choose Your Fitness Plan</h1>
          <p className="text-xl mb-8">Select the perfect plan that matches your fitness goals and lifestyle</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading plans...</p>
            </div>
          ) : (
            <>
              {user && (
                <div className="current-plan-info mb-8">
                  <div className="card text-center">
                    <h3 className="text-xl font-semibold mb-2">Your Current Plan</h3>
                    <p className="text-2xl font-bold gradient-text capitalize">{currentPlan} Plan</p>
                    <p className="text-gray-600 mt-2">
                      {currentPlan === 'free' 
                        ? 'Upgrade to unlock more features!' 
                        : 'Thank you for being a premium member!'}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="grid grid-3">
                {plans.map(plan => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    currentPlan={currentPlan}
                    onUpgrade={handlePlanUpgrade}
                  />
                ))}
              </div>
              
              <div className="plan-comparison mt-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                  <span className="gradient-text">Compare Plans</span>
                </h2>
                
                <div className="comparison-table">
                  <div className="comparison-header">
                    <div className="feature-column">Features</div>
                    <div className="plan-column">Free</div>
                    <div className="plan-column">Premium</div>
                    <div className="plan-column">Pro Builder</div>
                  </div>
                  
                  <div className="comparison-row">
                    <div className="feature-name">Home Workouts</div>
                    <div className="feature-value">✅</div>
                    <div className="feature-value">✅</div>
                    <div className="feature-value">✅</div>
                  </div>
                  
                  <div className="comparison-row">
                    <div className="feature-name">Personalized Plans</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">✅</div>
                    <div className="feature-value">✅</div>
                  </div>
                  
                  <div className="comparison-row">
                    <div className="feature-name">Expert Consultation</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">✅</div>
                    <div className="feature-value">✅</div>
                  </div>
                  
                  <div className="comparison-row">
                    <div className="feature-name">1-on-1 Coaching</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">✅</div>
                  </div>
                  
                  <div className="comparison-row">
                    <div className="feature-name">Competition Prep</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">❌</div>
                    <div className="feature-value">✅</div>
                  </div>
                </div>
              </div>
            </>
          )}
          </div>
        </div>
      </section>

      <style jsx>{`
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
        
        .current-plan-info .card {
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          border: 2px solid #667eea20;
        }
        
        .comparison-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .comparison-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-weight: 600;
        }
        
        .comparison-header > div {
          padding: 1rem;
          text-align: center;
        }
        
        .feature-column {
          text-align: left !important;
        }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .comparison-row:last-child {
          border-bottom: none;
        }
        
        .comparison-row > div {
          padding: 1rem;
          text-align: center;
        }
        
        .feature-name {
          text-align: left !important;
          font-weight: 500;
        }
        
        .feature-value {
          font-size: 1.25rem;
        }
        
        @media (max-width: 768px) {
          .comparison-table {
            font-size: 0.875rem;
          }
          
          .comparison-header,
          .comparison-row {
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
          }
          
          .comparison-header > div,
          .comparison-row > div {
            padding: 0.75rem 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
