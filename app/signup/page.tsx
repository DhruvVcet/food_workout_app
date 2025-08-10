import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="signup-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="text-3xl font-bold gradient-text mb-2">Start Your Journey</h1>
                <p className="text-gray-600 mb-8">Create your account and transform your fitness</p>
              </div>

              <form className="auth-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
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
                    className="form-input"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fitnessGoal" className="form-label">Primary Fitness Goal</label>
                  <select id="fitnessGoal" name="fitnessGoal" className="form-input" required>
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
                    <input type="checkbox" className="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the <Link href="/terms" className="terms-link">Terms of Service</Link> and <Link href="/privacy" className="terms-link">Privacy Policy</Link>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-full auth-btn">
                  Create Account
                </button>
              </form>

              <div className="auth-divider">
                <span>or</span>
              </div>

              <div className="social-login">
                <button className="social-btn google-btn">
                  <span className="social-icon">📧</span>
                  Sign up with Google
                </button>
                <button className="social-btn apple-btn">
                  <span className="social-icon">🍎</span>
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
    </div>
  )
}
