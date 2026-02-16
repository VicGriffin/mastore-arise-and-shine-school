import { ArrowRight, BookOpen, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/common/Button'

const AboutPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-green-600">Mastore School</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we have been dedicated to providing quality education 
            and compassionate care to the children of Juja Sub County.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <BookOpen className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Education</h3>
            <p className="text-gray-600 leading-relaxed">
              We follow the CBC curriculum with experienced teachers who are passionate 
              about nurturing young minds and building strong foundations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <Heart className="w-12 h-12 text-green-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Children&apos;s Home</h3>
            <p className="text-gray-600 leading-relaxed">
              Our children&apos;s home provides a safe, loving environment for vulnerable children, 
              ensuring they receive proper care, education, and emotional support.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
            <ArrowRight className="w-12 h-12 text-purple-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              We partner with parents and the local community to create a supportive 
              ecosystem that helps every child thrive and reach their full potential.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/about">
            <Button variant="primary" size="lg" className="group">
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
