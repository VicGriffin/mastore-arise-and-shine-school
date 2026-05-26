import Image from 'next/image'
import Link from 'next/link'
import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import {
  historyHighlights,
  navigationLinks,
  siteConfig,
} from '@/lib/site-content'

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/60 bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.24),transparent_32%)]" />

      <div className="page-shell relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.85fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-white/10">
                <Image
                  src="/LOGO/SCHOOL LOGO.jpg"
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                  {siteConfig.tagline}
                </p>
                <h2 className="text-lg font-semibold text-white">{siteConfig.shortName}</h2>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-300">
              {siteConfig.description}
            </p>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                School Motto
              </p>
              <p className="mt-2 font-semibold text-white">{siteConfig.motto}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Community Story
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              {historyHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Reach the School
            </h3>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-sky-300" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sky-300" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-sky-300" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-sky-300" />
                <div>
                  {siteConfig.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
