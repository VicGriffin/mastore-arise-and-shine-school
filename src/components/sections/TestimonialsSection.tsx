'use client'

import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '@/components/common/Button'
import { useState, useEffect } from 'react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mary Wanjiku',
      role: 'Parent',
      content: 'Mastore School has transformed my daughter&apos;s life. The teachers are dedicated, and the CBC curriculum has helped her develop critical thinking skills.',
      rating: 5,
      avatar: 'MW',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      name: 'John Kamau',
      role: 'Alumni',
      content: 'The foundation I received at Mastore prepared me well for secondary school. I especially appreciate the emphasis on both academics and character development.',
      rating: 5,
      avatar: 'JK',
      color: 'from-green-400 to-emerald-600',
    },
    {
      name: 'Grace Nyambura',
      role: 'Community Leader',
      content: 'The children&apos;s home is doing amazing work in our community. They provide hope and opportunities for vulnerable children.',
      rating: 5,
      avatar: 'GN',
      color: 'from-purple-400 to-pink-600',
    },
    {
      name: 'David Mwangi',
      role: 'Parent',
      content: 'My son has grown tremendously in confidence and academic performance. The holistic approach to education at Mastore is exceptional.',
      rating: 5,
      avatar: 'DM',
      color: 'from-orange-400 to-red-600',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Parents Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from parents and community members about their experience with Mastore School
          </p>
        </div>

        {/* Carousel View */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className={`h-full bg-gradient-to-br ${testimonial.color} opacity-10`}></div>
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                        ))}
                      </div>
                      
                      <p className="text-2xl text-gray-900 leading-relaxed mb-8 font-medium">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-2xl`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group hover-glow-purple"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group hover-glow-pink"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 w-8'
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid View for Mobile - Show 1-3 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp">
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:scale-110 transition-transform`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium group-hover:opacity-80 transition-opacity">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
          <Button variant="accent" size="lg" className="hover-lift-lg">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
