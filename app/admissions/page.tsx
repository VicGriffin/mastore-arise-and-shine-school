'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Check, FileText, Calendar, DollarSign, Users, BookOpen, Clock, Phone, Mail } from 'lucide-react';
import Button from '@/components/Button';

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'What is the application timeline?',
      answer: 'We accept applications year-round. However, for placement in the next academic year, we recommend applying between January and May. Early applications receive priority consideration.'
    },
    {
      question: 'What is the admission assessment process?',
      answer: 'After initial application submission, students participate in a friendly assessment to determine appropriate grade placement. The assessment focuses on English, Mathematics, and reasoning skills. Results are discussed during the parent meeting.'
    },
    {
      question: 'Do you offer scholarship programs?',
      answer: 'Yes, we offer merit-based and need-based scholarships for deserving students. Applicants can request scholarship consideration during the application process. A separate assessment may be required.'
    },
    {
      question: 'What are the payment options?',
      answer: 'We offer flexible payment plans including termly, half-yearly, and annual payment options. Special arrangements can be made for families with financial constraints.'
    },
    {
      question: 'Can my child join mid-year?',
      answer: 'Yes, we allow mid-year admissions based on availability. Previous school records and a placement assessment are required to ensure smooth transition.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'Our average student-teacher ratio is 1:15, ensuring personalized attention and support for each student. This helps us maintain high academic standards and individual care.'
    }
  ];

  const grades = [
    { level: 'Play Group', age: '3-4 years', focus: 'Pre-literacy & numeracy foundations' },
    { level: 'Pre-Primary 1', age: '4-5 years', focus: 'Early learning & social development' },
    { level: 'Pre-Primary 2', age: '5-6 years', focus: 'Readiness for primary school' },
    { level: 'Grade 1-3', age: '6-9 years', focus: 'Foundation stage academics' },
    { level: 'Grade 4-6', age: '9-12 years', focus: 'Intermediate academics & leadership' },
    { level: 'Grade 7-9', age: '12-15 years', focus: 'Advanced academics & specialization' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground pt-24 md:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container-max text-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pretty">
              Join Our Learning Community
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Start your child&apos;s journey of academic excellence and holistic development today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="#application">
                <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-primary-foreground w-full sm:w-auto">
                  Begin Application
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
                  Request Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Application Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent, and student-friendly admission journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Complete Application',
                description: 'Fill out our online form with student and parent details.'
              },
              {
                step: 2,
                title: 'Submit Documents',
                description: 'Provide previous school reports and certificates.'
              },
              {
                step: 3,
                title: 'Assessment & Interview',
                description: 'Student assessment and parent interview.'
              },
              {
                step: 4,
                title: 'Enrollment',
                description: 'Complete payment and welcome to Mastore!'
              }
            ].map((item) => (
              <div key={item.step} className="relative group">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-border rounded-xl p-6 md:p-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div id="application" className="mt-16 bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-border rounded-xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Apply?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Complete our admission form to start the process. Our admissions team will review your application and contact you within 2-3 business days.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Online Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="section-padding bg-gradient-to-br from-white to-primary/2">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Grade Levels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve students from Play Group through Grade 9 with age-appropriate curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border-2 border-border hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{grade.level}</h3>
                    <p className="text-sm text-secondary">Ages {grade.age}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{grade.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fee Structure</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with flexible payment options to fit your family needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                category: 'Play Group & Pre-Primary',
                annual: 'KES 180,000',
                term: 'KES 60,000',
                includes: ['Curriculum delivery', 'Meals & snacks', 'Sports & activities', 'School events']
              },
              {
                category: 'Primary (Grades 1-6)',
                annual: 'KES 240,000',
                term: 'KES 80,000',
                includes: ['Curriculum delivery', 'Meals', 'Sports & clubs', 'STEAM programs', 'School trips']
              },
              {
                category: 'Junior Secondary (Grades 7-9)',
                annual: 'KES 300,000',
                term: 'KES 100,000',
                includes: ['Advanced curriculum', 'Meals', 'Sports & clubs', 'Lab sciences', 'Field trips']
              },
              {
                category: 'Additional Fees (Annual)',
                annual: '',
                term: '',
                includes: ['Registration: KES 5,000', 'Uniforms: KES 8,000-12,000', 'Textbooks: KES 10,000-15,000', 'Exams: KES 5,000']
              }
            ].map((fee, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-primary/5 border-2 border-border rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">{fee.category}</h3>
                {fee.annual && (
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Annual</p>
                      <p className="text-2xl font-bold text-primary">{fee.annual}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Per Term</p>
                      <p className="text-2xl font-bold text-accent">{fee.term}</p>
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  {fee.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-border rounded-xl p-6 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Scholarship & Financial Aid</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Merit-based and need-based scholarships are available for deserving students. Contact our admissions office for eligibility criteria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+254113634661" className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+254 113 634 661</span>
              </a>
              <a href="mailto:mariseshine4@gmail.com" className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mariseshine4@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-white">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about admissions and school operations.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-primary/5 transition-colors text-left group"
                >
                  <span className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8 border-t-2 border-border bg-primary/2">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section id="contact" className="section-padding bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Questions? We&apos;re Here to Help</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Our admissions team is ready to answer all your questions about our school, programs, and admission process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Phone className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-sm text-primary-foreground/80 mb-2">Call Us</p>
              <a href="tel:+254113634661" className="font-bold text-white hover:text-accent transition-colors">
                +254 113 634 661
              </a>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Mail className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-sm text-primary-foreground/80 mb-2">Email Us</p>
              <a href="mailto:mariseshine4@gmail.com" className="font-bold text-white hover:text-accent transition-colors">
                mariseshine4@gmail.com
              </a>
            </div>
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Calendar className="w-8 h-8 mx-auto mb-3 text-accent" />
              <p className="text-sm text-primary-foreground/80 mb-2">Open Day</p>
              <p className="font-bold text-white">June 15, 2026<br />10:00 AM - 2:00 PM</p>
            </div>
          </div>

          <Link href="/contact">
            <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-primary-foreground">
              Schedule Campus Tour
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
