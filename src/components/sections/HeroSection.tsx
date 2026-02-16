import { ArrowRight, BookOpen, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill='currentColor' stroke-width='0.5' stroke='%23059669'%3e%3cpath d='M30 30c0 16.569 13.431 30 30 30s-30-13.431-30-30-13.431-30-30-30zm0 2c15.514 0 28 12.486 28 28s-12.486-28-28-28-12.486-28-28-28zm0 2c14.459 0 26 11.541 26 26s-11.541-26-26-26-11.541-26-26-26zm0 2c13.404 0 24 10.596 24 24s-10.596-24-24-24-10.596-24-24-24zm0 2c12.349 0 22.364 9.636 22.364 22.364s-9.636-22.364-22.364-22.364-9.636-22.364-22.364z'/%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-green-600">Mastore</span> Arise and Shine
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where every child discovers their potential and shines brightly in their unique way
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/about">
              <Button variant="primary" size="lg" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Years</h3>
              <p className="text-gray-600">of Excellence</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">KCPE Pass Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
