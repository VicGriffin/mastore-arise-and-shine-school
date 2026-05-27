import { ArrowRight, CalendarRange, Send } from 'lucide-react'
import Button from '@/components/common/Button'
import { admissionsSteps, siteConfig } from '@/lib/site-content'

export default function CallToActionSection() {
  return (
    <section className="section-pad relative pt-8">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.4rem] bg-slate-950 px-6 py-10 text-white shadow-[0_45px_120px_-55px_rgba(15,23,42,0.8)] sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.32),transparent_35%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="section-kicker border-white/15 bg-white/10 text-sky-100">
                Admissions and school visits
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Invite your family into a school community built to nurture excellence
                and purpose.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Talk to the admissions team, book a tour, or begin an inquiry for your
                learner&apos;s next step at {siteConfig.shortName}.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact#inquiry-form" size="xl">
                  Start Enrollment Inquiry
                  <Send className="h-4 w-4" />
                </Button>
                <Button href="/contact#visit-us" variant="subtle" size="xl">
                  Schedule a Tour
                  <CalendarRange className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                What happens next
              </p>
              <div className="mt-6 space-y-4">
                {admissionsSteps.map((step, index) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-950 font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-200 pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
              <Button href="/academics" variant="ghost" size="lg" className="mt-8 text-sky-100 hover:bg-white/10 hover:text-white">
                Review academic pathways
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
