export default function ProPlanPage() {
  return (
    <div className="pro-plan-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Pro Bodybuilder Plan</h1>
          <p className="text-xl mb-8">Elite training and nutrition protocols for serious athletes and competitors</p>
          <div className="pricing-badge">
            <span className="text-3xl font-bold">$79</span>
            <span className="text-lg">/month</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Elite Training Programs */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🏆 Elite Training Programs</h2>
            
            <div className="grid grid-2">
              <div className="training-type">
                <h3 className="text-xl font-semibold mb-4">💪 Mass Building Phase</h3>
                <div className="program-details">
                  <h4 className="font-semibold mb-2">6-Day Push/Pull/Legs Split</h4>
                  <ul>
                    <li>• High volume hypertrophy protocols</li>
                    <li>• Advanced intensity techniques</li>
                    <li>• Periodized progression schemes</li>
                    <li>• Specialized weak point training</li>
                    <li>• Recovery and deload planning</li>
                  </ul>
                </div>
              </div>

              <div className="training-type">
                <h3 className="text-xl font-semibold mb-4">🔥 Contest Prep Phase</h3>
                <div className="program-details">
                  <h4 className="font-semibold mb-2">12-20 Week Competition Prep</h4>
                  <ul>
                    <li>• Precise caloric manipulation</li>
                    <li>• Cardio periodization strategies</li>
                    <li>• Peak week optimization</li>
                    <li>• Posing routine integration</li>
                    <li>• Mental preparation coaching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="advanced-techniques">
              <h3 className="text-xl font-semibold mb-4">🎯 Advanced Training Techniques</h3>
              <div className="grid grid-3">
                <div className="technique">
                  <h4 className="font-semibold">Intensity Methods</h4>
                  <ul>
                    <li>• Drop sets and strip sets</li>
                    <li>• Rest-pause training</li>
                    <li>• Cluster sets</li>
                    <li>• Pre-exhaustion protocols</li>
                  </ul>
                </div>
                <div className="technique">
                  <h4 className="font-semibold">Volume Strategies</h4>
                  <ul>
                    <li>• High-frequency training</li>
                    <li>• Specialization phases</li>
                    <li>• Volume equated progressions</li>
                    <li>• Deload implementations</li>
                  </ul>
                </div>
                <div className="technique">
                  <h4 className="font-semibold">Recovery Protocols</h4>
                  <ul>
                    <li>• Active recovery sessions</li>
                    <li>• Mobility and flexibility work</li>
                    <li>• Sleep optimization</li>
                    <li>• Stress management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Nutrition */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🧬 Competition-Level Nutrition</h2>
            
            <div className="grid grid-2">
              <div className="nutrition-phase">
                <h3 className="text-xl font-semibold mb-4">📈 Muscle Building Nutrition</h3>
                <ul className="nutrition-list">
                  <li>• Precise macro cycling protocols</li>
                  <li>• Nutrient timing optimization</li>
                  <li>• Insulin sensitivity strategies</li>
                  <li>• Anabolic window maximization</li>
                  <li>• Digestive health protocols</li>
                  <li>• Hydration and electrolyte balance</li>
                </ul>
              </div>

              <div className="nutrition-phase">
                <h3 className="text-xl font-semibold mb-4">📉 Contest Prep Nutrition</h3>
                <ul className="nutrition-list">
                  <li>• Aggressive fat loss protocols</li>
                  <li>• Metabolic flexibility training</li>
                  <li>• Refeed and diet break planning</li>
                  <li>• Carb cycling strategies</li>
                  <li>• Peak week manipulation</li>
                  <li>• Post-show reverse dieting</li>
                </ul>
              </div>
            </div>

            <div className="supplement-protocols">
              <h3 className="text-xl font-semibold mb-4">💊 Advanced Supplement Protocols</h3>
              <div className="grid grid-3">
                <div className="supplement-category">
                  <h4 className="font-semibold">Performance</h4>
                  <ul>
                    <li>• Creatine optimization</li>
                    <li>• Beta-alanine cycling</li>
                    <li>• Citrulline malate</li>
                    <li>• HMB protocols</li>
                  </ul>
                </div>
                <div className="supplement-category">
                  <h4 className="font-semibold">Recovery</h4>
                  <ul>
                    <li>• Glutamine timing</li>
                    <li>• BCAA optimization</li>
                    <li>• ZMA protocols</li>
                    <li>• Magnesium cycling</li>
                  </ul>
                </div>
                <div className="supplement-category">
                  <h4 className="font-semibold">Health</h4>
                  <ul>
                    <li>• Omega-3 optimization</li>
                    <li>• Vitamin D protocols</li>
                    <li>• Probiotic strategies</li>
                    <li>• Liver support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 1-on-1 Coaching */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🎖️ Elite 1-on-1 Coaching</h2>
            
            <div className="grid grid-2">
              <div className="coaching-feature">
                <h3 className="text-xl font-semibold mb-4">📞 Weekly Check-ins</h3>
                <ul>
                  <li>• 60-minute video consultations</li>
                  <li>• Progress assessment and analysis</li>
                  <li>• Real-time plan adjustments</li>
                  <li>• Form analysis and corrections</li>
                  <li>• Mental coaching and motivation</li>
                  <li>• Competition strategy planning</li>
                </ul>
              </div>

              <div className="coaching-feature">
                <h3 className="text-xl font-semibold mb-4">📱 24/7 Support Access</h3>
                <ul>
                  <li>• Direct coach communication</li>
                  <li>• Emergency protocol assistance</li>
                  <li>• Real-time workout modifications</li>
                  <li>• Immediate question responses</li>
                  <li>• Crisis intervention support</li>
                  <li>• Competition day guidance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Competition Preparation */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🥇 Competition Preparation</h2>
            
            <div className="competition-prep">
              <div className="prep-phase">
                <h3 className="text-xl font-semibold mb-4">📅 20-Week Prep Timeline</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <strong>Weeks 20-16:</strong> Baseline establishment and training adaptation
                  </div>
                  <div className="timeline-item">
                    <strong>Weeks 15-11:</strong> Progressive deficit and cardio introduction
                  </div>
                  <div className="timeline-item">
                    <strong>Weeks 10-6:</strong> Aggressive cutting and training intensity
                  </div>
                  <div className="timeline-item">
                    <strong>Weeks 5-2:</strong> Fine-tuning and posing practice
                  </div>
                  <div className="timeline-item">
                    <strong>Week 1:</strong> Peak week manipulation and final preparation
                  </div>
                </div>
              </div>

              <div className="posing-training">
                <h3 className="text-xl font-semibold mb-4">🕺 Posing and Presentation</h3>
                <ul>
                  <li>• Mandatory pose perfection</li>
                  <li>• Individual routine choreography</li>
                  <li>• Stage presence coaching</li>
                  <li>• Tan and presentation guidance</li>
                  <li>• Judge interaction strategies</li>
                  <li>• Competition day logistics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card text-center cta-card">
            <h2 className="text-2xl font-bold mb-6">Ready to Compete at the Highest Level?</h2>
            <p className="text-lg mb-6">Join elite athletes who trust our proven competition preparation system</p>
            <div className="testimonial">
              <blockquote className="text-lg italic mb-4">
                "This program took me from regional competitor to national stage. The level of detail and support is unmatched."
              </blockquote>
              <cite className="font-semibold">- Marcus Thompson, NPC National Competitor</cite>
            </div>
            <div className="cta-buttons mt-6">
              <button className="btn btn-success text-lg">
                Start Pro Plan - $79/month
              </button>
              <button className="btn btn-secondary text-lg">
                Schedule Consultation
              </button>
            </div>
            <p className="text-sm mt-4 text-gray-600">Serious athletes only. Application required.</p>
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

        .training-type, .nutrition-phase, .coaching-feature {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
          border-left: 4px solid #059669;
        }

        .program-details ul, .nutrition-list, .coaching-feature ul {
          list-style: none;
          margin-top: 1rem;
        }

        .program-details li, .nutrition-list li, .coaching-feature li {
          padding: 0.5rem 0;
          color: #64748b;
          border-bottom: 1px solid #e2e8f0;
        }

        .advanced-techniques, .supplement-protocols {
          margin-top: 2rem;
          padding: 2rem;
          background: #f0f9ff;
          border-radius: 8px;
        }

        .technique, .supplement-category {
          padding: 1rem;
          background: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .technique ul, .supplement-category ul {
          list-style: none;
          margin-top: 0.5rem;
        }

        .technique li, .supplement-category li {
          padding: 0.25rem 0;
          color: #64748b;
          font-size: 0.9rem;
        }

        .competition-prep {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .timeline-item {
          padding: 1rem;
          background: #f8fafc;
          border-radius: 6px;
          border-left: 3px solid #059669;
        }

        .posing-training {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .posing-training ul {
          list-style: none;
        }

        .posing-training li {
          padding: 0.5rem 0;
          color: #64748b;
          border-bottom: 1px solid #e2e8f0;
        }

        .cta-card {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
          color: white;
        }

        .testimonial {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .competition-prep {
            grid-template-columns: 1fr;
          }
          
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
