import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const PrincipalMessageSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-40 -z-10" />
      
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Image (2 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
              <Image
                src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.57.jpeg"
                alt="School Principal"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(min-width: 1024px) 400px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-start gap-3">
              <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed italic">
                  {"At Mastore Arise & Shine, we believe that education extends beyond academics. We nurture young minds to become responsible citizens who think critically, act ethically, and serve their communities with purpose and compassion."}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Dr. Jane Kipchoge</h3>
              <p className="text-lg text-secondary font-semibold">Principal & Founder</p>
              <p className="text-muted-foreground">
                With over 20 years of experience in educational leadership, Dr. Kipchoge founded Mastore Arise & Shine with a vision to transform education in Kenya.
              </p>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <p className="text-xs text-muted-foreground mt-1">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">400+</div>
                  <p className="text-xs text-muted-foreground mt-1">Happy Students</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <p className="text-xs text-muted-foreground mt-1">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessageSection;
