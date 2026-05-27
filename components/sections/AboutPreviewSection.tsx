import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Building Excellence Since 2019
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mastore Arise and Shine School was established in May 2019 with a vision to provide quality education while developing learners spiritually, socially, and academically. We grew from humble roots to a comprehensive institution serving students from PP1 to Grade 9.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                To nurture the learner with knowledge, skill and values to produce a responsible and independent person in the society.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                To impact the learner with divine wisdom and connect him/her with his/her god ordained purpose for effective societal development.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-primary font-bold text-xl">
                STRIVE TO EXCEL
              </p>
              <p className="text-sm text-muted-foreground mt-1">Our Motto</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground mb-2">Established 2019</h4>
              <p className="text-sm text-muted-foreground">
                Founded on principles of quality education and holistic development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground mb-2">Grades PP1 - 9</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive coverage from pre-primary through junior secondary levels.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground mb-2">Excellence Records</h4>
              <p className="text-sm text-muted-foreground">
                Excellent performance in KPSEA and KJSEA assessments consistently.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
              <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
              <h4 className="font-bold text-foreground mb-2">Holistic Growth</h4>
              <p className="text-sm text-muted-foreground">
                Development across academic, spiritual, and social dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
