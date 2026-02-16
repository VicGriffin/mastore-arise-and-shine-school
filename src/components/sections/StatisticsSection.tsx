'use client'

import { Users, BookOpen, Trophy, Heart } from 'lucide-react'
import Button from '@/components/common/Button'
import { useEffect, useRef, useState } from 'react'

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      number: 500,
      label: 'Students Enrolled',
      description: 'From diverse backgrounds across Kiambu County',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: BookOpen,
      number: 95,
      label: 'KCPE Pass Rate',
      description: 'Consistently above national average',
      color: 'from-green-400 to-emerald-600',
      suffix: '%',
    },
    {
      icon: Trophy,
      number: 10,
      label: 'Years of Excellence',
      description: 'Serving Juja community since 2014',
      color: 'from-orange-400 to-red-600',
      suffix: '+',
    },
    {
      icon: Heart,
      number: 50,
      label: 'Children in Home',
      description: 'Providing care, education, and hope',
      color: 'from-pink-400 to-rose-600',
      suffix: '+',
    },
  ]

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, { threshold: 0.1 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const newCounts = stats.map((stat) => Math.floor(stat.number * progress))
      setCounts(newCounts)

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Impact by <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quantifiable results that demonstrate our commitment to excellence and community transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className={`group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp overflow-hidden relative`}
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {isVisible ? counts[index] : 0}{stat.suffix || '+'}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                  {stat.label}
                </h3>

                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {stat.description}
                </p>
              </div>

              {/* Top Accent Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '0.5s'}}>
          <Button variant="primary" size="lg" className="hover-lift-lg">
            Join Our Success Story
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
