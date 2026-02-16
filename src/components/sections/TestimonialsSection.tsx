import { Star } from 'lucide-react'
import Button from '@/components/common/Button'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mary Wanjiku',
      role: 'Parent',
      content: 'Mastore School has transformed my daughter&apos;s life. The teachers are dedicated, and the CBC curriculum has helped her develop critical thinking skills.',
      rating: 5,
      avatar: 'MW',
    },
    {
      name: 'John Kamau',
      role: 'Alumni',
      content: 'The foundation I received at Mastore prepared me well for secondary school. I especially appreciate the emphasis on both academics and character development.',
      rating: 5,
      avatar: 'JK',
    },
    {
      name: 'Grace Nyambura',
      role: 'Community Leader',
      content: 'The children&apos;s home is doing amazing work in our community. They provide hope and opportunities for vulnerable children.',
      rating: 5,
      avatar: 'GN',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What <span className="text-green-600">Parents Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from parents and community members about their experience with Mastore School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-green-600 font-medium">
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

        <div className="text-center mt-16">
          <Button variant="primary" size="lg">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
