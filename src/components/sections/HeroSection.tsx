import Image from 'next/image'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import Button from '@/components/common/Button'
import { homeHighlights, siteConfig } from '@/lib/site-content'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
      <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950 shadow-[0_45px_120px_-60px_rgba(15,23,42,0.8)]">
        <Image
          src="/images/heropage.jpg"
          alt="Learners at Mastore Arise and Shine School"
          fill
          priority
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.34),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.24),transparent_34%)]" />

        <div className="relative grid gap-12 px-6 py-14 sm:px-8 sm:py-[4.5rem] lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-20">
          <div className="max-w-3xl">
            <span className="section-kicker border-white/20 bg-white/10 text-sky-100">
              <Sparkles className="h-3.5 w-3.5" />
              Inclusive learning from PP1 to Grade 9
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              A modern learning home for children who are taught to{' '}
              <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                strive to excel.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
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

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2">
                <BookOpen className="h-4 w-4 text-cyan-300" />
                KICD CBC excellence
              </span>
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                Established {siteConfig.established}
              </span>
            </div>
          </div>

          <div className="grid gap-4 self-end">
            {homeHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.7rem] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl font-semibold sm:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
