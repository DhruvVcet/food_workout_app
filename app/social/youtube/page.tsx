export default function YouTubePage() {
  return (
    <div className="youtube-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">🎥 YouTube Fitness Content</h1>
          <p className="text-xl mb-8">Comprehensive workout videos and fitness education at FitLife Pro Channel</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Recent Videos */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📹 Recent Videos</h2>
            
            <div className="videos-grid">
              <div className="video-card">
                <div className="video-thumbnail">🎥</div>
                <div className="video-content">
                  <h3 className="font-semibold mb-2">30-Minute Full Body HIIT Workout</h3>
                  <p className="text-sm text-gray-600 mb-2">3 days ago</p>
                  <p className="mb-3">Complete high-intensity workout targeting all major muscle groups. No equipment needed!</p>
                  <div className="video-stats">
                    <span>👁️ 45.2K views</span>
                    <span>👍 2.1K likes</span>
                    <span>💬 189 comments</span>
                  </div>
                </div>
              </div>

              <div className="video-card">
                <div className="video-thumbnail">🎬</div>
                <div className="video-content">
                  <h3 className="font-semibold mb-2">Perfect Deadlift Form Tutorial</h3>
                  <p className="text-sm text-gray-600 mb-2">1 week ago</p>
                  <p className="mb-3">Master the deadlift with proper form, common mistakes to avoid, and progression tips.</p>
                  <div className="video-stats">
                    <span>👁️ 62.8K views</span>
                    <span>👍 3.4K likes</span>
                    <span>💬 267 comments</span>
                  </div>
                </div>
              </div>

              <div className="video-card">
                <div className="video-thumbnail">🎞️</div>
                <div className="video-content">
                  <h3 className="font-semibold mb-2">Healthy Meal Prep Sunday</h3>
                  <p className="text-sm text-gray-600 mb-2">1 week ago</p>
                  <p className="mb-3">Prepare 5 days of healthy meals in 2 hours. Budget-friendly and nutritious recipes!</p>
                  <div className="video-stats">
                    <span>👁️ 38.9K views</span>
                    <span>👍 1.8K likes</span>
                    <span>💬 145 comments</span>
                  </div>
                </div>
              </div>

              <div className="video-card">
                <div className="video-thumbnail">📹</div>
                <div className="video-content">
                  <h3 className="font-semibold mb-2">Live Q&A: Your Fitness Questions Answered</h3>
                  <p className="text-sm text-gray-600 mb-2">2 weeks ago</p>
                  <p className="mb-3">Hour-long live session covering nutrition, workout planning, and motivation strategies.</p>
                  <div className="video-stats">
                    <span>👁️ 28.5K views</span>
                    <span>👍 1.5K likes</span>
                    <span>💬 892 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Series */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🎬 Video Series</h2>
            
            <div className="series-grid">
              <div className="series-section">
                <h3 className="text-xl font-semibold mb-4">🏋️ Workout Programs</h3>
                
                <div className="series-list">
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Beginner's Fitness Journey</h4>
                      <p className="text-sm">12-week program for complete beginners</p>
                      <div className="series-meta">24 videos • 450K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Advanced Strength Training</h4>
                      <p className="text-sm">Powerlifting and strength progression techniques</p>
                      <div className="series-meta">18 videos • 320K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Home Workout Collection</h4>
                      <p className="text-sm">Equipment-free workouts for any space</p>
                      <div className="series-meta">30 videos • 680K total views</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="series-section">
                <h3 className="text-xl font-semibold mb-4">🍎 Nutrition Education</h3>
                
                <div className="series-list">
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Nutrition Fundamentals</h4>
                      <p className="text-sm">Complete guide to healthy eating basics</p>
                      <div className="series-meta">15 videos • 280K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Meal Prep Mastery</h4>
                      <p className="text-sm">Weekly meal preparation strategies</p>
                      <div className="series-meta">10 videos • 195K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Healthy Cooking Techniques</h4>
                      <p className="text-sm">Cooking methods for maximum nutrition</p>
                      <div className="series-meta">12 videos • 160K total views</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="series-section">
                <h3 className="text-xl font-semibold mb-4">🎯 Specialized Content</h3>
                
                <div className="series-list">
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Prenatal Fitness</h4>
                      <p className="text-sm">Safe workouts during pregnancy</p>
                      <div className="series-meta">8 videos • 120K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Senior Fitness</h4>
                      <p className="text-sm">Low-impact exercises for older adults</p>
                      <div className="series-meta">6 videos • 95K total views</div>
                    </div>
                  </div>
                  <div className="series-item">
                    <span className="series-type">Series</span>
                    <div>
                      <h4 className="font-semibold">Kids Fitness Fun</h4>
                      <p className="text-sm">Age-appropriate exercises for children</p>
                      <div className="series-meta">10 videos • 85K total views</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upload Schedule */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📅 Weekly Upload Schedule</h2>
            
            <div className="upload-schedule">
              <div className="schedule-day">
                <h3 className="day-name">Monday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">6:00 PM EST</div>
                  <div className="schedule-video">
                    <strong>Full Body Workout Monday</strong>
                    <p>Complete 30-45 minute training sessions targeting all muscle groups</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Tuesday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">7:00 PM EST</div>
                  <div className="schedule-video">
                    <strong>Technique Tuesday</strong>
                    <p>Exercise form tutorials and movement pattern breakdowns</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Wednesday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">8:00 PM EST</div>
                  <div className="schedule-video">
                    <strong>Live Wednesday Q&A</strong>
                    <p>Interactive sessions answering subscriber questions</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Thursday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">5:00 PM EST</div>
                  <div className="schedule-video">
                    <strong>Nutrition Thursday</strong>
                    <p>Healthy cooking demonstrations and meal prep guides</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Friday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">7:30 PM EST</div>
                  <div className="schedule-video">
                    <strong>Transformation Friday</strong>
                    <p>Member success stories and motivational content</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Stats */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📊 Channel Performance</h2>
            
            <div className="grid grid-3">
              <div className="stat-card">
                <div className="stat-value">156K</div>
                <div className="stat-label">Subscribers</div>
                <div className="stat-change positive">+8.2% this month</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">2.4M</div>
                <div className="stat-label">Monthly Views</div>
                <div className="stat-change positive">+15% this month</div>
              </div>

              <div className="stat-card">
                <div className="stat-value">12.3K</div>
                <div className="stat-label">Avg. Video Views</div>
                <div className="stat-change positive">+5.7% this month</div>
              </div>
            </div>

            <div className="performance-breakdown">
              <h3 className="text-lg font-semibold mb-4">Content Performance by Type</h3>
              <div className="performance-grid">
                <div className="performance-item">
                  <span className="content-type-label">Workout Videos</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '92%'}}></div>
                  </div>
                  <span className="performance-value">92% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Nutrition Content</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '87%'}}></div>
                  </div>
                  <span className="performance-value">87% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Live Streams</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '95%'}}></div>
                  </div>
                  <span className="performance-value">95% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Tutorials</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '89%'}}></div>
                  </div>
                  <span className="performance-value">89% engagement rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Engagement */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🤝 Community Engagement</h2>
            
            <div className="grid grid-2">
              <div className="engagement-section">
                <h3 className="text-xl font-semibold mb-4">Interactive Features</h3>
                <div className="engagement-list">
                  <div className="engagement-item">
                    <h4 className="font-semibold">Live Workouts</h4>
                    <p>Weekly live training sessions with real-time interaction and form corrections</p>
                  </div>
                  <div className="engagement-item">
                    <h4 className="font-semibold">Q&A Sessions</h4>
                    <p>Monthly live streams addressing subscriber fitness and nutrition questions</p>
                  </div>
                  <div className="engagement-item">
                    <h4 className="font-semibold">Challenge Videos</h4>
                    <p>Monthly fitness challenges encouraging community participation</p>
                  </div>
                </div>
              </div>

              <div className="engagement-section">
                <h3 className="text-xl font-semibold mb-4">Community Building</h3>
                <div className="engagement-list">
                  <div className="engagement-item">
                    <h4 className="font-semibold">Member Features</h4>
                    <p>Showcase subscriber transformations and success stories</p>
                  </div>
                  <div className="engagement-item">
                    <h4 className="font-semibold">Expert Collaborations</h4>
                    <p>Guest appearances with nutritionists, physical therapists, and trainers</p>
                  </div>
                  <div className="engagement-item">
                    <h4 className="font-semibold">Educational Series</h4>
                    <p>Multi-part series on complex fitness and nutrition topics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
