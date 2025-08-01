export default function PremiumPlanPage() {
  return (
    <div className="premium-plan-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Premium Fitness Plan</h1>
          <p className="text-xl mb-8">Comprehensive fitness and nutrition guidance for serious results</p>
          <div className="pricing-badge">
            <span className="text-3xl font-bold">$29</span>
            <span className="text-lg">/month</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            {/* Personalized Workouts */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">🎯 Personalized Workouts</h2>
              
              <div className="workout-programs">
                <div className="program">
                  <h3 className="text-xl font-semibold mb-3">Strength Building Program</h3>
                  <ul className="program-details">
                    <li>• 4-day split routine</li>
                    <li>• Progressive overload tracking</li>
                    <li>• Custom rep and set schemes</li>
                    <li>• Equipment alternatives provided</li>
                  </ul>
                </div>

                <div className="program">
                  <h3 className="text-xl font-semibold mb-3">Fat Loss Program</h3>
                  <ul className="program-details">
                    <li>• High-intensity interval training</li>
                    <li>• Metabolic conditioning workouts</li>
                    <li>• Cardio and strength combination</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </div>

                <div className="program">
                  <h3 className="text-xl font-semibold mb-3">Muscle Building Program</h3>
                  <ul className="program-details">
                    <li>• Hypertrophy-focused training</li>
                    <li>• Volume progression protocols</li>
                    <li>• Targeted muscle group emphasis</li>
                    <li>• Recovery optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Advanced Nutrition */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">🥙 Advanced Nutrition</h2>
              
              <div className="nutrition-features">
                <div className="feature">
                  <h3 className="text-xl font-semibold mb-3">Macro Tracking</h3>
                  <ul>
                    <li>• Personalized macro calculations</li>
                    <li>• Goal-specific ratios</li>
                    <li>• Food logging guidance</li>
                    <li>• Weekly adjustments</li>
                  </ul>
                </div>

                <div className="feature">
                  <h3 className="text-xl font-semibold mb-3">Meal Planning</h3>
                  <ul>
                    <li>• Custom meal plans</li>
                    <li>• Recipe database access</li>
                    <li>• Shopping lists included</li>
                    <li>• Dietary preference options</li>
                  </ul>
                </div>

                <div className="feature">
                  <h3 className="text-xl font-semibold mb-3">Supplement Guidance</h3>
                  <ul>
                    <li>• Evidence-based recommendations</li>
                    <li>• Timing and dosage protocols</li>
                    <li>• Budget-friendly options</li>
                    <li>• Goal-specific stacks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📈 Progress Analytics</h2>
            
            <div className="grid grid-3">
              <div className="analytics-feature">
                <h3 className="text-lg font-semibold mb-3">📊 Detailed Metrics</h3>
                <ul>
                  <li>• Body composition tracking</li>
                  <li>• Strength progression charts</li>
                  <li>• Performance analytics</li>
                  <li>• Photo progress timeline</li>
                </ul>
              </div>

              <div className="analytics-feature">
                <h3 className="text-lg font-semibold mb-3">🎯 Goal Setting</h3>
                <ul>
                  <li>• SMART goal framework</li>
                  <li>• Milestone celebrations</li>
                  <li>• Adaptive target adjustment</li>
                  <li>• Achievement badges</li>
                </ul>
              </div>

              <div className="analytics-feature">
                <h3 className="text-lg font-semibold mb-3">📱 Mobile Sync</h3>
                <ul>
                  <li>• Cross-device synchronization</li>
                  <li>• Offline workout access</li>
                  <li>• Real-time data updates</li>
                  <li>• Cloud backup included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Expert Support */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">👨‍⚕️ Expert Consultation</h2>
            
            <div className="grid grid-2">
              <div className="support-feature">
                <h3 className="text-xl font-semibold mb-4">Monthly Video Calls</h3>
                <p className="mb-4">30-minute one-on-one sessions with certified trainers and nutritionists to review your progress and adjust your plan.</p>
                <ul>
                  <li>• Form check and exercise technique</li>
                  <li>• Nutrition plan optimization</li>
                  <li>• Obstacle problem-solving</li>
                  <li>• Motivation and accountability</li>
                </ul>
              </div>

              <div className="support-feature">
                <h3 className="text-xl font-semibold mb-4">Priority Support</h3>
                <p className="mb-4">Get answers to your questions within 24 hours from our team of fitness professionals.</p>
                <ul>
                  <li>• Exercise modification requests</li>
                  <li>• Injury prevention guidance</li>
                  <li>• Meal plan adjustments</li>
                  <li>• Emergency support access</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card mt-8 text-center cta-card">
            <h2 className="text-2xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
            <p className="text-lg mb-6">Join thousands of members who have achieved their fitness goals with our Premium Plan</p>
            <div className="cta-buttons">
              <button className="btn btn-primary text-lg">
                Start Premium Plan - $29/month
              </button>
              <button className="btn btn-secondary text-lg">
                Try Free for 7 Days
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-600">Cancel anytime. No hidden fees.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pricing-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          border-radius: 50px;
          backdrop-filter: blur(10px);
        }

        .workout-programs, .nutrition-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .program, .feature, .analytics-feature, .support-feature {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .program-details, .feature ul, .analytics-feature ul, .support-feature ul {
          list-style: none;
          margin-top: 1rem;
        }

        .program-details li, .feature li, .analytics-feature li, .support-feature li {
          padding: 0.5rem 0;
          color: #64748b;
          border-bottom: 1px solid #e2e8f0;
        }

        .cta-card {
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          border: 2px solid #667eea20;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-buttons .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  )
}
