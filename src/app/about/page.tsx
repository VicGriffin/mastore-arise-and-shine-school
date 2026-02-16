import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Mastore School - Our History, Vision & Mission',
  description: 'Learn about Mastore Arise and Shine School\'s history, vision, mission, and core values. Serving Juja community with quality education and compassionate care since 2014.',
  keywords: 'about mastore school, school history, vision mission, juja school, education kenya',
}

const AboutPage = () => {
  const timeline = [
    {
      year: '2014',
      title: 'School Founded',
      description: 'Mastore Arise and Shine School was established with a vision to provide quality education to the Juja community.',
      icon: 'Calendar',
    },
    {
      year: '2016',
      title: 'Children\'s Home Opened',
      description: 'Extended our mission to include a caring home for vulnerable children in the community.',
      icon: 'Heart',
    },
    {
      year: '2018',
      title: 'First Graduating Class',
      description: 'Celebrated our first group of students who successfully completed their primary education.',
      icon: 'Award',
    },
    {
      year: '2020',
      title: 'CBC Curriculum Adoption',
      description: 'Successfully implemented Competency-Based Curriculum to align with national education standards.',
      icon: 'BookOpen',
    },
    {
      year: '2024',
      title: 'Decade of Excellence',
      description: 'Celebrating 10 years of transforming lives through education and compassionate care.',
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
      name: 'Mrs. Grace Wangari',
      role: 'School Director',
      description: 'With over 20 years in education, Mrs. Wangari leads with vision and passion.',
      avatar: 'GW',
    },
    {
      name: 'Mr. David Kamau',
      role: 'Academic Head',
      description: 'Ensuring academic excellence through innovative teaching methods.',
      avatar: 'DK',
    },
    {
      name: 'Mrs. Sarah Mwangi',
      role: 'Children\'s Home Manager',
      description: 'Dedicated to providing a loving home for every child in our care.',
      avatar: 'SM',
    },
    {
      name: 'Mr. Peter Njoroge',
      role: 'Administrative Director',
      description: 'Managing school operations with efficiency and care.',
      avatar: 'PN',
    },
  ]

  return <AboutClient timeline={timeline} coreValues={coreValues} leadership={leadership} />
}

export default AboutPage
