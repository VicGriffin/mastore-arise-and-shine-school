'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['All', 'Academics', 'Facilities', 'Sports', 'Co-curricular', 'Transport', 'Campus'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const openLightbox = (imageSrc: string) => {
    const index = items.findIndex(item => item.image === imageSrc);
    if (index !== -1) {
      setActiveImageIndex(index);
    }
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % items.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              selectedCategory === category
                ? 'bg-primary text-white scale-105 shadow-md shadow-primary/20'
                : 'bg-slate-100 text-muted-foreground hover:bg-slate-200 hover:text-foreground'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid count display */}
      <div className="text-center text-sm text-muted-foreground">
        Showing <span className="font-bold text-foreground">{filteredItems.length}</span> out of{' '}
        <span className="font-bold text-foreground">{items.length}</span> school moments
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            onClick={() => openLightbox(item.image)}
            className="group relative h-72 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-100"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Dark gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
            
            {/* Interactive indicator */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Information Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end h-1/2">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 border border-white/10 w-fit mb-2 text-blue-200">
                {item.category}
              </span>
              <h3 className="text-lg font-bold mb-1 line-clamp-1 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-white/80 text-xs line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left arrow */}
          <button
            onClick={showPrev}
            className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right arrow */}
          <button
            onClick={showNext}
            className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full h-[65vh] md:h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[activeImageIndex].image}
              alt={items[activeImageIndex].title}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>

          {/* Image Metadata Info */}
          <div className="text-center text-white max-w-2xl mt-6 space-y-2 px-4" onClick={(e) => e.stopPropagation()}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-md">
              {items[activeImageIndex].category}
            </span>
            <h4 className="text-xl md:text-2xl font-bold">{items[activeImageIndex].title}</h4>
            <p className="text-white/70 text-sm leading-relaxed">{items[activeImageIndex].description}</p>
            <div className="text-xs text-white/40 pt-2">
              Moments {activeImageIndex + 1} of {items.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
