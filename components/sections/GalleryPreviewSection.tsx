import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import { ArrowRight } from 'lucide-react';
import { galleryItems } from '../../src/lib/site-content';

const GalleryPreviewSection = () => {
  // Show only the first 6 images for preview
  const previewItems = galleryItems.slice(0, 6);

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
          {previewItems.map((item, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 400px, 100vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
              </div>
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
