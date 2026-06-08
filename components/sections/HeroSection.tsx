import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import { Sparkles, BookOpen, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/95 via-blue-900/90 to-slate-900/95" />
      
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.57.jpeg"
          alt="Mastore Arise & Shine School"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
        />
      </div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-5 animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -z-5 animate-pulse" style={{animationDelay: '2s'}} />
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-accent/60 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0s'}} />
      <div className="absolute top-40 right-1/3 w-3 h-3 bg-white/30 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent/40 rounded-full opacity-40 animate-bounce" style={{animationDelay: '2s'}} />

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white w-full">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 px-4 sm:px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Excellence in Education Since 2019</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance tracking-tight">
              Nurture Minds,<br className="hidden sm:block" />
              <span className="text-accent">Shape Futures</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Where academic excellence meets holistic development. We empower learners to think critically, act ethically, and excel globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 sm:pt-10">
            <Link href="/academics" className="w-full sm:w-auto">
              <Button 
                variant="primary" 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-orange-600 w-full sm:w-auto font-semibold"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Academics
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white/15 backdrop-blur-sm w-full sm:w-auto font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Visit
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 sm:pt-16 max-w-3xl mx-auto">
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-white/80 font-medium">Years of Excellence</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">400+</div>
              <div className="text-sm text-white/80 font-medium">Thriving Students</div>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-white/80 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
