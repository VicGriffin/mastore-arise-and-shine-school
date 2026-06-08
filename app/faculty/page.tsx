import React from 'react';
import { Award, BookOpen, Users, Target, GraduationCap, Heart } from 'lucide-react';

export default function FacultyPage() {
  const departments = [
    {
      name: 'Early Childhood Development',
      icon: Heart,
      focus: 'Play Group & Pre-Primary',
      highlights: [
        'Nurturing and holistic approach',
        'Montessori-inspired activities',
        'Early literacy and numeracy',
        'Social-emotional development'
      ]
    },
    {
      name: 'Primary Education',
      icon: BookOpen,
      focus: 'Grades 1-3',
      highlights: [
        'Foundational skills mastery',
        'Inquiry-based learning',
        'Creative subject integration',
        'Character development'
      ]
    },
    {
      name: 'Upper Primary',
      icon: Target,
      focus: 'Grades 4-6',
      highlights: [
        'Advanced academic content',
        'Leadership development',
        'Subject specialization begins',
        'STEAM integration'
      ]
    },
    {
      name: 'Junior Secondary',
      icon: GraduationCap,
      focus: 'Grades 7-9',
      highlights: [
        'Rigorous academic curriculum',
        'Specialized labs and facilities',
        'Exam preparation',
        'Career guidance'
      ]
    }
  ];

  const staffCategories = [
    {
      category: 'Teaching Staff',
      count: '45+',
      description: 'Qualified, experienced teachers with relevant certifications and continuous professional development.'
    },
    {
      category: 'Support Staff',
      count: '30+',
      description: 'Administrative, counseling, and technical staff ensuring smooth school operations.'
    },
    {
      category: 'Sports Coaches',
      count: '8+',
      description: 'Certified coaches developing student athletes across various sports disciplines.'
    },
    {
      category: 'Specialist Teachers',
      count: '12+',
      description: 'Arts, music, ICT, and special needs teachers providing specialized instruction.'
    }
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
            Meet Our Faculty & Staff
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Dedicated educators and professionals committed to student success and holistic development.
          </p>
        </div>
      </section>

      {/* Faculty Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our faculty comprises highly trained professionals dedicated to creating an inspiring learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffCategories.map((staff, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-primary/5 border-2 border-border rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-bold text-primary mb-3">{staff.count}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{staff.category}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{staff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Academic Departments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each department is led by experienced coordinators who ensure quality instruction and student achievement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{dept.name}</h3>
                      <p className="text-sm text-secondary font-semibold">{dept.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {dept.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Faculty Qualifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our teachers are highly qualified professionals with years of experience in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-8 border-2 border-border">
              <Award className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Educational Credentials</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Bachelor's degrees in education and subject specializations</li>
                <li>✓ Master's degrees in education and curriculum development</li>
                <li>✓ Teaching Service Commission (TSC) certification</li>
                <li>✓ Subject-specific professional certifications</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border-2 border-border">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">Professional Development</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Annual professional development workshops</li>
                <li>✓ Attendance at national and regional conferences</li>
                <li>✓ Training in modern pedagogies and technology</li>
                <li>✓ Mentoring and peer observation programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Teaching Philosophy</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border-2 border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Student-Centered Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                We place students at the heart of all learning experiences, tailoring instruction to individual learning styles and paces. Every student is valued for their unique strengths and potential.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Active Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                We move beyond traditional lecture-based teaching to create interactive, inquiry-based learning environments where students actively construct knowledge through practical experience and collaboration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Holistic Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond academics, we nurture students&apos; spiritual, social, emotional, and physical development. We recognize that well-rounded learners become well-rounded citizens who contribute meaningfully to society.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-border hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-3">Continuous Improvement</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to continuous professional growth and staying abreast of educational innovations. Regular assessment and reflection guide our instruction to ensure maximum student learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">School Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team provides visionary guidance and ensures excellence across all aspects of school operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl font-bold">
                DR
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Dr. Jane Kipchoge</h3>
              <p className="text-secondary font-semibold mb-3">Principal & Founder</p>
              <p className="text-sm text-muted-foreground">
                Educational leader with 20+ years of experience. Visionary founder of Mastore with commitment to educational excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-4xl font-bold">
                JK
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">John Kariuki</h3>
              <p className="text-secondary font-semibold mb-3">Academic Dean</p>
              <p className="text-sm text-muted-foreground">
                Oversees curriculum development and academic standards. Ensures quality instruction across all grade levels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-white text-4xl font-bold">
                MS
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Margaret Shared</h3>
              <p className="text-secondary font-semibold mb-3">Head of Pastoral Care</p>
              <p className="text-sm text-muted-foreground">
                Leads student welfare and development programs. Ensures safe, supportive school environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
