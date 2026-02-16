import { BookOpen, Users, Brain, Palette, Music, Calculator, Trophy } from 'lucide-react'

const AcademicsPage = () => {
  const curriculumLevels = [
    {
      level: 'Early Years Education (EYE)',
      grades: 'PP1 - Grade 3',
      description: 'Foundation years focusing on basic literacy, numeracy, and life skills through play-based learning.',
      age: '4-9 years',
      color: 'from-blue-400 to-blue-600',
    },
    {
      level: 'Lower Primary',
      grades: 'Grade 4 - 5',
      description: 'Building on foundational skills with introduction to more complex concepts and practical applications.',
      age: '9-11 years',
      color: 'from-green-400 to-green-600',
    },
    {
      level: 'Upper Primary',
      grades: 'Grade 6 - 8',
      description: 'Advanced preparation for secondary education with focus on critical thinking and problem-solving.',
      age: '11-13 years',
      color: 'from-purple-400 to-purple-600',
    },
  ]

  const coreSubjects = [
    {
      icon: BookOpen,
      title: 'Languages',
      subjects: ['English', 'Kiswahili', 'French'],
      description: 'Strong foundation in communication and language skills.',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      subjects: ['Mathematics', 'Integrated Science'],
      description: 'Developing logical thinking and analytical abilities.',
    },
    {
      icon: Brain,
      title: 'Sciences',
      subjects: ['Science', 'Social Studies', 'CRE'],
      description: 'Understanding the world through scientific inquiry and social awareness.',
    },
  ]

  const coCurricular = [
    {
      icon: Palette,
      title: 'Creative Arts',
      activities: ['Drawing', 'Painting', 'Crafts', 'Drama'],
      description: 'Nurturing creativity and self-expression through various art forms.',
    },
    {
      icon: Music,
      title: 'Music & Performing Arts',
      activities: ['Singing', 'Dancing', 'Instrument Training', 'School Band'],
      description: 'Developing talents and confidence through musical education.',
    },
    {
      icon: Trophy,
      title: 'Sports',
      activities: ['Football', 'Athletics', 'Volleyball', 'Indoor Games'],
      description: 'Physical fitness, teamwork, and healthy competition.',
    },
    {
      icon: Users,
      title: 'Clubs & Societies',
      activities: ['Scouts', 'Debate Club', 'Environmental Club', 'Leadership Council'],
      description: 'Building character and leadership skills through group activities.',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Academic <span className="text-blue-600">Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive CBC curriculum designed to nurture well-rounded, 
              confident learners prepared for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CBC <span className="text-blue-600">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Competency-Based Curriculum focuses on developing practical skills, critical thinking, 
              and values for holistic child development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculumLevels.map((level) => (
              <div key={level.level} className="text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {level.level}
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  {level.grades}
                </p>
                <p className="text-gray-500 text-sm">
                  {level.age}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core <span className="text-blue-600">Subjects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive subject offerings designed to build strong academic foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSubjects.map((subject) => (
              <div key={subject.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <subject.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {subject.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {subject.subjects.map((sub) => (
                    <span key={sub} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {sub}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Co-curricular <span className="text-blue-600">Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond academics, we offer diverse activities to develop talents and build character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coCurricular.map((activity) => (
              <div key={activity.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <activity.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {activity.activities.map((act) => (
                    <span key={act} className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                      {act}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AcademicsPage
