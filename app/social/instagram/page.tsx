export default function InstagramPage() {
  return (
    <div className="instagram-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">📸 Instagram Fitness Content</h1>
          <p className="text-xl mb-8">Daily inspiration, workouts, and fitness tips @FitLifePro_Official</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Recent Posts */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📱 Recent Posts</h2>
            
            <div className="posts-grid">
              <div className="post-card">
                <div className="post-image">📸</div>
                <div className="post-content">
                  <h3 className="font-semibold mb-2">Monday Motivation</h3>
                  <p className="text-sm text-gray-600 mb-2">2 hours ago</p>
                  <p className="mb-3">"The only bad workout is the one that didn't happen. Start where you are, use what you have, do what you can!" 💪</p>
                  <div className="post-stats">
                    <span>❤️ 1.2K</span>
                    <span>💬 89</span>
                    <span>📤 45</span>
                  </div>
                </div>
              </div>

              <div className="post-card">
                <div className="post-image">🎥</div>
                <div className="post-content">
                  <h3 className="font-semibold mb-2">Squat Form Tutorial</h3>
                  <p className="text-sm text-gray-600 mb-2">1 day ago</p>
                  <p className="mb-3">Perfect your squat form with these 5 key points! Swipe for common mistakes to avoid. 🏋️‍♀️</p>
                  <div className="post-stats">
                    <span>❤️ 2.1K</span>
                    <span>💬 156</span>
                    <span>📤 89</span>
                  </div>
                </div>
              </div>

              <div className="post-card">
                <div className="post-image">🥗</div>
                <div className="post-content">
                  <h3 className="font-semibold mb-2">Protein Bowl Recipe</h3>
                  <p className="text-sm text-gray-600 mb-2">2 days ago</p>
                  <p className="mb-3">Fuel your workouts with this delicious protein-packed Buddha bowl! Recipe in comments 👇</p>
                  <div className="post-stats">
                    <span>❤️ 1.8K</span>
                    <span>💬 203</span>
                    <span>📤 67</span>
                  </div>
                </div>
              </div>

              <div className="post-card">
                <div className="post-image">✨</div>
                <div className="post-content">
                  <h3 className="font-semibold mb-2">Transformation Thursday</h3>
                  <p className="text-sm text-gray-600 mb-2">3 days ago</p>
                  <p className="mb-3">Sarah's incredible 6-month journey! From beginner to fitness enthusiast. You inspire us! 🙌</p>
                  <div className="post-stats">
                    <span>❤️ 3.4K</span>
                    <span>💬 287</span>
                    <span>📤 145</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Categories */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🗂️ Content Categories</h2>
            
            <div className="categories-grid">
              <div className="category-section">
                <h3 className="text-xl font-semibold mb-4">💪 Workout Content</h3>
                <div className="content-list">
                  <div className="content-item">
                    <span className="content-type">Video</span>
                    <div>
                      <h4 className="font-semibold">15-Minute Morning Routine</h4>
                      <p className="text-sm">Energizing exercises to start your day</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Carousel</span>
                    <div>
                      <h4 className="font-semibold">Upper Body Blast</h4>
                      <p className="text-sm">5 exercises for stronger arms & shoulders</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Reel</span>
                    <div>
                      <h4 className="font-semibold">Core Crusher Challenge</h4>
                      <p className="text-sm">30-second ab workout you can do anywhere</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="category-section">
                <h3 className="text-xl font-semibold mb-4">🍎 Nutrition Posts</h3>
                <div className="content-list">
                  <div className="content-item">
                    <span className="content-type">Photo</span>
                    <div>
                      <h4 className="font-semibold">Meal Prep Sunday</h4>
                      <p className="text-sm">5 healthy meals ready in 2 hours</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Story</span>
                    <div>
                      <h4 className="font-semibold">Hydration Reminders</h4>
                      <p className="text-sm">Daily water intake tips & tracking</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Carousel</span>
                    <div>
                      <h4 className="font-semibold">Macro Breakdown Guide</h4>
                      <p className="text-sm">Understanding proteins, carbs & fats</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="category-section">
                <h3 className="text-xl font-semibold mb-4">🌟 Motivation & Tips</h3>
                <div className="content-list">
                  <div className="content-item">
                    <span className="content-type">Quote</span>
                    <div>
                      <h4 className="font-semibold">Monday Motivation</h4>
                      <p className="text-sm">Inspirational quotes to start the week</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Tips</span>
                    <div>
                      <h4 className="font-semibold">Form Check Friday</h4>
                      <p className="text-sm">Exercise technique tips & corrections</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Story</span>
                    <div>
                      <h4 className="font-semibold">Behind the Scenes</h4>
                      <p className="text-sm">Day in the life of fitness professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="category-section">
                <h3 className="text-xl font-semibold mb-4">🏆 Community Features</h3>
                <div className="content-list">
                  <div className="content-item">
                    <span className="content-type">Feature</span>
                    <div>
                      <h4 className="font-semibold">Member Spotlight</h4>
                      <p className="text-sm">Celebrating community achievements</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Challenge</span>
                    <div>
                      <h4 className="font-semibold">30-Day Challenges</h4>
                      <p className="text-sm">Monthly fitness goals & community participation</p>
                    </div>
                  </div>
                  <div className="content-item">
                    <span className="content-type">Q&A</span>
                    <div>
                      <h4 className="font-semibold">Ask the Expert</h4>
                      <p className="text-sm">Live Q&A sessions with trainers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Calendar */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📅 Weekly Content Schedule</h2>
            
            <div className="schedule-table">
              <div className="schedule-day">
                <h3 className="day-name">Monday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">9:00 AM</div>
                  <div className="schedule-post">
                    <strong>Motivation Monday</strong>
                    <p>Inspirational quote + weekly goal setting</p>
                  </div>
                </div>
                <div className="schedule-content">
                  <div className="schedule-time">6:00 PM</div>
                  <div className="schedule-post">
                    <strong>Monday Meal Prep</strong>
                    <p>Quick dinner recipe for busy schedules</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Tuesday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">10:00 AM</div>
                  <div className="schedule-post">
                    <strong>Technique Tuesday</strong>
                    <p>Exercise form tips and common mistakes</p>
                  </div>
                </div>
                <div className="schedule-content">
                  <div className="schedule-time">7:00 PM</div>
                  <div className="schedule-post">
                    <strong>Transformation Feature</strong>
                    <p>Member success story highlight</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Wednesday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">8:00 AM</div>
                  <div className="schedule-post">
                    <strong>Workout Wednesday</strong>
                    <p>Full workout video or routine breakdown</p>
                  </div>
                </div>
                <div className="schedule-content">
                  <div className="schedule-time">5:00 PM</div>
                  <div className="schedule-post">
                    <strong>Midweek Check-in</strong>
                    <p>Progress tracking and motivation</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Thursday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">11:00 AM</div>
                  <div className="schedule-post">
                    <strong>Transformation Thursday</strong>
                    <p>Before/after stories and progress photos</p>
                  </div>
                </div>
                <div className="schedule-content">
                  <div className="schedule-time">8:00 PM</div>
                  <div className="schedule-post">
                    <strong>Throwback Workout</strong>
                    <p>Classic exercises with modern twists</p>
                  </div>
                </div>
              </div>

              <div className="schedule-day">
                <h3 className="day-name">Friday</h3>
                <div className="schedule-content">
                  <div className="schedule-time">9:30 AM</div>
                  <div className="schedule-post">
                    <strong>Fit Food Friday</strong>
                    <p>Healthy recipes and nutrition tips</p>
                  </div>
                </div>
                <div className="schedule-content">
                  <div className="schedule-time">6:30 PM</div>
                  <div className="schedule-post">
                    <strong>Weekend Prep</strong>
                    <p>Staying on track during weekends</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Strategies */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📈 Engagement Strategies</h2>
            
            <div className="grid grid-2">
              <div className="strategy-section">
                <h3 className="text-xl font-semibold mb-4">Interactive Content</h3>
                <div className="strategy-list">
                  <div className="strategy-item">
                    <h4 className="font-semibold">Polls & Questions</h4>
                    <p>Weekly fitness polls in Stories to gauge audience preferences</p>
                  </div>
                  <div className="strategy-item">
                    <h4 className="font-semibold">Live Workouts</h4>
                    <p>Monthly live workout sessions with real-time interaction</p>
                  </div>
                  <div className="strategy-item">
                    <h4 className="font-semibold">Challenge Hashtags</h4>
                    <p>Custom hashtags for community challenges and user-generated content</p>
                  </div>
                </div>
              </div>

              <div className="strategy-section">
                <h3 className="text-xl font-semibold mb-4">Community Building</h3>
                <div className="strategy-list">
                  <div className="strategy-item">
                    <h4 className="font-semibold">User Features</h4>
                    <p>Regular member spotlights and transformation stories</p>
                  </div>
                  <div className="strategy-item">
                    <h4 className="font-semibold">Expert Collaborations</h4>
                    <p>Partnerships with nutritionists, physical therapists, and trainers</p>
                  </div>
                  <div className="strategy-item">
                    <h4 className="font-semibold">Contest & Giveaways</h4>
                    <p>Monthly fitness gear giveaways and achievement contests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .post-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
        }

        .post-image {
          height: 120px;
          background: linear-gradient(135deg, #ff8a80 0%, #ff5722 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .post-content {
          padding: 1rem;
        }

        .post-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .category-section {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #ff5722;
        }

        .content-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .content-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 6px;
        }

        .content-type {
          background: #ff5722;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }

        .schedule-table {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .schedule-day {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .day-name {
          background: linear-gradient(135deg, #ff8a80 0%, #ff5722 100%);
          color: white;
          padding: 1rem;
          text-align: center;
          font-weight: bold;
        }

        .schedule-content {
          padding: 1rem;
          border-bottom: 1px solid #f1f5f9;
        }

        .schedule-content:last-child {
          border-bottom: none;
        }

        .schedule-time {
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.5rem;
        }

        .schedule-post p {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .strategy-section {
          padding: 1.5rem;
          background: #fff7ed;
          border-radius: 8px;
        }

        .strategy-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .strategy-item {
          padding: 1rem;
          background: white;
          border-radius: 6px;
          border-left: 3px solid #f97316;
        }

        .strategy-item p {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .posts-grid {
            grid-template-columns: 1fr;
          }
          
          .categories-grid {
            grid-template-columns: 1fr;
          }
          
          .schedule-table {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
