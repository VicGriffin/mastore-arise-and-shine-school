import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Leadership Voice
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Academic Excellence & Support
            </h2>
          </div>

          {/* Main Testimonial */}
          <div className="bg-white border-2 border-primary rounded-2xl p-8 md:p-12 shadow-lg">
            {/* Stars */}
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-center mb-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground italic leading-relaxed mb-4">
                &ldquo;Excellence in teaching and learning requires continuous support, guidance, and close collaboration between teachers, learners, and parents. My role is to ensure every student achieves their full potential while growing holistically&mdash;academically, spiritually, and socially.&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div className="text-center border-t-2 border-border pt-6">
              <h4 className="text-lg font-bold text-foreground">
                Madam Martha Kamau
              </h4>
              <p className="text-primary font-semibold mb-2">
                Senior Teacher, Head of Academics
              </p>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                Leading curriculum implementation and ensuring learner success through strategic academic guidance and holistic development.
              </p>
            </div>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                <span className="text-lg font-bold text-primary">✓</span>
              </div>
              <h4 className="font-bold text-foreground mb-1">Learner-Centered</h4>
              <p className="text-sm text-muted-foreground">
                Every decision focuses on student growth and success.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                <span className="text-lg font-bold text-primary">✓</span>
              </div>
              <h4 className="font-bold text-foreground mb-1">Excellence Focus</h4>
              <p className="text-sm text-muted-foreground">
                We strive for the highest standards in all endeavors.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
                <span className="text-lg font-bold text-primary">✓</span>
              </div>
              <h4 className="font-bold text-foreground mb-1">Partnership</h4>
              <p className="text-sm text-muted-foreground">
                Collaboration between school, families, and community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
