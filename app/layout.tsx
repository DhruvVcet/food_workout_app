import Navigation from '../components/Navigation'
import './globals.css'

export const metadata = {
  title: 'FitLife Pro - Your Complete Fitness & Nutrition App',
  description: 'Comprehensive fitness and nutrition plans for everyone - from beginners to bodybuilders, kids to pregnant women.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3 className="gradient-text font-bold text-xl mb-4">FitLife Pro</h3>
                <p>Your complete fitness and nutrition companion for a healthier lifestyle.</p>
              </div>
              <div className="footer-section">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="footer-links">
                  <a href="/plans">Plans</a>
                  <a href="/exercises">Exercises</a>
                  <a href="/specialized">Specialized</a>
                  <a href="/social">Social Hub</a>
                </div>
              </div>
              <div className="footer-section">
                <h4 className="font-semibold mb-4">Contact</h4>
                <p>Email: info@fitlifepro.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 FitLife Pro. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <style jsx>{`
          .footer {
            background: #1e293b;
            color: white;
            padding: 3rem 0 1rem;
            margin-top: 4rem;
          }
          .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .footer-links a {
            color: #94a3b8;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-links a:hover {
            color: white;
          }
          .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 1rem;
            text-align: center;
            color: #94a3b8;
          }
        `}</style>
      </body>
    </html>
  )
}
