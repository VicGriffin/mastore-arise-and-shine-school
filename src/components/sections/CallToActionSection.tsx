'use client'

import { Phone, Mail, MapPin, Heart, ArrowRight } from 'lucide-react'
import Button from '@/components/common/Button'
import { useState } from 'react'

const CallToActionSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-300 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to <span className="text-yellow-300 animate-glow-pulse">Transform</span> Your Child&apos;s Future?
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-white/90">
              Join our community of learners where every child is valued, challenged, 
              and empowered to reach their full potential.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: '+254 723 456 789' },
                { icon: Mail, label: 'Email', value: 'info@mastoreschool.ac.ke' },
                { icon: MapPin, label: 'Location', value: 'Juja Sub County, Kiambu' },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift group cursor-pointer animate-fadeInUp"
                  style={{animationDelay: `${(index + 1) * 0.1}s`}}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 group-hover:bg-yellow-300/30 transition-all ${hoveredCard === index ? 'scale-110' : ''}`}>
                    <contact.icon className="w-6 h-6 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">{contact.label}</p>
                    <p className="font-semibold text-white group-hover:text-yellow-300 transition-colors">{contact.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center lg:text-right animate-fadeInRight">
            <div className="space-y-4 mb-8">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-green-600 hover:bg-yellow-300 w-full lg:w-auto hover-lift-lg group"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/10 w-full lg:w-auto hover-lift-lg"
              >
                Support Children&apos;s Home
              </Button>
            </div>
            
            {/* Glass Card */}
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Make a Difference Today
              </h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Your support helps us provide quality education and care 
                to more children in our community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
                <div>
                  <p className="text-yellow-300 font-bold text-2xl">50+</p>
                  <p className="text-white/70 text-sm">Children Supported</p>
                </div>
                <div>
                  <p className="text-yellow-300 font-bold text-2xl">10+</p>
                  <p className="text-white/70 text-sm">Years Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
