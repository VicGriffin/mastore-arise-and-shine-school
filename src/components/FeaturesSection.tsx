'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const features = [
  {
    id: 1,
    title: 'Modern Learning',
    description: 'Cutting-edge curriculum designed for 21st-century skills and real-world applications.',
    icon: '📚',
    color: 'gradient-primary',
    delay: '0s',
  },
  {
    id: 2,
    title: 'Expert Faculty',
    description: 'Dedicated educators with extensive experience and passion for student development.',
    icon: '👨‍🏫',
    color: 'gradient-warm',
    delay: '0.1s',
  },
  {
    id: 3,
    title: 'Advanced Facilities',
    description: 'State-of-the-art labs, technology centers, and collaborative learning spaces.',
    icon: '🏢',
    color: 'gradient-cool',
    delay: '0.2s',
  },
  {
    id: 4,
    title: 'Holistic Development',
    description: 'Sports, arts, and extracurricular activities that nurture well-rounded individuals.',
    icon: '🎨',
    color: 'gradient-vibrant',
    delay: '0.3s',
  },
  {
    id: 5,
    title: 'Global Network',
    description: 'International partnerships and exchange programs for global perspective.',
    icon: '🌍',
    color: 'gradient-primary',
    delay: '0.4s',
  },
  {
    id: 6,
    title: 'Student Success',
    description: 'Proven track record of academic excellence and student achievements.',
    icon: '🏆',
    color: 'gradient-warm',
    delay: '0.5s',
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-smooth ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0 -translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We provide comprehensive education that combines academic rigor with creative exploration
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`transition-smooth ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: feature.delay }}
            >
              <div className="group relative h-full p-8 rounded-2xl card-glass hover-lift backdrop-blur-md border border-transparent hover:border-primary/30 transition-smooth">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl ${feature.color} opacity-0 group-hover:opacity-10 transition-smooth -z-10`}></div>

                {/* Icon */}
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110 group-hover:-translate-y-2">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 text-primary text-2xl transform translate-x-0 group-hover:translate-x-2 transition-transform">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
