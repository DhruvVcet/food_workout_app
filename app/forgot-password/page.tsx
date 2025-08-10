import Link from 'next/link'

export default function ForgotPasswordPage() {
  return (
    <div className="forgot-password-page">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container-centered">
            <div className="auth-card">
              <div className="auth-header">
                <h1 className="text-3xl font-bold gradient-text mb-2">Reset Your Password</h1>
                <p className="text-gray-600 mb-8">Enter your email address and we'll send you a link to reset your password</p>
              </div>

              <form className="auth-form">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full auth-btn">
                  Send Reset Link
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
    </div>
  )
}
