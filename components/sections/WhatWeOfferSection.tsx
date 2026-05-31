import React from 'react';
import { BookOpen, TestTubes, Globe, Cpu, Palette } from 'lucide-react';

const WhatWeOfferSection = () => {
  const offerings = [
    {
      icon: Globe,
      title: 'Languages',
      description: 'English, Kiswahili, and French from Grade 1 to Grade 9 to build international communication skills.',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
    },
    {
      icon: TestTubes,
      title: 'Sciences',
      description: 'Science & Technology, Integrated Science, Agriculture and Nutrition programs.',
      color: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200',
    },
    {
      icon: BookOpen,
      title: 'Humanities',
      description: 'Social Studies and Christian Religious Education for well-rounded understanding.',
      color: 'from-amber-50 to-amber-100',
      borderColor: 'border-amber-200',
    },
    {
      icon: Cpu,
      title: 'Technical Studies',
      description: 'Computer Studies and ICT focused on digital literacy and modern skills.',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
    },
    {
      icon: Palette,
      title: 'Co-Curriculum',
      description: 'Creative Arts and Sports for talent development and physical wellness.',
      color: 'from-pink-50 to-pink-100',
      borderColor: 'border-pink-200',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-max">
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4 sm:px-0">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            KICD Competency-Based Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive curriculum focused on talents, abilities, values, and practical skills for modern learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${offering.color} border ${offering.borderColor} rounded-lg md:rounded-xl p-5 sm:p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full`}
              >
                <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-primary mb-3 sm:mb-4 flex-shrink-0" />
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {offering.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-white border border-border rounded-lg md:rounded-2xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-0">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Core Learning Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-blue-100 mb-4 sm:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2 sm:mb-3">Critical Thinking</h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Developing analytical skills and problem-solving abilities for real-world challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-blue-100 mb-4 sm:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2 sm:mb-3">Teamwork & Values</h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Building collaborative spirits and character development for responsible citizenship.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-blue-100 mb-4 sm:mb-6 flex-shrink-0">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-bold text-base sm:text-lg md:text-xl text-foreground mb-2 sm:mb-3">Practical Skills</h4>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                Application of knowledge in real-world contexts and digital literacy competencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
