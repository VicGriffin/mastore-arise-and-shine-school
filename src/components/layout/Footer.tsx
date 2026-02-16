import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Children\'s Home', href: '/childrens-home' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const programs = [
    { name: 'CBC Curriculum', href: '/academics' },
    { name: 'Co-curricular Activities', href: '/academics#activities' },
    { name: 'Children\'s Home Support', href: '/childrens-home' },
    { name: 'Sponsorship Program', href: '/childrens-home#sponsorship' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-600 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all">Mastore School</h3>
                <p className="text-sm text-gray-400">Arise and Shine</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing excellence, character, and hope in Juja Sub County. 
              Providing quality education and a caring home for children.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center hover:from-green-500 hover:to-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-200 text-sm relative group hover-lift"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-200 text-sm relative group hover-lift"
                  >
                    <span className="relative">
                      {program.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group hover-lift p-2 rounded-lg transition-all">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-300">Juja Sub County</p>
                  <p className="text-sm text-gray-300">Kiambu County, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300">+254 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300">info@mastoreschool.ac.ke</p>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all">
                <Clock className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-gray-300">Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p className="text-sm text-gray-300">Sat: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Mastore Arise and Shine School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-all duration-200 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-all duration-200 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
