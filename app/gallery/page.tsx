import type { Metadata } from 'next';
import { Cpu, BookOpen, Beaker, Trophy, Bus, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Mastore Arise & Shine School',
  description: 'Explore our state-of-the-art facilities including computer lab, library, science laboratory, sports facilities, and more.',
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
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">School Gallery</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore our state-of-the-art facilities designed to support quality education and student development.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Area */}
                  <div className={`relative h-64 bg-gradient-to-br ${facility.color} overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 text-white/30" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {facility.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-primary"
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

      {/* Facility Details Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Facility Highlights
          </h2>

          <div className="space-y-12">
            {/* Computer Lab Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Computer Lab</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our modern computer laboratory is equipped with high-performance computers running licensed software for programming, design, and digital literacy. Students from Grade 1 onwards develop essential ICT skills including coding, web design, and digital citizenship.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">20+ Modern Computers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">High-Speed Internet Connection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Professional ICT Instructor</span>
                  </li>
                </ul>
              </div>
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Cpu className="w-32 h-32 text-white/40" />
              </div>
            </div>

            {/* Library Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center order-2 md:order-1">
                <BookOpen className="w-32 h-32 text-white/40" />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-bold text-foreground mb-4">Library</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our well-stocked library provides a comprehensive collection of educational resources including reference books, novels, digital databases, and multimedia materials. It serves as a hub for research, quiet study, and independent learning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">1000+ Books & Resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Digital Research Databases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Qualified Librarian</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Science Lab Detail */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Science Laboratory</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our science laboratory is equipped with apparatus for chemistry, physics, and biology experiments. Students engage in hands-on learning, conducting investigations and validating scientific concepts through practical work.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Complete Lab Equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Safety Equipment & Protocols</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">Experienced Science Teachers</span>
                  </li>
                </ul>
              </div>
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Beaker className="w-32 h-32 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Activities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Sports & Physical Development
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Athletics</h3>
              <p className="text-sm text-muted-foreground">
                Track and field programs developing speed, endurance, and athletic skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Ball Games</h3>
              <p className="text-sm text-muted-foreground">
                Basketball, volleyball, and football promoting teamwork and coordination.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Swimming</h3>
              <p className="text-sm text-muted-foreground">
                Water safety and swimming lessons for all learners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Gymnastics</h3>
              <p className="text-sm text-muted-foreground">
                Flexibility and strength training through structured gymnastics programs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Martial Arts</h3>
              <p className="text-sm text-muted-foreground">
                Discipline, focus, and self-defense skills through martial arts training.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6">
              <Trophy className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Sports Days</h3>
              <p className="text-sm text-muted-foreground">
                Regular inter-house competitions and annual sports festivals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creative & Cultural Activities */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Creative & Cultural Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Visual Arts</h3>
              <p className="text-sm text-muted-foreground">
                Painting, drawing, sculpture, and mixed media for creative expression.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Music</h3>
              <p className="text-sm text-muted-foreground">
                Instrumental training, choir, and music theory for all learners.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Drama & Theatre</h3>
              <p className="text-sm text-muted-foreground">
                Acting, playwriting, and theatre productions for confidence building.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Dance</h3>
              <p className="text-sm text-muted-foreground">
                Contemporary and traditional dance forms for cultural expression.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Film & Media</h3>
              <p className="text-sm text-muted-foreground">
                Video production and media literacy for the digital age.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-200 p-6">
              <Palette className="w-8 h-8 text-pink-600 mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-2">Crafts & Design</h3>
              <p className="text-sm text-muted-foreground">
                Woodwork, textiles, and design projects combining art with functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
