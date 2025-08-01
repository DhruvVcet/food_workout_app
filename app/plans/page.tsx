import Link from 'next/link'

export default function PlansPage() {
  return (
    <div className="plans-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6">Choose Your Fitness Plan</h1>
          <p className="text-xl mb-8">Select the perfect plan that matches your fitness goals and lifestyle</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-3">
            <div className="card text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Free Plan</h2>
              <p className="text-3xl font-bold mb-4">$0/month</p>
              <p className="mb-6">Perfect for beginners and home fitness enthusiasts</p>
              <Link href="/plans/free" className="btn btn-primary">
                View Details
              </Link>
            </div>
            
            <div className="card text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Premium Plan</h2>
              <p className="text-3xl font-bold mb-4">$29/month</p>
              <p className="mb-6">Comprehensive fitness and nutrition guidance</p>
              <Link href="/plans/premium" className="btn btn-primary">
                View Details
              </Link>
            </div>
            
            <div className="card text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Pro Builder</h2>
              <p className="text-3xl font-bold mb-4">$79/month</p>
              <p className="mb-6">Advanced bodybuilding and competition prep</p>
              <Link href="/plans/pro" className="btn btn-primary">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
