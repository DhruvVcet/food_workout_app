'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span className="gradient-text font-bold text-2xl">FitLife Pro</span>
          </Link>
          
          <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/plans" className="nav-link">Plans</Link>
            <Link href="/exercises" className="nav-link">Exercises</Link>
            <Link href="/specialized" className="nav-link">Specialized</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="btn btn-secondary">Login</Link>
            <Link href="/signup" className="btn btn-primary">Sign Up</Link>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: #64748b;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #667eea;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
        }

        .mobile-menu-btn span {
          display: block;
          width: 100%;
          height: 2px;
          background: #64748b;
          margin: 3px 0;
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-actions {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }
      `}</style>
    </nav>
  )
}
