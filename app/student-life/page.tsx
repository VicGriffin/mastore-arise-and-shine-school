import React from 'react';
import Image from 'next/image';
import { Users, Trophy, Music, Zap, Heart, BookOpen } from 'lucide-react';

export default function StudentLifePage() {
  const activities = [
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      description: 'From football to athletics, our students participate in inter-school competitions and develop leadership through team sports.'
    },
    {
      icon: Music,
      title: 'Arts & Culture',
      description: 'Music, dance, drama, and visual arts programs allow students to express creativity and showcase talents.'
    },
    {
      icon: Users,
      title: 'Student Clubs',
      description: 'Debate, robotics, drama, photography, and environmental clubs help students explore diverse interests.'
    },
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Extension programs, study groups, and mentorship support students in achieving their academic goals.'
    },
    {
      icon: Heart,
      title: 'Community Service',
      description: 'Students engage in community outreach and social responsibility projects throughout the year.'
    },
    {
      icon: Zap,
      title: 'Leadership Programs',
      description: 'Student council, prefect system, and leadership workshops develop future leaders and innovators.'
    }
  ];

  const facilities = [
    { name: 'Modern Classrooms', icon: '📚' },
    { name: 'Science Laboratories', icon: '🔬' },
    { name: 'Computer Lab', icon: '💻' },
    { name: 'Sports Grounds', icon: '⚽' },
    { name: 'Library', icon: '📖' },
    { name: 'Dining Hall', icon: '🍽️' },
    { name: 'Auditorium', icon: '🎭' },
    { name: 'Medical Center', icon: '🏥' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-max text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pretty mb-6">
            Student Life at Mastore
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Beyond academics, our students grow through diverse activities, clubs, and meaningful relationships.
          </p>
        </div>
      </section>

      {/* Co-curricular Activities Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Co-Curricular Activities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in the development of the whole student. Our diverse programs foster creativity, teamwork, and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-primary/5 border-2 border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* School Facilities Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, well-equipped facilities designed to support every aspect of student learning and development.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 text-center border-2 border-border hover:shadow-lg hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">{facility.icon}</div>
                <p className="font-bold text-foreground text-sm md:text-base">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day in the Life Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">A Day in the Life</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what a typical school day looks like for our students.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { time: '7:30 AM', activity: 'Morning Assembly & Flag Raising', desc: 'Students gather for morning prayers and the flag ceremony.' },
              { time: '8:00 AM - 10:30 AM', activity: 'Core Academic Classes', desc: 'English, Mathematics, and Science instruction with qualified teachers.' },
              { time: '10:30 AM - 11:00 AM', activity: 'Morning Break', desc: 'Recess with healthy snacks and supervised playtime.' },
              { time: '11:00 AM - 1:00 PM', activity: 'Continued Academics & Practical Labs', desc: 'Science experiments, group projects, and interactive learning.' },
              { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break', desc: 'Nutritious meals in the school cafeteria.' },
              { time: '2:00 PM - 3:30 PM', activity: 'Co-Curricular Activities', desc: 'Sports, clubs, art sessions, and enrichment programs.' },
              { time: '3:30 PM - 4:00 PM', activity: 'Afternoon Assembly', desc: 'Final assembly, announcements, and dismissal.' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm md:text-base text-center">
                    {item.time.split('-')[0]}
                  </div>
                  {index < 6 && <div className="w-1 h-12 md:h-16 bg-primary/30 mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-lg text-foreground mb-1">{item.activity}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Celebrating Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our students consistently achieve recognition in academics, sports, and cultural competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-primary/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-primary mb-3">95%</div>
              <p className="text-lg font-bold text-foreground mb-2">Academic Success</p>
              <p className="text-muted-foreground">Students consistently excel in national assessments with 95% passing rates.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-accent/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-accent mb-3">25+</div>
              <p className="text-lg font-bold text-foreground mb-2">Awards & Trophies</p>
              <p className="text-muted-foreground">Annual championships in sports, debate, music, and other competitions.</p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-secondary/20 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl font-bold text-secondary mb-3">80%</div>
              <p className="text-lg font-bold text-foreground mb-2">Extra-Curricular Participation</p>
              <p className="text-muted-foreground">Eight out of ten students actively participate in clubs and activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastoral Care Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pastoral Care & Wellness</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that student wellbeing is fundamental to effective learning. Our pastoral care program ensures every student feels valued and supported.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  'Personal counseling and guidance',
                  'Mental health support services',
                  'Peer mentoring programs',
                  'Conflict resolution workshops',
                  'Family engagement initiatives',
                  'Safe reporting mechanisms'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border-2 border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Creating a Safe Community</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our school maintains zero-tolerance policies on bullying and discrimination. Every student is encouraged to report concerns through multiple channels, and swift action is taken to ensure a safe, inclusive environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">24/7 anonymous reporting system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">Regular safety and wellness training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-muted-foreground">Trained counselors and support staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
