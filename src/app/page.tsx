import type { Metadata } from 'next'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import CallToActionSection from '@/components/sections/CallToActionSection'
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection'
import HeroSection from '@/components/sections/HeroSection'
import StatisticsSection from '@/components/sections/StatisticsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhatWeOfferSection from '@/components/sections/WhatWeOfferSection'
import { siteConfig } from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'Inclusive CBC Learning in Juja',
  description:
    'Explore the Mastore Arise and Shine School experience, from mission-driven learning and Junior School growth to admissions, gallery highlights, and curriculum pathways.',
  openGraph: {
    title: `${siteConfig.name} | Inclusive CBC Learning in Juja`,
    description:
      'Mission-driven PP1 to Grade 9 learning rooted in spiritual, social, and academic development.',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <WhatWeOfferSection />
      <StatisticsSection />
      <TestimonialsSection />
      <GalleryPreviewSection />
      <CallToActionSection />
    </>
  )
}
