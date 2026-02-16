import { Users, BookOpen, Trophy, Heart } from 'lucide-react'
import Button from '@/components/common/Button'

const StatisticsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Students Enrolled',
      description: 'From diverse backgrounds across Kiambu County',
    },
    {
      icon: BookOpen,
      number: '95%',
      label: 'KCPE Pass Rate',
      description: 'Consistently above national average',
    },
    {
      icon: Trophy,
      number: '10+',
      label: 'Years of Excellence',
      description: 'Serving Juja community since 2014',
    },
    {
      icon: Heart,
      number: '50+',
      label: 'Children in Home',
      description: 'Providing care, education, and hope',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact by <span className="text-green-600">Numbers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quantifiable results that demonstrate our commitment to excellence and community transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="primary" size="lg">
            Join Our Success Story
          </Button>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
