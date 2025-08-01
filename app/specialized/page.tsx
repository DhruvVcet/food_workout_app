import Link from 'next/link'

export default function SpecializedPage() {
  return (
    <div className="specialized-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Specialized Fitness Programs</h1>
          <p className="text-xl mb-8">Tailored fitness solutions for unique needs and life stages</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            <div className="card specialized-card">
              <div className="card-header">
                <div className="icon">👶</div>
                <h2 className="text-2xl font-bold gradient-text">Kids Fitness</h2>
              </div>
              <p className="text-lg mb-6">Fun, safe, and developmentally appropriate exercises that help children build healthy habits, motor skills, and confidence.</p>
              <div className="features">
                <h3 className="font-semibold mb-3">What's Included:</h3>
                <ul>
                  <li>• Age-appropriate exercise routines</li>
                  <li>• Fun movement games and activities</li>
                  <li>• Motor skill development programs</li>
                  <li>• Family-friendly workout sessions</li>
                  <li>• Nutrition education for kids</li>
                </ul>
              </div>
              <Link href="/specialized/kids" className="btn btn-primary mt-6">
                Explore Kids Programs
              </Link>
            </div>

            <div className="card specialized-card">
              <div className="card-header">
                <div className="icon">🤱</div>
                <h2 className="text-2xl font-bold gradient-text">Prenatal Fitness</h2>
              </div>
              <p className="text-lg mb-6">Safe and effective workouts specifically designed for pregnant women at different stages of pregnancy.</p>
              <div className="features">
                <h3 className="font-semibold mb-3">What's Included:</h3>
                <ul>
                  <li>• Trimester-specific exercise programs</li>
                  <li>• Safe strength training routines</li>
                  <li>• Prenatal yoga and stretching</li>
                  <li>• Breathing and relaxation techniques</li>
                  <li>• Postpartum recovery plans</li>
                </ul>
              </div>
              <Link href="/specialized/prenatal" className="btn btn-primary mt-6">
                Explore Prenatal Programs
              </Link>
            </div>
          </div>

          {/* Additional Specialized Programs */}
          <div className="additional-programs mt-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">More Specialized Programs</span>
            </h2>
            
            <div className="grid grid-3">
              <div className="card program-preview">
                <h3 className="text-xl font-bold mb-4">🦴 Senior Fitness</h3>
                <p>Low-impact exercises focusing on balance, flexibility, and strength maintenance for older adults.</p>
                <div className="coming-soon">Coming Soon</div>
              </div>

              <div className="card program-preview">
                <h3 className="text-xl font-bold mb-4">♿ Adaptive Fitness</h3>
                <p>Modified exercises and adaptive equipment solutions for people with disabilities or mobility limitations.</p>
                <div className="coming-soon">Coming Soon</div>
              </div>

              <div className="card program-preview">
                <h3 className="text-xl font-bold mb-4">🏥 Rehabilitation</h3>
                <p>Post-injury and post-surgery exercise programs designed to aid recovery and prevent re-injury.</p>
                <div className="coming-soon">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .specialized-card {
          position: relative;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .icon {
          font-size: 3rem;
        }

        .features ul {
          list-style: none;
        }

        .features li {
          padding: 0.5rem 0;
          color: #64748b;
          border-bottom: 1px solid #f1f5f9;
        }

        .program-preview {
          text-align: center;
          position: relative;
        }

        .coming-soon {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .additional-programs {
          padding: 3rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          border-radius: 16px;
        }
      `}</style>
    </div>
  )
}
