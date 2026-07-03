import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleHomeClick = (e) => {
    e.preventDefault()
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/')
  }

  const handleNavClick = () => {
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isMenuOpen)
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-neutral-primary w-full border-b border-default relative">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-2 rtl:space-x-reverse z-10"
          >
            <img
              src={logo}
              className="h-8 w-8 flex-shrink-0"
              alt="Fashion Hub logo"
            />
            <span className="text-lg sm:text-xl text-heading font-semibold whitespace-nowrap">
              Fashion Hub
            </span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary transition-colors z-10 cursor-pointer"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="font-medium flex items-center space-x-8">
              <li>
                <Link
                  to="/"
                  onClick={handleHomeClick}
                  className="text-heading hover:text-fg-brand transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="text-heading hover:text-fg-brand transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={handleNavClick}
                  className="text-heading hover:text-fg-brand transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={handleNavClick}
                  className="text-heading hover:text-fg-brand transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="text-heading hover:text-fg-brand transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Outside nav for proper positioning */}
      <div
        id="navbar-menu"
        className={`md:hidden fixed left-0 right-0 top-[57px] bg-neutral-primary border-b border-default shadow-lg z-40 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: isMenuOpen ? '400px' : '0', overflow: 'hidden' }}
      >
        <ul className="flex flex-col p-4 space-y-1">
          <li>
            <Link
              to="/"
              onClick={handleHomeClick}
              className="block py-3 px-4 text-heading rounded-base hover:bg-neutral-secondary-soft transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="block py-3 px-4 text-heading rounded-base hover:bg-neutral-secondary-soft transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={handleNavClick}
              className="block py-3 px-4 text-heading rounded-base hover:bg-neutral-secondary-soft transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              onClick={handleNavClick}
              className="block py-3 px-4 text-heading rounded-base hover:bg-neutral-secondary-soft transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block py-3 px-4 text-heading rounded-base hover:bg-neutral-secondary-soft transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-[57px] bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
