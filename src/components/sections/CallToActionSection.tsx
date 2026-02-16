import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import Button from '@/components/common/Button'

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-yellow-300">Transform</span> Your Child&apos;s Future?
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-white/90">
              Join our community of learners where every child is valued, challenged, 
              and empowered to reach their full potential.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-300" />
                <span>+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-300" />
                <span>info@mastoreschool.ac.ke</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-300" />
                <span>Juja Sub County, Kiambu</span>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-right">
            <div className="space-y-4">
              <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Enroll Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
                Support Children&apos;s Home
              </Button>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-2 text-yellow-300" />
                Make a Difference Today
              </h3>
              <p className="text-white/80 leading-relaxed">
                Your support helps us provide quality education and care 
                to more children in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
