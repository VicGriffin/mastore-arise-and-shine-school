'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const navigationItems = [
    {
      id: 'about',
      title: 'About Us',
      description: 'Learn about our school\'s history, mission, and values',
      icon: '📖',
      href: '/about',
      gradient: 'gradient-primary',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'academics',
      title: 'Academics',
      description: 'Explore our CBC curriculum and learning programs',
      icon: '📚',
      href: '/academics',
      gradient: 'gradient-gold',
      color: 'from-yellow-400 to-amber-500',
    },
    {
      id: 'childrens-home',
      title: 'Children\'s Home',
      description: 'Support our mission to care for vulnerable children',
      icon: '❤️',
      href: '/childrens-home',
      gradient: 'gradient-soft',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 'gallery',
      title: 'Gallery',
      description: 'Browse our school activities and achievements',
      icon: '🎨',
      href: '/gallery',
      gradient: 'gradient-vibrant',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 'blog',
      title: 'News & Blog',
      description: 'Stay updated with latest stories and events',
      icon: '📰',
      href: '/blog',
      gradient: 'gradient-primary',
      color: 'from-teal-400 to-cyan-500',
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Get in touch with Mastore Arise & Shine School',
      icon: '📞',
      href: '/contact',
      gradient: 'gradient-gold',
      color: 'from-indigo-400 to-purple-500',
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-primary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-gold opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-soft opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header className="relative backdrop-blur-md bg-background/80 border-b border-green-200 dark:border-green-900 sticky top-0 z-50 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gradient animate-slide-in-left">
                Mastore Arise & Shine
              </h1>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                Excellence in Education | Empowering Lives
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8 sm:py-24">
        <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-gradient">
            Welcome to Excellence
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            A leading educational institution in Juja, Kiambu County, dedicated to nurturing young minds and transforming lives through quality education and compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-gradient-primary text-white font-bold rounded-lg hover-lift hover:shadow-xl transition-all hover:scale-105 animate-scale-in"
            >
              Discover More
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 font-bold rounded-lg hover-lift transition-all hover:bg-green-50 dark:hover:bg-green-900/30 animate-scale-in"
              style={{animationDelay: '0.2s'}}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Cards Grid */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient animate-fade-in-up">
            Explore Our World
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`relative h-64 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:scale-105 ${
                  hoveredCard === item.id ? 'shadow-2xl' : 'shadow-lg'
                }`}>
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 ${item.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 text-white">
                    <div>
                      <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 text-white text-2xl transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-card-bg dark:bg-slate-800/50 rounded-2xl mx-4 sm:mx-6 lg:mx-8 my-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Students', value: '500+', icon: '👥' },
              { label: 'Teachers', value: '50+', icon: '👨‍🏫' },
              { label: 'Success Rate', value: '98%', icon: '🏆' },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-vibrant rounded-2xl p-8 sm:p-12 text-white animate-scale-in">
            <h2 className="text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg opacity-90 mb-8">
              Contact us today to learn more about our programs and admission process.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 transform hover-lift"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-green-200 dark:border-green-900 mt-12 py-8 bg-background/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-foreground/60 animate-fade-in">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">
              Mastore Arise & Shine School
            </h3>
            <p className="text-sm mb-4">Juja Sub County, Kiambu County, Kenya</p>
            <p className="text-xs">
              📞 +254 XXX XXX XXX | ✉️ info@mastoreschool.ac.ke
            </p>
            <p className="text-xs mt-4">
              © 2024 Mastore Arise & Shine School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
