import type { Metadata } from 'next';
import Image from 'next/image';
import { Cpu, BookOpen, Beaker, Trophy, Bus, Palette, Image as ImageIcon } from 'lucide-react';
import { mastoreGalleryItems } from '@/src/lib/site-content';
import GalleryGrid from '@/components/sections/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | Mastore Arise & Shine School',
  description: 'Explore our state-of-the-art facilities including computer lab, library, science laboratory, sports facilities, and more with our school moments catalog.',
};

export default function GalleryPage() {
  const facilities = [
    {
      title: 'Computer Lab',
      description: 'Modern, fully-equipped ICT facility with computers and software for digital literacy and coding education.',
      icon: Cpu,
      color: 'from-blue-400 to-blue-600',
      highlights: ['Latest computers', 'High-speed internet', 'Modern software', 'Coding courses'],
    },
    {
      title: 'Library',
      description: 'Extensive collection of books, digital resources, and quiet study spaces for research and learning.',
      icon: BookOpen,
      color: 'from-green-400 to-green-600',
      highlights: ['Reference books', 'Digital resources', 'Study areas', 'Reading programs'],
    },
    {
      title: 'Science Laboratory',
      description: 'Well-equipped lab with apparatus and equipment for practical science experiments and investigations.',
      icon: Beaker,
      color: 'from-purple-400 to-purple-600',
      highlights: ['Modern equipment', 'Safety gear', 'Experiment stations', 'Field kits'],
    },
    {
      title: 'Sports Facilities',
      description: 'Multi-purpose fields and courts for athletics, ball games, and physical education programs.',
      icon: Trophy,
      color: 'from-orange-400 to-orange-600',
      highlights: ['Playing fields', 'Basketball courts', 'Training programs', 'Competitive teams'],
    },
    {
      title: 'School Transport',
      description: 'Safe, reliable, and well-maintained vehicles for student transportation to and from school.',
      icon: Bus,
      color: 'from-red-400 to-red-600',
      highlights: ['Modern buses', 'Safety first', 'Trained drivers', 'Wide coverage'],
    },
    {
      title: 'Creative Studios',
      description: 'Dedicated spaces for arts, music, dance, and creative expression across all grade levels.',
      icon: Palette,
      color: 'from-pink-400 to-pink-600',
      highlights: ['Art studios', 'Music rooms', 'Drama space', 'Exhibition areas'],
    },
  ];

  return (
    <main className="bg-slate-50/50">
      {/* Page Header with Real School Campus Background */}
      <section className="relative bg-blue-955 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mastore/WhatsApp Image 2026-05-28 at 10.54.57.jpeg"
            alt="Mastore Arise & Shine School Campus View"
            fill
            priority
            className="object-cover object-center brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-955 via-slate-900/80 to-transparent" />
        </div>
        <div className="relative z-10 container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center gap-3">
            <ImageIcon className="w-12 h-12" /> School Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
            Explore our actual campus, learning moments, physical activities, and facilities supporting quality holistic education.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-white relative">
        <div className="container-max">
          <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Visual Journey
            </span>
            <h2 className="text-4xl font-bold text-foreground">Campus Moments</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore actual daily life at Mastore Arise & Shine School through our updated collection of student actions, studies, sports, and celebrations. Click any photo to see it in high definition.
            </p>
          </div>

          {/* Dynamic Gallery Grid (31 items with categories, state, lightbox, etc.) */}
          <GalleryGrid items={mastoreGalleryItems} />
        </div>
      </section>

      {/* Facilities Quick Grid */}
      <section className="section-padding bg-slate-50/70 border-t border-slate-100">
        <div className="container-max">
          <div className="text-center mb-16 space-y-4 max-w-2xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Our Infrastructure
            </span>
            <h2 className="text-4xl font-bold text-foreground">Supportive Learning Facilities</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We provide state-of-the-art facilities that serve as critical tools for standard educational growth and pupil welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className={`relative h-56 bg-gradient-to-br ${facility.color} overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {facility.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="px-6 pb-6 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {facility.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-primary border border-blue-100"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility Details Section - Featuring Actual School Images */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Detailed Facility Highlights
          </h2>

          <div className="space-y-20 max-w-5xl mx-auto">
            {/* Computer Lab Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Computer Laboratory</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our modern computer laboratory is equipped with high-performance computers running licensed software for programming, design, and digital literacy. Students from Grade 1 onwards develop essential ICT skills including coding, web design, and digital citizenship.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">20+ Modern Computers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">High-Speed Internet Connection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Professional ICT Instructor</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.023.jpeg"
                  alt="Actual Computer Lab Session at Mastore Arise & Shine"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 500px, 100vw"
                />
              </div>
            </div>

            {/* Library Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group order-2 lg:order-1">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.03.jpeg"
                  alt="Actual School Library at Mastore Arise & Shine"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 500px, 100vw"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-foreground">School Library</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our well-stocked library provides a comprehensive collection of educational resources including reference books, novels, digital databases, and multimedia materials. It serves as a hub for research, quiet study, and independent learning.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">1000+ Books & Resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Digital Research Databases</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Qualified Librarian</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Science Lab Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Science Laboratory</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Our science laboratory is equipped with apparatus for chemistry, physics, and biology experiments. Students engage in hands-on learning, conducting investigations and validating scientific concepts through practical work.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Complete Lab Equipment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Safety Equipment & Protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">✓</span>
                    <span className="text-sm font-semibold text-foreground">Experienced Science Teachers</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-slate-50 group">
                <Image
                  src="/images/mastore/WhatsApp Image 2026-05-28 at 10.48.02.jpeg"
                  alt="Actual Science Lab Practical at Mastore Arise & Shine"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(min-width: 1024px) 500px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
