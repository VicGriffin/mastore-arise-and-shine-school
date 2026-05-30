'use client'

import { type FormEvent, useState } from 'react'
import Image from 'next/image'
import {
  AlertCircle,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from 'lucide-react'
import Button from '@/components/common/Button'
import { contactCards, inquiryTypes, siteConfig } from '@/lib/site-content'

type FormState = {
  name: string
  email: string
  phone: string
  learnerLevel: string
  subject: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  learnerLevel: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setFormData(initialState)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative overflow-hidden px-3 pt-2 sm:px-5">
        <div className="page-shell relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-slate-950">
          <Image
            src="/images/mastore school bus.jfif"
            alt="School transport at Mastore Arise and Shine School"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />

          <div className="relative max-w-4xl px-6 py-14 sm:px-8 lg:px-12 lg:py-[4.5rem]">
            <span className="section-kicker border-white/20 bg-white/10 text-sky-100">
              Parent and admissions contact
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Ask questions, plan a visit, or begin an admission conversation.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Reach the school team for admissions support, academic information, school
              tours, and community engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="page-shell grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <div key={card.title} className="flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                {card.title}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-slate-950">{card.value}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="page-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="surface-panel p-8 sm:p-10">
            <span className="section-kicker bg-blue-50 text-blue-700">
              Visit the school
            </span>
            <h2 id="visit-us" className="section-title mt-5">
              Friendly admissions support during official school hours.
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                <div>
                  <p className="font-semibold text-slate-950">Location</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                <div>
                  <p className="font-semibold text-slate-950">Operating hours</p>
                  <div className="mt-2 space-y-1 text-sm leading-7 text-slate-600">
                    {siteConfig.hours.map((hour) => (
                      <p key={hour}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700" />
                <div>
                  <p className="font-semibold text-slate-950">Direct contact</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{siteConfig.phone}</p>
                  <p className="text-sm leading-7 text-slate-600">{siteConfig.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                Before your visit
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Share your learner&apos;s level, academic interests, and preferred visit
                day so the team can prepare a helpful admissions conversation.
              </p>
            </div>
          </aside>

          <div id="inquiry-form" className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Admissions inquiry form
                </p>
                <h2 className="text-2xl font-semibold text-slate-950">
                  Tell us how we can help.
                </h2>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Parent or guardian name
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, name: event.target.value }))
                      }
                      className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-11 py-3.5 text-slate-950 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Email address
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, email: event.target.value }))
                      }
                      className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-11 py-3.5 text-slate-950 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none"
                      placeholder="name@example.com"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Phone number
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData((current) => ({ ...current, phone: event.target.value }))
                      }
                      className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-11 py-3.5 text-slate-950 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Learner level
                  <select
                    name="learnerLevel"
                    value={formData.learnerLevel}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        learnerLevel: event.target.value,
                      }))
                    }
                    className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 focus:border-blue-300 focus:outline-none"
                  >
                    <option value="">Select level</option>
                    <option value="Play Group - PP2">Play Group - PP2</option>
                    <option value="Grade 1 - Grade 3">Grade 1 - Grade 3</option>
                    <option value="Grade 4 - Grade 6">Grade 4 - Grade 6</option>
                    <option value="Grade 7 - Grade 9">Grade 7 - Grade 9</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Inquiry type
                <select
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, subject: event.target.value }))
                  }
                  className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 focus:border-blue-300 focus:outline-none"
                >
                  <option value="">Choose an inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  required
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  className="w-full rounded-[1.2rem] border border-slate-200 bg-white px-4 py-3.5 text-slate-950 placeholder:text-slate-400 focus:border-blue-300 focus:outline-none"
                  placeholder="Tell us about your learner, your questions, or your preferred visit plans."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending inquiry...' : 'Send Inquiry'}
                  <Send className="h-4 w-4" />
                </Button>
                <p className="text-sm text-slate-500">
                  We aim to respond within 24 hours.
                </p>
              </div>

              {status === 'success' ? (
                <div className="border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-700">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>
                      Inquiry received successfully. The school team will be in touch
                      soon.
                    </span>
                  </div>
                </div>
              ) : null}

              {status === 'error' ? (
                <div className="border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5" />
                    <span>
                      Something went wrong while sending your inquiry. Please try again
                      or contact the school directly.
                    </span>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
