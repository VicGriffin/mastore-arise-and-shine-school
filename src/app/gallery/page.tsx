import type { Metadata } from 'next'
import Image from 'next/image'
import { Camera, MonitorSmartphone, School, Sparkles } from 'lucide-react'
import { galleryItems } from '@/lib/site-content'

const categories = Array.from(new Set(galleryItems.map((item) => item.category)))

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse the visual story of Mastore Arise and Shine School across art, laboratories, library, sports, digital learning, and school transport.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
        <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950">
          <Image
            src="/images/mastore school bus2.jfif"
            alt="School transport at Mastore Arise and Shine School"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative max-w-4xl px-6 py-14 sm:px-8 lg:px-12 lg:py-[4.5rem]">
            <span className="section-kicker border-white/20 bg-white/10 text-sky-100">
              Visual school life
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              A closer look at the learning spaces, routines, and experiences shaping
              student life.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore art, computer learning, laboratories, library culture, sports, and
              the school transport fleet through a clean and modern visual grid.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="page-shell">
          <div className="mb-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div
                key={`${item.category}-${item.title}`}
                className={`overflow-hidden rounded-[1.6rem] flex flex-col ${
                  index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 ? 'aspect-[16/9]' : 'aspect-[4/4.2]'}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0
                        ? '(min-width: 1280px) 760px, 100vw'
                        : '(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw'
                    }
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
                        {item.category}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white backdrop-blur-sm">
                      <Camera className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-grow">
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell grid gap-8 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <MonitorSmartphone className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">
              Digital and practical learning
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The computer lab and laboratories show a learning model that values
              practical exploration alongside strong classroom teaching.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
              <School className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">
              Daily rhythms and resources
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Library, classroom, and transport images reflect the routines that keep
              access, readiness, and learner support consistent every day.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-950">
              Whole-child expression
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Art and sports images highlight the co-curricular environment that helps
              learners develop creativity, discipline, and teamwork.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
