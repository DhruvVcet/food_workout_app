export default function FreePlanPage() {
  return (
    <div className="free-plan-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Free Fitness Plan</h1>
          <p className="text-xl mb-8">Stay fit at home with simple exercises and healthy cooking tips</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-2">
            {/* Home Workouts */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">🏠 Home Workouts</h2>
              
              <div className="workout-section">
                <h3 className="text-xl font-semibold mb-4">Daily 20-Minute Routine</h3>
                <div className="exercise-list">
                  <div className="exercise-item">
                    <h4 className="font-semibold">Warm-up (5 minutes)</h4>
                    <ul>
                      <li>• Jumping jacks - 2 minutes</li>
                      <li>• Arm circles - 1 minute</li>
                      <li>• High knees - 1 minute</li>
                      <li>• Bodyweight squats - 1 minute</li>
                    </ul>
                  </div>
                  
                  <div className="exercise-item">
                    <h4 className="font-semibold">Main Workout (12 minutes)</h4>
                    <ul>
                      <li>• Push-ups - 3 sets of 10-15 reps</li>
                      <li>• Squats - 3 sets of 15-20 reps</li>
                      <li>• Plank hold - 3 sets of 30-60 seconds</li>
                      <li>• Lunges - 3 sets of 10 per leg</li>
                      <li>• Mountain climbers - 3 sets of 20</li>
                    </ul>
                  </div>
                  
                  <div className="exercise-item">
                    <h4 className="font-semibold">Cool Down (3 minutes)</h4>
                    <ul>
                      <li>• Forward fold stretch - 1 minute</li>
                      <li>• Shoulder stretches - 1 minute</li>
                      <li>• Deep breathing - 1 minute</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Healthy Cooking at Home */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 gradient-text">🍳 Healthy Cooking at Home</h2>
              
              <div className="cooking-section">
                <h3 className="text-xl font-semibold mb-4">Essential Cooking Tips</h3>
                
                <div className="tip-category">
                  <h4 className="font-semibold text-lg mb-3">🥗 Meal Prep Basics</h4>
                  <ul className="tip-list">
                    <li>• Prepare proteins in bulk (grilled chicken, baked fish, beans)</li>
                    <li>• Cook grains once a week (brown rice, quinoa, oats)</li>
                    <li>• Wash and chop vegetables for easy access</li>
                    <li>• Use glass containers for portion control</li>
                  </ul>
                </div>

                <div className="tip-category">
                  <h4 className="font-semibold text-lg mb-3">🥘 Quick Healthy Meals</h4>
                  <ul className="tip-list">
                    <li>• Stir-fry: vegetables + protein + whole grains</li>
                    <li>• Smoothie bowls: fruits + yogurt + nuts</li>
                    <li>• Sheet pan meals: protein + vegetables + olive oil</li>
                    <li>• Salad jars: dressing + vegetables + protein + greens</li>
                  </ul>
                </div>

                <div className="tip-category">
                  <h4 className="font-semibold text-lg mb-3">🛒 Smart Shopping</h4>
                  <ul className="tip-list">
                    <li>• Shop the perimeter of the store first</li>
                    <li>• Buy seasonal vegetables for better nutrition</li>
                    <li>• Choose whole grains over refined options</li>
                    <li>• Stock up on healthy pantry staples</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Meal Plan */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📅 Sample Weekly Meal Plan</h2>
            
            <div className="meal-plan-grid">
              <div className="meal-day">
                <h3 className="font-bold text-lg mb-3">Monday</h3>
                <div className="meals">
                  <p><strong>Breakfast:</strong> Oatmeal with berries and nuts</p>
                  <p><strong>Lunch:</strong> Grilled chicken salad with quinoa</p>
                  <p><strong>Dinner:</strong> Baked salmon with roasted vegetables</p>
                  <p><strong>Snack:</strong> Greek yogurt with honey</p>
                </div>
              </div>

              <div className="meal-day">
                <h3 className="font-bold text-lg mb-3">Tuesday</h3>
                <div className="meals">
                  <p><strong>Breakfast:</strong> Smoothie bowl with spinach and fruits</p>
                  <p><strong>Lunch:</strong> Lentil soup with whole grain bread</p>
                  <p><strong>Dinner:</strong> Stir-fried tofu with brown rice</p>
                  <p><strong>Snack:</strong> Apple with almond butter</p>
                </div>
              </div>

              <div className="meal-day">
                <h3 className="font-bold text-lg mb-3">Wednesday</h3>
                <div className="meals">
                  <p><strong>Breakfast:</strong> Avocado toast with poached egg</p>
                  <p><strong>Lunch:</strong> Turkey and vegetable wrap</p>
                  <p><strong>Dinner:</strong> Grilled chicken with sweet potato</p>
                  <p><strong>Snack:</strong> Mixed nuts and dried fruits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Guidelines */}
          <div className="card mt-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">📊 Simple Nutrition Guidelines</h2>
            
            <div className="grid grid-2">
              <div className="nutrition-guide">
                <h3 className="text-xl font-semibold mb-4">🥤 Hydration</h3>
                <ul>
                  <li>• Drink 8-10 glasses of water daily</li>
                  <li>• Start your day with a glass of water</li>
                  <li>• Add lemon or cucumber for flavor</li>
                  <li>• Limit sugary drinks and sodas</li>
                </ul>
              </div>

              <div className="nutrition-guide">
                <h3 className="text-xl font-semibold mb-4">🍽️ Portion Control</h3>
                <ul>
                  <li>• Use smaller plates to control portions</li>
                  <li>• Fill half your plate with vegetables</li>
                  <li>• Quarter plate for lean protein</li>
                  <li>• Quarter plate for whole grains</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weekly Challenge */}
          <div className="card mt-8 text-center challenge-card">
            <h2 className="text-2xl font-bold mb-6 gradient-text">🏆 This Week's Challenge</h2>
            <div className="challenge-content">
              <h3 className="text-xl font-semibold mb-4">Cook 5 Meals at Home</h3>
              <p className="mb-4">Challenge yourself to cook at least 5 healthy meals at home this week using our recipes and tips.</p>
              <div className="challenge-benefits">
                <p><strong>Benefits:</strong></p>
                <ul>
                  <li>✅ Save money on food expenses</li>
                  <li>✅ Control ingredients and portions</li>
                  <li>✅ Develop healthy cooking habits</li>
                  <li>✅ Improve your culinary skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .exercise-list, .cooking-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .exercise-item, .tip-category {
          padding: 1rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .exercise-item ul, .tip-list {
          list-style: none;
          margin-top: 0.5rem;
        }

        .exercise-item li, .tip-list li {
          padding: 0.25rem 0;
          color: #64748b;
        }

        .meal-plan-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .meal-day {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 8px;
        }

        .meals p {
          margin-bottom: 0.5rem;
          color: #64748b;
        }

        .nutrition-guide ul {
          list-style: none;
        }

        .nutrition-guide li {
          padding: 0.5rem 0;
          color: #64748b;
        }

        .challenge-card {
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
          border: 2px solid #667eea20;
        }

        .challenge-benefits ul {
          list-style: none;
          text-align: left;
          display: inline-block;
        }

        .challenge-benefits li {
          padding: 0.25rem 0;
          color: #059669;
        }

        @media (max-width: 768px) {
          .meal-plan-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
