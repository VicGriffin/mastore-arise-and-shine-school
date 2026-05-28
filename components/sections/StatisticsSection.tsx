import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const StatisticsSection = () => {
  const stats = [
    {
      icon: Award,
      number: '2019',
      label: 'Established Year',
      description: 'Founded on principles of excellence and holistic development',
    },
    {
      icon: Users,
      number: 'Play Group - G9',
      label: 'Grade Coverage',
      description: 'Comprehensive education from pre-primary through junior secondary',
    },
    {
      icon: TrendingUp,
      number: '95%+',
      label: 'Success Rate',
      description: 'Excellent KPSEA & KJSEA performance above expectations',
    },
  ];

  return (
    <section className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mb-24" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-blue-100 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">5+</div>
              <p className="text-sm text-blue-100">Years Operating</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <p className="text-sm text-blue-100">Enrolled Learners</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <p className="text-sm text-blue-100">Dedicated Staff</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">5</div>
              <p className="text-sm text-blue-100">Learning Pillars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
