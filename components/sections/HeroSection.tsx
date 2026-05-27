import React from 'react';
import Link from 'next/link';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl -ml-48 -mb-24" />

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-sm font-semibold">Welcome to Excellence in Education</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
            MASTORE ARISE<br />& SHINE SCHOOL
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Strive to Excel. Quality education that develops learners spiritually, socially, and academically since 2019.
          </p>

          {/* Tagline */}
          <div className="pt-4">
            <p className="text-sm uppercase tracking-widest font-bold text-blue-200">
              Inclusive Systems. Scalable Impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/academics">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                Explore Academics
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Admissions
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-blue-100">Years Strong</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">PP1-9</div>
              <div className="text-sm text-blue-100">All Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
