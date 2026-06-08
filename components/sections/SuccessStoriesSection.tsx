import React from 'react';
import { Star } from 'lucide-react';

const SuccessStoriesSection = () => {
  const stories = [
    {
      name: 'Kamau Kipchoge',
      grade: 'Grade 9 Student',
      story: 'From struggling with confidence to becoming class captain. The supportive environment helped me discover my leadership potential.',
      rating: 5
    },
    {
      name: 'Zainab Mwangi',
      grade: 'Grade 6 Student',
      story: 'Mastore gave me the tools to excel in STEM subjects. I now dream of becoming an engineer!',
      rating: 5
    },
    {
      name: 'David Njoroge',
      grade: 'Former Grade 9 Graduate',
      story: 'The holistic education I received prepared me well for secondary school. I scored 380/400 in my first term!',
      rating: 5
    },
    {
      name: 'Grace Kiplagat',
      grade: 'Grade 5 Student',
      story: 'I joined as a shy student, but the teachers made me feel valued. Now I participate confidently in class.',
      rating: 5
    },
    {
      name: 'Peter Ochieng',
      grade: 'Grade 8 Student',
      story: 'The sports programs helped me stay healthy and focused on studies. I won Best All-Rounder Award!',
      rating: 5
    },
    {
      name: 'Amelia Hassan',
      grade: 'Parent',
      story: 'Seeing my child grow academically and emotionally is priceless. The school truly cares about every student.',
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-max">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Student Success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Our Students Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from students and parents about their transformative experiences at Mastore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-white border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 italic">
                {`"${story.story}"`}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-bold text-foreground">{story.name}</p>
                <p className="text-xs md:text-sm text-secondary">{story.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
