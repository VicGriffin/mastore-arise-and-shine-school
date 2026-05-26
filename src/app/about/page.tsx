import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, HeartHandshake, Landmark, ShieldCheck, Sparkles } from 'lucide-react'
import Button from '@/components/common/Button'
import {
  boardMembers,
  founders,
  historyTimeline,
  siteConfig,
} from '@/lib/site-content'

export const metadata: Metadata = {
  title: 'About the School',
  description:
    'Learn how Mastore Arise and Shine School grew from a community-rooted vision in May 2019 into a comprehensive Junior School with clear leadership and governance.',
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
        <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950">
          <Image
            src="/images/classes.jfif"
            alt="Learners in class at Mastore Arise and Shine School"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent_32%)]" />

          <div className="relative max-w-4xl px-6 py-14 sm:px-8 lg:px-12 lg:py-[4.5rem]">
            <span className="section-kicker border-white/20 bg-white/10 text-sky-100">
              About {siteConfig.shortName}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              A school founded on compassion, clear purpose, and steady leadership.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Established in {siteConfig.established}, the school was aimed at providing
              quality education and developing learners spiritually, socially, and
              academically.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="surface-panel p-8 sm:p-10">
              <span className="section-kicker bg-blue-50 text-blue-700">
                Historical foundations
              </span>
              <h2 className="section-title mt-5">
                The school grew from a community care mission into a structured learning
                institution.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  The school&apos;s core inspiration was sourced directly from a community
                  children&apos;s home previously established by Director Madam Florence
                  Kagendo and Manager Peter Murage to support vulnerable and needy
                  children.
                </p>
                <p>
                  Mr. Joseph Kamuto established the strong foundation and left during
                  the COVID-19 period. Leadership transitioned to the current
                  headteacher, Betty K. Njiru, under whom the school has grown from a
                  kindergarten to a comprehensive Junior School.
                </p>
                <p>
                  This journey continues to reflect the school motto,{' '}
                  <span className="font-semibold text-slate-950">
                    {siteConfig.motto}
                  </span>
                  , with strong support from governance, staff, and families.
                </p>
              </div>
            </article>

            <div className="grid gap-5">
              <article className="surface-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Mission
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">{siteConfig.mission}</p>
              </article>
              <article className="surface-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Vision
                </p>
                <p className="mt-3 text-base leading-8 text-slate-700">{siteConfig.vision}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell">
          <div className="surface-panel p-8 sm:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="section-kicker bg-blue-50 text-blue-700">
                  Leadership progression
                </span>
                <h2 className="section-title mt-5">
                  A timeline of the school&apos;s founding, transition, and growth.
                </h2>
              </div>
              <Button href="/contact#inquiry-form" variant="outline" size="lg">
                Contact the School
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {historyTimeline.map((item, index) => (
                <article key={item.title} className="surface-card p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-700">{item.period}</p>
                      <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              Founders and school leaders
            </span>
            <h2 className="section-title mt-5">
              The people who shaped the school&apos;s direction and continuity.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {founders.map((leader) => (
                <article key={leader.name} className="surface-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{leader.name}</h3>
                  <p className="mt-2 text-sm font-medium text-blue-700">{leader.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {leader.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <aside className="surface-card p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Landmark className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
              Board of Directors
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">
              Governance that backs academic growth and learner welfare.
            </h2>
            <div className="mt-8 space-y-4">
              {boardMembers.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 px-5 py-4"
                >
                  <p className="font-semibold text-slate-950">{member.name}</p>
                  <p className="text-sm text-blue-700">{member.role}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              The board continues to strengthen infrastructure development, academic
              improvement, and learner welfare as the school grows.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
