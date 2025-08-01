export default function LinkedInPage() {
  return (
    <div className="linkedin-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">💼 LinkedIn Professional Content</h1>
          <p className="text-xl mb-8">Industry insights, workplace wellness, and professional development in fitness</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Recent Articles */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📰 Recent Articles & Posts</h2>
            
            <div className="articles-grid">
              <div className="article-card">
                <div className="article-header">
                  <div className="article-type">Article</div>
                  <div className="publish-date">2 days ago</div>
                </div>
                <h3 className="font-bold text-lg mb-3">The Future of Workplace Wellness: 2024 Trends</h3>
                <p className="text-gray-600 mb-4">Exploring how companies are evolving their employee wellness programs to meet modern workforce needs, including mental health support, flexible fitness options, and technology integration.</p>
                <div className="article-stats">
                  <span>👍 284 likes</span>
                  <span>💬 47 comments</span>
                  <span>🔄 89 shares</span>
                </div>
                <div className="article-tags">
                  <span className="tag">#WorkplaceWellness</span>
                  <span className="tag">#EmployeeHealth</span>
                  <span className="tag">#CorporateFitness</span>
                </div>
              </div>

              <div className="article-card">
                <div className="article-header">
                  <div className="article-type">Research</div>
                  <div className="publish-date">5 days ago</div>
                </div>
                <h3 className="font-bold text-lg mb-3">Exercise and Cognitive Function: Latest Research Findings</h3>
                <p className="text-gray-600 mb-4">New studies reveal how different types of physical activity impact memory, focus, and decision-making abilities in the workplace. Key insights for professionals seeking cognitive enhancement.</p>
                <div className="article-stats">
                  <span>👍 156 likes</span>
                  <span>💬 32 comments</span>
                  <span>🔄 67 shares</span>
                </div>
                <div className="article-tags">
                  <span className="tag">#CognitiveFitness</span>
                  <span className="tag">#BrainHealth</span>
                  <span className="tag">#Productivity</span>
                </div>
              </div>

              <div className="article-card">
                <div className="article-header">
                  <div className="article-type">Industry</div>
                  <div className="publish-date">1 week ago</div>
                </div>
                <h3 className="font-bold text-lg mb-3">Building a Career in Digital Health & Fitness Technology</h3>
                <p className="text-gray-600 mb-4">The fitness industry is rapidly digitizing. Here's what professionals need to know about emerging career opportunities in health tech, from app development to AI-driven wellness solutions.</p>
                <div className="article-stats">
                  <span>👍 203 likes</span>
                  <span>💬 58 comments</span>
                  <span>🔄 124 shares</span>
                </div>
                <div className="article-tags">
                  <span className="tag">#HealthTech</span>
                  <span className="tag">#CareerDevelopment</span>
                  <span className="tag">#FitnessIndustry</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Pillars */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🏗️ Content Pillars</h2>
            
            <div className="pillars-grid">
              <div className="pillar-section">
                <div className="pillar-icon">🏢</div>
                <h3 className="text-xl font-semibold mb-4">Workplace Wellness</h3>
                <div className="content-topics">
                  <h4 className="font-semibold mb-2">Recent Topics:</h4>
                  <ul>
                    <li>• Ergonomic workstation setup guides</li>
                    <li>• Desk exercise routines for office workers</li>
                    <li>• Mental health in remote work environments</li>
                    <li>• Corporate fitness program implementation</li>
                    <li>• Work-life balance strategies</li>
                  </ul>
                </div>
              </div>

              <div className="pillar-section">
                <div className="pillar-icon">🧠</div>
                <h3 className="text-xl font-semibold mb-4">MEM Development</h3>
                <div className="content-topics">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Memory enhancement through exercise</li>
                    <li>• Cognitive training methodologies</li>
                    <li>• Nutrition for brain health</li>
                    <li>• Sleep optimization for professionals</li>
                    <li>• Stress management techniques</li>
                  </ul>
                </div>
              </div>

              <div className="pillar-section">
                <div className="pillar-icon">📊</div>
                <h3 className="text-xl font-semibold mb-4">Industry Analysis</h3>
                <div className="content-topics">
                  <h4 className="font-semibold mb-2">Research Topics:</h4>
                  <ul>
                    <li>• Fitness industry market trends</li>
                    <li>• Technology adoption in health sector</li>
                    <li>• Consumer behavior in wellness</li>
                    <li>• Investment opportunities in fitness tech</li>
                    <li>• Regulatory changes affecting health industry</li>
                  </ul>
                </div>
              </div>

              <div className="pillar-section">
                <div className="pillar-icon">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
                <div className="content-topics">
                  <h4 className="font-semibold mb-2">Career Content:</h4>
                  <ul>
                    <li>• Leadership in health & wellness</li>
                    <li>• Networking in the fitness industry</li>
                    <li>• Certification and education pathways</li>
                    <li>• Entrepreneurship in wellness space</li>
                    <li>• Personal branding for fitness professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📅 Weekly Publishing Schedule</h2>
            
            <div className="schedule-timeline">
              <div className="timeline-day">
                <div className="day-marker">
                  <h3 className="font-bold">Monday</h3>
                  <span className="post-time">12:00 PM</span>
                </div>
                <div className="day-content">
                  <h4 className="font-semibold">Industry Insights Monday</h4>
                  <p>Deep dive into fitness industry trends, market analysis, and emerging technologies shaping the wellness landscape.</p>
                  <div className="content-format">Long-form Article (1000+ words)</div>
                </div>
              </div>

              <div className="timeline-day">
                <div className="day-marker">
                  <h3 className="font-bold">Tuesday</h3>
                  <span className="post-time">2:00 PM</span>
                </div>
                <div className="day-content">
                  <h4 className="font-semibold">Workplace Wellness Tuesday</h4>
                  <p>Practical tips for incorporating fitness and wellness into professional environments, from ergonomics to team building.</p>
                  <div className="content-format">Professional Post + Infographic</div>
                </div>
              </div>

              <div className="timeline-day">
                <div className="day-marker">
                  <h3 className="font-bold">Wednesday</h3>
                  <span className="post-time">1:00 PM</span>
                </div>
                <div className="day-content">
                  <h4 className="font-semibold">MEM Development Wednesday</h4>
                  <p>Scientific insights on memory, cognition, and mental performance enhancement through lifestyle interventions.</p>
                  <div className="content-format">Research-based Article</div>
                </div>
              </div>

              <div className="timeline-day">
                <div className="day-marker">
                  <h3 className="font-bold">Thursday</h3>
                  <span className="post-time">3:00 PM</span>
                </div>
                <div className="day-content">
                  <h4 className="font-semibold">Professional Growth Thursday</h4>
                  <p>Career development advice, leadership insights, and networking strategies for health and fitness professionals.</p>
                  <div className="content-format">Professional Advice Post</div>
                </div>
              </div>

              <div className="timeline-day">
                <div className="day-marker">
                  <h3 className="font-bold">Friday</h3>
                  <span className="post-time">4:00 PM</span>
                </div>
                <div className="day-content">
                  <h4 className="font-semibold">Research Roundup Friday</h4>
                  <p>Weekly summary of latest scientific studies, research findings, and evidence-based practices in health and fitness.</p>
                  <div className="content-format">Research Summary + Commentary</div>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Analytics */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📈 Engagement & Analytics</h2>
            
            <div className="grid grid-3">
              <div className="metric-card">
                <div className="metric-value">25,847</div>
                <div className="metric-label">Connections</div>
                <div className="metric-change positive">+12% this month</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">150K+</div>
                <div className="metric-label">Monthly Impressions</div>
                <div className="metric-change positive">+25% this month</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">3.2K</div>
                <div className="metric-label">Avg. Post Engagement</div>
                <div className="metric-change positive">+8% this month</div>
              </div>
            </div>

            <div className="engagement-breakdown">
              <h3 className="text-lg font-semibold mb-4">Content Performance by Type</h3>
              <div className="performance-grid">
                <div className="performance-item">
                  <span className="content-type-label">Industry Articles</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '85%'}}></div>
                  </div>
                  <span className="performance-value">85% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Workplace Tips</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '78%'}}></div>
                  </div>
                  <span className="performance-value">78% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Research Posts</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '72%'}}></div>
                  </div>
                  <span className="performance-value">72% engagement rate</span>
                </div>

                <div className="performance-item">
                  <span className="content-type-label">Career Advice</span>
                  <div className="performance-bar">
                    <div className="performance-fill" style={{width: '68%'}}></div>
                  </div>
                  <span className="performance-value">68% engagement rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Network */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🤝 Professional Network</h2>
            
            <div className="grid grid-2">
              <div className="network-section">
                <h3 className="text-xl font-semibold mb-4">Industry Collaborations</h3>
                <div className="collaboration-list">
                  <div className="collaboration-item">
                    <h4 className="font-semibold">Corporate Wellness Partners</h4>
                    <p>Fortune 500 companies implementing our wellness strategies</p>
                    <div className="partner-count">50+ Active Partnerships</div>
                  </div>
                  <div className="collaboration-item">
                    <h4 className="font-semibold">Research Institutions</h4>
                    <p>Academic partnerships for evidence-based content creation</p>
                    <div className="partner-count">15+ Universities</div>
                  </div>
                  <div className="collaboration-item">
                    <h4 className="font-semibold">Health Tech Companies</h4>
                    <p>Technology integrations and innovation partnerships</p>
                    <div className="partner-count">25+ Tech Partners</div>
                  </div>
                </div>
              </div>

              <div className="network-section">
                <h3 className="text-xl font-semibold mb-4">Thought Leadership</h3>
                <div className="leadership-activities">
                  <div className="activity-item">
                    <h4 className="font-semibold">Speaking Engagements</h4>
                    <p>Regular presentations at industry conferences and corporate events</p>
                  </div>
                  <div className="activity-item">
                    <h4 className="font-semibold">Expert Panels</h4>
                    <p>Participation in wellness and fitness industry expert discussions</p>
                  </div>
                  <div className="activity-item">
                    <h4 className="font-semibold">Media Contributions</h4>
                    <p>Regular contributions to industry publications and podcasts</p>
                  </div>
                  <div className="activity-item">
                    <h4 className="font-semibold">Mentorship Programs</h4>
                    <p>Guiding emerging professionals in the fitness and wellness industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .article-card {
          padding: 1.5rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          border-left: 4px solid #1976d2;
        }

        .article-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .article-type {
          background: #1976d2;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .publish-date {
          font-size: 0.875rem;
          color: #64748b;
        }

        .article-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .article-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tag {
          background: #f1f5f9;
          color: #1976d2;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .pillar-section {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #1976d2;
        }

        .pillar-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .content-topics ul {
          list-style: none;
        }

        .content-topics li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .schedule-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-day {
          display: flex;
          gap: 2rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #1976d2;
        }

        .day-marker {
          min-width: 120px;
          text-align: center;
        }

        .post-time {
          font-size: 0.875rem;
          color: #64748b;
        }

        .day-content {
          flex: 1;
        }

        .content-format {
          background: #1976d2;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .metric-card {
          text-align: center;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #1976d2;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: bold;
          color: #1976d2;
        }

        .metric-label {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0.5rem 0;
        }

        .metric-change {
          font-size: 0.75rem;
          font-weight: 600;
        }

        .metric-change.positive {
          color: #059669;
        }

        .engagement-breakdown {
          margin-top: 2rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .performance-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .performance-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .content-type-label {
          min-width: 120px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .performance-bar {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .performance-fill {
          height: 100%;
          background: linear-gradient(135deg, #1976d2 0%, #42a5f5 100%);
          transition: width 0.3s ease;
        }

        .performance-value {
          min-width: 120px;
          font-size: 0.875rem;
          color: #64748b;
        }

        .network-section {
          padding: 1.5rem;
          background: #f0f9ff;
          border-radius: 8px;
        }

        .collaboration-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .collaboration-item {
          padding: 1rem;
          background: white;
          border-radius: 6px;
          border-left: 3px solid #1976d2;
        }

        .partner-count {
          background: #1976d2;
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .leadership-activities {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          padding: 1rem;
          background: white;
          border-radius: 6px;
          border-left: 3px solid #42a5f5;
        }

        .activity-item p {
          font-size: 0.875rem;
          color: #64748b;
          margin-top: 0.5rem;
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
          
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          
          .timeline-day {
            flex-direction: column;
            gap: 1rem;
          }
          
          .day-marker {
            min-width: auto;
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}
