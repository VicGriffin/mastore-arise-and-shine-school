'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Children\'s Home', href: '/childrens-home' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-primary-blue-green text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                +254 XXX XXX XXX
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@mastoreschool.ac.ke
              </span>
            </div>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Juja Sub County, Kiambu County
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src="/LOGO/SCHOOL LOGO.jpg" 
                alt="Mastore Arise and Shine School Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Mastore Arise and Shine</h1>
              <p className="text-xs text-gray-600">School of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-alabaster-grey hover:text-primary-blue-green font-medium transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue-green to-secondary-dark-goldenrod group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-white bg-gradient-to-r from-primary-blue-green to-secondary-dark-goldenrod rounded-lg hover:from-secondary-dark-goldenrod hover:to-accent-charcoal-brown transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary-blue-green/30"
            >
              Contact Us
            </Link>
            <Link
              href="/childrens-home"
              className="px-4 py-2 text-white bg-gradient-to-r from-accent-porcelain to-accent-charcoal-brown rounded-lg hover:from-accent-charcoal-brown hover:to-neutral-alabaster-grey transition-all duration-300 font-medium hover:shadow-lg hover:shadow-accent-porcelain/30"
            >
              Support Children
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-alabaster-grey transition-colors duration-200 text-neutral-alabaster-grey hover:text-primary-blue-green"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-alabaster-grey hover:text-primary-blue-green font-medium px-2 py-1 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="px-4 py-2 text-white bg-gradient-to-r from-primary-blue-green to-secondary-dark-goldenrod rounded-lg hover:from-secondary-dark-goldenrod hover:to-accent-charcoal-brown transition-all duration-300 font-medium hover:shadow-lg hover:shadow-primary-blue-green/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/childrens-home"
                  className="px-4 py-2 text-white bg-gradient-to-r from-accent-porcelain to-accent-charcoal-brown rounded-lg hover:from-accent-charcoal-brown hover:to-neutral-alabaster-grey transition-all duration-300 font-medium hover:shadow-lg hover:shadow-accent-porcelain/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support Children
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
