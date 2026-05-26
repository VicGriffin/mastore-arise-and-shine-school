import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@/components/common/Button'
import { homeHighlights, siteConfig } from '@/lib/site-content'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
      <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-slate-200 bg-white shadow-lg">
        <div className="relative flex flex-col">
          {/* Hero Image Background */}
          <div className="relative h-96 sm:h-[500px] lg:h-[550px] overflow-hidden rounded-t-[2.2rem]">
            <Image
              src="/images/heropage.jpg"
              alt="Learners at Mastore Arise and Shine School"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Hero Content */}
          <div className="relative px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            {/* Main Heading */}
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Welcome to Mastore Arise and Shine School
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">
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

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2">
                  <BookOpen className="h-4 w-4 text-emerald-600" />
                  KICD CBC Excellence
                </span>
                <span className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2">
                  Est. {siteConfig.established}
                </span>
              </div>
            </div>

            {/* Highlights Grid at Bottom */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-8">
                About Our School
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {homeHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:shadow-md transition-shadow"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                      {item.label}
                    </p>
                    <p className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
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
