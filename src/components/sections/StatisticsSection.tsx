'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { BarChart3, CalendarDays, GraduationCap } from 'lucide-react'
import { curriculumOverview } from '@/lib/site-content'

const metrics = [
  {
    icon: CalendarDays,
    end: 2019,
    prefix: '',
    suffix: '',
    title: 'Established',
    body: 'A purposeful beginning in May 2019.',
  },
  {
    icon: GraduationCap,
    end: 9,
    prefix: 'Grade ',
    suffix: '',
    title: 'Current learning cap',
    body: 'Learner-centered growth from PP1 through Grade 9.',
  },
  {
    icon: BarChart3,
    end: 2,
    prefix: '',
    suffix: '',
    title: 'National assessment pathways',
    body: 'KPSEA and KJSEA performance remains strong and consistent.',
  },
] as const

export default function StatisticsSection() {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)
  const [counts, setCounts] = useState(metrics.map(() => 0))

  const targetValues = useMemo(() => metrics.map((item) => item.end), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
        }
      },
      { threshold: 0.25 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!active) {
      return
    }

    const duration = 1400
    const start = performance.now()
    let frame = 0

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCounts(targetValues.map((value) => Math.round(value * eased)))

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frame)
  }, [active, targetValues])

  return (
    <section ref={ref} className="section-pad relative">
      <div className="page-shell">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <div className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              By the numbers
            </span>
            <h2 className="section-title mt-5">
              Clear growth markers for a school steadily building depth and confidence.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              From its May 2019 start to its current Junior School pathway, the school
              continues to expand its reach while maintaining attention to strong
              learner outcomes.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {metrics.map((metric, index) => (
                <article key={metric.title} className="surface-card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-3xl font-semibold text-slate-950 sm:text-4xl">
                    {metric.prefix}
                    {counts[index]}
                    {metric.suffix}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">
                    {metric.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{metric.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden p-8 sm:p-10">
            <div className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              Excellent KPSEA / KJSEA performance
            </div>
            <h3 className="mt-5 text-3xl font-semibold text-slate-950">
              Assessment confidence grounded in real learner progress.
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {curriculumOverview.assessment}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-emerald-100 bg-emerald-50/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  National assessments
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">KPSEA and KJSEA</p>
              </div>
              <div className="rounded-[1.6rem] border border-blue-100 bg-blue-50/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Outcome direction
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  Most learners place above expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
