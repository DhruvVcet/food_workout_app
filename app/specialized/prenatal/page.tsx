export default function PrenatalFitnessPage() {
  return (
    <div className="prenatal-fitness-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">🤱 Prenatal Fitness Programs</h1>
          <p className="text-xl mb-8">Safe, effective, and nurturing fitness routines for expecting mothers</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Trimester Programs */}
          <div className="trimester-programs mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Programs by Trimester</span>
            </h2>
            
            <div className="grid grid-3">
              <div className="card trimester">
                <h3 className="text-xl font-bold mb-4">🌱 First Trimester (Weeks 1-12)</h3>
                <div className="trimester-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Establishing safe exercise habits</li>
                    <li>• Managing fatigue and nausea</li>
                    <li>• Maintaining current fitness level</li>
                    <li>• Core stability foundation</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Recommended Exercises:</h4>
                  <ul>
                    <li>• Low-impact cardio (walking, swimming)</li>
                    <li>• Light strength training</li>
                    <li>• Gentle yoga and stretching</li>
                    <li>• Breathing exercises</li>
                  </ul>

                  <h4 className="font-semibold mb-2 mt-4">Safety Notes:</h4>
                  <ul className="safety-notes">
                    <li>• Avoid overheating</li>
                    <li>• Stay well hydrated</li>
                    <li>• Listen to your body</li>
                    <li>• Avoid contact sports</li>
                  </ul>
                </div>
              </div>

              <div className="card trimester">
                <h3 className="text-xl font-bold mb-4">🌸 Second Trimester (Weeks 13-26)</h3>
                <div className="trimester-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Building strength for growing baby</li>
                    <li>• Maintaining cardiovascular health</li>
                    <li>• Adapting to body changes</li>
                    <li>• Posture improvement</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Recommended Exercises:</h4>
                  <ul>
                    <li>• Modified strength training</li>
                    <li>• Swimming and water aerobics</li>
                    <li>• Prenatal yoga classes</li>
                    <li>• Stationary cycling</li>
                  </ul>

                  <h4 className="font-semibold mb-2 mt-4">Safety Notes:</h4>
                  <ul className="safety-notes">
                    <li>• Avoid lying flat on back</li>
                    <li>• Monitor heart rate</li>
                    <li>• Modify as belly grows</li>
                    <li>• Focus on form over intensity</li>
                  </ul>
                </div>
              </div>

              <div className="card trimester">
                <h3 className="text-xl font-bold mb-4">🌺 Third Trimester (Weeks 27-40)</h3>
                <div className="trimester-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Preparing for labor and delivery</li>
                    <li>• Maintaining comfort and mobility</li>
                    <li>• Managing back pain and swelling</li>
                    <li>• Building stamina for childbirth</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Recommended Exercises:</h4>
                  <ul>
                    <li>• Walking and gentle cardio</li>
                    <li>• Prenatal stretching routines</li>
                    <li>• Birthing ball exercises</li>
                    <li>• Pelvic floor strengthening</li>
                  </ul>

                  <h4 className="font-semibold mb-2 mt-4">Safety Notes:</h4>
                  <ul className="safety-notes">
                    <li>• Reduce exercise intensity</li>
                    <li>• Avoid balance challenges</li>
                    <li>• Take frequent breaks</li>
                    <li>• Stop if uncomfortable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Safe Exercises */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">✅ Safe Prenatal Exercises</h2>
            
            <div className="grid grid-2">
              <div className="exercise-category">
                <h3 className="text-xl font-semibold mb-4">Cardiovascular Exercises</h3>
                
                <div className="exercise">
                  <h4 className="font-semibold">Walking</h4>
                  <p className="mb-2">Perfect low-impact exercise throughout pregnancy:</p>
                  <ul>
                    <li>• Start with 15-20 minutes daily</li>
                    <li>• Gradually increase duration</li>
                    <li>• Maintain conversational pace</li>
                    <li>• Wear supportive shoes</li>
                  </ul>
                </div>

                <div className="exercise">
                  <h4 className="font-semibold">Swimming</h4>
                  <p className="mb-2">Excellent full-body, low-impact workout:</p>
                  <ul>
                    <li>• Reduces joint stress</li>
                    <li>• Helps with swelling</li>
                    <li>• Supports growing belly</li>
                    <li>• Improves circulation</li>
                  </ul>
                </div>

                <div className="exercise">
                  <h4 className="font-semibold">Stationary Cycling</h4>
                  <p className="mb-2">Safe cardio option with back support:</p>
                  <ul>
                    <li>• Use recumbent bike if available</li>
                    <li>• Moderate intensity only</li>
                    <li>• Stop if feeling dizzy</li>
                    <li>• Adjust seat for comfort</li>
                  </ul>
                </div>
              </div>

              <div className="exercise-category">
                <h3 className="text-xl font-semibold mb-4">Strength Training</h3>
                
                <div className="exercise">
                  <h4 className="font-semibold">Modified Squats</h4>
                  <p className="mb-2">Great for leg strength and pelvic floor:</p>
                  <ul>
                    <li>• Use chair for support if needed</li>
                    <li>• Keep knees behind toes</li>
                    <li>• Lower only as comfortable</li>
                    <li>• Focus on proper form</li>
                  </ul>
                </div>

                <div className="exercise">
                  <h4 className="font-semibold">Wall Push-ups</h4>
                  <p className="mb-2">Upper body strength without lying down:</p>
                  <ul>
                    <li>• Stand arm's length from wall</li>
                    <li>• Place hands flat against wall</li>
                    <li>• Push away and return slowly</li>
                    <li>• Adjust angle for difficulty</li>
                  </ul>
                </div>

                <div className="exercise">
                  <h4 className="font-semibold">Side-lying Leg Lifts</h4>
                  <p className="mb-2">Safe way to strengthen hips and glutes:</p>
                  <ul>
                    <li>• Lie on side with support</li>
                    <li>• Lift top leg slowly</li>
                    <li>• Keep movement controlled</li>
                    <li>• Switch sides equally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prenatal Yoga */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🧘‍♀️ Prenatal Yoga Sequence</h2>
            
            <div className="yoga-sequence">
              <div className="sequence-section">
                <h3 className="text-xl font-semibold mb-4">15-Minute Daily Routine</h3>
                
                <div className="pose-grid">
                  <div className="pose">
                    <h4 className="font-semibold">Cat-Cow Stretch (2 minutes)</h4>
                    <p>Relieves back tension and improves spinal mobility</p>
                    <ul>
                      <li>• Start on hands and knees</li>
                      <li>• Arch and round spine slowly</li>
                      <li>• Breathe deeply with movement</li>
                    </ul>
                  </div>

                  <div className="pose">
                    <h4 className="font-semibold">Modified Child's Pose (2 minutes)</h4>
                    <p>Gentle stretch for hips and back</p>
                    <ul>
                      <li>• Kneel with knees wide apart</li>
                      <li>• Rest forearms on floor</li>
                      <li>• Make room for baby bump</li>
                    </ul>
                  </div>

                  <div className="pose">
                    <h4 className="font-semibold">Side Stretch (2 minutes each side)</h4>
                    <p>Opens side body and improves breathing</p>
                    <ul>
                      <li>• Sit cross-legged comfortably</li>
                      <li>• Reach one arm overhead</li>
                      <li>• Lean gently to opposite side</li>
                    </ul>
                  </div>

                  <div className="pose">
                    <h4 className="font-semibold">Gentle Twists (2 minutes)</h4>
                    <p>Improves spinal mobility and digestion</p>
                    <ul>
                      <li>• Sit with legs extended</li>
                      <li>• Twist gently from waist</li>
                      <li>• Keep movements small</li>
                    </ul>
                  </div>

                  <div className="pose">
                    <h4 className="font-semibold">Legs Up the Wall (5 minutes)</h4>
                    <p>Reduces swelling and promotes relaxation</p>
                    <ul>
                      <li>• Lie on side near wall</li>
                      <li>• Swing legs up wall</li>
                      <li>• Rest with pillow under head</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breathing Techniques */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🌬️ Breathing & Relaxation</h2>
            
            <div className="grid grid-2">
              <div className="breathing-technique">
                <h3 className="text-xl font-semibold mb-4">Birth Preparation Breathing</h3>
                
                <div className="technique">
                  <h4 className="font-semibold">Deep Belly Breathing</h4>
                  <p className="mb-2">Promotes relaxation and oxygenation:</p>
                  <ul>
                    <li>• Place one hand on chest, one on belly</li>
                    <li>• Breathe so belly hand moves more</li>
                    <li>• Inhale for 4 counts, exhale for 6</li>
                    <li>• Practice 5-10 minutes daily</li>
                  </ul>
                </div>

                <div className="technique">
                  <h4 className="font-semibold">Square Breathing</h4>
                  <p className="mb-2">Helps manage stress and anxiety:</p>
                  <ul>
                    <li>• Inhale for 4 counts</li>
                    <li>• Hold for 4 counts</li>
                    <li>• Exhale for 4 counts</li>
                    <li>• Hold empty for 4 counts</li>
                  </ul>
                </div>
              </div>

              <div className="relaxation-techniques">
                <h3 className="text-xl font-semibold mb-4">Relaxation Methods</h3>
                
                <div className="technique">
                  <h4 className="font-semibold">Progressive Muscle Relaxation</h4>
                  <p className="mb-2">Releases physical tension:</p>
                  <ul>
                    <li>• Tense and release muscle groups</li>
                    <li>• Start with toes, work upward</li>
                    <li>• Hold tension for 5 seconds</li>
                    <li>• Notice the contrast</li>
                  </ul>
                </div>

                <div className="technique">
                  <h4 className="font-semibold">Visualization</h4>
                  <p className="mb-2">Mental preparation for birth:</p>
                  <ul>
                    <li>• Imagine positive birth experience</li>
                    <li>• Practice coping with contractions</li>
                    <li>• Visualize meeting your baby</li>
                    <li>• Use calming imagery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🥗 Prenatal Nutrition</h2>
            
            <div className="grid grid-2">
              <div className="nutrition-section">
                <h3 className="text-xl font-semibold mb-4">Essential Nutrients</h3>
                
                <div className="nutrient">
                  <h4 className="font-semibold">Folic Acid</h4>
                  <p>Prevents birth defects, supports baby's development</p>
                  <ul>
                    <li>• Leafy greens, fortified cereals</li>
                    <li>• Citrus fruits, beans</li>
                    <li>• 400-600 mcg daily</li>
                  </ul>
                </div>

                <div className="nutrient">
                  <h4 className="font-semibold">Iron</h4>
                  <p>Prevents anemia, supports increased blood volume</p>
                  <ul>
                    <li>• Lean meats, poultry, fish</li>
                    <li>• Spinach, lentils, quinoa</li>
                    <li>• 27 mg daily</li>
                  </ul>
                </div>

                <div className="nutrient">
                  <h4 className="font-semibold">Calcium</h4>
                  <p>Builds baby's bones and teeth</p>
                  <ul>
                    <li>• Dairy products, fortified foods</li>
                    <li>• Almonds, sardines, kale</li>
                    <li>• 1000 mg daily</li>
                  </ul>
                </div>
              </div>

              <div className="meal-planning">
                <h3 className="text-xl font-semibold mb-4">Healthy Meal Ideas</h3>
                
                <div className="meal-category">
                  <h4 className="font-semibold">Pre-Workout Snacks</h4>
                  <ul>
                    <li>• Greek yogurt with berries</li>
                    <li>• Apple slices with almond butter</li>
                    <li>• Whole grain toast with avocado</li>
                    <li>• Smoothie with spinach and banana</li>
                  </ul>
                </div>

                <div className="meal-category">
                  <h4 className="font-semibold">Post-Workout Recovery</h4>
                  <ul>
                    <li>• Chocolate milk</li>
                    <li>• Trail mix with dried fruit</li>
                    <li>• Hummus with vegetables</li>
                    <li>• Protein smoothie bowl</li>
                  </ul>
                </div>

                <div className="meal-category">
                  <h4 className="font-semibold">Hydration Tips</h4>
                  <ul>
                    <li>• Drink water before feeling thirsty</li>
                    <li>• Add lemon or cucumber for flavor</li>
                    <li>• Monitor urine color for hydration</li>
                    <li>• Increase intake during exercise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Postpartum Transition */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🌈 Postpartum Recovery Plan</h2>
            
            <div className="recovery-phases">
              <div className="phase">
                <h3 className="text-xl font-semibold mb-3">First 6 Weeks</h3>
                <ul>
                  <li>• Focus on healing and rest</li>
                  <li>• Gentle walking as cleared by doctor</li>
                  <li>• Breathing exercises and gentle stretches</li>
                  <li>• Pelvic floor rehabilitation</li>
                  <li>• Nutrition for breastfeeding</li>
                </ul>
              </div>

              <div className="phase">
                <h3 className="text-xl font-semibold mb-3">6-12 Weeks</h3>
                <ul>
                  <li>• Gradual return to exercise</li>
                  <li>• Core rehabilitation program</li>
                  <li>• Low-impact cardiovascular activities</li>
                  <li>• Progressive strength training</li>
                  <li>• Mental health support</li>
                </ul>
              </div>

              <div className="phase">
                <h3 className="text-xl font-semibold mb-3">3+ Months</h3>
                <ul>
                  <li>• Return to pre-pregnancy activities</li>
                  <li>• Advanced core strengthening</li>
                  <li>• Running and high-impact exercise</li>
                  <li>• Strength training progression</li>
                  <li>• Long-term fitness goals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .trimester {
          border-left: 4px solid #ec4899;
        }

        .trimester-content ul {
          list-style: none;
        }

        .trimester-content li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .safety-notes {
          color: #dc2626;
        }

        .exercise-category {
          padding: 1.5rem;
          background: #fef7ff;
          border-radius: 8px;
        }

        .exercise {
          margin-bottom: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .exercise ul {
          list-style: none;
          margin-top: 0.5rem;
        }

        .exercise li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .pose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .pose {
          padding: 1.5rem;
          background: #f0f9ff;
          border-radius: 8px;
          border-left: 4px solid #0ea5e9;
        }

        .pose ul {
          list-style: none;
          margin-top: 0.5rem;
        }

        .pose li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .technique, .nutrient, .meal-category {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: #f8fafc;
          border-radius: 6px;
        }

        .technique ul, .nutrient ul, .meal-category ul {
          list-style: none;
          margin-top: 0.5rem;
        }

        .technique li, .nutrient li, .meal-category li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .recovery-phases {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .phase {
          padding: 1.5rem;
          background: #f0fdf4;
          border-radius: 8px;
          border-left: 4px solid #22c55e;
        }

        .phase ul {
          list-style: none;
        }

        .phase li {
          padding: 0.5rem 0;
          color: #64748b;
          border-bottom: 1px solid #e2e8f0;
        }
      `}</style>
    </div>
  )
}
