'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react'

interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  category: string
  featured: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'importance-of-cbc-curriculum',
    title: 'The Importance of CBC Curriculum in Modern Education',
    excerpt: 'Discover how the Competency-Based Curriculum transforms education by focusing on practical skills and real-world applications.',
    author: 'John Mwangi',
    date: '2024-02-15',
    readTime: 5,
    category: 'Education',
    featured: true,
  },
  {
    id: 2,
    slug: 'holistic-child-development',
    title: 'Holistic Child Development: Beyond Academics',
    excerpt: 'Learn how Mastore School nurtures every aspect of child development through sports, arts, and character building.',
    author: 'Sarah Kipchoge',
    date: '2024-02-10',
    readTime: 6,
    category: 'Child Development',
    featured: true,
  },
  {
    id: 3,
    slug: 'success-stories-our-alumni',
    title: 'Success Stories: Where Our Alumni Are Today',
    excerpt: 'Meet some of our outstanding alumni who have gone on to make significant impacts in their chosen fields.',
    author: 'Grace Ochieng',
    date: '2024-02-05',
    readTime: 7,
    category: 'Stories',
    featured: true,
  },
  {
    id: 4,
    slug: 'supporting-vulnerable-children',
    title: 'Supporting Vulnerable Children Through Education',
    excerpt: 'How our children\'s home program provides hope and opportunities for children in need.',
    author: 'Daniel Kiplagat',
    date: '2024-01-28',
    readTime: 5,
    category: 'Community',
    featured: false,
  },
  {
    id: 5,
    slug: 'parent-engagement-matters',
    title: 'Why Parent Engagement Matters in Education',
    excerpt: 'Exploring the critical role parents play in supporting their children\'s educational journey.',
    author: 'Mary Nyambura',
    date: '2024-01-20',
    readTime: 6,
    category: 'Parents',
    featured: false,
  },
  {
    id: 6,
    slug: 'extracurricular-activities-benefits',
    title: 'The Benefits of Extracurricular Activities',
    excerpt: 'How sports, music, drama, and other activities enhance academic performance and life skills.',
    author: 'James Koech',
    date: '2024-01-15',
    readTime: 5,
    category: 'Activities',
    featured: false,
  },
]

const categories = ['All', 'Education', 'Child Development', 'Stories', 'Community', 'Parents', 'Activities']

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates from Mastore School community
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8 animate-fadeInUp">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 hover:border-gray-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-fadeInUp">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className={`group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp overflow-hidden cursor-pointer`}
                    style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden">
                      <div className="absolute inset-0 animate-shimmer"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 group-hover:text-gray-700">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min
                        </div>
                      </div>

                      {/* Author and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-fadeInUp">
              {featuredPosts.length > 0 ? 'More Articles' : 'Recent Articles'}
            </h2>
            <div className="space-y-6">
              {regularPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className={`group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-fadeInUp cursor-pointer overflow-hidden relative`}
                    style={{animationDelay: `${(index + 1) * 0.05}s`}}>
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Left Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-3 group-hover:text-gray-700 transition-colors">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-500">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min read
                          </div>
                        </div>
                      </div>

                      {/* Right Arrow */}
                      <div className="flex-shrink-0">
                        <ArrowRight className="w-6 h-6 text-green-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl text-gray-600 mb-6">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        </section>
      )}
    </main>
  )
}
