'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function HeroSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 gradient-warm rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className={`transition-smooth ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-gradient">Arise & Shine</span>
            <br />
            <span className="text-foreground">Your Path to Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Discover a modern learning environment designed to inspire, engage, and empower every student to reach their full potential.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 bg-gradient-primary text-white font-semibold rounded-lg hover-lift shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore More
            </button>
            <button
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-smooth hover:scale-105"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className={`mt-16 transition-smooth ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="inline-block">
            <div className="text-6xl animate-bounce-custom">↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
