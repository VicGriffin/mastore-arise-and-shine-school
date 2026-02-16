import { Camera, Heart, Users, Trophy } from 'lucide-react'
import Button from '@/components/common/Button'

const GalleryPreviewSection = () => {
  const galleryCategories = [
    {
      icon: Camera,
      title: 'School Life',
      count: '24 Photos',
      description: 'Daily activities and classroom moments',
    },
    {
      icon: Heart,
      title: 'Children\'s Home',
      count: '18 Photos', 
      description: 'Life at our caring children\'s home',
    },
    {
      icon: Users,
      title: 'Events',
      count: '15 Photos',
      description: 'Special occasions and celebrations',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      count: '12 Photos',
      description: 'Academic and co-curricular successes',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery <span className="text-green-600">Preview</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Glimpses of daily life, learning, and celebrations at Mastore School
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {galleryCategories.map((category) => (
            <div key={category.title} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <category.icon className="w-10 h-10 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                {category.count}
              </p>
              <p className="text-gray-500 text-xs">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sample Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreviewSection
