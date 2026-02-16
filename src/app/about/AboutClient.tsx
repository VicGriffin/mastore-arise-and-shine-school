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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">Mastore School</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, we have been dedicated to providing quality education 
              and compassionate care to the children of Juja Sub County.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card variant="gradient" className="h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading institution in nurturing holistic development, 
                  where every child discovers their potential, embraces excellence, 
                  and becomes a responsible global citizen.
                </p>
              </Card>
            </div>

            <div>
              <Card variant="gradient" className="h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide quality education and compassionate care that empowers 
                  children to excel academically, develop strong character, 
                  and contribute positively to society.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* School Motto */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our School Motto</h2>
          <p className="text-2xl md:text-3xl font-light italic mb-4">
            &quot;Arise and Shine&quot;
          </p>
          <p className="text-lg mt-4 text-white/90">
            Inspired by Isaiah 60:1 - encouraging every child to rise to their full potential 
            and shine brightly in their unique way.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-green-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These values guide everything we do, from classroom teaching to community engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {value.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                  {value.icon === 'Users' && <Users className="w-8 h-8 text-white" />}
                  {value.icon === 'Target' && <Target className="w-8 h-8 text-white" />}
                  {value.icon === 'BookOpen' && <BookOpen className="w-8 h-8 text-white" />}
                  {value.icon === 'Heart' && <Heart className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">History</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey of growth, impact, and transformation over the years.
            </p>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated team leading Mastore School toward excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {leader.avatar}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {leader.role}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutClient
