'use client'

import { useState } from 'react'
import { Camera, Grid, List } from 'lucide-react'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const categories = [
    { id: 'all', name: 'All Photos', count: 24 },
    { id: 'classroom', name: 'Classroom', count: 8 },
    { id: 'activities', name: 'Activities', count: 6 },
    { id: 'events', name: 'Events', count: 5 },
    { id: 'childrens-home', name: 'Children\'s Home', count: 5 },
  ]

  const galleryImages = [
    // Classroom Images
    { id: '1', src: '', alt: 'Interactive Learning Session', category: 'classroom' },
    { id: '2', src: '', alt: 'Science Laboratory', category: 'classroom' },
    { id: '3', src: '', alt: 'Computer Class', category: 'classroom' },
    { id: '4', src: '', alt: 'Library Reading Time', category: 'classroom' },
    { id: '5', src: '', alt: 'Mathematics Lesson', category: 'classroom' },
    { id: '6', src: '', alt: 'English Language Class', category: 'classroom' },
    { id: '7', src: '', alt: 'Social Studies Session', category: 'classroom' },
    { id: '8', src: '', alt: 'Creative Arts Class', category: 'classroom' },
    
    // Activities Images
    { id: '9', src: '', alt: 'Football Practice', category: 'activities' },
    { id: '10', src: '', alt: 'Music Band Practice', category: 'activities' },
    { id: '11', src: '', alt: 'Drama Club Performance', category: 'activities' },
    { id: '12', src: '', alt: 'Art and Craft Session', category: 'activities' },
    { id: '13', src: '', alt: 'Athletics Training', category: 'activities' },
    { id: '14', src: '', alt: 'Scout Meeting', category: 'activities' },
    
    // Events Images
    { id: '15', src: '', alt: 'Graduation Ceremony', category: 'events' },
    { id: '16', src: '', alt: 'Sports Day Competition', category: 'events' },
    { id: '17', src: '', alt: 'Cultural Festival', category: 'events' },
    { id: '18', src: '', alt: 'Parents Meeting', category: 'events' },
    { id: '19', src: '', alt: 'Award Ceremony', category: 'events' },
    
    // Children's Home Images
    { id: '20', src: '', alt: 'Play Time', category: 'childrens-home' },
    { id: '21', src: '', alt: 'Study Session', category: 'childrens-home' },
    { id: '22', src: '', alt: 'Meal Time', category: 'childrens-home' },
    { id: '23', src: '', alt: 'Bedtime Stories', category: 'childrens-home' },
    { id: '24', src: '', alt: 'Outdoor Activities', category: 'childrens-home' },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Capturing memorable moments and daily life at Mastore School and Children&apos;s Home
            </p>
          </div>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'list'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div key={image.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden group-hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredImages.map((image) => (
                <div key={image.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {image.alt}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Category: {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
