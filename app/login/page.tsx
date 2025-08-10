import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="login-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
                <p className="text-gray-600 mb-8">Sign in to continue your fitness journey</p>
              </div>

              <form className="auth-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
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
                    className="form-input"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" className="checkbox" />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <Link href="/forgot-password" className="forgot-link">
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary w-full auth-btn">
                  Sign In
                </button>
              </form>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <div className="social-login">
                <button className="social-btn google-btn">
                  <span className="social-icon">📧</span>
                  Continue with Google
                </button>
                <button className="social-btn apple-btn">
                  <span className="social-icon">🍎</span>
                  Continue with Apple
                </button>
              </div>

              <div className="auth-footer">
                <p>
                  Don't have an account?{' '}
                  <Link href="/signup" className="signup-link">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>

            <div className="auth-benefits">
              <h2 className="text-2xl font-bold mb-6">Join thousands achieving their fitness goals</h2>
              
              <div className="benefit-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div>
                    <h3 className="font-semibold">Personalized Plans</h3>
                    <p>Custom workouts and nutrition plans tailored to your goals</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <div>
                    <h3 className="font-semibold">Track Progress</h3>
                    <p>Monitor your fitness journey with detailed analytics</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">👥</div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p>Get guidance from certified trainers and nutritionists</p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🏆</div>
                  <div>
                    <h3 className="font-semibold">Community</h3>
                    <p>Connect with like-minded fitness enthusiasts</p>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <blockquote>
                  "FitLife Pro transformed my approach to fitness. The personalized plans and expert guidance made all the difference."
                </blockquote>
                <cite>- Sarah M., Premium Member</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
