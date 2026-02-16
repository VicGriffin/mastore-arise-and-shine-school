'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUpAnimation } from '@/hooks/useCountUpAnimation';

const stats = [
  { label: 'Students', value: 2500, icon: '👥' },
  { label: 'Teachers', value: 150, icon: '👨‍🏫' },
  { label: 'Success Rate', value: 98, icon: '📊', suffix: '%' },
  { label: 'Years Excellence', value: 25, icon: '⭐', suffix: '+' },
];

export function StatsSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.4 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-tertiary mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-smooth ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in these impressive achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  icon,
  suffix = '',
  isVisible,
  delay,
}: {
  label: string;
  value: number;
  icon: string;
  suffix?: string;
  isVisible: boolean;
  delay: number;
}) {
  const count = useCountUpAnimation({
    end: value,
    duration: 2000,
  });

  return (
    <div
      className={`transition-smooth transform ${
        isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover-lift">
        <div className="text-5xl mb-4">{icon}</div>
        <div className="text-5xl font-bold mb-2">
          {isVisible ? count : 0}
          {suffix}
        </div>
        <p className="text-lg opacity-90">{label}</p>
      </div>
    </div>
  );
}
