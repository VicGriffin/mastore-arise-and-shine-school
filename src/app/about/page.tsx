import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Mastore Arise and Shine School - Our History, Vision & Mission',
  description: 'Learn about Mastore Arise and Shine School\'s history, vision, mission, and core values. Established in May 2019, nurturing learners with knowledge, skill and values.',
  keywords: 'about mastore arise and shine school, school history, vision mission, juja school, education kenya',
}

const AboutPage = () => {
  const timeline = [
    {
      year: '2019',
      title: 'School Established',
      description: 'Mastore Arise and Shine School was established in May 2019 with the aim of providing quality education and developing children spiritually, socially and academically.',
      icon: 'Calendar',
    },
    {
      year: '2019',
      title: 'Built on Compassion',
      description: 'Inspired by the success of our children\'s home supporting vulnerable and needy children in the community.',
      icon: 'Award',
    },
    {
      year: '2020-Present',
      title: 'Steady Growth & Leadership Transition',
      description: 'School grew from kindergarten to junior school under dedicated leadership, with Betty K Njiru promoting academic excellence.',
      icon: 'BookOpen',
    },
    {
      year: 'Present',
      title: 'Unwavering Vision',
      description: 'Continued support from board members and leadership in developing infrastructure, academic improvement and learners\' welfare.',
      icon: 'Target',
    },
  ]

  const coreValues = [
    {
      title: 'Excellence',
      description: 'We strive for academic and personal excellence in everything we do.',
      icon: 'Award',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Integrity',
      description: 'We conduct ourselves with honesty, transparency, and moral courage.',
      icon: 'Target',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Compassion',
      description: 'We care deeply for our students and community, showing empathy and kindness.',
      icon: 'Heart',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: 'Community',
      description: 'We build strong relationships and work together as one family.',
      icon: 'Users',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const leadership = [
    {
      name: 'Florence Kagendo',
      role: 'Director & Founder',
      description: 'Visionary founder who established both the children\'s home and school to serve vulnerable children in the community.',
      avatar: 'FK',
    },
    {
      name: 'Peter Murage',
      role: 'Manager & Founder',
      description: 'Co-founder dedicated to supporting vulnerable and needy children in the community.',
      avatar: 'PM',
    },
    {
      name: 'Betty K Njiru',
      role: 'Headteacher',
      description: 'Leading the school with dedication to promote academic excellence and learner welfare.',
      avatar: 'BN',
    },
    {
      name: 'Wilkinson Mwenda',
      role: 'Board Chairperson',
      description: 'Leading the board in supporting infrastructure development and academic improvement.',
      avatar: 'WM',
    },
  ]

  return <AboutClient timeline={timeline} coreValues={coreValues} leadership={leadership} />
}

export default AboutPage
