import Link from 'next/link'

export default function Home() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">
            Transform Your Life with FitLife Pro
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your complete fitness and nutrition companion. From beginner-friendly home workouts to professional bodybuilding plans, we've got everything you need for a healthier lifestyle.
          </p>
          <div className="hero-actions">
            <Link href="/plans" className="btn btn-success text-lg">
              Start Your Journey
            </Link>
            <Link href="/exercises" className="btn btn-secondary text-lg">
              Browse Exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Why Choose FitLife Pro?</span>
          </h2>
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="feature-icon">🏠</div>
              <h3 className="text-xl font-semibold mb-4">Home Fitness</h3>
              <p>Perfect workouts and nutrition tips for busy people who prefer exercising at home with minimal equipment.</p>
            </div>
            <div className="card text-center">
              <div className="feature-icon">💪</div>
              <h3 className="text-xl font-semibold mb-4">Professional Plans</h3>
              <p>Advanced bodybuilding and specialized training programs designed by certified fitness professionals.</p>
            </div>
            <div className="card text-center">
              <div className="feature-icon">👥</div>
              <h3 className="text-xl font-semibold mb-4">For Everyone</h3>
              <p>Tailored programs for kids, pregnant women, seniors, and people with different fitness levels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <div className="grid grid-3">
            {/* Free Plan */}
            <div className="card plan-card">
              <div className="plan-header">
                <h3 className="text-2xl font-bold mb-2">Free Plan</h3>
                <p className="text-4xl font-bold gradient-text mb-4">$0<span className="text-lg font-normal">/month</span></p>
              </div>
              <ul className="plan-features">
                <li>✅ Home workout routines</li>
                <li>✅ Basic nutrition tips</li>
                <li>✅ Cooking healthy at home guide</li>
                <li>✅ Community access</li>
                <li>✅ Weekly fitness challenges</li>
              </ul>
              <Link href="/plans/free" className="btn btn-secondary w-full mt-6">
                Get Started Free
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="card plan-card featured-plan">
              <div className="plan-badge">Most Popular</div>
              <div className="plan-header">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-4xl font-bold gradient-text mb-4">$29<span className="text-lg font-normal">/month</span></p>
              </div>
              <ul className="plan-features">
                <li>✅ Everything in Free Plan</li>
                <li>✅ Personalized workout plans</li>
                <li>✅ Advanced nutrition tracking</li>
                <li>✅ Progress analytics</li>
                <li>✅ Expert consultation</li>
                <li>✅ Meal planning tools</li>
              </ul>
              <Link href="/plans/premium" className="btn btn-primary w-full mt-6">
                Start Premium
              </Link>
            </div>

            {/* Pro Bodybuilder Plan */}
            <div className="card plan-card">
              <div className="plan-header">
                <h3 className="text-2xl font-bold mb-2">Pro Builder</h3>
                <p className="text-4xl font-bold gradient-text mb-4">$79<span className="text-lg font-normal">/month</span></p>
              </div>
              <ul className="plan-features">
                <li>✅ Everything in Premium</li>
                <li>✅ Professional bodybuilding plans</li>
                <li>✅ Competition prep guidance</li>
                <li>✅ Advanced supplement protocols</li>
                <li>✅ 1-on-1 coaching sessions</li>
                <li>✅ Custom macro calculations</li>
              </ul>
              <Link href="/plans/pro" className="btn btn-success w-full mt-6">
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Specialized Programs</span>
          </h2>
          <div className="grid grid-2">
            <div className="card specialized-card">
              <h3 className="text-xl font-bold mb-4">👶 Kids Fitness</h3>
              <p className="mb-4">Fun, safe, and age-appropriate exercises that help children develop healthy habits and motor skills.</p>
              <Link href="/specialized/kids" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="card specialized-card">
              <h3 className="text-xl font-bold mb-4">🤱 Prenatal Fitness</h3>
              <p className="mb-4">Safe and effective workouts designed specifically for pregnant women at different stages.</p>
              <Link href="/specialized/prenatal" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="section-padding bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">
            Stay Connected & <span className="gradient-text">Get Inspired</span>
          </h2>
          <div className="grid grid-2">
            <div className="card text-center">
              <div className="social-icon">📸</div>
              <h3 className="text-xl font-bold mb-4">Instagram Fitness Hub</h3>
              <p className="mb-4">Weekly workout videos, transformation stories, and fitness tips delivered to your feed.</p>
              <Link href="/social/instagram" className="btn btn-primary">
                View Content
              </Link>
            </div>
            <div className="card text-center">
              <div className="social-icon">💼</div>
              <h3 className="text-xl font-bold mb-4">LinkedIn Wellness</h3>
              <p className="mb-4">Professional insights on fitness, workplace wellness, and career development in health industry.</p>
              <Link href="/social/linkedin" className="btn btn-primary">
                View Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .feature-icon, .social-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .plan-card {
          position: relative;
          text-align: center;
        }

        .featured-plan {
          border: 2px solid #667eea;
          transform: scale(1.05);
        }

        .plan-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .plan-features {
          list-style: none;
          text-align: left;
          margin: 2rem 0;
        }

        .plan-features li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .w-full {
          width: 100%;
        }

        .bg-gray-50 {
          background-color: #f8fafc;
        }

        .max-w-2xl {
          max-width: 42rem;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .featured-plan {
            transform: none;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .hero-actions .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  )
}
