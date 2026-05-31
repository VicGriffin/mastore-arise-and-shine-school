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

      <div className="container-max relative z-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 sm:p-8 md:p-10 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-white" />
                  </div>
                </div>
                
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                  {stat.number}
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">5+</div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">Years Operating</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">500+</div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">Enrolled Learners</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">50+</div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">Dedicated Staff</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">5</div>
              <p className="text-xs sm:text-sm md:text-base text-blue-100">Learning Pillars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
