import { ArrowRight, BookOpen, Heart, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const AboutPreviewSection = () => {
  const items = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'We follow the CBC curriculum with experienced teachers who are passionate about nurturing young minds and building strong foundations.',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: Heart,
      title: 'Children\'s Home',
      description: 'Our children\'s home provides a safe, loving environment for vulnerable children, ensuring they receive proper care, education, and emotional support.',
      color: 'from-pink-400 to-rose-600',
    },
    {
      icon: Lightbulb,
      title: 'Community Impact',
      description: 'We partner with parents and the local community to create a supportive ecosystem that helps every child thrive and reach their full potential.',
      color: 'from-purple-400 to-indigo-600',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Mastore Arise and Shine School</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we have been dedicated to providing quality education 
            and compassionate care to the children of Juja Sub County.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp overflow-hidden relative`}
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              {/* Top Border Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <Link href="/about">
            <Button variant="primary" size="lg" className="group hover-lift-lg">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutPreviewSection
