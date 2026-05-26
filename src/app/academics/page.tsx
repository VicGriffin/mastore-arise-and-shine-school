import { BookOpen, Users, Brain, Palette, Music, Calculator, Trophy, Award } from 'lucide-react'

const AcademicsPage = () => {
  const curriculumLevels = [
    {
      level: 'Early Years Education (EYE)',
      grades: 'PP1 - Grade 3',
      description: 'Foundation years focusing on basic literacy, numeracy, and life skills through play-based learning.',
      age: '4-9 years',
      color: 'from-blue-400 to-blue-600',
      image: '/images/art.jfif',
    },
    {
      level: 'Lower Primary',
      grades: 'Grade 4 - 5',
      description: 'Building on foundational skills with introduction to more complex concepts and practical applications.',
      age: '9-11 years',
      color: 'from-green-400 to-green-600',
      image: '/images/classes.jfif',
    },
    {
      level: 'Upper Primary',
      grades: 'Grade 6 - 8',
      description: 'Advanced preparation for secondary education with focus on critical thinking and problem-solving.',
      age: '11-13 years',
      color: 'from-purple-400 to-purple-600',
      image: '/images/laboratory.jfif',
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/computer lab.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-800/60 to-purple-900/70"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
              Academic <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-fadeInUp stagger-1">
              Discover our comprehensive CBC curriculum designed to nurture well-rounded, 
              confident learners prepared for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Sector Department */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Department Head */}
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Madam Martha Kamau</h3>
              </div>
              <p className="text-lg text-gray-700 font-semibold mb-2">Senior Teacher - Head of Academic Department</p>
              <p className="text-gray-600">Leading excellence in teaching and learning</p>
            </div>

            {/* Department Vision and Role */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 animate-fadeInUp hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Academic Mission</h3>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="leading-relaxed">
                  As the senior teacher in charge of academics, my role is to support excellence in teaching and learning, 
                  guide learners towards achieving their goals, and work closely with teachers and parents to ensure holistic growth.
                </p>
                <p className="leading-relaxed">
                  Our environment helps every learner to succeed academically and personally, nurturing not just knowledge, 
                  but character, creativity, and confidence for life.
                </p>
              </div>
            </div>

            {/* Learning Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fadeInUp stagger-1">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Languages
                </h4>
                <p className="text-gray-600">English, Kiswahili, and French</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  Sciences
                </h4>
                <p className="text-gray-600">Science & Technology, Integrated Science, Agriculture & Nutrition</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  Humanities
                </h4>
                <p className="text-gray-600">Social Studies and Christian Religious Education (CRE)</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-orange-600" />
                  Technical Studies
                </h4>
                <p className="text-gray-600">ICT and Computer Studies for digital literacy</p>
              </div>
            </div>

            {/* CBC Philosophy */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fadeInUp stagger-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Competency-Based Curriculum (CBC)</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  Our school embraces the Kenya Institute of Curriculum Development (KICD) Competency-Based Curriculum. 
                  CBC focuses on nurturing every learner&apos;s talents, abilities, values, and practical skills.
                </p>
                <p>
                  The curriculum is designed to promote <strong>creativity, critical thinking, communication, collaboration, 
                  and problem-solving</strong> among our learners from PP1 to Grade 9.
                </p>
              </div>

              {/* Key Approaches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Learner-Centered Approach</p>
                    <p className="text-sm text-gray-600">Active participation, innovation, and holistic growth</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Continuous Assessment</p>
                    <p className="text-sm text-gray-600">Regular evaluation and feedback for growth</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Project-Based Learning</p>
                    <p className="text-sm text-gray-600">Practical application of knowledge and skills</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Technology Integration</p>
                    <p className="text-sm text-gray-600">Modern tools to enhance learning experiences</p>
                  </div>
                </div>
              </div>

              {/* Parental Engagement */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Parental Engagement
                </h4>
                <p className="text-gray-700">
                  Parents are actively engaged through meetings and academic forums to understand CBC and support learners 
                  both at school and at home.
                </p>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="mt-8 bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fadeInUp stagger-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Excellence in Achievement</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our school has participated in both Kenya Primary School Education Assessment (KPSEA) and Kenya Junior 
                  School Education Assessment (KJSEA) with excellent results. Most of our learners performed above expectations.
                </p>
                <p className="font-semibold text-blue-700 mb-4">
                  We continue to uphold academic excellence as we prepare learners for the next level of education 
                  with confidence and competence.
                </p>
                <p className="text-sm text-gray-600 italic">
                  This outstanding performance is a result of the full dedication of our teachers, the determination of our 
                  learners, and strong support from parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              CBC <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Curriculum</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Competency-Based Curriculum focuses on developing practical skills, critical thinking, 
              and values for holistic child development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculumLevels.map((level, index) => (
              <div 
                key={level.level} 
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-cover bg-center bg-no-repeat rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{backgroundImage: `url(${level.image})`}}>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all">
                    {level.level}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {level.grades}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {level.age}
                  </p>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {level.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Subjects */}
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
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Subjects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive subject offerings designed to build strong academic foundations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSubjects.map((subject, index) => (
              <div 
                key={subject.title} 
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all">
                    {subject.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {subject.subjects.map((sub) => (
                      <span key={sub} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 group-hover:bg-blue-100 transition-colors">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {subject.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-curricular Activities */}
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Co-curricular <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Activities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond academics, we offer diverse activities to develop talents and build character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coCurricular.map((activity, index) => (
              <div 
                key={activity.title} 
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift text-center overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all">
                    {activity.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {activity.activities.map((act) => (
                      <span key={act} className="inline-block bg-purple-50 text-purple-700 px-2 py-1 rounded text-xs mr-1 mb-1 group-hover:bg-purple-100 transition-colors">
                        {act}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                    {activity.description}
                  </p>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AcademicsPage
