import HeroSection from '@/components/sections/HeroSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection'
import CallToActionSection from '@/components/sections/CallToActionSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreviewSection />
      <WhatWeOfferSection />
      <StatisticsSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <CallToActionSection />
    </main>
  )
}
