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
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            KICD Competency-Based Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive curriculum focused on talents, abilities, values, and practical skills for modern learners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${offering.color} border ${offering.borderColor} rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col`}
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {offering.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {offering.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Learning Outcomes */}
        <div className="mt-16 bg-white border border-border rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Learning Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Critical Thinking</h4>
              <p className="text-muted-foreground">
                Developing analytical skills and problem-solving abilities for real-world challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Teamwork & Values</h4>
              <p className="text-muted-foreground">
                Building collaborative spirits and character development for responsible citizenship.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">Practical Skills</h4>
              <p className="text-muted-foreground">
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
