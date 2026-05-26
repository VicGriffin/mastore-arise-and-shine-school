'use client'

import { Award, Users, Target, BookOpen, Heart, Calendar } from 'lucide-react'
import Card from '@/components/common/Card'

interface AboutClientProps {
  timeline: Array<{
    year: string
    title: string
    description: string
    icon: string
  }>
  coreValues: Array<{
    title: string
    description: string
    icon: string
    color: string
    bgColor: string
  }>
  leadership: Array<{
    name: string
    role: string
    description: string
    avatar: string
  }>
}

const AboutClient = ({ timeline, coreValues, leadership }: AboutClientProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/mastore school bus.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-emerald-800/60 to-teal-900/70"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              About <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Mastore Arise and Shine School</span>
            </h2>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-1">
              For over a decade, we have been dedicated to providing quality education 
              and developing well-rounded learners in Juja Sub County.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group animate-fadeInLeft hover-lift">
              <Card variant="gradient" className="h-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">👁️</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To impact the learner with divine wisdom and connect him/her with his/her 
                  God ordained purpose for effective societal development.
                </p>
              </Card>
            </div>

            <div className="group animate-fadeInRight hover-lift">
              <Card variant="gradient" className="h-full p-8 bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To nurture the learner with knowledge, skill and values to produce a 
                  responsible and independent person in the society.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/classes.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/70 via-emerald-600/70 to-teal-600/70"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp text-white">Our School Motto</h2>
          <p className="text-3xl md:text-4xl font-bold italic mb-4 animate-fadeInUp stagger-1 text-white">
            &quot;Strive to Excel&quot;
          </p>
          <p className="text-lg mt-4 text-white/90 max-w-2xl mx-auto animate-fadeInUp stagger-2">
            We inspire every learner to strive for excellence in all endeavors and 
            excel in their academic, social, and spiritual development.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/library.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/85 to-white/85"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do, from classroom teaching to community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title} 
                className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {value.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                    {value.icon === 'Users' && <Users className="w-8 h-8 text-white" />}
                    {value.icon === 'Target' && <Target className="w-8 h-8 text-white" />}
                    {value.icon === 'BookOpen' && <BookOpen className="w-8 h-8 text-white" />}
                    {value.icon === 'Heart' && <Heart className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {value.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/sport.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/85 to-gray-50/85"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">History</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey of growth, impact, and transformation since our establishment in May 2019.
            </p>
          </div>

          {/* History Narrative */}
          <div className="max-w-4xl mx-auto mb-12 bg-white rounded-xl shadow-lg p-8 animate-fadeInUp">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Our school was established in May 2019,</strong> with the aim of providing quality education and developing the children spiritually, socially and academically. The inspiration to begin the school came from the children&apos;s home that the Director, Madam Florence Kagendo and the manager Peter Murage had established earlier to support vulnerable and needy children in the community.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>The growth and success of the school</strong> has greatly been made possible through the unwavering support of the board members, who have faithfully stood with the vision since it was established. They have encouraged infrastructure development, academic improvement and learners&apos; welfare.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Mr Joseph Kamuto,</strong> who established a strong foundation of the school, left during the COVID-19 period to the current Headteacher Betty K Njiru, who has continued to promote academic excellence and by God&apos;s grace the school has grown from kindergarten to junior school.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <div key={event.year} className={`flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="w-1/2">
                  <Card variant="default" className="p-6">
                    <div className="flex items-center mb-3">
                      {event.icon === 'Calendar' && <Calendar className="w-6 h-6 text-green-600 mr-3" />}
                      <span className="text-green-600 font-semibold">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </Card>
                </div>
                <div className="w-12 flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/art.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50/85 to-white/85"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team leading Mastore Arise and Shine School toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={leader.name} 
                className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {leader.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                    {leader.name}
                  </h3>
                  <p className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-medium mb-3 group-hover:opacity-80 transition-opacity">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {leader.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutClient
