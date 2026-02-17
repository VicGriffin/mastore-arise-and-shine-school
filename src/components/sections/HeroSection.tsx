import { ArrowRight, BookOpen, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const HeroSection = () => {
  return (
    <section className="relative h-screen sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/laboratory.jfif")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#479FBE]/70 via-[#9E8016]/60 to-[#3C3B32]/70"></div>
        </div>
      </div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6ab3d4] to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#b8a052] to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-[#479FBE] to-transparent rounded-full blur-3xl opacity-20" style={{animation: 'float 5s ease-in-out infinite', animationDelay: '2s'}}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-currentColor' stroke-width='0.5' stroke='%23479FBE'%3e%3cpath d='M30 30c0 16.569 13.431 30 30 30s-30-13.431-30-30-13.431-30-30-30zm0 2c15.514 0 28 12.486 28 28s-12.486-28-28-28-12.486-28-28-28zm0 2c14.459 0 26 11.541 26 26s-11.541-26-26-26-11.541-26-26-26zm0 2c13.404 0 24 10.596 24 24s-10.596-24-24-24-10.596-24-24-24zm0 2c12.349 0 22.364 9.636 22.364 22.364s-9.636-22.364-22.364-22.364-9.636-22.364-22.364z'/%3e%3c/g%3e%3c/svg%3e")`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-8 sm:py-0">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fadeInDown mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#479FBE] to-[#9E8016] text-white rounded-full text-sm font-semibold mb-6">
              Welcome to Excellence
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeInUp">
            Welcome to <span className="bg-gradient-to-r from-[#E1EAE9] via-[#6ab3d4] to-[#479FBE] bg-clip-text text-transparent">Mastore Arise and Shine School</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-2xl text-[#FAFBF7] mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-1">
            Where every child discovers their potential and shines brightly in their unique way
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fadeInUp stagger-2">
            <Link href="/about">
              <Button variant="primary" size="lg" className="group hover-lift bg-gradient-to-r from-[#479FBE] to-[#9E8016] hover:from-[#9E8016] hover:to-[#3C3B32] text-white hover:shadow-lg hover:shadow-[#479FBE]/30">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg" className="hover-lift border-2 border-[#E1EAE9] text-[#E1EAE9] hover:border-[#479FBE] hover:text-[#479FBE] hover:shadow-lg hover:shadow-[#479FBE]/30">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Stats with Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fadeInUp stagger-1 group hover-scale-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#479FBE] to-[#2d6a8f] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#479FBE]/50 transition-all duration-300">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">10+ Years</h3>
              <p className="text-sm sm:text-base text-gray-600">of Excellence</p>
            </div>

            <div className="text-center animate-fadeInUp stagger-2 group hover-scale-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#9E8016] to-[#6d5a0f] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#9E8016]/50 transition-all duration-300">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">500+</h3>
              <p className="text-sm sm:text-base text-gray-600">Students Enrolled</p>
            </div>

            <div className="text-center animate-fadeInUp stagger-3 group hover-scale-lg">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3C3B32] to-[#5a5955] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg group-hover:shadow-[#3C3B32]/50 transition-all duration-300">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">95%</h3>
              <p className="text-sm sm:text-base text-gray-600">KCPE Pass Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-[#479FBE] rounded-full flex justify-center hover-glow">
          <div className="w-1 h-2 bg-[#479FBE] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
