import { Quote, Star } from 'lucide-react'
import { academicLead } from '@/lib/site-content'

export default function TestimonialsSection() {
  return (
    <section className="section-pad relative">
      <div className="absolute inset-x-0 top-8 -z-10 h-80 bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="page-shell">
        <div className="px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="section-kicker bg-blue-50 text-blue-700">
                Welcome from the academic desk
              </span>
              <h2 className="section-title mt-5">
                A message centered on teaching excellence and holistic learner growth.
              </h2>
              <div className="mt-6 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            <div className="max-w-lg">
              <Quote className="h-10 w-10 text-blue-700" />
              <blockquote className="mt-6 text-xl leading-9 text-slate-700 sm:text-2xl">
                "{academicLead.quote}"
              </blockquote>
              <div className="mt-8 border-t border-slate-200 pt-6">
                <p className="text-lg font-semibold text-slate-950">{academicLead.name}</p>
                <p className="text-sm font-medium text-blue-700">{academicLead.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {academicLead.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
