import HeroSection from '@/components/sections/HeroSection';
import AboutPreviewSection from '@/components/sections/AboutPreviewSection';
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <WhatWeOfferSection />
      <StatisticsSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
