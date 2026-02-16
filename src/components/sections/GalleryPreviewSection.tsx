'use client'

import { Camera, Heart, Users, Trophy } from 'lucide-react'
import Button from '@/components/common/Button'
import { useState } from 'react'

const GalleryPreviewSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const galleryCategories = [
    {
      icon: Camera,
      title: 'School Life',
      count: '24 Photos',
      description: 'Daily activities and classroom moments',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: Heart,
      title: 'Children\'s Home',
      count: '18 Photos', 
      description: 'Life at our caring children\'s home',
      color: 'from-pink-400 to-rose-600',
    },
    {
      icon: Users,
      title: 'Events',
      count: '15 Photos',
      description: 'Special occasions and celebrations',
      color: 'from-purple-400 to-indigo-600',
    },
    {
      icon: Trophy,
      title: 'Achievements',
      count: '12 Photos',
      description: 'Academic and co-curricular successes',
      color: 'from-orange-400 to-red-600',
    },
  ]

  const galleryItems = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Preview</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Glimpses of daily life, learning, and celebrations at Mastore School
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {galleryCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(index)}
              className={`group text-center p-6 rounded-xl transition-all duration-300 animate-fadeInUp hover-lift ${
                selectedCategory === index
                  ? `bg-gradient-to-br ${category.color} text-white shadow-xl`
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}
              style={{animationDelay: `${(index + 1) * 0.1}s`}}
            >
              <div className={`w-20 h-20 ${selectedCategory === index ? 'bg-white/20' : 'bg-gradient-to-br from-gray-100 to-gray-200'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className={`w-10 h-10 ${selectedCategory === index ? 'text-white' : 'text-gray-600'}`} />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${selectedCategory === index ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              <p className={`text-sm mb-2 ${selectedCategory === index ? 'text-white/90' : 'text-gray-600'}`}>
                {category.count}
              </p>
              <p className={`text-xs ${selectedCategory === index ? 'text-white/70' : 'text-gray-500'}`}>
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {/* Sample Gallery Grid with Hover Effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item}
              className={`group relative aspect-square bg-gradient-to-br ${galleryCategories[selectedCategory].color} rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp`}
              style={{animationDelay: `${item * 0.05}s`}}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" />
              </div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>

              {/* Loading Shimmer */}
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <Button variant="primary" size="lg" className="hover-lift-lg">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  )
}

export default GalleryPreviewSection
