import Link from 'next/link'

export default function SocialPage() {
  return (
    <div className="social-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Social Media Hub</h1>
          <p className="text-xl mb-8">Stay connected and inspired with our weekly fitness content across platforms</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            {/* Instagram Hub */}
            <div className="card social-platform">
              <div className="platform-header">
                <div className="platform-icon instagram">📸</div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">Instagram Fitness</h2>
                  <p className="text-lg">@FitLifePro_Official</p>
                </div>
              </div>
              
              <p className="mb-6">Daily motivation, workout videos, transformation stories, and fitness tips to keep you inspired and moving.</p>
              
              <div className="content-schedule">
                <h3 className="text-lg font-semibold mb-4">Weekly Content Schedule</h3>
                <div className="schedule-list">
                  <div className="schedule-item">
                    <strong>Monday:</strong> Motivation Monday - Inspirational quotes and success stories
                  </div>
                  <div className="schedule-item">
                    <strong>Tuesday:</strong> Technique Tuesday - Exercise form and tips
                  </div>
                  <div className="schedule-item">
                    <strong>Wednesday:</strong> Workout Wednesday - Full workout videos
                  </div>
                  <div className="schedule-item">
                    <strong>Thursday:</strong> Transformation Thursday - Before/after stories
                  </div>
                  <div className="schedule-item">
                    <strong>Friday:</strong> Fit Food Friday - Healthy recipes and nutrition
                  </div>
                  <div className="schedule-item">
                    <strong>Weekend:</strong> Community highlights and user-generated content
                  </div>
                </div>
              </div>

              <div className="platform-stats">
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Posts</span>
                </div>
                <div className="stat">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Engagement</span>
                </div>
              </div>

              <Link href="/social/instagram" className="btn btn-primary w-full mt-6">
                View Instagram Content
              </Link>
            </div>

            {/* LinkedIn Hub */}
            <div className="card social-platform">
              <div className="platform-header">
                <div className="platform-icon linkedin">💼</div>
                <div>
                  <h2 className="text-2xl font-bold gradient-text">LinkedIn Professional</h2>
                  <p className="text-lg">FitLife Pro Business</p>
                </div>
              </div>
              
              <p className="mb-6">Professional insights on workplace wellness, industry developments, and the business side of fitness and health.</p>
              
              <div className="content-schedule">
                <h3 className="text-lg font-semibold mb-4">Weekly Content Schedule</h3>
                <div className="schedule-list">
                  <div className="schedule-item">
                    <strong>Monday:</strong> Industry Insights - Fitness industry trends and news
                  </div>
                  <div className="schedule-item">
                    <strong>Tuesday:</strong> Workplace Wellness - Office fitness and ergonomics
                  </div>
                  <div className="schedule-item">
                    <strong>Wednesday:</strong> MEM Development - Memory, cognition, and brain health
                  </div>
                  <div className="schedule-item">
                    <strong>Thursday:</strong> Professional Growth - Career development in health/fitness
                  </div>
                  <div className="schedule-item">
                    <strong>Friday:</strong> Research Roundup - Latest scientific studies
                  </div>
                  <div className="schedule-item">
                    <strong>Weekend:</strong> Thought leadership and long-form articles
                  </div>
                </div>
              </div>

              <div className="platform-stats">
                <div className="stat">
                  <span className="stat-number">25K+</span>
                  <span className="stat-label">Connections</span>
                </div>
                <div className="stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Articles</span>
                </div>
                <div className="stat">
                  <span className="stat-number">85%</span>
                  <span className="stat-label">Professional Reach</span>
                </div>
              </div>

              <Link href="/social/linkedin" className="btn btn-primary w-full mt-6">
                View LinkedIn Content
              </Link>
            </div>
          </div>

          {/* Content Calendar */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📅 This Week's Content Calendar</h2>
            
            <div className="calendar-grid">
              <div className="calendar-day">
                <div className="day-header">
                  <h3 className="font-bold">Monday</h3>
                  <span className="date">Dec 11</span>
                </div>
                <div className="day-content">
                  <div className="content-item instagram">
                    <span className="platform-badge">IG</span>
                    <div>
                      <p className="content-title">New Year, New You Challenge</p>
                      <p className="content-time">9:00 AM</p>
                    </div>
                  </div>
                  <div className="content-item linkedin">
                    <span className="platform-badge">LI</span>
                    <div>
                      <p className="content-title">2024 Fitness Industry Trends</p>
                      <p className="content-time">12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-header">
                  <h3 className="font-bold">Tuesday</h3>
                  <span className="date">Dec 12</span>
                </div>
                <div className="day-content">
                  <div className="content-item instagram">
                    <span className="platform-badge">IG</span>
                    <div>
                      <p className="content-title">Perfect Squat Form Tutorial</p>
                      <p className="content-time">10:00 AM</p>
                    </div>
                  </div>
                  <div className="content-item linkedin">
                    <span className="platform-badge">LI</span>
                    <div>
                      <p className="content-title">Ergonomic Workstation Setup</p>
                      <p className="content-time">2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-header">
                  <h3 className="font-bold">Wednesday</h3>
                  <span className="date">Dec 13</span>
                </div>
                <div className="day-content">
                  <div className="content-item instagram">
                    <span className="platform-badge">IG</span>
                    <div>
                      <p className="content-title">20-Min HIIT Workout</p>
                      <p className="content-time">8:00 AM</p>
                    </div>
                  </div>
                  <div className="content-item linkedin">
                    <span className="platform-badge">LI</span>
                    <div>
                      <p className="content-title">Exercise & Cognitive Function</p>
                      <p className="content-time">1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-header">
                  <h3 className="font-bold">Thursday</h3>
                  <span className="date">Dec 14</span>
                </div>
                <div className="day-content">
                  <div className="content-item instagram">
                    <span className="platform-badge">IG</span>
                    <div>
                      <p className="content-title">Sarah's 6-Month Journey</p>
                      <p className="content-time">11:00 AM</p>
                    </div>
                  </div>
                  <div className="content-item linkedin">
                    <span className="platform-badge">LI</span>
                    <div>
                      <p className="content-title">Building Wellness Programs</p>
                      <p className="content-time">3:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendar-day">
                <div className="day-header">
                  <h3 className="font-bold">Friday</h3>
                  <span className="date">Dec 15</span>
                </div>
                <div className="day-content">
                  <div className="content-item instagram">
                    <span className="platform-badge">IG</span>
                    <div>
                      <p className="content-title">Protein Pancake Recipe</p>
                      <p className="content-time">9:30 AM</p>
                    </div>
                  </div>
                  <div className="content-item linkedin">
                    <span className="platform-badge">LI</span>
                    <div>
                      <p className="content-title">Nutrition Research Update</p>
                      <p className="content-time">4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🤝 Community Engagement</h2>
            
            <div className="grid grid-3">
              <div className="engagement-metric">
                <div className="metric-icon">💬</div>
                <h3 className="text-xl font-semibold mb-2">Daily Interactions</h3>
                <p className="text-3xl font-bold gradient-text mb-2">2.5K+</p>
                <p>Comments, likes, and shares across all platforms</p>
              </div>

              <div className="engagement-metric">
                <div className="metric-icon">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Challenge Participants</h3>
                <p className="text-3xl font-bold gradient-text mb-2">15K+</p>
                <p>Active participants in monthly fitness challenges</p>
              </div>

              <div className="engagement-metric">
                <div className="metric-icon">📈</div>
                <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
                <p className="text-3xl font-bold gradient-text mb-2">500+</p>
                <p>Transformation stories shared by our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .social-platform {
          border-left: 4px solid #667eea;
        }

        .platform-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .platform-icon {
          font-size: 3rem;
          padding: 1rem;
          border-radius: 12px;
        }

        .platform-icon.instagram {
          background: linear-gradient(135deg, #ff8a80 0%, #ff5722 100%);
        }

        .platform-icon.linkedin {
          background: linear-gradient(135deg, #42a5f5 0%, #1976d2 100%);
        }

        .content-schedule {
          margin-bottom: 2rem;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .schedule-item {
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 6px;
          border-left: 3px solid #667eea;
        }

        .platform-stats {
          display: flex;
          justify-content: space-around;
          margin: 2rem 0;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          color: #667eea;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .calendar-day {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .day-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem;
          text-align: center;
        }

        .date {
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .day-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .content-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 6px;
        }

        .platform-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          color: white;
        }

        .content-item.instagram .platform-badge {
          background: #ff5722;
        }

        .content-item.linkedin .platform-badge {
          background: #1976d2;
        }

        .content-title {
          font-weight: 500;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .content-time {
          font-size: 0.75rem;
          color: #64748b;
        }

        .engagement-metric {
          text-align: center;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .metric-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 768px) {
          .platform-header {
            flex-direction: column;
            text-align: center;
          }
          
          .platform-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .calendar-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
