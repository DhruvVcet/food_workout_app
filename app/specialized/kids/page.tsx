export default function KidsFitnessPage() {
  return (
    <div className="kids-fitness-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">👶 Kids Fitness Programs</h1>
          <p className="text-xl mb-8">Making fitness fun, safe, and developmentally appropriate for children ages 4-16</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Age Groups */}
          <div className="age-groups mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text">Programs by Age Group</span>
            </h2>
            
            <div className="grid grid-3">
              <div className="card age-group">
                <h3 className="text-xl font-bold mb-4">🌟 Early Childhood (4-6 years)</h3>
                <div className="age-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Basic motor skills development</li>
                    <li>• Balance and coordination</li>
                    <li>• Following simple instructions</li>
                    <li>• Social play and sharing</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Sample Activities:</h4>
                  <ul>
                    <li>• Animal walks (bear crawls, frog jumps)</li>
                    <li>• Musical movement games</li>
                    <li>• Simple obstacle courses</li>
                    <li>• Balloon or ball play</li>
                  </ul>
                </div>
              </div>

              <div className="card age-group">
                <h3 className="text-xl font-bold mb-4">⚡ School Age (7-11 years)</h3>
                <div className="age-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Fundamental movement skills</li>
                    <li>• Team cooperation</li>
                    <li>• Rule-based activities</li>
                    <li>• Strength and endurance building</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Sample Activities:</h4>
                  <ul>
                    <li>• Modified sports drills</li>
                    <li>• Bodyweight strength exercises</li>
                    <li>• Relay races and team challenges</li>
                    <li>• Flexibility and yoga poses</li>
                  </ul>
                </div>
              </div>

              <div className="card age-group">
                <h3 className="text-xl font-bold mb-4">🚀 Adolescents (12-16 years)</h3>
                <div className="age-content">
                  <h4 className="font-semibold mb-2">Focus Areas:</h4>
                  <ul>
                    <li>• Advanced strength training</li>
                    <li>• Sport-specific skills</li>
                    <li>• Goal setting and progression</li>
                    <li>• Nutrition education</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-2 mt-4">Sample Activities:</h4>
                  <ul>
                    <li>• Weight training with proper form</li>
                    <li>• Advanced cardio workouts</li>
                    <li>• Competitive sports training</li>
                    <li>• Flexibility and injury prevention</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Activities */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🎮 Fun Movement Games</h2>
            
            <div className="grid grid-2">
              <div className="activity-category">
                <h3 className="text-xl font-semibold mb-4">Indoor Activities</h3>
                
                <div className="activity">
                  <h4 className="font-semibold">Superhero Training</h4>
                  <p className="mb-2">Transform kids into their favorite superheroes with themed exercises:</p>
                  <ul>
                    <li>• Spider-Man crawls (bear crawls)</li>
                    <li>• Superman flying (plank holds)</li>
                    <li>• Hulk smash (jumping jacks)</li>
                    <li>• Wonder Woman lasso (jump rope)</li>
                  </ul>
                </div>

                <div className="activity">
                  <h4 className="font-semibold">Dance Party Workout</h4>
                  <p className="mb-2">High-energy dance routines that improve cardio and coordination:</p>
                  <ul>
                    <li>• Follow-the-leader dance moves</li>
                    <li>• Freeze dance challenges</li>
                    <li>• Musical chairs with exercises</li>
                    <li>• Creative movement expression</li>
                  </ul>
                </div>
              </div>

              <div className="activity-category">
                <h3 className="text-xl font-semibold mb-4">Outdoor Activities</h3>
                
                <div className="activity">
                  <h4 className="font-semibold">Nature Scavenger Hunt</h4>
                  <p className="mb-2">Combine fitness with exploration:</p>
                  <ul>
                    <li>• Running to find hidden objects</li>
                    <li>• Climbing over natural obstacles</li>
                    <li>• Balancing on logs or rocks</li>
                    <li>• Nature photography walks</li>
                  </ul>
                </div>

                <div className="activity">
                  <h4 className="font-semibold">Playground Workouts</h4>
                  <p className="mb-2">Use playground equipment for structured exercise:</p>
                  <ul>
                    <li>• Monkey bar challenges</li>
                    <li>• Slide climbs (going up the slide)</li>
                    <li>• Swing set exercises</li>
                    <li>• Balance beam walking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🛡️ Safety Guidelines for Kids Fitness</h2>
            
            <div className="grid grid-2">
              <div className="safety-section">
                <h3 className="text-xl font-semibold mb-4">General Safety Rules</h3>
                <ul className="safety-list">
                  <li>• Always supervise children during exercise</li>
                  <li>• Ensure adequate hydration throughout activities</li>
                  <li>• Use age-appropriate equipment and modifications</li>
                  <li>• Focus on fun rather than intense competition</li>
                  <li>• Allow for rest breaks as needed</li>
                  <li>• Encourage effort over performance</li>
                </ul>
              </div>

              <div className="safety-section">
                <h3 className="text-xl font-semibold mb-4">Exercise Modifications</h3>
                <ul className="safety-list">
                  <li>• Use bodyweight exercises instead of weights</li>
                  <li>• Shorter duration, higher frequency sessions</li>
                  <li>• Focus on proper form over intensity</li>
                  <li>• Incorporate games to maintain interest</li>
                  <li>• Adapt exercises for different skill levels</li>
                  <li>• Listen to children's feedback and adjust</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Family Workout */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">👨‍👩‍👧‍👦 Family Workout Sessions</h2>
            
            <div className="family-workout">
              <h3 className="text-xl font-semibold mb-4">30-Minute Family Circuit</h3>
              
              <div className="circuit-stations">
                <div className="station">
                  <h4 className="font-semibold">Station 1: Cardio Blast (5 minutes)</h4>
                  <ul>
                    <li>• Family dance off</li>
                    <li>• Follow the leader running</li>
                    <li>• High knees and jumping jacks</li>
                  </ul>
                </div>

                <div className="station">
                  <h4 className="font-semibold">Station 2: Strength Challenge (5 minutes)</h4>
                  <ul>
                    <li>• Family plank competition</li>
                    <li>• Partner sit-ups</li>
                    <li>• Wall sit challenge</li>
                  </ul>
                </div>

                <div className="station">
                  <h4 className="font-semibold">Station 3: Flexibility Fun (5 minutes)</h4>
                  <ul>
                    <li>• Family yoga poses</li>
                    <li>• Partner stretching</li>
                    <li>• Relaxation exercises</li>
                  </ul>
                </div>

                <div className="station">
                  <h4 className="font-semibold">Station 4: Skill Building (5 minutes)</h4>
                  <ul>
                    <li>• Obstacle course creation</li>
                    <li>• Balance challenges</li>
                    <li>• Coordination games</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition for Kids */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🍎 Kids Nutrition Basics</h2>
            
            <div className="grid grid-2">
              <div className="nutrition-tips">
                <h3 className="text-xl font-semibold mb-4">Healthy Eating Habits</h3>
                <ul>
                  <li>• Make half the plate fruits and vegetables</li>
                  <li>• Choose whole grains over refined options</li>
                  <li>• Include lean proteins at each meal</li>
                  <li>• Limit sugary drinks and snacks</li>
                  <li>• Encourage water as the primary beverage</li>
                  <li>• Model good eating behaviors</li>
                </ul>
              </div>

              <div className="kid-friendly-snacks">
                <h3 className="text-xl font-semibold mb-4">Pre/Post Workout Snacks</h3>
                <div className="snack-category">
                  <h4 className="font-semibold">Before Exercise:</h4>
                  <ul>
                    <li>• Banana with small amount of peanut butter</li>
                    <li>• Whole grain crackers with cheese</li>
                    <li>• Small apple slices</li>
                  </ul>
                </div>
                <div className="snack-category">
                  <h4 className="font-semibold">After Exercise:</h4>
                  <ul>
                    <li>• Chocolate milk or yogurt</li>
                    <li>• Trail mix with dried fruits</li>
                    <li>• Smoothie with fruits and vegetables</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
