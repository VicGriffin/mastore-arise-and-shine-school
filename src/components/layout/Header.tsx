'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import Button from '@/components/common/Button'
import { navigationLinks, siteConfig } from '@/lib/site-content'

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div
          className={`overflow-hidden rounded-[2rem] border border-white/70 backdrop-blur-md transition duration-300 ${
            isScrolled
              ? 'bg-white/92 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.5)]'
              : 'bg-white/82 shadow-[0_20px_70px_-46px_rgba(37,99,235,0.4)]'
          }`}
        >
          <div className="hidden items-center justify-between border-b border-slate-200/80 px-5 py-3 lg:flex">
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-700" />
                {siteConfig.phone}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-700" />
                {siteConfig.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-700" />
                {siteConfig.location}
              </span>
            </div>
          </div>

          <nav className="flex items-center justify-between gap-4 px-4 py-4 sm:px-5">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <div className="soft-ring relative h-[3.25rem] w-[3.25rem] overflow-hidden rounded-2xl border border-white/80 bg-white">
                <Image
                  src="/LOGO/SCHOOL LOGO.jpg"
                  alt={`${siteConfig.name} logo`}
                  fill
                  sizes="52px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-950 sm:text-base">
                  {siteConfig.name}
                </p>
                <p className="truncate text-xs text-slate-500">
                  Motto: {siteConfig.motto}
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 lg:flex">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium ${
                      isActive
                        ? 'bg-blue-50 text-slate-950'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive ? (
                      <span className="absolute inset-x-5 bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-700 to-cyan-500" />
                    ) : null}
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:block">
              <Button href="/contact#inquiry-form" size="md">
                Book an Admission Tour
              </Button>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-md"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-x-3 top-[6.6rem] z-50 overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/94 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            <div className="space-y-1 px-4 py-4">
              {navigationLinks.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive
                        ? 'bg-blue-50 text-slate-950'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isActive ? 'bg-blue-700' : 'bg-slate-300'
                      }`}
                    />
                  </Link>
                )
              })}

              <div className="grid gap-3 px-1 pt-3">
                <Button
                  href="/contact#inquiry-form"
                  fullWidth
                  size="lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start an Inquiry
                </Button>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">{siteConfig.location}</p>
                  <p>{siteConfig.email}</p>
                  <p>{siteConfig.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
