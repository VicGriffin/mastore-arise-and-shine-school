import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.57.jpeg"
          alt="Mastore Arise & Shine School"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/85 to-black/90" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/15 rounded-full blur-3xl -mr-32 sm:-mr-40 md:-mr-48 -mt-16 sm:-mt-20 md:-mt-24 z-0" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-400/10 rounded-full blur-3xl -ml-32 sm:-ml-40 md:-ml-48 -mb-16 sm:-mb-20 md:-mb-24 z-0" />

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white w-full">
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm">
            <span className="font-semibold">Welcome to Excellence in Education</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
            MASTORE ARISE<br />& SHINE SCHOOL
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Strive to Excel. Quality education that develops learners spiritually, socially, and academically since 2019.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 md:pt-10">
            <Link href="/academics" className="w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 w-full sm:w-auto"
              >
                Explore Academics
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                Schedule Admissions
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">5+</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Years Strong</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold break-words">Play Group - G9</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">All Grade Levels</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold">95%</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
