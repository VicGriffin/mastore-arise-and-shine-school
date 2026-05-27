import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@/components/common/Button'
import { homeHighlights, siteConfig } from '@/lib/site-content'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
      <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-slate-200 shadow-lg">
        <div className="relative flex flex-col min-h-[600px] sm:min-h-[700px] lg:min-h-[750px]">
          {/* Background Image */}
          <Image
            src="/images/heropage.jpg"
            alt="Learners at Mastore Arise and Shine School"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Hero Content - Positioned Over Image */}
          <div className="relative flex flex-col justify-between h-full px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            {/* Main Heading */}
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Welcome to Mastore Arise and Shine School
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
                {siteConfig.mission}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/academics" size="xl">
                  Explore Academics
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/contact#inquiry-form" variant="subtle" size="xl">
                  Contact Admissions
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/15 backdrop-blur-sm px-4 py-2">
                  <BookOpen className="h-4 w-4 text-white" />
                  KICD CBC Excellence
                </span>
                <span className="rounded-lg border border-white/30 bg-white/15 backdrop-blur-sm px-4 py-2">
                  Est. {siteConfig.established}
                </span>
              </div>
            </div>

            {/* Highlights List at Bottom */}
            <div className="mt-auto pt-12">
              <div className="flex flex-col gap-4">
                {homeHighlights.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white/70 mt-2" />
                    <div>
                      <p className="text-sm font-semibold text-white/90">
                        {item.label}: <span className="font-bold">{item.value}</span>
                      </p>
                      <p className="text-sm text-white/70 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
