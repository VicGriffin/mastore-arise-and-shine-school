import React from 'react';
import { Shield, CheckCircle2, Book, Leaf, Heart, Users, Zap, Lock } from 'lucide-react';

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Fully Registered',
      description: 'Registered with TSC and KICD'
    },
    {
      icon: CheckCircle2,
      title: 'Accredited',
      description: 'Ministry of Education approved'
    },
    {
      icon: Book,
      title: 'CBC Curriculum',
      description: 'Competency-Based Curriculum'
    },
    {
      icon: Leaf,
      title: 'Green Campus',
      description: 'Eco-friendly school environment'
    },
    {
      icon: Heart,
      title: 'Student Welfare',
      description: 'Safe and supportive community'
    },
    {
      icon: Users,
      title: 'Expert Staff',
      description: 'Qualified and experienced teachers'
    },
    {
      icon: Zap,
      title: 'Modern Facilities',
      description: 'State-of-the-art learning spaces'
    },
    {
      icon: Lock,
      title: 'Security First',
      description: '24/7 campus security measures'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Mastore Arise & Shine?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine academic excellence with holistic student development in a secure, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 text-center border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                </div>
                <h4 className="font-bold text-sm md:text-base text-foreground mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
