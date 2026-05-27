import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { ArrowRight } from 'lucide-react';

const GalleryPreviewSection = () => {
  const galleryItems = [
    {
      title: 'Computer Lab',
      description: 'Modern ICT facilities for digital literacy',
      bgColor: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Library',
      description: 'Extensive resources for research and learning',
      bgColor: 'from-green-400 to-green-600',
    },
    {
      title: 'Science Laboratory',
      description: 'Well-equipped for practical experiments',
      bgColor: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Sports Facilities',
      description: 'Fields and courts for athletic development',
      bgColor: 'from-orange-400 to-orange-600',
    },
    {
      title: 'School Transport',
      description: 'Safe and reliable transportation services',
      bgColor: 'from-red-400 to-red-600',
    },
    {
      title: 'Creative Studios',
      description: 'Spaces for arts and cultural expression',
      bgColor: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            School Resources
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore Our School
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            State-of-the-art facilities supporting world-class education and student development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-90 group-hover:opacity-100 transition-opacity`} />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* View Full Gallery */}
        <div className="flex justify-center">
          <Link href="/gallery">
            <Button variant="primary" size="lg" className="group">
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
