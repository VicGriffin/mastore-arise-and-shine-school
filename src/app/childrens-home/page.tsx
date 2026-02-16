import { Heart, Users, Target, BookOpen } from 'lucide-react'

const ChildrensHomePage = () => {
  const impactStats = [
    {
      icon: Users,
      number: '50+',
      label: 'Children Supported',
      description: 'Providing care, education, and hope to vulnerable children',
    },
    {
      icon: Heart,
      number: '15',
      label: 'Years of Service',
      description: 'Dedicated to transforming young lives through education and care',
    },
    {
      icon: Target,
      number: '95%',
      label: 'Success Rate',
      description: 'Children successfully transitioning to secondary education and beyond',
    },
    {
      icon: BookOpen,
      number: '100%',
      label: 'Education Access',
      description: 'Every child receives quality education regardless of background',
    },
  ]

  const sponsorshipLevels = [
    {
      level: 'Full Sponsorship',
      amount: 'KES 15,000/year',
      benefits: [
        'Complete education support',
        'School supplies and uniform',
        'Daily meals and healthcare',
        'Regular progress reports',
        'Personal relationship with child',
      ],
      color: 'from-green-400 to-green-600',
      featured: true,
    },
    {
      level: 'Education Sponsorship',
      amount: 'KES 8,000/year',
      benefits: [
        'School fees and supplies',
        'Daily meals',
        'Basic healthcare',
        'Quarterly updates',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      level: 'Basic Needs Support',
      amount: 'KES 3,000/year',
      benefits: [
        'School supplies',
        'One meal per day',
        'Basic healthcare',
        'Annual progress report',
      ],
      color: 'from-purple-400 to-purple-600',
    },
  ]

  const donationMethods = [
    {
      title: 'One-Time Donation',
      description: 'Support our mission with a single contribution of any amount.',
      examples: ['School supplies', 'Infrastructure development', 'Emergency needs'],
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'Monthly Giving',
      description: 'Become a monthly partner in our mission to transform lives.',
      examples: ['Sponsor a child', 'Staff support', 'Program development'],
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Corporate Partnership',
      description: 'Partner with us through corporate social responsibility programs.',
      examples: ['Employee giving', 'Matching gifts', 'Program sponsorship'],
      color: 'from-blue-400 to-blue-600',
    },
  ]

  const successStories = [
    {
      name: 'Sarah Mwangi',
      age: '12',
      story: 'Came to our children&apos;s home at age 6 after losing both parents. Now excels in school and dreams of becoming a doctor.',
      avatar: 'SM',
      achievement: 'Top student in class',
    },
    {
      name: 'James Kamau',
      age: '14',
      story: 'Rescued from difficult circumstances, now thriving in our care and showing leadership potential.',
      avatar: 'JK',
      achievement: 'Student council president',
    },
    {
      name: 'Grace Wanjiku',
      age: '10',
      story: 'Joined us with limited English skills, now fluent and helping other children learn.',
      avatar: 'GW',
      achievement: 'Language competition winner',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Children&apos;s <span className="text-red-600">Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A safe, loving environment where vulnerable children find hope, education, 
              and the opportunity to shine brightly in their unique way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Mission</span>
              </h2>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl">
                <Heart className="w-12 h-12 text-red-600 mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide a safe, nurturing environment where vulnerable children 
                  receive quality education, healthcare, and emotional support, empowering them 
                  to break the cycle of poverty and reach their full potential.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-red-600">Impact</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsorship <span className="text-red-600">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your support can transform a child&apos;s life and provide them with a brighter future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level) => (
              <div key={level.level} className={`text-center p-8 rounded-xl ${
                level.featured ? 'ring-2 ring-red-500 ring-offset-2' : ''
              }`}>
                <div className={`w-20 h-20 bg-gradient-to-br ${level.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {level.level}
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-4">
                  {level.amount}
                </p>
                <ul className="text-left space-y-2 mb-4">
                  {level.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success <span className="text-red-600">Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the children whose lives have been transformed through your generous support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.name} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {story.avatar}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.name}, Age {story.age}
                </h3>
                <p className="text-red-600 font-medium mb-3">
                  {story.achievement}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to <span className="text-red-600">Support</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every contribution makes a difference in a child&apos;s life. Choose how you&apos;d like to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationMethods.map((method) => (
              <div key={method.title} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {method.description}
                </p>
                <ul className="text-left space-y-1">
                  {method.examples.map((example) => (
                    <li key={example} className="text-gray-600 text-sm">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ChildrensHomePage
