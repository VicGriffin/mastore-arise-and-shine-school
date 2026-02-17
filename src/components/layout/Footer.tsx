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
    <footer className="bg-gradient-to-b from-[#3C3B32] to-[#2a2925] text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#479FBE] to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#9E8016] to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4 group">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#479FBE] to-[#2d6a8f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#6ab3d4] group-hover:to-[#9E8016] group-hover:bg-clip-text transition-all">Mastore Arise and Shine</h3>
                <p className="text-sm text-gray-400">School of Excellence</p>
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
                  className="w-10 h-10 bg-gradient-to-br from-[#479FBE] to-[#6ab3d4] rounded-full flex items-center justify-center hover:from-[#9E8016] hover:to-[#b8a052] transition-all duration-300 hover:shadow-lg hover:shadow-[#479FBE]/50 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#6ab3d4] to-[#9E8016] bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#479FBE] transition-all duration-200 text-sm relative group hover-lift"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#479FBE] to-[#9E8016] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#6ab3d4] to-[#9E8016] bg-clip-text text-transparent">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-[#479FBE] transition-all duration-200 text-sm relative group hover-lift"
                  >
                    <span className="relative">
                      {program.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#479FBE] to-[#9E8016] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-[#6ab3d4] to-[#9E8016] bg-clip-text text-transparent">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group hover-lift p-2 rounded-lg transition-all bg-white/5 hover:bg-white/10">
                <MapPin className="w-5 h-5 text-[#479FBE] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-white/90">Juja Sub County</p>
                  <p className="text-sm text-white/80">Kiambu County, Kenya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all bg-white/5 hover:bg-white/10">
                <Phone className="w-5 h-5 text-[#479FBE] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-white/90">+254 XXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all bg-white/5 hover:bg-white/10">
                <Mail className="w-5 h-5 text-[#479FBE] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-white/90">info@mastoreschool.ac.ke</p>
              </div>
              <div className="flex items-center space-x-3 group hover-lift p-2 rounded-lg transition-all bg-white/5 hover:bg-white/10">
                <Clock className="w-5 h-5 text-[#479FBE] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm text-white/90">Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p className="text-sm text-white/90">Sat: 8:00 AM - 1:00 PM</p>
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
              <Link href="/privacy" className="text-gray-400 hover:text-[#479FBE] transition-all duration-200 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#479FBE] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#479FBE] transition-all duration-200 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#479FBE] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
