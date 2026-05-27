import { ArrowRight, Compass, Flag, Gem } from 'lucide-react'
import Button from '@/components/common/Button'
import { siteConfig } from '@/lib/site-content'

const pillars = [
  {
    icon: Gem,
    label: 'Motto',
    title: siteConfig.motto,
    body: 'A daily standard that challenges learners to pursue excellence with discipline, care, and confidence.',
  },
  {
    icon: Flag,
    label: 'Mission',
    title: 'Mission-driven learning',
    body: siteConfig.mission,
  },
  {
    icon: Compass,
    label: 'Vision',
    title: 'Vision-led formation',
    body: siteConfig.vision,
  },
]

export default function AboutPreviewSection() {
  return (
    <section className="section-pad relative">
      <div className="absolute inset-x-0 top-20 -z-10 h-72 bg-[radial-gradient(circle,rgba(125,211,252,0.2),transparent_60%)]" />
      <div className="page-shell">
        <div>
          <div className="max-w-4xl">
            <span className="section-kicker">Mission, vision, and identity</span>
            <h2 className="section-title mt-5">
              The school story is anchored in purpose, compassion, and a clear sense of
              direction.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Since {siteConfig.established}, the school has combined spiritual,
              social, and academic development into one clear learning journey for
              every child.
            </p>
            <div className="mt-7">
              <Button href="/about" variant="outline" size="lg">
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {pillars.map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  {item.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
