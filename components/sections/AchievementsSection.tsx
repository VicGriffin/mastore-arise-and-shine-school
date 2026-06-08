import React from 'react';
import { Award, Trophy, Medal, Target, BookOpen, Users } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Consistent top performance in KPSEA and KJSEA assessments across all grade levels.',
      color: 'from-amber-100 to-orange-50'
    },
    {
      icon: Award,
      title: 'KICD Recognition',
      description: 'Fully registered and certified by Kenya Institute of Curriculum Development with competency-based curriculum.',
      color: 'from-green-100 to-emerald-50'
    },
    {
      icon: Medal,
      title: 'Sports & Arts',
      description: 'Multiple championship wins in inter-school competitions and cultural events.',
      color: 'from-blue-100 to-cyan-50'
    },
    {
      icon: Target,
      title: 'Student Development',
      description: 'Holistic growth programs focusing on spiritual, social, and academic development.',
      color: 'from-purple-100 to-pink-50'
    },
    {
      icon: BookOpen,
      title: 'Quality Curriculum',
      description: 'Comprehensive curriculum covering STEAM subjects with modern teaching methodologies.',
      color: 'from-indigo-100 to-purple-50'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Strong partnerships with parents and community organizations for student welfare.',
      color: 'from-rose-100 to-pink-50'
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-max">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Our Achievements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recognition & Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take pride in our students' accomplishments and our commitment to delivering quality education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${achievement.color} border border-white/50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white/60 group-hover:bg-white transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
