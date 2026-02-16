'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'

interface GalleryImage {
  id: number
  category: string
  title: string
  description: string
  image: string
}

const categories = ['All', 'School Life', 'Children\'s Home', 'Events', 'Achievements']

const galleryImages: GalleryImage[] = [
  // School Life (6 images)
  { id: 1, category: 'School Life', title: 'Classroom Learning', description: 'Interactive classroom sessions with student engagement', image: '/images/classes.jfif' },
  { id: 2, category: 'School Life', title: 'Library Time', description: 'Students studying in our well-equipped library', image: '/images/library.jfif' },
  { id: 3, category: 'School Life', title: 'Laboratory Work', description: 'Hands-on science experiments and learning', image: '/images/laboratory.jfif' },
  { id: 4, category: 'School Life', title: 'Computer Lab', description: 'Digital literacy and ICT training', image: '/images/computer lab.jfif' },
  { id: 5, category: 'School Life', title: 'Sports Day', description: 'Students competing in various sports events', image: '/images/sport.jfif' },
  { id: 6, category: 'School Life', title: 'Art Class', description: 'Creative expression through visual arts', image: '/images/art.jfif' },

  // Children's Home (4 images)
  { id: 7, category: 'Children\'s Home', title: 'Home Life', description: 'Daily activities at our children\'s home', image: '/images/meal time.jpg' },
  { id: 8, category: 'Children\'s Home', title: 'Meal Time', description: 'Nutritious meals for our children', image: '/images/meal time.jpg' },
  { id: 9, category: 'Children\'s Home', title: 'Recreation', description: 'Play and recreation activities', image: '/images/sport.jfif' },
  { id: 10, category: 'Children\'s Home', title: 'Learning Together', description: 'Group study sessions and bonding', image: '/images/classes.jfif' },

  // Events (5 images)
  { id: 11, category: 'Events', title: 'Annual Prize Giving', description: 'Celebrating student achievements', image: '/images/classes.jfif' },
  { id: 12, category: 'Events', title: 'School Concert', description: 'Musical performances by students', image: '/images/art.jfif' },
  { id: 13, category: 'Events', title: 'Sports Day', description: 'Inter-house sports competitions', image: '/images/sport.jfif' },
  { id: 14, category: 'Events', title: 'Educational Tours', description: 'Field trips and educational excursions', image: '/images/mastore school bus.jfif' },
  { id: 15, category: 'Events', title: 'Community Day', description: 'Community engagement activities', image: '/images/classes.jfif' },

  // Achievements (4 images)
  { id: 16, category: 'Achievements', title: 'KCPE Results', description: 'Excellence in academic performance', image: '/images/library.jfif' },
  { id: 17, category: 'Achievements', title: 'Sports Trophies', description: 'Winning trophies and awards', image: '/images/sport.jfif' },
  { id: 18, category: 'Achievements', title: 'Debate Champions', description: 'Debate team victories', image: '/images/classes.jfif' },
  { id: 19, category: 'Achievements', title: 'Certificate Awards', description: 'Student recognition and awards', image: '/images/library.jfif' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const selectedImage = galleryImages.find((img) => img.id === selectedImageId)
  const selectedIndex = filteredImages.findIndex((img) => img.id === selectedImageId)

  const goToPrevious = () => {
    if (selectedIndex > 0) {
      setSelectedImageId(filteredImages[selectedIndex - 1].id)
    }
  }

  const goToNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      setSelectedImageId(filteredImages[selectedIndex + 1].id)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center transition-all duration-700 animate-fadeInDown">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Photo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore moments from our school, children&apos;s home, and community events
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedImageId(null)
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setSelectedImageId(image.id)}
                className={`group relative aspect-square bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp`}
                style={{
                  backgroundImage: `url("${image.image}")`,
                  animationDelay: `${(index % 8) * 0.05}s`
                }}
              >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center px-4">
                    <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>

                {/* Shimmer Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No images found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageId(null)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-60"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="relative max-w-5xl w-full h-[70vh] animate-scale-up">
            {/* Image Container */}
            <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-2xl flex items-center justify-center overflow-hidden relative group" style={{backgroundImage: `url("${selectedImage.image}")`}}>
              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Image Details */}
              <div className="relative z-10 text-center px-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedImage.title}</h2>
                  <p className="text-lg text-white/90 mb-4">{selectedImage.description}</p>
                  <p className="text-sm text-white/70 mb-6">{selectedImage.category}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-105">
                      <Download className="w-5 h-5" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {selectedIndex > 0 && (
              <button
                onClick={goToPrevious}
                className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-4 transition-all duration-300 hover:scale-110 group hover-glow"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-gray-900" />
              </button>
            )}

            {selectedIndex < filteredImages.length - 1 && (
              <button
                onClick={goToNext}
                className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-200 rounded-full p-4 transition-all duration-300 hover:scale-110 group hover-glow"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-gray-900" />
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-sm">
              <span>{selectedIndex + 1} / {filteredImages.length}</span>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group animate-fadeInUp hover-lift p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {galleryImages.length}
              </div>
              <p className="text-gray-600 font-semibold">Total Photos</p>
            </div>

            <div className="group animate-fadeInUp hover-lift p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl" style={{animationDelay: '0.1s'}}>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                {categories.length - 1}
              </div>
              <p className="text-gray-600 font-semibold">Categories</p>
            </div>

            <div className="group animate-fadeInUp hover-lift p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl" style={{animationDelay: '0.2s'}}>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
                ∞
              </div>
              <p className="text-gray-600 font-semibold">Moments Captured</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
