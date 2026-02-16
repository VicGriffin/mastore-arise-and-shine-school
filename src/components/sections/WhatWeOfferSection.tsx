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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-green-600">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive education and care designed to nurture every aspect of your child&apos;s development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="lg">
            Enroll Your Child Today
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOfferSection
