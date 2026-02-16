import { BookOpen, Heart, Users, Trophy, Target } from 'lucide-react'
import Button from '@/components/common/Button'

const WhatWeOfferSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'CBC curriculum with experienced teachers focused on holistic development and academic excellence.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Heart,
      title: 'Children\'s Home',
      description: 'Safe, caring environment for vulnerable children with proper nutrition and emotional support.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with teacher-to-student ratio of 1:25 for better learning outcomes.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Trophy,
      title: 'Co-curricular Activities',
      description: 'Sports, music, drama, and clubs to develop talents and build confidence.',
      color: 'from-orange-400 to-orange-600',
    },
    {
      icon: Target,
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms, computer lab, library, and safe play areas.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: BookOpen,
      title: 'Parent Partnership',
      description: 'Regular communication and involvement of parents in the educational journey.',
      color: 'from-indigo-400 to-indigo-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-gradient-to-br from-pink-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive education and care designed to nurture every aspect of your child&apos;s development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift cursor-pointer overflow-hidden relative ${service.color}`}
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              {/* Colored Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white animate-pulse group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <Button variant="primary" size="lg" className="hover-lift-lg">
            Enroll Your Child Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOfferSection
