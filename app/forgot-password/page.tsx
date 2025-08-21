import { useState } from 'react'
import { AuthService } from '../../lib/auth'
import Link from 'next/link'

'use client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setMessage('')

    try {
      const { error } = await AuthService.resetPassword(email)
      
      if (error) {
        setError(error.message)
        return
      }

      setMessage('Password reset email sent! Please check your inbox.')
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="forgot-password-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container-centered">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="text-3xl font-bold gradient-text mb-2">Reset Your Password</h1>
                <p className="text-gray-600 mb-8">Enter your email address and we'll send you a link to reset your password</p>
                
                {error && (
                  <div className="error-message mb-4">
                    {error}
                  </div>
                )}
                
                {message && (
                  <div className="success-message mb-4">
                    {message}
                  </div>
                )}
              </div>

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn btn-primary w-full auth-btn"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  Remember your password?{' '}
                  <Link href="/login" className="signup-link">
                    Back to sign in
                  </Link>
                </p>
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
        
        .success-message {
          background: #d1fae5;
          border: 1px solid #a7f3d0;
          color: #065f46;
          padding: 0.75rem;
          border-radius: 6px;
          font-size: 0.875rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
