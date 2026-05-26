import {
  BookText,
  FlaskConical,
  Globe2,
  Palette,
  ShieldCheck,
} from 'lucide-react'
import Button from '@/components/common/Button'
import { curriculumOverview, learningTracks } from '@/lib/site-content'

const icons = [Globe2, FlaskConical, BookText, ShieldCheck, Palette]

export default function WhatWeOfferSection() {
  return (
    <section className="section-pad relative">
      <div className="page-shell">
        <div className="surface-panel overflow-hidden px-6 py-10 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="section-kicker bg-blue-50 text-blue-700">
                KICD CBC learning pillars
              </span>
              <h2 className="section-title mt-5">
                A curriculum architecture built for knowledge, values, talents, and
                practical growth.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                {curriculumOverview.framework}
              </p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500">
                {curriculumOverview.scope}
              </p>
              <div className="mt-7">
                <Button href="/academics" size="lg">
                  View Curriculum Details
                </Button>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {learningTracks.map((track, index) => {
                const Icon = icons[index]

                return (
                  <article key={track.title} className="surface-card lift-hover p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">
                      {track.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {track.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {track.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
