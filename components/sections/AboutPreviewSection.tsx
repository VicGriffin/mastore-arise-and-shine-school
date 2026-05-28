import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Star, Sparkles, GraduationCap } from 'lucide-react';

const AboutPreviewSection = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Content (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" /> About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Building Excellence Since 2019
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Mastore Arise and Shine School was established in May 2019 with a vision to provide quality education while developing learners spiritually, socially, and academically. We grew from humble roots to a comprehensive institution serving students from Play Group to Grade 9.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <Star className="w-5 h-5" /> Our Mission
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "To nurture the learner with knowledge, skill and values to produce a responsible and independent person in the society."
                </p>
              </div>

              <div className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" /> Our Vision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  "To impact the learner with divine wisdom and connect him/her with his/her god ordained purpose for effective societal development."
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg shadow-sm">
              <p className="text-primary font-bold text-xl">
                STRIVE TO EXCEL
              </p>
              <p className="text-sm text-muted-foreground mt-1">Our Motto</p>
            </div>
          </div>

          {/* Styled Image Section (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-slate-50">
              <Image
                src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.30.jpeg"
                alt="Mastore Arise & Shine Classroom Pupils"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 1024px) 450px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlapping Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Registered & Certified</p>
                  <p className="text-sm font-bold text-foreground">KICD Competency-Based Curriculum</p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-400/10 rounded-full blur-xl -z-10" />
          </div>
        </div>

        {/* Features Row - 4 items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-bold text-foreground mb-2">Established 2019</h4>
            <p className="text-xs text-muted-foreground">
              Founded on principles of quality education and holistic development.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-bold text-foreground mb-2">Play Group - G9</h4>
            <p className="text-xs text-muted-foreground">
              Comprehensive coverage from pre-primary through junior secondary levels.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-bold text-foreground mb-2">Excellence Records</h4>
            <p className="text-xs text-muted-foreground">
              Excellent performance in KPSEA and KJSEA assessments consistently.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle2 className="w-6 h-6 text-primary mb-3" />
            <h4 className="font-bold text-foreground mb-2">Holistic Growth</h4>
            <p className="text-xs text-muted-foreground">
              Development across academic, spiritual, and social dimensions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
