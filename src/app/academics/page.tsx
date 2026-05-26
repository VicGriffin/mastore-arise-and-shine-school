import Image from 'next/image'
import {
  ArrowRight,
  BookText,
  BrainCircuit,
  Languages,
  MonitorSmartphone,
  Sparkles,
  Sprout,
  Users2,
} from 'lucide-react'
import Button from '@/components/common/Button'
import {
  academicLead,
  academicPhases,
  curriculumOverview,
  learnerSkills,
  learningTracks,
} from '@/lib/site-content'

const icons = [Languages, Sprout, BookText, MonitorSmartphone, Sparkles]

export default function AcademicsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
        <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950">
          <Image
            src="/images/computer lab.jfif"
            alt="Computer learning at Mastore Arise and Shine School"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.26),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.2),transparent_34%)]" />

          <div className="relative grid gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-[4.5rem]">
            <div className="max-w-3xl">
              <span className="section-kicker border-white/20 bg-white/10 text-sky-100">
                Academics at a glance
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                A CBC learning pathway designed for competence, confidence, and
                character.
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-200 sm:text-lg">
                {curriculumOverview.framework}
              </p>
            </div>

            <div className="self-end rounded-[2rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-100">
                Senior Teacher i/c of Academics
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{academicLead.name}</h2>
              <p className="mt-2 text-sm font-medium text-sky-100">{academicLead.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">{academicLead.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="page-shell grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              Learner-centered framework
            </span>
            <h2 className="section-title mt-5">
              The school fully embraces the Kenya Institute of Curriculum Development
              Competency-Based Curriculum.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {curriculumOverview.scope}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Focus areas
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Talents, abilities, values, and practical skills are developed together
                  rather than in isolation.
                </p>
              </div>
              <div className="surface-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Teacher-parent partnership
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Teachers and parents work closely to support holistic growth and guide
                  learners toward responsible independence.
                </p>
              </div>
            </div>
          </article>

          <article className="surface-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/library.jfif"
                alt="Learners in the library"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Academic culture
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">
                Teaching and learning that stays practical, values-led, and responsive.
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The academic sector supports excellence in teaching and learning, guides
                learners, and keeps the school environment ready for both strong
                performance and long-term growth.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell">
          <div className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              Scope from PP1 to Grade 9
            </span>
            <h2 className="section-title mt-5">
              Structured phases that carry learners from early foundations to Junior
              School readiness.
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {academicPhases.map((phase) => (
                <article key={phase.level} className="surface-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    {phase.level}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {phase.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningTracks.map((track, index) => {
              const Icon = icons[index]

              return (
                <article key={track.title} className="surface-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-slate-950">{track.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
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
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              Core learner skills
            </span>
            <h2 className="section-title mt-5">
              Creativity, logic, teamwork, and communication are built into daily
              learning.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {learnerSkills.map((skill) => (
                <article key={skill.title} className="surface-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <BrainCircuit className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{skill.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {skill.description}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="surface-card p-8 sm:p-10">
            <div className="rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
              French programme and assessments
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-slate-950">
              International communication and strong outcomes move together.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                French is offered from Grade 1 to Grade 9 to build international
                communication skills and broaden learner confidence beyond the classroom.
              </p>
              <p>{curriculumOverview.assessment}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#inquiry-form" size="lg">
                Ask About Admissions
              </Button>
              <Button href="/gallery" variant="outline" size="lg">
                See School Life
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-8 rounded-[1.6rem] border border-slate-200 bg-slate-50/80 p-5">
              <div className="flex items-start gap-3">
                <Users2 className="mt-1 h-5 w-5 text-blue-700" />
                <p className="text-sm leading-7 text-slate-600">
                  Parents are key partners in the academic process, helping teachers
                  reinforce values, routines, and learner confidence at every stage.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
