'use client'

import { useState } from 'react'
import { Plan, PlanService } from '../lib/plans'
import { useAuth } from './AuthProvider'

interface PlanCardProps {
  plan: Plan
  currentPlan?: string
  onUpgrade?: (planId: string) => void
}

export default function PlanCard({ plan, currentPlan, onUpgrade }: PlanCardProps) {
  const { user } = useAuth()
  const [isUpgrading, setIsUpgrading] = useState(false)
  const isCurrentPlan = currentPlan === plan.id
  const isFree = plan.id === 'free'

  const handleUpgrade = async () => {
    if (!user) {
      window.location.href = '/login'
      return
    }

    if (isFree) {
      window.location.href = '/plans/free'
      return
    }

    setIsUpgrading(true)
    try {
      const { user: updatedUser, error } = await PlanService.upgradePlan(
        user.id, 
        plan.id as 'premium' | 'pro'
      )
      
      if (error) {
        console.error('Error upgrading plan:', error)
        alert('Failed to upgrade plan. Please try again.')
        return
      }

      if (onUpgrade) {
        onUpgrade(plan.id)
      } else {
        alert(`Successfully upgraded to ${plan.name}!`)
        window.location.reload()
      }
    } catch (error) {
      console.error('Error upgrading plan:', error)
      alert('Failed to upgrade plan. Please try again.')
    } finally {
      setIsUpgrading(false)
    }
  }

  const getButtonText = () => {
    if (isCurrentPlan) return 'Current Plan'
    if (isUpgrading) return 'Upgrading...'
    if (isFree) return 'Get Started Free'
    return `Start ${plan.name}`
  }

  const getButtonClass = () => {
    if (isCurrentPlan) return 'btn btn-secondary'
    if (plan.popular) return 'btn btn-primary'
    if (isFree) return 'btn btn-secondary'
    return 'btn btn-success'
  }

  return (
    <div className={`card plan-card ${plan.popular ? 'featured-plan' : ''}`}>
      {plan.popular && <div className="plan-badge">Most Popular</div>}
      
      <div className="plan-header">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-4xl font-bold gradient-text mb-4">
          ${plan.price}
          <span className="text-lg font-normal">/month</span>
        </p>
        <p className="mb-4">{plan.description}</p>
      </div>

      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>

      <button
        onClick={handleUpgrade}
        disabled={isCurrentPlan || isUpgrading}
        className={`${getButtonClass()} w-full mt-6`}
      >
        {getButtonText()}
      </button>

      {isCurrentPlan && (
        <p className="text-center text-sm text-gray-600 mt-2">
          You're currently on this plan
        </p>
      )}
    </div>
  )
}