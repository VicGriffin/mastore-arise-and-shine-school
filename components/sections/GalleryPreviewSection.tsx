import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import { ArrowRight } from 'lucide-react';
import { mastoreGalleryItems } from '../../src/lib/site-content';

const GalleryPreviewSection = () => {
  // Show only the first 6 real images for preview
  const previewItems = mastoreGalleryItems.slice(0, 6);

  return (
    <section className="section-padding bg-white">
      <div className="container-max px-4 sm:px-0">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Learning Environment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Supportive Learning Facilities
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the modern infrastructure and comprehensive facilities that create an inspiring learning environment for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="relative h-48 sm:h-56 md:h-64 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 text-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery */}
        <div className="flex justify-center px-4 sm:px-0">
          <Link href="/gallery" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="group w-full sm:w-auto justify-center">
              View Full Gallery
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
