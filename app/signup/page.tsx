import { useState } from 'react'
import { AuthService } from '../../lib/auth'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

'use client'

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    fitnessGoal: '',
    agreeToTerms: false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return false
    }
    
    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!validateForm()) return
    
    setIsLoading(true)

    try {
      const { user, error } = await AuthService.signUp({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        fitnessGoal: formData.fitnessGoal
      })

      if (error) {
        setError(error.message)
        return
      }

      if (user) {
        alert('Account created successfully! Please check your email to verify your account.')
        router.push('/login')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignup = (provider: 'google' | 'apple') => {
    alert(`${provider} signup will be implemented with OAuth`)
  }

  return (
    <div className="signup-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="text-3xl font-bold gradient-text mb-2">Start Your Journey</h1>
                <p className="text-gray-600 mb-8">Create your account and transform your fitness</p>
                {error && (
                  <div className="error-message mb-4">
                    {error}
                  </div>
                )}
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Create a strong password"
                    required
                  />
                  <div className="password-requirements">
                    <small>Password must be at least 8 characters with uppercase, lowercase, and numbers</small>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fitnessGoal" className="form-label">Primary Fitness Goal</label>
                  <select 
                    id="fitnessGoal" 
                    name="fitnessGoal" 
                    value={formData.fitnessGoal}
                    onChange={handleInputChange}
                    className="form-input" 
                    required
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                    <option value="endurance">Endurance</option>
                    <option value="bodybuilding">Bodybuilding</option>
                  </select>
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input 
                      type="checkbox" 
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="checkbox" 
                      required 
                    />
                    <span className="checkmark"></span>
                    I agree to the <Link href="/terms" className="terms-link">Terms of Service</Link> and <Link href="/privacy" className=\"terms-link">Privacy Policy</Link>
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn btn-primary w-full auth-btn"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <div className="social-login">
                <button 
                  type="button"
                  onClick={() => handleSocialSignup('google')}
                  className="social-btn google-btn"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Sign up with Google
                </button>
                <button 
                  type="button"
                  onClick={() => handleSocialSignup('apple')}
                  className="social-btn apple-btn"
                >
                  <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Sign up with Apple
                </button>
              </div>

              <div className="auth-footer">
                <p>
                  Already have an account?{' '}
                  <Link href="/login" className="signup-link">
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>

            <div className="auth-benefits">
              <h2 className="text-2xl font-bold mb-6">What you'll get with FitLife Pro</h2>
              
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🏠</div>
                  <div>
                    <h3 className="font-semibold">Free Plan Features</h3>
                    <p>Access to home workouts, basic nutrition tips, and community challenges</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">��</div>
                  <div>
                    <h3 className="font-semibold">Premium Upgrades</h3>
                    <p>Unlock personalized plans, expert consultations, and advanced tracking</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">👨‍👩‍👧‍👦</div>
                  <div>
                    <h3 className="font-semibold">Family-Friendly</h3>
                    <p>Special programs for kids, pregnant women, and seniors</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">📱</div>
                  <div>
                    <h3 className="font-semibold">Social Integration</h3>
                    <p>Stay motivated with our Instagram and LinkedIn fitness content</p>
                  </div>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Members</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1M+</div>
                  <div className="stat-label">Workouts Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">95%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .error-message {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
