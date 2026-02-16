'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, User, Clock, Share2, ThumbsUp } from 'lucide-react'

interface BlogPostData {
  id: number
  slug: string
  title: string
  author: string
  date: string
  readTime: number
  category: string
  featured: boolean
  excerpt: string
  content: string[]
  relatedPosts: string[]
}

const blogPostsData: Record<string, BlogPostData> = {
  'importance-of-cbc-curriculum': {
    id: 1,
    slug: 'importance-of-cbc-curriculum',
    title: 'The Importance of CBC Curriculum in Modern Education',
    excerpt: 'Discover how the Competency-Based Curriculum transforms education by focusing on practical skills and real-world applications.',
    author: 'John Mwangi',
    date: '2024-02-15',
    readTime: 5,
    category: 'Education',
    featured: true,
    content: [
      'The Competency-Based Curriculum (CBC) represents a significant shift in how education is delivered in Kenya. Unlike the traditional 8-4-4 system, CBC focuses on developing specific competencies and skills that prepare students for real-world challenges.',
      'One of the key advantages of CBC is its emphasis on 21st-century skills such as critical thinking, creativity, and collaboration. These skills are essential in today\'s rapidly changing job market where adaptability is crucial.',
      'At Mastore School, we have embraced the CBC approach with enthusiasm. Our teachers receive regular training to deliver competency-based lessons that go beyond memorization and encourage active learning.',
      'The curriculum is structured around seven pillars: communication and collaboration, critical thinking and problem solving, creativity and imagination, citizenship, digital literacy, learning to learn, and personal development.',
      'We have observed remarkable improvements in student engagement and motivation since implementing CBC. Students are more enthusiastic about their learning because they can see the practical relevance of what they are studying.',
      'Parents have also noticed the positive changes. Their children are developing stronger problem-solving skills and showing more initiative in their learning journey. The focus on competencies rather than grades has created a more holistic approach to education.',
    ],
    relatedPosts: ['holistic-child-development', 'parent-engagement-matters'],
  },
  'holistic-child-development': {
    id: 2,
    slug: 'holistic-child-development',
    title: 'Holistic Child Development: Beyond Academics',
    excerpt: 'Learn how Mastore School nurtures every aspect of child development through sports, arts, and character building.',
    author: 'Sarah Kipchoge',
    date: '2024-02-10',
    readTime: 6,
    category: 'Child Development',
    featured: true,
    content: [
      'Education is not just about academic excellence. True development of a child encompasses physical health, emotional wellbeing, social skills, and character building.',
      'At Mastore School, we believe in nurturing the whole child. Our comprehensive approach includes academics, sports, arts, music, drama, and various other co-curricular activities.',
      'Physical education is a crucial component of our daily program. We offer opportunities in football, basketball, athletics, and other sports that help students develop teamwork and discipline.',
      'Our arts and music programs provide creative outlets for student expression. Through art classes, music lessons, and drama productions, students discover talents they never knew they had.',
      'Character development is woven into everything we do. We emphasize values such as integrity, respect, responsibility, and kindness through our school culture and explicit teaching.',
      'We also recognize that emotional intelligence is as important as academic intelligence. Our school counselors work with students to develop emotional awareness and coping strategies.',
      'The result is well-rounded individuals who are not only academically successful but also emotionally intelligent, physically healthy, and morally grounded.',
    ],
    relatedPosts: ['importance-of-cbc-curriculum', 'extracurricular-activities-benefits'],
  },
  'success-stories-our-alumni': {
    id: 3,
    slug: 'success-stories-our-alumni',
    title: 'Success Stories: Where Our Alumni Are Today',
    excerpt: 'Meet some of our outstanding alumni who have gone on to make significant impacts in their chosen fields.',
    author: 'Grace Ochieng',
    date: '2024-02-05',
    readTime: 7,
    category: 'Stories',
    featured: true,
    content: [
      'Our alumni are spread across the world, making significant contributions in various fields. Their success stories inspire current students and validate our educational approach.',
      'Dr. Peter Kiplagat, who graduated in 2010, is now a renowned surgeon at a leading hospital in Nairobi. He credits his success to the strong foundation Mastore provided and the encouragement to pursue his passion.',
      'Ms. Catherine Mwangi, a 2008 graduate, is now the managing director of a successful tech startup. She often mentions how the problem-solving skills she developed at school were instrumental in her entrepreneurial journey.',
      'Engineer James Koech, who left our school in 2012, has designed several infrastructure projects across East Africa. He remains actively involved with the school as a mentor for our students interested in engineering.',
      'These are just a few examples of the talented individuals who have passed through our halls. Many more are working as teachers, nurses, businesspeople, farmers, and in various other professions.',
      'What connects all our successful alumni is not just their academic achievement but their character, work ethic, and commitment to making a difference in their communities.',
      'We are proud to be part of their success stories and look forward to seeing where our current students will make their mark in the world.',
    ],
    relatedPosts: ['holistic-child-development', 'parent-engagement-matters'],
  },
  'supporting-vulnerable-children': {
    id: 4,
    slug: 'supporting-vulnerable-children',
    title: 'Supporting Vulnerable Children Through Education',
    excerpt: 'How our children\'s home program provides hope and opportunities for children in need.',
    author: 'Daniel Kiplagat',
    date: '2024-01-28',
    readTime: 5,
    category: 'Community',
    featured: false,
    content: [
      'Education is a powerful tool for breaking the cycle of poverty. At Mastore, we operate a children\'s home that provides shelter, care, and education to vulnerable children.',
      'Many of our children\'s home residents come from challenging backgrounds. Some have lost parents, others are from extremely poor families. What they all share is the desire to learn and improve their lives.',
      'Beyond providing basic necessities like food and shelter, we focus on creating an environment where children feel safe and loved. We employ trained caregivers and counselors who understand the unique needs of trauma-affected children.',
      'Education is at the heart of our program. We ensure that all children in our care attend school and receive extra support in their studies. Many of them are now performing excellently academically.',
      'We also focus on life skills training. Our children learn practical skills such as cooking, cleaning, basic repairs, and agricultural techniques that will help them become self-sufficient.',
      'The impact is visible. Children who arrived malnourished and traumatized have become confident, healthy, and ambitious. Many dream of becoming teachers, doctors, and engineers.',
      'Supporting these children is our privilege and responsibility. Every child deserves a chance at a better future, and we are committed to providing that through education and care.',
    ],
    relatedPosts: ['holistic-child-development', 'parent-engagement-matters'],
  },
  'parent-engagement-matters': {
    id: 5,
    slug: 'parent-engagement-matters',
    title: 'Why Parent Engagement Matters in Education',
    excerpt: 'Exploring the critical role parents play in supporting their children\'s educational journey.',
    author: 'Mary Nyambura',
    date: '2024-01-20',
    readTime: 6,
    category: 'Parents',
    featured: false,
    content: [
      'Research consistently shows that parent involvement is one of the strongest predictors of student success. When parents are engaged in their children\'s education, students perform better academically and socially.',
      'At Mastore School, we work hard to build strong partnerships with parents. We believe that teachers and parents are partners in the educational journey of the child.',
      'We organize regular parent-teacher conferences where teachers share student progress and parents can ask questions and express concerns. These conversations are invaluable for understanding each child\'s unique needs.',
      'We also invite parents to participate in school events, sports days, and cultural activities. This involvement helps parents understand what their children are learning and strengthens school community bonds.',
      'Parent education is another important aspect of our program. We conduct workshops on topics such as positive parenting, supporting learning at home, and understanding the CBC curriculum.',
      'We encourage parents to create a supportive learning environment at home. This includes providing a quiet study space, limiting distractions, and showing genuine interest in their child\'s schoolwork.',
      'When parents are involved, children see that education is valued and take their learning more seriously. The result is motivated learners who achieve their full potential.',
    ],
    relatedPosts: ['holistic-child-development', 'importance-of-cbc-curriculum'],
  },
  'extracurricular-activities-benefits': {
    id: 6,
    slug: 'extracurricular-activities-benefits',
    title: 'The Benefits of Extracurricular Activities',
    excerpt: 'How sports, music, drama, and other activities enhance academic performance and life skills.',
    author: 'James Koech',
    date: '2024-01-15',
    readTime: 5,
    category: 'Activities',
    featured: false,
    content: [
      'Extracurricular activities are much more than just fun pastimes. They are integral to developing well-rounded individuals and often complement academic learning.',
      'Sports, in particular, teach valuable lessons about teamwork, discipline, and resilience. Whether it\'s football, athletics, or basketball, students learn to work together toward common goals and handle both victory and defeat gracefully.',
      'Music and drama programs develop creativity and self-expression. Through these activities, students gain confidence and learn to communicate their emotions and ideas effectively.',
      'Debate and public speaking activities enhance critical thinking and communication skills. Students learn to articulate arguments clearly and think on their feet.',
      'Science clubs and computer labs nurture curiosity and problem-solving abilities. Students conduct experiments, build projects, and explore new technologies.',
      'The benefits extend beyond academic performance. Students who participate in extracurricular activities often have better mental health, lower stress levels, and stronger social connections.',
      'At Mastore, we offer a diverse range of activities to cater to different interests and talents. We believe that every student should have the opportunity to discover their passions and develop their unique abilities.',
    ],
    relatedPosts: ['holistic-child-development', 'importance-of-cbc-curriculum'],
  },
}

// Get all blog posts for related posts section
const allBlogPosts = Object.values(blogPostsData)

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isVisible, setIsVisible] = useState(false)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const post = blogPostsData[slug]

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">We couldn't find the article you're looking for.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const relatedPosts = post.relatedPosts
    .map((slug) => blogPostsData[slug])
    .filter(Boolean)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
            <div className="mb-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className={`w-full h-96 bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 rounded-xl mb-12 overflow-hidden animate-fadeInUp`}>
              <div className="w-full h-full animate-shimmer"></div>
            </div>

            {/* Article Text */}
            <div className={`prose prose-lg max-w-none text-gray-700 animate-fadeInUp`} style={{animationDelay: '0.1s'}}>
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mb-6 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              {/* Social Sharing */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="font-semibold text-gray-900">Share this article:</span>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      liked
                        ? 'bg-red-50 text-red-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    Like
                  </button>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Written by</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-600">Content Writer at Mastore School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Articles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift animate-fadeInUp overflow-hidden cursor-pointer"
                    style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                    {/* Image */}
                    <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-200 relative overflow-hidden">
                      <div className="absolute inset-0 animate-shimmer"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm text-green-600 font-semibold mb-2">{relatedPost.category}</p>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime} min read
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
